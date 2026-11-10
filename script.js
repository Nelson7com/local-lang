
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');

  // Mtu akibonyeza icon ya nukta 3, fungua au funga menu
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Mtu akibonyeza link yoyote ndani ya menu, menu ijifunge yenyewe
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });







const images = [
    "images/socio.jpg",
    "images/SONG.jpg",
    "images/hospital.jpg",
    "images/diffeent langauage.jpg"
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero-section');

function changeBackgroundImage() {
    // Badilisha background image
    heroSection.style.backgroundImage = `url("${images[currentIndex]}")`;
    
    // Nenda kwenye picha inayofuata au rudi ya kwanza (loop)
    currentIndex = (currentIndex + 1) % images.length;
}

// Weka picha ya kwanza mara tu ukurasa unapofunguka
changeBackgroundImage();

// Badilisha picha kila baada ya sekunde 5 (ms 5000)
setInterval(changeBackgroundImage, 5000);

/**
 * Translation API Manager (Zero-HTML-Modification Version)
 * Dynamically translates all section titles, paragraphs, buttons, and footer items
 * between Kiswahili and English while keeping original HTML intact.
 */
const TranslationManager = (() => {
  const STORAGE_KEY = 'app_lang';

  // Translations mapped directly to unique element query selectors
  const translations = {
    sw: {
      // Navigation
      '#navMenu li:nth-child(1) a': 'Mwanzo',
      '#navMenu li:nth-child(2) a': 'Lugha Zetu',
      '#navMenu li:nth-child(3) a': 'Jinsi Inavyotumika',
      '#navMenu li:nth-child(4) a': 'Sifa',
      '.btn-start': 'Anza kutumia',

      // Hero Section
      '.headings h1': 'Lugha za Asili za Tanzania',
      '.headings p span': 'Tujifunze,Tuzitumie,Tuzidumishe',
      '.headings p strong': 'Lugha za Asili yetu Tanzania',

      // Action Buttons
      '.headings-container button:nth-child(1)': 'Jinsi Inavyofanya Kazi',
      '.headings-container button:nth-child(2)': 'Anza Kutumia',

      // Tribe Section
      '#lugha-zetu .tribe-title h2': 'Makabila ya Tanzania',
      '#lugha-zetu .tribe-title p strong': 'Tudumishe Utamaduni,Tutumie na kujifunza Lugha zetu za Asili',

      // Usage / How Section
      '#jinsi-inavyotumika > h3': 'Taaluma na Sehemu Tunapoweza Tukatumia Lugha Zetu Za Asili',
      '#jinsi-inavyotumika > p': 'hizi ni sehemu ambazo lugha hizi ni muhimu kutumika',
      
      '#jinsi-inavyotumika .how-card:nth-child(1) .card-content p': 'inasaidia katika ufundishaji na utoaji wa maarifa kwa wanafunzi',
      '#jinsi-inavyotumika .how-card:nth-child(2) .card-content p': 'inasaidia katika uelezaji na utoaji wa matibabu kwa wagonjwa',
      '#jinsi-inavyotumika .how-card:nth-child(3) .card-content p': 'inasaidia katika mawasiliano na utoaji wa maarifa kwa jamii',
      '#jinsi-inavyotumika .how-card:nth-child(4) .card-content p': 'inasaidia katika mawasiliano na utoaji wa huduma kwa wateja',

      // AI Features / Sifa Section
      '#Sifa > h3': 'namna inavyofanya kazi ya kutafasiri Lugha Zetu Za Asili',
      '#Sifa .how-card:nth-child(1) .card-content h3': 'Mtumiaji Anaongea',
      '#Sifa .how-card:nth-child(1) .card-content p': 'inasikiliza inaelewa Lugha yoyote anayoiongea',
      '#Sifa .how-card:nth-child(2) .card-content h3': 'AI inachakata na kufikiri',
      '#Sifa .how-card:nth-child(2) .card-content p': 'inafikiri pia inachakata maneno ya lugha ili kuleta tafasiri na maana iliyokamilika',
      '#Sifa .how-card:nth-child(3) .card-content h3': 'AI Inatoa majibu',
      '#Sifa .how-card:nth-child(3) .card-content p': 'AI baada ya kufikiri na kutafasiri lugha ya mtumiaji inatoa majibu na maana kwa maneno ya kuongea au ya maandishi',
      '#Sifa .how-card:nth-child(4) .card-content h3': 'Maana Inatolewa',
      '#Sifa .how-card:nth-child(4) .card-content p': 'Mtumiaji atapata maana ya Lugha husika katika uhalisia wake',

      // Footer Section
      '.footer-about h3': 'Lugha za Asili Tanzania',
      '.footer-about p': 'Tanzania ina zaidi ya lugha 120 za asili zinazotoka katika familia kuu nne za lugha: Bantu, Nilotic, Cushitic, na Khoisan. Ingawa Kiswahili ni lugha ya Taifa na kiunganishi kikuu, lugha za asili kama Kisukuma, Kichagga, Kimakonde, na Kihaya zinaendelea kuhifadhi utamaduni na historia ya jamii husika.',
      '.footer-languages h4': 'Familia Kuu za Lugha',
      '.footer-bottom p': '© 2026 Hifadhi ya Utamaduni wa Lugha Tanzania. Haki zote zimehifadhiwa.'
    },

    en: {
      // Navigation
      '#navMenu li:nth-child(1) a': 'Home',
      '#navMenu li:nth-child(2) a': 'Our Languages',
      '#navMenu li:nth-child(3) a': 'How It Works',
      '#navMenu li:nth-child(4) a': 'Features',
      '.btn-start': 'Get Started',

      // Hero Section
      '.headings h1': 'Indigenous Languages of Tanzania',
      '.headings p span': "Let's learn, use, and preserve",
      '.headings p strong': 'Our Indigenous Languages of Tanzania',

      // Action Buttons
      '.headings-container button:nth-child(1)': 'How It Works',
      '.headings-container button:nth-child(2)': 'Get Started',

      // Tribe Section
      '#lugha-zetu .tribe-title h2': 'Tribes of Tanzania',
      '#lugha-zetu .tribe-title p strong': "Let's preserve our culture, use and learn our indigenous languages",

      // Usage / How Section
      '#jinsi-inavyotumika > h3': 'Fields and Sectors Where Our Indigenous Languages Can Be Used',
      '#jinsi-inavyotumika > p': 'These are key sectors where these indigenous languages are vital to use',
      
      '#jinsi-inavyotumika .how-card:nth-child(1) .card-content p': 'Helps in teaching and imparting knowledge to students',
      '#jinsi-inavyotumika .how-card:nth-child(2) .card-content p': 'Helps in explaining and delivering medical treatments to patients',
      '#jinsi-inavyotumika .how-card:nth-child(3) .card-content p': 'Helps in communication and knowledge sharing within communities',
      '#jinsi-inavyotumika .how-card:nth-child(4) .card-content p': 'Helps in business communication and delivering customer service',

      // AI Features / Sifa Section
      '#Sifa > h3': 'How Indigenous Language AI Translation Works',
      '#Sifa .how-card:nth-child(1) .card-content h3': 'User Speaks',
      '#Sifa .how-card:nth-child(1) .card-content p': 'Listens and comprehends any spoken indigenous language',
      '#Sifa .how-card:nth-child(2) .card-content h3': 'AI Processes & Thinks',
      '#Sifa .how-card:nth-child(2) .card-content p': 'Analyzes and processes linguistic data to deliver precise contextual translation',
      '#Sifa .how-card:nth-child(3) .card-content h3': 'AI Generates Output',
      '#Sifa .how-card:nth-child(3) .card-content p': 'After processing, AI delivers answers and context through voice or text output',
      '#Sifa .how-card:nth-child(4) .card-content h3': 'Meaning Delivered',
      '#Sifa .how-card:nth-child(4) .card-content p': 'The user receives authentic context and meaning in real-time',

      // Footer Section
      '.footer-about h3': 'Indigenous Languages Tanzania',
      '.footer-about p': 'Tanzania has over 120 indigenous languages originating from four major families: Bantu, Nilotic, Cushitic, and Khoisan. While Swahili serves as the national unifying language, indigenous languages like Sukuma, Chagga, Makonde, and Haya preserve cultural heritage and community history.',
      '.footer-languages h4': 'Major Language Families',
      '.footer-bottom p': '© 2026 Tanzania Indigenous Language Cultural Heritage. All rights reserved.'
    }
  };

  /**
   * Applies the language dictionary to the DOM without requiring extra HTML attributes
   * @param {'sw'|'en'} lang 
   */
  const setLanguage = (lang) => {
    const dict = translations[lang];
    if (!dict) return;

    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);

    // Apply translations to each selector
    Object.keys(dict).forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = dict[selector];
      }
    });

    // Synchronize select dropdown
    const selectElem = document.querySelector('.lang-select');
    if (selectElem) {
      selectElem.value = lang;
    }
  };

  /**
   * Gets stored language or defaults to Swahili ('sw')
   * @returns {'sw'|'en'}
   */
  const getLanguage = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'en' || saved === 'sw' ? saved : 'sw';
  };

  /**
   * Binds change listener to existing .lang-select dropdown
   */
  const init = () => {
    document.addEventListener('DOMContentLoaded', () => {
      const currentLang = getLanguage();
      setLanguage(currentLang);

      const selectElem = document.querySelector('.lang-select');
      if (selectElem) {
        selectElem.value = currentLang;
        selectElem.addEventListener('change', (e) => {
          setLanguage(e.target.value);
        });
      }
    });
  };

  return { init, setLanguage, getLanguage };
})();

