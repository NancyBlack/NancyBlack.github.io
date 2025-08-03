+++
alwaysopen = false
title = "C盘清理"
description = "C盘红啦"
categories = ["Programming"]
tags = ["Win10"]
weight = 2
+++
<p align="right">2025-08-03   11:12:36</p>

定期删一下C盘里的冗余文件。先记录一下，C盘一共118G，仅作了磁盘清理，未清理之前42.6G可用。

## Windows

这是占用最大的一个文件夹，31.3G。里面三巨头：WinSxS-10.8G、System32-6.9G和assembly-4.0G。属于系统必要文件，没有什么我这种小白能直接删除的文件。搜了各种压缩方法，没啥太大意义，过。

## User

### AppData

23.5G。几乎所有软件的配置、缓存、数据都藏在这。它下面又分 3 个子目录：

#### Local

浏览器缓存、Steam下载缓存、Visual Studio 临时文件、NVIDIA
着色器缓存等，可删 Local$\backslash$Temp
全部文件（开机后自动再生）4.2G。这里还有很多已经删除的软件剩余的文件夹，如果确认已经完全卸载可删。

这是我电脑里一些不建议手动删除的文件：

.IdentityService、IdentityNexusIntegration：微软、企业、学校等账户信息，可删，重新登陆重新生成。

Application Data：指向
AppData$\backslash$Roaming，相当于一个快捷方式，不可动！

CEF： Chromium Embedded
Framework，谷歌开源的"浏览器内核外壳"，被大量软件嵌入用来显示网页界面，比如微信、QQ、网易云音乐、MATLAB、Foxmail、OBS
等都在用[\[知乎\]](https://zhuanlan.zhihu.com/p/520419876)。里面的 .bdic
文件是拼写检查字典，可删，但下次启动对应程序会重新下载；整个 CEF
文件夹不建议手动删除，否则会导致依赖它的软件打不开或报错。

Comms：Windows
mail的账户，可能是某次意外打开了，可删，下次再用会自动生成。

ConnectedDevicesPlatform：历史记录与跨设备同步，可删，重新匹配重新生成。

CrashDumps：Windows存放程序崩溃时生成的内存转储文件（.dmp）
的地方，维修人员用，可删。此电脑→属性→高级系统设置→
"启动和故障恢复"→设置→"写入调试信息"改成"无"→确定，
之后再崩溃也不会再往这里写 dump 文件。

D3DSCache：保存游戏或图形程序已经编译过的着色器（shader），下次再运行同一程序时可直接读取，减少加载时间和卡顿，可删，下次首次加载可能会变慢，重新生成。

FCLogin：腾讯应用的统一扫码登录组件缓存。可删，重新登录时会自动重建。

IconCache.db：给资源管理器"提前缓存图标"的单一文件，把 EXE、DLL、ICO
里的图标预先画好缩略图并存在一起，这样打开文件夹时就不用反复读取源文件，速度更快。删除后资源管理器会自动重新生成，不影响系统启动。

PlaceholderTileLogoFolder：「开始菜单磁贴」提前准备或缓存的占位图标文件夹。

Resmon.ResmonCfg： Windows资源监视器(Resource
Monitor)生成的配置文件，用来保存你在资源监视器里自定义的列宽、排序方式等界面设置。可以删除：删掉后只是恢复默认视图，不会影响系统功能。

ServiceHub：Visual Studio 2017/2019/2022 的后台服务总线目录，里面包含
ServiceHub.Host.CLR.x86.exe
等进程文件，用于实时单元测试、代码镜头（CodeLens）、索引服务等高阶功能，不可删。

SolidDocuments：PDF 转换/编辑功能的软件转换过程中生成的临时
PDF、缩略图和日志，删除后不影响已转换的文件；下次再用对应软件时会自动重建。

speech：Windows 语音识别人工智能模块。

#### LocalLow

低权限运行软件的数据（Unity Web
Player、一些国产网游）通常不大，可删同名缓存文件夹

#### Roaming

微信/QQ 聊天记录、JetBrains IDE 配置、VS Code 插件、Git 全局设置

后两个最好只删除确定卸载的软件，Cache/Temp/Log
这类纯缓存，剩下别动。清完了剩余17.2G。

## Program Files

Program Files → 64 位软件默认地址

Program Files (x86) → 32 位软件默认地址

同上除了确定卸的最好别动。

## 零散文件

\$WINRE_BACKUP_PARTITION.MARKER：与 Windows
恢复环境（WinRE）相关的标记文件，用于标识恢复分区的备份信息，确保系统在出现问题时能正常进入恢复模式进行修复。不建议删除。

appverifUI.dll：应用程序验证器的用户界面相关动态链接库文件，应用程序验证器用于帮助开发者检测和调试应用程序中的错误。不建议删除。

DumpStack.log 和
DumpStack.log.tmp：这些是系统或程序崩溃时生成的堆栈转储日志文件，可以删除。

logUploaderSettings.ini 和
logUploaderSettings_temp.ini：存储OneDrive的相关配置信息，可删。

SangforCSClient_2023626.log：深信服（Sangfor）客户端生成的日志文件，记录了该客户端的运行情况、操作记录等信息，用于排查客户端使用过程中出现的问题。可以删除。

stun_v2.dat和tvdlps.dat：腾讯视频生成的文件，删。

swapfile.sys 作用：这是 Windows
系统的交换文件，类似于虚拟内存，当物理内存不足时，系统会将部分不常用的数据存储到该文件中，以释放物理内存，保证系统和程序的正常运行。不可以删除。C盘实在空间不足可以移至它盘。

vfcompat.dll：Visual Studio
相关的动态链接库文件（DLL），主要用于支持兼容性测试。暂不动，有时间看看能不能移到其他盘。

删删减减，最终可用变为52.9G，一共删了大概10.3G吧。