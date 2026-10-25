
import { useContext } from "react";
import { LangContext } from "../lib/i18n";

export default function FAQSection() {
  const { lang } = useContext(LangContext);

  const faqs = {
    en: {
      label: "GOT QUESTIONS?",
      title: "Frequently Asked Questions",
      subtitle:
        "Everything you need to know before discovering the Ourika Valley and Atlas Mountains.",
      questions: [
        {
          q: "How far is Ourika Valley from Marrakech?",
          a: "Ourika Valley is approximately 40 minutes from Marrakech by car, depending on your starting point and traffic.",
        },
        {
          q: "What experiences can I book?",
          a: "You can discover local Berber culture through guided hikes, Moroccan cooking classes, traditional rug-making, farming activities, and excursions around the Atlas Mountains.",
        },
        {
          q: "How can I book an experience?",
          a: "Choose your preferred experience and contact us through our website or WhatsApp to discuss your date, group size, and booking details.",
        },
        {
          q: "Are the experiences suitable for beginners?",
          a: "Many cultural experiences are suitable for beginners. Hiking difficulty varies by route, so please check the details of your chosen experience before booking.",
        },
        {
          q: "What should I bring for a hike?",
          a: "Wear comfortable walking shoes and weather-appropriate clothing. Bring water, sun protection, and any personal essentials you may need.",
        },
        {
          q: "Which languages are available?",
          a: "Language availability depends on the experience. English, French, and Spanish are among the languages available for selected activities.",
        },
        {
          q: "Can I book a private experience?",
          a: "Private options may be available for selected activities. Contact us to discuss your group size and preferences.",
        },
        {
          q: "What happens if the weather changes?",
          a: "Outdoor activities depend on local weather conditions. Contact us before your visit if you are concerned about the forecast or need to discuss alternatives.",
        },
      ],
      contact: "Still have questions?",
      contactText: "We would love to help you plan your visit.",
      contactButton: "Contact us",
    },
    fr: {
      label: "VOUS AVEZ DES QUESTIONS ?",
      title: "Questions fréquentes",
      subtitle:
        "Tout ce qu'il faut savoir avant de découvrir la vallée de l'Ourika et les montagnes de l'Atlas.",
      questions: [
        {
          q: "À quelle distance se trouve la vallée de l'Ourika de Marrakech ?",
          a: "La vallée de l'Ourika se trouve à environ 40 minutes de Marrakech en voiture, selon votre point de départ et la circulation.",
        },
        {
          q: "Quelles expériences puis-je réserver ?",
          a: "Découvrez la culture berbère grâce aux randonnées, aux cours de cuisine marocaine, au tissage de tapis traditionnels, aux activités agricoles et aux excursions dans l'Atlas.",
        },
        {
          q: "Comment réserver une expérience ?",
          a: "Choisissez votre expérience et contactez-nous via notre site ou WhatsApp pour discuter de la date, du nombre de participants et des détails de réservation.",
        },
        {
          q: "Les expériences conviennent-elles aux débutants ?",
          a: "De nombreuses activités culturelles conviennent aux débutants. La difficulté des randonnées varie selon l'itinéraire : consultez les détails avant de réserver.",
        },
        {
          q: "Que dois-je apporter pour une randonnée ?",
          a: "Prévoyez des chaussures confortables, des vêtements adaptés à la météo, de l'eau et une protection solaire.",
        },
        {
          q: "Quelles langues sont disponibles ?",
          a: "Les langues dépendent de l'activité. L'anglais, le français et l'espagnol sont disponibles pour certaines expériences.",
        },
        {
          q: "Puis-je réserver une expérience privée ?",
          a: "Des options privées sont proposées pour certaines activités. Contactez-nous pour discuter de la taille de votre groupe et de vos préférences.",
        },
        {
          q: "Que se passe-t-il si la météo change ?",
          a: "Les activités en plein air dépendent des conditions météorologiques. Contactez-nous avant votre visite si vous souhaitez discuter des prévisions ou d'autres possibilités.",
        },
      ],
      contact: "Vous avez encore des questions ?",
      contactText: "Nous serons ravis de vous aider à organiser votre visite.",
      contactButton: "Contactez-nous",
    },
    es: {
      label: "¿TIENES PREGUNTAS?",
      title: "Preguntas frecuentes",
      subtitle:
        "Todo lo que necesitas saber antes de descubrir el valle de Ourika y las montañas del Atlas.",
      questions: [
        {
          q: "¿A qué distancia está el valle de Ourika de Marrakech?",
          a: "El valle de Ourika está aproximadamente a 40 minutos de Marrakech en coche, dependiendo del punto de salida y del tráfico.",
        },
        {
          q: "¿Qué experiencias puedo reservar?",
          a: "Descubre la cultura bereber con rutas de senderismo, clases de cocina marroquí, elaboración tradicional de alfombras, actividades agrícolas y excursiones por el Atlas.",
        },
        {
          q: "¿Cómo puedo reservar una experiencia?",
          a: "Elige tu experiencia y contáctanos a través de la web o WhatsApp para consultar la fecha, el tamaño del grupo y los detalles de la reserva.",
        },
        {
          q: "¿Las experiencias son adecuadas para principiantes?",
          a: "Muchas actividades culturales son aptas para principiantes. La dificultad de las rutas de senderismo varía, así que consulta los detalles antes de reservar.",
        },
        {
          q: "¿Qué debo llevar para una caminata?",
          a: "Lleva calzado cómodo, ropa adecuada al tiempo, agua y protección solar.",
        },
        {
          q: "¿En qué idiomas están disponibles las experiencias?",
          a: "Los idiomas dependen de cada actividad. Algunas experiencias están disponibles en inglés, francés y español.",
        },
        {
          q: "¿Puedo reservar una experiencia privada?",
          a: "Algunas actividades ofrecen opciones privadas. Contáctanos para hablar del tamaño de tu grupo y tus preferencias.",
        },
        {
          q: "¿Qué ocurre si cambia el tiempo?",
          a: "Las actividades al aire libre dependen de las condiciones meteorológicas. Contáctanos antes de la visita si quieres consultar la previsión o valorar alternativas.",
        },
      ],
      contact: "¿Tienes más preguntas?",
      contactText: "Estaremos encantados de ayudarte a organizar tu visita.",
      contactButton: "Contáctanos",
    },
  };

  const content = faqs[lang as keyof typeof faqs] ?? faqs.en;

  return (
    <section
      id="faq"
      className="bg-[#F8F6F1] px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D9773A]">
            {content.label}
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#1A3A2F] sm:text-4xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {content.questions.map((item, index) => (
            <details
              key={item.q}
              className="group rounded-xl border border-[#1A3A2F]/10 bg-white transition-colors open:border-[#D9773A]/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-semibold text-[#1A3A2F] marker:hidden sm:p-6">
                <span>{item.q}</span>

                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1A3A2F]/5 text-xl text-[#D9773A]"
                >
                  +
                </span>
              </summary>

              <div className="px-5 pb-5 text-sm leading-7 text-gray-600 sm:px-6 sm:pb-6">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[#1A3A2F] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-xl font-bold">{content.contact}</h3>

          <p className="mt-2 text-sm text-white/75">
            {content.contactText}
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#D9773A] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#bd622d]"
          >
            {content.contactButton} →
          </a>
        </div>
      </div>
    </section>
  );
}
