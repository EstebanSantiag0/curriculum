// Botón de idioma: ES → EN → 中文. Por defecto usa el idioma del navegador.
// El español es el texto que ya está en el HTML; aquí sólo van el inglés y el chino.
// Cada elemento traducible lleva data-i18n="clave" (contenido) o
// data-i18n-title / data-i18n-aria / data-i18n-alt / data-i18n-href (atributos).
(function () {
  var STRONG = 'font-semibold text-slate-900 dark:text-slate-100';
  function b(text) { return '<strong class="' + STRONG + '">' + text + '</strong>'; }

  var ORDER = ['es', 'en', 'zh'];
  var HTML_LANG = { es: 'es', en: 'en', zh: 'zh-CN' };
  var BUTTON = { es: 'ES', en: 'EN', zh: '中文' };
  var ATTRS = { title: 'title', aria: 'aria-label', alt: 'alt', href: 'href' };

  var dict = {
    // Textos que sólo existen en JavaScript
    es: {
      'theme.toDark': 'Cambiar a modo oscuro',
      'theme.toLight': 'Cambiar a modo claro'
    },

    en: {
      'meta.title': 'Esteban de Jesús Santiago Torres | CV & Portfolio',
      'theme.toDark': 'Switch to dark mode',
      'theme.toLight': 'Switch to light mode',
      'lang.change': 'Change language',
      'aria.actions': 'Document actions',
      'pdf.title': 'Download the CV as PDF',
      'pdf.href': 'cv/cv_esteban_santiago_torres_en.pdf',
      'pdf.name': 'cv_esteban_santiago_torres_en.pdf',
      'contact': 'Contact',

      'badge.title': 'Looking for professional internships for summer 2027',
      'badge.text': 'Internships · summer 2027',
      'subtitle': '20 years old · Software Development · Computer Engineering Student',
      'utm.alt': 'Coat of arms of the Universidad Tecnológica de la Mixteca',
      'utm.name': 'Universidad Tecnológica de la Mixteca (UTM)',
      'utm.detail': 'Computer Engineering · 5th semester · GPA 9.0/10',
      'seeking': 'Looking for a software development internship in summer 2027, after completing my 6th semester.',
      'location': 'Huajuapan de León, Oaxaca, Mexico — open to remote work or relocation',

      's.profile': 'Professional Profile',
      's.exp': 'Software Experience',
      's.projects': 'Featured Technical Projects',
      's.langs': 'Languages',
      's.skills': 'Technical Skills',
      's.other': 'Other Experience',
      's.edu': 'Education and Cultural Training',

      'profile': 'Computer Engineering student with a Flutter point-of-sale system in production and a RISC-V processor designed from scratch in VHDL.',

      'exp.date': 'Freelance · 2026 – present',
      'exp.role': 'Flutter Developer — Boopi POS',
      'exp.private': '(client\'s private code)',
      'exp.1': b('200 orders in the first week') + ' in production for a café\'s point-of-sale system, by building it in Flutter from a single codebase for Android, Windows and Linux, with split bills and Bluetooth QR receipts (ESC/POS).',
      'exp.2': b('Paper notebook retired and 30 customers') + ' in a loyalty program, by implementing cash-register closings, sales statistics and Excel export on a local SQLite database.',
      'exp.3': b('Zero manual steps') + ' per Windows release, by automating build and code signing with GitHub Actions.',

      'p1.title': 'Single-cycle RISC-V (RV32I) processor',
      'p1.tech': 'Technologies: VHDL, Xilinx ISE 14.7, Spartan-3E FPGA',
      'p1.desc': 'CPU designed from scratch that runs a subset of RV32I (arithmetic, logic, load/store and conditional branches): 32-bit ALU, 32-register file, control unit, instruction and data memories, and next-PC logic.',
      'p2.title': 'Desktop school management system (CRUD)',
      'p2.tech': 'Technologies: Python, PyQt6, PostgreSQL, Docker Compose, Matplotlib',
      'p2.desc': 'Desktop application to manage students, courses and degree programs with full CRUD operations on PostgreSQL (deployed with Docker) and statistics in interactive pie and bar charts.',
      'p3.title': 'Turing machine simulator',
      'p3.tech': 'Technologies: Python, PyQt6, PyInstaller · Team project',
      'p3.desc': 'Step-by-step simulation of two Turing machines: the maximum between 0 and a signed 8-bit number, and a two-tape binary palindrome recognizer. Distributed as a Windows executable. Final project for Theory of Computation in a team of 8, organized in Utemitas, the GitHub organization I manage.',
      'p4.title': 'Digital design labs on FPGA',
      'p4.tech': 'Technologies: VHDL, Xilinx ISE 14.7 schematics, Digilent Nexys 2 (Spartan-3E)',
      'p4.desc': 'Five documented designs that build from a clean clone: shift register, 0000–9999 decimal counter, text marquee, 7-segment display multiplexing and PWM generator.',
      'repo': 'View repository',
      'fpga.1': 'Shift register',
      'fpga.2': 'Counter 0000–9999',
      'fpga.3': 'Marquee',
      'fpga.4': '7-seg multiplexing',
      'fpga.5': '8-bit PWM',

      'lang.en': 'English',
      'lang.en.lvl': 'Advanced',
      'lang.en.desc': 'Full listening and reading comprehension; I can hold specific technical conversations and job interviews in English.',
      'lang.zhru': 'Chinese and Russian',
      'lang.zhru.lvl': 'Basic',
      'lang.zhru.desc': 'Preparing for the HSK 1 Chinese exam.',
      'lang.es': 'Spanish',
      'lang.es.lvl': 'Native',

      'sk.langs': 'Languages',
      'sk.fw': 'Frameworks and data',
      'sk.tools': 'Tools',
      'sk.asm': 'x86-64 Assembly',

      'o1.title': '3D architectural modeling, collaboration with an architect',
      'o1.date': '(Jan. 2025 – present)',
      'o1.desc': ': ' + b('5 projects delivered and the collaboration expanded') + ' to renders and social media (Feb. 2026), by modeling their presentations in Blender.',
      'o2.title': 'Paletería El Golpe branch, my own business',
      'o2.date': '(summer 2026)',
      'o2.desc': ': ' + b('350 popsicles and 20 liters of ice cream sold') + ' during the 2026 World Cup, by opening the branch and hiring and coordinating ' + b('4 employees') + ', in charge of inventory, cash and payroll.',

      'edu1.date': '2024 – present · 5th semester · GPA 9.0/10',
      'edu1.title': 'Computer Engineering',
      'edu1.school': 'Universidad Tecnológica de la Mixteca (UTM), Huajuapan de León',
      'edu1.subjects': 'Relevant coursework: Computer Architecture, Data Structures, Compilers, Operating Systems, Databases and Object-Oriented Programming',
      'edu2.date': '6 semesters completed',
      'edu2.title': 'Performing Arts Training (Theater)',
      'edu2.desc': 'Escuela de Iniciación Artística affiliated with INBAL, Huajuapan de León — Actor in the "Metamorfosis Teatro" company',

      'f.email': 'Email:',
      'f.phone': 'Phone:',
      'f.github': 'GitHub:',
      'f.linkedin': 'LinkedIn:',
      'f.location': 'Location: Huajuapan de León, Oaxaca, Mexico — available for remote work or relocation',
      'f.pdf': 'Download as PDF'
    },

    zh: {
      'meta.title': 'Esteban de Jesús Santiago Torres | 简历与作品集',
      'theme.toDark': '切换到深色模式',
      'theme.toLight': '切换到浅色模式',
      'lang.change': '切换语言',
      'aria.actions': '文档操作',
      'pdf.title': '下载 PDF 版简历',
      'pdf.href': 'cv/cv_esteban_santiago_torres_zh.pdf',
      'pdf.name': 'cv_esteban_santiago_torres_zh.pdf',
      'contact': '联系我',

      'badge.title': '正在寻找 2027 年暑期专业实习',
      'badge.text': '实习 · 2027 年暑期',
      'subtitle': '20 岁 · 软件开发 · 计算机工程专业学生',
      'utm.alt': '米斯特卡科技大学校徽',
      'utm.name': '米斯特卡科技大学（UTM）',
      'utm.detail': '计算机工程 · 第 5 学期 · 平均成绩 9.0/10',
      'seeking': '希望在 2027 年暑期（完成第 6 学期后）获得一份软件开发实习。',
      'location': '墨西哥瓦哈卡州瓦华潘德莱昂 — 可远程工作或异地工作',

      's.profile': '个人简介',
      's.exp': '软件开发经验',
      's.projects': '重点技术项目',
      's.langs': '语言能力',
      's.skills': '技术技能',
      's.other': '其他经历',
      's.edu': '教育与文化背景',

      'profile': '计算机工程专业学生，开发的 Flutter 收银系统已投入实际使用，并用 VHDL 从零设计了一颗 RISC-V 处理器。',

      'exp.date': '自由职业 · 2026 – 至今',
      'exp.role': 'Flutter 开发者 — Boopi POS',
      'exp.private': '（客户私有代码）',
      'exp.1': b('上线第一周处理 200 笔订单') + '：用同一套 Flutter 代码为一家咖啡馆开发 Android、Windows 和 Linux 收银系统，支持分单结账和蓝牙（ESC/POS）二维码小票打印。',
      'exp.2': b('取代纸质账本，积累 30 名会员') + '：实现交班结算、销售统计和会员积分计划，数据存于可导出 Excel 的本地 SQLite。',
      'exp.3': b('每次发布零手动步骤') + '：用 GitHub Actions 自动编译并签名 Windows 版本。',

      'p1.title': '单周期 RISC-V（RV32I）处理器',
      'p1.tech': '技术：VHDL、Xilinx ISE 14.7、Spartan-3E FPGA',
      'p1.desc': '从零设计的 CPU，可执行 RV32I 的子集（算术、逻辑、加载/存储和条件跳转）：32 位 ALU、32 个寄存器的寄存器堆、控制单元、指令与数据存储器，以及下一条指令 PC 逻辑。',
      'p2.title': '桌面端学校管理系统（CRUD）',
      'p2.tech': '技术：Python、PyQt6、PostgreSQL、Docker Compose、Matplotlib',
      'p2.desc': '用于管理学生、课程和专业的桌面应用，基于 PostgreSQL（使用 Docker 部署）实现完整的增删改查，并用交互式饼图和柱状图展示统计数据。',
      'p3.title': '图灵机模拟器',
      'p3.tech': '技术：Python、PyQt6、PyInstaller · 团队项目',
      'p3.desc': '逐步模拟两台图灵机：求 0 与一个 8 位有符号数中的较大值，以及双带二进制回文识别器。以 Windows 可执行文件发布。这是计算理论课程的期末项目，由 8 人团队在我管理的 GitHub 组织 Utemitas 中完成。',
      'p4.title': 'FPGA 数字设计实验',
      'p4.tech': '技术：VHDL、Xilinx ISE 14.7 原理图、Digilent Nexys 2（Spartan-3E）',
      'p4.desc': '五个文档完整、从干净克隆即可直接编译的设计：移位寄存器、0000–9999 十进制计数器、文字跑马灯、七段数码管动态扫描和 PWM 发生器。',
      'repo': '查看代码仓库',
      'fpga.1': '移位寄存器',
      'fpga.2': '计数器 0000–9999',
      'fpga.3': '跑马灯',
      'fpga.4': '七段数码管扫描',
      'fpga.5': '8 位 PWM',

      'lang.en': '英语',
      'lang.en.lvl': '高级',
      'lang.en.desc': '听力和阅读完全无障碍；能用英语进行专业技术交流和面试。',
      'lang.zhru': '中文和俄语',
      'lang.zhru.lvl': '初级',
      'lang.zhru.desc': '正在准备 HSK 一级考试。',
      'lang.es': '西班牙语',
      'lang.es.lvl': '母语',

      'sk.langs': '编程语言',
      'sk.fw': '框架与数据',
      'sk.tools': '工具',
      'sk.asm': 'x86-64 汇编',

      'o1.title': '建筑 3D 建模，与一位建筑师合作',
      'o1.date': '（2025 年 1 月 – 至今）',
      'o1.desc': '：' + b('交付 5 个项目，合作范围扩展') + '至效果图渲染和社交媒体运营（2026 年 2 月起），用 Blender 为其方案展示建模。',
      'o2.title': 'El Golpe 冰棍店分店，自营生意',
      'o2.date': '（2026 年夏）',
      'o2.desc': '：' + b('2026 年世界杯期间售出 350 支冰棍和 20 升冰淇淋') + '，开设分店，招聘并协调 ' + b('4 名员工') + '，负责库存、收银和工资发放。',

      'edu1.date': '2024 – 至今 · 第 5 学期 · 平均成绩 9.0/10',
      'edu1.title': '计算机工程',
      'edu1.school': '米斯特卡科技大学（UTM），瓦华潘德莱昂',
      'edu1.subjects': '相关课程：计算机体系结构、数据结构、编译原理、操作系统、数据库和面向对象编程',
      'edu2.date': '已完成 6 个学期',
      'edu2.title': '表演艺术培训（戏剧）',
      'edu2.desc': '瓦华潘德莱昂艺术启蒙学校（隶属墨西哥国家美术与文学学院 INBAL）— “Metamorfosis Teatro” 剧团演员',

      'f.email': '邮箱：',
      'f.phone': '电话：',
      'f.github': 'GitHub：',
      'f.linkedin': 'LinkedIn：',
      'f.location': '所在地：墨西哥瓦哈卡州瓦华潘德莱昂 — 可远程工作或异地工作',
      'f.pdf': '下载 PDF'
    }
  };

  var root = document.documentElement;
  var button = document.getElementById('lang-toggle');
  var label = document.getElementById('lang-label');
  var current = 'es';

  // El español se toma del HTML tal como está
  dict.es['meta.title'] = document.title;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    dict.es[el.dataset.i18n] = el.innerHTML;
  });
  Object.keys(ATTRS).forEach(function (name) {
    document.querySelectorAll('[data-i18n-' + name + ']').forEach(function (el) {
      dict.es[el.getAttribute('data-i18n-' + name)] = el.getAttribute(ATTRS[name]);
    });
  });

  function t(key) {
    var text = dict[current][key];
    return text === undefined ? dict.es[key] : text;
  }

  function apply(lang) {
    current = lang;
    root.lang = HTML_LANG[lang];
    document.title = t('meta.title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.innerHTML = t(el.dataset.i18n);
    });
    Object.keys(ATTRS).forEach(function (name) {
      document.querySelectorAll('[data-i18n-' + name + ']').forEach(function (el) {
        el.setAttribute(ATTRS[name], t(el.getAttribute('data-i18n-' + name)));
      });
    });
    label.textContent = BUTTON[lang];
    document.dispatchEvent(new CustomEvent('i18n:change'));
  }

  // Idioma inicial: el de ?lang= (lo usan los enlaces de los PDFs), el que eligió el visitante
  // en esta sesión o, si no, el primero del navegador que tengamos. Si no pide ninguno, inglés.
  function initialLang() {
    var param = new URLSearchParams(location.search).get('lang');
    if (ORDER.indexOf(param) !== -1) return param;
    var saved = sessionStorage.getItem('lang');
    if (ORDER.indexOf(saved) !== -1) return saved;
    var prefs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < prefs.length; i++) {
      var code = prefs[i].toLowerCase().split('-')[0];
      if (ORDER.indexOf(code) !== -1) return code;
    }
    return 'en';
  }

  button.addEventListener('click', function () {
    var next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
    sessionStorage.setItem('lang', next);
    apply(next);
  });

  window.i18n = { t: t };
  apply(initialLang());
})();
