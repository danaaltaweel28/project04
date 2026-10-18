
const themeToggle = document.getElementById("theme-toggle");
const languageToggle = document.getElementById("language-toggle");
const profilePhoto = document.getElementById("profile-photo");
const photoToggle = document.getElementById("photo-toggle");
const photoDescription = document.getElementById("photo-description");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const currentYear = document.getElementById("current-year");

const translations = {
    en: {
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",
        welcome: "WELCOME TO MY PORTFOLIO",
        hello: "Hello, I'm",
        role: "Computer Science | Web Development",
        intro: "I enjoy learning new technologies, solving problems, and building useful digital experiences.",
        explore: "Explore My Projects",
        aboutEyebrow: "GET TO KNOW ME",
        aboutTitle: "About Me",
        photoOne: "My First Photo",
        photoTwo: "My Second Photo",
        switchPhoto: "Switch Photo",
        aboutHeading: "Hello! I'm Dana.",
        aboutTextOne: "I am a Computer Science student interested in web development and modern technologies.",
        aboutTextTwo: "I enjoy learning by building projects and improving my programming skills step by step.",
        github: "Visit My GitHub",
        skillsEyebrow: "WHAT I AM LEARNING",
        skillsTitle: "My Skills",
        htmlDesc: "Building structured web pages.",
        cssDesc: "Styling and responsive layouts.",
        jsDesc: "Creating interactive web pages.",
        gitDesc: "Tracking changes and managing repositories.",
        problemDesc: "Breaking problems into smaller steps.",
        aiDesc: "Exploring AI concepts and applications.",
        projectsEyebrow: "A SELECTION OF MY WORK",
        projectsTitle: "My Projects",
        projectsIntro: "These projects represent different stages of my learning journey.",
        project00Title: "Getting Started",
        project00Desc: "My starting point in the project series.",
        project01Title: "HTML Foundations",
        project01Desc: "Practising HTML structure and web page creation.",
        project02Title: "Web Development",
        project02Desc: "Practising project structure and development workflow.",
        project03Title: "Programming Practice",
        project03Desc: "Practising technical problem-solving and project management.",
        viewGitHub: "View on GitHub ↗",
        viewProject: "View Project ↗",
        hobbiesEyebrow: "BEYOND CODING",
        hobbiesTitle: "My Hobbies",
        learningTitle: "Learning",
        learningDesc: "Exploring new technologies and skills.",
        creativeTitle: "Creativity",
        creativeDesc: "Exploring ideas and creative designs.",
        buildingTitle: "Building Projects",
        buildingDesc: "Turning what I learn into practical projects.",
        contactEyebrow: "LET'S CONNECT",
        contactTitle: "Contact Me",
        contactIntro: "Have a question? Fill in the form below.",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Your Email",
        emailPlaceholder: "Enter your email",
        messageLabel: "Your Message",
        messagePlaceholder: "Write your message",
        submit: "Submit Message",
        alsoFindMe: "You can also find me on",
        backToTop: "Back to Top ↑",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        formDemo: "This is a demo form. Your message has not been sent.",
        documentTitle: "DANA ALTAWEEL | Portfolio"
    },

    ar: {
        navAbout: "نبذة عني",
        navSkills: "مهاراتي",
        navProjects: "مشاريعي",
        navHobbies: "هواياتي",
        navContact: "تواصل معي",
        welcome: "أهلاً بك في معرض أعمالي",
        hello: "مرحباً، أنا",
        role: "علوم الحاسوب | تطوير الويب",
        intro: "أحب تعلم التقنيات الجديدة وحل المشكلات وبناء تجارب رقمية مفيدة.",
        explore: "استكشف مشاريعي",
        aboutEyebrow: "تعرّف عليّ",
        aboutTitle: "نبذة عني",
        photoOne: "صورتي الأولى",
        photoTwo: "صورتي الثانية",
        switchPhoto: "تبديل الصورة",
        aboutHeading: "مرحباً! أنا دانا.",
        aboutTextOne: "أنا طالبة علوم حاسوب مهتمة بتطوير الويب والتقنيات الحديثة.",
        aboutTextTwo: "أحب التعلم من خلال بناء المشاريع وتطوير مهاراتي البرمجية خطوة بخطوة.",
        github: "زيارة حسابي على GitHub",
        skillsEyebrow: "ما أتعلمه",
        skillsTitle: "مهاراتي",
        htmlDesc: "بناء صفحات ويب منظمة.",
        cssDesc: "تنسيق الصفحات والتصميم المتجاوب.",
        jsDesc: "إنشاء صفحات ويب تفاعلية.",
        gitDesc: "تتبع التغييرات وإدارة المستودعات.",
        problemDesc: "تقسيم المشكلات إلى خطوات أصغر.",
        aiDesc: "استكشاف مفاهيم الذكاء الاصطناعي وتطبيقاته.",
        projectsEyebrow: "مجموعة من أعمالي",
        projectsTitle: "مشاريعي",
        projectsIntro: "تمثل هذه المشاريع مراحل مختلفة من رحلة تعلمي.",
        project00Title: "البداية",
        project00Desc: "نقطة البداية في سلسلة المشاريع.",
        project01Title: "أساسيات HTML",
        project01Desc: "التدرب على بنية HTML وإنشاء صفحات الويب.",
        project02Title: "تطوير الويب",
        project02Desc: "التدرب على تنظيم الملفات وسير عمل التطوير.",
        project03Title: "تطبيقات برمجية",
        project03Desc: "التدرب على حل المشكلات التقنية وإدارة المشاريع.",
        viewGitHub: "عرض على GitHub ↗",
        viewProject: "عرض المشروع ↗",
        hobbiesEyebrow: "بعيداً عن البرمجة",
        hobbiesTitle: "هواياتي",
        learningTitle: "التعلم",
        learningDesc: "استكشاف التقنيات والمهارات الجديدة.",
        creativeTitle: "الإبداع",
        creativeDesc: "استكشاف الأفكار والتصاميم الإبداعية.",
        buildingTitle: "بناء المشاريع",
        buildingDesc: "تحويل ما أتعلمه إلى مشاريع عملية.",
        contactEyebrow: "لنبقَ على تواصل",
        contactTitle: "تواصل معي",
        contactIntro: "لديك سؤال؟ املأ النموذج أدناه.",
        nameLabel: "اسمك",
        namePlaceholder: "أدخل اسمك",
        emailLabel: "بريدك الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        messageLabel: "رسالتك",
        messagePlaceholder: "اكتب رسالتك",
        submit: "إرسال الرسالة",
        alsoFindMe: "يمكنك أيضاً العثور عليّ على",
        backToTop: "العودة للأعلى ↑",
        darkMode: "الوضع الداكن",
        lightMode: "الوضع الفاتح",
        formDemo: "هذا نموذج تجريبي، ولم يتم إرسال رسالتك.",
        documentTitle: "دانا الطويل | معرض الأعمال"
    }
};

