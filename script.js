// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Obiect pentru a stoca traducerile
    // Fiecare cheie reprezintă un ID de element HTML, iar valoarea este un obiect cu traducerile pentru 'ro' și 'en'
    const translations = {
        // Navigație
        'nav-home': {
            ro: 'Acasă',
            en: 'Home'
        },
        'nav-about': {
            ro: 'Despre Noi',
            en: 'About Us'
        },
        'nav-tokenomics': {
            ro: 'Tokenomics',
            en: 'Tokenomics'
        },
        'nav-roadmap': {
            ro: 'Foaia de Parcurs',
            en: 'Roadmap'
        },
        'nav-community': {
            ro: 'Comunitate',
            en: 'Community'
        },
        'nav-disclaimer': {
            ro: 'Disclaimer',
            en: 'Disclaimer'
        },
        // Secțiunea Hero
        'hero-title': {
            ro: 'Revoluția Libertății Financiare',
            en: 'The Financial Freedom Revolution'
        },
        'hero-description': {
            ro: 'AMGF este un proiect inovator în domeniul criptomonedelor, dedicat construirii unui viitor de prosperitate și autonomie financiară pentru toți.',
            en: 'AMGF is an innovative cryptocurrency project dedicated to building a future of prosperity and financial autonomy for all.'
        },
        'hero-btn': {
            ro: 'Află Mai Mult',
            en: 'Learn More'
        },
        // Secțiunea Despre Noi
        'about-title': {
            ro: 'Despre AMGF și Viziunea Sa',
            en: 'About AMGF and Its Vision'
        },
        'about-p1': {
            ro: 'AMGF este un proiect inovator, născut din convingerea că libertatea financiară nu ar trebui să fie un privilegiu, ci un drept accesibil tuturor. Echipa din spatele AMGF este formată din antreprenori cu experiență vastă în domeniul financiar și o pasiune profundă pentru inovație.',
            en: 'AMGF is an innovative project, born from the conviction that financial freedom should not be a privilege, but a right accessible to all. The team behind AMGF consists of entrepreneurs with vast experience in the financial sector and a deep passion for innovation.'
        },
        'about-p2': {
            ro: 'Misiunea AMGF este de a democratiza accesul la oportunități financiare prin intermediul tehnologiei blockchain, oferind instrumente și resurse care să permită indivizilor să-și gestioneze și să-și crească patrimoniul într-un mod sigur, transparent și eficient.',
            en: 'AMGF\'s mission is to democratize access to financial opportunities through blockchain technology, providing tools and resources that enable individuals to manage and grow their assets in a secure, transparent, and efficient manner.'
        },
        'about-p3': {
            ro: 'Viziunea noastră este de a crea un ecosistem financiar global, descentralizat, unde fiecare membru al comunității are puterea de a-și modela propriul destin financiar, contribuind la o economie mai echitabilă și mai prosperă pentru toți.',
            en: 'Our vision is to create a global, decentralized financial ecosystem where every community member has the power to shape their own financial destiny, contributing to a more equitable and prosperous economy for all.'
        },
        // Secțiunea Tokenomics
        'tokenomics-title': {
            ro: 'Tokenomics AMGF',
            en: 'AMGF Tokenomics'
        },
        'tokenomics-desc': {
            ro: 'Tokenul AMGF este pilonul central al ecosistemului nostru, conceput pentru a stimula participarea, a recompensa deținătorii și a asigura sustenabilitatea pe termen lung. Structura noastră tokenomică este transparentă și echitabilă.',
            en: 'The AMGF token is the central pillar of our ecosystem, designed to stimulate participation, reward holders, and ensure long-term sustainability. Our tokenomic structure is transparent and fair.'
        },
        'tokenomics-th1': {
            ro: 'Categorie de Alocare',
            en: 'Allocation Category'
        },
        'tokenomics-th2-percentage': {
            ro: 'Procent din Total Supply',
            en: 'Percentage of Total Supply'
        },
        'tokenomics-th3-amount': {
            ro: 'Cantitate (Tokenuri)',
            en: 'Amount (Tokens)'
        },
        'tokenomics-th4-details': {
            ro: 'Detalii',
            en: 'Details'
        },
        'tokenomics-public-sale-category': {
            ro: 'Vânzare Publică',
            en: 'Public Sale'
        },
        'tokenomics-public-sale-details': {
            ro: 'Asigură o distribuție largă și echitabilă a tokenurilor.',
            en: 'Ensures a broad and fair distribution of tokens.'
        },
        'tokenomics-ecosystem-fund-category': {
            ro: 'Fond de Ecosistem',
            en: 'Ecosystem Fund'
        },
        'tokenomics-ecosystem-fund-details': {
            ro: 'Dezvoltarea platformei, parteneriate, inovație.',
            en: 'Platform development, partnerships, innovation.'
        },
        'tokenomics-team-category': {
            ro: 'Echipă și Consultanți',
            en: 'Team and Advisors'
        },
        'tokenomics-team-details': {
            ro: 'Alocat membrilor echipei și consultanților cheie (cu vesting).',
            en: 'Allocated to team members and key advisors (with vesting).'
        },
        'tokenomics-liquidity-category': {
            ro: 'Lichiditate și Rezerve',
            en: 'Liquidity and Reserves'
        },
        'tokenomics-liquidity-details': {
            ro: 'Asigură lichiditatea pe burse și stabilitatea prețului.',
            en: 'Ensures exchange liquidity and price stability.'
        },
        'tokenomics-marketing-category': {
            ro: 'Marketing și Comunitate',
            en: 'Marketing and Community'
        },
        'tokenomics-marketing-details': {
            ro: 'Campanii de promovare și inițiative comunitare.',
            en: 'Promotional campaigns and community initiatives.'
        },
        'tokenomics-total-supply-label': {
            ro: 'Total Supply',
            en: 'Total Supply'
        },
        'tokenomics-p2': {
            ro: 'Mecanismele de staking și yield farming vor fi introduse pentru a recompensa deținătorii pe termen lung și a încuraja participarea activă în ecosistem.',
            en: 'Staking and yield farming mechanisms will be introduced to reward long-term holders and encourage active participation in the ecosystem.'
        },
        // Secțiunea Roadmap
        'roadmap-title': {
            ro: 'Foaia de Parcurs (Roadmap)',
            en: 'Roadmap'
        },
        'roadmap-desc': {
            ro: 'Viziunea AMGF este susținută de o foaie de parcurs clară și ambițioasă, împărțită în etape cheie:',
            en: 'AMGF\'s vision is supported by a clear and ambitious roadmap, divided into key phases:'
        },
        'roadmap-phase-1-title': {
            ro: 'Faza 1: Fundamentare și Lansare',
            en: 'Phase 1: Foundation and Launch'
        },
        'roadmap-phase-1-li-1': {
            ro: 'Concept și Whitepaper V1.0',
            en: 'Concept and Whitepaper V1.0'
        },
        'roadmap-phase-1-li-2': {
            ro: 'Dezvoltarea Smart Contractului AMGF',
            en: 'AMGF Smart Contract Development'
        },
        'roadmap-phase-1-li-3': {
            ro: 'Audit de Securitate al Contractului',
            en: 'Contract Security Audit'
        },
        'roadmap-phase-1-li-4': {
            ro: 'Lansare Site Web și Prezență Social Media',
            en: 'Website Launch and Social Media Presence'
        },
        'roadmap-phase-1-li-5': {
            ro: 'Listare pe Exchange-uri Decentralizate (DEX)',
            en: 'Decentralized Exchange (DEX) Listing'
        },
        'roadmap-phase-2-title': {
            ro: 'Faza 2: Creștere și Extindere Ecosistem',
            en: 'Phase 2: Ecosystem Growth and Expansion'
        },
        'roadmap-phase-2-li-1': {
            ro: 'Lansare Platformă de Staking AMGF',
            en: 'AMGF Staking Platform Launch'
        },
        'roadmap-phase-2-li-2': {
            ro: 'Parteneriate Strategice',
            en: 'Strategic Partnerships'
        },
        'roadmap-phase-2-li-3': {
            ro: 'Dezvoltarea AMGF Wallet (Portofel Propriu)',
            en: 'AMGF Wallet Development (Proprietary Wallet)'
        },
        'roadmap-phase-2-li-4': {
            ro: 'Integrare cu Platforme DeFi existente',
            en: 'Integration with Existing DeFi Platforms'
        },
        'roadmap-phase-2-li-5': {
            ro: 'Primele Inițiative de Guvernanță Comunitară',
            en: 'First Community Governance Initiatives'
        },
        'roadmap-phase-3-title': {
            ro: 'Faza 3: Inovație și Adoptare Globală',
            en: 'Phase 3: Innovation and Global Adoption'
        },
        'roadmap-phase-3-li-1': {
            ro: 'Lansare AMGF Lending/Borrowing Platform',
            en: 'AMGF Lending/Borrowing Platform Launch'
        },
        'roadmap-phase-3-li-2': {
            ro: 'Extindere pe Noi Blockchain-uri',
            en: 'Expansion to New Blockchains'
        },
        'roadmap-phase-3-li-3': {
            ro: 'Dezvoltarea AMGF Academy (Educație Financiară Crypto)',
            en: 'AMGF Academy Development (Crypto Financial Education)'
        },
        'roadmap-phase-3-li-4': {
            ro: 'Listare pe Exchange-uri Centralizate (CEX) Majore',
            en: 'Major Centralized Exchange (CEX) Listing'
        },
        'roadmap-phase-3-li-5': {
            ro: 'Implementare Soluții de Scalabilitate (Layer 2)',
            en: 'Layer 2 Scalability Solutions Implementation'
        },
        // Secțiunea Comunitate
        'community-title': {
            ro: 'Alătură-te Comunității!',
            en: 'Join the Community!'
        },
        'community-desc': {
            ro: 'Comunitatea este inima proiectului AMGF. Te invităm să te alături discuțiilor noastre, să pui întrebări și să contribui la dezvoltarea ecosistemului.',
            en: 'The community is the heart of the AMGF project. We invite you to join our discussions, ask questions, and contribute to the ecosystem\'s development.'
        },
        'social-discord': {
            ro: 'Discord',
            en: 'Discord'
        },
        'social-twitter': {
            ro: 'X (Twitter)',
            en: 'X (Twitter)'
        },
        'social-telegram': {
            ro: 'Telegram',
            en: 'Telegram'
        },
        'social-reddit': {
            ro: 'Reddit',
            en: 'Reddit'
        },
        'community-follow-us': {
            ro: 'Urmărește-ne pe rețelele sociale pentru cele mai recente noutăți și anunțuri!',
            en: 'Follow us on social media for the latest news and announcements!'
        },
        // Secțiunea Disclaimer
        'disclaimer-title': {
            ro: 'Disclaimer Legal Important',
            en: 'Important Legal Disclaimer'
        },
        'disclaimer-p1': {
            ro: 'Informațiile prezentate pe acest site web au doar scop informativ și nu constituie sfaturi financiare, de investiții, juridice sau fiscale. Investițiile în criptomonede implică riscuri semnificative, inclusiv riscul de pierdere totală a capitalului investit. Valoarea tokenurilor AMGF poate fluctua considerabil.',
            en: 'The information presented on this website is for informational purposes only and does not constitute financial, investment, legal, or tax advice. Investments in cryptocurrencies involve significant risks, including the risk of total loss of invested capital. The value of AMGF tokens can fluctuate considerably.'
        },
        'disclaimer-p2': {
            ro: 'Vă rugăm să efectuați propria cercetare (DYOR - Do Your Own Research) și să consultați un profesionist financiar calificat înainte de a lua orice decizie de investiție. Proiectul AMGF nu garantează profituri și nu este responsabil pentru nicio pierdere suferită ca urmare a investițiilor bazate pe informațiile de pe acest site.',
            en: 'Please conduct your own research (DYOR - Do Your Own Research) and consult a qualified financial professional before making any investment decisions. The AMGF project does not guarantee profits and is not responsible for any losses incurred as a result of investments based on the information on this site.'
        },
        'disclaimer-p3': {
            ro: 'Participarea la proiectul AMGF implică acceptarea termenilor și condițiilor noastre, care vor fi disponibile într-un document separat (Whitepaper complet și Termeni de Utilizare).',
            en: 'Participation in the AMGF project implies acceptance of our terms and conditions, which will be available in a separate document (full Whitepaper and Terms of Use).'
        },
        // Footer
        'footer-copyright': {
            ro: '&copy; 2025 AMGF Financial Freedom. Toate drepturile rezervate.',
            en: '&copy; 2025 AMGF Financial Freedom. All rights reserved.'
        },
        'footer-contact': {
            ro: 'Conectează-te cu noi: <a href="mailto:contact@amgffinance.com">contact@amgffinance.com</a>',
            en: 'Connect with us: <a href="mailto:contact@amgffinance.com">contact@amgffinance.com</a>'
        }
    };

    // Obține limba curentă din localStorage sau setează implicit la română
    let currentLanguage = localStorage.getItem('language') || 'ro';
    const languageButton = document.getElementById('language-toggle');

    // Funcție pentru a aplica traducerile
    function applyTranslations() {
        // Actualizează textul butonului de limbă
        languageButton.textContent = currentLanguage === 'ro' ? 'English' : 'Română';

        // Parcurge toate elementele cu atribute data-i18n și aplică traducerea
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key] && translations[key][currentLanguage]) {
                // Verifică dacă este un element de intrare (input)
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[key][currentLanguage];
                } else {
                    element.innerHTML = translations[key][currentLanguage];
                }
            }
        });
    }

    // Adaugă event listener pentru butonul de limbă
    languageButton.addEventListener('click', () => {
        // Schimbă limba
        currentLanguage = currentLanguage === 'ro' ? 'en' : 'ro';
        // Salvează limba în localStorage
        localStorage.setItem('language', currentLanguage);
        // Aplică noile traduceri
        applyTranslations();
    });

  
