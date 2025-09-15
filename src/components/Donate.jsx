import { useTranslation } from "react-i18next";
import Button from "./Button";

export default function Donate() {
  const { t } = useTranslation();
  return (
    <section id="donate" className="py-20 px-6 md:px-16 bg-[#FFD100] text-center">
      <h2 className="text-3xl font-bold text-[#0056B8] mb-6">{t("donate.headline")}</h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg">{t("donate.text")}</p>
      <Button variant="danger">{t("donate.button")}</Button>
    </section>
  );
}
