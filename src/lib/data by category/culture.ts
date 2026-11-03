import type { Experience } from '../data';

export const cultureExperiences: Experience[] = [

    {
  // BASIC INFORMATION
  id: 'cooking-class',
  slug: 'traditional-moroccan-cooking-class',

  title: {
    en: 'Traditional Moroccan Cooking Class',
    fr: 'Cours de cuisine marocaine traditionnelle',
    es: 'Clase de cocina marroquí con Youssef y su madre',
  },

  shortDesc: {
    en: 'Learn to cook tagine & couscous with a Berber mama in her mountain home',
    fr: 'Apprenez à cuisiner le tagine et le couscous chez une maman berbère',
    es: 'Aprende a cocinar tajine y cuscús con una mamá bereber',
  },

  longDesc: {
    en: 'Step into Fatima’s kitchen — stone walls, wood fire, the scent of cumin and preserved lemon. Over 3 hours, you’ll shop the tiny Ourika market, pound spices in a brass mortar, slow-cook a chicken tagine with olives, and roll couscous by hand. It ends around a low table with mint tea, stories, and far too much food.',
    fr: 'Entrez dans la cuisine de Fatima — murs en pierre, feu de bois, parfum de cumin et citron confit. 3h pour acheter au marché, piler les épices, mijoter un tajine et rouler le couscous à la main.',
    es: 'Entra en la cocina de Fatima — muros de piedra, fuego de leña, aroma a comino y limón. 3 horas para comprar en el mercado, moler especias y cocinar tajine.',
  },

  // EXPERIENCE DETAILS
  category: 'cultural',
  duration: '3.5 hours',
  price: 45,
  difficulty: 'Easy',
  groupSize: '2-8 guests',

  // IMAGES
  image: '/images/cookingClass.png',

  gallery: [
    '/images/cookingClass.png',
    '/images/spices.jpg',
    '/images/bread.jpg',
    '/images/cooking.jpg',
    '/images/ourika_valley_mountains.png',
    '/images/casa_berber.jpg',
    '/images/ourika_valley_nature.webp',
  ],

  // HIGHLIGHTS
  highlights: {
    en: [
      'Local market visit (Mondays & Thursdays)',
      'Hands-on Moroccan cooking',
      'Traditional Berber dishes',
      '20-minute village walk',
      'Meet a local family and discover Amazigh culture',
    ],

    fr: [
      'Visite du marché (lundis et jeudis)',
      'Atelier de cuisine marocaine',
      'Plats traditionnels berbères',
      'Balade de 20 minutes dans le village',
      'Rencontre avec une famille locale et découverte de la culture amazighe',
    ],

    es: [
      'Visita al mercado (lunes y jueves)',
      'Taller práctico de cocina marroquí',
      'Platos tradicionales bereberes',
      'Paseo de 20 minutos por el pueblo',
      'Conoce a una familia local y descubre la cultura amazigh',
    ],
  },

  // ITINERARY
  itinerary: [
    {
      time: '10:00',

      title: {
        en: 'Market & Garden Visit',
        fr: 'Marché et jardin',
        es: 'Mercado y huerto',
      },

      desc: {
        en: 'Pick fresh herbs and seasonal vegetables. On Mondays and Thursdays, visit the local weekly market. On other days, shop at a traditional village store.',
        fr: 'Cueillez des herbes fraîches et des légumes de saison. Les lundis et jeudis, visitez le marché hebdomadaire local. Les autres jours, faites vos achats dans une petite épicerie du village.',
        es: 'Recoge hierbas frescas y verduras de temporada. Los lunes y jueves visitaremos el mercado semanal. Los demás días, compraremos en una pequeña tienda del pueblo.',
      },
    },

    {
      time: '11:00',

      title: {
        en: 'Village Walk & Cooking Class',
        fr: 'Balade au village et atelier cuisine',
        es: 'Paseo por el pueblo y clase de cocina',
      },

      desc: {
        en: 'Enjoy a 20-minute walk through the village and discover local traditions and daily life. Then, Youssef and his mother will welcome you into their Berber home for an authentic Moroccan cooking experience.',
        fr: 'Profitez d’une balade de 20 minutes dans le village pour découvrir les traditions et la vie locale. Ensuite, Youssef et sa mère vous accueilleront dans leur maison berbère pour une authentique expérience de cuisine marocaine.',
        es: 'Disfruta de un paseo de 20 minutos por el pueblo para descubrir las tradiciones y la vida local. Después, Youssef y su madre te recibirán en su casa bereber para vivir una auténtica experiencia de cocina marroquí.',
      },
    },

    {
      time: '13:00',

      title: {
        en: 'Lunch & Mint Tea',
        fr: 'Déjeuner et thé à la menthe',
        es: 'Almuerzo y té a la menta',
      },

      desc: {
        en: 'Enjoy the traditional meal you prepared together, followed by Moroccan mint tea. Then take a relaxing walk back through the village.',
        fr: 'Savourez le repas traditionnel que vous avez préparé ensemble, suivi d’un thé à la menthe marocain. Puis, profitez d’une agréable promenade pour retourner à travers le village.',
        es: 'Disfruta de la comida tradicional que habéis preparado juntos, seguida de un té a la menta marroquí. Después, regresaremos tranquilamente paseando por el pueblo.',
      },
    },
  ],

  // WHAT'S INCLUDED
  included: {
    en: [
      'All ingredients',
      'Market tour',
      'Lunch & tea',
      'Recipe PDF',
    ],
    fr: [
      'Ingrédients',
      'Tour du marché',
      'Déjeuner & thé',
      'Recettes PDF',
    ],
    es: [
      'Ingredientes',
      'Tour del mercado',
      'Almuerzo y té',
      'Recetas PDF',
    ],
  },

  // WHAT'S NOT INCLUDED
  notIncluded: {
    en: ['Transport from Marrakech'],
    fr: ['Transport depuis Marrakech'],
    es: ['Transporte desde Marrakech'],
  },

  // RATINGS & VISIBILITY
  rating: 4.97,
  reviewsCount: 312,
  featured: true,
},

];