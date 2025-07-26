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
            ro: 'Despre',
            en: 'About'
        },
        'nav-tokenomics': {
            ro: 'Tokenomics',
            en: 'Tokenomics'
        },
        'nav-roadmap': {
            ro: 'Roadmap',
            en: 'Roadmap'
        },
        'nav-contact': {
            ro: 'Contact',
            en: 'Contact'
        },
        // Secțiunea Hero
        'hero-title': {
            ro: 'AMGF: Viitorul Gamingului pe Blockchain',
            en: 'AMGF: The Future of Blockchain Gaming'
        },
        'hero-description': {
            ro: 'AMGF este o platformă revoluționară care combină pasiunea pentru gaming cu inovația tehnologiei blockchain. Descoperă o nouă eră a jocurilor descentralizate.',
            en: 'AMGF is a revolutionary platform combining the passion for gaming with the innovation of blockchain technology. Discover a new era of decentralized gaming.'
        },
        'hero-btn': {
            ro: 'Află Mai Multe',
            en: 'Learn More'
        },
        // Secțiunea Despre Noi
        'about-title': {
            ro: 'Despre AMGF',
            en: 'About AMGF'
        },
        'about-p1': {
            ro: 'AMGF nu este doar un alt token; este o viziune. Ne propunem să construim un ecosistem vibrant unde jucătorii și dezvoltatorii se pot întâlni, interacționa și prospera. Credem în puterea descentralizării de a oferi control real utilizatorilor, eliminând intermediarii și creând o experiență de gaming mai echitabilă și mai transparentă.',
            en: 'AMGF is not just another token; it\'s a vision. We aim to build a vibrant ecosystem where players and developers can meet, interact, and prosper. We believe in the power of decentralization to give real control to users, eliminating intermediaries and creating a more equitable and transparent gaming experience.'
        },
        'about-p2': {
            ro: 'Platforma noastră va integra tehnologii blockchain avansate pentru a asigura securitatea tranzacțiilor, proprietatea reală a activelor din joc (NFT-uri) și un sistem de recompensare bazat pe participare. Fie că ești un jucător dedicat sau un dezvoltator de jocuri independent, AMGF îți va oferi instrumentele și comunitatea de care ai nevoie pentru a-ți atinge potențialul maxim.',
            en: 'Our platform will integrate advanced blockchain technologies to ensure transaction security, true ownership of in-game assets (NFTs), and a participation-based reward system. Whether you are a dedicated gamer or an independent game developer, AMGF will provide you with the tools and community you need to reach your full potential.'
        },
        // Secțiunea Tokenomics
        'tokenomics-title': {
            ro: 'Tokenomics AMGF',
            en: 'AMGF Tokenomics'
        },
        'tokenomics-desc': {
            ro: 'Structura noastră tokenomică este concepută pentru a asigura stabilitate, creștere și recompensare echitabilă pentru toți deținătorii de tokenuri.',
            en: 'Our tokenomic structure is designed to ensure stability, growth, and fair rewards for all token holders.'
        },
        'tokenomics-th1': {
            ro: 'Aspect',
            en: 'Aspect'
        },
        'tokenomics-th2': {
            ro: 'Detalii',
            en: 'Details'
        },
        'tokenomics-total-supply-label': {
            ro: 'Total Supply',
            en: 'Total Supply'
        },
        'tokenomics-total-supply-value': {
            ro: '1.000.000.000 AMGF',
            en: '1,000,000,000 AMGF'
        },
        'tokenomics-distribution-label': {
            ro: 'Distribuție',
            en: 'Distribution'
        },
        'tokenomics-distribution-value': {
            ro: '50% Comunitate, 20% Dezvoltare, 15% Marketing, 10% Lichiditate, 5% Echipa',
            en: '50% Community, 20% Development, 15% Marketing, 10% Liquidity, 5% Team'
        },
        'tokenomics-utility-label': {
            ro: 'Utilitate',
            en: 'Utility'
        },
        'tokenomics-utility-value': {
            ro: 'Guvernanță, Staking, Recompense In-Game, Acces Exclusiv',
            en: 'Governance, Staking, In-Game Rewards, Exclusive Access'
        },
        'tokenomics-contract-label': {
            ro: 'Adresă Contract',
            en: 'Contract Address'
        },
        'tokenomics-contract-value': {
            ro: '0x1234...abcd (Exemplu)',
            en: '0x1234...abcd (Example)'
        },
        // Secțiunea Roadmap
        'roadmap-title': {
            ro: 'Roadmap AMGF',
            en: 'AMGF Roadmap'
        },
        'roadmap-desc': {
            ro: 'Parcursul nostru este clar definit, cu etape cheie pentru a asigura o creștere durabilă și inovație continuă.',
            en: 'Our journey is clearly defined, with key milestones to ensure sustainable growth and continuous innovation.'
        },
        'roadmap-q1-title': {
            ro: 'Faza 1: Fundația',
            en: 'Phase 1: Foundation'
        },
        'roadmap-q1-li1': {
            ro: 'Lansarea site-ului web și a whitepaper-ului',
            en: 'Website and whitepaper launch'
        },
        'roadmap-q1-li2': {
            ro: 'Listarea pe CoinMarketCap/CoinGecko',
            en: 'CoinMarketCap/CoinGecko listing'
        },
        'roadmap-q1-li3': {
            ro: 'Parteneriate inițiale cu dezvoltatori de jocuri',
            en: 'Initial partnerships with game developers'
        },
        'roadmap-q2-title': {
            ro: 'Faza 2: Extinderea',
            en: 'Phase 2: Expansion'
        },
        'roadmap-q2-li1': {
            ro: 'Lansarea platformei de staking',
            en: 'Staking platform launch'
        },
        'roadmap-q2-li2': {
            ro: 'Integrarea primelor jocuri pe platformă',
            en: 'Integration of first games on the platform'
        },
        'roadmap-q2-li3': {
            ro: 'Dezvoltarea funcționalității NFT in-game',
            en: 'Development of in-game NFT functionality'
        },
        'roadmap-q3-title': {
            ro: 'Faza 3: Inovația',
            en: 'Phase 3: Innovation'
        },
        'roadmap-q3-li1': {
            ro: 'Lansarea pieței NFT (marketplace)',
            en: 'NFT marketplace launch'
        },
        'roadmap-q3-li2': {
            ro: 'Introducerea sistemului de guvernanță DAO',
            en: 'Introduction of DAO governance system'
        },
        'roadmap-q3-li3': {
            ro: 'Extinderea parteneriatelor globale',
            en: 'Expansion of global partnerships'
        },
        'roadmap-q4-title': {
            ro: 'Faza 4: Viitorul',
            en: 'Phase 4: The Future'
        },
        'roadmap-q4-li1': {
            ro: 'Integrarea VR/AR în experiențele de gaming',
            en: 'VR/AR integration into gaming experiences'
        },
        'roadmap-q4-li2': {
            ro: 'Explorarea interoperabilității blockchain',
            en: 'Exploration of blockchain interoperability'
        },
        'roadmap-q4-li3': {
            ro: 'Evenimente comunitare și turnee majore',
            en: 'Major community events and tournaments'
        },
        // Secțiunea Contact
        'contact-title': {
            ro: 'Contactează-ne',
            en: 'Contact Us'
        },
        'contact-desc': {
            ro: 'Ai întrebări sau vrei să te alături comunității AMGF? Ne poți găsi pe rețelele sociale:',
            en: 'Have questions or want to join the AMGF community? You can find us on social media:'
        },
        // Footer
        'footer-text': {
            ro: '&copy; 2025 AMGF. Toate drepturile rezervate.',
            en: '&copy; 2025 AMGF. All rights reserved.'
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

    // Aplică traducerile inițiale la încărcarea paginii
    applyTranslations();
});
