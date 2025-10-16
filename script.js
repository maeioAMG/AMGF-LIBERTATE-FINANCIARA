// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Obiect pentru a stoca traducerile (Traducerile existente sunt păstrate)
    const translations = {
        // Navigație
        'nav-home': { ro: 'Acasă', en: 'Home' },
        'nav-about': { ro: 'Despre Noi', en: 'About Us' },
        'nav-why': { ro: 'De Ce AMGF?', en: 'Why AMGF?' }, 
        'nav-links': { ro: 'Link-uri Utile', en: 'Useful Links' }, 
        'nav-vision': { ro: 'Viziune', en: 'Vision' }, 
        'nav-tokenomics': { ro: 'Tokenomics', en: 'Tokenomics' },
        'nav-disclaimer': { ro: 'Disclaimer', en: 'Disclaimer' },
        
        // Header
        'hero-title': { ro: 'AMGF', en: 'AMGF' },
        'hero-subtitle': { ro: 'Libertate Financiară', en: 'Financial Freedom' },

        // Secțiunea Despre Noi (S-a păstrat textul detaliat în RO/EN, dar am adăugat id-uri)
        'about-title': { ro: 'Cine Suntem și De Ce AMGF?', en: 'Who We Are and Why AMGF?' },
        'about-p1': { ro: 'Salut, sunt <b>"Fondatorul AMGF"</b>, o persoană obișnuită, cu o pasiune extraordinară pentru viitorul pe care îl aduc Web3 și criptomonedele. La 53 de ani, am explorat acest univers digital de câțiva ani, participând la numeroase proiecte și airdrop-uri. Am văzut atât povești de succes incredibile, cât și eșecuri dureroase – experiențe care m-au învățat enorm despre potențialul și riscurile acestui domeniu.', en: 'Hello, I am the <b>"AMGF Founder"</b>, an ordinary person with an extraordinary passion for the future brought by Web3 and cryptocurrencies. At 53, I\'ve explored this digital universe for several years, participating in numerous projects and airdrops. I\'ve seen incredible success stories as well as painful failures – experiences that taught me a lot about the potential and risks of this field.' },
        'about-p2': { ro: 'Ca mulți alții, m-am săturat să investesc timp și încredere în proiecte anonime, conduse de interese necunoscute. Așa s-a născut AMGF. Am decis că este timpul să investesc în mine însumi și să construiesc un proiect în care cred cu adevărat, bazat pe transparență, utilitate și o comunitate autentică.', en: 'Like many others, I grew tired of investing time and trust in anonymous projects driven by unknown interests. This is how AMGF was born. I decided it was time to invest in myself and build a project I truly believe in, based on transparency, utility, and an authentic community.' },
        'about-p3': { ro: 'AMGF nu este creat de un "expert financiar" de pe Wall Street, ci de o persoană reală, care înțelege provocările și aspirațiile celor care își doresc libertatea financiară. Viziunea mea pentru AMGF este simplă: să creăm un ecosistem unde oricine, indiferent de vârstă sau experiență anterioară, poate învăța, contribui și crește alături de noi. Ne propunem să oferim un spațiu sigur și valoros, diferit de promisiunile goale și schemele rapide care domină adesea spațiul crypto.', en: 'AMGF is not created by a Wall Street "financial expert," but by a real person who understands the challenges and aspirations of those seeking financial freedom. My vision for AMGF is simple: to create an ecosystem where anyone, regardless of age or prior experience, can learn, contribute, and grow with us. We aim to provide a safe and valuable space, different from the empty promises and quick schemes that often dominate the crypto space.' },
        'about-p4': { ro: 'Suntem aici pentru a construi pe termen lung, împreună cu voi. Încrederea se câștigă prin fapte, nu prin vorbe, iar AMGF este angajamentul meu față de un viitor mai bun, construit pas cu pas, alături de comunitate.', en: 'We are here to build for the long term, together with you. Trust is earned through actions, not words, and AMGF is my commitment to a better future, built step by step, alongside the community.' },
        
        // Secțiunea De Ce AMGF?
        'why-title': { ro: 'De ce AMGF?', en: 'Why AMGF?' },
        'why-p1': { ro: 'În peisajul dinamic și adesea haotic al Web3 și al criptomonedelor, promisiunile abundă, dar încrederea și informațiile autentice sunt adesea greu de găsit. Mulți, inclusiv eu, am simțit nevoia unui loc unde libertatea financiară să fie nu doar un vis, ci o călătorie reală, susținută de cunoaștere și o comunitate dedicată.', en: 'In the dynamic and often chaotic landscape of Web3 and cryptocurrencies, promises abound, but trust and authentic information are often hard to find. Many, including myself, felt the need for a place where financial freedom is not just a dream, but a real journey, supported by knowledge and a dedicated community.' },
        'why-p2': { ro: 'Aici intervine AMGF. Suntem mai mult decât un token; suntem un ecosistem construit de o persoană obișnuită, la fel ca tine, pasionată de viitor și de potențialul decentralizat. Misiunea noastră este să oferim un spațiu transparent și accesibil unde vei putea învăța, contribui și crește alături de o comunitate unită, transformând aspirația spre independența financiară într-o realitate concretă, pas cu pas.', en: 'This is where AMGF comes in. We are more than just a token; we are an ecosystem built by an ordinary person, just like you, passionate about the future and decentralized potential. Our mission is to provide a transparent and accessible space where you can learn, contribute, and grow alongside a united community, turning the aspiration for financial independence into a concrete reality, step by step.' },

        // Secțiunea Link-uri (MODIFICATĂ)
        'links-title': { ro: 'Comunitate & Tranzacționare', en: 'Community & Trading' },
        'links-desc': { 
            ro: 'Adresa de Mint (Solana): <b>HhQ6zu27pugw9KnxvvjGZFcPzwhwoT1U8AZJAmhECEJp</b>', 
            en: 'Mint Address (Solana): <b>HhQ6zu27pugw9KnxvvjGZFcPzwhwoT1U8AZJAmhECEJp</b>' 
        },
        'link-telegram': { 
            ro: 'Contact Telegram (@amgf_libertate_bot)', 
            en: 'Contact Telegram (@amgf_libertate_bot)' 
        },
        'link-exchange1': { 
            ro: '**PumpFun**', // MODIFICAT AICI
            en: '**PumpFun**'  // MODIFICAT AICI
        },
        'link-exchange2': { 
            ro: 'Verifică Adresa de Mint (SolanaScan)', 
            en: 'Verify Mint Address (SolanaScan)' 
        },

        // Secțiunea Viziune
        'vision-title': { ro: 'Viziune pe termen lung', en: 'Long-Term Vision' },
        'vision-p1': { ro: 'Viziunea noastră pentru AMGF depășește orizontul unui simplu token; ne propunem să construim un ecosistem digital vibrant și autosustenabil, o adevărată Organizație Autonomă Descentralizată (DAO), unde libertatea financiară devine accesibilă tuturor. Pe termen lung, AMGF va fi recunoscut nu doar ca un simbol al potențialului Web3, ci ca un catalizator pentru transformarea personală și colectivă.', en: 'Our vision for AMGF extends beyond the horizon of a simple token; we aim to build a vibrant and self-sustaining digital ecosystem, a true Decentralized Autonomous Organization (DAO), where financial freedom becomes accessible to all. In the long term, AMGF will be recognized not only as a symbol of Web3 potential but as a catalyst for personal and collective transformation.' },
        'vision-p2': { ro: 'Ne imaginăm un viitor în care deținătorii de AMGF sunt co-proprietari și arhitecți ai propriului lor destin financiar. Prin platforma noastră, ei vor avea acces la:', en: 'We envision a future where AMGF holders are co-owners and architects of their own financial destiny. Through our platform, they will have access to:' },
        'vision-li1': { ro: '<b>O educație financiară gamificată și practică</b>, adaptată nevoilor reale ale fiecăruia, recompensată direct prin sistemul nostru <b>Learn-to-Earn</b>.', en: '<b>Gamified and practical financial education</b>, tailored to everyone\'s real needs, rewarded directly through our <b>Learn-to-Earn</b> system.' },
        'vision-li2': { ro: '<b>Instrumente intuitive și analize personalizate</b>, care demistifică lumea investițiilor și îi ajută să ia decizii informate, depășind zgomotul informațional.', en: '<b>Intuitive tools and personalized analytics</b>, which demystify the world of investments and help them make informed decisions, overcoming information noise.' },
        'vision-li3': { ro: '<b>O comunitate globală activă și interconectată</b>, unde membrii se sprijină reciproc, își împărtășesc experiențele și colaborează la dezvoltarea proiectului prin mecanismul <b>Build-to-Earn</b>.', en: '<b>An active and interconnected global community</b>, where members support each other, share their experiences, and collaborate in the project\'s development through the <b>Build-to-Earn</b> mechanism.' },
        'vision-li4': { ro: '<b>Un sistem de guvernanță DAO robust și transparent</b>, unde fiecare deținător de AMGF are o voce reală în deciziile cheie ale ecosistemului, de la alocarea resurselor până la parteneriate strategice și direcția viitoare a fondului colectiv (dacă va fi implementat).', en: '<b>A robust and transparent DAO governance system</b>, where every AMGF holder has a real voice in the ecosystem\'s key decisions, from resource allocation to strategic partnerships and the future direction of the collective fund (if implemented).' },
        'vision-p3': { ro: 'Pe măsură ce ecosistemul AMGF se maturizează, ne vedem transformându-ne într-un model de autonomie comunitară și de sustenabilitate financiară, unde valoarea este generată și distribuită de și pentru membrii săi. AMGF va fi un exemplu al modului în care tehnologia blockchain poate împuternici indivizii să-și preia controlul asupra viitorului lor financiar, construind împreună o moștenire de încredere și prosperitate.', en: 'As the AMGF ecosystem matures, we see ourselves transforming into a model of community autonomy and financial sustainability, where value is generated and distributed by and for its members. AMGF will be an example of how blockchain technology can empower individuals to take control of their financial future, building a legacy of trust and prosperity.' },

        // Secțiunea Tokenomics
        'tokenomics-title': { ro: 'Alocarea Tokenurilor AMGF (Actualizată)', en: 'AMGF Token Allocation (Updated)' },
        'tokenomics-th1': { ro: 'Categorie de Alocare', en: 'Allocation Category' },
        'tokenomics-th2': { ro: 'Procent (%)', en: 'Percentage (%)' },
        'tokenomics-th3': { ro: 'Cantitate AMGF', en: 'AMGF Amount' },
        'tokenomics-th4': { ro: 'Scop și Justificare', en: 'Purpose and Justification' },
        'tokenomics-th5': { ro: 'Plan de Vesting / Acces', en: 'Vesting / Access Plan' },
        
        // Rândurile tabelului (traduce doar coloana 1, 4, 5)
        'tokenomics-row1-cat': { ro: 'Comunitate & Ecosistem', en: 'Community & Ecosystem' },
        'tokenomics-row1-scope': { ro: 'Susținerea creșterii organice a ecosistemului prin recompense pentru participare (Learn-to-Earn, Build-to-Earn), campanii de promovare, airdrop-uri strategice și stimulente pentru adoptare. Fără a fi un "investiție", ci o recompensă pentru contribuție.', en: 'Supporting the ecosystem\'s organic growth through participation rewards (Learn-to-Earn, Build-to-Earn), promotional campaigns, strategic airdrops, and adoption incentives. Not an "investment," but a reward for contribution.' },
        'tokenomics-row1-vesting': { ro: 'Eliberare treptată pe parcursul a 5-10 ani, pe măsură ce jetoanele sunt câștigate sau distribuite prin programe comunitare. Gestionat de un smart contract multi-sig sau DAO.', en: 'Gradual release over 5-10 years, as tokens are earned or distributed through community programs. Managed by a multi-sig smart contract or DAO.' },
        
        'tokenomics-row2-cat': { ro: 'Trezorerie DAO / Dezvoltare Ecosistem', en: 'DAO Treasury / Ecosystem Development' },
        'tokenomics-row2-scope': { ro: 'Finanțarea dezvoltării continue a platformei (instrumente, analize, simulatoare), integrarea de noi parteneriate, audituri de securitate și asigurarea sustenabilității pe termen lung a proiectului, sub guvernanța comunității.', en: 'Funding the continuous platform development (tools, analytics, simulators), integration of new partnerships, security audits, and ensuring the project\'s long-term sustainability, under community governance.' },
        'tokenomics-row2-vesting': { ro: 'Blocate într-o trezorerie DAO, accesibile prin votul deținătorilor de tokenuri, cu praguri de vot minime și perioade de propunere/vot.', en: 'Locked in a DAO treasury, accessible through token holder votes, with minimum voting thresholds and proposal/voting periods.' },

        'tokenomics-row3-cat': { ro: 'Fond de Lichiditate Inițială (DEX)', en: 'Initial Liquidity Fund (DEX)' },
        'tokenomics-row3-scope': { ro: 'Asigurarea lichidității inițiale pe burse descentralizate (DEX-uri), pentru a permite tranzacționarea eficientă și a facilita accesul utilizatorilor la AMGF, fără a fi nevoie de o ofertă publică reglementată.', en: 'Ensuring initial liquidity on decentralized exchanges (DEXs) to allow efficient trading and facilitate user access to AMGF, without the need for a regulated public offering.' },
        'tokenomics-row3-vesting': { ro: 'Eliberare imediată pentru a fi plasată în pool-uri de lichiditate și blocată prin contracte de staking/farming pentru cel puțin 2-5 ani. Nu sunt destinate vânzării, ci pentru a facilita tranzacțiile.', en: 'Immediate release to be placed in liquidity pools and locked via staking/farming contracts for at least 2-5 years. Not intended for sale, but to facilitate transactions.' },

        'tokenomics-row4-cat': { ro: 'Echipa și Fondator', en: 'Team and Founder' },
        'tokenomics-row4-scope': { ro: 'Alocare pentru Fondator și echipa de bază. Compensarea efortului inițial și stimularea loialității pe termen lung. (Fondatorul: 5%, Echipa 5%)', en: 'Allocation for the Founder and core team. Compensation for initial effort and incentivizing long-term loyalty. (Founder: 5%, Team 5%)' },
        'tokenomics-row4-vesting': { ro: 'Blocare inițială de 1 an (Cliff), urmată de eliberare liniară pe 3 ani (Vesting). Această blocare asigură angajamentul pe termen lung.', en: '1-year initial lock (Cliff), followed by linear release over 3 years (Vesting). This lock-up ensures long-term commitment.' },

        // Total
        'tokenomics-total': { ro: 'Total', en: 'Total' },

        // Nota finală
        'tokenomics-note': { ro: '<b>Notă:</b> Strategia Tokenomics este proiectată pentru a minimiza presiunea de vânzare inițială și a alinia interesele echipei și ale comunității pentru succesul pe termen lung. Jetoanele nu sunt vândute, ci distribuite pentru a construi ecosistemul.', en: '<b>Note:</b> The Tokenomics strategy is designed to minimize initial selling pressure and align the interests of the team and community for long-term success. Tokens are not sold, but distributed to build the ecosystem.' },
        
        // Secțiunea Disclaimer
        'disclaimer-title': { ro: 'Disclaimer Legal Important', en: 'Important Legal Disclaimer' },
        'disclaimer-p1': { ro: 'Informațiile prezentate pe acest site web au doar scop informativ și nu constituie sfaturi financiare, de investiții, juridice sau fiscale. Investițiile în criptomonede implică riscuri semnificative, inclusiv riscul de pierdere totală a capitalului investit. Valoarea tokenurilor AMGF poate fluctua considerabil.', en: 'The information presented on this website is for informational purposes only and does not constitute financial, investment, legal, or tax advice. Investments in cryptocurrencies involve significant risks, including the risk of total loss of invested capital. The value of AMGF tokens can fluctuate considerably.' },
        'disclaimer-p2': { ro: 'Vă rugăm să efectuați propria cercetare (DYOR - Do Your Own Research) și să consultați un profesionist financiar calificat înainte de a lua orice decizie de investiție. Proiectul AMGF nu garantează profituri și nu este responsabil pentru nicio pierdere suferită ca urmare a investițiilor bazate pe informațiile de pe acest site.', en: 'Please conduct your own research (DYOR - Do Your Own Research) and consult a qualified financial professional before making any investment decisions. The AMGF project does not guarantee profits and does not assume responsibility for any losses incurred as a result of investments based on the information on this site.' },
        'disclaimer-p3': { ro: 'Participarea la proiectul AMGF implică acceptarea termenilor și condițiilor noastre, care vor fi disponibile într-un document separat (Whitepaper complet și Termeni de Utilizare).', en: 'Participation in the AMGF project implies acceptance of our terms and conditions, which will be available in a separate document (full Whitepaper and Terms of Use).' },
        
        // Footer (Adresa de email este corectă)
        'footer-copyright': { ro: '&copy; 2025 AMGF Financial Freedom. Toate drepturile rezervate.', en: '&copy; 2025 AMGF Financial Freedom. All rights reserved.' },
        'footer-contact': { 
            ro: 'Conectează-te cu noi: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>', 
            en: 'Connect with us: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>' 
        }
    };

    // Obține limba curentă din localStorage sau setează implicit la română
    let currentLanguage = localStorage.getItem('language') || 'ro';
    const languageButton = document.getElementById('language-toggle');

    // Funcție pentru a aplica traducerile
    function applyTranslations() {
        // Afișează limba curentă (RO sau EN) și textul celeilalte
        if (currentLanguage === 'ro') {
            languageButton.innerHTML = '<b>RO</b> / EN'; 
            languageButton.title = 'Switch to English';
        } else {
            languageButton.innerHTML = 'RO / <b>EN</b>';
            languageButton.title = 'Treci la Română';
        }
        
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
            // Schimbă limba
            currentLanguage = currentLanguage === 'ro' ? 'en' : 'ro';
            // Salvează limba în localStorage
            localStorage.setItem('language', currentLanguage);
            // Aplică noile traduceri
            applyTranslations();
        });
    }
});
