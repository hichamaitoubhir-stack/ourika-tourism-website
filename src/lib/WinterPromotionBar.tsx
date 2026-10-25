
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "../lib/i18n";

export default function WinterPromotionBar() {
  const { lang } = useContext(LangContext);

  const messages = {
    en: {
      title: "Don't miss our winter promotion!",
      detail: "Enjoy 30% OFF authentic Ourika Valley & Atlas Mountains experiences.",
      button: "Explore offers",
    },
    fr: {
      title: "Ne manquez pas notre promotion d’hiver !",
      detail: "Profitez de -30 % sur nos expériences dans la vallée de l’Ourika et l’Atlas.",
      button: "Voir les offres",
    },
    es: {
      title: "¡No te pierdas nuestra promoción de invierno!",
      detail: "Ahorra un 30 % en experiencias auténticas en Ourika y el Atlas.",
      button: "Ver ofertas",
    },
  };

  const content = messages[lang as keyof typeof messages] ?? messages.en;

  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-3">
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl bg-[#1A3A2F] px-4 py-4 text-center text-white shadow-sm">
        <span className="text-sm font-bold">
          ❄️ {content.title}
        </span>

        <span className="text-sm text-white/80">
          {content.detail}
        </span>

        <Link
          to="/experiences"
          className="inline-flex min-h-9 items-center justify-center rounded-full bg-[#D9773A] px-5 py-2 text-xs font-bold text-white transition hover:bg-[#B85C24]"
        >
          {content.button} →
        </Link>
      </div>
    </div>
  );
}
