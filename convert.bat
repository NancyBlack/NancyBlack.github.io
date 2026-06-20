@echo off
setlocal enabledelayedexpansion

:: 定义基础路径
:: 源文件目录
set "source_base=F:\My_Vault\fknote_source"
:: hugo命令目录
set "site_base=content"
:: 网站根目录
set "hugo_site_dir=F:\My_Site\fksite"

:: 检测是否通过拖放操作启动
if "%~1" neq "" (
    set "dropped_file=%~1"
    goto process_dropped_file
)

:: 交互模式（双击运行）
:interactive_mode
cls
echo 欢迎使用 LaTeX 到 Hugo Markdown 转换工具
echo ========================================
echo.
set /p basename="请输入文章基本名称（不含扩展名）: "
if "!basename!"=="" (
    echo 错误：名称不能为空！
    pause
    goto interactive_mode
)

set "tex_file=!basename!.tex"
if not exist "!tex_file!" (
    echo 错误：找不到文件 !tex_file!
    echo 请确保文件位于当前目录
    pause
    goto interactive_mode
)
set "md_file=!basename!.md"
goto convert_file

:: 处理拖放的文件
:process_dropped_file
:: 移除路径可能的引号
set "dropped_file=!dropped_file:"=!"

:: 验证拖放的文件
if not exist "!dropped_file!" (
    echo 错误：文件不存在 - !dropped_file!
    pause
    exit /b 1
)

:: 检查扩展名
set "ext=%~x1"
if /i not "!ext!"==".tex" (
    echo 错误：只支持.tex文件 - !dropped_file!
    pause
    exit /b 1
)

:: 设置转换参数
set "tex_file=!dropped_file!"
set "md_file=%~dpn1.md"

:convert_file
:: 显示转换信息
echo.
echo ===========================================
echo 正在转换: !tex_file!
echo 输出到: !md_file!
echo 使用过滤器: math-delim.lua
echo ===========================================
echo.

:: 执行转换
pandoc --wrap=none -s "!tex_file!" -o "!md_file!" --lua-filter=math_delim.lua 

:: 检查Pandoc转换结果
if errorlevel 1 (
    echo.
    echo Pandoc转换失败！错误代码: !errorlevel!
    echo 可能原因：
    echo   - Pandoc 未正确安装
    echo   - Lua过滤器不在Pandoc搜索路径
    echo   - LaTeX文件有语法错误
    pause
    exit /b 1
) 

if not exist "!md_file!" (
    echo.
    echo 错误：Pandoc未生成输出文件！
    pause
    exit /b 1
)

echo.
echo Pandoc转换成功！
echo 输出文件: !md_file!
for %%F in ("!md_file!") do echo 文件大小: %%~zF 字节

:: 执行图片格式替换
echo.
echo ===========================================
echo 正在处理图片格式替换...
echo ===========================================
echo.

:: 使用临时文件处理图片替换
set "temp_file=%temp%\%random%.md"
copy "!md_file!" "!temp_file!" >nul

powershell -Command "$content = Get-Content '!temp_file!' -Encoding UTF8 -Raw; $content = $content -replace '(?m)^!\[.*?]\((.*?)\)\{.*?(width=\".*?\").*\}', '<img src=\"$1.png\" $2 />'; Set-Content '!temp_file!' $content -Encoding UTF8"

if errorlevel 1 (
    echo.
    echo 图片格式替换失败！
    del "!temp_file!" 2>nul
    pause
    exit /b 1
)

copy /y "!temp_file!" "!md_file!" >nul
del "!temp_file!" 2>nul
echo.
echo 图片格式替换成功！

:: 执行标题级别替换（所有标题降一级）
echo.
echo ===========================================
echo 正在调整标题级别（所有标题降一级）...
echo ===========================================
echo.

:: 使用临时文件处理标题替换
set "temp_file=%temp%\%random%.md"
copy "!md_file!" "!temp_file!" >nul

powershell -Command "$content = Get-Content '!temp_file!' -Encoding UTF8 -Raw; $content = $content -replace '(?m)^(#+)(?= )', '$1#'; Set-Content '!temp_file!' $content -Encoding UTF8"

if errorlevel 1 (
    echo.
    echo 标题级别调整失败！
    del "!temp_file!" 2>nul
    pause
    exit /b 1
)

copy /y "!temp_file!" "!md_file!" >nul
del "!temp_file!" 2>nul
echo.
echo 标题级别调整成功！

:: 计算并输出网页文件目标位置
:: 使用更可靠的方法提取相对路径
for %%I in ("!tex_file!") do (
    set "tex_dir=%%~dpI"
    set "tex_name=%%~nxI"
)
set "tex_dir=!tex_dir:~0,-1!"

