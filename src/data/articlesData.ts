import { ArticleData } from '../types/article';

export const ARTICLES_DATA: ArticleData[] = [
  // 1. Baking Soda
  {
    slug: 'baking-soda-chemistry',
    topic: 'kitchen',
    readingTime: 4,
    date: '2026-09-15',
    coverSvgKey: 'baking_soda',
    title: {
      kk: 'Ас содасы мен қышқыл: қамыр неге көтеріледі?',
      ru: 'Выпечка и разрыхлитель: почему сода гасится и пышнеет тесто?',
      en: 'Baking Soda and Acid: Why Does Dough Rise?',
    },
    summary: {
      kk: 'Ас содасы (натрий гидрокарбонаты) мен сірке немесе айран қышқылы әрекеттескенде көмірқышқыл газы бөлініп, қамырды жұмсақ әрі кеуекті етеді.',
      ru: 'При взаимодействии гидрокарбоната натрия с кислотой выделяется углекислый газ, создающий пористую и пышную структуру выпечки.',
      en: 'The reaction between sodium bicarbonate and acid releases carbon dioxide gas, creating airy and fluffy baked goods.',
    },
    body: {
      kk: [
        'Әрбір үйдегі ас үйде нағыз химиялық зертхана орналасқан. Бәліш, бәліштер мен пирогтар пісіргенде ата-анамыздың немесе аспаздардың ас содасын сірке суымен немесе айранмен араластыратынын көрген боларсыз. Неліктен бұл қоспа бірден көпіріп, шиқылдай бастайды?',
        'Ас содасының химиялық атауы — натрий гидрокарбонаты (NaHCO₃). Бұл қышқылдық тұз болып табылады. Оған кез келген қышқылды (сірке қышқылы CH₃COOH, сүт қышқылы немесе лимон қышқылы) қосқанда, бейтараптану және ыдырау реакциясы жүреді.',
        'Реакция нәтижесінде көмір қышқылы (H₂CO₃) түзіледі, бірақ ол өте тұрақсыз болғандықтан лезде су (H₂O) мен көмірқышқыл газына (CO₂) ыдырайды. Дәл осы газ көпіршіктері қамырдың ішінде тығыз орналасып, қыздырған кезде ұлғайып, нанды жұмсақ әрі кеуекті етеді.',
      ],
      ru: [
        'Кухня — это настоящая домашняя химическая лаборатория. При приготовлении блинов, пышных пирогов и кексов мы часто видим, как соду «гасят» уксусом или добавляют в кефир. Почему происходит бурное шипение и выделение пены?',
        'Питьевая сода — это гидрокарбонат натрия (NaHCO₃), кислая соль угольной кислоты. При добавлении любой органической или минеральной кислоты (уксусной CH₃COOH, молочной из кефира или лимонной) происходит мгновенное взаимодействие.',
        'В результате реакция нейтрализации приводит к образованию нестабильной угольной кислоты H₂CO₃, которая сразу же распадается на воду и углекислый газ CO₂. Пузырьки газа расширяются при высокой температуре в духовке, создавая воздухопроницаемую, пышную текстуру теста.',
      ],
      en: [
        'The kitchen is a true home chemistry lab. When making pancakes or cakes, baking soda is often "quenched" with vinegar or mixed into buttermilk. Why does it fizz furiously?',
        'Baking soda is chemically known as sodium bicarbonate (NaHCO₃). When mixed with an acid (acetic acid in vinegar, lactic acid in yogurt, or citric acid), a rapid acid-base reaction occurs.',
        'This forms unstable carbonic acid (H₂CO₃), which instantly decomposes into water and carbon dioxide gas (CO₂). The trapped gas bubbles expand under oven heat, creating a fluffy and porous baked product.',
      ],
    },
    reaction: {
      equation: '$\\text{NaHCO}_3 + \\text{CH}_3\\text{COOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$',
      type: {
        kk: 'Алмасу және ыдырау реакциясы',
        ru: 'Реакция обмена с последующим разложением',
        en: 'Double displacement followed by decomposition',
      },
      explanation: {
        kk: [
          '1) NaHCO₃ тұзы CH₃COOH қышқылымен әрекеттеседі.',
          '2) Түзілген H₂CO₃ лезде H₂O мен CO₂ газына ыдырайды.',
          '3) CO₂ газы қамырды көтереді.',
        ],
        ru: [
          '1) Гидрокарбонат натрия реагирует с уксусной кислотой.',
          '2) Образующаяся угольная кислота распадается на воду и газ CO₂.',
          '3) Выделяющийся углекислый газ разрыхляет тесто.',
        ],
        en: [
          '1) Sodium bicarbonate reacts with acetic acid.',
          '2) Carbonic acid splits into water and carbon dioxide.',
          '3) Evolving CO₂ gas expands the batter.',
        ],
      },
      balancerEquation: 'NaHCO3 + CH3COOH = CH3COONa + H2O + CO2',
    },
    tryIt: {
      title: {
        kk: 'Шараны газбен үрлеу тәжірибесі',
        ru: 'Опыт: Надувание шарика газом из соды',
        en: 'Experiment: Inflating a Balloon with Baking Soda',
      },
      itemsNeeded: {
        kk: ['Пластик бөтелке', '2 ас қасық ас содасы', '100 мл сірке суы', 'Әуе шары'],
        ru: ['Пластиковая бутылка', '2 ст. ложки соды', '100 мл уксуса', 'Воздушный шарик'],
        en: ['Plastic bottle', '2 tbsp baking soda', '100 mL vinegar', 'Rubber balloon'],
      },
      steps: {
        kk: [
          '1) Бөтелкеге 100 мл сірке суын құйыңыз.',
          '2) Шардың ішіне 2 қасық сода салыңыз.',
          '3) Шардың аузын бөтелкеге кигізіп, соданы бөтелкеге төгіңіз.',
        ],
        ru: [
          '1) Налейте в бутылку 100 мл столового уксуса.',
          '2) Засыпьте через воронку в шарик 2 ложки соды.',
          '3) Натяните горлышко шарика на бутылку и высыпьте соду внутрь.',
        ],
        en: [
          '1) Pour 100 mL vinegar into the bottle.',
          '2) Fill the balloon with 2 tbsp baking soda.',
          '3) Fit the balloon over the bottle neck and drop the soda in.',
        ],
      },
      result: {
        kk: 'Шар өздігінен газға толып үрленеді!',
        ru: 'Шарик быстро надуется выделившимся газом CO₂!',
        en: 'The balloon instantly inflates with CO₂ gas!',
      },
      explanation: {
        kk: 'Бөлінген көмірқышқыл газы бөтелке ішіндегі қысымды арттырып, шарды керіп үрлейді.',
        ru: 'Выделившийся углекислый газ создает давление и надувает оболочку шара.',
        en: 'Generated carbon dioxide creates gas pressure inside the bottle, inflating the balloon.',
      },
      safetyWarning: {
        kk: 'Тәжірибені ересектердің қарауынсыз жасауға болмайды. Сірке суын көзге тигізбеңіз!',
        ru: 'Проводите опыт только с разрешения взрослых. Избегайте попадания уксуса в глаза!',
        en: 'Perform only with adult supervision. Keep vinegar away from eyes!',
      },
    },
    didYouKnow: {
      kk: 'Ежелгі Мысырда соданы нан пісіруге емес, мумияларды бальзамдауға және жууға пайдаланған.',
      ru: 'В Древнем Египте природную соду использовали не для выпечки, а для мумификации и стирки.',
      en: 'In Ancient Egypt, natural soda (natron) was used for mummification and washing rather than baking.',
    },
    quiz: [
      {
        question: {
          kk: 'Ас содасының химиялық формуласы қандай?',
          ru: 'Какова химическая формула питьевой соды?',
          en: 'What is the chemical formula of baking soda?',
        },
        options: {
          kk: ['NaHCO₃', 'Na₂CO₃', 'NaCl', 'NaOH'],
          ru: ['NaHCO₃', 'Na₂CO₃', 'NaCl', 'NaOH'],
          en: ['NaHCO₃', 'Na₂CO₃', 'NaCl', 'NaOH'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'NaHCO₃ — натрий гидрокарбонаты (ас содасы).',
          ru: 'NaHCO₃ — гидрокарбонат натрия.',
          en: 'NaHCO₃ is sodium bicarbonate.',
        },
      },
      {
        question: {
          kk: 'Қамырдың көтерілуіне қай газ жауапты?',
          ru: 'Какой газ отвечает за пышность теста?',
          en: 'Which gas causes dough to rise?',
        },
        options: {
          kk: ['O₂', 'CO₂', 'N₂', 'H₂'],
          ru: ['O₂', 'CO₂', 'N₂', 'H₂'],
          en: ['O₂', 'CO₂', 'N₂', 'H₂'],
        },
        correctAnswer: 1,
        explanation: {
          kk: 'Көмірқышқыл газы (CO₂) қамыр ішінде көпіршіктер түзеді.',
          ru: 'Углекислый газ CO₂ расширяется и поднимает тесто.',
          en: 'Carbon dioxide CO₂ gas bubbles expand the dough.',
        },
      },
    ],
    relatedElements: ['Na', 'C', 'H', 'O'],
    relatedSection: 'balancer',
  },

  // 2. Iron Rusting
  {
    slug: 'iron-rust-corrosion',
    topic: 'home',
    readingTime: 5,
    date: '2026-09-16',
    coverSvgKey: 'iron_rust',
    title: {
      kk: 'Темір неге даттанады және коррозиядан қалай қорғануға болады?',
      ru: 'Ржавление железа: почему металл разрушается и как его защитить?',
      en: 'Iron Rusting: Why Metals Corrode and How to Protect Them',
    },
    summary: {
      kk: 'Даттану — металдың оттек пен судың қатысуымен тотығуы. Ол жыл сайын әлемдегі темір конструкциялардың 20%-ын істен шығарады.',
      ru: 'Ржавление — электрохимическое окисление железа во влажном воздухе, уничтожающее до 20% мирового металла ежегодно.',
      en: 'Rusting is the electrochemical oxidation of iron in moist air that degrades 20% of global iron annually.',
    },
    body: {
      kk: [
        'Тастап кеткен ескі велосипед, қоршаулар немесе шегелер уақыт өте келе қызғылт-сары дақтармен қапталып, морт сынғышқа айналады. Бұл процесс коррозия немесе темірдің даттануы деп аталады.',
        'Таза темір (Fe) ауадағы оттекмен (O₂) және ылғалмен (H₂O) жанасқанда тотығу-тотықсыздану реакциясы басталады. Нәтижесінде гидроксид Fe(OH)₃ мен гидратталған темір(III) оксиді Fe₂O₃·nH₂O түзіледі.',
        'Коррозиядан қорғаудың негізгі жолдары: темірді сырлау, цинкпен қаптау (гальванизация) және протекторлық қорғаныс (белсендірек металды жанына бекіту).',
      ],
      ru: [
        'Оставленный на улице старый велосипед или гвоздь со временем покрываются бурым рыхлым налётом и разрушаются. Этот процесс называются коррозией или ржавлением железа.',
        'Коррозия представляет собой сложный электрохимический процесс. Железо реагирует одновременно с кислородом воздуха O₂ и водой H₂O.',
        'Образующийся гидратированный оксид железа Fe₂O₃·nH₂O рыхлый и не защищает внутренние слои, поэтому металл разрушается полностью. Основные методы защиты: покраска, оцинкование и протекторная защита.',
      ],
      en: [
        'An old bicycle left outdoors gradually becomes coated with a reddish-brown flaky crust. This destructive phenomenon is known as iron corrosion or rusting.',
        'Rusting is a complex electrochemical process requiring both atmospheric oxygen (O₂) and water (H₂O).',
        'The resulting hydrated iron(III) oxide Fe₂O₃·nH₂O is porous and flaky, allowing corrosion to penetrate deep into the metal. Protection methods include painting, galvanization, and sacrificial anode protection.',
      ],
    },
    reaction: {
      equation: '$4\\text{Fe} + 3\\text{O}_2 + 6\\text{H}_2\\text{O} \\rightarrow 4\\text{Fe(OH)}_3$',
      type: {
        kk: 'Тотығу-тотықсыздану реакциясы',
        ru: 'Окислительно-восстановительная реакция',
        en: 'Redox reaction',
      },
      explanation: {
        kk: [
          '1) Темір электронын беріп Fe³⁺ тотығады.',
          '2) Оттек электрон қосып алып O²⁻ тотықсызданады.',
          '3) Нәтижесінде темір гидроксиді түзіледі.',
        ],
        ru: [
          '1) Железо отдаёт электроны и окисляется до Fe³⁺.',
          '2) Кислород принимает электроны и восстанавливается.',
          '3) Образуется ржавчина Fe(OH)₃.',
        ],
        en: [
          '1) Iron loses electrons and oxidizes to Fe³⁺.',
          '2) Oxygen accepts electrons and reduces.',
          '3) Forms iron hydroxide rust.',
        ],
      },
      balancerEquation: '4Fe + 3O2 + 6H2O = 4Fe(OH)3',
    },
    tryIt: {
      title: {
        kk: 'Шегенің қайда жылдам даттанатынын тексеру',
        ru: 'Опыт: Где шеге/гвоздь ржавеет быстрее?',
        en: 'Experiment: What Makes Iron Rust Faster?',
      },
      itemsNeeded: {
        kk: ['3 айнымалы стақан', '3 темір шеге', 'Су, тұз, өсімдік майы'],
        ru: ['3 стакана', '3 железных гвоздя', 'Вода, соль, растительное масло'],
        en: ['3 clear glasses', '3 iron nails', 'Water, salt, vegetable oil'],
      },
      steps: {
        kk: [
          '1) 1-стақанға жай су куйып шеге салыңыз.',
          '2) 2-стақанға тұзды су куйыңыз.',
          '3) 3-стақанға қайнатылған су құйып, бетіне май қабатын құйыңыз.',
        ],
        ru: [
          '1) В 1-й стакан налейте обычную воду.',
          '2) Во 2-й стакан — солёную воду.',
          '3) В 3-й стакан — кипячёную воду и слой масла сверху (без доступа воздуха).',
        ],
        en: [
          '1) Glass 1: tap water.',
          '2) Glass 2: salt water.',
          '3) Glass 3: boiled water topped with a layer of oil (no oxygen access).',
        ],
      },
      result: {
        kk: 'Тұзды судағы шеге 1 күнде даттанады, ал май астындағы шеге таза қалады!',
        ru: 'В солёной воде гвоздь заржавеет быстрее всего, а под слоем масла останется блестящим!',
        en: 'The nail in salt water rusts fastest, while under oil it stays completely clean!',
      },
      explanation: {
        kk: 'Тұз иондары электролит қызметін атқарып реакцияны тездетеді, ал май оттектің өтуіне бөгет болады.',
        ru: 'Ионы соли ускоряют электрохимическую реакцию, а масло перекрывает доступ кислорода.',
        en: 'Salt ions increase conductivity to speed up rusting, while oil seals out dissolved oxygen.',
      },
      safetyWarning: {
        kk: 'Өткір шегелерді абайлап ұстаңыз!',
        ru: 'Будьте осторожны с острыми гвоздями!',
        en: 'Handle sharp nails carefully!',
      },
    },
    didYouKnow: {
      kk: 'Үндістандағы Дели қаласында 1600 жыл бұрын соғылған таза темір бағана әлі күнге дейін мүлдем даттанбаған.',
      ru: 'Железная колонна в Дели возрастом более 1600 лет почти не подверглась коррозии благодаря высокой чистоте металла и фосфорной плёнке.',
      en: 'The 1600-year-old Iron Pillar of Delhi has resisted corrosion due to a protective passive phosphate film.',
    },
    quiz: [
      {
        question: {
          kk: 'Темірдің даттануы үшін қандай екі зат бірге қажет?',
          ru: 'Какие два вещества обязательны для ржавления железа?',
          en: 'Which two substances are required for iron to rust?',
        },
        options: {
          kk: ['Оттек мен су', 'Азот мен су', 'Көмірқышқыл газы мен жарық', 'Водород мен тұз'],
          ru: ['Кислород и вода', 'Азот и вода', 'Углекислый газ и свет', 'Водород и соль'],
          en: ['Oxygen and water', 'Nitrogen and water', 'Carbon dioxide and light', 'Hydrogen and salt'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'O₂ және H₂O болмаса дат түзілмейді.',
          ru: 'Без кислорода и воды ржавчина не образуется.',
          en: 'Without oxygen and water, rust cannot form.',
        },
      },
    ],
    relatedElements: ['Fe', 'O', 'H'],
    relatedSection: 'periodic',
  },

  // 3. Toothpaste
  {
    slug: 'toothpaste-chemistry-fluoride',
    topic: 'health',
    readingTime: 4,
    date: '2026-09-17',
    coverSvgKey: 'toothpaste',
    title: {
      kk: 'Зубная пастаның құрамында не бар және ол тісті қалай қорғайды?',
      ru: 'Что в зубной пасте и почему фтор защищает эмаль от кариеса?',
      en: 'What Is Inside Toothpaste and How Fluoride Protects Enamel',
    },
    summary: {
      kk: 'Зубная паста құрамындағы фторид иондары тіс эмаліндегі гидроксиапатитті тұрақтырақ фторапатитке айналдырып, кариестен қорғайды.',
      ru: 'Фториды в зубной пасте замещают гидроксид-ионы в эмали, превращая гидроксиапатит в стойкий к кислотам фторапатит.',
      en: 'Fluoride ions substitute hydroxide ions in tooth enamel, transforming hydroxyapatite into acid-resistant fluorapatite.',
    },
    body: {
      kk: [
        'Күнделікті таңертең және кешке тіс тазалау — ең маңызды гигиеналық әдет. Биологиялық тұрғыдан адам тісінің эмалі — ағзамыздағы ең қатты ұлпа, ол негізінен гидроксиапатит минералынан [Ca₅(PO₄)₃OH] тұрады.',
        'Аузымыздағы бактериялар қантты жеп, қышқыл бөледі. Қышқыл эмальдағы кальций мен фосфаттарды ерітіп, деминерализация жүргізеді.',
        'Зубная пастадағы фторид иондары (F⁻) эмаль құрамына енеді: OH⁻ ионын F⁻ ионына алмастырып, гидроксиапатитті нағыз берік фторапатитке [Ca₅(PO₄)₃F] айналдырады.',
      ],
      ru: [
        'Чистка зубов пастой — ежедневный ритуал. Зубная эмаль — самая твёрдая ткань человеческого организма, состоящая на 96% из минерала гидроксиапатита Ca₅(PO₄)₃OH.',
        'Бактерии полости рта питаются сахарами и выделяют органические кислоты. Кислоты растворяют эмаль в процессе деминерализации.',
        'Фторид-ионы F⁻ из зубной пасты вступают в реакцию замещения с эмалью, превращая гидроксиапатит в более устойчивый к кислотам фторапатит Ca₅(PO₄)₃F.',
      ],
      en: [
        'Brossing teeth is a vital hygiene habit. Tooth enamel is the hardest substance in the human body, composed of 96% hydroxyapatite Ca₅(PO₄)₃OH.',
        'Oral bacteria feed on dietary sugars and secrete organic acids, causing enamel demineralization.',
        'Fluoride ions F⁻ in toothpaste replace hydroxide groups to convert hydroxyapatite into fluorapatite Ca₅(PO₄)₃F, which resists acid decay.',
      ],
    },
    didYouKnow: {
      kk: 'Адам эмалінің қаттылығы Моос шкаласы бойынша 5 баллға жетеді (апат өте қатты апат белгісі).',
      ru: 'Твёрдость зубной эмали составляет около 5 по шкале Мооса — это сравнимо с апатитом и сталью.',
      en: 'Tooth enamel scores 5 on the Mohs mineral hardness scale, matching steel and apatite.',
    },
    quiz: [
      {
        question: {
          kk: 'Тіс эмалін қышқылға төзімді ететін негізгі элемент ионы қандай?',
          ru: 'Ион какого элемента делает эмаль устойчивой к кислотам?',
          en: 'Which ion makes tooth enamel acid-resistant?',
        },
        options: {
          kk: ['Фторид ионы (F⁻)', 'Хлорид ионы (Cl⁻)', 'Натрий ионы (Na⁺)', 'Сульфат ионы'],
          ru: ['Фторид-ион (F⁻)', 'Хлорид-ион (Cl⁻)', 'Ион натрия (Na⁺)', 'Сульфат-ион'],
          en: ['Fluoride ion (F⁻)', 'Chloride ion (Cl⁻)', 'Sodium ion (Na⁺)', 'Sulfate ion'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'Фторид иондары фторапатит түзеді.',
          ru: 'Фториды образуют стойкий фторапатит.',
          en: 'Fluorides form acid-resistant fluorapatite.',
        },
      },
    ],
    relatedElements: ['Ca', 'F', 'P', 'O'],
  },

  // 4. Soap & Surfactants
  {
    slug: 'soap-surfactants-chemistry',
    topic: 'home',
    readingTime: 4,
    date: '2026-09-18',
    coverSvgKey: 'soap_surfactants',
    title: {
      kk: 'Мыло мен моющие средства кірді қалай жуып кетіреді?',
      ru: 'Мыло и ПАВ: как химические молекулы растворяют жир и смывают грязь?',
      en: 'Soap and Surfactants: How Molecules Dissolve Grease and Dirt',
    },
    summary: {
      kk: 'Мыло молекулалары екі жақты қасиетке ие: гидрофобты құйрығы майды ұстайды, ал гидрофильді басы сумен байланысып, мицелла түзеді.',
      ru: 'Молекулы ПАВ амфифильны: гидрофобный хвост связывает жир, а гидрофильная голова цепляется за воду, формируя мицеллы.',
      en: 'Surfactants are amphiphilic: a hydrophobic tail binds grease while a hydrophilic head interacts with water to form micelles.',
    },
    body: {
      kk: [
        'Қолды жай сумен жуғанда май мен кір кетпейді, себебі су полярлы, ал май полярсыз зат. Өздеріңіз білетіндей, «ұқсас заттар ұқсастарда ериді».',
        'Мыло — жоғары май қышқылдарының натрий немесе калий тұздары (R-COONa). Оның молекуласы «головастик» пішінді: полярлы гидрофильді бас бөлігі суды жақсы көреді, ал ұзын углеводородты гидрофобты құйрығы судан қашып, майға жабысады.',
        'Май бөлшегін айнала қоршап алған мыло молекулалары «мицелла» деп аталатын шар тәрізді құрылым түзеді. Сыртқы жағы сумен байланысып, майды су ағынымен ағызып әкетеді.',
      ],
      ru: [
        'Обычной водой смыть жир невозможно, так как вода полярна, а жиры неполярны. Известное химическое правило гласит: «подобное растворяется в подобном».',
        'Мыло — это натриевые или калиевые соли высших карбоновых кислот R-COONa. Его молекула дифильна.',
        'Длинный углеводородный хвост (гидрофобный) внедряется в капельку жира, а заряженная головка (гидрофильная) остаётся снаружи в контакте с водой. Образуется мицелла, которая легко уносится водой.',
      ],
      en: [
        'Water alone cannot wash away grease because water is polar while fats are nonpolar. The fundamental chemical rule is "like dissolves like".',
        'Soaps are sodium salts of fatty acids (R-COONa). Their molecules have dual solubility properties (amphiphilic).',
        'The hydrophobic hydrocarbon tail dissolves inside grease droplets, while the hydrophilic carboxylate head faces outward into water, forming a spherical micelle that washes away effortlessly.',
      ],
    },
    didYouKnow: {
      kk: 'Алғашқы мыло өндірісі бұдан 4500 жыл бұрын Ежелгі Вавилонда ағаш күлі мен жануар майын қайнату арқылы жасалған.',
      ru: 'Первое мыло варили в древнем Вавилоне более 4500 лет назад из древесной золы и животного жира.',
      en: 'The earliest recorded soap was produced in ancient Babylon around 2800 BC from wood ash and animal fats.',
    },
    quiz: [
      {
        question: {
          kk: 'Мыло молекуласының майға жабысатын бөлігі қандай?',
          ru: 'Какая часть молекулы мыла связывается с жиром?',
          en: 'Which part of a soap molecule binds to grease?',
        },
        options: {
          kk: ['Гидрофобты құйрығы', 'Гидрофильді басы', 'Су иондары', 'Калий ионы'],
          ru: ['Гидрофобный хвост', 'Гидрофильная головка', 'Ионы воды', 'Ион калия'],
          en: ['Hydrophobic tail', 'Hydrophilic head', 'Water ions', 'Potassium ion'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'Углеводородты гидрофобты құйрық майда ериді.',
          ru: 'Гидрофобный хвост внедряется в жировое загрязнение.',
          en: 'The nonpolar hydrophobic tail dissolves in grease.',
        },
      },
    ],
    relatedElements: ['Na', 'K', 'C', 'H', 'O'],
  },

  // 5. Carbonated Water
  {
    slug: 'carbonated-water-chemistry',
    topic: 'kitchen',
    readingTime: 3,
    date: '2026-09-19',
    coverSvgKey: 'carbonated_water',
    title: {
      kk: 'Газдалған су неге шипиді және бөтелкені ашқанда не болады?',
      ru: 'Почему шипит газировка: химия углекислого газа под давлением',
      en: 'Why Does Fizzy Soda Fizz? The Chemistry of Pressurized CO₂',
    },
    summary: {
      kk: 'Газдалған сусындарда CO₂ газы жоғары қысымда ериді. Бөтелкені ашқанда Генри заңы бойынша қысым төмендеп, газ көпіршіктері сыртқа атылады.',
      ru: 'В газировке газ CO₂ растворён под высоким давлением. При открытии крышки давление падает (закон Генри) и газ бурля выходит из раствора.',
      en: 'Carbon dioxide is dissolved under high pressure in sodas. Opening the cap drops the pressure, causing CO₂ gas to bubble out.',
    },
    body: {
      kk: [
        'Лимонад немесе минералды су бөтелкесін ашқан кезде сыздықтап шыққан дыбыс пен көпіршіктер ағынын байқаймыз. Неге сусын ішінде газ пайда болады?',
        'Өндірісте көмірқышқыл газы (CO₂) суға жоғары қысым астында (3-4 атмосфера) енгізіледі. Генри заңы бойынша: газдың сұйықтықтағы ерігіштігі қысымға тура пропорционал.',
        'Бөтелке қақпағын ашқанда іштегі қысым бірден атмосфералық қысымға дейін төмендейді. Ерітінді аса қаныққан болып, CO₂ газы көпіршіктер түрінде сыртқа бөлінеді.',
      ],
      ru: [
        'При открывании бутылки лимонада или минеральной воды мы слышим громкое шипение и видим бурный рост пузырьков.',
        'На заводе углекислый газ CO₂ закачивается в жидкость под высоким давлением (до 4 атмосфер). Согласно закону Генри, растворимость газа пропорциональна давлению над раствором.',
        'Как только мы снимаем пробку, давление внутри падает до атмосферного, растворимость CO₂ резко снижается, и газ стремительно выходит в виде пузырьков.',
      ],
      en: [
        'Opening a carbonated drink creates an instant hiss and cascade of rising gas bubbles.',
        'Factories force carbon dioxide gas into liquids under high pressure (3-4 atm). Henry\'s Law dictates that gas solubility is directly proportional to pressure.',
        'Uncapping the bottle drops pressure to atmospheric level, dramatically reducing CO₂ solubility and releasing gas bubbles.',
      ],
    },
    didYouKnow: {
      kk: 'Суда ең жақсы еритін газ — аммиак (1 л суда 700 л NH₃ ериді), ал CO₂ 1 л суда шамамен 1.7 л ериді.',
      ru: 'Самый растворимый в воде газ — аммиак (700 литров в 1 литре воды!), а CO₂ растворяется около 1.7 литра.',
      en: 'Ammonia is the most soluble gas in water (700 L per 1 L of water), whereas CO₂ dissolves at about 1.7 L per 1 L.',
    },
    quiz: [
      {
        question: {
          kk: 'Газдың сұйықтықтағы ерігіштігі мен қысым арасындағы байланысты кай заң сипаттайды?',
          ru: 'Какой закон описывает связь растворимости газа с давлением?',
          en: 'Which law describes the relationship between gas solubility and pressure?',
        },
        options: {
          kk: ['Генри заңы', 'Менделеев-Клапейрон заңы', 'Авогадро заңы', 'Бойль-Мариотт заңы'],
          ru: ['Закон Генри', 'Закон Менделеева-Клапейрона', 'Закон Авогадро', 'Закон Бойля-Мариотта'],
          en: ['Henry\'s Law', 'Ideal Gas Law', 'Avogadro\'s Law', 'Boyle\'s Law'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'Генри заңы газдардың ерігіштігін сипаттайды.',
          ru: 'Закон Генри утверждает: C = k * P.',
          en: 'Henry\'s Law states that gas solubility depends on pressure.',
        },
      },
    ],
    relatedElements: ['C', 'O', 'H'],
  },

  // 6. Photosynthesis
  {
    slug: 'photosynthesis-biochemistry',
    topic: 'nature',
    readingTime: 5,
    date: '2026-09-20',
    coverSvgKey: 'photosynthesis',
    title: {
      kk: 'Фотосинтез: жапырақтар оттекті қалай өндіреді?',
      ru: 'Фотосинтез: как зелёный лист превращает солнечный свет в кислород и глюкозу?',
      en: 'Photosynthesis: How Green Leaves Turn Sunlight into Oxygen',
    },
    summary: {
      kk: 'Фотосинтез — хлорофилл қатысында күн жарығы арқылы CO₂ мен H₂O-дан глюкоза мен оттек түзілуінің биохимиялық процесі.',
      ru: 'Фотосинтез — биохимический процесс синтеза глюкозы C₆H₁₂O₆ из CO₂ и H₂O под действием света и хлорофилла с выделением O₂.',
      en: 'Photosynthesis synthesizes glucose C₆H₁₂O₆ from CO₂ and H₂O using light energy and chlorophyll while generating O₂.',
    },
    body: {
      kk: [
        'Жер бетіндегі барлық тирі ағзалардың тыныс алуы фотосинтез процесіне тікелей байланысты. Өсімдіктер күн энергиясын химиялық байланыс энергиясына айналдыратын бірегей биохимиялық фабрикалар.',
        'Өсімдік жапырақтарындағы хлоропласттар құрамында магний ионы бар хлорофилл пигменті болады. Ол күн сәулесінің кванталарын ұстап алады.',
        'Түзілген глюкоза (C₆H₁₂O₆) өсімдікке қорек пен крахмал түзеді, ал қосымша өнім ретінде бөлінген оттек (O₂) атмосфераны байытады.',
      ],
      ru: [
        'Жизнь на Земле существует благодаря фотосинтезу. Зелёные растения являются естественными фотохимическими фабриками.',
        'В хлоропластах растительных клеток содержится хлорофилл — комплексное соединение с ионом магния Mg²⁺ в центре порфиринового кольца.',
        'Под действием квантов света вода фотолизируется, а углекислый газ связывается в глюкозу C₆H₁₂O₆. Кислород O₂ выделяется в атмосферу.',
      ],
      en: [
        'All aerobic life on Earth relies on photosynthesis. Plants serve as planetary photochemical factories.',
        'Chloroplasts inside plant cells contain chlorophyll, a chelated complex with a central magnesium ion Mg²⁺.',
        'Sunlight triggers water photolysis and carbon fixation to produce glucose C₆H₁₂O₆, releasing O₂ gas into the atmosphere.',
      ],
    },
    didYouKnow: {
      kk: 'Әлемдегі оттектің 70%-дан астамын ормандар емес, океандағы микроскопиялық фитопланктондар өндіреді.',
      ru: 'Более 70% кислорода на Земле вырабатывается фитопланктоном в океанах, а не тропическими лесами.',
      en: 'Over 70% of atmospheric oxygen is produced by oceanic phytoplankton rather than rainforests.',
    },
    quiz: [
      {
        question: {
          kk: 'Хлорофилл молекуласының орталығында қай металл ионы орналасқан?',
          ru: 'Ион какого металла находится в центре молекулы хлорофилла?',
          en: 'Which metal ion sits at the center of a chlorophyll molecule?',
        },
        options: {
          kk: ['Магний (Mg²⁺)', 'Темир (Fe²⁺)', 'Кальций (Ca²⁺)', 'Натрий (Na⁺)'],
          ru: ['Магний (Mg²⁺)', 'Железо (Fe²⁺)', 'Кальций (Ca²⁺)', 'Натрий (Na⁺)'],
          en: ['Magnesium (Mg²⁺)', 'Iron (Fe²⁺)', 'Calcium (Ca²⁺)', 'Sodium (Na⁺)'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'Магний ионы хлорофиллге жасыл түс пен жарық жұту қабілетін береді.',
          ru: 'Магний входит в состав порфиринового ядра хлорофилла.',
          en: 'Magnesium sits at the core of the chlorophyll porphyrin ring.',
        },
      },
    ],
    relatedElements: ['Mg', 'C', 'O', 'H'],
  },

  // 7. Fire Extinguisher
  {
    slug: 'fire-extinguisher-chemistry',
    topic: 'industry',
    readingTime: 4,
    date: '2026-09-21',
    coverSvgKey: 'fire_extinguisher',
    title: {
      kk: 'Горение және огнетушитель қалай жұмыс істейді?',
      ru: 'Химия горения и огнетушители: как углекислый газ и порошок тушат пламя?',
      en: 'Chemistry of Fire and How Extinguishers Extinguish Flames',
    },
    summary: {
      kk: 'Жану реакциясы үшін 3 жағдай керек: отын, оттек және температура. Огнетушитель оттекті ығыстырып, температураны түсіреді.',
      ru: 'Горение требует наличия горючего, кислорода и температуры. Огнетушитель перекрывает доступ O₂ и охлаждает очаг.',
      en: 'Fire requires fuel, oxygen, and heat (the fire triangle). Extinguishers isolate O₂ and cool down the fire.',
    },
    body: {
      kk: [
        'Өрт — басқарудан шыққан экзотермиялық тотығу реакциясы. Жану үшбұрышы деп аталатын үш фактор бар: отын, оттек (O₂) және тұтану температурасы.',
        'Көмірқышқылдық огнетушительдер ішінде сығылған сұйық CO₂ болады. Оны шашқанда газ тез ұлғайып, -78°C суық «құрғақ мұз» ағынын түзеді. Ол оттекті ығыстырады.',
        'Порошокты огнетушительдерде натрий гидрокарбонаты (NaHCO₃) болады, ол ыстықта ыдырап CO₂ бөледі.',
      ],
      ru: [
        'Горение — это экзотермическая быстрая реакция окисления. Для поддержания огня необходимы 3 компонента: горючее вещество, кислород O₂ и температура.',
        'Углекислотные огнетушители содержат сжиженный CO₂. При выпуске газ резко расширяется, охлаждаясь до -78°C («сухой лёд»), и вытесняет кислород.',
        'Порошковые огнетушители распыляют гидрокарбонат натрия NaHCO₃, который разлагается от тепла и гасит пламя.',
      ],
      en: [
        'Fire is a rapid exothermic oxidation reaction. It relies on the Fire Triangle: fuel, oxygen, and ignition heat.',
        'Carbon dioxide extinguishers release liquid CO₂ that rapidly expands, cooling to -78°C dry ice snow and displacing oxygen.',
        'Powder extinguishers spray NaHCO₃, which thermal decomposes into CO₂ to smother flames.',
      ],
    },
    didYouKnow: {
      kk: 'Қатты көмірқышқыл газы «құрғақ мұз» деп аталады және ол балқымай, бірден газға сублимацияланады.',
      ru: 'Твёрдый углекислый газ называют «сухим льдом», он сублимирует прямо в газ при -78.5°C.',
      en: 'Solid CO₂ is called "dry ice" and sublimates directly from solid to gas at -78.5°C.',
    },
    quiz: [
      {
        question: {
          kk: 'Жану үшбұрышына кірмейтін фактор қайсысы?',
          ru: 'Какой фактор НЕ входит в треугольник огня?',
          en: 'Which component is NOT part of the Fire Triangle?',
        },
        options: {
          kk: ['Азот газы', 'Оттек', 'Отын', 'Тұтану температурасы'],
          ru: ['Газ азот', 'Кислород', 'Горючее', 'Температура'],
          en: ['Nitrogen gas', 'Oxygen', 'Fuel', 'Heat/Temperature'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'Азот инертті газ және жануды қолдамайды.',
          ru: 'Азот N₂ является инертным газом и не поддерживает горение.',
          en: 'Nitrogen gas is inert and does not support combustion.',
        },
      },
    ],
    relatedElements: ['C', 'O', 'Na', 'H'],
  },

  // 8. Acid Rain
  {
    slug: 'acid-rain-environmental-chemistry',
    topic: 'nature',
    readingTime: 4,
    date: '2026-09-22',
    coverSvgKey: 'acid_rain',
    title: {
      kk: 'Кислотные дожди: экологиядағы қышқыл жауынның зардабы',
      ru: 'Кислотные дожди: как оксиды серы и азота загрязняют атмосферу?',
      en: 'Acid Rain: How Sulfur and Nitrogen Oxides Pollute the Environment',
    },
    summary: {
      kk: 'Өнеркәсіптік SO₂ мен NO₂ газдары бұлттағы сумен әрекеттесіп, күкірт және азот қышқылдарын түзеді, топырақ пен суды қышқылдандырады.',
      ru: 'Промышленные выбросы SO₂ и NO₂ реагируют с влагой воздуха, образуя серную и азотную кислоты, разрушающие экосистемы.',
      en: 'Industrial emissions of SO₂ and NO₂ react with atmospheric water vapor, forming sulfuric and nitric acid rain.',
    },
    body: {
      kk: [
        'Заводтар мен жылу электр станцияларында көмір мен мұнай жаққанда атмосфераға күкірт диоксиді (SO₂) мен азот оксидтері (NO₂) бөлінеді.',
        'Бұл қышқылдық оксидтер бұлттағы су буымен әрекеттеседі: SO₃ + H₂O → H₂SO₄ (күкірт қышқылы) және 2NO₂ + H₂O → HNO₂ + HNO₃ (азот қышқылы).',
        'Кислоталық жауын pH көрсеткіші 5.6-дан төмен су болып табылады. Ол мрамор мүсіндерді, ғимараттарды жеп, ормандар мен көлдердің балықтарын улайды.',
      ],
      ru: [
        'Сжигание угля и нефти на ТЭЦ выделяет в атмосферу диоксид серы SO₂ и оксиды азота NO₂.',
        'Эти оксиды соединяются с каплями воды в облаках: SO₃ + H₂O → H₂SO₄ и 2NO₂ + H₂O → HNO₂ + HNO₃.',
        'Кислотные дожди имеют pH ниже 5.6. Они разрушают мраморные памятники, вымывают питательные вещества из почвы и закисляют водоёмы.',
      ],
      en: [
        'Burning fossil fuels releases sulfur dioxide SO₂ and nitrogen oxides NO₂ into the atmosphere.',
        'These acidic oxides dissolve in cloud moisture: SO₃ + H₂O → H₂SO₄ and 2NO₂ + H₂O → HNO₂ + HNO₃.',
        'Acid rain has a pH below 5.6, corroding marble structures, leaching soil nutrients, and acidifying aquatic ecosystems.',
      ],
    },
    didYouKnow: {
      kk: 'Мрамор мүсіндер (CaCO₃) қышқыл жауынның әсерінен еритін гипсге (CaSO₄) айналып уатылып кетеді.',
      ru: 'Мраморные статуи из CaCO₃ под действием кислотного дождя превращаются в рыхлый гипс CaSO₄.',
      en: 'Marble statues made of CaCO₃ react with sulfuric acid rain to turn into crumbly gypsum CaSO₄.',
    },
    quiz: [
      {
        question: {
          kk: 'Кислотный дождь түзуші басты оксид қайсысы?',
          ru: 'Какой оксид является главным виновником кислотных дождей?',
          en: 'Which oxide is a primary cause of acid rain?',
        },
        options: {
          kk: ['SO₂ және NO₂', 'CO₂ және CO', 'CaO және MgO', 'H₂O және O₂'],
          ru: ['SO₂ и NO₂', 'CO₂ и CO', 'CaO и MgO', 'H₂O и O₂'],
          en: ['SO₂ and NO₂', 'CO₂ and CO', 'CaO and MgO', 'H₂O and O₂'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'Күкірт пен азот оксидтері қышқыл түзеді.',
          ru: 'Оксиды серы и азота образуют серную и азотную кислоты.',
          en: 'Sulfur and nitrogen oxides dissolve into strong acids.',
        },
      },
    ],
    relatedElements: ['S', 'N', 'O', 'H'],
  },

  // 9. Batteries
  {
    slug: 'batteries-electrochemistry',
    topic: 'industry',
    readingTime: 5,
    date: '2026-09-23',
    coverSvgKey: 'batteries',
    title: {
      kk: 'Батарейкалар мен аккумуляторлар электр тоғын қалай өндіреді?',
      ru: 'Как работают батарейки и аккумуляторы: электрохимия гальванических элементов',
      en: 'How Batteries Work: Electrochemistry of Galvanic Cells',
    },
    summary: {
      kk: 'Батарейкада химиялық реакция энергиясы электр тоғына айналады: анодта тотығу, катодта тотықсыздану жүреді.',
      ru: 'В гальваническом элементе энергия химической реакции превращается в электрический ток за счёт процессов на аноде и катоде.',
      en: 'A galvanic cell converts chemical energy directly into electricity via spontaneous anode oxidation and cathode reduction.',
    },
    body: {
      kk: [
        'Смартфондар, сағаттар мен электромобильдер батареясыз жұмыс істей алмайды. Бұл құрылғылардың негізінде Даниэль-Якоби гальвани элементінің принципі жатыр.',
        'Батарейка екі электродтан тұрады: анод (тотығу процесі, электрон береді) және катод (тотықсыздану, электрон алады).',
        'Электрондар сыртқы тізбек бойымен анодтан катодқа қозғалғанда электр тоғы пайда болады.',
      ],
      ru: [
        'Смартфоны и электромобили работают благодаря химическим источникам тока.',
        'Батарейка состоит из двух электродов: анода (где происходит окисление с отдачей электронов) и катода (где происходит восстановление).',
        'Направленный поток электронов по внешней цепи от анода к катоду и есть электрический ток.',
      ],
      en: [
        'Smartphones and electric vehicles rely on electrochemical power cells.',
        'A battery comprises two electrodes: an anode (where oxidation releases electrons) and a cathode (where reduction accepts electrons).',
        'The directed flow of electrons through an external wire creates usable electric current.',
      ],
    },
    didYouKnow: {
      kk: 'Литий-ионды батареяларды ойлап тапқаны үшін 2019 жылы Нобель сыйлығы берілді.',
      ru: 'За разработку литий-ионных аккумуляторов в 2019 году была присуждена Нобелевская премия по химии.',
      en: 'The 2019 Nobel Prize in Chemistry was awarded for the development of lithium-ion batteries.',
    },
    quiz: [
      {
        question: {
          kk: 'Гальвани элементінде тотығу реакциясы қай электродта жүреді?',
          ru: 'На каком электроде происходит процесс окисления?',
          en: 'At which electrode does oxidation occur?',
        },
        options: {
          kk: ['Анодта', 'Катодта', 'Электролитте', 'Корпуста'],
          ru: ['На аноде', 'На катоде', 'В электролите', 'В корпусе'],
          en: ['At the anode', 'At the cathode', 'In electrolyte', 'On casing'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'Анодта әрқашан тотығу (электрон беру) жүреді.',
          ru: 'На аноде всегда происходит окисление.',
          en: 'Anode oxidation always releases electrons.',
        },
      },
    ],
    relatedElements: ['Li', 'Zn', 'Cu', 'Pb'],
  },

  // 10. Food Additives E
  {
    slug: 'food-additives-e-numbers',
    topic: 'health',
    readingTime: 4,
    date: '2026-09-24',
    coverSvgKey: 'food_additives_e',
    title: {
      kk: '«E» таңбалары нені білдіреді: тағамдық кодология химиясы',
      ru: 'Пищевые добавки и индекс «E»: чего стоит бояться, а что абсолютно безопасно?',
      en: 'Food Additives and E-Numbers: What Do They Mean?',
    },
    summary: {
      kk: '«E» индекс сандар Еуропалық қауіпсіздік стандарттары. Мысалы, E300 — лимон/аскорбин қышқылы (витамин C).',
      ru: 'Индекс E означает соответствие системе безопасности Европы. Например, E300 — это обычный витамин C (аскорбиновая кислота).',
      en: 'The E-prefix signifies European safety clearance. For example, E300 is simply vitamin C (ascorbic acid).',
    },
    body: {
      kk: [
        'Азық-түлік қаптамасынан «E» әрпі бар сандарды көргенде көп адам үрейленеді. Шын мәнінде бұл жәй ғана халықаралық химиялық классификация коды.',
        'Е100–Е199 — бояғыштар, Е200–Е299 — консерванттар, Е300–Е399 — антиоксиданттар, Е400–Е499 — стабилизаторлар.',
        'Мысалы, E300 — бұл С витамині (аскорбин қышқылы), ал E500 — кәдімгі ас содасы.',
      ],
      ru: [
        'Буква «E» на этикетках часто пугает покупателей. Однако «E» означает «Europe» и гарантирует проверку добавки.',
        'Классификация: E100-199 — красители, E200-299 — консерванты, E300-399 — антиоксиданты, E400-499 — стабилизаторы.',
        'К примеру, E300 — это витамин C, E500 — питьевая сода, а E330 — лимонная кислота.',
      ],
      en: [
        'The letter "E" on food labels stands for Europe, signifying approved safety evaluations.',
        'Number codes: E100-199 (colorings), E200-299 (preservatives), E300-399 (antioxidants), E400-499 (stabilizers).',
        'For instance, E300 is Vitamin C, E500 is baking soda, and E330 is citric acid.',
      ],
    },
    didYouKnow: {
      kk: 'Кәдімгі алманың өзінде табиғи түрде E101 (рибофлавин), E300 (витамин C) және E296 (яблочная кислота) бар.',
      ru: 'Обычное свежее яблоко содержит природные E101, E300, E296 и E440.',
      en: 'A fresh organic apple naturally contains E101 (riboflavin), E300 (vitamin C), and E296 (malic acid).',
    },
    quiz: [
      {
        question: {
          kk: 'E300 тағамдық қоспасы химияда неге сәйкес келеді?',
          ru: 'Какое вещество скрывается под индексом E300?',
          en: 'Which substance corresponds to index E300?',
        },
        options: {
          kk: ['Аскорбин қышқылы (Витамин C)', 'Ас содасы', 'Тұз', 'Уксус'],
          ru: ['Аскорбиновая кислота (Витамин C)', 'Сода', 'Соль', 'Уксус'],
          en: ['Ascorbic acid (Vitamin C)', 'Baking soda', 'Table salt', 'Vinegar'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'E300 — С витамині.',
          ru: 'E300 — это полезный витамин C.',
          en: 'E300 is vitamin C.',
        },
      },
    ],
    relatedElements: ['C', 'H', 'O'],
  },

  // 11. Precious Metals
  {
    slug: 'precious-metals-gold-silver-platinum',
    topic: 'industry',
    readingTime: 4,
    date: '2026-09-25',
    coverSvgKey: 'precious_metals',
    title: {
      kk: 'Драгоценные металлы: алтын, күміс және платинаның инерттілігі',
      ru: 'Благородные металлы: почему золото, серебро и платина не ржавеют?',
      en: 'Precious Metals: Why Gold, Silver, and Platinum Do Not Corrode',
    },
    summary: {
      kk: 'Асыл металдар (Au, Ag, Pt) оң стандартты электродтық потенциалға ие, сондықтан оттек пен қышқылдарда тотықпайды.',
      ru: 'Благородные металлы имеют высокий положительный стандартный потенциал, поэтому не реагируют с O₂ и большинством кислот.',
      en: 'Noble metals have high positive standard reduction potentials, resisting oxidation by oxygen and standard acids.',
    },
    body: {
      kk: [
        'Алтын (Au), күміс (Ag) және платина (Pt) неге мыңдаған жылдар бойы өз жылтырын жоғалтпайды?',
        'Металдардың белсенділік қатарында бұл металдар ең оң жақта (сутекден кейін) тұр.',
        'Алтын тіпті азот немесе тұз қышқылында жеке ерімейді. Оны тек «царская vodka» (HNO₃ + 3HCl) қоспасы ғана еріте алады.',
      ],
      ru: [
        'Золото Au, серебро Ag и платина Pt ценятся за химическую стойкость.',
        'В электрохимическом ряду напряжений они стоят правее всех, обладая высокими потенциалами.',
        'Растворить золото может только «царская водка» — смесь концентрированных азотной и соляной кислот (1:3).',
      ],
      en: [
        'Gold (Au), silver (Ag), and platinum (Pt) are prized for their extreme chemical resistance.',
        'Positioned at the far right of the reactivity series, they hold high positive reduction potentials.',
        'Gold dissolves only in "aqua regia" — a 1:3 mixture of concentrated nitric and hydrochloric acids.',
      ],
    },
    didYouKnow: {
      kk: 'Царская водка алтынды еріткенде тетрахлораурат қышқылы [HAuCl₄] түзіледі.',
      ru: 'При растворении золота в царской водке образуется золотохлористоводородная кислота H[AuCl₄].',
      en: 'Dissolving gold in aqua regia forms chloroauric acid H[AuCl₄].',
    },
    quiz: [
      {
        question: {
          kk: 'Алтынды еріте алатын «царская водка» қоспасы қандай қышқылдардан тұрады?',
          ru: 'Из каких кислот состоит «царская водка»?',
          en: 'Which acids make up "aqua regia"?',
        },
        options: {
          kk: ['HNO₃ + 3HCl', 'H₂SO₄ + HCl', 'HNO₃ + H₂SO₄', 'CH₃COOH + HCl'],
          ru: ['HNO₃ + 3HCl', 'H₂SO₄ + HCl', 'HNO₃ + H₂SO₄', 'CH₃COOH + HCl'],
          en: ['HNO₃ + 3HCl', 'H₂SO₄ + HCl', 'HNO₃ + H₂SO₄', 'CH₃COOH + HCl'],
        },
        correctAnswer: 0,
        explanation: {
          kk: '1 көлем HNO3 және 3 көлем HCl.',
          ru: '1 часть азотной и 3 части соляной кислоты.',
          en: '1 part nitric acid to 3 parts hydrochloric acid.',
        },
      },
    ],
    relatedElements: ['Au', 'Ag', 'Pt', 'Cl', 'N'],
  },

  // 12. Salt of Kazakhstan
  {
    slug: 'salt-kazakhstan-aral-sea',
    topic: 'kazakhstan',
    readingTime: 4,
    date: '2026-09-26',
    coverSvgKey: 'salt_aral',
    title: {
      kk: 'Қазақстан тұзы: Арал теңізі мен Аралтуз химиясы',
      ru: 'Соль Казахстана: химия галита, Аральское море и комбинат «Аралтуз»',
      en: 'Salt of Kazakhstan: Halite Chemistry and the Aral Sea Mineral Industry',
    },
    summary: {
      kk: 'Қазақстанның Арал өңіріндегі NaCl (галит) иодталған ас тұзын өндірудің және химия өнеркәсібінің ірі көзі болып табылады.',
      ru: 'Соляные месторождения Аральского региона — гигантский источник галита NaCl для пищевой и химической промышленности.',
      en: 'The salt deposits of Kazakhstan\'s Aral region supply pure halite (NaCl) for food iodization and chemical manufacturing.',
    },
    body: {
      kk: [
        'Қазақстан — ас тұзының (NaCl) бай қорына ие ел. Арал өңіріндегі Жақсықылыш көлінің базасында орналасқан «Аралтуз» комбинаты елімізді және көрші елдерді сапалы тұзбен қамтамасыз етеді.',
        'Ас тұзы — иондық кристалдық торы бар натрий хлориді (NaCl). Тұзды иодтау үшін оған калий йодаты (KIO₃) косылады, бұл зоб ауруының алдын алады.',
        'Химия өнеркәсібінде NaCl электролизі арқылы хлор газы (Cl₂), сутек (H₂) және натрий гидроксиді (NaOH) алынады.',
      ],
      ru: [
        'Казахстан обладает уникальными соляными озёрами. На базе озера Жаксыкылыш работает комбинат «Аралтұз».',
        'Поваренная соль — это минерал галит (NaCl). Для профилактики дефицита йода в соль добавляют йодат калия KIO₃.',
        'В промышленности электролизом раствора NaCl получают важнейшие продукты: хлор Cl₂, водород H₂ и едкий натр NaOH.',
      ],
      en: [
        'Kazakhstan features world-class salt lakes. The "Araltuz" plant at Lake Zhaksykylysh processes pure halite deposits.',
        'Table salt is sodium chloride (NaCl). To prevent thyroid iodine deficiency, potassium iodate KIO₃ is added.',
        'Industrial electrolysis of aqueous NaCl yields chlorine gas Cl₂, hydrogen H₂, and sodium hydroxide NaOH.',
      ],
    },
    didYouKnow: {
      kk: 'Арал тұзы 99.8% таза натрий хлоридінен тұрады және әлемдік сапа стандартына ие.',
      ru: 'Соль Аральского месторождения содержит до 99.8% чистого NaCl без тяжелых примесей.',
      en: 'Aral salt deposits yield up to 99.8% pure NaCl, making it among the purest natural rock salts worldwide.',
    },
    quiz: [
      {
        question: {
          kk: 'Тұзды иодтау үшін қандай зат қосылады?',
          ru: 'Какое вещество добавляют в соль для йодирования?',
          en: 'Which compound is added to salt for iodization?',
        },
        options: {
          kk: ['Калий йодаты (KIO₃)', 'Таза йод (I₂)', 'Натрий бромиді (NaBr)', 'Кальций хлориді'],
          ru: ['Йодат калия (KIO₃)', 'Чистый кристаллический йод (I₂)', 'Бромид натрия', 'Хлорид кальция'],
          en: ['Potassium iodate (KIO₃)', 'Pure elemental iodine (I₂)', 'Sodium bromide', 'Calcium chloride'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'KIO₃ тұрақты қосылыс болып табылады.',
          ru: 'KIO₃ — стойкое соединение йода.',
          en: 'KIO₃ is a thermally stable iodizing agent.',
        },
      },
    ],
    relatedElements: ['Na', 'Cl', 'I', 'K'],
  },

  // 13. Oil & Gas Kazakhstan
  {
    slug: 'oil-gas-kazakhstan-chemistry',
    topic: 'kazakhstan',
    readingTime: 5,
    date: '2026-09-27',
    coverSvgKey: 'oil_gas_kz',
    title: {
      kk: 'Қазақстан мұнайы мен газы: Теңіз бен Қашаған мұнайының өңделуі',
      ru: 'Нефть и газ Казахстана: химия переработки углеводородов Тенгиза и Карачаганака',
      en: 'Kazakhstan Oil and Gas: Hydrocarbon Chemistry of Tengiz and Kashagan',
    },
    summary: {
      kk: 'Қазақстан мұнайы алкандар мен циклоалкандарға бай. Ректификация, крекинг және риформинг арқылы бензин мен керосин алынады.',
      ru: 'Казахстанская нефть богата алканами и циклоалканами. Фракционная перегонка и крекинг превращают сырьё в высокооктановый бензин.',
      en: 'Kazakhstani crude oil is rich in alkanes and cycloalkanes. Fractional distillation and cracking refine it into high-octane gasoline.',
    },
    body: {
      kk: [
        'Қазақстан — әлемдегі мұнай мен газ өндіруші жетекші мемлекеттердің бірі (Теңіз, Қашаған, Қарашығанақ кен орындары).',
        'Шикі мұнай — әртүрлі көмірсутектердің (алкандар, циклоалкандар, ароматикалық көмірсутектер) күрделі қоспасы.',
        'Мұнай өңдеу зауыттарында (Атырау, Павлодар, Шымкент) ректификациялық бағанада фракцияларға (газ, бензин, керосин, солярка, мазут) бөлінеді.',
      ],
      ru: [
        'Казахстан входит в топ мировых экспортеров углеводородов (месторождения Тенгиз, Кашаган, Карачаганак).',
        'Сырая нефть — это смесь углеводородов разной молекулярной массы (C_n H_{2n+2}).',
        'На НПЗ (Атырау, Павлодар, Шымкент) нефть проходит ректификацию, а термический и каталитический крекинг расщепляет длинные молекулы мазута в бензин.',
      ],
      en: [
        'Kazakhstan ranks among the top global oil exporters (Tengiz, Kashagan, Karachaganak fields).',
        'Crude oil is a liquid mixture of hydrocarbons (alkanes C_n H_{2n+2}, cycloalkanes, aromatics).',
        'Refineries in Atyrau, Pavlodar, and Shymkent separate crude into fractions and use catalytic cracking to yield high-octane fuels.',
      ],
    },
    didYouKnow: {
      kk: 'Теңіз мұнайында күкіртсутек (H₂S) көп болғандықтан, өндірісте жылына миллиондаған тонна таза сары күкірт (S) бөліп алынады.',
      ru: 'Из-за высокого содержания H₂S на Тенгизе попутно выделяют миллионы тонн товарной серы высокой чистоты.',
      en: 'High H₂S content in Tengiz crude yields millions of tons of pure elemental sulfur byproduct annually.',
    },
    quiz: [
      {
        question: {
          kk: 'Мұнайды температура бойынша фракцияларға бөлу процесі қалай аталады?',
          ru: 'Как называется процесс разделения нефти на фракции по температурам кипения?',
          en: 'What is the process of separating crude oil into fractions by boiling point called?',
        },
        options: {
          kk: ['Ректификация (айдау)', 'Гидратация', 'Полимеризация', 'Этерификация'],
          ru: ['Ректификация (перегонка)', 'Гидратация', 'Полимеризация', 'Этерификация'],
          en: ['Fractional distillation', 'Hydration', 'Polymerization', 'Esterification'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'Ректификация — физикалық айдау процесі.',
          ru: 'Ректификация разделяет компоненты по температурам кипения.',
          en: 'Fractional distillation separates components by boiling range.',
        },
      },
    ],
    relatedElements: ['C', 'H', 'S'],
  },

  // 14. Water Hardness & Filters
  {
    slug: 'water-hardness-limescale-filters',
    topic: 'home',
    readingTime: 4,
    date: '2026-09-28',
    coverSvgKey: 'water_hardness_filters',
    title: {
      kk: 'Судың жесткості, шәйнектегі накипь және фильтрлердің жұмысы',
      ru: 'Жёсткость воды: отчего образуется накипь в чайнике и как работают ионообменные фильтры?',
      en: 'Water Hardness: Limescale Formation and How Ion-Exchange Filters Work',
    },
    summary: {
      kk: 'Судың жесткості Ca²⁺ және Mg²⁺ иондарынан болады. Қайнатқанда Ca(HCO₃)₂ ерімейтін накипьге (CaCO₃) айналады.',
      ru: 'Жёсткость обусловлена ионами Ca²⁺ и Mg²⁺. При кипячении гидрокарбонаты выпадают в осадок накипи CaCO₃.',
      en: 'Water hardness is caused by dissolved Ca²⁺ and Mg²⁺ ions. Heating decomposes bicarbonates into insoluble CaCO₃ limescale.',
    },
    body: {
      kk: [
        'Шәйнек түбіндегі ақ накипь және сабынның нашар көпіруі — қатты судың басты белгілері.',
        'Судың уақытша жесткості кальций гидрокарбонатынан Ca(HCO₃)₂ туындайды. Қайнатқан кезде ол ыдырап, ерімейтін кальций карбонатын CaCO₃ (накипь) түзеді.',
        'Заманауи су фильтрлері ион алмастырғыш смолаларды (катиониттер) пайдаланады: Ca²⁺ мен Mg²⁺ иондарын ұстап калып, орнына қауіпсіз Na⁺ иондарын бөледі.',
      ],
      ru: [
        'Белый налёт на стенках чайника и плохая мылкость воды — признаки высокой жёсткости.',
        'Временная жёсткость вызвана гидрокарбонатами Ca(HCO₃)₂ и Mg(HCO₃)₂. При нагревании они разлагаются: Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑.',
        'Ионообменные фильтры содержат смолу, которая заменяет ионы Ca²⁺ и Mg²⁺ на ионы Na⁺, умягчая воду.',
      ],
      en: [
        'Limescale build-up inside kettles is caused by high mineral water hardness.',
        'Temporary hardness is due to Ca(HCO₃)₂. Boiling triggers thermal decomposition: Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑.',
        'Ion-exchange filters contain resin beads that swap Ca²⁺ and Mg²⁺ ions for harmless Na⁺ ions, softening the water.',
      ],
    },
    reaction: {
      equation: '$\\text{Ca(HCO}_3)_2 \\xrightarrow{t^\\circ} \\text{CaCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$',
      type: {
        kk: 'Термиялық ыдырау реакциясы',
        ru: 'Термическое разложение',
        en: 'Thermal decomposition',
      },
      explanation: {
        kk: ['Қыздырғанда гидрокарбонат ажырап, ерімейтін кальций карбонаты түзіледі.'],
        ru: ['При нагревании растворимый гидрокарбонат превращается в твёрдый карбонат.'],
        en: ['Heating converts soluble bicarbonate into insoluble calcium carbonate.'],
      },
      balancerEquation: 'Ca(HCO3)2 = CaCO3 + H2O + CO2',
    },
    didYouKnow: {
      kk: 'Лимон қышқылы немесе сірке суы шәйнектегі накипьді (CaCO₃) оңай ерітіп тазалайды.',
      ru: 'Лимонная кислота легко растворяет накипь CaCO₃, превращая её в растворимый цитрат кальция.',
      en: 'Citric acid readily dissolves limescale CaCO₃ by forming soluble calcium citrate.',
    },
    quiz: [
      {
        question: {
          kk: 'Судың уақытша жесткостін жоюдың ең қарапайым жолы қандай?',
          ru: 'Какой самый простой способ устранить временную жёсткость воды?',
          en: 'What is the simplest way to remove temporary water hardness?',
        },
        options: {
          kk: ['Суды қайнату', 'Суды мұздату', 'Тұз қосу', 'Күнге қою'],
          ru: ['Кипячение воды', 'Замораживание', 'Добавление соли', 'Отстаивание на солнце'],
          en: ['Boiling the water', 'Freezing water', 'Adding salt', 'Sunlight exposure'],
        },
        correctAnswer: 0,
        explanation: {
          kk: 'Қайнатқанда гидрокарбонаттар ыдырайды.',
          ru: 'Кипячение разлагает гидрокарбонаты кальция и магния.',
          en: 'Boiling decomposes soluble calcium and magnesium bicarbonates.',
        },
      },
    ],
    relatedElements: ['Ca', 'Mg', 'C', 'O', 'H'],
    relatedSection: 'balancer',
  },
];
