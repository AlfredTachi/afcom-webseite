import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  de: {
    translation: {
      nav: {
        about: "Über uns",
        projects: "Projekte",
        events: "Veranstaltungen",
        join: "Mitmachen",
        donate: "Spenden"
      },
      hero: {
        title: "Willkommen bei AfCom Hagen e.V.",
        subtitle: "Wir fördern interkulturellen Dialog und Gemeinschaft.",
        learnMore: "Mehr erfahren",
        join: "Jetzt mitmachen"
      },
      about: {
        headline: "Über uns",
        text: "AfCom Hagen e.V. setzt sich für Vielfalt, Integration und Austausch ein."
      },
      projects: {
        headline: "Unsere Projekte",
        itemTitle: "Projekt {{number}}",
        itemText: "Kurze Beschreibung des Projekts.",
        more: "Mehr erfahren"
      },
      donate: {
        headline: "Unterstützen Sie uns",
        text: "Ihre Spende hilft uns, wichtige Projekte zu realisieren.",
        button: "Jetzt spenden"
      },
      footer: {
        about: "AfCom Hagen e.V. ist ein gemeinnütziger Verein in Hagen.",
        contact: "Kontakt"
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: "About",
        projects: "Projects",
        events: "Events",
        join: "Join",
        donate: "Donate"
      },
      hero: {
        title: "Welcome to AfCom Hagen e.V.",
        subtitle: "We promote intercultural dialogue and community.",
        learnMore: "Learn More",
        join: "Join Now"
      },
      about: {
        headline: "About Us",
        text: "AfCom Hagen e.V. is committed to diversity, integration and exchange."
      },
      projects: {
        headline: "Our Projects",
        itemTitle: "Project {{number}}",
        itemText: "Short description of the project.",
        more: "Read more"
      },
      donate: {
        headline: "Support Us",
        text: "Your donation helps us realize important projects.",
        button: "Donate Now"
      },
      footer: {
        about: "AfCom Hagen e.V. is a nonprofit association in Hagen.",
        contact: "Contact"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        about: "À propos",
        projects: "Projets",
        events: "Événements",
        join: "Adhérer",
        donate: "Faire un don"
      },
      hero: {
        title: "Bienvenue chez AfCom Hagen e.V.",
        subtitle: "Nous favorisons le dialogue interculturel et la communauté.",
        learnMore: "En savoir plus",
        join: "Rejoindre"
      },
      about: {
        headline: "À propos de nous",
        text: "AfCom Hagen e.V. s'engage pour la diversité, l'intégration et l'échange."
      },
      projects: {
        headline: "Nos projets",
        itemTitle: "Projet {{number}}",
        itemText: "Brève description du projet.",
        more: "Lire la suite"
      },
      donate: {
        headline: "Soutenez-nous",
        text: "Votre don nous aide à réaliser des projets importants.",
        button: "Faire un don"
      },
      footer: {
        about: "AfCom Hagen e.V. est une association à but non lucratif à Hagen.",
        contact: "Contact"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de", // Standardsprache
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