const photos = [
    {
        src: "assets/profile.jpg",
        alt: "Dana's first profile photo",
        descriptionKey: "photoOne"
    },
    {
        src: "assets/profile-alt.jpg",
        alt: "Dana's second profile photo",
        descriptionKey: "photoTwo"
    }
];

let currentPhoto = 0;
let currentLanguage = "en";

function updatePhoto() {
    profilePhoto.src = photos[currentPhoto].src;
    profilePhoto.alt = photos[currentPhoto].alt;
    photoDescription.textContent =
        translations[currentLanguage][photos[currentPhoto].descriptionKey];
}

photoToggle.addEventListener("click", function () {
    currentPhoto = (currentPhoto + 1) % photos.length;

    profilePhoto.style.opacity = "0";

    profilePhoto.addEventListener("transitionend", function handleFade() {
        profilePhoto.removeEventListener("transitionend", handleFade);

        updatePhoto();
        profilePhoto.style.opacity = "1";
    });
});

themeToggle.addEventListener("click", function () {
    const isDarkTheme = document.body.classList.toggle("dark-theme");

    themeToggle.textContent = isDarkTheme
        ? translations[currentLanguage].lightMode
        : translations[currentLanguage].darkMode;

    themeToggle.setAttribute("aria-pressed", String(isDarkTheme));
});

languageToggle.addEventListener("click", function () {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.title = translations[currentLanguage].documentTitle;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[currentLanguage][key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
        const key = element.getAttribute("data-i18n-placeholder");
        element.placeholder = translations[currentLanguage][key];
    });

    languageToggle.textContent =
        currentLanguage === "en" ? "العربية" : "English";

    const isDarkTheme = document.body.classList.contains("dark-theme");

    themeToggle.textContent = isDarkTheme
        ? translations[currentLanguage].lightMode
        : translations[currentLanguage].darkMode;

    updatePhoto();
});

currentYear.textContent = new Date().getFullYear();

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formStatus.textContent = translations[currentLanguage].formDemo;
    contactForm.reset();
});
