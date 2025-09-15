import { useTranslation } from "react-i18next";
import Button from "./button";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#0056B8] mb-6">
        {t("hero.title")}
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-8">{t("hero.subtitle")}</p>
      <div className="flex gap-4">
        <Button variant="primary">{t("hero.learnMore")}</Button>
        <Button variant="danger">{t("hero.join")}</Button>
      </div>
    </section>
  );
}