// Auto-run translation initializer
TranslationManager.init();
const lughaZaAsili = [
    ["Kisukuma"],
    ["Kichagga"],
    ["Kinyamwezi"],
    ["Kihaya"],
    ["Kigogo"],
    ["Kihehe"],
    ["Kimakonde"],
    ["Kinyakyusa"],
    ["Kimaasai"],
    ["Kizaramo"],
    ["Kiluguru"],
    ["Kipare"],
    ["Kikurya"],
    ["Kiraqw" ],
    ["Kifipa"],
    ["Kibena"],
    ["Kinyiramba"],
    ["Kinyaturu"],
    ["Kimwera"],
    ["Kimatengo"],
    ["Kiyao"],
    ["Kingoni"],
    ["Kisambaa"],
    ["Kizigua"],
    ["Kikinga"],
    ["Kijita"],
    ["Kikerewe"],
    ["Kihangaza"],
    ["Kizanaki"],
    ["Kikwaya"],
    ["Kisubi"],
    ["Kibondei"],
    ["Kisangu"],
    ["Kisonjo"]
];

const tribeList = document.getElementById('tribeList');

// Function ya kutengeneza kadi za makabila
function renderTribes(items) {
    items.forEach(([lugha,]) => {
        const card = document.createElement('div');
        card.className = 'tribe-card';
        card.innerHTML = `
            <h3></h3>
            <p>Lugha: <span>${lugha}</span></p>
        `;
        tribeList.appendChild(card);
    });
}

