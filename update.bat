@echo off
chcp 65001 > nul
echo Starting site update...

REM 第一步：更新主分支（源码）
echo Updating main branch...
git add .
git commit -m "Update site"
git push origin main

REM 第二步：生成静态网站
echo Generating static site...
hugo

REM 第三步：更新gh-pages分支（网站内容）
echo Updating gh-pages branch...
cd public
git add .
git commit -m "Update site"
git push -f origin gh-pages
cd ..

REM 完成提示
echo.
echo Update completed!
echo The site may take 1-5 minutes to update.
echo Visit: https://nancyblack.github.io/
pause