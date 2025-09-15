import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md flex justify-between items-center px-6 py-3 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/AfComLogo.png" alt="AfCom Logo" className="h-10" />
        <span className="font-bold text-lg">The African Community of Hagen e.V.</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
        <a href="#about" className="hover:text-[#009640] transition">{t("nav.about")}</a>
        <a href="#projects" className="hover:text-[#009640] transition">{t("nav.projects")}</a>
        <a href="#events" className="hover:text-[#009640] transition">{t("nav.events")}</a>
        <a href="#join" className="hover:text-[#009640] transition">{t("nav.join")}</a>
        <Button variant="accent">{t("nav.donate")}</Button>
        <div className="flex gap-2 ml-4">
          <button onClick={() => changeLanguage("de")}>DE</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("fr")}>FR</button>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-6 md:hidden z-40">
          <a href="#about" className="hover:text-[#009640] transition" onClick={() => setOpen(false)}>{t("nav.about")}</a>
          <a href="#projects" className="hover:text-[#009640] transition" onClick={() => setOpen(false)}>{t("nav.projects")}</a>
          <a href="#events" className="hover:text-[#009640] transition" onClick={() => setOpen(false)}>{t("nav.events")}</a>
          <a href="#join" className="hover:text-[#009640] transition" onClick={() => setOpen(false)}>{t("nav.join")}</a>
          <Button variant="accent" onClick={() => setOpen(false)}>{t("nav.donate")}</Button>
          <div className="flex gap-2 mt-2">
            <button onClick={() => { changeLanguage("de"); setOpen(false); }}>DE</button>
            <button onClick={() => { changeLanguage("en"); setOpen(false); }}>EN</button>
            <button onClick={() => { changeLanguage("fr"); setOpen(false); }}>FR</button>
          </div>
        </div>
      )}
    </header>
  );
}
