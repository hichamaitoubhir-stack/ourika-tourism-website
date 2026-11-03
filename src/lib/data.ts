import { cultureExperiences } from './data by category/culture';

export type Experience = {
  id: string;
  slug: string;
  title: { en: string; fr: string; es: string };
  shortDesc: { en: string; fr: string; es: string };
  longDesc: { en: string; fr: string; es: string };
  category: 'half-day' | 'full-day' | 'cultural' | 'nature'| 'Sahara-Desert';
  duration: string;
  price: number;
  originalPrice?: number;
  difficulty: 'Easy' | 'Moderate' | 'Active';
  groupSize: string;
  image: string;
  gallery: string[];
  highlights: { en: string[]; fr: string[]; es: string[] };
  itinerary: { time: string; title: { en: string; fr: string; es: string }; desc: { en: string; fr: string; es: string } }[];
  included: { en: string[]; fr: string[]; es: string[] };
  notIncluded: { en: string[]; fr: string[]; es: string[] };
  rating: number;
  reviewsCount: number;
  featured?: boolean;
};

export const experiences: Experience[] = [
  
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

 
{
  // BASIC INFORMATION
  id: 'berber-village',
  slug: 'berber-village-visit',

  title: {
    en: 'Authentic Berber Village Immersion',
    fr: 'Immersion dans un village berbère authentique',
    es: 'Inmersión en un auténtico pueblo bereber',
  },

  shortDesc: {
    en: 'Discover traditional Berber life, visit a local family home and explore the culture of the Atlas Mountains',
    fr: 'Découvrez la vie berbère, visitez une maison familiale et explorez la culture du Haut Atlas',
    es: 'Descubre la vida bereber, visita una casa familiar y explora la cultura del Alto Atlas',
  },

  longDesc: {
    en: 'Discover the authentic lifestyle of Berber communities in Ourika Valley. Walk through traditional mountain villages, explore ancient irrigation channels and visit Brahim’s family home in Tnine Ourika. Learn how local families prepare traditional bread, work with wool and preserve their ancestral customs. Share Moroccan mint tea, homemade bread and stories while discovering the traditions and hospitality of the Amazigh people.',
    fr: 'Découvrez le mode de vie authentique des communautés berbères dans la vallée de l’Ourika. Parcourez les villages traditionnels, découvrez les anciens canaux d’irrigation et visitez la maison de la famille de Brahim à Tnine Ourika. Apprenez les traditions du pain traditionnel, du travail de la laine et partagez un thé à la menthe dans une ambiance chaleureuse.',
    es: 'Descubre el estilo de vida auténtico de las comunidades bereberes en el valle de Ourika. Camina por pueblos tradicionales, descubre antiguos canales de riego y visita la casa de la familia de Brahim en Tnine Ourika. Aprende sobre la preparación del pan tradicional, el trabajo de la lana y comparte té marroquí mientras conoces las tradiciones amazigh.',
  },

  // EXPERIENCE DETAILS
  category: 'cultural',
  duration: '4 hours',
  price: 38,
  difficulty: 'Easy',
  groupSize: '2-10 guests',

  // IMAGES
  image: '/images/asguine_pueblo_atlas_mountains.png',

  gallery: [
    '/images/asguine_pueblo_atlas_mountains.png',
    '/images/berber-village.jpg',
    '/images/village2.jpg',
    '/images/ourika-river.jpg',
    '/images/tizi_noucheg_berber_village.jpg',
    '/images/yagour.jpg',
    '/images/asguine_village.jpg',
  ],

  // HIGHLIGHTS
  highlights: {
    en: [
      'Walk through traditional Berber villages in Ourika Valley',
      'Visit a local family home and experience Amazigh hospitality',
      'Discover traditional bread making in a clay oven',
      'Learn about wool preparation and Berber weaving',
      'Explore local traditions, agriculture and mountain life',
    ],

    fr: [
      'Promenade dans les villages berbères de la vallée de l’Ourika',
      'Visite d’une maison familiale et découverte de l’hospitalité amazighe',
      'Découverte de la préparation du pain dans un four en terre',
      'Initiation à la préparation de la laine et au tissage berbère',
      'Découverte des traditions, de l’agriculture et de la vie en montagne',
    ],

    es: [
      'Paseo por los pueblos bereberes del valle de Ourika',
      'Visita a una casa familiar y descubre la hospitalidad amazigh',
      'Descubre cómo se prepara el pan en un horno tradicional de barro',
      'Conoce la preparación de lana y el tejido bereber',
      'Explora las tradiciones, la agricultura y la vida en las montañas',
    ],
  },

  // ITINERARY
  itinerary: [
    {
      time: '09:00',

      title: {
        en: 'Village Walk & Local Traditions',
        fr: 'Balade au village et traditions locales',
        es: 'Paseo por el pueblo y tradiciones locales',
      },

      desc: {
        en: 'Explore traditional Berber villages, narrow paths and earthen houses. Discover terraced gardens, olive groves and ancient irrigation channels while learning about agriculture and everyday life in the Atlas Mountains.',
        fr: 'Explorez les villages berbères, les petits sentiers et les maisons en terre. Découvrez les jardins en terrasses, les oliveraies et les anciens canaux d’irrigation tout en découvrant la vie quotidienne dans le Haut Atlas.',
        es: 'Explora pueblos bereberes, pequeños senderos y casas tradicionales de tierra. Descubre jardines en terrazas, olivares y antiguos canales de riego mientras conoces la vida cotidiana en el Alto Atlas.',
      },
    },

    {
      time: '10:00',

      title: {
        en: 'Visit a Traditional Berber Family Home',
        fr: 'Visite d’une maison familiale berbère',
        es: 'Visita a una casa familiar bereber',
      },

      desc: {
        en: 'Meet Brahim’s family in Tnine Ourika and discover traditional Amazigh architecture, family customs and mountain hospitality. Learn about the history of communal granaries and how village communities have supported one another for generations.',
        fr: 'Rencontrez la famille de Brahim à Tnine Ourika et découvrez l’architecture amazighe, les traditions familiales et l’hospitalité montagnarde. Apprenez l’histoire des greniers collectifs et de la solidarité villageoise.',
        es: 'Conoce a la familia de Brahim en Tnine Ourika y descubre la arquitectura amazigh, las tradiciones familiares y la hospitalidad de montaña. Aprende sobre los antiguos graneros comunitarios y la solidaridad entre los habitantes.',
      },
    },

    {
      time: '11:00',

      title: {
        en: 'Traditional Bread & Berber Crafts',
        fr: 'Pain traditionnel et artisanat berbère',
        es: 'Pan tradicional y artesanía bereber',
      },

      desc: {
        en: 'Discover how local families prepare homemade bread in traditional clay ovens. Learn about wool preparation, carding and Berber rug weaving, and discover how these traditional skills are passed from one generation to another.',
        fr: 'Découvrez comment les familles préparent le pain maison dans les fours traditionnels en terre. Initiez-vous à la préparation de la laine et au tissage des tapis berbères, transmis de génération en génération.',
        es: 'Descubre cómo las familias preparan pan casero en hornos tradicionales de barro. Conoce la preparación de la lana y el tejido de alfombras bereberes, transmitidos de generación en generación.',
      },
    },

    {
      time: '12:00',

      title: {
        en: 'Moroccan Tea & Cultural Exchange',
        fr: 'Thé marocain et partage culturel',
        es: 'Té marroquí e intercambio cultural',
      },

      desc: {
        en: 'Enjoy Moroccan mint tea and freshly baked homemade bread with your hosts. Exchange stories, ask questions about Berber culture and discover the traditions, food and daily life of local mountain communities.',
        fr: 'Partagez un thé à la menthe et du pain fait maison avec vos hôtes. Échangez des histoires et découvrez la culture berbère, la cuisine et le quotidien des communautés montagnardes.',
        es: 'Disfruta de té marroquí y pan casero recién hecho con tus anfitriones. Comparte historias y descubre la cultura bereber, la gastronomía y la vida cotidiana de las comunidades de montaña.',
      },
    },
  ],

  // WHAT'S INCLUDED
  included: {
    en: [
      'Local Berber guide',
      'Traditional family home visit',
      'Moroccan tea & homemade bread',
      'Traditional crafts demonstration',
    ],
    fr: [
      'Guide berbère local',
      'Visite d’une maison familiale',
      'Thé marocain et pain fait maison',
      'Démonstration d’artisanat traditionnel',
    ],
    es: [
      'Guía bereber local',
      'Visita a una casa familiar',
      'Té marroquí y pan casero',
      'Demostración de artesanía tradicional',
    ],
  },

  // WHAT'S NOT INCLUDED
  notIncluded: {
    en: ['Transport from Marrakech', 'Lunch'],
    fr: ['Transport depuis Marrakech', 'Déjeuner'],
    es: ['Transporte desde Marrakech', 'Almuerzo'],
  },

  // RATINGS & VISIBILITY
  rating: 4.95,
  reviewsCount: 208,
  featured: true,
},

 
{
  // BASIC INFORMATION
  id: 'hiking',
  slug: 'atlas-mountains-guided-hiking',

  title: {
    en: 'Guided Hiking in the Atlas Mountains',
    fr: 'Randonnée Guidée dans les Montagnes de l’Atlas',
    es: 'Senderismo Guiado en las Montañas del Atlas',
  },

  shortDesc: {
    en: 'Explore mountain trails, Berber villages and spectacular landscapes with a local Atlas Mountains guide',
    fr: 'Explorez les sentiers de montagne, les villages berbères et les paysages spectaculaires avec un guide local',
    es: 'Explora senderos de montaña, pueblos bereberes y paisajes espectaculares con un guía local',
  },

  longDesc: {
    en: 'Discover the beauty of the High Atlas Mountains on a guided hiking adventure through the Ourika Valley. Accompanied by an experienced local mountain guide, explore traditional Berber villages, walnut groves, mountain streams and scenic trails surrounded by spectacular peaks. Choose a gentle walk through the valley or a more challenging hike towards panoramic mountain viewpoints, depending on your fitness level and interests. Along the way, discover local traditions, mountain wildlife and the natural landscapes that make the Atlas Mountains one of Morocco’s most beautiful hiking destinations. Enjoy a relaxing tea break and breathtaking views before returning through the mountain trails.',

    fr: 'Découvrez la beauté du Haut Atlas lors d’une randonnée guidée dans la vallée de l’Ourika. Accompagné d’un guide local expérimenté, explorez les villages berbères, les noyers, les ruisseaux et les sentiers de montagne entourés de sommets spectaculaires. Choisissez une promenade tranquille dans la vallée ou une randonnée plus sportive vers de magnifiques panoramas, selon votre niveau. Découvrez les traditions locales et les paysages naturels du Haut Atlas.',

    es: 'Descubre la belleza del Alto Atlas con una excursión guiada por el valle de Ourika. Acompañado por un guía local experimentado, explora pueblos bereberes, bosques de nogales, arroyos y senderos rodeados de impresionantes montañas. Elige un paseo tranquilo por el valle o una ruta más exigente hacia miradores panorámicos, según tu condición física. Descubre las tradiciones locales y los paisajes naturales que hacen del Atlas uno de los mejores destinos de senderismo de Marruecos.',
  },

  // EXPERIENCE DETAILS
  category: 'nature',
  duration: '5-6 hours',
  price: 58,
  difficulty: 'Moderate',
  groupSize: '2-12 guests',

  // IMAGES
  image: '/images/yagour.jpg',

  gallery: [
    '/images/yagour.jpg',
    '/images/hiking.jpg',
    '/images/hero-atlas.jpg',
    '/images/ourika-river.jpg',
  ],

  // HIGHLIGHTS
  highlights: {
    en: [
      'Guided hiking through the beautiful High Atlas Mountains',
      'Discover traditional Berber villages and mountain landscapes',
      'Explore walnut groves, rivers and scenic mountain trails',
      'Choose hiking routes adapted to your fitness level',
      'Enjoy panoramic viewpoints and a traditional mountain tea break',
    ],

    fr: [
      'Randonnée guidée dans les magnifiques montagnes du Haut Atlas',
      'Découverte des villages berbères et des paysages montagnards',
      'Exploration des noyers, des rivières et des sentiers panoramiques',
      'Itinéraires adaptés à votre condition physique',
      'Panoramas exceptionnels et pause thé traditionnelle en montagne',
    ],

    es: [
      'Senderismo guiado por las montañas del Alto Atlas',
      'Descubre pueblos bereberes y paisajes de montaña',
      'Explora bosques de nogales, ríos y senderos panorámicos',
      'Rutas adaptadas a tu condición física',
      'Disfruta de vistas espectaculares y una pausa de té tradicional',
    ],
  },

  // ITINERARY
  itinerary: [
    {
      time: '08:30',

      title: {
        en: 'Meeting Point & Hiking Introduction',
        fr: 'Point de rencontre et introduction à la randonnée',
        es: 'Punto de encuentro e introducción al senderismo',
      },

      desc: {
        en: 'Meet your local mountain guide and begin with a short introduction to the route, safety instructions and the surrounding Atlas Mountains. Choose a hiking trail according to your experience and fitness level before starting the adventure.',
        fr: 'Rencontrez votre guide de montagne et découvrez l’itinéraire, les consignes de sécurité et les paysages environnants. Choisissez un sentier adapté à votre expérience et à votre condition physique.',
        es: 'Conoce a tu guía de montaña y descubre la ruta, las instrucciones de seguridad y los paisajes del Atlas. Elige un sendero adaptado a tu experiencia y condición física.',
      },
    },

    {
      time: '09:00',

      title: {
        en: 'Mountain Trails & Berber Villages',
        fr: 'Sentiers de montagne et villages berbères',
        es: 'Senderos de montaña y pueblos bereberes',
      },

      desc: {
        en: 'Walk through traditional mountain paths, walnut groves and small Berber villages. Discover local architecture, agricultural terraces and everyday life in the Atlas Mountains while enjoying beautiful views of the surrounding valley.',
        fr: 'Parcourez les sentiers traditionnels, les noyers et les petits villages berbères. Découvrez l’architecture locale, les terrasses agricoles et la vie quotidienne dans les montagnes de l’Atlas.',
        es: 'Camina por senderos tradicionales, bosques de nogales y pequeños pueblos bereberes. Descubre la arquitectura local, los campos en terrazas y la vida cotidiana en las montañas del Atlas.',
      },
    },

    {
      time: '11:00',

      title: {
        en: 'Mountain Viewpoints & Tea Break',
        fr: 'Points de vue panoramiques et pause thé',
        es: 'Miradores de montaña y pausa para el té',
      },

      desc: {
        en: 'Reach beautiful mountain viewpoints overlooking the Ourika Valley and surrounding peaks. Take a relaxing break, enjoy Moroccan mint tea and discover the local flora, mountain wildlife and traditions with your guide.',
        fr: 'Rejoignez de magnifiques points de vue sur la vallée de l’Ourika et les sommets environnants. Profitez d’une pause avec un thé à la menthe et découvrez la flore, la faune et les traditions locales.',
        es: 'Llega a hermosos miradores con vistas al valle de Ourika y las montañas cercanas. Disfruta de una pausa con té marroquí y descubre la flora, la fauna y las tradiciones locales.',
      },
    },

    {
      time: '13:30',

      title: {
        en: 'Mountain Descent & Local Lunch',
        fr: 'Descente de la montagne et déjeuner local',
        es: 'Descenso de montaña y almuerzo local',
      },

      desc: {
        en: 'Follow the mountain trails back towards the valley, enjoying the final landscapes and village views. Finish your hiking experience with an optional traditional Moroccan lunch at a local riverside restaurant.',
        fr: 'Reprenez les sentiers en direction de la vallée en profitant des derniers panoramas. Terminez votre randonnée par un déjeuner marocain traditionnel en option dans un restaurant au bord de la rivière.',
        es: 'Regresa por los senderos hacia el valle disfrutando de los últimos paisajes. Termina la experiencia con un almuerzo marroquí tradicional opcional en un restaurante junto al río.',
      },
    },
  ],

  // WHAT'S INCLUDED
  included: {
    en: [
      'Experienced local mountain guide',
      'Hiking poles',
      'Traditional tea break',
      'Basic safety equipment',
    ],

    fr: [
      'Guide de montagne local expérimenté',
      'Bâtons de randonnée',
      'Pause thé traditionnelle',
      'Équipement de sécurité de base',
    ],

    es: [
      'Guía de montaña local experimentado',
      'Bastones de senderismo',
      'Pausa de té tradicional',
      'Equipo básico de seguridad',
    ],
  },

  // WHAT'S NOT INCLUDED
  notIncluded: {
    en: ['Transport', 'Lunch', 'Personal expenses and gratuities'],
    fr: ['Transport', 'Déjeuner', 'Dépenses personnelles et pourboires'],
    es: ['Transporte', 'Almuerzo', 'Gastos personales y propinas'],
  },

  // RATINGS & VISIBILITY
  rating: 4.96,
  reviewsCount: 267,
  featured: true,
},
 
{
  // BASIC INFORMATION
  id: 'farming',
  slug: 'farming-experience-local-family',

  title: {
    en: 'Authentic Berber Farming Experience in Ourika Valley',
    fr: 'Expérience Agricole Authentique avec une Famille Berbère',
    es: 'Experiencia Agrícola Bereber en el Valle de Ourika',
  },

  shortDesc: {
    en: 'Discover traditional farming, work the land and experience rural Berber life in the Atlas Mountains',
    fr: 'Découvrez l’agriculture traditionnelle et la vie rurale berbère dans les montagnes de l’Atlas',
    es: 'Descubre la agricultura tradicional y la vida rural bereber en las montañas del Atlas',
  },

  longDesc: {
    en: 'Spend a day with a local farming family in the beautiful Ourika Valley, surrounded by the High Atlas Mountains. Discover traditional agriculture, walk through terraced fields and learn how local farmers grow vegetables, olives and seasonal crops using generations-old techniques. Depending on the season, you’ll plant, harvest, irrigate the land, feed farm animals and explore the family orchard. Enjoy a traditional countryside breakfast while discovering the connection between Berber communities, their land and mountain life. A hands-on rural experience that brings you closer to authentic Moroccan village life.',

    fr: 'Passez une journée avec une famille d’agriculteurs dans la magnifique vallée de l’Ourika, entourée des montagnes du Haut Atlas. Découvrez l’agriculture traditionnelle, parcourez les champs en terrasses et apprenez comment les agriculteurs cultivent les légumes, les olives et les cultures saisonnières. Selon la saison, participez aux plantations, aux récoltes, à l’irrigation et aux soins des animaux. Profitez d’un petit-déjeuner traditionnel à la campagne et découvrez la vie rurale berbère.',

    es: 'Pasa un día con una familia de agricultores en el hermoso valle de Ourika, rodeado por las montañas del Alto Atlas. Descubre la agricultura tradicional, camina por campos en terrazas y aprende cómo los agricultores cultivan verduras, aceitunas y productos de temporada utilizando técnicas transmitidas durante generaciones. Según la estación, participarás en la siembra, la cosecha, el riego y el cuidado de los animales. Disfruta de un desayuno tradicional en el campo y descubre la auténtica vida rural bereber.',
  },

  // EXPERIENCE DETAILS
  category: 'full-day',
  duration: '8 hours',
  price: 120,
  difficulty: 'Active',
  groupSize: '2-6 guests',

  // IMAGES
  image: '/images/ourikavalley.jpg',

  gallery: [
    '/images/ourikavalley.jpg',
    '/images/ourika-river.jpg',
    '/images/village2.jpg',
  ],

  // HIGHLIGHTS
  highlights: {
    en: [
      'Hands-on traditional farming with a local Berber family',
      'Explore terraced fields and ancient irrigation techniques',
      'Seasonal planting, harvesting and vegetable gardening',
      'Meet farm animals and discover traditional mountain agriculture',
      'Enjoy a countryside breakfast with fresh local products',
    ],

    fr: [
      'Découverte de l’agriculture traditionnelle avec une famille berbère',
      'Exploration des champs en terrasses et des anciens systèmes d’irrigation',
      'Plantation, récolte et jardinage selon les saisons',
      'Rencontre avec les animaux de la ferme et découverte de l’agriculture montagnarde',
      'Petit-déjeuner à la campagne avec des produits locaux',
    ],

    es: [
      'Agricultura tradicional con una familia bereber local',
      'Descubre los campos en terrazas y los antiguos sistemas de riego',
      'Siembra, cosecha y cultivo de verduras según la temporada',
      'Conoce los animales de la granja y la agricultura de montaña',
      'Disfruta de un desayuno rural con productos locales',
    ],
  },

  // ITINERARY
  itinerary: [
    {
      time: '08:00',

      title: {
        en: 'Farm Walk & Introduction to Mountain Agriculture',
        fr: 'Promenade à la ferme et découverte de l’agriculture',
        es: 'Paseo por la granja e introducción a la agricultura',
      },

      desc: {
        en: 'Meet your local farming family and explore their agricultural land. Discover traditional terraced fields, olive trees, vegetable gardens and ancient irrigation channels used to distribute mountain water.',
        fr: 'Rencontrez votre famille d’agriculteurs et explorez ses terres. Découvrez les champs en terrasses, les oliviers, les potagers et les anciens canaux d’irrigation.',
        es: 'Conoce a la familia de agricultores y explora sus tierras. Descubre los campos en terrazas, los olivos, los huertos y los antiguos canales de riego.',
      },
    },

    {
      time: '08:45',

      title: {
        en: 'Hands-on Traditional Farming',
        fr: 'Initiation aux travaux agricoles traditionnels',
        es: 'Participa en la agricultura tradicional',
      },

      desc: {
        en: 'Take part in real seasonal farm activities. Depending on the time of year, help plant vegetables, harvest olives, work the soil, irrigate fields using traditional methods or collect fresh produce from the garden.',
        fr: 'Participez aux activités agricoles selon la saison. Aidez à planter des légumes, récolter les olives, travailler la terre, irriguer les champs ou cueillir des produits frais du jardin.',
        es: 'Participa en las actividades agrícolas de temporada. Ayuda a plantar verduras, recoger aceitunas, trabajar la tierra, regar los campos o cosechar productos frescos del huerto.',
      },
    },

    {
      time: '10:30',

      title: {
        en: 'Traditional Farm Breakfast',
        fr: 'Petit-déjeuner traditionnel à la ferme',
        es: 'Desayuno tradicional en la granja',
      },

      desc: {
        en: 'Relax with a traditional countryside breakfast overlooking the valley. Enjoy homemade bread, olives, local olive oil, seasonal products and Moroccan mint tea while listening to stories about farming and family traditions.',
        fr: 'Profitez d’un petit-déjeuner traditionnel avec vue sur la vallée. Dégustez du pain maison, des olives, de l’huile d’olive locale et du thé à la menthe tout en découvrant les traditions agricoles.',
        es: 'Disfruta de un desayuno tradicional con vistas al valle. Prueba pan casero, aceitunas, aceite de oliva local y té marroquí mientras descubres las tradiciones agrícolas de la familia.',
      },
    },

    {
      time: '11:30',

      title: {
        en: 'Farm Animals & Rural Family Life',
        fr: 'Animaux de la ferme et vie rurale',
        es: 'Animales de granja y vida rural',
      },

      desc: {
        en: 'Meet the farm animals, discover how families care for their donkeys, chickens and other livestock, and learn about the important role animals play in traditional farming and everyday life in the Atlas Mountains.',
        fr: 'Rencontrez les animaux de la ferme et découvrez comment les familles s’occupent de leurs ânes, poules et autres animaux. Apprenez leur importance dans l’agriculture traditionnelle.',
        es: 'Conoce los animales de la granja y descubre cómo las familias cuidan de sus burros, gallinas y otros animales. Aprende su importancia en la agricultura tradicional.',
      },
    },

    {
      time: '13:00',

      title: {
        en: 'Harvest & Local Farm Experience',
        fr: 'Récolte et découverte de la vie agricole',
        es: 'Cosecha y experiencia agrícola local',
      },

      desc: {
        en: 'Continue exploring the family farm, discover seasonal crops and traditional food production, and take part in additional activities depending on the season. Enjoy the peaceful mountain surroundings before saying goodbye to your hosts.',
        fr: 'Continuez à explorer la ferme familiale, découvrez les cultures saisonnières et les méthodes de production traditionnelles. Participez à d’autres activités selon la saison avant de terminer cette expérience.',
        es: 'Continúa explorando la granja familiar, descubre los cultivos de temporada y los métodos tradicionales de producción. Participa en otras actividades según la estación antes de despedirte de tus anfitriones.',
      },
    },
  ],

  // WHAT'S INCLUDED
  included: {
    en: [
      'Local farming family guide',
      'Traditional farming activities',
      'Farm tools and equipment',
      'Traditional countryside breakfast',
    ],

    fr: [
      'Accompagnement par une famille d’agriculteurs',
      'Activités agricoles traditionnelles',
      'Outils et matériel agricole',
      'Petit-déjeuner traditionnel à la campagne',
    ],

    es: [
      'Acompañamiento de una familia de agricultores',
      'Actividades agrícolas tradicionales',
      'Herramientas y material agrícola',
      'Desayuno tradicional en el campo',
    ],
  },

  // WHAT'S NOT INCLUDED
  notIncluded: {
    en: ['Transport from Marrakech', 'Lunch'],
    fr: ['Transport depuis Marrakech', 'Déjeuner'],
    es: ['Transporte desde Marrakech', 'Almuerzo'],
  },

  // RATINGS & VISIBILITY
  rating: 4.92,
  reviewsCount: 94,
  featured: true,
},

{
  // BASIC INFORMATION
  id: 'waterfalls',
  slug: 'setti-fatma-waterfalls-excursion',

  title: {
    en: 'Setti Fatma Waterfalls & Ourika Valley Hike',
    fr: 'Randonnée aux Cascades de Setti Fatma et dans la Vallée de l’Ourika',
    es: 'Senderismo a las Cascadas de Setti Fatma en el Valle de Ourika',
  },

  shortDesc: {
    en: 'Discover the famous seven waterfalls, cross mountain streams and explore the beautiful landscapes of the Atlas Mountains',
    fr: 'Découvrez les sept cascades, traversez les ruisseaux de montagne et explorez les paysages du Haut Atlas',
    es: 'Descubre las siete cascadas, cruza arroyos de montaña y explora los paisajes del Alto Atlas',
  },

  longDesc: {
    en: 'Discover one of the most beautiful natural attractions in Ourika Valley with a guided hike to the famous seven waterfalls of Setti Fatma. Follow mountain trails, cross flowing streams and climb rocky paths surrounded by traditional Berber villages and spectacular Atlas Mountain scenery. Accompanied by a local mountain guide, discover hidden viewpoints, small waterfalls and the natural beauty of the valley. Take a break at a traditional mountain café overlooking the river, enjoy Moroccan mint tea and experience the welcoming atmosphere of this popular mountain village. A perfect adventure for nature lovers and travellers looking to explore the Atlas Mountains near Marrakech.',

    fr: 'Découvrez l’un des plus beaux sites naturels de la vallée de l’Ourika avec une randonnée guidée vers les célèbres sept cascades de Setti Fatma. Suivez les sentiers de montagne, traversez les ruisseaux et empruntez des chemins rocheux entourés de villages berbères et de magnifiques paysages du Haut Atlas. Accompagné d’un guide local, découvrez les cascades et les points de vue de la vallée. Profitez d’une pause dans un café traditionnel avec un thé à la menthe face à la rivière.',

    es: 'Descubre uno de los lugares naturales más bonitos del valle de Ourika con una caminata guiada hasta las famosas siete cascadas de Setti Fatma. Sigue senderos de montaña, cruza pequeños arroyos y sube por caminos rocosos rodeados de pueblos bereberes y espectaculares paisajes del Atlas. Acompañado por un guía local, descubre cascadas y miradores naturales. Disfruta de una pausa en un café tradicional junto al río con un té marroquí.',
  },

  // EXPERIENCE DETAILS
  category: 'nature',
  duration: '3 hours',
  price: 35,
  difficulty: 'Moderate',
  groupSize: '2-15 guests',

  // IMAGES
  image: '/images/waterfall.jpg',

  gallery: [
    '/images/waterfall.jpg',
    '/images/ourika-river.jpg',
    '/images/hero-atlas.jpg',
  ],

  // HIGHLIGHTS
  highlights: {
    en: [
      'Guided hike to the famous seven waterfalls of Setti Fatma',
      'Explore rocky mountain trails and natural river crossings',
      'Discover beautiful waterfalls and hidden valley viewpoints',
      'Experience traditional Berber village life and mountain scenery',
      'Enjoy Moroccan mint tea at a riverside mountain café',
    ],

    fr: [
      'Randonnée guidée vers les célèbres sept cascades de Setti Fatma',
      'Exploration des sentiers rocheux et traversées de rivière',
      'Découverte des cascades et des magnifiques panoramas',
      'Découverte des villages berbères et des paysages montagnards',
      'Thé à la menthe dans un café traditionnel au bord de la rivière',
    ],

    es: [
      'Excursión guiada a las famosas siete cascadas de Setti Fatma',
      'Explora senderos rocosos y cruza pequeños ríos de montaña',
      'Descubre cascadas y miradores naturales del valle',
      'Conoce los pueblos bereberes y los paisajes del Atlas',
      'Disfruta de té marroquí en un café tradicional junto al río',
    ],
  },

  // ITINERARY
  itinerary: [
    {
      time: '10:00',

      title: {
        en: 'Setti Fatma Village & River Walk',
        fr: 'Village de Setti Fatma et promenade au bord de la rivière',
        es: 'Pueblo de Setti Fatma y paseo junto al río',
      },

      desc: {
        en: 'Explore the lively mountain village of Setti Fatma, discover its traditional atmosphere and walk along the Ourika River. Meet your local guide and prepare for the waterfall hike through the surrounding mountains.',
        fr: 'Découvrez le village animé de Setti Fatma, son ambiance traditionnelle et les paysages de la rivière Ourika. Rencontrez votre guide local avant de commencer la randonnée vers les cascades.',
        es: 'Descubre el animado pueblo de Setti Fatma, su ambiente tradicional y los paisajes del río Ourika. Conoce a tu guía local antes de comenzar la caminata hacia las cascadas.',
      },
    },

    {
      time: '10:45',

      title: {
        en: 'Hiking to the Seven Waterfalls',
        fr: 'Randonnée vers les sept cascades',
        es: 'Senderismo hacia las siete cascadas',
      },

      desc: {
        en: 'Follow mountain paths, climb rocky sections and cross small streams as you discover the beautiful waterfalls of Setti Fatma. Enjoy spectacular views, natural pools and photo opportunities along the way.',
        fr: 'Suivez les sentiers de montagne, traversez les passages rocheux et les petits ruisseaux pour découvrir les magnifiques cascades de Setti Fatma. Profitez des panoramas et des pauses photo.',
        es: 'Sigue senderos de montaña, sube por zonas rocosas y cruza pequeños arroyos para descubrir las hermosas cascadas de Setti Fatma. Disfruta de los paisajes y las oportunidades para hacer fotos.',
      },
    },

    {
      time: '12:30',

      title: {
        en: 'Mountain Tea & Return to the Village',
        fr: 'Thé en montagne et retour au village',
        es: 'Té en la montaña y regreso al pueblo',
      },

      desc: {
        en: 'Relax at a traditional mountain café overlooking the river and enjoy Moroccan mint tea. Descend towards Setti Fatma at a comfortable pace, with the option to enjoy a traditional Moroccan lunch at a local riverside restaurant.',
        fr: 'Détendez-vous dans un café traditionnel avec vue sur la rivière et dégustez un thé à la menthe. Redescendez tranquillement vers Setti Fatma avec la possibilité de déjeuner dans un restaurant local au bord de l’eau.',
        es: 'Relájate en un café tradicional con vistas al río y disfruta de un té marroquí. Regresa tranquilamente a Setti Fatma con la opción de almorzar en un restaurante local junto al río.',
      },
    },
  ],

  // WHAT'S INCLUDED
  included: {
    en: [
      'Experienced local waterfall guide',
      'Guided hiking experience',
      'Moroccan mint tea',
      'Assistance during the waterfall hike',
    ],

    fr: [
      'Guide local expérimenté',
      'Randonnée guidée',
      'Thé à la menthe marocain',
      'Accompagnement pendant la randonnée',
    ],

    es: [
      'Guía local experimentado',
      'Excursión de senderismo guiada',
      'Té marroquí a la menta',
      'Asistencia durante la caminata',
    ],
  },

  // WHAT'S NOT INCLUDED
  notIncluded: {
    en: ['Transport from Marrakech', 'Lunch', 'Personal expenses'],
    fr: ['Transport depuis Marrakech', 'Déjeuner', 'Dépenses personnelles'],
    es: ['Transporte desde Marrakech', 'Almuerzo', 'Gastos personales'],
  },

  // RATINGS & VISIBILITY
  rating: 4.89,
  reviewsCount: 421,
  featured: true,
},

  
 
  {
    id: 'bread',
    slug: 'traditional-bread-making-tafarnout',
    title: { en: 'Traditional Bread Making — Tafarnout', fr: 'Fabrication Pain Traditionnel — Tafarnout', es: 'Pan Tradicional — Tafarnout' },
    shortDesc: { en: 'Knead, shape and bake in a wood-fired clay tabouna with Khadija', fr: 'Pétrissez et cuisez au four en argile avec Khadija', es: 'Amasa y hornea en horno de barro con Khadija' },
    longDesc: { en: 'Flour from the valley mill, water from the spring, fire from olive wood. Learn the slow fermentation, the slap onto tabouna walls, the smell that brings the village kids running.', fr: 'Farine du moulin, eau de source, feu au bois d’olivier. Fermentation lente, claque sur paroi du tabouna.', es: 'Harina del molino, agua del manantial, fuego de olivo. Fermentación lenta, golpe en paredes del tabouna.' },
    category: 'cultural',
    duration: '2 hours',
    price: 26,
    difficulty: 'Easy',
    groupSize: '2-8 guests',
    image: '/images/bread.jpg',
    gallery: ['/images/bread.jpg', '/images/cooking.jpg', '/images/farm.jpg'],
    highlights: { en: ['Clay oven firing', 'Hand kneading', '3 bread types', 'Butter & honey tasting'], fr: ['Allumage four argile', 'Pétrissage main', '3 pains', 'Beurre & miel'], es: ['Encendido horno barro', 'Amasado a mano', '3 panes', 'Mantequilla y miel'] },
    itinerary: [
      { time: '09:00', title: { en: 'Dough & Fire', fr: 'Pâte & Feu', es: 'Masa y Fuego' }, desc: { en: 'Mix, knead, fire tabouna', fr: 'Mélanger, pétrir, allumer', es: 'Mezclar, amasar, encender' } },
      { time: '10:00', title: { en: 'Bake & Taste', fr: 'Cuisson & Dégustation', es: 'Horno y Degustación' }, desc: { en: 'Shape, bake, eat warm with tea', fr: 'Façonner, cuire, manger chaud', es: 'Formar, hornear, comer caliente' } },
    ],
    included: { en: ['All ingredients', 'Oven use', 'Tasting', 'Take loaf'], fr: ['Ingrédients', 'Four', 'Dégustation', 'Miche à emporter'], es: ['Ingredientes', 'Horno', 'Degustación', 'Lleva tu pan'] },
    notIncluded: { en: [], fr: [], es: [] },
    rating: 4.94,
    reviewsCount: 156,
    featured: false,
  },

  {
    id: 'tea',
    slug: 'mint-tea-ceremony-hospitality',
    title: { en: 'Mint Tea Ceremony & Hospitality', fr: 'Cérémonie Thé à la Menthe & Hospitalité', es: 'Ceremonia Té Menta y Hospitalidad' },
    shortDesc: { en: 'The true art of Moroccan welcome, from pouring high to three glasses', fr: 'L’art du bienvenu marocain, du versage haut aux trois verres', es: 'El arte de la bienvenida marroquí, del vertido alto a los tres vasos' },
    longDesc: { en: 'Tea is not a drink, it’s a contract of friendship. Ahmed will show how to pick mint, how much gunpowder green to use, sugar rocks, the high pour for foam, and why you must drink three glasses.', fr: 'Le thé n’est pas une boisson, c’est un contrat d’amitié. Choix menthe, dosage, versage haut, trois verres.', es: 'El té no es bebida, es contrato de amistad. Elección de menta, dosis, vertido alto, tres vasos.' },
    category: 'cultural',
    duration: '1.5 hours',
    price: 18,
    difficulty: 'Easy',
    groupSize: '2-20 guests',
    image: '/images/mint-tea.jpg',
    gallery: ['/images/mint-tea.jpg', '/images/spices.jpg', '/images/berber-village.jpg'],
    highlights: { en: ['Mint garden', 'High-pour technique', 'Amazigh hospitality tales', 'Snacks included'], fr: ['Jardin menthe', 'Technique versage haut', 'Contes amazigh', 'Snacks inclus'], es: ['Jardín menta', 'Técnica vertido alto', 'Cuentos amazigh', 'Snacks incluidos'] },
    itinerary: [
      { time: 'Flexible', title: { en: 'Garden to Glass', fr: 'Jardin au Verre', es: 'Jardín a Vaso' }, desc: { en: 'Pick, brew, pour, taste with seasonal sweets', fr: 'Cueillir, brasser, verser, goûter', es: 'Recoger, infusionar, verter, probar' } },
    ],
    included: { en: ['Tea, nuts, sweets', 'Host storytelling', 'Scarf gift'], fr: ['Thé, noix, douceurs', 'Contes hôte', 'Foulard cadeau'], es: ['Té, frutos, dulces', 'Historias anfitrión', 'Pañuelo regalo'] },
    notIncluded: { en: [], fr: [], es: [] },
    rating: 4.98,
    reviewsCount: 189,
    featured: false,
  },

  {
    id: 'excursion to Aafay',
    slug: 'Agafay Marrakech Desert',
    title: { en: "Agafay Desert half day tour", fr: "Visite Sahara de Agafay", es: 'Sahara agafay medio dia Excursion' },
    shortDesc: { en: 'Meet the women cracking, grinding and bottling liquid gold', fr: "Rencontrez les femmes qui pressent l'or liquide", es: 'Conoce a las mujeres que prensan el oro líquido' },
    longDesc: { en: '100% women-owned. See every step from nut to oil, taste amlou, learn why cooperatives matter for Atlas girls education. Shop fairly — all profits go to members and village school.', fr: '100% femmes. De la noix à l’huile, dégustation amlou, commerce équitable — profits pour scolarisation.', es: '100% mujeres. De la nuez al aceite, prueba amlou, comercio justo — ganancias para escuela.' },
    category: 'Sahara-Desert',
    duration: '5 hours',
    price: 15,
    difficulty: 'Easy',
    groupSize: '2-25 guests',
    image: '/images/agafay/agafay-excursion.png',
    gallery: ['/images/agafay/agafay-excursion.png', '/images/woman.jpg', '/images/spices.jpg'],
    highlights: { en: ['Meet cooperative', 'Cold-press demo', 'Amlou & cosmetics', 'Fair-trade shop'], fr: ['Rencontre coopérative', 'Demo pression à froid', 'Amlou & cosmétiques', 'Boutique équitable'], es: ['Encuentro cooperativa', 'Demo prensado frío', 'Amlou y cosmética', 'Tienda comercio justo'] },
    itinerary: [
      { time: 'Flexible', title: { en: 'From Nut to Oil', fr: 'De la Noix à l’Huile', es: 'De la Nuez al Aceite' }, desc: { en: 'Tour, demo, tasting, optional shopping', fr: 'Tour, démo, dégustation, boutique', es: 'Tour, demo, degustación, tienda' } },
    ],
    included: { en: ['Guided visit', 'Tasting', 'Tea'], fr: ['Visite guidée', 'Dégustation', 'Thé'], es: ['Visita guiada', 'Degustación', 'Té'] },
    notIncluded: { en: ['Purchases'], fr: ['Achats'], es: ['Compras'] },
    rating: 4.93,
    reviewsCount: 134,
    featured: false,
  },

  {
    id: 'sahara-tour',
    slug: 'Kasbah ait ben Haddou discovery full day',
    title: { en: "Kasbah ait ben Haddou discovery", fr: "Kasbah ait ben Haddou discovery", es: 'Kasbah ait ben Haddou discovery' },
    shortDesc: { en: 'Meet the women cracking, grinding and bottling liquid gold, grinding and bottling liquid gold', fr: "Rencontrez les femmes qui pressent l'or liquide", es: 'Conoce a las mujeres que prensan el oro líquido' },
    longDesc: { en: '100% women-owned. See every step from nut to oil, taste amlou, learn why cooperatives matter for Atlas girls education. Shop fairly — all profits go to members and village school.', fr: '100% femmes. De la noix à l’huile, dégustation amlou, commerce équitable — profits pour scolarisation.', es: '100% mujeres. De la nuez al aceite, prueba amlou, comercio justo — ganancias para escuela.' },
    category: 'Sahara-Desert',
    duration: '12 hours',
    price: 15,
    difficulty: 'Easy',
    groupSize: '2-25 guests',
    image: '/images/agafay/ait-ben-haddou.jpg',
    gallery: ['/images/agafay/ait-ben-haddou.jpg','/images/cooperative.jpg', '/images/woman.jpg', '/images/spices.jpg'],
    highlights: { en: ['Meet cooperative', 'Cold-press demo', 'Amlou & cosmetics', 'Fair-trade shop'], fr: ['Rencontre coopérative', 'Demo pression à froid', 'Amlou & cosmétiques', 'Boutique équitable'], es: ['Encuentro cooperativa', 'Demo prensado frío', 'Amlou y cosmética', 'Tienda comercio justo'] },
    itinerary: [
      { time: 'Flexible', title: { en: 'From Nut to Oil', fr: 'De la Noix à l’Huile', es: 'De la Nuez al Aceite' }, desc: { en: 'Tour, demo, tasting, optional shopping', fr: 'Tour, démo, dégustation, boutique', es: 'Tour, demo, degustación, tienda' } },
    ],
    included: { en: ['Guided visit', 'Tasting', 'Tea'], fr: ['Visite guidée', 'Dégustation', 'Thé'], es: ['Visita guiada', 'Degustación', 'Té'] },
    notIncluded: { en: ['Purchases'], fr: ['Achats'], es: ['Compras'] },
    rating: 4.93,
    reviewsCount: 134,
    featured: true,
  },

  {
    id: 'Mrzouga desert',
    slug: 'three-days-sahara-highlights',
    title: { en: 'three-days-Merzouga-sahara-highlights ', fr: 'three-days-Merzouga-sahara-highlights', es: 'Mthree-days-Merzouga-sahara-highlights' },
    shortDesc: { en: 'The perfect escape: valley, village, waterfalls & lunch in 5h', fr: 'L’échappée parfaite: vallée, village, cascades & déjeuner en 5h', es: 'La escapada perfecta: valle, pueblo, cascadas y almuerzo en 5h' },
    longDesc: { en: 'Picked up from Marrakech at 9am, back for siesta. Visit a Berber house, walk to Setti Fatma falls, riverside tagine lunch, and stop at women’s cooperative. Best for short stays.', fr: 'Prise en charge Marrakech 9h, retour sieste. Maison berbère, cascades Setti Fatma, tajine rivière, coopérative féminine.', es: 'Recogida Marrakech 9h, regreso siesta. Casa bereber, cascadas Setti Fatma, tajine río, cooperativa femenina.' },
    category: 'Sahara-Desert',
    duration: '72  hours',
    price: 62,
    originalPrice: 75,
    difficulty: 'Easy',
    groupSize: '2-16 guests',
    image: '/images/sahara/desert-merzouga-camp.jpg',
    gallery: ['/images/sahara/desert-merzouga-camp.jpg', '/images/waterfall.jpg', '/images/berber-village.jpg', '/images/mint-tea.jpg'],
    highlights: { en: ['Hotel pickup Marrakech', 'Berber house & tea', 'Waterfalls with local guide', 'Riverside lunch'], fr: ['Prise en charge hôtel Marrakech', 'Maison berbère & thé', 'Cascades guide local', 'Déjeuner rivière'], es: ['Recogida hotel Marrakech', 'Casa bereber y té', 'Cascadas con guía local', 'Almuerzo río'] },
    itinerary: [
      { time: '09:00', title: { en: 'Pickup & Drive', fr: 'Prise en charge & Route', es: 'Recogida y Ruta' }, desc: { en: 'Scenic 45min drive, photo stops', fr: 'Route scénique 45min', es: 'Ruta escénica 45min' } },
      { time: '10:00', title: { en: 'Village & Cooperative', fr: 'Village & Coopérative', es: 'Pueblo y Cooperativa' }, desc: { en: 'Home visit, argan demo', fr: 'Visite maison, démo argan', es: 'Visita casa, demo argán' } },
      { time: '11:30', title: { en: 'Waterfalls Hike', fr: 'Randonnée Cascades', es: 'Caminata Cascadas' }, desc: { en: 'Guided to 7 falls', fr: 'Guidé aux 7 cascades', es: 'Guiado a 7 cascadas' } },
      { time: '13:00', title: { en: 'Lunch & Return', fr: 'Déjeuner & Retour', es: 'Almuerzo y Regreso' }, desc: { en: 'Riverside tagine, drive back', fr: 'Tajine rivière, retour', es: 'Tajine río, regreso' } },
    ],
    included: { en: ['Transport from Marrakech', 'Driver & guide', 'Tea & lunch', 'Waterfall guide'], fr: ['Transport Marrakech', 'Chauffeur & guide', 'Thé & déjeuner', 'Guide cascades'], es: ['Transporte Marrakech', 'Conductor y guía', 'Té y almuerzo', 'Guía cascadas'] },
    notIncluded: { en: ['Drinks', 'Tips'], fr: ['Boissons', 'Pourboires'], es: ['Bebidas', 'Propinas'] },
    rating: 4.7,
    reviewsCount: 523,
    featured: false,
  },

  {
    id: 'full-day-tour',
    slug: 'full-day-atlas-3 valleys-immersion',
    title: { en: 'full-day-atlas-3 valleys-immersion', fr: 'Journée Complète 3 Trois vallees Immersion', es: 'Día Completo tres pueblos' },
    shortDesc: { en: 'Deep dive: hike, cook, farm & tea — the whole valley in one day', fr: 'Plongée profonde: rando, cuisine, ferme & thé — toute la vallée en un jour', es: 'Inmersión profunda: senderismo, cocina, granja y té — todo el valle en un día' },
    longDesc: { en: 'Our bestseller for curious travelers. Morning hike, farming break, bread baking, cooking class lunch, cooperative visit and sunset tea above terraces. All local, all connected.', fr: 'Best-seller curieux. Rando matin, ferme, pain, cours cuisine déjeuner, coopérative, thé coucher soleil.', es: 'Más vendido para curiosos. Senderismo mañana, granja, pan, clase cocina almuerzo, cooperativa, té atardecer.' },
    category: 'full-day',
    duration: '6 hours',
    price: 125,
    originalPrice: 140,
    difficulty: 'Moderate',
    groupSize: '2-12 guests',
    image: '/images/hero-atlas.jpg',
    gallery: ['/images/hero-atlas.jpg', '/images/hiking.jpg', '/images/cooking.jpg', '/images/farm.jpg', '/images/mint-tea.jpg','/images/ourikavalley.jpg', '/images/mint-tea.jpg'],
    highlights: { en: ['4 experiences in 1 day', 'All meals included', 'Marrakech transport', '100% local revenue'], fr: ['4 expériences en 1 jour', 'Tous repas inclus', 'Transport Marrakech', '100% revenu local'], es: ['4 experiencias en 1 día', 'Todas las comidas incluidas', 'Transporte Marrakech', '100% ingreso local'] },
    itinerary: [
      { time: '08:30', title: { en: 'Marrakech Pickup', fr: 'Prise en charge Marrakech', es: 'Recogida Marrakech' }, desc: { en: 'Begin scenic drive', fr: 'Début route scénique', es: 'Inicio ruta escénica' } },
      { time: '09:30', title: { en: 'Hike & Farm', fr: 'Rando & Ferme', es: 'Senderismo y Granja' }, desc: { en: '2h valley hike + farm tasks', fr: '2h rando + tâches ferme', es: '2h senderismo + tareas granja' } },
      { time: '11:30', title: { en: 'Bread & Cooking', fr: 'Pain & Cuisine', es: 'Pan y Cocina' }, desc: { en: 'Bake bread, cook tagine', fr: 'Cuire pain, cuisiner tajine', es: 'Hornear pan, cocinar tajine' } },
      { time: '14:00', title: { en: 'Feast & Cooperative', fr: 'Festin & Coopérative', es: 'Festín y Cooperativa' }, desc: { en: 'Lunch, then women co-op', fr: 'Déjeuner, puis coop féminine', es: 'Almuerzo, luego co-op mujeres' } },
      { time: '15:30', title: { en: 'Tea & Return', fr: 'Thé & Retour', es: 'Té y Regreso' }, desc: { en: 'Sunset tea, drive back by 17:30', fr: 'Thé coucher soleil, retour 17h30', es: 'Té atardecer, regreso 17:30' } },
    ],
    included: { en: ['Transport van car', 'All guides', 'All food & tea', 'Donations'], fr: ['Transport', 'Tous guides', 'Toute nourriture & thé', 'Dons'], es: ['Transporte', 'Todos los guías', 'Toda comida y té', 'Donaciones'] },
    notIncluded: { en: ['Drinks'], fr: ['Boissons'], es: ['Bebidas'] },
    rating: 4.90,
    reviewsCount: 687,
    featured: true,
  },

  {
    id: 'full-day-exp',
    slug: 'full-day-atlas-ourika',
    title: { en: 'Full-Day Atlas hills', fr: 'Journée Complète dans les collins', es: 'Día Completo Atlas en colinas de Atlas' },
    shortDesc: { en: 'Deep dive: hike, cook, farm & tea — the whole valley in one day', fr: 'Plongée profonde: rando, cuisine, ferme & thé — toute la vallée en un jour', es: 'Inmersión profunda: senderismo, cocina, granja y té — todo el valle en un día' },
    longDesc: { en: 'Our bestseller for curious travelers. Morning hike, farming break, bread baking, cooking class lunch, cooperative visit and sunset tea above terraces. All local, all connected.', fr: 'Best-seller curieux. Rando matin, ferme, pain, cours cuisine déjeuner, coopérative, thé coucher soleil.', es: 'Más vendido para curiosos. Senderismo mañana, granja, pan, clase cocina almuerzo, cooperativa, té atardecer.' },
    category: 'half-day',
    duration: '3 hours',
    price: 825,
    originalPrice: 120,
    difficulty: 'Moderate',
    groupSize: '2-15 guests',
    image: '/images/ourikavalley.jpg',
    gallery: ['/images/ourikavalley.jpg', '/images/hiking.jpg', '/images/cooking.jpg', '/images/farm.jpg', '/images/mint-tea.jpg'],
    highlights: { en: ['4 experiences in 1 day', 'All meals included', 'Marrakech transport', '100% local revenue'], fr: ['4 expériences en 1 jour', 'Tous repas inclus', 'Transport Marrakech', '100% revenu local'], es: ['4 experiencias en 1 día', 'Todas las comidas incluidas', 'Transporte Marrakech', '100% ingreso local'] },
    itinerary: [
      { time: '08:30', title: { en: 'Marrakech Pickup', fr: 'Prise en charge Marrakech', es: 'Recogida Marrakech' }, desc: { en: 'Begin scenic drive', fr: 'Début route scénique', es: 'Inicio ruta escénica' } },
      { time: '09:30', title: { en: 'Hike & Farm', fr: 'Rando & Ferme', es: 'Senderismo y Granja' }, desc: { en: '2h valley hike + farm tasks', fr: '2h rando + tâches ferme', es: '2h senderismo + tareas granja' } },
      { time: '11:30', title: { en: 'Bread & Cooking', fr: 'Pain & Cuisine', es: 'Pan y Cocina' }, desc: { en: 'Bake bread, cook tagine', fr: 'Cuire pain, cuisiner tajine', es: 'Hornear pan, cocinar tajine' } },
      { time: '14:00', title: { en: 'Feast & Cooperative', fr: 'Festin & Coopérative', es: 'Festín y Cooperativa' }, desc: { en: 'Lunch, then women co-op', fr: 'Déjeuner, puis coop féminine', es: 'Almuerzo, luego co-op mujeres' } },
      { time: '15:30', title: { en: 'Tea & Return', fr: 'Thé & Retour', es: 'Té y Regreso' }, desc: { en: 'Sunset tea, drive back by 17:30', fr: 'Thé coucher soleil, retour 17h30', es: 'Té atardecer, regreso 17:30' } },
    ],
    included: { en: ['Transport-Confortable Van', 'All guides', 'All food & tea', 'Donations'], fr: ['Transport', 'Tous guides', 'Toute nourriture & thé', 'Dons'], es: ['Transporte', 'Todos los guías', 'Toda comida y té', 'Donaciones'] },
    notIncluded: { en: ['Drinks'], fr: ['Boissons'], es: ['Bebidas'] },
    rating: 4.8,
    reviewsCount: 600,
    featured: false,
  },

   {
    id: 'Hiking In Tasghimot mountains',
    slug: 'Half day trekking-in-atlas-ourika',
    title: { en: 'Full-Day Atlas hills', fr: 'Journée Complète dams les collins', es: 'Día Completo Atlas en colinas de Atlas' },
    shortDesc: { en: 'Deep dive: hike, cook, farm & tea — the whole valley in one day', fr: 'Plongée profonde: rando, cuisine, ferme & thé — toute la vallée en un jour', es: 'Inmersión profunda: senderismo, cocina, granja y té — todo el valle en un día' },
    longDesc: { en: 'Our bestseller for curious travelers. Morning hike, farming break, bread baking, cooking class lunch, cooperative visit and sunset tea above terraces. All local, all connected.', fr: 'Best-seller curieux. Rando matin, ferme, pain, cours cuisine déjeuner, coopérative, thé coucher soleil.', es: 'Más vendido para curiosos. Senderismo mañana, granja, pan, clase cocina almuerzo, cooperativa, té atardecer.' },
    category: 'half-day',
    duration: '3 hours',
    price: 825,
    originalPrice: 120,
    difficulty: 'Moderate',
    groupSize: '2-15 guests',
    image: '/images/hiking.jpg',
    gallery: ['/images/hiking.jpg', '/images/hiking.jpg', '/images/cooking.jpg', '/images/farm.jpg', '/images/mint-tea.jpg'],
    highlights: { en: ['4 experiences in 1 day', 'All meals included', 'Marrakech transport', '100% local revenue'], fr: ['4 expériences en 1 jour', 'Tous repas inclus', 'Transport Marrakech', '100% revenu local'], es: ['4 experiencias en 1 día', 'Todas las comidas incluidas', 'Transporte Marrakech', '100% ingreso local'] },
    itinerary: [
      { time: '08:30', title: { en: 'Marrakech Pickup', fr: 'Prise en charge Marrakech', es: 'Recogida Marrakech' }, desc: { en: 'Begin scenic drive', fr: 'Début route scénique', es: 'Inicio ruta escénica' } },
      { time: '09:30', title: { en: 'Hike & Farm', fr: 'Rando & Ferme', es: 'Senderismo y Granja' }, desc: { en: '2h valley hike + farm tasks', fr: '2h rando + tâches ferme', es: '2h senderismo + tareas granja' } },
      { time: '11:30', title: { en: 'Bread & Cooking', fr: 'Pain & Cuisine', es: 'Pan y Cocina' }, desc: { en: 'Bake bread, cook tagine', fr: 'Cuire pain, cuisiner tajine', es: 'Hornear pan, cocinar tajine' } },
      { time: '14:00', title: { en: 'Feast & Cooperative', fr: 'Festin & Coopérative', es: 'Festín y Cooperativa' }, desc: { en: 'Lunch, then women co-op', fr: 'Déjeuner, puis coop féminine', es: 'Almuerzo, luego co-op mujeres' } },
      { time: '15:30', title: { en: 'Tea & Return', fr: 'Thé & Retour', es: 'Té y Regreso' }, desc: { en: 'Sunset tea, drive back by 17:30', fr: 'Thé coucher soleil, retour 17h30', es: 'Té atardecer, regreso 17:30' } },
    ],
    included: { en: ['Public transport', 'local guides', 'All food & tea', 'Donations'], fr: ['Transport', 'Tous guides', 'Toute nourriture & thé', 'Dons'], es: ['Transporte', 'Todos los guías', 'Toda comida y té', 'Donaciones'] },
    notIncluded: { en: ['Drinks'], fr: ['Boissons'], es: ['Bebidas'] },
    rating: 2.8,
    reviewsCount: 200,
    featured: true,
  },
  
  {
    id: 'Asguine riveer hike',
    slug: 'Half day asguine and tasghimot',
    title: { en: 'Hiking from Asguine to Tasghimot', fr: 'Journée Complète dams les collins', es: 'Día Completo Atlas en colinas de Atlas' },
    shortDesc: { en: 'Deep dive: hike, cook, farm & tea — the whole valley in one day', fr: 'Plongée profonde: rando, cuisine, ferme & thé — toute la vallée en un jour', es: 'Inmersión profunda: senderismo, cocina, granja y té — todo el valle en un día' },
    longDesc: { en: 'Our bestseller for curious travelers. Morning hike, farming break, bread baking, cooking class lunch, cooperative visit and sunset tea above terraces. All local, all connected.', fr: 'Best-seller curieux. Rando matin, ferme, pain, cours cuisine déjeuner, coopérative, thé coucher soleil.', es: 'Más vendido para curiosos. Senderismo mañana, granja, pan, clase cocina almuerzo, cooperativa, té atardecer.' },
    category: 'half-day',
    duration: '4 hours',
    price: 125,
    originalPrice: 120,
    difficulty: 'Moderate',
    groupSize: '2-15 guests',
    image: '/images/hiking.jpg',
    gallery: ['/images/hiking.jpg', '/images/hiking.jpg', '/images/cooking.jpg', '/images/farm.jpg', '/images/mint-tea.jpg'],
    highlights: { en: ['4 experiences in 1 day', 'All meals included', 'Marrakech transport', '100% local revenue'], fr: ['4 expériences en 1 jour', 'Tous repas inclus', 'Transport Marrakech', '100% revenu local'], es: ['4 experiencias en 1 día', 'Todas las comidas incluidas', 'Transporte Marrakech', '100% ingreso local'] },
    itinerary: [
      { time: '08:30', title: { en: 'Marrakech Pickup', fr: 'Prise en charge Marrakech', es: 'Recogida Marrakech' }, desc: { en: 'Begin scenic drive', fr: 'Début route scénique', es: 'Inicio ruta escénica' } },
      { time: '09:30', title: { en: 'Hike & Farm', fr: 'Rando & Ferme', es: 'Senderismo y Granja' }, desc: { en: '2h valley hike + farm tasks', fr: '2h rando + tâches ferme', es: '2h senderismo + tareas granja' } },
      { time: '11:30', title: { en: 'Bread & Cooking', fr: 'Pain & Cuisine', es: 'Pan y Cocina' }, desc: { en: 'Bake bread, cook tagine', fr: 'Cuire pain, cuisiner tajine', es: 'Hornear pan, cocinar tajine' } },
      { time: '14:00', title: { en: 'Feast & Cooperative', fr: 'Festin & Coopérative', es: 'Festín y Cooperativa' }, desc: { en: 'Lunch, then women co-op', fr: 'Déjeuner, puis coop féminine', es: 'Almuerzo, luego co-op mujeres' } },
      { time: '15:30', title: { en: 'Tea & Return', fr: 'Thé & Retour', es: 'Té y Regreso' }, desc: { en: 'Sunset tea, drive back by 17:30', fr: 'Thé coucher soleil, retour 17h30', es: 'Té atardecer, regreso 17:30' } },
    ],
    included: { en: ['Public transport', 'local guides', 'All food & tea', 'Donations'], fr: ['Transport', 'Tous guides', 'Toute nourriture & thé', 'Dons'], es: ['Transporte', 'Todos los guías', 'Toda comida y té', 'Donaciones'] },
    notIncluded: { en: ['Drinks'], fr: ['Boissons'], es: ['Bebidas'] },
    rating: 4.8,
    reviewsCount: 1120,
    featured: true,
  },

];