// 1. Weka orodha ya kwanza
renderTribes(lughaZaAsili);

// 2. Rudia orodha mara ya pili (Duplication ni muhimu ili animation isiache nafasi wazi)
renderTribes(lughaZaAsili);

/**
 * Theme Manager API
 * Handles light/dark mode persistence, toggling, and DOM state updating.
 */
const ThemeManager = (() => {
  const STORAGE_KEY = 'app_theme';
  const ATTR_NAME = 'data-theme';

  const updateIcon = (theme) => {
    const iconBtn = document.querySelector('.theme-icon');
    if (iconBtn) {
      iconBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute(ATTR_NAME, theme);
    updateIcon(theme);
  };

  const getSystemPreference = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const getTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return getSystemPreference();
  };

  const setTheme = (theme) => {
    if (theme !== 'light' && theme !== 'dark') return;
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  };

  const toggle = () => {
    const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    return newTheme;
  };

  const init = () => {
    applyTheme(getTheme());

    document.addEventListener('DOMContentLoaded', () => {
      const iconBtn = document.querySelector('.theme-icon');
      if (iconBtn) {
        iconBtn.setAttribute('role', 'button');
        iconBtn.setAttribute('tabindex', '0');
        iconBtn.setAttribute('aria-label', 'Toggle theme mode');

        updateIcon(getTheme());

        iconBtn.addEventListener('click', () => toggle());
        iconBtn.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        });
      }
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  };

  return { init, getTheme, setTheme, toggle, getSystemPreference };
})();

// Auto-initialize theme management
ThemeManager.init();