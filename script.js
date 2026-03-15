document.addEventListener('DOMContentLoaded', function() {
    var translations = {
        'nav-home': { ro: 'Acasa', en: 'Home', fr: 'Accueil', ru: 'Главная' },
        'nav-about': { ro: 'Despre Noi', en: 'About Us', fr: 'A Propos', ru: 'О нас' },
        'nav-why': { ro: 'De Ce AMGF?', en: 'Why AMGF?', fr: 'Pourquoi AMGF?', ru: 'Почему AMGF?' },
        'nav-links': { ro: 'Link-uri Utile', en: 'Useful Links', fr: 'Liens Utiles', ru: 'Полезные Ссылки' },
        'nav-vision': { ro: 'Viziune', en: 'Vision', fr: 'Vision', ru: 'Видение' },
        'nav-ecosystem': { ro: 'Ecosistem', en: 'Ecosystem', fr: 'Ecosysteme', ru: 'Экосистема' },
        'nav-roadmap': { ro: 'Roadmap', en: 'Roadmap', fr: 'Feuille de Route', ru: 'Дорожная Карта' },
        'nav-liquidity': { ro: 'Transparenta', en: 'Transparency', fr: 'Transparence', ru: 'Прозрачность' },
        'nav-tokenomics': { ro: 'Tokenomics', en: 'Tokenomics', fr: 'Tokenomics', ru: 'Токеномика' },
        'nav-disclaimer': { ro: 'Disclaimer', en: 'Disclaimer', fr: 'Avertissement', ru: 'Отказ от ответственности' },
        'nav-whitepaper': { ro: 'Cartea Alba', en: 'Whitepaper', fr: 'Livre Blanc', ru: 'Whitepaper' },
        'hero-title': { ro: 'AMGF', en: 'AMGF', fr: 'AMGF', ru: 'AMGF' },
        'hero-subtitle': { ro: 'Libertate Financiara', en: 'Financial Freedom', fr: 'Liberte Financiere', ru: 'Финансовая Свобода' },
        'about-title': { ro: 'Cine Suntem si De Ce AMGF?', en: 'Who We Are and Why AMGF?', fr: 'Qui Sommes-Nous et Pourquoi AMGF?', ru: 'Кто Мы и Почему AMGF?' },
        'about-p1': { ro: 'Salut, sunt Fondatorul AMGF, o persoana obisnuita, cu o pasiune extraordinara pentru viitorul pe care il aduc Web3 si criptomonedele. La 53 de ani, am explorat acest univers digital de cativa ani, participand la numeroase proiecte si airdrop-uri. Am vazut atat povesti de succes incredibile, cat si esecuri dureroase - experiente care m-au invatat enorm despre potentialul si riscurile acestui domeniu.', en: 'Hello, I am the AMGF Founder, an ordinary person with an extraordinary passion for the future brought by Web3 and cryptocurrencies. At 53, I have explored this digital universe for several years, participating in numerous projects and airdrops.', fr: 'Bonjour, je suis le Fondateur AMGF, une personne ordinaire avec une passion extraordinaire pour le Web3 et les crypto-monnaies.', ru: 'Здравствуйте, я Основатель AMGF, обычный человек с необычайной страстью к Web3 и криптовалютам.' },
        'about-p2': { ro: 'Ca multi altii, m-am saturat sa investesc timp si incredere in proiecte anonime. Asa s-a nascut AMGF. Am decis sa investesc in mine insumi si sa construiesc un proiect bazat pe transparenta, utilitate si o comunitate autentica.', en: 'Like many others, I grew tired of investing time and trust in anonymous projects. This is how AMGF was born, based on transparency, utility, and an authentic community.', fr: 'Comme beaucoup, je me suis lasse des projets anonymes. AMGF est ne de cette frustration.', ru: 'Как и многие другие, я устал от анонимных проектов. Так родился AMGF.' },
        'about-p3': { ro: 'AMGF nu este creat de un expert financiar de pe Wall Street, ci de o persoana reala. Viziunea mea este sa cream un ecosistem unde oricine poate invata, contribui si creste alaturi de noi.', en: 'AMGF is not created by a Wall Street expert, but by a real person. My vision is to create an ecosystem where anyone can learn, contribute, and grow with us.', fr: 'AMGF est cree par une personne reelle. Ma vision est un ecosysteme ou chacun peut apprendre et grandir.', ru: 'AMGF создан реальным человеком. Моё видение - создать экосистему, где каждый может учиться и расти.' },
        'about-p4': { ro: 'Suntem aici pentru a construi pe termen lung, impreuna cu voi. Increderea se castiga prin fapte, nu prin vorbe.', en: 'We are here to build for the long term, together with you. Trust is earned through actions, not words.', fr: 'Nous sommes ici pour construire a long terme. La confiance se gagne par les actes.', ru: 'Мы здесь, чтобы строить на долгосрочную перспективу. Доверие зарабатывается делами.' },
        'why-title': { ro: 'De ce AMGF?', en: 'Why AMGF?', fr: 'Pourquoi AMGF?', ru: 'Почему AMGF?' },
        'why-p1': { ro: 'In peisajul dinamic al Web3, promisiunile abundau, dar increderea si informatiile autentice sunt greu de gasit. Multi au simtit nevoia unui loc unde libertatea financiara sa fie o calatorie reala.', en: 'In the dynamic landscape of Web3, promises abound, but trust and authentic information are hard to find. Many felt the need for a place where financial freedom is a real journey.', fr: 'Dans le monde du Web3, les promesses abondent mais la confiance est rare.', ru: 'В мире Web3 обещаний много, но доверие редко.' },
        'why-p2': { ro: 'Aici intervine AMGF. Suntem mai mult decat un token; suntem un ecosistem construit de o persoana obisnuita, pasionata de viitor. Misiunea noastra este sa oferim un spatiu transparent si accesibil.', en: 'This is where AMGF comes in. We are more than just a token; we are an ecosystem built by an ordinary person passionate about the future.', fr: 'AMGF intervient ici. Nous sommes un ecosysteme construit par une personne ordinaire passionnee.', ru: 'AMGF - экосистема, построенная обычным человеком.' },
        'links-title': { ro: 'Comunitate si Tranzactionare', en: 'Community and Trading', fr: 'Communaute et Trading', ru: 'Сообщество и Торговля' },
        'links-desc': { ro: 'Adresa de Contract (BASE): <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>', en: 'Contract Address (BASE): <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>', fr: 'Adresse de Contrat (BASE): <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>', ru: 'Адрес контракта (BASE): <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>' },
        'link-telegram': { ro: 'Contact Telegram (@amgf_libertate_bot)', en: 'Contact Telegram (@amgf_libertate_bot)', fr: 'Contact Telegram (@amgf_libertate_bot)', ru: 'Контакт Telegram (@amgf_libertate_bot)' },
        'link-exchange1': { ro: 'Cumpara pe Uniswap (Base)', en: 'Buy on Uniswap (Base)', fr: 'Acheter sur Uniswap (Base)', ru: 'Купить на Uniswap (Base)' },
        'link-exchange2': { ro: 'Grafic DexScreener', en: 'DexScreener Chart', fr: 'Graphique DexScreener', ru: 'График DexScreener' },
        'vision-title': { ro: 'Viziune pe termen lung', en: 'Long-Term Vision', fr: 'Vision a Long Terme', ru: 'Долгосрочное Видение' },
        'vision-p1': { ro: 'Viziunea noastra pentru AMGF depaseste orizontul unui simplu token. Ne propunem sa construim un ecosistem digital vibrant, o adevarata DAO, unde libertatea financiara devine accesibila tuturor.', en: 'Our vision for AMGF extends beyond a simple token. We aim to build a vibrant digital ecosystem, a true DAO, where financial freedom becomes accessible to all.', fr: 'Notre vision depasse un simple jeton. Nous visons un ecosysteme vibrant, une vraie DAO, ou la liberte financiere est accessible a tous.', ru: 'Наше видение выходит за рамки простого токена. Мы строим DAO, где финансовая свобода доступна каждому.' },
        'vision-p2': { ro: 'Ne imaginam un viitor in care detinatorii de AMGF sunt co-proprietari ai propriului lor destin financiar. Prin platforma noastra, ei vor avea acces la:', en: 'We envision a future where AMGF holders are co-owners of their financial destiny. Through our platform, they will have access to:', fr: 'Nous imaginons un avenir ou les detenteurs AMGF sont copropietaires de leur destin financier.', ru: 'Мы представляем будущее, где держатели AMGF - совладельцы своей судьбы.' },
        'vision-li1': { ro: 'O educatie financiara gamificata si practica, recompensata prin sistemul nostru Learn-to-Earn.', en: 'Gamified and practical financial education, rewarded through our Learn-to-Earn system.', fr: 'Une education financiere gamifiee, recompensee via notre systeme Learn-to-Earn.', ru: 'Геймифицированное финансовое образование через систему Learn-to-Earn.' },
        'vision-li2': { ro: 'Instrumente intuitive si analize personalizate care demistifica lumea investitiilor.', en: 'Intuitive tools and personalized analytics that demystify the world of investments.', fr: 'Des outils intuitifs et des analyses personnalisees pour demystifier les investissements.', ru: 'Интуитивные инструменты и аналитика для инвестиционных решений.' },
        'vision-li3': { ro: 'O comunitate globala activa, unde membrii colaboreaza prin mecanismul Build-to-Earn.', en: 'An active global community where members collaborate through the Build-to-Earn mechanism.', fr: 'Une communaute mondiale active via le mecanisme Build-to-Earn.', ru: 'Активное сообщество через механизм Build-to-Earn.' },
        'vision-li4': { ro: 'Un sistem de guvernanta DAO robust, unde fiecare detinator de AMGF are o voce reala.', en: 'A robust DAO governance system where every AMGF holder has a real voice.', fr: 'Un systeme de gouvernance DAO robuste ou chaque detenteur a une vraie voix.', ru: 'Надежная система DAO, где каждый держатель имеет реальный голос.' },
        'vision-p3': { ro: 'Pe masura ce ecosistemul AMGF se maturizeaza, ne vedem transformandu-ne intr-un model de autonomie comunitara. AMGF va fi un exemplu al modului in care blockchain poate imputernici indivizii.', en: 'As the AMGF ecosystem matures, we see ourselves becoming a model of community autonomy. AMGF will show how blockchain empowers individuals.', fr: 'A mesure qu AMGF maturit, nous devenons un modele d autonomie communautaire.', ru: 'По мере роста AMGF мы становимся моделью автономности сообщества.' },
        'eco-title': { ro: 'Ecosistemul AMGF', en: 'The AMGF Ecosystem', fr: 'Ecosysteme AMGF', ru: 'Экосистема AMGF' },
        'eco-free-badge': { ro: 'Toate aplicatiile sunt gratuite', en: 'All applications are free', fr: 'Toutes les applications sont gratuites', ru: 'Все приложения бесплатны' },
        'eco-intro': { ro: 'Fondatorul AMGF construieste activ un ecosistem complet de aplicatii Web3, toate disponibile gratuit pentru comunitate. Pe viitor, o taxa simbolica poate fi introdusa pentru a sustine dezvoltarea continua a proiectului.', en: 'The AMGF founder is actively building a complete Web3 application ecosystem, all available free to the community. In the future, a symbolic fee may be introduced to support ongoing development.', fr: 'Le fondateur AMGF construit activement un ecosysteme Web3 complet, disponible gratuitement.', ru: 'Основатель AMGF активно создаёт полную экосистему Web3-приложений, все бесплатно.' },
        'eco-app1-name': { ro: 'AMGF Wallet N.C.', en: 'AMGF Wallet N.C.', fr: 'AMGF Wallet N.C.', ru: 'AMGF Wallet N.C.' },
        'eco-app1-desc': { ro: 'Portofel non-custodial pe reteaua Base. Tu detii cheile private - securitate maxima fara dependenta de terti.', en: 'Non-custodial wallet on the Base network. You hold your private keys - maximum security without third-party dependence.', fr: 'Portefeuille non-custodial sur le reseau Base.', ru: 'Некастодиальный кошелёк в сети Base. Вы держите свои приватные ключи.' },
        'eco-app2-name': { ro: 'Airdrop Manager', en: 'Airdrop Manager', fr: 'Gestionnaire Airdrop', ru: 'Менеджер Аирдропов' },
        'eco-app2-desc': { ro: 'Gestioneaza si participa la campaniile de airdrop AMGF. Recompenseaza participarea activa in comunitate.', en: 'Manage and participate in AMGF airdrop campaigns. Rewards active community participation.', fr: 'Gerez et participez aux campagnes d airdrop AMGF.', ru: 'Управляйте и участвуйте в аирдроп-кампаниях AMGF.' },
        'eco-app3-name': { ro: 'Staking Hub', en: 'Staking Hub', fr: 'Hub de Staking', ru: 'Стейкинг Хаб' },
        'eco-app3-desc': { ro: 'Pune tokenurile AMGF la lucru si genereaza randamente pasive. Contribuie la stabilitatea ecosistemului.', en: 'Put your AMGF tokens to work and generate passive returns. Contributes to ecosystem stability.', fr: 'Mettez vos tokens AMGF au travail et generez des rendements passifs.', ru: 'Заставьте токены AMGF работать и генерируйте пассивный доход.' },
        'eco-app4-name': { ro: 'AMGF Code App', en: 'AMGF Code App', fr: 'AMGF Code App', ru: 'AMGF Code App' },
        'eco-app4-desc': { ro: 'Platforma de dezvoltare si colaborare pentru membrii tehnici. Sustine mecanismul Build-to-Earn.', en: 'Development and collaboration platform for technical members. Supports the Build-to-Earn mechanism.', fr: 'Plateforme de developpement pour membres techniques. Soutient le Build-to-Earn.', ru: 'Платформа для технических членов. Поддерживает механизм Build-to-Earn.' },
        'eco-app5-name': { ro: 'Learn-to-Earn', en: 'Learn-to-Earn', fr: 'Apprendre-et-Gagner', ru: 'Учись-и-Зарабатывай' },
        'eco-app5-desc': { ro: 'Platforma educationala crypto si finante. Completeaza lectii, castiga puncte si primesti recompense in AMGF trimestrial.', en: 'Crypto and finance educational platform. Complete lessons, earn points and receive AMGF rewards quarterly.', fr: 'Plateforme educative crypto et finance. Completez des lecons et recevez des recompenses AMGF.', ru: 'Образовательная платформа. Проходите уроки и получайте вознаграждения AMGF.' },
        'eco-app6-name': { ro: 'Liberty Bot', en: 'Liberty Bot', fr: 'Bot Liberty', ru: 'Бот Liberty' },
        'eco-app6-desc': { ro: 'Bot Telegram pentru interactiunea cu comunitatea, notificari in timp real si informatii despre tokenul AMGF.', en: 'Telegram bot for community interaction, real-time notifications and AMGF token information.', fr: 'Bot Telegram pour interaction communautaire et notifications en temps reel.', ru: 'Telegram-бот для взаимодействия с сообществом и уведомлений.' },
        'eco-free': { ro: 'GRATUIT', en: 'FREE', fr: 'GRATUIT', ru: 'БЕСПЛАТНО' },
        'eco-more-btn': { ro: 'Vezi toate aplicatiile', en: 'View all applications', fr: 'Voir toutes les applications', ru: 'Посмотреть все приложения' },
        'eco-future-note': { ro: 'Toate aplicatiile sunt in prezent 100% gratuite. Pe viitor, o taxa simbolica poate fi introdusa pentru a sustine dezvoltarea continua.', en: 'All applications are currently 100% free. In the future, a symbolic fee may be introduced to support ongoing development.', fr: 'Toutes les applications sont gratuites. A l avenir, des frais symboliques pourront etre introduits.', ru: 'Все приложения сейчас бесплатны. В будущем может быть введена символическая плата.' },
        'roadmap-title': { ro: 'Roadmap', en: 'Roadmap', fr: 'Feuille de Route', ru: 'Дорожная Карта' },
        'roadmap-phase1-label': { ro: 'Faza 1 - 2024-2025 - Fundatie', en: 'Phase 1 - 2024-2025 - Foundation', fr: 'Phase 1 - 2024-2025 - Fondation', ru: 'Этап 1 - 2024-2025 - Основание' },
        'roadmap-phase1-title': { ro: 'Lansare si Infrastructura', en: 'Launch and Infrastructure', fr: 'Lancement et Infrastructure', ru: 'Запуск и Инфраструктура' },
        'roadmap-phase1-desc': { ro: 'Crearea tokenului AMGF pe reteaua Base. Lansarea site-ului principal. Construirea comunitatii Telegram. Publicarea Cartii Albe v1.0.', en: 'Creation of the AMGF token on Base network. Launch of main site. Building Telegram community. Publication of White Paper v1.0.', fr: 'Creation du token AMGF. Lancement du site. Construction de la communaute Telegram.', ru: 'Создание токена AMGF. Запуск сайта. Создание сообщества Telegram.' },
        'roadmap-status-done': { ro: 'Realizat', en: 'Completed', fr: 'Realise', ru: 'Выполнено' },
        'roadmap-phase2-label': { ro: 'Faza 2 - 2025 - Crestere', en: 'Phase 2 - 2025 - Growth', fr: 'Phase 2 - 2025 - Croissance', ru: 'Этап 2 - 2025 - Рост' },
        'roadmap-phase2-title': { ro: 'Ecosistem si Comunitate', en: 'Ecosystem and Community', fr: 'Ecosysteme et Communaute', ru: 'Экосистема и Сообщество' },
        'roadmap-phase2-desc': { ro: 'Lansarea Staking Hub si AMGF Code App. Campanii de airdrop. Listare pe DEX-uri. Cresterea comunitatii la 10000+ membri.', en: 'Launch of Staking Hub and AMGF Code App. Airdrop campaigns. Listing on DEXs. Growing community to 10000+ members.', fr: 'Lancement Staking Hub et Code App. Campagnes airdrop. Cotation DEX.', ru: 'Запуск Staking Hub и Code App. Аирдропы. Листинг на DEX.' },
        'roadmap-status-active': { ro: 'In desfasurare', en: 'In Progress', fr: 'En cours', ru: 'В процессе' },
        'roadmap-phase3-label': { ro: 'Faza 3 - 2026 - Maturizare', en: 'Phase 3 - 2026 - Maturation', fr: 'Phase 3 - 2026 - Maturite', ru: 'Этап 3 - 2026 - Созревание' },
        'roadmap-phase3-title': { ro: 'DAO si Learn-to-Earn', en: 'DAO and Learn-to-Earn', fr: 'DAO et Learn-to-Earn', ru: 'DAO и Learn-to-Earn' },
        'roadmap-phase3-desc': { ro: 'Implementarea mecanismului DAO complet. Lansarea platformei Learn-to-Earn. Audit smart contract independent.', en: 'Implementation of full DAO mechanism. Launch of Learn-to-Earn platform. Independent smart contract audit.', fr: 'Mise en place du DAO. Lancement Learn-to-Earn. Audit independant.', ru: 'Реализация DAO. Запуск Learn-to-Earn. Независимый аудит.' },
        'roadmap-status-soon': { ro: 'In pregatire', en: 'Coming Soon', fr: 'Bientot', ru: 'Скоро' },
        'roadmap-phase4-label': { ro: 'Faza 4 - 2026-2027 - Expansiune', en: 'Phase 4 - 2026-2027 - Expansion', fr: 'Phase 4 - 2026-2027 - Expansion', ru: 'Этап 4 - 2026-2027 - Расширение' },
        'roadmap-phase4-title': { ro: 'Autonomie si Scalare', en: 'Autonomy and Scaling', fr: 'Autonomie et Mise a Echelle', ru: 'Автономия и Масштабирование' },
        'roadmap-phase4-desc': { ro: 'Listare pe exchange-uri centralizate. Guvernanta DAO complet autonoma. Extindere internationala.', en: 'Listing on centralized exchanges. Fully autonomous DAO governance. International expansion.', fr: 'Cotation CEX. Gouvernance DAO autonome. Expansion internationale.', ru: 'Листинг на CEX. Автономное управление DAO. Международное расширение.' },
        'roadmap-status-future': { ro: 'Viitor', en: 'Future', fr: 'Futur', ru: 'Будущее' },
        'liq-title': { ro: 'Transparenta si Lichiditate Blocata', en: 'Transparency and Locked Liquidity', fr: 'Transparence et Liquidite Bloquee', ru: 'Прозрачность и Заблокированная Ликвидность' },
        'liq-founder-msg': { ro: 'Angajamentul Fondatorului: Fondatorul AMGF adauga lichiditate treptat si o blocheaza pe GemPad pentru perioade lungi. Aceasta este dovada angajamentului pe termen lung fata de comunitate. Transparenta nu este o promisiune, ci o realitate verificabila public.', en: 'Founder Commitment: The AMGF founder gradually adds liquidity and locks it on GemPad for long periods. This is concrete proof of long-term commitment to the community. Transparency is a publicly verifiable reality.', fr: 'Engagement du Fondateur: Le fondateur AMGF bloque la liquidite sur GemPad. Transparence verifiable publiquement.', ru: 'Обязательство Основателя: Ликвидность блокируется на GemPad. Прозрачность проверяема публично.' },
        'liq-card1-title': { ro: 'Lichiditate Blocata', en: 'Locked Liquidity', fr: 'Liquidite Bloquee', ru: 'Заблокированная Ликвидность' },
        'liq-card1-desc': { ro: 'Uniswap V2 - Reteaua Base. Blocat pana pe 5 Iunie 2027', en: 'Uniswap V2 - Base Network. Locked until June 5 2027', fr: 'Uniswap V2 - Reseau Base. Bloque jusqu au 5 Juin 2027', ru: 'Uniswap V2 - Сеть Base. Заблокировано до 5 Июня 2027' },
        'liq-card2-title': { ro: 'Echipa si Fondator', en: 'Team and Founder', fr: 'Equipe et Fondateur', ru: 'Команда и Основатель' },
        'liq-card2-desc': { ro: 'Team si Founder Lock. 451+ zile ramase', en: 'Team and Founder Lock. 451+ days remaining', fr: 'Blocage Equipe et Fondateur. 451+ jours restants', ru: 'Блокировка Команды. 451+ дней осталось' },
        'liq-card3-title': { ro: 'Trezorerie DAO', en: 'DAO Treasury', fr: 'Tresorerie DAO', ru: 'Казначейство DAO' },
        'liq-card3-desc': { ro: 'DAO Treasury si Ecosystem. Vesting treptat - 534+ zile', en: 'DAO Treasury and Ecosystem. Gradual vesting - 534+ days', fr: 'Tresorerie DAO. Vesting progressif - 534+ jours', ru: 'Казначейство DAO. Постепенный вестинг - 534+ дней' },
        'liq-card4-title': { ro: 'Rezerva Fondator', en: 'Founder Reserve', fr: 'Reserve Fondateur', ru: 'Резерв Основателя' },
        'liq-card4-desc': { ro: 'Founder Reserve Lock. 841+ zile ramase', en: 'Founder Reserve Lock. 841+ days remaining', fr: 'Blocage Reserve Fondateur. 841+ jours restants', ru: 'Блокировка Резерва. 841+ дней осталось' },
        'liq-locked': { ro: 'BLOCAT', en: 'LOCKED', fr: 'BLOQUE', ru: 'ЗАБЛОКИРОВАНО' },
        'liq-vesting': { ro: 'VESTING', en: 'VESTING', fr: 'VESTING', ru: 'ВЕСТИНГ' },
        'liq-total-label': { ro: 'Total Fonduri Blocate si Vesting', en: 'Total Locked and Vesting Funds', fr: 'Total Fonds Bloques et Vesting', ru: 'Всего Заблокировано и Вестинг' },
        'liq-total-sub': { ro: 'Verificat pe GemPad - Reteaua Base', en: 'Verified on GemPad - Base Network', fr: 'Verifie sur GemPad - Reseau Base', ru: 'Проверено на GemPad - Сеть Base' },
        'liq-verify-btn': { ro: 'Verifica pe GemPad', en: 'Verify on GemPad', fr: 'Verifier sur GemPad', ru: 'Проверить на GemPad' },
        'tokenomics-title': { ro: 'Alocarea Tokenurilor AMGF', en: 'AMGF Token Allocation', fr: 'Allocation des Jetons AMGF', ru: 'Распределение Токенов AMGF' },
        'tokenomics-th1': { ro: 'Categorie de Alocare', en: 'Allocation Category', fr: 'Categorie d Allocation', ru: 'Категория Распределения' },
        'tokenomics-th2': { ro: 'Procent', en: 'Percentage', fr: 'Pourcentage', ru: 'Процент' },
        'tokenomics-th3': { ro: 'Cantitate AMGF', en: 'AMGF Amount', fr: 'Montant AMGF', ru: 'Количество AMGF' },
        'tokenomics-th4': { ro: 'Scop si Justificare', en: 'Purpose and Justification', fr: 'But et Justification', ru: 'Цель и Обоснование' },
        'tokenomics-th5': { ro: 'Plan de Vesting', en: 'Vesting Plan', fr: 'Plan de Vesting', ru: 'План Вестинга' },
        'tokenomics-row1-cat': { ro: 'Comunitate si Ecosistem', en: 'Community and Ecosystem', fr: 'Communaute et Ecosysteme', ru: 'Сообщество и Экосистема' },
        'tokenomics-row1-scope': { ro: 'Sustinerea cresterii organice prin recompense pentru participare, campanii de promovare si airdrop-uri strategice.', en: 'Supporting organic growth through participation rewards, promotional campaigns and strategic airdrops.', fr: 'Soutien a la croissance organique via recompenses et airdrops.', ru: 'Поддержка органического роста через вознаграждения и аирдропы.' },
        'tokenomics-row1-vesting': { ro: 'Eliberare treptata pe 5-10 ani.', en: 'Gradual release over 5-10 years.', fr: 'Liberation progressive sur 5-10 ans.', ru: 'Постепенный выпуск в течение 5-10 лет.' },
        'tokenomics-row2-cat': { ro: 'Trezorerie DAO', en: 'DAO Treasury', fr: 'Tresorerie DAO', ru: 'Казначейство DAO' },
        'tokenomics-row2-scope': { ro: 'Finantarea dezvoltarii platformei si parteneriate sub guvernanta comunitatii.', en: 'Funding platform development and partnerships under community governance.', fr: 'Financement du developpement sous gouvernance communautaire.', ru: 'Финансирование разработки под управлением сообщества.' },
        'tokenomics-row2-vesting': { ro: 'Blocate intr-o trezorerie DAO.', en: 'Locked in a DAO treasury.', fr: 'Bloque en tresorerie DAO.', ru: 'Заблокировано в казначействе DAO.' },
        'tokenomics-row3-cat': { ro: 'Fond de Lichiditate', en: 'Liquidity Fund', fr: 'Fonds de Liquidite', ru: 'Фонд Ликвидности' },
        'tokenomics-row3-scope': { ro: 'Asigurarea lichiditatii pe burse descentralizate pe Base.', en: 'Ensuring liquidity on decentralized exchanges on Base.', fr: 'Assurer la liquidite sur les DEXs.', ru: 'Обеспечение ликвидности на DEX.' },
        'tokenomics-row3-vesting': { ro: 'Blocata pentru cel putin 2-5 ani.', en: 'Locked for at least 2-5 years.', fr: 'Verrouillage 2-5 ans.', ru: 'Блокировка на 2-5 лет.' },
        'tokenomics-row4-cat': { ro: 'Echipa si Fondator', en: 'Team and Founder', fr: 'Equipe et Fondateur', ru: 'Команда и Основатель' },
        'tokenomics-row4-scope': { ro: 'Alocare pentru Fondator si echipa de baza.', en: 'Allocation for Founder and core team.', fr: 'Allocation pour Fondateur et equipe.', ru: 'Выделение для Основателя и команды.' },
        'tokenomics-row4-vesting': { ro: 'Cliff de 1 an, urmat de eliberare pe 3 ani.', en: '1-year cliff, followed by 3-year release.', fr: 'Blocage 1 an puis liberation sur 3 ans.', ru: 'Блокировка 1 год, затем выпуск 3 года.' },
        'tokenomics-total': { ro: 'Total', en: 'Total', fr: 'Total', ru: 'Итого' },
        'tokenomics-note': { ro: 'Nota: Strategia Tokenomics este proiectata pentru a minimiza presiunea de vanzare.', en: 'Note: The Tokenomics strategy is designed to minimize selling pressure.', fr: 'Note: La strategie Tokenomics vise a minimiser la pression de vente.', ru: 'Примечание: Токеномика разработана для минимизации давления продаж.' },
        'disclaimer-title': { ro: 'Disclaimer Legal Important', en: 'Important Legal Disclaimer', fr: 'Avertissement Legal Important', ru: 'Важное Юридическое Предупреждение' },
        'disclaimer-p1': { ro: 'Informatiile prezentate nu constituie sfaturi financiare. Investitiile in crypto implica riscuri.', en: 'The information does not constitute financial advice. Crypto investments involve risks.', fr: 'Les informations ne constituent pas un conseil financier. Les crypto comportent des risques.', ru: 'Информация не является финансовым советом. Инвестиции связаны с риском.' },
        'disclaimer-p2': { ro: 'Efectuati propria cercetare (DYOR).', en: 'Do Your Own Research (DYOR).', fr: 'Faites vos propres recherches (DYOR).', ru: 'Проведите собственное исследование (DYOR).' },
        'disclaimer-p3': { ro: 'Participarea implica acceptarea termenilor.', en: 'Participation implies acceptance of terms.', fr: 'La participation implique l acceptation des termes.', ru: 'Участие подразумевает принятие условий.' },
        'footer-copyright': { ro: '&copy; 2025 AMGF Financial Freedom. Toate drepturile rezervate.', en: '&copy; 2025 AMGF Financial Freedom. All rights reserved.', fr: '&copy; 2025 AMGF Liberte Financiere. Tous droits reserves.', ru: '&copy; 2025 AMGF Финансовая Свобода. Все права защищены.' },
        'footer-contact': { ro: 'Conecteaza-te cu noi: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>', en: 'Connect with us: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>', fr: 'Connectez-vous avec nous: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>', ru: 'Свяжитесь с нами: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>' }
    };

    var availableLanguages = ['ro', 'en', 'fr', 'ru'];
    var currentLanguage = localStorage.getItem('language') || 'ro';
    var languageButton = document.getElementById('language-toggle');

    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
            var key = element.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                if (key.indexOf('p') !== -1 || key.indexOf('li') !== -1 || key.indexOf('footer') !== -1 ||
                    key.indexOf('desc') !== -1 || key.indexOf('msg') !== -1 || key.indexOf('sub') !== -1 ||
                    key.indexOf('intro') !== -1 || key.indexOf('note') !== -1 || key.indexOf('scope') !== -1 ||
                    key.indexOf('vesting') !== -1) {
                    element.innerHTML = translations[key][lang];
                } else {
                    element.textContent = translations[key][lang];
                }
            }
        });
        var displayLang = availableLanguages.map(function(l) {
            var code = l.toUpperCase();
            return l === lang ? '[' + code + ']' : code;
        }).join(' / ');
        languageButton.textContent = displayLang;
        document.body.className = 'lang-' + currentLanguage;
    }

    function toggleLanguage() {
        var currentIndex = availableLanguages.indexOf(currentLanguage);
        var nextIndex = (currentIndex + 1) % availableLanguages.length;
        currentLanguage = availableLanguages[nextIndex];
        localStorage.setItem('language', currentLanguage);
        applyTranslations(currentLanguage);
    }

    if (languageButton) {
        languageButton.addEventListener('click', toggleLanguage);
    }

    applyTranslations(currentLanguage);
});
