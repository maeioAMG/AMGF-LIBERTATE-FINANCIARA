document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        // Navigație
        'nav-home': { ro: 'Acasă', en: 'Home', fr: 'Accueil', ru: 'Главная' },
        'nav-about': { ro: 'Despre Noi', en: 'About Us', fr: 'À Propos', ru: 'О нас' },
        'nav-why': { ro: 'De Ce AMGF?', en: 'Why AMGF?', fr: 'Pourquoi AMGF?', ru: 'Почему AMGF?' }, 
        'nav-links': { ro: 'Link-uri Utile', en: 'Useful Links', fr: 'Liens Utiles', ru: 'Полезные Ссылки' }, 
        'nav-vision': { ro: 'Viziune', en: 'Vision', fr: 'Vision', ru: 'Видение' }, 
        'nav-roadmap': { ro: 'Roadmap', en: 'Roadmap', fr: 'Feuille de Route', ru: 'Дорожная Карта' },
        'nav-liquidity': { ro: 'Transparență', en: 'Transparency', fr: 'Transparence', ru: 'Прозрачность' },
        'nav-tokenomics': { ro: 'Tokenomics', en: 'Tokenomics', fr: 'Tokenomics', ru: 'Токеномика' },
        'nav-disclaimer': { ro: 'Disclaimer', en: 'Disclaimer', fr: 'Avertissement', ru: 'Отказ от ответственности' },
        'nav-whitepaper': { ro: 'Cartea Albă', en: 'Whitepaper', fr: 'Livre Blanc', ru: 'Whitepaper' },
        
        // Header
        'hero-title': { ro: 'AMGF', en: 'AMGF', fr: 'AMGF', ru: 'AMGF' },
        'hero-subtitle': { ro: 'Libertate Financiară', en: 'Financial Freedom', fr: 'Liberté Financière', ru: 'Финансовая Свобода' },

        // Secțiunea Despre Noi
        'about-title': { 
            ro: 'Cine Suntem și De Ce AMGF?', 
            en: 'Who We Are and Why AMGF?', 
            fr: 'Qui Sommes-Nous et Pourquoi AMGF?', 
            ru: 'Кто Мы и Почему AMGF?' 
        },
        'about-p1': { 
            ro: 'Salut, sunt <b>"Fondatorul AMGF"</b>, o persoană obișnuită, cu o pasiune extraordinară pentru viitorul pe care îl aduc Web3 și criptomonedele. La 53 de ani, am explorat acest univers digital de câțiva ani, participând la numeroase proiecte și airdrop-uri. Am văzut atât povești de succes incredibile, cât și eșecuri dureroase – experiențe care m-au învățat enorm despre potențialul și riscurile acestui domeniu.', 
            en: 'Hello, I am the <b>"AMGF Founder"</b>, an ordinary person with an extraordinary passion for the future brought by Web3 and cryptocurrencies. At 53, I\'ve explored this digital universe for several years, participating in numerous projects and airdrops. I\'ve seen incredible success stories as well as painful failures – experiences that taught me a lot about the potential and risks of this field.',
            fr: 'Bonjour, je suis le <b>"Fondateur d\'AMGF"</b>, une personne ordinaire avec une passion extraordinaire pour l\'avenir apporté par le Web3 et les crypto-monnaies. À 53 ans, j\'ai exploré cet univers numérique pendant plusieurs années, participant à de nombreux projets et airdrops. J\'ai vu d\'incroyables réussites ainsi que des échecs douloureux – expériences qui m\'ont beaucoup appris sur le potentiel et les risques de ce domaine.',
            ru: 'Здравствуйте, я <b>"Основатель AMGF"</b>, обычный человек с необычайной страстью к будущему, которое приносят Web3 и криптовалюты. В свои 53 года я несколько лет изучал эту цифровую вселенную, участвуя в многочисленных проектах и аирдропах. Я видел как невероятные истории успеха, так и болезненные неудачи — опыт, который многому научил меня о потенциале и рисках этой области.'
        },
        'about-p2': { 
            ro: 'Ca mulți alții, m-am săturat să investesc timp și încredere în proiecte anonime, conduse de interese necunoscute. Așa s-a născut AMGF. Am decis că este timpul să investesc în mine însumi și să construiesc un proiect în care cred cu adevărat, bazat pe transparență, utilitate și o comunitate autentică.', 
            en: 'Like many others, I grew tired of investing time and trust in anonymous projects driven by unknown interests. This is how AMGF was born. I decided it was time to invest in myself and build a project I truly believe in, based on transparency, utility, and an authentic community.',
            fr: 'Comme beaucoup d\'autres, j\'étais fatigué d\'investir du temps et de la confiance dans des projets anonymes guidés par des intérêts inconnus. C\'est ainsi qu\'AMGF est né. J\'ai décidé qu\'il était temps d\'investir en moi-même et de construire un projet auquel je crois vraiment, basé sur la transparence, l\'utilité et une communauté authentique.',
            ru: 'Как и многие другие, я устал вкладывать время и доверие в анонимные проекты, движимые неизвестными интересами. Так родился AMGF. Я решил, что пришло время инвестировать в себя и построить проект, в который я искренне верю, основанный на прозрачности, полезности и подлинном сообществе.'
        },
        'about-p3': { 
            ro: 'AMGF nu este creat de un "expert financiar" de pe Wall Street, ci de o persoană reală, care înțelege provocările și aspirațiile celor care își doresc libertatea financiară. Viziunea mea pentru AMGF este simplă: să creăm un ecosistem unde oricine, indiferent de vârstă sau experiență anterioară, poate învăța, contribui și crește alături de noi. Ne propunem să oferim un spațiu sigur și valoros, diferit de promisiunile goale și schemele rapide care domină adesea spațiul crypto.', 
            en: 'AMGF is not created by a Wall Street "financial expert," but by a real person who understands the challenges and aspirations of those seeking financial freedom. My vision for AMGF is simple: to create an ecosystem where anyone, regardless of age or prior experience, can learn, contribute, and grow with us. We aim to provide a safe and valuable space, different from the empty promises and quick schemes that often dominate the crypto space.',
            fr: 'AMGF n\'est pas créé par un "expert financier" de Wall Street, but par une personne réelle qui comprend les défis et les aspirations de ceux qui recherchent la liberté financière. Ma vision pour AMGF est simple : créer un écosystème où tout le monde, quel que soit l\'âge ou l\'expérience antérieure, peut apprendre, contribuer et grandir avec nous. Nous visons à fournir un espace sûr et précieux, différent des promesses vides et des schémas rapides qui dominent souvent l\'espace crypto.',
            ru: 'AMGF создан не "финансовым экспертом" с Уолл-стрит, а реальным человеком, который понимает проблемы и стремления тех, кто ищет финансовой свободы. Мое видение AMGF просто: создать экосистему, где каждый, независимо от возраста или предыдущего опыта, может учиться, вносить свой вклад и расти вместе с нами. Мы стремимся предоставить безопасное и ценное пространство, отличное от пустых обещаний и быстрых схем, которые часто доминируют в криптопространстве.'
        },
        'about-p4': { 
            ro: 'Suntem aici pentru a construi pe termen lung, împreună cu voi. Încrederea se câștigă prin fapte, nu prin vorbe, iar AMGF este angajamentul meu față de un viitor mai bun, construit pas cu pas, alături de comunitate.', 
            en: 'We are here to build for the long term, together with you. Trust is earned through actions, not words, and AMGF is my commitment to a better future, built step by step, alongside the community.',
            fr: 'Nous sommes ici pour construire à long terme, avec vous. La confiance se gagne par les actes, pas par les mots, et AMGF est mon engagement envers un avenir meilleur, construit étape par étape, aux côtés de la communauté.',
            ru: 'Мы здесь, чтобы строить на долгосрочную перспективу, вместе с вами. Доверие зарабатывается делами, а не словами, и AMGF — это мое обязательство по отношению к лучшему будущему, построенному шаг за шагом, вместе с сообществом.'
        },
        
        // Secțiunea De Ce AMGF?
        'why-title': { ro: 'De ce AMGF?', en: 'Why AMGF?', fr: 'Pourquoi AMGF?', ru: 'Почему AMGF?' },
        'why-p1': { 
            ro: 'În peisajul dinamic și adesea haotic al Web3 și al criptomonedelor, promisiunile abundă, dar încrederea și informațiile autentice sunt adesea greu de găsit. Mulți, inclusiv eu, am simțit nevoia unui loc unde libertatea financiară să fie nu doar un vis, ci o călătorie reală, susținută de cunoaștere și o comunitate dedicată.', 
            en: 'In the dynamic and often chaotic landscape of Web3 and cryptocurrencies, promises abound, but trust and authentic information are often hard to find. Many, including myself, felt the need for a place where financial freedom is not just a dream, but a real journey, supported by knowledge and a dedicated community.',
            fr: 'Dans le paysage dynamique et souvent chaotique du Web3 et des crypto-monnaies, les promesses abondent, mais la confiance et les informations authentiques sont souvent difficiles à trouver. Beaucoup, y compris moi-même, ont ressenti le besoin d\'un endroit où la liberté financière n\'est pas seulement un rêve, mais un véritable voyage, soutenu par la connaissance et une communauté dédiée.',
            ru: 'В динамичном и часто хаотичном мире Web3 и криптовалют обещаний в избытке, но доверие и подлинная информация часто труднодоступны. Многие, включая меня, чувствовали потребность в месте, где финансовая свобода — это не просто мечта, а реальный путь, поддерживаемый знаниями и преданным сообществом.'
        },
        'why-p2': { 
            ro: 'Aici intervine AMGF. Suntem mai mult decât un token; suntem un ecosistem construit de o persoană obișnuită, la fel ca tine, pasionată de viitor și de potențialul decentralizat. Misiunea noastră este să oferim un spațiu transparent și accesibil unde vei putea învăța, contribui și crește alături de o comunitate unită, transformând aspirația spre independența financiară într-o realitate concretă, pas cu pas.', 
            en: 'This is where AMGF comes in. We are more than just a token; we are an ecosystem built by an ordinary person, just like you, passionate about the future and decentralized potential. Our mission is to provide a transparent and accessible space where you can learn, contribute, and grow alongside a united community, turning the aspiration for financial independence into a concrete reality, step by step.',
            fr: 'C\'est là qu\'intervient AMGF. Nous sommes plus qu\'un simple jeton; nous sommes un écosystème construit par une personne ordinaire, tout comme vous, passionnée par l\'avenir et le potentiel décentralizat. Notre mission est de fournir un spațiu transparent și accesibil où vous pouvez apprendre, contribuer et grandir aux côtés d\'une comunitate unită, transformând l\'aspirare à l\'indépendance financiară en une réalité concretă, étape par étape.',
            ru: 'Вот тут и появляется AMGF. Мы больше, чем просто токен; мы — экосистема, построенная обычным человеком, таким же, как вы, увлеченным будущим и децентрализованным потенциалом. Наша миссия — предоставить прозрачное и доступное пространство, где вы сможете учиться, вносить свой вклад и расти вместе с сплоченным сообществом, превращая стремление к финансовой независимости в конкретную реальность, шаг за шагом.'
        },

        // Secțiunea Link-uri
        'links-title': { ro: 'Comunitate & Tranzacționare', en: 'Community & Trading', fr: 'Communauté & Trading', ru: 'Сообщество и Торговля' },
        'links-desc': { 
            ro: 'Adresa de Contract (BASE): <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>', 
            en: 'Contract Address (BASE): <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>',
            fr: 'Adresse de Contrat (BASE): <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>',
            ru: 'Адрес контракта (BASE): <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>' 
        },
        'link-telegram': { ro: 'Contact Telegram (@amgf_libertate_bot)', en: 'Contact Telegram (@amgf_libertate_bot)', fr: 'Contact Telegram (@amgf_libertate_bot)', ru: 'Контакт Telegram (@amgf_libertate_bot)' },
        'link-exchange1': { ro: 'Cumpără pe Uniswap (Base)', en: 'Buy on Uniswap (Base)', fr: 'Acheter sur Uniswap (Base)', ru: 'Купить на Uniswap (Base)' },
        'link-exchange2': { ro: 'Grafic DexScreener', en: 'DexScreener Chart', fr: 'Graphique DexScreener', ru: 'График DexScreener' },

        // Secțiunea Viziune
        'vision-title': { ro: 'Viziune pe termen lung', en: 'Long-Term Vision', fr: 'Vision à Long Terme', ru: 'Долгосрочное Видение' },
        'vision-p1': { 
            ro: 'Viziunea noastră pentru AMGF depășește orizontul unui simplu token; ne propunem să construim un ecosistem digital vibrant și autosustenabil, o adevărată Organizație Autonomă Descentralizată (DAO), unde libertatea financiară devine accesibilă tuturor. Pe termen lung, AMGF va fi recunoscut nu doar ca un simbol al potențialului Web3, ci ca un catalizator pentru transformarea personală și colectivă.', 
            en: 'Our vision for AMGF extends beyond the horizon of a simple token; we aim to build a vibrant and self-sustaining digital ecosystem, a true Decentralized Autonomous Organization (DAO), where financial freedom becomes accessible to all. In the long term, AMGF will be recognized not only as a symbol of Web3 potential but as a catalyst for personal and collective transformation.',
            fr: 'Notre vision pour AMGF dépasse l\'horizon d\'un simple jeton; nous visons à construire un écosystème numérique vibrant et auto-suffisant, une véritable Organisation Autonome Décentralisée (DAO), où la liberté financiară devine accessible à tous. À long terme, AMGF sera reconnu non seulement comme un symbole al potențialului Web3, ci ca un catalizator pentru transformarea personală și colectivă.',
            ru: 'Наше видение AMGF выходит за рамки простого токена; мы стремимся построить живую и самодостаточную цифровую экосистему, настоящую Децентрализованную Автономную Организацию (DAO), где финансовая свобода становится доступной каждому. В долгосрочной перспективе AMGF будет признан не только символом потенциала Web3, но и катализатором личной и коллективной трансформации.'
        },
        'vision-p2': { 
            ro: 'Ne imaginăm un viitor în care deținătorii de AMGF sunt co-proprietari și arhitecți ai propriului lor destin financiar. Prin platforma noastră, ei vor avea acces la:', 
            en: 'We envision a future where AMGF holders are co-owners and architects of their own financial destiny. Through our platform, they will have access to:',
            fr: 'Nous imaginons un avenir où les détenteurs d\'AMGF sont copropriétaires et architectes de leur propre destin financier. Grâce à notre plateforme, ils auront accès à :',
            ru: 'Мы представляем себе будущее, в котором держатели AMGF являются совладельцами и архитекторами своей собственной финансовой судьбы. Через нашу платформу они получат доступ к:'
        },
        'vision-li1': { 
            ro: '<b>O educație financiară gamificată și practică</b>, adaptată nevoilor reale ale fiecăruia, recompensată direct prin sistemul nostru <b>Learn-to-Earn</b>.', 
            en: '<b>Gamified and practical financial education</b>, tailored to everyone\'s real needs, rewarded directly through our <b>Learn-to-Earn</b> system.',
            fr: '<b>Une éducation financiară gamifiée et pratique</b>, adaptée aux besoins réels de chacun, recompensată direct prin sistemul nostru <b>Learn-to-Earn</b>.',
            ru: '<b>Геймифицированное и практическое финансовое образование</b>, адаптированное к реальным потребностям каждого, вознаграждаемое непосредственно через нашу систему <b>Learn-to-Earn</b>.'
        },
        'vision-li2': { 
            ro: '<b>Instrumente intuitive și analize personalizate</b>, care demistifică lumea investițiilor și îi ajută să ia decizii informate, depășind zgomotul informațional.', 
            en: '<b>Intuitive tools and personalized analytics</b>, which demystify the world of investments and help them make informed decisions, overcoming information noise.',
            fr: '<b>Des outils intuitifs et des analyses personnalisées</b>, qui demistifică lumea investițiilor și îi ajută să ia decizii informate, depășind zgomotul informațional.',
            ru: '<b>Интуитивно понятные инструменты и персонализированная аналитика</b>, которые демистифицируют мир инвестиций и помогают принимать обоснованные решения, преодолевая информационный шум.'
        },
        'vision-li3': { 
            ro: '<b>O comunitate globală activă și interconectată</b>, unde membrii se sprijină reciproc, își împărtășesc experiențele și colaborează la dezvoltarea proiectului prin mecanismul <b>Build-to-Earn</b>.', 
            en: '<b>An active and interconnected global community</b>, where members support each other, share their experiences, and collaborate in the project\'s development through the <b>Build-to-Earn</b> mechanism.',
            fr: '<b>Une comunitate globală activă și interconectată</b>, unde membrii se sprijină reciproc, își împărtășesc experiențele și colaborează la dezvoltarea proiectului prin mecanismul <b>Build-to-Earn</b>.',
            ru: '<b>Активное и взаимосвязанное глобальное сообщество</b>, где участники поддерживают друг друга, делятся опытом и сотрудничают в развитии проекта через механизм <b>Build-to-Earn</b>.'
        },
        'vision-li4': { 
            ro: '<b>Un sistem de guvernanță DAO robust și transparent</b>, unde fiecare deținător de AMGF are o voce reală în deciziile cheie ale ecosistemului, de la alocarea resurselor până la parteneriate strategice și direcția viitoare a fondului colectiv (dacă va fi implementat).', 
            en: '<b>A robust and transparent DAO governance system</b>, where every AMGF holder has a real voice in the ecosystem\'s key decisions, from resource allocation to strategic partnerships and the future direction of the collective fund (if implemented).',
            fr: '<b>Un sistem de guvernanță DAO robust et transparent</b>, unde fiecare deținător de AMGF are o voce reală în deciziile cheie ale ecosistemului, de la alocarea resurselor până la parteneriate strategice și direcția viitoare a fondului colectiv (dacă va fi implementat).',
            ru: '<b>Надежная и прозрачная система управления DAO</b>, где каждый держатель AMGF имеет реальный голос в ключевых решениях экосистемы, от распределения ресурсов до стратегических партнерств и будущего направления коллективного фонда (если будет реализовано).'
        },
        'vision-p3': { 
            ro: 'Pe măsură ce ecosistemul AMGF se maturizează, ne vedem transformându-ne într-un model de autonomie comunitară și de sustenabilitate financiară, unde valoarea este generată și distribuită de și pentru membrii săi. AMGF va fi un exemplu al modului în care tehnologia blockchain poate împuternici indivizii să-și preia controlul asupra viitorului lor financiar, construind împreună o moștenire de încredere și prosperitate.', 
            en: 'As the AMGF ecosystem matures, we see ourselves transforming into a model of community autonomy and financial sustainability, where value is generated and distributed by and for its members. AMGF will be an example of how blockchain technology can empower individuals to take control of their financial future, building a legacy of trust and prosperity.',
            fr: 'À mesure ce ecosistemul AMGF se maturizează, ne vedem transformându-ne într-un model de autonomie comunitară și de sustenabilitate financiară, unde valoarea este generată et distribuée de și pentru membrii săi. AMGF va fi un exemplu al modului în care tehnologia blockchain poate împuternici indivizii să-și preia controlul asupra viitorului lor financiar, construind împreună o moștenire de încredere și prosperitate.',
            ru: 'По мере того, как экосистема AMGF созревает, мы видим, что превращаемся в модель автономности сообщества и финансовой устойчивости, где ценность генерируется и распределяется членами и для членов. AMGF станет примером того, как технология блокчейн может дать людям возможность взять под контроль свое финансовое будущее, совместно создавая наследие доверия и процветания.'
        },

        // ══════════ ROADMAP ══════════
        'roadmap-title': { ro: 'Roadmap', en: 'Roadmap', fr: 'Feuille de Route', ru: 'Дорожная Карта' },
        'roadmap-phase1-label': { ro: 'Faza 1 · 2024–2025 · Fundație', en: 'Phase 1 · 2024–2025 · Foundation', fr: 'Phase 1 · 2024–2025 · Fondation', ru: 'Этап 1 · 2024–2025 · Основание' },
        'roadmap-phase1-title': { ro: 'Lansare & Infrastructură', en: 'Launch & Infrastructure', fr: 'Lancement & Infrastructure', ru: 'Запуск и Инфраструктура' },
        'roadmap-phase1-desc': { ro: 'Crearea tokenului AMGF pe rețeaua Base. Lansarea site-ului principal amgf-finance.com. Construirea comunității Telegram. Publicarea Cărții Albe v1.0. Lansarea AMGF Wallet N.C., Liberty Bot și Airdrop Manager.', en: 'Creation of the AMGF token on the Base network. Launch of the main site amgf-finance.com. Building the Telegram community. Publication of White Paper v1.0. Launch of AMGF Wallet N.C., Liberty Bot and Airdrop Manager.', fr: 'Création du token AMGF sur le réseau Base. Lancement du site principal amgf-finance.com. Construction de la communauté Telegram. Publication du Livre Blanc v1.0. Lancement du Portefeuille AMGF N.C., Liberty Bot et Airdrop Manager.', ru: 'Создание токена AMGF в сети Base. Запуск основного сайта amgf-finance.com. Создание сообщества Telegram. Публикация Белой книги v1.0. Запуск AMGF Wallet N.C., Liberty Bot и Airdrop Manager.' },
        'roadmap-status-done': { ro: '✔ Realizat', en: '✔ Completed', fr: '✔ Réalisé', ru: '✔ Выполнено' },
        'roadmap-phase2-label': { ro: 'Faza 2 · 2025 · Creștere', en: 'Phase 2 · 2025 · Growth', fr: 'Phase 2 · 2025 · Croissance', ru: 'Этап 2 · 2025 · Рост' },
        'roadmap-phase2-title': { ro: 'Ecosistem & Comunitate', en: 'Ecosystem & Community', fr: 'Écosystème & Communauté', ru: 'Экосистема и Сообщество' },
        'roadmap-phase2-desc': { ro: 'Lansarea Staking Hub și AMGF Code App. Campanii de airdrop strategice. Listare pe DEX-uri (Uniswap / Base). Lansarea Crypto Vault Keeper. Parteneriate strategice. Creșterea comunității la 10,000+ membri.', en: 'Launch of Staking Hub and AMGF Code App. Strategic airdrop campaigns. Listing on DEXs (Uniswap / Base). Launch of Crypto Vault Keeper. Strategic partnerships. Growing the community to 10,000+ members.', fr: 'Lancement du Staking Hub et de l\'AMGF Code App. Campagnes d\'airdrop stratégiques. Cotation sur les DEX (Uniswap / Base). Lancement de Crypto Vault Keeper. Partenariats stratégiques. Croissance à 10 000+ membres.', ru: 'Запуск Staking Hub и AMGF Code App. Стратегические аирдроп-кампании. Листинг на DEX (Uniswap / Base). Запуск Crypto Vault Keeper. Стратегические партнерства. Рост до 10 000+ участников.' },
        'roadmap-status-active': { ro: '⚡ În desfășurare', en: '⚡ In Progress', fr: '⚡ En cours', ru: '⚡ В процессе' },
        'roadmap-phase3-label': { ro: 'Faza 3 · 2026 · Maturizare', en: 'Phase 3 · 2026 · Maturation', fr: 'Phase 3 · 2026 · Maturité', ru: 'Этап 3 · 2026 · Созревание' },
        'roadmap-phase3-title': { ro: 'DAO & Learn-to-Earn', en: 'DAO & Learn-to-Earn', fr: 'DAO & Learn-to-Earn', ru: 'DAO и Learn-to-Earn' },
        'roadmap-phase3-desc': { ro: 'Implementarea mecanismului DAO complet. Lansarea platformei educaționale Learn-to-Earn. Sistem Build-to-Earn activ. Audit smart contract independent. Extinderea ecosistemului cu noi instrumente și integrări.', en: 'Implementation of full DAO mechanism. Launch of Learn-to-Earn educational platform. Active Build-to-Earn system. Independent smart contract audit. Ecosystem expansion with new tools and integrations.', fr: 'Mise en place du mécanisme DAO complet. Lancement de la plateforme éducative Learn-to-Earn. Système Build-to-Earn actif. Audit indépendant des smart contracts. Expansion de l\'écosystème.', ru: 'Реализация полного механизма DAO. Запуск платформы Learn-to-Earn. Активная система Build-to-Earn. Независимый аудит. Расширение экосистемы.' },
        'roadmap-status-soon': { ro: '🔜 În pregătire', en: '🔜 Coming Soon', fr: '🔜 Bientôt', ru: '🔜 Скоро' },
        'roadmap-phase4-label': { ro: 'Faza 4 · 2026–2027 · Expansiune', en: 'Phase 4 · 2026–2027 · Expansion', fr: 'Phase 4 · 2026–2027 · Expansion', ru: 'Этап 4 · 2026–2027 · Расширение' },
        'roadmap-phase4-title': { ro: 'Autonomie & Scalare', en: 'Autonomy & Scaling', fr: 'Autonomie & Mise à l\'Échelle', ru: 'Автономия и Масштабирование' },
        'roadmap-phase4-desc': { ro: 'Listare pe exchange-uri centralizate (CEX). Guvernanță DAO complet autonomă. Fond colectiv administrat de comunitate. Extindere internațională. AMGF ca model de autonomie comunitară în Web3.', en: 'Listing on centralized exchanges (CEX). Fully autonomous DAO governance. Community-managed collective fund. International expansion. AMGF as a model of community autonomy in Web3.', fr: 'Cotation sur les CEX. Gouvernance DAO entièrement autonome. Fonds collectif géré par la communauté. Expansion internationale. AMGF comme modèle d\'autonomie dans le Web3.', ru: 'Листинг на CEX. Полностью автономное управление DAO. Коллективный фонд. Международное расширение. AMGF как модель автономии в Web3.' },
        'roadmap-status-future': { ro: '◎ Viitor', en: '◎ Future', fr: '◎ Futur', ru: '◎ Будущее' },
        // ══════════ END ROADMAP ══════════

        // ══════════ TRANSPARENȚĂ LICHIDITATE ══════════
        'liq-title': {
            ro: 'Transparență & Lichiditate Blocată',
            en: 'Transparency & Locked Liquidity',
            fr: 'Transparence & Liquidité Bloquée',
            ru: 'Прозрачность и Заблокированная Ликвидность'
        },
        'liq-founder-msg': {
            ro: '🔒 <strong>Angajamentul Fondatorului:</strong> Fondatorul AMGF adaugă lichiditate treptat și o blochează pe GemPad pentru perioade lungi de timp. Aceasta este dovada concretă a angajamentului pe termen lung față de comunitate — fondurile nu pot fi retrase până la expirarea perioadei de blocare. <strong>Transparența nu este o promisiune, ci o realitate verificabilă public.</strong>',
            en: '🔒 <strong>Founder\'s Commitment:</strong> The AMGF founder gradually adds liquidity and locks it on GemPad for long periods of time. This is concrete proof of long-term commitment to the community — funds cannot be withdrawn until the lock period expires. <strong>Transparency is not a promise, but a publicly verifiable reality.</strong>',
            fr: '🔒 <strong>Engagement du Fondateur:</strong> Le fondateur d\'AMGF ajoute progressivement de la liquidité et la bloque sur GemPad pour de longues périodes. C\'est la preuve concrète de l\'engagement à long terme envers la communauté — les fonds ne peuvent pas être retirés avant l\'expiration de la période de blocage. <strong>La transparence n\'est pas une promesse, mais une réalité vérifiable publiquement.</strong>',
            ru: '🔒 <strong>Обязательство Основателя:</strong> Основатель AMGF постепенно добавляет ликвидность и блокирует её на GemPad на длительные периоды. Это конкретное доказательство долгосрочной приверженности сообществу — средства не могут быть выведены до истечения срока блокировки. <strong>Прозрачность — это не обещание, а публично проверяемая реальность.</strong>'
        },
        'liq-card1-title': {
            ro: 'Lichiditate Blocată',
            en: 'Locked Liquidity',
            fr: 'Liquidité Bloquée',
            ru: 'Заблокированная Ликвидность'
        },
        'liq-card1-desc': {
            ro: 'Uniswap V2 · Rețeaua Base<br>Blocat până pe <strong style="color:#E8B832;">5 Iunie 2027</strong>',
            en: 'Uniswap V2 · Base Network<br>Locked until <strong style="color:#E8B832;">June 5, 2027</strong>',
            fr: 'Uniswap V2 · Réseau Base<br>Bloqué jusqu\'au <strong style="color:#E8B832;">5 Juin 2027</strong>',
            ru: 'Uniswap V2 · Сеть Base<br>Заблокировано до <strong style="color:#E8B832;">5 Июня 2027</strong>'
        },
        'liq-card2-title': {
            ro: 'Echipă & Fondator',
            en: 'Team & Founder',
            fr: 'Équipe & Fondateur',
            ru: 'Команда и Основатель'
        },
        'liq-card2-desc': {
            ro: 'Team & Founder Lock<br><strong style="color:#E8B832;">451+ zile</strong> rămase',
            en: 'Team & Founder Lock<br><strong style="color:#E8B832;">451+ days</strong> remaining',
            fr: 'Blocage Équipe & Fondateur<br><strong style="color:#E8B832;">451+ jours</strong> restants',
            ru: 'Блокировка Команды и Основателя<br><strong style="color:#E8B832;">451+ дней</strong> осталось'
        },
        'liq-card3-title': {
            ro: 'Trezorerie DAO',
            en: 'DAO Treasury',
            fr: 'Trésorerie DAO',
            ru: 'Казначейство DAO'
        },
        'liq-card3-desc': {
            ro: 'DAO Treasury & Ecosystem<br><strong style="color:#E8B832;">Vesting treptat</strong> · 534+ zile',
            en: 'DAO Treasury & Ecosystem<br><strong style="color:#E8B832;">Gradual vesting</strong> · 534+ days',
            fr: 'Trésorerie DAO & Écosystème<br><strong style="color:#E8B832;">Vesting progressif</strong> · 534+ jours',
            ru: 'Казначейство DAO и Экосистема<br><strong style="color:#E8B832;">Постепенный вестинг</strong> · 534+ дней'
        },
        'liq-card4-title': {
            ro: 'Rezervă Fondator',
            en: 'Founder Reserve',
            fr: 'Réserve Fondateur',
            ru: 'Резерв Основателя'
        },
        'liq-card4-desc': {
            ro: 'Founder Reserve Lock<br><strong style="color:#E8B832;">841+ zile</strong> rămase',
            en: 'Founder Reserve Lock<br><strong style="color:#E8B832;">841+ days</strong> remaining',
            fr: 'Blocage Réserve Fondateur<br><strong style="color:#E8B832;">841+ jours</strong> restants',
            ru: 'Блокировка Резерва Основателя<br><strong style="color:#E8B832;">841+ дней</strong> осталось'
        },
        'liq-locked': {
            ro: '🔒 BLOCAT',
            en: '🔒 LOCKED',
            fr: '🔒 BLOQUÉ',
            ru: '🔒 ЗАБЛОКИРОВАНО'
        },
        'liq-vesting': {
            ro: '📈 VESTING',
            en: '📈 VESTING',
            fr: '📈 VESTING',
            ru: '📈 ВЕСТИНГ'
        },
        'liq-total-label': {
            ro: 'Total Fonduri Blocate & Vesting',
            en: 'Total Locked & Vesting Funds',
            fr: 'Total Fonds Bloqués & Vesting',
            ru: 'Всего Заблокировано и Вестинг'
        },
        'liq-total-sub': {
            ro: 'Verificat pe GemPad · Rețeaua Base · Actualizat în timp real',
            en: 'Verified on GemPad · Base Network · Updated in real time',
            fr: 'Vérifié sur GemPad · Réseau Base · Mis à jour en temps réel',
            ru: 'Проверено на GemPad · Сеть Base · Обновляется в реальном времени'
        },
        'liq-verify-btn': {
            ro: 'Verifică pe GemPad',
            en: 'Verify on GemPad',
            fr: 'Vérifier sur GemPad',
            ru: 'Проверить на GemPad'
        },
        // ══════════ END TRANSPARENȚĂ ══════════

        // Secțiunea Tokenomics
        'tokenomics-title': { ro: 'Alocarea Tokenurilor AMGF (Actualizată)', en: 'AMGF Token Allocation (Updated)', fr: 'Allocation des Jetons AMGF (Mise à Jour)', ru: 'Распределение Токенов AMGF (Обновлено)' },
        'tokenomics-th1': { ro: 'Categorie de Alocare', en: 'Allocation Category', fr: 'Catégorie d\'Allocation', ru: 'Категория Распределения' },
        'tokenomics-th2': { ro: 'Procent (%)', en: 'Percentage (%)', fr: 'Pourcentage (%)', ru: 'Процент (%)' },
        'tokenomics-th3': { ro: 'Cantitate AMGF', en: 'AMGF Amount', fr: 'Montant AMGF', ru: 'Количество AMGF' },
        'tokenomics-th4': { ro: 'Scop și Justificare', en: 'Purpose and Justification', fr: 'But et Justification', ru: 'Цель и Обоснование' },
        'tokenomics-th5': { ro: 'Plan de Vesting / Acces', en: 'Vesting / Access Plan', fr: 'Plan de Vesting / Accès', ru: 'План Вестинга / Доступа' },
        'tokenomics-row1-cat': { ro: 'Comunitate & Ecosistem', en: 'Community & Ecosystem', fr: 'Communauté & Écosystème', ru: 'Сообщество и Экосистема' },
        'tokenomics-row1-scope': { ro: 'Susținerea creșterii organice a ecosistemului prin recompense pentru participare (Learn-to-Earn, Build-to-Earn), campanii de promovare, airdrop-uri strategice și stimulente pentru adoptare.', en: 'Supporting the ecosystem\'s organic growth through participation rewards (Learn-to-Earn, Build-to-Earn), promotional campaigns, strategic airdrops, and adoption incentives.', fr: 'Soutien à la croissance organique via récompenses (Learn-to-Earn, Build-to-Earn) et airdrops.', ru: 'Поддержка органического роста через вознаграждения (Learn-to-Earn, Build-to-Earn) и аирдропы.' },
        'tokenomics-row1-vesting': { ro: 'Eliberare treptată pe parcursul a 5-10 ani.', en: 'Gradual release over 5-10 years.', fr: 'Libération progressive sur 5-10 ans.', ru: 'Постепенный выпуск в течение 5-10 лет.' },
        'tokenomics-row2-cat': { ro: 'Trezorerie DAO / Dezvoltare Ecosistem', en: 'DAO Treasury / Ecosystem Development', fr: 'Trésorerie DAO / Développement Écosystème', ru: 'Казначейство DAO / Развитие Экосистема' },
        'tokenomics-row2-scope': { ro: 'Finanțarea dezvoltării platformei, noi parteneriate și audituri sub guvernanța comunității.', en: 'Funding the platform development, new partnerships, and audits under community governance.', fr: 'Financement du développement de la plateforme și de la pérennité du projet, sous gouvernance communautaire.', ru: 'Финансирование разработки платформы и обеспечение устойчивости под управлением сообщества.' },
        'tokenomics-row2-vesting': { ro: 'Blocate într-o trezorerie DAO.', en: 'Locked in a DAO treasury.', fr: 'Bloqué en trésorerie DAO.', ru: 'Заблокировано в казначействе DAO.' },
        'tokenomics-row3-cat': { ro: 'Fond de Lichiditate Inițială (DEX)', en: 'Initial Liquidity Fund (DEX)', fr: 'Fonds de Liquidité Initial (DEX)', ru: 'Начальный Фонд Лиcвиности (DEX)' },
        'tokenomics-row3-scope': { ro: 'Asigurarea lichidității pe burse descentralizate (DEX) pe Base.', en: 'Ensuring liquidity on decentralized exchanges (DEX) on Base.', fr: 'Assurer la liquidité initiale sur les DEXs.', ru: 'Обеспечение начальной ликвидности на DEX.' },
        'tokenomics-row3-vesting': { ro: 'Blocată prin contracte de staking/farming pentru cel puțin 2-5 ani.', en: 'Locked via staking/farming contracts for at least 2-5 years.', fr: 'Verrouillage de 2-5 ans.', ru: 'Блокировки на 2-5 лет.' },
        'tokenomics-row4-cat': { ro: 'Echipa și Fondator', en: 'Team and Founder', fr: 'Équipe et Fondateur', ru: 'Команда и Основатель' },
        'tokenomics-row4-scope': { ro: 'Alocare pentru Fondator și echipa de bază. (Fondatorul: 5%, Echipa 5%)', en: 'Allocation for the Founder and core team. (Founder: 5%, Team 5%)', fr: 'Allocation pour le Fondateur et l\'équipe. (Fondateur: 5%, Équipe 5%)', ru: 'Выделение для Основателя и основной команды. (Основатель: 5%, Команда 5%)' },
        'tokenomics-row4-vesting': { ro: 'Cliff de 1 an, urmat de eliberare pe 3 ani.', en: '1-year cliff, followed by 3-year linear release.', fr: 'Blocage initial d\'1 an, urmată de o libération linéaire sur 3 ans.', ru: 'Начальная блокировка на 1 год, затем выпуск в течение 3 лет.' },
        'tokenomics-total': { ro: 'Total', en: 'Total', fr: 'Total', ru: 'Итого' },
        'tokenomics-note': { ro: '<b>Notă:</b> Strategia Tokenomics este proiectată pentru a minimiza presiunea de vânzare.', en: '<b>Note:</b> The Tokenomics strategy is designed to minimize selling pressure.', fr: '<b>Note:</b> La stratégie Tokenomics vise à minimiser la pression de vente.', ru: '<b>Примечание:</b> Токеномика разработана для минимизации давления продаж.' },
        
        // Disclaimer & Footer
        'disclaimer-title': { ro: 'Disclaimer Legal Important', en: 'Important Legal Disclaimer', fr: 'Avertissement Légal Important', ru: 'Важное Юридическое Предупреждение' },
        'disclaimer-p1': { ro: 'Informațiile prezentate nu constituie sfaturi financiare. Investițiile în crypto implică riscuri.', en: 'The information does not constitute financial advice. Crypto investments involve risks.', fr: 'Les informations ne constituent pas un conseil financier. Les crypto comportent des risques.', ru: 'Информация не является финансовым советом. Инвестиции связаны с риском.' },
        'disclaimer-p2': { ro: 'Efectuați propria cercetare (DYOR).', en: 'Do Your Own Research (DYOR).', fr: 'Faites vos propres recherches (DYOR).', ru: 'Проведите собственное исследование (DYOR).' },
        'disclaimer-p3': { ro: 'Participarea implică acceptarea termenilor.', en: 'Participation implies acceptance of terms.', fr: 'La participation implique l\'acceptation des termes.', ru: 'Участие подразумевает принятие условий.' },
        'footer-copyright': { 
            ro: '&copy; 2025 AMGF Financial Freedom. Toate drepturile rezervate.', 
            en: '&copy; 2025 AMGF Financial Freedom. All rights reserved.',
            fr: '&copy; 2025 AMGF Liberté Financière. Tous droits réservés.',
            ru: '&copy; 2025 AMGF Финансовая Свобода. Все права защищены.'
        },
        'footer-contact': { 
            ro: 'Conectează-te cu noi: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>', 
            en: 'Connect with us: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>',
            fr: 'Connectez-vous avec nous : <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>',
            ru: 'Свяжитесь с нами: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>'
        }
    };

    const availableLanguages = ['ro', 'en', 'fr', 'ru'];
    let currentLanguage = localStorage.getItem('language') || 'ro';
    const languageButton = document.getElementById('language-toggle');
    
    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                if (key.includes('p') || key.includes('li') || key.includes('footer') || key.includes('desc') || key.includes('msg') || key.includes('sub')) {
                     element.innerHTML = translations[key][lang];
                } else {
                     element.textContent = translations[key][lang];
                }
            }
        });

        const displayLang = availableLanguages.map(l => {
            const code = l.toUpperCase();
            return l === lang ? `[${code}]` : code; 
        }).join(' / ');
        
        languageButton.textContent = displayLang; 
        document.body.className = `lang-${currentLanguage}`; 
    }

    function toggleLanguage() {
        const currentIndex = availableLanguages.indexOf(currentLanguage);
        const nextIndex = (currentIndex + 1) % availableLanguages.length;
        currentLanguage = availableLanguages[nextIndex];
        localStorage.setItem('language', currentLanguage);
        applyTranslations(currentLanguage);
    }

    if (languageButton) {
        languageButton.addEventListener('click', toggleLanguage);
    }
    
    applyTranslations(currentLanguage);
});
