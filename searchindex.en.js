var relearn_searchindex = [
  {
    "breadcrumb": "Math",
    "content": "2024-12-26 20:43:26\n公理之下，欧式不朽(_)",
    "description": "欧氏几何够我看一辈子",
    "tags": [
      "Math",
      "Matlab"
    ],
    "title": "Axiom",
    "uri": "/math/axiom/index.html"
  },
  {
    "breadcrumb": "Technology",
    "content": "2025-12-24 21:57:21\n工作了开始接触电池，从头来吧\n电池容量",
    "description": "电池越来越不经用了",
    "tags": [
      "BAT"
    ],
    "title": "BATTERY",
    "uri": "/technology/battery/index.html"
  },
  {
    "breadcrumb": "Technology \u003e STM32H7",
    "content": "2024-12-26 19:59:09\n看见的看不见的，反正没法说的bug",
    "description": "反正你总能遇到",
    "tags": [
      "STM32"
    ],
    "title": "BUG",
    "uri": "/technology/stm32h7/bug/index.html"
  },
  {
    "breadcrumb": "Programming",
    "content": "2024-12-26 20:13:11\n别说我不文明啊hugo的网址有符号会自己产生bug，他识别的居然不是字符串就神奇以后有机会的话研究研究\nC++与C中extern的异同extern",
    "description": "文明你我他",
    "tags": [
      "C++",
      "VS"
    ],
    "title": "C++",
    "uri": "/programming/c%E8%89%B9/index.html"
  },
  {
    "breadcrumb": "Programming \u003e C++",
    "content": "2026-06-21 01:50:12\nextern 关键字在 C 和 C++ 中的根本使命一致：声明一个具有外部链接的变量或函数，指出\"此符号定义在别处\"。\n共同点 声明与定义分离 extern int x; 仅是声明，不分配存储；若带初始化（如 extern int x = 1;）则为定义。\n函数默认 extern extern void f(); 与 void f(); 等效。\n块作用域引用 函数内可用 extern 声明引入全局变量。\n允许多次声明 同一变量可有多个 extern 声明，只要类型一致且无多重定义。\n核心差异 语言链接规范（extern \"C\"） C++：可用 extern \"C\" 指定 C 链接规则（无名字修饰），实现 C/C++ 互调。\nC：无此概念。\nextern \"C\" {\rvoid c_func(int);\rint c_var;\r}\rconst 全局变量的默认链接属性 C：文件作用域 const 变量默认外部链接。\nC++：文件作用域 const 变量默认内部链接（如同 static）。跨文件共享必须显式加 extern 定义。\nC 示例：\n/* file1.c */\rconst int N = 100; /* 外部链接 */\r/* file2.c */\rextern const int N; /* 正确 */\rC++ 示例：\n// file1.cpp\rextern const int N = 100; // 外部链接\r// file2.cpp\rextern const int N; // 引用\r暂定定义与 ODR C：文件作用域无初始化、无 extern 的声明是\"暂定定义\"。允许重复，最终合并为一个（初值0）。\nC++：严格执行一次定义规则（ODR），所有不带 extern 的变量声明即定义，重复则错误。跨文件共享必须在一个文件定义，其他文件用 extern 声明。\nC 示例：\nint a; // 暂定定义\rint a; // 合法\r模板显式实例化声明（C++ 独有） C++11 引入 extern template，用于抑制隐式实例化，C 无此用法。\nextern template class std::vector\u003cint\u003e;\rinline 函数与 extern C99：inline 函数默认不提供外部可链接定义。如需外部符号，用 extern inline 声明或另提供外部定义。\nC++：inline 函数默认具有外部链接，所有相同定义合并为一份，无需 extern。\nC99 示例：\ninline void f(void) { /* 仅内联 */ }\rextern inline void f(void); // 请求外部符号\r总结 特性 C C++ 基本语义 声明外部链接符号 同 C extern \"C\" 不支持 支持 const 全局默认链接 外部链接 内部链接，共享需 extern const 定义 暂定定义 允许 禁止（严格 ODR） extern template 无 有 inline 外部可见性 默认不可见，需 extern inline 默认可见 实践准则 头文件中 extern 声明变量，单源文件中定义。\nC++ 跨文件共享 const 常量：extern const int x = ...;。\n混合编程时，C++ 方用 extern \"C\" 包裹 C 函数声明。\n避免依赖默认链接属性或暂定定义，显式标注 extern 或 static。",
    "description": "extern",
    "tags": [
      "C++",
      "C"
    ],
    "title": "C++与C中extern的异同",
    "uri": "/programming/c%E8%89%B9/extern/index.html"
  },
  {
    "breadcrumb": "Programming \u003e Latex",
    "content": "2024-12-26 22:13:33\n在 LaTeX 中，article 文档类默认支持的字号仅限于 10pt（默认）、11pt 和 12pt。如果需要使用更大的字号，可以选择 extarticle 文档类，它扩展了字号的选择范围，支持 8pt、9pt、10pt（默认）、11pt、12pt、14pt、17pt 和 20pt 等多种字号设置。",
    "description": "我要大字！",
    "tags": [
      "Latex"
    ],
    "title": "Fontsize",
    "uri": "/programming/latex/fontsize/index.html"
  },
  {
    "breadcrumb": "Life",
    "content": "2024-12-26 20:53:51\n不一定好吃反正看着感兴趣的都扔进来。。。",
    "description": "都是食谱啦",
    "tags": [
      "Food"
    ],
    "title": "Food",
    "uri": "/life/food/index.html"
  },
  {
    "breadcrumb": "Technology",
    "content": "2024-12-26 19:51:44\n故事的起点，是野火的42JSF0AS-1000😏\n矢量控制这个六边形哪都能见到\nPid控制电机闭环啦",
    "description": "电机它转呀转不停",
    "tags": [
      "PMSM"
    ],
    "title": "PMSM",
    "uri": "/technology/pmsm/index.html"
  },
  {
    "breadcrumb": "",
    "content": "希望有天能手搓出一整套动力系统！干！\nBATTERY电池越来越不经用了\nPMSM电机它转呀转不停\nSTM32H7没有单片机电机怎么转",
    "description": "发工资先换把焊枪！",
    "tags": [],
    "title": "Technology",
    "uri": "/technology/index.html"
  },
  {
    "breadcrumb": "Changelog",
    "content": "2025-08-02 15:56:22\nVersion 0.0.0.241226 Hugo找的模板，部署在GitHub.io上，乱调一同总算有个样子，分了几个简单的板块，先跑起来再说。\nVersion 0.1.0.250801 终于有时间开始更新，这次添加了changelog模块记录一下网站的成长。\nVersion 0.1.1.250801 在主菜单栏显示当前版本。\nVersion 0.2.0.250822 传输中断，网页崩溃，重新建立，增加备份",
    "description": "我的第一个网页",
    "tags": [],
    "title": "VERSION 0",
    "uri": "/changelog/version1/index.html"
  },
  {
    "breadcrumb": "Programming \u003e Office",
    "content": "2024-12-27 17:02:35\n论文饶过谁",
    "description": "看标题",
    "tags": [
      "Office",
      "Word"
    ],
    "title": "Word",
    "uri": "/programming/office/word/index.html"
  },
  {
    "breadcrumb": "Technology \u003e PMSM \u003e Pid控制",
    "content": "2025-01-14 16:30:40\n基本模型 以简单的RL电路为例：\n\\[U(t)=Ri(t)+L\\dfrac{\\mathrm{d}i(t)}{\\mathrm{d}t}\\]拉氏变换后整理可得开环传递函数：\n$$G(s)=\\dfrac{I(s)}{U(s)}=\\dfrac{1}{Ls+R}=\\dfrac{\\dfrac{1}{R}}{\\dfrac{L}{R}+1}=\\dfrac{K}{Ts+1}(K=\\dfrac{1}{R},T=\\dfrac{L}{R})$$一阶惯性环节闭环传递函数标准形式\\(\\dfrac{1}{Ts+1}\\)，其中，$\\omega_c=\\dfrac{1}{T}$为一节惯性环节的截止频率，$T$为该环节的时间常数。\n截止频率：是指一个系统的输出信号能量开始大幅下降的边界频率（引自维基百科），输出信号幅值降至输入信号最大值的\\(\\dfrac{\\sqrt{2}}{2}\\)，相位滞后45°。\n在simulink中建模：\n不同频率输入测试 $0.1Hz$ 该惯性环节转折频率为$1 rad/s$，测试输入$0.1 rad/s$的正弦波信号：\n输出基本能够不失真的跟随输入，计算一下相位差：\n通过Cursor测量时间差$\\Delta T \\approx 1s$，此时正弦波周期$T = 2\\pi / 0.1 = 20\\pi$，所以两曲线相位差$\\Delta \\theta \\approx 1 / 20\\pi *2\\pi \\approx 0.1 rad \\approx 5.72^{\\circ}$。\n通过linearizer绘制Bode图如下：\n在Bode图中找到$0.1Hz$的相位：\n读出值为$-5.46^{\\circ}$与计算值$5.72^{\\circ}$基本一致（取点读数有误差）。\n$1Hz$ 观测转折频率正弦信号输入：\n可以看出输入输出波形之间有明显的相位差，通过Cursor读取差值：\n幅值明显降到$0.708 \\approx \\dfrac{\\sqrt{2}}{2}$，同样计算相位差$\\Delta = \\dfrac{0.817}{2\\pi}*2\\pi \\approx 0.817 rad \\approx 46.8^{\\circ}$。在Bode图中找到转折频率点：\n$-45^{\\circ}$与计算值$46.8^{\\circ}$基本一致。\n远高于转折频率 当输入频率分别为$10Hz$和$100Hz$时，输出信号出现明显失真：\n可以看出，当输入频率远高于转折频率时，输出信号完全失真，不再保留有效信号。\n不同转折频率的惯性环节 绘制转折频率分别为$0.1Hz$、$1Hz$和$10Hz$的一阶惯性环节Bode图：\n从左到右依次是$0.1Hz$、$1Hz$和$10Hz$。可以明显看出随着时间常数减小，转折频率增大，相频和幅频曲线均右移。\n开环增益对惯性环节的影响 分别绘制开环增益为0.1、1、10、100时$\\dfrac{K}{s+1}$的Bode图：\n从下到上依次为0.1、1、10、100，可以看出开环增益对相频曲线没有影响，但会使幅频曲线平行上移。这会导致幅频曲线与横轴的交点右移，从而使截止频率$\\omega_c$增大.\n\\[\rU(t)=Ri(t)+L\\dfrac{\\mathrm{d}i(t)}{\\mathrm{d}t}\r\\]\\[\rG(s)=\\dfrac{I(s)}{U(s)}=\\dfrac{1}{Ls+R}=\\dfrac{\\dfrac{1}{R}}{\\dfrac{L}{R}+1}=\\dfrac{K}{Ts+1}(K=\\dfrac{1}{R},T=\\dfrac{L}{R})\r\\]一阶惯性环节闭环传递函数标准形式\\(\\dfrac{1}{Ts+1}\\)，其中，\\(\\omega_c=\\dfrac{1}{T}\\)为一节惯性环节的截止频率，\\(T\\)为该环节的时间常\n截止频率：是指一个系统的输出信号能量开始大幅下降的边界频率（引自维基百科），输出信号幅值降至输入信号最大值的\\(\\dfrac{\\sqrt{2}}{2}\\)，相位 在simulink中建模：",
    "description": "2025-01-14 16:30:40\n基本模型 以简单的RL电路为例：\n\\[U(t)=Ri(t)+L\\dfrac{\\mathrm{d}i(t)}{\\mathrm{d}t}\\]拉氏变换后整理可得开环传递函数：\n$$G(s)=\\dfrac{I(s)}{U(s)}=\\dfrac{1}{Ls+R}=\\dfrac{\\dfrac{1}{R}}{\\dfrac{L}{R}+1}=\\dfrac{K}{Ts+1}(K=\\dfrac{1}{R},T=\\dfrac{L}{R})$$一阶惯性环节闭环传递函数标准形式\\(\\dfrac{1}{Ts+1}\\)，其中，$\\omega_c=\\dfrac{1}{T}$为一节惯性环节的截止频率，$T$为该环节的时间常数。\n截止频率：是指一个系统的输出信号能量开始大幅下降的边界频率（引自维基百科），输出信号幅值降至输入信号最大值的\\(\\dfrac{\\sqrt{2}}{2}\\)，相位滞后45°。\n在simulink中建模：\n不同频率输入测试 $0.1Hz$ 该惯性环节转折频率为$1 rad/s$，测试输入$0.1 rad/s$的正弦波信号：\n输出基本能够不失真的跟随输入，计算一下相位差：\n通过Cursor测量时间差$\\Delta T \\approx 1s$，此时正弦波周期$T = 2\\pi / 0.1 = 20\\pi$，所以两曲线相位差$\\Delta \\theta \\approx 1 / 20\\pi *2\\pi \\approx 0.1 rad \\approx 5.72^{\\circ}$。\n通过linearizer绘制Bode图如下：\n在Bode图中找到$0.1Hz$的相位：\n读出值为$-5.46^{\\circ}$与计算值$5.72^{\\circ}$基本一致（取点读数有误差）。\n$1Hz$ 观测转折频率正弦信号输入：\n可以看出输入输出波形之间有明显的相位差，通过Cursor读取差值：\n幅值明显降到$0.708 \\approx \\dfrac{\\sqrt{2}}{2}$，同样计算相位差$\\Delta = \\dfrac{0.817}{2\\pi}*2\\pi \\approx 0.817 rad \\approx 46.8^{\\circ}$。在Bode图中找到转折频率点：\n$-45^{\\circ}$与计算值$46.8^{\\circ}$基本一致。\n远高于转折频率 当输入频率分别为$10Hz$和$100Hz$时，输出信号出现明显失真：\n可以看出，当输入频率远高于转折频率时，输出信号完全失真，不再保留有效信号。\n不同转折频率的惯性环节 绘制转折频率分别为$0.1Hz$、$1Hz$和$10Hz$的一阶惯性环节Bode图：\n从左到右依次是$0.1Hz$、$1Hz$和$10Hz$。可以明显看出随着时间常数减小，转折频率增大，相频和幅频曲线均右移。\n开环增益对惯性环节的影响 分别绘制开环增益为0.1、1、10、100时$\\dfrac{K}{s+1}$的Bode图：",
    "tags": [
      "Simulink",
      "Pid"
    ],
    "title": "一阶惯性环节",
    "uri": "/technology/pmsm/pid-control/1st-order/index.html"
  },
  {
    "breadcrumb": "Programming \u003e Win10",
    "content": "2025-01-13 16:14:59\n在 Windows 操作系统中，最常见的打开方式是 Win+R，输入 CMD 来启动命令提示符，命令行的默认工作目录为C:\\Users\\Administrator\u003e。\nPowerShell打开方式是 Win+X 快捷键打开快捷菜单，选择 PowerShell 来启动 Windows PowerShell，默认目录同样为C:\\Users\\Administrator\u003e。\n但当想直接在当前文件夹打开命令行，可以有以下两种快捷方式：\n在文件资源管理器的地址栏中直接输入 cmd 或 powershell，然后回车，可在当前目录下打开相应的命令行工具； Shift+右键点击空白区域，选择 “在此处打开命令窗口” 或 “在此处打开 PowerShell 窗口”",
    "description": "2025-01-13 16:14:59\n在 Windows 操作系统中，最常见的打开方式是 Win+R，输入 CMD 来启动命令提示符，命令行的默认工作目录为C:\\Users\\Administrator\u003e。\nPowerShell打开方式是 Win+X 快捷键打开快捷菜单，选择 PowerShell 来启动 Windows PowerShell，默认目录同样为C:\\Users\\Administrator\u003e。\n但当想直接在当前文件夹打开命令行，可以有以下两种快捷方式：\n在文件资源管理器的地址栏中直接输入 cmd 或 powershell，然后回车，可在当前目录下打开相应的命令行工具； Shift+右键点击空白区域，选择 “在此处打开命令窗口” 或 “在此处打开 PowerShell 窗口”",
    "tags": [
      "Win10"
    ],
    "title": "快速打开命令行工具",
    "uri": "/programming/win10/%E5%BF%AB%E9%80%9F%E6%89%93%E5%BC%80%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7/index.html"
  },
  {
    "breadcrumb": "Technology \u003e BATTERY",
    "content": "2025-12-24 22:17:50\n库仑(Coulomb) 定义 库仑（符号：C）是国际单位制(SI)中电量的基本单位，定义为：1安培电流在1秒内所传输的电量。\n物理意义 库仑是电量的度量单位，表示电荷的多少。在电磁学中，电量是基本物理量之一，描述了物体所带电荷的数量。\n数学表达式 \\[\rQ = I \\times t\r\\]其中：\n\\(Q\\) 表示电量，单位为库仑(C)\n\\(I\\) 表示电流，单位为安培(A)\n\\(t\\) 表示时间，单位为秒(s)\n数值转换示例 \\[\rQ = 10\\,A \\times 5\\,s = 50\\,C\r\\]安时(Ampere-hour) 定义 安时（符号：Ah）是工程上常用的电量单位，表示1安培电流在1小时内所传输的电量。它是库仑的倍数单位，主要用于电池容量的计量。\n物理意义 安时将电流和时间结合起来，表示在一定时间内可以提供的恒定电流大小。在电池技术中，安时是衡量电池储存电荷能力的重要指标。\n数学表达式 \\[\rQ = I \\times t\r\\]其中：\n\\(Q\\) 表示电量，单位为安时(Ah)\n\\(I\\) 表示电流，单位为安培(A)\n\\(t\\) 表示时间，单位为小时(h)\n数值转换示例 \\[\rQ = 5\\,A \\times 2\\,h = 10\\,Ah\r\\]千瓦时(Kilowatt-hour) 定义 千瓦时（符号：kWh）是能量单位，表示功率为1千瓦的电器在1小时内所消耗的能量。在中国，千瓦时也被称为\"度\"，是电力公司计费的基本单位。\n物理意义 千瓦时将功率和时间结合起来，表示在一定时间内消耗或产生的总能量。它是衡量电能消耗的标准单位。\n数学表达式 \\[\rE = P \\times t = V \\times I \\times t\r\\]其中：\n\\(E\\) 表示能量，单位为千瓦时(kWh)\n\\(P\\) 表示功率，单位为千瓦(W)\n\\(V\\) 表示电压，单位为伏特(V)\n\\(I\\) 表示电流，单位为安培(A)\n\\(t\\) 表示时间，单位为小时(h)\n数值转换示例 \\[\rE = 2\\,W \\times 3\\,h = 6\\,kWh\r\\]库仑与安时的关系 转换原理 库仑和安时都是电量单位，它们之间的转换基于时间单位的换算关系：\n1小时 = 3600秒\n数学推导 \\[\r1\\,Ah = 1\\,A \\times 1\\,h = 1\\,A \\times 3600\\,s = 3600\\,C\r\\]因此，1安时 = 3600库仑\n数值转换示例 \\[\r5\\,Ah = 5 \\times 3600\\,C = 18,\\!000\\,C\r\\]安时与千瓦时的关系 转换原理 安时是电量单位，千瓦时是能量单位，它们之间的转换需要考虑电压因素：\n能量 = 电压 × 电量\n数学推导 \\[\r1\\,kWh = 1000\\,W \\times 1\\,h = 1000\\,V\\cdot A \\times 1\\,h = 1000\\,V\\cdot Ah\r\\]\\[\rE(kWh) = \\frac{V(V) \\times Q(Ah)}{1000}\r\\]数值转换示例 \\[\rE = \\frac{12\\,V \\times 100\\,Ah}{1000} = 1.2\\,kWh\r\\]库仑与千瓦时的关系 转换原理 库仑和千瓦时之间的转换需要同时考虑电压和时间因素：\n能量 = 电压 × 电流 × 时间\n电量 = 电流 × 时间\n因此，能量 = 电压 × 电量\n数学推导 \\[\r1\\,kWh = 1000\\,W \\times 1\\,h = 1000\\,V\\cdot A \\times 3600\\,\\ = 3.6 \\times 10^6\\,V\\cdot C\r\\]\\[\rE(kWh) = \\frac{V(V) \\times Q(C)}{3.6 \\times 10^6}\r\\]数值转换示例 \\[\rE = \\frac{12\\,V \\times 18,\\!000\\,C}{3.6 \\times 10^6} = 0.06\\,kWh\r\\]",
    "description": "2025-12-24 22:17:50\n库仑(Coulomb) 定义 库仑（符号：C）是国际单位制(SI)中电量的基本单位，定义为：1安培电流在1秒内所传输的电量。\n物理意义 库仑是电量的度量单位，表示电荷的多少。在电磁学中，电量是基本物理量之一，描述了物体所带电荷的数量。\n数学表达式 \\[\rQ = I \\times t\r\\]其中：\n\\(Q\\) 表示电量，单位为库仑(C)\n\\(I\\) 表示电流，单位为安培(A)\n\\(t\\) 表示时间，单位为秒(s)\n数值转换示例 \\[\rQ = 10\\,A \\times 5\\,s = 50\\,C\r\\]安时(Ampere-hour) 定义 安时（符号：Ah）是工程上常用的电量单位，表示1安培电流在1小时内所传输的电量。它是库仑的倍数单位，主要用于电池容量的计量。\n物理意义 安时将电流和时间结合起来，表示在一定时间内可以提供的恒定电流大小。在电池技术中，安时是衡量电池储存电荷能力的重要指标。\n数学表达式 \\[\rQ = I \\times t\r\\]其中：\n\\(Q\\) 表示电量，单位为安时(Ah)\n\\(I\\) 表示电流，单位为安培(A)\n\\(t\\) 表示时间，单位为小时(h)\n数值转换示例 \\[\rQ = 5\\,A \\times 2\\,h = 10\\,Ah\r\\]千瓦时(Kilowatt-hour) 定义 千瓦时（符号：kWh）是能量单位，表示功率为1千瓦的电器在1小时内所消耗的能量。在中国，千瓦时也被称为\"度\"，是电力公司计费的基本单位。\n物理意义 千瓦时将功率和时间结合起来，表示在一定时间内消耗或产生的总能量。它是衡量电能消耗的标准单位。\n数学表达式 \\[\rE = P \\times t = V \\times I \\times t\r\\]其中：",
    "tags": [],
    "title": "电池容量",
    "uri": "/technology/battery/batcap/index.html"
  },
  {
    "breadcrumb": "Technology \u003e PMSM",
    "content": "2024-12-26 19:59:09\nThis is a new page.",
    "description": "这个六边形哪都能见到",
    "tags": [
      "PMSM",
      "Simulink"
    ],
    "title": "矢量控制",
    "uri": "/technology/pmsm/vector-control/index.html"
  },
  {
    "breadcrumb": "Programming",
    "content": "2024-12-26 20:13:16\n我觉得和C艹大差不差",
    "description": "单片机跑不掉的",
    "tags": [
      "C",
      "VS"
    ],
    "title": "C",
    "uri": "/programming/c/index.html"
  },
  {
    "breadcrumb": "Programming \u003e Win10",
    "content": "2025-08-03 11:12:36\n定期删一下C盘里的冗余文件。先记录一下，C盘一共118G，仅作了磁盘清理，未清理之前42.6G可用。\nWindows 这是占用最大的一个文件夹，31.3G。里面三巨头：WinSxS-10.8G、System32-6.9G和assembly-4.0G。属于系统必要文件，没有什么我这种小白能直接删除的文件。搜了各种压缩方法，没啥太大意义，过。\nUser AppData 23.5G。几乎所有软件的配置、缓存、数据都藏在这。它下面又分 3 个子目录：\nLocal 浏览器缓存、Steam下载缓存、Visual Studio 临时文件、NVIDIA 着色器缓存等，可删 Local$\\backslash$Temp 全部文件（开机后自动再生）4.2G。这里还有很多已经删除的软件剩余的文件夹，如果确认已经完全卸载可删。\n这是我电脑里一些不建议手动删除的文件：\n.IdentityService、IdentityNexusIntegration：微软、企业、学校等账户信息，可删，重新登陆重新生成。\nApplication Data：指向 AppData$\\backslash$Roaming，相当于一个快捷方式，不可动！\nCEF： Chromium Embedded Framework，谷歌开源的\"浏览器内核外壳\"，被大量软件嵌入用来显示网页界面，比如微信、QQ、网易云音乐、MATLAB、Foxmail、OBS 等都在用\\[知乎\\]。里面的 .bdic 文件是拼写检查字典，可删，但下次启动对应程序会重新下载；整个 CEF 文件夹不建议手动删除，否则会导致依赖它的软件打不开或报错。\nComms：Windows mail的账户，可能是某次意外打开了，可删，下次再用会自动生成。\nConnectedDevicesPlatform：历史记录与跨设备同步，可删，重新匹配重新生成。\nCrashDumps：Windows存放程序崩溃时生成的内存转储文件（.dmp） 的地方，维修人员用，可删。此电脑→属性→高级系统设置→ “启动和故障恢复”→设置→“写入调试信息\"改成\"无”→确定， 之后再崩溃也不会再往这里写 dump 文件。\nD3DSCache：保存游戏或图形程序已经编译过的着色器（shader），下次再运行同一程序时可直接读取，减少加载时间和卡顿，可删，下次首次加载可能会变慢，重新生成。\nFCLogin：腾讯应用的统一扫码登录组件缓存。可删，重新登录时会自动重建。\nIconCache.db：给资源管理器\"提前缓存图标\"的单一文件，把 EXE、DLL、ICO 里的图标预先画好缩略图并存在一起，这样打开文件夹时就不用反复读取源文件，速度更快。删除后资源管理器会自动重新生成，不影响系统启动。\nPlaceholderTileLogoFolder：「开始菜单磁贴」提前准备或缓存的占位图标文件夹。\nResmon.ResmonCfg： Windows资源监视器(Resource Monitor)生成的配置文件，用来保存你在资源监视器里自定义的列宽、排序方式等界面设置。可以删除：删掉后只是恢复默认视图，不会影响系统功能。\nServiceHub：Visual Studio 2017/2019/2022 的后台服务总线目录，里面包含 ServiceHub.Host.CLR.x86.exe 等进程文件，用于实时单元测试、代码镜头（CodeLens）、索引服务等高阶功能，不可删。\nSolidDocuments：PDF 转换/编辑功能的软件转换过程中生成的临时 PDF、缩略图和日志，删除后不影响已转换的文件；下次再用对应软件时会自动重建。\nspeech：Windows 语音识别人工智能模块。\nLocalLow 低权限运行软件的数据（Unity Web Player、一些国产网游）通常不大，可删同名缓存文件夹\nRoaming 微信/QQ 聊天记录、JetBrains IDE 配置、VS Code 插件、Git 全局设置\n后两个最好只删除确定卸载的软件，Cache/Temp/Log 这类纯缓存，剩下别动。清完了剩余17.2G。\nProgram Files Program Files → 64 位软件默认地址\nProgram Files (x86) → 32 位软件默认地址\n同上除了确定卸的最好别动。\n零散文件 $WINRE_BACKUP_PARTITION.MARKER：与 Windows 恢复环境（WinRE）相关的标记文件，用于标识恢复分区的备份信息，确保系统在出现问题时能正常进入恢复模式进行修复。不建议删除。\nappverifUI.dll：应用程序验证器的用户界面相关动态链接库文件，应用程序验证器用于帮助开发者检测和调试应用程序中的错误。不建议删除。\nDumpStack.log 和 DumpStack.log.tmp：这些是系统或程序崩溃时生成的堆栈转储日志文件，可以删除。\nlogUploaderSettings.ini 和 logUploaderSettings_temp.ini：存储OneDrive的相关配置信息，可删。\nSangforCSClient_2023626.log：深信服（Sangfor）客户端生成的日志文件，记录了该客户端的运行情况、操作记录等信息，用于排查客户端使用过程中出现的问题。可以删除。\nstun_v2.dat和tvdlps.dat：腾讯视频生成的文件，删。\nswapfile.sys 作用：这是 Windows 系统的交换文件，类似于虚拟内存，当物理内存不足时，系统会将部分不常用的数据存储到该文件中，以释放物理内存，保证系统和程序的正常运行。不可以删除。C盘实在空间不足可以移至它盘。\nvfcompat.dll：Visual Studio 相关的动态链接库文件（DLL），主要用于支持兼容性测试。暂不动，有时间看看能不能移到其他盘。\n删删减减，最终可用变为52.9G，一共删了大概10.3G吧。",
    "description": "C盘红啦",
    "tags": [
      "Win10"
    ],
    "title": "C盘清理",
    "uri": "/programming/win10/c%E7%9B%98%E6%B8%85%E7%90%86/index.html"
  },
  {
    "breadcrumb": "Programming \u003e Office",
    "content": "2024-12-27 17:02:45\n省计算器",
    "description": "看标题啊",
    "tags": [
      "Office",
      "Excel"
    ],
    "title": "Excel",
    "uri": "/programming/office/excel/index.html"
  },
  {
    "breadcrumb": "Technology \u003e STM32H7",
    "content": "2024-12-26 19:59:17\n先这么写着，等开始写再说",
    "description": "都是从这开始的吧",
    "tags": [
      "STM32",
      "GPIO"
    ],
    "title": "GPIO",
    "uri": "/technology/stm32h7/gpio/index.html"
  },
  {
    "breadcrumb": "Life",
    "content": "2024-12-27 17:58:26\n从哪里跌倒，就从哪里趴会~",
    "description": "世界总是由懒人推动的",
    "tags": [],
    "title": "Life hacks",
    "uri": "/life/techniques/index.html"
  },
  {
    "breadcrumb": "Programming \u003e Latex",
    "content": "2025-08-03 12:35:32\n用缩写直接替换长代码插入，在选项卡里直接选择宏-编辑宏，起个名字，触发器就是你想使用的缩写，在下面写你想要替换的长代码，比如我选择用“`a”来代替“\\alpha”，码论文会快很多。",
    "description": "TexStudio宏定义",
    "tags": [
      "Latex"
    ],
    "title": "Macrodefinition",
    "uri": "/programming/latex/macrodefinition/index.html"
  },
  {
    "breadcrumb": "Technology \u003e PMSM",
    "content": "2024-12-26 19:59:17\n一阶惯性环节",
    "description": "电机闭环啦",
    "tags": [
      "PMSM",
      "Simulink",
      "Pid"
    ],
    "title": "Pid控制",
    "uri": "/technology/pmsm/pid-control/index.html"
  },
  {
    "breadcrumb": "",
    "content": "想搓出一个世界怎么能少得了代码\nC++文明你我他\nC单片机跑不掉的\nMatlab/Simulink这玩意儿简直完美\nWin10搞搞电脑\nMarkdown接触的第一种脚本语言\nLatex写论文真爽啊\nAuto-Hot-Key接触的第二种脚本语言\nOffice三件套走一个",
    "description": "能跑的bug就是好bug",
    "tags": [],
    "title": "Programming",
    "uri": "/programming/index.html"
  },
  {
    "breadcrumb": "Technology",
    "content": "2024-12-26 19:51:44\n没错，故事的起点，还是野火😏\nBUG反正你总能遇到\nGPIO都是从这开始的吧",
    "description": "没有单片机电机怎么转",
    "tags": [
      "STM32"
    ],
    "title": "STM32H7",
    "uri": "/technology/stm32h7/index.html"
  },
  {
    "breadcrumb": "Life",
    "content": "2024-12-26 20:54:08\n看着高大上的都放进来~",
    "description": "希望能看吧",
    "tags": [],
    "title": "Books",
    "uri": "/life/books/index.html"
  },
  {
    "breadcrumb": "",
    "content": "哇这个世界永远这么奇妙！\nAxiom欧氏几何够我看一辈子\nTechniquesemmm也许这样算的快？\nHistory八卦谁不爱呢",
    "description": "一生二，二生三，三生万物",
    "tags": [],
    "title": "Math",
    "uri": "/math/index.html"
  },
  {
    "breadcrumb": "Programming",
    "content": "2025-01-10 14:40:16\nThis is a new page.",
    "description": "这玩意儿简直完美",
    "tags": [
      "Matlab",
      "Simulink"
    ],
    "title": "Matlab/Simulink",
    "uri": "/programming/matlabsimulink/index.html"
  },
  {
    "breadcrumb": "Programming \u003e Office",
    "content": "2024-12-27 17:02:50\n跑得了和尚跑不了庙",
    "description": "真不看标题啊",
    "tags": [
      "Office",
      "Ppt"
    ],
    "title": "PPT",
    "uri": "/programming/office/ppt/index.html"
  },
  {
    "breadcrumb": "Math",
    "content": "2024-12-26 20:43:56\n你说这都睡研究的呢",
    "description": "emmm也许这样算的快？",
    "tags": [
      "Math"
    ],
    "title": "Techniques",
    "uri": "/math/techniques/index.html"
  },
  {
    "breadcrumb": "Programming",
    "content": "2025-01-11 21:49:39\n电脑总有这个那个，看着不爽，搞它。\nPS:我的电脑是Windows系统，所以别的也不会，目前是win10.\n快速打开命令行工具\rC盘清理\r批量提取文件名",
    "description": "搞搞电脑",
    "tags": [
      "Win10"
    ],
    "title": "Win10",
    "uri": "/programming/win10/index.html"
  },
  {
    "breadcrumb": "Programming \u003e Win10",
    "content": "2025-08-03 11:36:09\n需要一次性提取文件夹内大量文件名：Shift+右键$\\rightarrow$复制文件路径。然后直接在txt里将路径替换成空白或者在excel里分栏提取就可以。",
    "description": "通通复制！",
    "tags": [
      "Win10"
    ],
    "title": "批量提取文件名",
    "uri": "/programming/win10/extractfilenamesinbatches/index.html"
  },
  {
    "breadcrumb": "Math",
    "content": "2024-12-26 20:44:04\n有时间一定看！",
    "description": "八卦谁不爱呢",
    "tags": [
      "Math"
    ],
    "title": "History",
    "uri": "/math/history/index.html"
  },
  {
    "breadcrumb": "Programming",
    "content": "2024-12-26 20:13:27\nThis is a new page.",
    "description": "接触的第一种脚本语言",
    "tags": [
      "Markdown",
      "Obsidian"
    ],
    "title": "Markdown",
    "uri": "/programming/markdown/index.html"
  },
  {
    "breadcrumb": "",
    "content": "十万个为什么？\n暂时没法分类，多了以后也许声光电热力？🤣",
    "description": "这个世界真奇秒",
    "tags": [],
    "title": "Science",
    "uri": "/science/index.html"
  },
  {
    "breadcrumb": "Life",
    "content": "2024-12-26 20:54:00\n啊也不知道能去几个地方",
    "description": "逛吃逛吃逛吃逛吃~",
    "tags": [],
    "title": "Travel",
    "uri": "/life/travel/index.html"
  },
  {
    "breadcrumb": "Programming",
    "content": "2024-12-26 20:13:33\nFontsize\rMacrodefinition",
    "description": "写论文真爽啊",
    "tags": [
      "Latex"
    ],
    "title": "Latex",
    "uri": "/programming/latex/index.html"
  },
  {
    "breadcrumb": "",
    "content": "写点零零碎碎，看到的食谱[收藏吃灰]，想看的书[看着就高大上]，去过的地方[主要是吃]\nFood都是食谱啦\nLife hacks世界总是由懒人推动的\nBooks希望能看吧\nTravel逛吃逛吃逛吃逛吃~",
    "description": "哎嘿就是浪",
    "tags": [],
    "title": "Life",
    "uri": "/life/index.html"
  },
  {
    "breadcrumb": "Programming",
    "content": "2024-12-26 20:13:27\n你绝对猜不到我为什么会学这个东西[做过晋江审核吗？没错就是为了在win10桌面写一个自动点击器]",
    "description": "接触的第二种脚本语言",
    "tags": [
      "AHK"
    ],
    "title": "Auto-Hot-Key",
    "uri": "/programming/auto-hot-key/index.html"
  },
  {
    "breadcrumb": "",
    "content": "生死看淡不服就干！\n官方版：作为社会主义接班人，依法诚信纳税人，我们要学会用法律的武器保护自己，维护自身合法权益！",
    "description": "生死看淡不服就干",
    "tags": [],
    "title": "Law",
    "uri": "/law/index.html"
  },
  {
    "breadcrumb": "Programming",
    "content": "2024-12-27 17:02:05\n别问我他为什么在programming里单独给这玩意列个大文件夹它配吗！！！\nWord看标题\nExcel看标题啊\nPPT真不看标题啊",
    "description": "三件套走一个",
    "tags": [
      "Office"
    ],
    "title": "Office",
    "uri": "/programming/office/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Major.Minor.Patch.date\nVERSION 0我的第一个网页",
    "description": "更新日志",
    "tags": [],
    "title": "Changelog",
    "uri": "/changelog/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: AHK",
    "uri": "/tags/ahk/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: BAT",
    "uri": "/tags/bat/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Book",
    "uri": "/categories/book/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C",
    "uri": "/tags/c/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C++",
    "uri": "/tags/c\u0026#43;\u0026#43;/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Excel",
    "uri": "/tags/excel/index.html"
  },
  {
    "breadcrumb": "",
    "content": "欢迎来到我的笔记，这是我第一通过Hugo尝试建立网站，主要用作笔记整理以及一些生活技巧，欢迎交流。\n本网站模板为HUGO官网下载Theme——“Relearn”，模板Guide网址“https://mcshelby.github.io/hugo-theme-relearn/introduction/index.html”\nTechnology发工资先换把焊枪！\nProgramming能跑的bug就是好bug\nMath一生二，二生三，三生万物\nScience这个世界真奇秒\nLife哎嘿就是浪\nLaw生死看淡不服就干\nChangelog更新日志",
    "description": "This is a website built by Feikun using Hugo.",
    "tags": [],
    "title": "Feikun's note",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Food",
    "uri": "/tags/food/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Food",
    "uri": "/categories/food/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: GPIO",
    "uri": "/tags/gpio/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: History",
    "uri": "/categories/history/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Latex",
    "uri": "/tags/latex/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Law",
    "uri": "/categories/law/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Life",
    "uri": "/categories/life/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Markdown",
    "uri": "/tags/markdown/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Math",
    "uri": "/tags/math/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Math",
    "uri": "/categories/math/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Matlab",
    "uri": "/tags/matlab/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Obsidian",
    "uri": "/tags/obsidian/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Office",
    "uri": "/tags/office/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Office",
    "uri": "/categories/office/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Pid",
    "uri": "/tags/pid/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: PMSM",
    "uri": "/tags/pmsm/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Ppt",
    "uri": "/tags/ppt/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Programming",
    "uri": "/categories/programming/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Science",
    "uri": "/categories/science/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Simulink",
    "uri": "/tags/simulink/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Society",
    "uri": "/categories/society/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: STM32",
    "uri": "/tags/stm32/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Technology",
    "uri": "/categories/technology/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Travel",
    "uri": "/categories/travel/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Tutorials",
    "uri": "/categories/tutorials/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: VS",
    "uri": "/tags/vs/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Win10",
    "uri": "/tags/win10/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Word",
    "uri": "/tags/word/index.html"
  }
]
