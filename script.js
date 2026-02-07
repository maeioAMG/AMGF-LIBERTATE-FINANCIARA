document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        'nav-about': { ro: 'Despre', en: 'About', fr: 'À Propos', ru: 'О нас' },
        'nav-values': { ro: 'Valori', en: 'Values', fr: 'Valeurs', ru: 'Ценности' },
        'nav-links': { ro: 'Link-uri', en: 'Links', fr: 'Liens', ru: 'Ссылки' },
        'nav-vision': { ro: 'Viziune', en: 'Vision', fr: 'Vision', ru: 'Видение' },
        'nav-tokenomics': { ro: 'Tokenomics', en: 'Tokenomics', fr: 'Tokenomics', ru: 'Токеномика' },
        'nav-whitepaper': { ro: 'Cartea Albă', en: 'Whitepaper', fr: 'Livre Blanc', ru: 'Whitepaper' },
        'nav-disclaimer': { ro: 'Disclaimer', en: 'Disclaimer', fr: 'Avertissement', ru: 'Отказ' },
        
        'hero-title': { ro: 'AMGF', en: 'AMGF', fr: 'AMGF', ru: 'AMGF' },
        'hero-subtitle': { ro: 'Financial Freedom', en: 'Financial Freedom', fr: 'Liberté Financière', ru: 'Финансовая Свобода' },

        'about-title': { ro: 'Cine Suntem și De Ce AMGF?', en: 'Who We Are?', fr: 'Qui Sommes-Nous?', ru: 'Кто Мы?' },
        'about-p1': { ro: 'Salut, sunt <b>"Fondatorul AMGF"</b>, o persoană obișnuită, cu o pasiune extraordinară pentru viitorul pe care îl aduc Web3 la 53 de ani.', en: 'Hi, I am the <b>"AMGF Founder"</b>, an ordinary person with an extraordinary passion for Web3 at 53.', fr: 'Bonjour, je suis le <b>"Fondateur d\'AMGF"</b>, une personne ordinaire passionnée par le Web3 à 53 ans.', ru: 'Привет, я <b>"Основатель AMGF"</b>, обычный человек, увлеченный Web3 в свои 53 года.' },
        'about-p2': { ro: 'M-am săturat de proiecte anonime. Am decis să construiesc ceva bazat pe transparență.', en: 'Tired of anonymous projects, I decided to build based on transparency.', fr: 'Fatigué des projets anonymes, j\'ai décidé de construire sur la transparence.', ru: 'Устав от анонимных проектов, я решил строить на основе прозрачности.' },
        'about-p3': { ro: 'AMGF este creat de o persoană reală pentru cei care caută libertatea financiară.', en: 'AMGF is created by a real person for those seeking financial freedom.', fr: 'AMGF est créé par une personne réelle pour ceux qui cherchent la liberté.', ru: 'AMGF создан реальным человеком для тех, кто ищет свободу.' },
        'about-p4': { ro: 'Suntem aici să construim pe termen lung.', en: 'We are here to build for the long term.', fr: 'Nous sommes ici pour construire à long terme.', ru: 'Мы здесь, чтобы строить на долгосрочную перспективу.' },

        // VALORI (Noi)
        'values-title': { ro: 'Valorile Noastre', en: 'Our Values', fr: 'Nos Valeurs', ru: 'Наши Ценности' },
        'val-1-t': { ro: '🛡️ Transparență', en: '🛡️ Transparency', fr: '🛡️ Transparence', ru: '🛡️ Прозрачность' },
        'val-1-p': { ro: 'Fără interese ascunse. Construim cu cărțile pe față pe rețeaua Base.', en: 'No hidden interests. Building with open cards on the Base network.', fr: 'Pas d\'intérêts cachés. Construire avec des cartes ouvertes sur Base.', ru: 'Никаких скрытых интересов. Строим открыто в сети Base.' },
        'val-2-t': { ro: '📚 Educație', en: '📚 Education', fr: '📚 Éducation', ru: '📚 Образование' },
        'val-2-p': { ro: 'Punem accent pe cunoaștere. Un membru informat este un membru protejat.', en: 'We focus on knowledge. An informed member is a protected member.', fr: 'L\'éducation est la clé. Un membre informé est protégé.', ru: 'Знание - сила. Информированный участник защищен.' },
        'val-3-t': { ro: '🤝 Comunitate', en: '🤝 Community', fr: '🤝 Communauté', ru: '🤝 Сообщество' },
        'val-3-p': { ro: 'Respectul reciproc este baza. AMGF aparține celor care cred în viziune.', en: 'Mutual respect is the base. AMGF belongs to those who believe.', fr: 'Le respect mutuel est la base. AMGF appartient à ceux qui croient.', ru: 'Взаимное уважение - основа. AMGF принадлежит тем, кто верит.' },

        'why-title': { ro: 'De ce AMGF?', en: 'Why AMGF?', fr: 'Pourquoi AMGF?', ru: 'Почему AMGF?' },
        'why-p1': { ro: 'Într-o lume crypto haotică, oferim stabilitate și încredere.', en: 'In a chaotic crypto world, we offer stability and trust.', fr: 'Dans un monde crypto chaotique, nous offrons la stabilité.', ru: 'В хаотичном мире крипты мы предлагаем стабильность.' },
        'why-p2': { ro: 'Suntem un ecosistem, nu doar un token.', en: 'We are an ecosystem, not just a token.', fr: 'Nous sommes un écosystème, pas seulement un jeton.', ru: 'Мы — экосистема, а не просто токен.' },

        'links-title': { ro: 'Tranzacționare', en: 'Trading', fr: 'Trading', ru: 'Торговля' },
        'links-desc': { ro: 'Contract BASE: <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>', en: 'BASE Contract: <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>', fr: 'Contrat BASE: <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>', ru: 'Контракт BASE: <b>0x64bfE8A8C23b896ab810e2a051cC6E5F0C2ac765</b>' },
        'link-telegram': { ro: 'Telegram Bot', en: 'Telegram Bot', fr: 'Bot Telegram', ru: 'Телеграм Бот' },
        'link-exchange1': { ro: 'Uniswap (Base)', en: 'Uniswap (Base)', fr: 'Uniswap (Base)', ru: 'Uniswap (Base)' },
        'link-exchange2': { ro: 'DexScreener', en: 'DexScreener', fr: 'DexScreener', ru: 'DexScreener' },

        'vision-title': { ro: 'Viziune', en: 'Vision', fr: 'Vision', ru: 'Видение' },
        'vision-p1': { ro: 'Vrem să devenim un DAO autosustenabil.', en: 'We aim to become a self-sustaining DAO.', fr: 'Nous visons à devenir une DAO auto-suffisante.', ru: 'Мы стремимся стать самодостаточной DAO.' },
        'vision-li1': { ro: 'Educație Learn-to-Earn.', en: 'Learn-to-Earn education.', fr: 'Éducation Learn-to-Earn.', ru: 'Обучение Learn-to-Earn.' },

        'tokenomics-title': { ro: 'Tokenomics', en: 'Tokenomics', fr: 'Tokenomics', ru: 'Токеномика' },
        'tokenomics-th1': { ro: 'Categorie', en: 'Category', fr: 'Catégorie', ru: 'Категория' },
        'tokenomics-row1-cat': { ro: 'Comunitate', en: 'Community', fr: 'Communauté', ru: 'Сообщество' },
        'tokenomics-row1-scope': { ro: 'Airdrop și recompense.', en: 'Airdrops and rewards.', fr: 'Airdrops et récompenses.', ru: 'Аирдропы и награды.' },
        'tokenomics-row1-vesting': { ro: '5-10 ani.', en: '5-10 years.', fr: '5-10 ans.', ru: '5-10 лет.' },

        'footer-copyright': { ro: '&copy; 2025 AMGF. Toate drepturile rezervate.', en: '&copy; 2025 AMGF. All rights reserved.', fr: '&copy; 2025 AMGF. Tous droits réservés.', ru: '&copy; 2025 AMGF. Все права защищены.' },
        'footer-contact': { ro: 'Contact: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>', en: 'Contact: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>', fr: 'Contact : <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>', ru: 'Контакт: <a href="mailto:AMG3775@protonmail.com">AMG3775@protonmail.com</a>' }
    };

    const availableLanguages = ['ro', 'en', 'fr', 'ru'];
    let currentLanguage = localStorage.getItem('language') || 'ro';
    const languageButton = document.getElementById('language-toggle');
    
    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                if (key.includes('p') || key.includes('li') || key.includes('footer') || key.includes('desc') || key.includes('about')) {
                     element.innerHTML = translations[key][lang];
                } else {
                     element.textContent = translations[key][lang];
                }
            }
        });
        const displayLang = availableLanguages.map(l => l === lang ? `[${l.toUpperCase()}]` : l.toUpperCase()).join(' / ');
        languageButton.textContent = displayLang; 
    }

    languageButton.addEventListener('click', () => {
        const currentIndex = availableLanguages.indexOf(currentLanguage);
        currentLanguage = availableLanguages[(currentIndex + 1) % availableLanguages.length];
        localStorage.setItem('language', currentLanguage);
        applyTranslations(currentLanguage);
    });
    
    applyTranslations(currentLanguage);
});
