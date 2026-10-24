import { createContext } from 'react';

export type Lang = 'en' | 'fr' | 'es';

export const dict: Record<Lang, any> = {
  en: {
    nav: { home: 'Home', experiences: 'Experiences', half: 'Half-Day', full: 'Full-Day', about: 'About Us', gallery: 'Gallery', blog: 'Journal', contact: 'Contact' },
    hero: {
      badge: '40 min from Marrakech •Atlas Mountains ',
      title: 'Ourika Valley,\nWhere the Atlas Breathes',
      subtitle: 'Authentic Berber experiences with the families who have shaped these terraces for centuries. No staged tours — just real kitchens, real trails, real welcome.',
      ctaPrimary: 'Explore Experiences',
      ctaSecondary: 'Watch Story',
      stats: [{ k: '4.9/5', v: '2,400+ reviews' }, { k: '100%', v: 'Local families' }, { k: 'Since 2014', v: 'Community-led' }]
    },
    common: { bookNow: 'Book Now', viewAll: 'View All Experiences', from: 'from', perPerson: '/person', duration: 'Duration', group: 'Group', diff: 'Level', rating: 'Rating', included: 'Included', notIncluded: 'Not included', itinerary: 'Itinerary', highlights: 'Highlights', secure: 'Secure payment', whatsapp: 'WhatsApp us', needHelp: 'Need help choosing?', freeCancel: 'Free cancellation 24h before', instantConf: 'Instant confirmation' },
    booking: { title: 'Check Availability', date: 'Date', guests: 'Guests', name: 'Full name', email: 'Email', message: 'Message (allergies, pickup)', pay: 'Pay now & confirm', payLater: 'Reserve & pay on site', wa: 'Ask on WhatsApp first' },
    footer: { tagline: 'Community-led tourism in Ourika Valley. Every booking directly supports Berber families.', links: 'Explore', contact: 'Contact', legal: '© 2026 Ourika Authentic. Crafted in the Atlas.' },
  },
  fr: {
    nav: { home: 'Accueil', experiences: 'Expériences', half: 'Demi-journée', full: 'Journée complète', about: 'À propos', gallery: 'Galerie', blog: 'Journal', contact: 'Contact' },
    hero: {
      badge: 'À 40 min de Marrakech • Haut Atlas',
      title: 'Vallée d’Ourika,\nLà où l’Atlas Respire',
      subtitle: 'Expériences berbères authentiques avec les familles qui façonnent ces terrasses depuis des siècles. Pas de folklore — de vraies cuisines, vrais sentiers.',
      ctaPrimary: 'Voir les expériences',
      ctaSecondary: 'Voir la vidéo',
      stats: [{ k: '4.9/5', v: '2400+ avis' }, { k: '100%', v: 'Familles locales' }, { k: 'Depuis 2014', v: 'Communautaire' }]
    },
    common: { bookNow: 'Réserver', viewAll: 'Toutes les expériences', from: 'dès', perPerson: '/pers', duration: 'Durée', group: 'Groupe', diff: 'Niveau', rating: 'Note', included: 'Inclus', notIncluded: 'Non inclus', itinerary: 'Programme', highlights: 'Points forts', secure: 'Paiement sécurisé', whatsapp: 'WhatsApp nous', needHelp: 'Besoin d’aide ?', freeCancel: 'Annulation gratuite 24h avant', instantConf: 'Confirmation instantanée' },
    booking: { title: 'Vérifier dispo', date: 'Date', guests: 'Invités', name: 'Nom complet', email: 'Email', message: 'Message (allergies, ramassage)', pay: 'Payer & confirmer', payLater: 'Réserver & payer sur place', wa: 'Demander sur WhatsApp' },
    footer: { tagline: 'Tourisme communautaire en vallée d’Ourika. Chaque réservation soutient les familles berbères.', links: 'Explorer', contact: 'Contact', legal: '© 2026 Ourika Authentic. Créé dans l’Atlas.' },
  },
  es: {
    nav: { home: 'Inicio', experiences: 'Experiencias', half: 'Medio día', full: 'Día completo', about: 'Nosotros', gallery: 'Galería', blog: 'Blog', contact: 'Contacto' },
    hero: {
      badge: '40 min de Marrakech • Atlas Mountains',
      title: 'Valle de Ourika,\nDonde el Atlas Respira',
      subtitle: 'Experiencias bereberes auténticas con las familias que han dado forma a estas terrazas durante siglos. Sin montajes — cocinas reales, senderos reales.',
      ctaPrimary: 'Ver experiencias',
      ctaSecondary: 'Ver historia',
      stats: [{ k: '4.9/5', v: '2400+ reseñas' }, { k: '100%', v: 'Familias locales' }, { k: 'Desde 2014', v: 'Comunitario' }]
    },
    common: { bookNow: 'Reservar', viewAll: 'Ver todo', from: 'desde', perPerson: '/persona', duration: 'Duración', group: 'Grupo', diff: 'Nivel', rating: 'Valoración', included: 'Incluido', notIncluded: 'No incluido', itinerary: 'Itinerario', highlights: 'Destacado', secure: 'Pago seguro', whatsapp: 'WhatsApp', needHelp: '¿Necesitas ayuda?', freeCancel: 'Cancelación gratis 24h antes', instantConf: 'Confirmación instantánea' },
    booking: { title: 'Ver disponibilidad', date: 'Fecha', guests: 'Personas', name: 'Nombre completo', email: 'Email', message: 'Mensaje (alergias, recogida)', pay: 'Pagar y confirmar', payLater: 'Reservar y pagar allí', wa: 'Preguntar por WhatsApp' },
    footer: { tagline: 'Turismo comunitario en Ourika. Cada reserva apoya directo a familias bereberes.', links: 'Explorar', contact: 'Contacto', legal: '© 2026 Ourika Authentic. Hecho en el Atlas.' },
  }
};

export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: any }>({
  lang: 'en',
  setLang: () => {},
  t: dict.en,
});
