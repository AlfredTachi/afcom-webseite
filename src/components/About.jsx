import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#0056B8] mb-4">{t("about.headline")}</h2>
          <p>{t("about.text")}</p>
        </div>
        <div>
          <img src="/about.jpg" alt="Über uns" className="rounded-2xl shadow-md" />
        </div>
      </div>
    </section>
  );
}
