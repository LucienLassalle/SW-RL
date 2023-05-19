var languagePack = {
    "en": {
        "Home": "Home",
        "About": "About",
        "Skills": "Skills",
        "Portfolio": "Portfolio",
        "Project": "Project",
        "Scroll down": "Scroll down",
        "ABOUT": "ABOUT",
        "I'm RAVAGNIER Lucas": "I'm RAVAGNIER Lucas",
        "WEB DEVELOPPER & DATABASE ADMINISTRATOR": "WEB DEVELOPPER & DATABASE ADMINISTRATOR",
        "Currently a first year student of BTS at Lycée Louise Michel. Interested in cybersecurity, I make small programs of all kinds and I discover programming.": "Currently a first year student of BTS at Lycée Louise Michel. Interested in cybersecurity, I make small programs of all kinds and I discover programming.",
        "SKILLS": "SKILLS",
        "WEB DEVELOPMENT": "WEB DEVELOPMENT",
        "DATABASE ADMINISTRATOR": "DATABASE ADMINISTRATOR",
        "PROGRAMMING": "PROGRAMMING",
        "CYBERSECURITY": "CYBERSECURITY",
        "STEGANOGRAPHY": "STEGANOGRAPHY",
        "PROJECT": "PROJECT",
        "Click here to see my other project": "Click here to see my other project",
        "I'm RAVAGNIER Lucas and this is my personal website":"I'm RAVAGNIER Lucas and this is my personal website",
        "EXPLORE": "EXPLORE",
        "FOLLOW": "FOLLOW",
        "View details": "View details",
    },
    "fr": {
        "Home": "Accueil",
        "About": "À propos",
        "Skills": "Compétences",
        "Portfolio": "Portfolio",
        "Project": "Project",
        "Scroll down": "Défiler en bas",
        "ABOUT": "A PROPOS",
        "I'm RAVAGNIER Lucas": "Je suis RAVAGNIER Lucas",
        "WEB DEVELOPPER & DATABASE ADMINISTRATOR": "DÉVELOPPEUR WEB & ADMINISTRATEUR DE BASE DE DONNÉES",
        "Currently a first year student of BTS at Lycée Louise Michel. Interested in cybersecurity, I make small programs of all kinds and I discover programming.": "Actuellement en première année de BTS au Lycée Louise Michel. Intéressé par la cybersécurité, je réalise des petits programmes en tout genre et je découvre la programmation.",
        "SKILLS": "COMPÉTENCES",
        "WEB DEVELOPMENT": "DÉVELOPPEMENT WEB",
        "DATABASE ADMINISTRATOR": "ADMINISTRATEUR DE BASE DE DONNÉES",
        "PROGRAMMING": "PROGRAMMATION",
        "CYBERSECURITY": "CYBERSÉCURITÉ",
        "STEGANOGRAPHY": "STÉGANOGRAPHIE",
        "PROJECT": "PROJET",
        "Click here to see my other project": "Cliquez ici pour voir mes autres projets",
        "I'm RAVAGNIER Lucas and this is my personal website":"Je suis RAVAGNIER Lucas et ceci est mon site personnel",
        "EXPLORE": "EXPLORER",
        "FOLLOW": "SUIVRE",
        "View details": "Voir les détails",
    }
};
function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    translateText(lang);
    affichageCouleur(lang)
}

function translateText(lang) {
    var elements = document.querySelectorAll("[data-translate]");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = languagePack[lang][elements[i].dataset.translate];
    }
}
// Assurez-vous que la langue précédemment choisie est utilisée lors du chargement de la page
window.onload = function() {
    var lang = localStorage.getItem('lang') || 'en';
    translateText(lang);
    affichageCouleur(lang)
}

function affichageCouleur(lang) {
    if(lang=="fr"){
        document.getElementById('FR').style.filter = "drop-shadow(2px 4px 6px black)";
        document.getElementById("EN").style.filter = "drop-shadow(0px 0px 0px black)";
    } else {
        document.getElementById('EN').style.filter = "drop-shadow(2px 4px 6px black)";
        document.getElementById("FR").style.filter = "drop-shadow(0px 0px 0px black)";
    }
}