export const reviews = [
  { name: 'Sophie L.', country: 'France', rating: 5, text: { en: 'The cooking class with Fatima changed how I cook forever. Real, slow, generous.', fr: 'Le cours avec Fatima a changé ma cuisine pour toujours. Vrai, lent, généreux.', es: 'La clase con Fatima cambió mi forma de cocinar para siempre.' }, avatar: '/images/woman.jpg' },
  { name: 'James & Clara', country: 'UK', rating: 5, text: { en: 'Not touristy at all. We were in a real home. Our guide grew up there. Magic.', fr: "Pas touristique du tout. Dans une vraie maison. Guide né là. Magique.", es: 'Nada turístico. Estuvimos en una casa real. Guía criado allí. Mágico.' }, avatar: '/images/woman.jpg' },
  { name: 'Ana M.', country: 'Spain', rating: 5, text: { en: 'Waterfalls hike was perfect. Tea at the top with view of whole valley — unforgettable.', fr: 'Rando cascades parfaite. Thé au sommet avec vue vallée — inoubliable.', es: 'Caminata cascadas perfecta. Té en la cima con vistas al valle — inolvidable.' }, avatar: '/images/woman.jpg' },
  { name: 'David K.', country: 'Germany', rating: 5, text: { en: 'Full-day tour worth every dirham. Supports locals directly, you feel it.', fr: 'Journée complète vaut chaque dirham. Soutien direct aux locaux, on le sent.', es: 'Tour de día completo vale cada dirham. Apoya a locales directamente.' }, avatar: '/images/woman.jpg' },
  { name: 'Mouna bK.', country: 'Morocco', rating: 5, text: { en: 'Full-day tour worth every dirham. Supports locals directly, you feel it.', fr: 'Journée complète vaut chaque dirham. Soutien direct aux locaux, on le sent.', es: 'Tour de día completo vale cada dirham. Apoya a locales directamente.' }, avatar: '/images/woman.jpg' },
];
