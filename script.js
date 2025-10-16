// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Obiect pentru a stoca traducerile (Acum include ro, en, fr, ru)
    const translations = {
        // Navigație
        'nav-home': { ro: 'Acasă', en: 'Home', fr: 'Accueil', ru: 'Главная' },
        'nav-about': { ro: 'Despre Noi', en: 'About Us', fr: 'À Propos', ru: 'О нас' },
        'nav-why': { ro: 'De Ce AMGF?', en: 'Why AMGF?', fr: 'Pourquoi AMGF?', ru: 'Почему AMGF?' }, 
        'nav-links': { ro: 'Link-uri Utile', en: 'Useful Links', fr: 'Liens Utiles', ru: 'Полезные Ссылки' }, 
        'nav-vision': { ro: 'Viziune', en: 'Vision', fr: 'Vision', ru: 'Видение' }, 
        'nav-tokenomics': { ro: 'Tokenomics', en: 'Tokenomics', fr: 'Tokenomics', ru: 'Токеномика' },
        'nav-disclaimer': { ro: 'Disclaimer', en: 'Disclaimer', fr: 'Avertissement', ru: 'Отказ от ответственности' },
        
        // Header
        'hero-title': { ro: 'AMGF', en: 'AMGF', fr: 'AMGF', ru: 'AMGF' },
        'hero-subtitle': { ro: 'Libertate Financiară', en: 'Financial Freedom', fr: 'Liberté Financière', ru: 'Финансовая Свобода' },

        // Buton Limbă
        'language-toggle': { ro: 'RO / EN / FR / RU', en: 'RO / EN / FR / RU', fr: 'RO / EN / FR / RU', ru: 'RO / EN / FR / RU' },

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
            fr: 'Bonjour, je suis le <b>"Fondateur d\'AMGF"</b>, une personne ordinaire avec une passion extraordinaire pour l\'avenir apporté par le Web3 et les crypto-monnaies. À 53 ans, j\'ai exploré cet univers numérique pendant plusieurs années, participant à de nombreux projets et airdrops. J\'ai vu d\'incroyables réussites ainsi que des échecs douloureux – des expériences qui m\'ont beaucoup appris sur le potentiel et les risques de ce domaine.',
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
            fr: 'AMGF n\'est pas créé par un "expert financier" de Wall Street, mais par une personne réelle qui comprend les défis et les aspirations de ceux qui recherchent la liberté financière. Ma vision pour AMGF est simple : créer un écosystème où tout le monde, quel que soit l\'âge ou l\'expérience antérieure, peut apprendre, contribuer et grandir avec nous. Nous visons à fournir un espace sûr et précieux, différent des promesses vides et des schémas rapides qui dominent souvent l\'espace crypto.',
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
            fr: 'C\'est là qu\'intervient AMGF. Nous sommes plus qu\'un simple jeton; nous sommes un écosystème construit par une personne ordinaire, tout comme vous, passionnée par l\'avenir et le potentiel décentralisé. Notre mission est de fournir un espace transparent et accessible où vous pouvez apprendre, contribuer et grandir aux côtés d\'une communauté unie, transformant l\'aspiration à l\'indépendance financière en une réalité concrète, étape par étape.',
            ru: 'Вот тут и появляется AMGF. Мы больше, чем просто токен; мы — экосистема, построенная обычным человеком, таким же, как вы, увлеченным будущим и децентрализованным потенциалом. Наша миссия — предоставить прозрачное и доступное пространство, где вы сможете учиться, вносить свой вклад и расти вместе с сплоченным сообществом, превращая стремление к финансовой независимости в конкретную реальность, шаг за шагом.'
        },

        // Secțiunea Link-uri (MODIFICATĂ)
        'links-title': { 
            ro: 'Comunitate & Tranzacționare', 
            en: 'Community & Trading', 
            fr: 'Communauté & Trading', 
            ru: 'Сообщество и Торговля' 
        },
        'links-desc': { 
            ro: 'Adresa de Mint (Solana): <b>HhQ6zu27pugw9KnxvvjGZFcPzwhwoT1U8AZJAmhECEJp</b>', 
            en: 'Mint Address (Solana): <b>HhQ6zu27pugw9KnxvvjGZFcPzwhwoT1U8AZJAmhECEJp</b>',
            fr: 'Adresse de Mint (Solana): <b>HhQ6zu27pugw9KnxvvjGZFcPzwhwoT1U8AZJAmhECEJp</b>',
            ru: 'Адрес Mint (Solana): <b>HhQ6zu27pugw9KnxvvjGZFcPzwhwoT1U8AZJAmhECEJp</b>' 
        },
        'link-telegram': { 
            ro: 'Contact Telegram (@amgf_libertate_bot)', 
            en: 'Contact Telegram (@amgf_libertate_bot)',
            fr: 'Contact Telegram (@amgf_libertate_bot)',
            ru: 'Контакт Telegram (@amgf_libertate_bot)' 
        },
        'link-exchange1': { 
            ro: '**PumpFun**', 
            en: '**PumpFun**',
            fr: '**PumpFun**',
            ru: '**PumpFun**'
        },
        'link-exchange2': { 
            ro: 'Verifică Adresa de Mint (SolanaScan)', 
            en: 'Verify Mint Address (SolanaScan)',
            fr: 'Vérifiez l\'Adresse de Mint (SolanaScan)',
            ru: 'Проверить Адрес Mint (SolanaScan)' 
        },

        // Secțiunea Viziune
        'vision-title': { ro: 'Viziune pe termen lung', en: 'Long-Term Vision', fr: 'Vision à Long Terme', ru: 'Долгосрочное Видение' },
        'vision-p1': { 
            ro: 'Viziunea noastră pentru AMGF depășește orizontul unui simplu token; ne propunem să construim un ecosistem digital vibrant și autosustenabil, o adevărată Organizație Autonomă Descentralizată (DAO), unde libertatea financiară devine accesibilă tuturor. Pe termen lung, AMGF va fi recunoscut nu doar ca un simbol al potențialului Web3, ci ca un catalizator pentru transformarea personală și colectivă.', 
            en: 'Our vision for AMGF extends beyond the horizon of a simple token; we aim to build a vibrant and self-sustaining digital ecosystem, a true Decentralized Autonomous Organization (DAO), where financial freedom becomes accessible to all. In the long term, AMGF will be recognized not only as a symbol of Web3 potential but as a catalyst for personal and collective transformation.',
            fr: 'Notre vision pour AMGF dépasse l\'horizon d\'un simple jeton; nous visons à construire un écosystème numérique vibrant et auto-suffisant, une véritable Organisation Autonome Décentralisée (DAO), où la liberté financière devient accessible à tous. À long terme, AMGF sera reconnu non seulement comme un symbole du potentiel Web3, mais comme un catalyseur pour la transformation personnelle et collective.',
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
            fr: '<b>Une éducation financière gamifiée et pratique</b>, adaptée aux besoins réels de chacun, récompensée directement par notre système <b>Learn-to-Earn</b>.',
            ru: '<b>Геймифицированное и практическое финансовое образование</b>, адаптированное к реальным потребностям каждого, вознаграждаемое непосредственно через нашу систему <b>Learn-to-Earn</b>.'
        },
        'vision-li2': { 
            ro: '<b>Instrumente intuitive și analize personalizate</b>, care demistifică lumea investițiilor și îi ajută să ia decizii informate, depășind zgomotul informațional.', 
            en: '<b>Intuitive tools and personalized analytics</b>, which demystify the world of investments and help them make informed decisions, overcoming information noise.',
            fr: '<b>Des outils intuitifs et des analyses personnalisées</b>, qui démystifient le monde des investissements et les aident à prendre des décisions éclairées, en dépassant le bruit informationnel.',
            ru: '<b>Интуитивно понятные инструменты и персонализированная аналитика</b>, которые демистифицируют мир инвестиций и помогают принимать обоснованные решения, преодолевая информационный шум.'
        },
        'vision-li3': { 
            ro: '<b>O comunitate globală activă și interconectată</b>, unde membrii se sprijină reciproc, își împărtășesc experiențele și colaborează la dezvoltarea proiectului prin mecanismul <b>Build-to-Earn</b>.', 
            en: '<b>An active and interconnected global community</b>, where members support each other, share their experiences, and collaborate in the project\'s development through the <b>Build-to-Earn</b> mechanism.',
            fr: '<b>Une communauté mondiale active et interconnectée</b>, où les membres se soutiennent mutuellement, partagent leurs expériences et collaborent au développement du projet via le mécanisme <b>Build-to-Earn</b>.',
            ru: '<b>Активное и взаимосвязанное глобальное сообщество</b>, где участники поддерживают друг друга, делятся опытом и сотрудничают в развитии проекта через механизм <b>Build-to-Earn</b>.'
        },
        'vision-li4': { 
            ro: '<b>Un sistem de guvernanță DAO robust și transparent</b>, unde fiecare deținător de AMGF are o voce reală în deciziile cheie ale ecosistemului, de la alocarea resurselor până la parteneriate strategice și direcția viitoare a fondului colectiv (dacă va fi implementat).', 
            en: '<b>A robust and transparent DAO governance system</b>, where every AMGF holder has a real voice in the ecosystem\'s key decisions, from resource allocation to strategic partnerships and the future direction of the collective fund (if implemented).',
            fr: '<b>Un système de gouvernance DAO robuste et transparent</b>, où chaque détenteur d\'AMGF a une voix réelle dans les décisions clés de l\'écosystème, de l\'allocation des ressources aux partenariats stratégiques et à la direction future du fonds collectif (si implémenté).',
            ru: '<b>Надежная и прозрачная система управления DAO</b>, где каждый держатель AMGF имеет реальный голос в ключевых решениях экосистемы, от распределения ресурсов до стратегических партнерств и будущего направления коллективного фонда (если будет реализовано).'
        },
        'vision-p3': { 
            ro: 'Pe măsură ce ecosistemul AMGF se maturizează, ne vedem transformându-ne într-un model de autonomie comunitară și de sustenabilitate financiară, unde valoarea este generată și distribuită de și pentru membrii săi. AMGF va fi un exemplu al modului în care tehnologia blockchain poate împuternici indivizii să-și preia controlul asupra viitorului lor financiar, construind împreună o moștenire de încredere și prosperitate.', 
            en: 'As the AMGF ecosystem matures, we see ourselves transforming into a model of community autonomy and financial sustainability, where value is generated and distributed by and for its members. AMGF will be an example of how blockchain technology can empower individuals to take control of their financial future, building a legacy of trust and prosperity.',
            fr: 'À mesure que l\'écosystème AMGF mûrit, nous nous voyons nous transformer en un modèle d\'autonomie communautaire et de durabilité financière, où la valeur est générée et distribuée par et pour ses membres. AMGF sera un exemple de la façon dont la technologie blockchain peut donner aux individus les moyens de prendre le contrôle de leur avenir financier, construisant ensemble un héritage de confiance et de prospérité.',
            ru: 'По мере того, как экосистема AMGF созревает, мы видим, что превращаемся в модель автономности сообщества и финансовой устойчивости, где ценность генерируется и распределяется членами и для членов. AMGF станет примером того, как технология блокчейн может дать людям возможность взять под контроль свое финансовое будущее, совместно создавая наследие доверия и процветания.'
        },


        // Secțiunea Tokenomics
        'tokenomics-title': { ro: 'Alocarea Tokenurilor AMGF (Actualizată)', en: 'AMGF Token Allocation (Updated)', fr: 'Allocation des Jetons AMGF (Mise à Jour)', ru: 'Распределение Токенов AMGF (Обновлено)' },
        'tokenomics-th1': { ro: 'Categorie de Alocare', en: 'Allocation Category', fr: 'Catégorie d\'Allocation', ru: 'Категория Распределения' },
        'tokenomics-th2': { ro: 'Procent (%)', en: 'Percentage (%)', fr: 'Pourcentage (%)', ru: 'Процент (%)' },
        'tokenomics-th3': { ro: 'Cantitate AMGF', en: 'AMGF Amount', fr: 'Montant AMGF', ru: 'Количество AMGF' },
        'tokenomics-th4': { ro: 'Scop și Justificare', en: 'Purpose and Justification', fr: 'But et Justification', ru: 'Цель и Обоснование' },
        'tokenomics-th5': { ro: 'Plan de Vesting / Acces', en: 'Vesting / Access Plan', fr: 'Plan de Vesting / Accès', ru: 'План Вестинга / Доступа' },
        
        // Rândurile tabelului
        'tokenomics-row1-cat': { ro: 'Comunitate & Ecosistem', en: 'Community & Ecosystem', fr: 'Communauté & Écosystème', ru: 'Сообщество и Экосистема' },
        'tokenomics-row1-scope': { ro: 'Susținerea creșterii organice a ecosistemului prin recompense pentru participare (Learn-to-Earn, Build-to-Earn), campanii de promovare, airdrop-uri strategice și stimulente pentru adoptare. Fără a fi un "investiție", ci o recompensă pentru contribuție.', en: 'Supporting the ecosystem\'s organic growth through participation rewards (Learn-to-Earn, Build-to-Earn), promotional campaigns, strategic airdrops, and adoption incentives. Not an "investment," but a reward for contribution.', fr: 'Soutien à la croissance organique via récompenses (Learn-to-Earn, Build-to-Earn) et airdrops. Récompense pour contribution, non investissement.', ru: 'Поддержка органического роста через вознаграждения (Learn-to-Earn, Build-to-Earn) и аирдропы. Вознаграждение за вклад, а не инвестиция.' },
        'tokenomics-row1-vesting': { ro: 'Eliberare treptată pe parcursul a 5-10 ani, pe măsură ce jetoanele sunt câștigate sau distribuite prin programe comunitare. Gestionat de un smart contract multi-sig sau DAO.', en: 'Gradual release over 5-10 years, as tokens are earned or distributed through community programs. Managed by a multi-sig smart contract or DAO.', fr: 'Libération progressive sur 5-10 ans, via des programmes communautaires. Géré par contrat multi-sig ou DAO.', ru: 'Постепенный выпуск в течение 5-10 лет, управляемый мультисиг контрактом или DAO.' },
        
        'tokenomics-row2-cat': { ro: 'Trezorerie DAO / Dezvoltare Ecosistem', en: 'DAO Treasury / Ecosystem Development', fr: 'Trésorerie DAO / Développement Écosystème', ru: 'Казначейство DAO / Развитие Экосистемы' },
        'tokenomics-row2-scope': { ro: 'Finanțarea dezvoltării continue a platformei (instrumente, analize, simulatoare), integrarea de noi parteneriate, audituri de securitate și asigurarea sustenabilității pe termen lung a proiectului, sub guvernanța comunității.', en: 'Funding the continuous platform development (tools, analytics, simulators), integration of new partnerships, security audits, and ensuring the project\'s long-term sustainability, under community governance.', fr: 'Financement du développement de la plateforme (outils, audits, partenariats) et de la pérennité du projet, sous gouvernance communautaire.', ru: 'Финансирование разработки платформы (инструменты, аудиты, партнерства) и обеспечение долгосрочной устойчивости, под управлением сообщества.' },
        'tokenomics-row2-vesting': { ro: 'Blocate într-o trezorerie DAO, accesibile prin votul deținătorilor de tokenuri, cu praguri de vot minime și perioade de propunere/vot.', en: 'Locked in a DAO treasury, accessible through token holder votes, with minimum voting thresholds and proposal/voting periods.', fr: 'Bloqué en trésorerie DAO, accessible par vote des détenteurs, avec seuils minimums.', ru: 'Заблокировано в казначействе DAO, доступно через голосование держателей токенов.' },

        'tokenomics-row3-cat': { ro: 'Fond de Lichiditate Inițială (DEX)', en: 'Initial Liquidity Fund (DEX)', fr: 'Fonds de Liquidité Initial (DEX)', ru: 'Начальный Фонд Ликвидности (DEX)' },
        'tokenomics-row3-scope': { ro: 'Asigurarea lichidității inițiale pe burse descentralizate (DEX-uri), pentru a permite tranzacționarea eficientă și a facilita accesul utilizatorilor la AMGF, fără a fi nevoie de o ofertă publică reglementată.', en: 'Ensuring initial liquidity on decentralized exchanges (DEXs) to allow efficient trading and facilitate user access to AMGF, without the need for a regulated public offering.', fr: 'Assurer la liquidité initiale sur les DEXs pour un trading efficace et un accès facile aux utilisateurs.', ru: 'Обеспечение начальной ликвидности на DEX для эффективной торговли и доступа пользователей.' },
        'tokenomics-row3-vesting': { ro: 'Eliberare imediată pentru a fi plasată în pool-uri de lichiditate și blocată prin contracte de staking/farming pentru cel puțin 2-5 ani. Nu sunt destinate vânzării, ci pentru a facilita tranzacțiile.', en: 'Immediate release to be placed in liquidity pools and locked via staking/farming contracts for at least 2-5 years. Not intended for sale, but to facilitate transactions.', fr: 'Libération immédiate pour placement dans des pools de liquidité et verrouillage (2-5 ans). Destiné à faciliter les transactions.', ru: 'Немедленный выпуск для размещения в пулах ликвидности и блокировки (2-5 лет). Предназначено для облегчения транзакций.' },

        'tokenomics-row4-cat': { ro: 'Echipa și Fondator', en: 'Team and Founder', fr: 'Équipe et Fondateur', ru: 'Команда и Основатель' },
        'tokenomics-row4-scope': { ro: 'Alocare pentru Fondator și echipa de bază. Compensarea efortului inițial și stimularea loialității pe termen lung. (Fondatorul: 5%, Echipa 5%)', en: 'Allocation for the Founder and core team. Compensation for initial effort and incentivizing long-term loyalty. (Founder: 5%, Team 5%)', fr: 'Allocation pour le Fondateur et l\'équipe. Compensation et incitation à la fidélité à long terme. (Fondateur: 5%, Équipe 5%)', ru: 'Выделение для Основателя и основной команды. Компенсация и стимулирование долгосрочной лояльности. (Основатель: 5%, Команда 5%)' },
        'tokenomics-row4-vesting': { ro: 'Blocare inițială de 1 an (Cliff), urmată de eliberare liniară pe 3 ani (Vesting). Această blocare asigură angajamentul pe termen lung.', en: '1-year initial lock (Cliff), followed by linear release over 3 years (Vesting). This lock-up ensures long-term commitment.', fr: 'Blocage initial d\'1 an (Cliff), suivi d\'une libération linéaire sur 3 ans (Vesting).', ru: 'Начальная блокировка на 1 год (Cliff), затем линейный выпуск в течение 3 лет (Vesting).' },

        // Total
        'tokenomics-total': { ro: 'Total', en: 'Total', fr: 'Total', ru: 'Итого' },

        // Nota finală
        'tokenomics-note': { ro: '<b>Notă:</b> Strategia Tokenomics este proiectată pentru a minimiza presiunea de vânzare inițială și a alinia interesele echipei și ale comunității pentru succesul pe termen lung. Jetoanele nu sunt vândute, ci distribuite pentru a construi ecosistemul.', en: '<b>Note:</b> The Tokenomics strategy is designed to minimize initial selling pressure and align the interests of the team and community for long-term success. Tokens are not sold, but distributed to build the ecosystem.', fr: '<b>Note:</b> La stratégie Tokenomics vise à minimiser la pression de vente initiale et à aligner les intérêts pour un succès à long terme.', ru: '<b>Примечание:</b> Токеномика разработана для минимизации начального давления продаж и согласования интересов для долгосрочного успеха.' },
        
        // Secțiunea Disclaimer
        'disclaimer-title': { ro: 'Disclaimer Legal Important', en: 'Important Legal Disclaimer', fr: 'Avertissement Légal Important', ru: 'Важное Юридическое Предупреждение' },
        'disclaimer-p1': { ro: 'Informațiile prezentate pe acest site web au doar scop informativ și nu constituie sfaturi financiare, de investiții, juridice sau fiscale. Investițiile în criptomonede implică riscuri semnificative, inclusiv riscul de pierdere totală a capitalului investit. Valoarea tokenurilor AMGF poate fluctua considerabil.', en: 'The information presented on this website is for informational purposes only and does not constitute financial, investment, legal, or tax advice. Investments in cryptocurrencies involve significant risks, including the risk of total loss of invested capital. The value of AMGF tokens can fluctuate considerably.', fr: 'Les informations sont à titre informatif uniquement et ne constituent pas un conseil financier ou légal. Les investissements dans les crypto-monnaies comportent des risques significatifs.', ru: 'Информация носит исключительно ознакомительный характер и не является финансовым или юридическим советом. Инвестиции в криптовалюты сопряжены со значительными рисками.' },
        'disclaimer-p2': { ro: 'Vă rugăm să efectuați propria cercetare (DYOR - Do Your Own Research) și să consultați un profesionist financiar calificat înainte de a lua orice decizie de investiție. Proiectul AMGF nu garantează profituri și nu este responsabil pentru nicio pierdere suferită ca urmare a investițiilor bazate pe informațiile de pe acest site.', en: 'Please conduct your own research (DYOR - Do Your Own Research) and consult a qualified financial professional before making any investment decisions. The AMGF project does not guarantee profits and does not assume responsibility for any losses incurred as a result of investments based on the information on this site.', fr: 'Veuillez effectuer vos propres recherches (DYOR) et consulter un professionnel financier qualifié avant toute décision. AMGF ne garantit pas de profits.', ru: 'Пожалуйста, проведите собственное исследование (DYOR) и проконсультируйтесь с квалифицированным специалистом перед принятием решений. Проект AMGF не гарантирует прибыль.' },
        'disclaimer-p3': { ro: 'Participarea la proiectul AMGF implică acceptarea termenilor și condițiilor noastre, care vor fi disponibile într-un document separat (Whitepaper complet și Termeni de Utilizare).', en: 'Participation in the AMGF project implies acceptance of our terms and conditions, which will be available in a separate document (full Whitepaper and Terms of Use).', fr: 'La participation implique l\'acceptation de nos conditions générales, disponibles dans un document séparé (Whitepaper et Conditions d\'Utilisation).', ru: 'Участие подразумевает принятие наших условий, доступных в отдельном документе (Whitepaper и Условия использования).' },
        
        // Footer (Adresa de email este corectă)
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

    // Lista limbilor disponibile
    const availableLanguages = ['ro', 'en', 'fr', 'ru'];
    let currentLanguage = localStorage.getItem('language') || 'ro';
    const languageButton = document.getElementById('language-toggle');

    // Funcție pentru a obține limba următoare (ro -> en -> fr -> ru -> ro)
    function getNextLanguage(lang) {
        const currentIndex = availableLanguages.indexOf(lang);
        const nextIndex = (currentIndex + 1) % availableLanguages.length;
        return availableLanguages[nextIndex];
    }
    
    // Funcție pentru a aplica traducerile
    function applyTranslations() {
        // Actualizează textul butonului de limbă (opțional, dar păstrează coerența)
        languageButton.innerHTML = availableLanguages.map(lang => 
            lang.toUpperCase() === currentLanguage.toUpperCase() ? `<b>${lang.toUpperCase()}</b>` : lang.toUpperCase()
        ).join(' / ');
        languageButton.title = `Switch to ${getNextLanguage(currentLanguage).toUpperCase()}`;
        
        // Parcurge toate elementele cu atribute data-i18n și aplică traducerea
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key] && translations[key][currentLanguage]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[key][currentLanguage];
                } else {
                    element.innerHTML = translations[key][currentLanguage];
                }
            }
        });
    }
    
    // Aplică traducerile inițiale la încărcare
    applyTranslations();

    // Adaugă event listener pentru butonul de limbă
    if (languageButton) {
        languageButton.addEventListener('click', () => {
            // Schimbă limba la următoarea din listă
            currentLanguage = getNextLanguage(currentLanguage);
            // Salvează limba în localStorage
            localStorage.setItem('language', currentLanguage);
            // Aplică noile traduceri
            applyTranslations();
        });
    }
});