:: 移除基础路径部分
set "relative_path=!tex_dir:%source_base%\=!"

:: 网页文章路径
set "target_path=%hugo_site_dir%\content\!relative_path!\_index.md"
set "target_path=!target_path:\=/!"
set "md_file=!md_file:\=/!"

:: 拼接Hugo内容路径
set "hugo_content_path=%site_base%\!relative_path!\_index.md"
:: 将反斜杠替换为正斜杠
set "hugo_content_path=!hugo_content_path:\=/!"

:: 切换到Hugo站点目录并执行hugo new命令
echo.
echo ===========================================
echo 正在创建Hugo页面...
echo ===========================================
echo.

:: 保存当前目录
set "current_dir=%cd%"

:: 切换到Hugo站点目录
cd /d "!hugo_site_dir!"

:: 执行hugo new命令
echo 执行: hugo new "!hugo_content_path!"
hugo new "!hugo_content_path!"

:: 切换回原目录
cd /d "!current_dir!"

:: 提取转换后文件中的标题并替换Hugo文件中的标题
echo.
echo ===========================================
echo 正在同步标题...
echo ===========================================
echo.

:: 使用临时变量存储路径（将正斜杠转回反斜杠供PowerShell使用）
set "md_file_ps=!md_file:/=\!"
set "target_path_ps=!target_path:/=\!"

:: 检查文件是否存在
if not exist "!md_file_ps!" (
    echo 错误: 转换文件不存在
    pause
    goto :end_sync
)

if not exist "!target_path_ps!" (
    echo 错误: 目标文件不存在
    pause
    goto :end_sync
)

:: 从转换后的文件中提取标题
echo 正在提取标题...
set "extracted_title="
for /f "delims=" %%a in ('powershell -Command "$content = Get-Content '!md_file_ps!' -Encoding UTF8; $line = $content | Where-Object { $_ -match '^title: ' }; if ($line) { $line.Split(':')[1].Trim() }" 2^>^&1') do (
    set "extracted_title=%%a"
)

if defined extracted_title (
    echo 提取的标题: !extracted_title!
    
    :: 替换Hugo文件中的标题
    echo 正在替换标题...
    powershell -Command "$content = Get-Content '!target_path_ps!' -Encoding UTF8; $content = $content -replace '(title = \"").*?(\"")', ('$1' + '%extracted_title%' + '$2'); Set-Content '!target_path_ps!' $content -Encoding UTF8" 2>&1
    
    if !errorlevel! equ 0 (
        echo 标题已同步: !extracted_title!
    ) else (
        echo 错误: 标题替换失败
        pause
    )
) else (
    echo 警告: 无法从转换文件中提取标题
    echo 正在检查文件内容...
    type "!md_file_ps!" | head -5
    pause
)

:end_sync

:: 复制转换后的内容到Hugo页面
echo.
echo ===========================================
echo 正在复制内容到Hugo页面...
echo ===========================================
echo.

echo !target_path_ps!
echo !md_file_ps!

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference='Stop';" ^
  "; $targetPath='%target_path_ps%'; $mdPath='%md_file_ps%';" ^
  "$target=Get-Content -Raw -Encoding UTF8 $targetPath;" ^
  "$md=Get-Content -Raw -Encoding UTF8 $mdPath;" ^
  "$lines=$md -split \"`r?`n\";" ^
  "$count=0; $bodyLines=@(); foreach($l in $lines){ if($l -match '^---\s*$'){ $count++ ; continue }; if($count -ge 2){ $bodyLines+=$l } };" ^
  "$body=($bodyLines -join \"`r`n\").TrimStart();" ^
  "if($target -match '(?i)this is a new page'){ $updated=[regex]::Replace($target,'(?im)^.*this is a new page.*$', $body) } else { $updated=[regex]::Replace($target,'(?is)(<p\s+align=""right"">.*?</p>\s*)', { param($m) $m.Groups[1].Value + $body },1) };" ^
  "$bytes=[System.Text.Encoding]::UTF8.GetBytes($updated);" ^
  "[System.IO.File]::WriteAllBytes($targetPath,$bytes);"

if errorlevel 1 (
  echo [FAILED] 合并失败
) else (
  echo [OK] 合并完成：%target_path_ps%
)

:: 完成提示
echo.
if "%~1" neq "" (
    echo 所有转换和Hugo页面创建完成！
    timeout /t 600 >nul
) else (
    echo 所有操作完成！按任意键退出...
    pause >nul
)