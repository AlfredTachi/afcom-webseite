import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-[#0056B8] mb-12">
        {t("projects.headline")}
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((p) => (
          <div key={p} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={`/project${p}.jpg`} alt="Projekt" className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{t("projects.itemTitle", { number: p })}</h3>
              <p className="text-sm text-gray-600">{t("projects.itemText")}</p>
              <button className="mt-4 text-[#009640] font-semibold">
                {t("projects.more")} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
