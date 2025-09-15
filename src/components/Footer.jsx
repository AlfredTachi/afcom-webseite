import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0056B8] text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <img src="/AfComLogoFooter.png" alt="AfCom Logo" className="h-12 mb-4" />
          <p className="text-sm">{t("footer.about")}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#about">{t("nav.about")}</a></li>
            <li><a href="#projects">{t("nav.projects")}</a></li>
            <li><a href="#join">{t("nav.join")}</a></li>
            <li><a href="#donate">{t("nav.donate")}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">{t("footer.contact")}</h4>
          <p className="text-sm">Musterstraße 1, 58095 Hagen</p>
          <p className="text-sm">info@afcom-hagen.de</p>
          <p className="text-sm">+49 123 456 789</p>
        </div>
      </div>
      <div className="text-center text-xs mt-8">© 2025 AfCom Hagen e.V. – Alle Rechte vorbehalten.</div>
    </footer>
  );
}
