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
    "content": "2024-12-26 20:13:11\n别说我不文明啊hugo的网址有符号会自己产生bug，他识别的居然不是字符串就神奇以后有机会的话研究研究",
    "description": "文明你我他",
    "tags": [
      "C++",
      "VS"
    ],
    "title": "C++",
    "uri": "/programming/c%E8%89%B9/index.html"
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
    "content": "希望有天能手搓出一整套动力系统！干！\nPMSM电机它转呀转不停\nSTM32H7没有单片机电机怎么转",
    "description": "发工资先换把焊枪！",
    "tags": [],
    "title": "Technology",
    "uri": "/technology/index.html"
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
    "content": "2025-01-14 16:30:40\n基本模型 以简单的RL电路为例：\n$$U(t)=Ri(t)+L\\dfrac{\\mathrm{d}i(t)}{\\mathrm{d}t}$$拉氏变换后整理可得开环传递函数：\n$$G(s)=\\dfrac{I(s)}{U(s)}=\\dfrac{1}{Ls+R}=\\dfrac{\\dfrac{1}{R}}{\\dfrac{L}{R}+1}=\\dfrac{K}{Ts+1}(K=\\dfrac{1}{R},T=\\dfrac{L}{R})$$一阶惯性环节闭环传递函数标准形式$\\dfrac{1}{Ts+1}$，其中，$\\omega_c=\\dfrac{1}{T}$为一节惯性环节的截止频率，$T$为该环节的时间常数。\n截止频率：是指一个系统的输出信号能量开始大幅下降的边界频率（引自维基百科），输出信号幅值降至输入信号最大值的$\\dfrac{\\sqrt{2}}{2}$，相位滞后45°。\n在simulink中建模：\n不同频率输入测试 $0.1Hz$ 该惯性环节转折频率为$1 rad/s$，测试输入$0.1 rad/s$的正弦波信号：\n输出基本能够不失真的跟随输入，计算一下相位差：\n通过Cursor测量时间差$\\Delta T \\approx 1s$，此时正弦波周期$T = 2\\pi / 0.1 = 20\\pi$，所以两曲线相位差$\\Delta \\theta \\approx 1 / 20\\pi *2\\pi \\approx 0.1 rad \\approx 5.72^{\\circ}$。\n通过linearizer绘制Bode图如下：\n在Bode图中找到$0.1Hz$的相位：\n读出值为$-5.46^{\\circ}$与计算值$5.72^{\\circ}$基本一致（取点读数有误差）。\n$1Hz$ 观测转折频率正弦信号输入：\n可以看出输入输出波形之间有明显的相位差，通过Cursor读取差值：\n幅值明显降到$0.708 \\approx \\dfrac{\\sqrt{2}}{2}$，同样计算相位差$\\Delta = \\dfrac{0.817}{2\\pi}*2\\pi \\approx 0.817 rad \\approx 46.8^{\\circ}$。在Bode图中找到转折频率点：\n$-45^{\\circ}$与计算值$46.8^{\\circ}$基本一致。\n远高于转折频率 当输入频率分别为$10Hz$和$100Hz$时，输出信号出现明显失真：\n可以看出，当输入频率远高于转折频率时，输出信号完全失真，不再保留有效信号。\n不同转折频率的惯性环节 绘制转折频率分别为$0.1Hz$、$1Hz$和$10Hz$的一阶惯性环节Bode图：\n从左到右依次是$0.1Hz$、$1Hz$和$10Hz$。可以明显看出随着时间常数减小，转折频率增大，相频和幅频曲线均右移。\n开环增益对惯性环节的影响 分别绘制开环增益为0.1、1、10、100时$\\dfrac{K}{s+1}$的Bode图：\n从下到上依次为0.1、1、10、100，可以看出开环增益对相频曲线没有影响，但会使幅频曲线平行上移。这会导致幅频曲线与横轴的交点右移，从而使截止频率$\\omega_c$增大",
    "description": "2025-01-14 16:30:40\n基本模型 以简单的RL电路为例：\n$$U(t)=Ri(t)+L\\dfrac{\\mathrm{d}i(t)}{\\mathrm{d}t}$$拉氏变换后整理可得开环传递函数：\n$$G(s)=\\dfrac{I(s)}{U(s)}=\\dfrac{1}{Ls+R}=\\dfrac{\\dfrac{1}{R}}{\\dfrac{L}{R}+1}=\\dfrac{K}{Ts+1}(K=\\dfrac{1}{R},T=\\dfrac{L}{R})$$一阶惯性环节闭环传递函数标准形式$\\dfrac{1}{Ts+1}$，其中，$\\omega_c=\\dfrac{1}{T}$为一节惯性环节的截止频率，$T$为该环节的时间常数。\n截止频率：是指一个系统的输出信号能量开始大幅下降的边界频率（引自维基百科），输出信号幅值降至输入信号最大值的$\\dfrac{\\sqrt{2}}{2}$，相位滞后45°。\n在simulink中建模：\n不同频率输入测试 $0.1Hz$ 该惯性环节转折频率为$1 rad/s$，测试输入$0.1 rad/s$的正弦波信号：",
    "tags": [
      "Simulink",
      "Pid"
    ],
    "title": "一阶惯性环节",
    "uri": "/technology/pmsm/pid%E6%8E%A7%E5%88%B6/%E4%B8%80%E9%98%B6%E6%83%AF%E6%80%A7%E7%8E%AF%E8%8A%82/%E4%B8%80%E9%98%B6%E6%83%AF%E6%80%A7%E7%8E%AF%E8%8A%82/index.html"
  },
  {
    "breadcrumb": "Programming \u003e Win10",
    "content": "2025-01-13 16:14:59\n在 Windows 操作系统中，最常见的打开方式是 Win+R，输入 CMD 来启动命令提示符，命令行的默认工作目录为C:\\Users\\Administrator\u003e。\nPowerShell打开方式是 Win+X 快捷键打开快捷菜单，选择 PowerShell 来启动 Windows PowerShell，默认目录同样为C:\\Users\\Administrator\u003e。\n但当想直接在当前文件夹打开命令行，可以有以下两种快捷方式：\n在文件资源管理器的地址栏中直接输入 cmd 或 powershell，然后回车，可在当前目录下打开相应的命令行工具； Shift+右键点击空白区域，选择 “在此处打开命令窗口” 或 “在此处打开 PowerShell 窗口”",
    "description": "2025-01-13 16:14:59\n在 Windows 操作系统中，最常见的打开方式是 Win+R，输入 CMD 来启动命令提示符，命令行的默认工作目录为C:\\Users\\Administrator\u003e。\nPowerShell打开方式是 Win+X 快捷键打开快捷菜单，选择 PowerShell 来启动 Windows PowerShell，默认目录同样为C:\\Users\\Administrator\u003e。",
    "tags": [
      "Win10"
    ],
    "title": "快速打开命令行工具",
    "uri": "/programming/win10/%E5%BF%AB%E9%80%9F%E6%89%93%E5%BC%80%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7/index.html"
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
    "uri": "/technology/pmsm/%E7%9F%A2%E9%87%8F%E6%8E%A7%E5%88%B6/index.html"
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
    "breadcrumb": "Technology \u003e PMSM",
    "content": "2024-12-26 19:59:17\n一阶惯性环节",
    "description": "电机闭环啦",
    "tags": [
      "PMSM",
      "Simulink",
      "Pid"
    ],
    "title": "Pid控制",
    "uri": "/technology/pmsm/pid%E6%8E%A7%E5%88%B6/index.html"
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
    "content": "2025-01-11 21:49:39\n电脑总有这个那个，看着不爽，搞它。\nPS:我的电脑是Windows系统，所以别的也不会，目前是win10.\n快速打开命令行工具",
    "description": "搞搞电脑",
    "tags": [
      "Win10"
    ],
    "title": "Win10",
    "uri": "/programming/win10/index.html"
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
    "content": "2024-12-26 20:13:33\narticle字号 在 LaTeX 中，article 文档类默认支持的字号仅限于 10pt（默认）、11pt 和 12pt。如果需要使用更大的字号，可以选择 extarticle 文档类，它扩展了字号的选择范围，支持 8pt、9pt、10pt（默认）、11pt、12pt、14pt、17pt 和 20pt 等多种字号设置。",
    "description": "写论文真爽啊",
    "tags": [
      "Latex",
      "VsCode"
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
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: AHK",
    "uri": "/tags/ahk/index.html"
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
    "content": "欢迎来到我的笔记，这是我第一通过Hugo尝试建立网站，主要用作笔记整理以及一些生活技巧，欢迎交流。\nTechnology发工资先换把焊枪！\nProgramming能跑的bug就是好bug\nMath一生二，二生三，三生万物\nScience这个世界真奇秒\nLife哎嘿就是浪\nLaw生死看淡不服就干",
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
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "frontmatter",
    "uri": "/frontmatter/index.html"
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
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "options",
    "uri": "/options/index.html"
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
    "title": "Tag :: VsCode",
    "uri": "/tags/vscode/index.html"
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
