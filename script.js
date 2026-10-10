
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

const translations = {
    sw: {
        pageTitle: "Lugha za Asili Tanzania",
        navHome: "Mwanzo",
        navLanguages: "Lugha Zetu",
        navHow: "Jinsi Inavyotumika",
        navFeatures: "Sifa",
        startUsing: "Anza kutumia",
        enableDarkMode: "Washa hali ya giza",
        enableLightMode: "Washa hali ya mwanga",
        chooseLanguage: "Chagua lugha",
        heroTitle: "Lugha za Asili za Tanzania",
        heroTagline: "Tujifunze, tuzitumie, tuzidumishe",
        heroDescription: "Lugha za asili za Tanzania",
        howItWorksButton: "Jinsi Inavyofanya Kazi",
        tribeTitle: "Lugha za Asili za Tanzania",
        tribeDescription: "Tudumishe utamaduni, tutumie na kujifunza lugha zetu za asili",
        howTitle: "Taaluma na sehemu tunapoweza kutumia lugha zetu za asili",
        teacherTitle: "Waalimu ==> Wanafunzi",
        teacherDescription: "Inasaidia katika ufundishaji na utoaji wa maarifa kwa wanafunzi.",
        nurseTitle: "Wauguzi ==> Wagonjwa",
        nurseDescription: "Inasaidia katika kueleza na kutoa matibabu kwa wagonjwa.",
        communityTitle: "Jamii ==> Jamii",
        communityDescription: "Inasaidia katika mawasiliano na utoaji wa maarifa kwa jamii.",
        businessTitle: "Biashara ==> Wateja",
        businessDescription: "Inasaidia katika mawasiliano na utoaji wa huduma kwa wateja.",
        featuresTitle: "Namna inavyofanya kazi ya kutafsiri lugha zetu za asili",
        featureSpeakTitle: "Mtumiaji anaongea",
        featureSpeakDescription: "Inasikiliza na kuelewa lugha yoyote anayozungumza.",
        featureProcessTitle: "AI inachakata na kufikiri",
        featureProcessDescription: "Inachakata maneno ili kutoa tafsiri na maana kamili.",
        featureAnswerTitle: "AI inatoa majibu",
        featureAnswerDescription: "Baada ya kutafsiri lugha ya mtumiaji, AI hutoa majibu kwa maneno ya kuzungumza au maandishi.",
        featureMeaningTitle: "Maana inatolewa",
        featureMeaningDescription: "Mtumiaji atapata maana halisi ya lugha husika.",
        footerTitle: "Lugha za Asili Tanzania",
        footerDescription: "Tanzania ina zaidi ya lugha 120 za asili zinazotoka katika familia kuu nne za lugha: Bantu, Nilotic, Cushitic, na Khoisan. Ingawa Kiswahili ni lugha ya Taifa na kiunganishi kikuu, lugha za asili kama Kisukuma, Kichagga, Kimakonde, na Kihaya zinaendelea kuhifadhi utamaduni na historia ya jamii husika.",
        languageFamilies: "Familia Kuu za Lugha",
        bantuLanguages: "Kisukuma, Kichagga, Kihaya, Kinyakyusa",
        niloticLanguages: "Kimaasai, Kijaluo",
        cushiticLanguages: "Kiiraqw, Kiburunge",
        khoisanLanguages: "Kisandawe, Kihadza",
        copyright: "© 2026 Hifadhi ya Utamaduni wa Lugha Tanzania. Haki zote zimehifadhiwa."
    },
    en: {
        pageTitle: "Tanzania's Indigenous Languages",
        navHome: "Home",
        navLanguages: "Our Languages",
        navHow: "How It Works",
        navFeatures: "Features",
        startUsing: "Get started",
        enableDarkMode: "Enable dark mode",
        enableLightMode: "Enable light mode",
        chooseLanguage: "Choose language",
        heroTitle: "Tanzania's Indigenous Languages",
        heroTagline: "Let's learn, use, and preserve them",
        heroDescription: "Tanzania's indigenous languages",
        howItWorksButton: "How It Works",
        tribeTitle: "Indigenous Languages of Tanzania",
        tribeDescription: "Let's preserve our culture, use, and learn our indigenous languages",
        howTitle: "Fields and places where we can use our indigenous languages",
        teacherTitle: "Teachers ==> Students",
        teacherDescription: "Supports teaching and sharing knowledge with students.",
        nurseTitle: "Nurses ==> Patients",
        nurseDescription: "Helps explain and provide treatment to patients.",
        communityTitle: "Community ==> Community",
        communityDescription: "Supports communication and sharing knowledge within the community.",
        businessTitle: "Businesses ==> Customers",
        businessDescription: "Supports communication and service delivery to customers.",
        featuresTitle: "How our indigenous language translation works",
        featureSpeakTitle: "The user speaks",
        featureSpeakDescription: "It listens to and understands the language being spoken.",
        featureProcessTitle: "AI processes and thinks",
        featureProcessDescription: "It processes the words to provide a complete translation and meaning.",
        featureAnswerTitle: "AI provides answers",
        featureAnswerDescription: "After translating the user's language, AI provides answers in spoken words or text.",
        featureMeaningTitle: "The meaning is delivered",
        featureMeaningDescription: "The user receives the true meaning of the language.",
        footerTitle: "Tanzania's Indigenous Languages",
        footerDescription: "Tanzania has more than 120 indigenous languages from four major language families: Bantu, Nilotic, Cushitic, and Khoisan. Although Swahili is the national language and a key lingua franca, indigenous languages such as Sukuma, Chagga, Makonde, and Haya continue to preserve the culture and history of their communities.",
        languageFamilies: "Major Language Families",
        bantuLanguages: "Sukuma, Chagga, Haya, Nyakyusa",
        niloticLanguages: "Maasai, Luo",
        cushiticLanguages: "Iraqw, Burunge",
        khoisanLanguages: "Sandawe, Hadza",
        copyright: "© 2026 Tanzania Language Heritage. All rights reserved."
    }
};

const languageSelect = document.getElementById("language-selection");
const themeToggle = document.querySelector(".theme-toggle");
const heroTitle = document.querySelector(".headings h1");
const heroTagline = document.querySelector(".headings p span");
const heroDescription = document.querySelector(".headings p strong");
const heroHeadings = document.querySelector(".headings");

const heroSlides = {
    sw: [
        ["Lugha za Asili za Tanzania", "Tujifunze, tuzitumie, tuzidumishe", "Lugha za asili za Tanzania"],
        ["Urithi wa Lugha Zetu", "Tunahifadhi utamaduni wetu", "Kwa kujifunza lugha za asili"],
        ["Lugha Huunganisha Jamii", "Tusikilize, tuelewane, tushirikiane", "Kwa kutumia lugha zetu"]
    ],
    en: [
        ["Tanzania's Indigenous Languages", "Let's learn, use, and preserve them", "Tanzania's indigenous languages"],
        ["Our Linguistic Heritage", "We preserve our culture", "By learning indigenous languages"],
        ["Languages Bring Communities Together", "Let's listen, understand, and connect", "By using our languages"]
    ]
};
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