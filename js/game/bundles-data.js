// ============================================================
// STARDEW VALLEY // TYPING EDITION - JUNIMO COMMUNITY CENTER BUNDLES DATA
// ============================================================

export const COMMUNITY_ROOMS = [
  {
    id: 'pantry',
    name: 'La Despensa',
    nameEn: 'The Pantry',
    icon: '🌱',
    themeColor: '#73b32a',
    perkId: 'greenhouse',
    perkName: 'El Invernadero Restaurado',
    perkDesc: '+25% de Oro ($g) permanente en todas las cosechas y labores agrícolas de la huerta.',
    story: 'Los Junimos de la despensa han vuelto a bendecir la tierra fértil. El viejo invernadero del abuelo ha sido completamente reconstruido.'
  },
  {
    id: 'crafts',
    name: 'Sala de Artesanía',
    nameEn: 'Crafts Room',
    icon: '🍂',
    themeColor: '#d97706',
    perkId: 'quarryBridge',
    perkName: 'El Puente de la Cantera',
    perkDesc: 'Los carpinteros Junimo han reparado el puente a la montaña: Multiplicador permanente de combo +50% de bonificación.',
    story: 'El puente hacia la cantera de minerales está reparado. Un nuevo sendero cruza el cañón hacia rocas cristalinas ancestrales.'
  },
  {
    id: 'fishTank',
    name: 'El Acuario',
    nameEn: 'Fish Tank',
    icon: '🐟',
    themeColor: '#0288d1',
    perkId: 'fishBoulder',
    perkName: 'Extracción de la Roca Brillante',
    perkDesc: 'Willy te bendice con su caña maestra: Las capturas en el muelle de pesca otorgan doble recompensa de oro ($g).',
    story: 'Los espíritus del agua purifican los arroyos de Pelican Town. Peces legendarios nadan libres bajo la luz de la luna.'
  },
  {
    id: 'boiler',
    name: 'Sala de Calderas',
    nameEn: 'Boiler Room',
    icon: '⛏️',
    themeColor: '#dc2626',
    perkId: 'minecarts',
    perkName: 'Red de Vagonetas de la Mina',
    perkDesc: 'Las vagonetas de vapor vuelven a rodar: +5.0 segundos de antorcha inicial en la Caverna Calavera (¡35s al inicio!).',
    story: 'El fuego del horno vuelve a rugir con carbón fresco. Las vagonetas oxidadas conectan la parada del autobús con las profundidades de la mina.'
  },
  {
    id: 'vault',
    name: 'La Bóveda',
    nameEn: 'The Vault',
    icon: '💰',
    themeColor: '#eab308',
    perkId: 'calicoBus',
    perkName: 'El Autobús de Pam al Desierto',
    perkDesc: 'El autobús municipal vuelve a funcionar: Bendición Junimo Estelar (Rachas de combo x20+ arrojan bonus de +15 $g).',
    story: 'La caja fuerte de Pelican Town está repleta de oro. El autobús de Pam ruge con motor nuevo rumbo al Desierto de Calico.'
  }
];

export const JUNIMO_BUNDLES = [
  // -------------------------------------------------------------
  // 1. LA DESPENSA (THE PANTRY)
  // -------------------------------------------------------------
  {
    id: 'pantry_spring',
    roomId: 'pantry',
    name: 'Lote Cultivos de Primavera',
    icon: '🌱',
    color: '#73b32a',
    desc: 'Los primeros brotes verdes que rompen la tierra helada de primavera.',
    items: [
      { name: 'Chirivía Dorada', icon: '🥕' },
      { name: 'Judía Verde', icon: '🫘' },
      { name: 'Coliflor Gigante', icon: '🥬' },
      { name: 'Patata Temprana', icon: '🥔' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 350,
    trialWords: {
      es: 'Chirivías frescas, patatas tempranas, coliflores gigantes y judías verdes regadas con agua de manantial.',
      en: 'Fresh parsnips, early potatoes, giant cauliflower, and green beans watered by the spring morning mist.'
    }
  },
  {
    id: 'pantry_summer',
    roomId: 'pantry',
    name: 'Lote Cultivos de Verano',
    icon: '☀️',
    color: '#eab308',
    desc: 'Frutos dulces y verduras jugosas maduradas bajo el sol radiante.',
    items: [
      { name: 'Tomate Jugoso', icon: '🍅' },
      { name: 'Pimiento Picante', icon: '🌶️' },
      { name: 'Melón Dulce', icon: '🍈' },
      { name: 'Arándano Estival', icon: '🫐' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 450,
    trialWords: {
      es: 'Tomates jugosos, pimientos picantes para Shane, melones dulces y cestas llenas de arándanos silvestres.',
      en: 'Juicy tomatoes, hot peppers for Shane, sweet melons, and bountiful baskets of summer blueberries.'
    }
  },
  {
    id: 'pantry_fall',
    roomId: 'pantry',
    name: 'Lote Cultivos de Otoño',
    icon: '🎃',
    color: '#ea580c',
    desc: 'La gran cosecha dorada antes de que el viento frío cubra el valle.',
    items: [
      { name: 'Maíz Dorado', icon: '🌽' },
      { name: 'Berenjena Madura', icon: '🍆' },
      { name: 'Calabaza Enorme', icon: '🎃' },
      { name: 'Boniato Asado', icon: '🍠' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 600,
    trialWords: {
      es: 'Maíz dorado de doble cosecha, berenjenas tiernas, calabazas gigantes y boniatos recién desenterrados.',
      en: 'Golden corn stalks, tender eggplants, giant jack pumpkins, and sweet yams dug up before winter.'
    }
  },

  // -------------------------------------------------------------
  // 2. SALA DE ARTESANÍA (CRAFTS ROOM)
  // -------------------------------------------------------------
  {
    id: 'crafts_forage',
    roomId: 'crafts',
    name: 'Lote de Forrajeo Silvestre',
    icon: '🍄',
    color: '#84cc16',
    desc: 'Plantas curativas y setas silvestres recolectadas en el Bosque Tizón.',
    items: [
      { name: 'Rábano Silvestre', icon: '🌱' },
      { name: 'Diente de León', icon: '🌼' },
      { name: 'Mora del Pantano', icon: '🫐' },
      { name: 'Seta Púrpura', icon: '🍄' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 400,
    trialWords: {
      es: 'Rábano silvestre crujiente, dientes de león aromáticos, moras maduras y setas púrpuras mágicas del bosque.',
      en: 'Crisp wild horseradish, fragrant yellow dandelions, ripe blackberries, and magical purple mushrooms.'
    }
  },
  {
    id: 'crafts_wood',
    roomId: 'crafts',
    name: 'Lote de Madera & Resina',
    icon: '🪵',
    color: '#92400e',
    desc: 'Troncos nobles talados por Robin y jarabes aromáticos de los árboles.',
    items: [
      { name: 'Madera Noble', icon: '🪵' },
      { name: 'Resina de Arce', icon: '🍯' },
      { name: 'Brea de Pino', icon: '🌲' },
      { name: 'Savia de Roble', icon: '🍁' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 500,
    trialWords: {
      es: 'Troncos de madera noble de Robin, resina dulce de arce azucarero, brea de pino y savia aromática de roble.',
      en: 'Hardwood logs cut by Robin, sweet maple syrup, pine tar bottles, and rich aromatic oak resin.'
    }
  },
  {
    id: 'crafts_winter',
    roomId: 'crafts',
    name: 'Lote de Invierno Místico',
    icon: '❄️',
    color: '#38bdf8',
    desc: 'Tesoros escarchados encontrados bajo el manto de nieve de Pelican Town.',
    items: [
      { name: 'Raíz Invernal', icon: '🥕' },
      { name: 'Fruta de Cristal', icon: '🧊' },
      { name: 'Ñame de Nieve', icon: '🍠' },
      { name: 'Azafrán Helado', icon: '🌸' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 650,
    trialWords: {
      es: 'Raíz invernal congelada, frutas relucientes de cristal, ñames de nieve blanca y azafrán helado del valle.',
      en: 'Frozen winter roots, shining crystal fruit gems, snow yams, and cold purple crocus blossoms.'
    }
  },

  // -------------------------------------------------------------
  // 3. EL ACUARIO (FISH TANK)
  // -------------------------------------------------------------
  {
    id: 'fish_river',
    roomId: 'fishTank',
    name: 'Lote de Peces de Río',
    icon: '🐟',
    color: '#0ea5e9',
    desc: 'Ejemplares rápidos que nadan contra la corriente junto al puente del pueblo.',
    items: [
      { name: 'Trucha Arcoíris', icon: '🐟' },
      { name: 'Bagre de Río', icon: '🐡' },
      { name: 'Salmón Dorado', icon: '🍣' },
      { name: 'Carpa Saltarina', icon: '🐠' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 450,
    trialWords: {
      es: 'Truchas arcoíris saltando contra la corriente, bagres veloces bajo la lluvia y carpas del río del pueblo.',
      en: 'Rainbow trout leaping upstream, dark river catfish beneath the storm, and sunlit valley river carp.'
    }
  },
  {
    id: 'fish_ocean',
    roomId: 'fishTank',
    name: 'Lote de Peces del Océano',
    icon: '🌊',
    color: '#0284c7',
    desc: 'Criaturas saladas pescadas desde el muelle de madera de Willy.',
    items: [
      { name: 'Atún Azul', icon: '🐟' },
      { name: 'Halibut Gigante', icon: '🦈' },
      { name: 'Sardina Plateada', icon: '🐟' },
      { name: 'Pez Espada', icon: '🗡️' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 550,
    trialWords: {
      es: 'Atún azul de mar abierto, sardinas plateadas de Willy, halibuts gigantes y peces espada de la costa sur.',
      en: 'Deep blue ocean tuna, Willy silver sardines, giant ocean halibut, and swordfish fighting the ocean reel.'
    }
  },
  {
    id: 'fish_night',
    roomId: 'fishTank',
    name: 'Lote de Pesca Nocturna',
    icon: '🌙',
    color: '#4f46e5',
    desc: 'Misteriosas especies que solo muerden el anzuelo tras el anochecer.',
    items: [
      { name: 'Brema Nocturna', icon: '🐟' },
      { name: 'Anguila Eléctrica', icon: '⚡' },
      { name: 'Lucioperca', icon: '🐟' },
      { name: 'Calamar Marino', icon: '🦑' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 700,
    trialWords: {
      es: 'Bremas nocturnas del lago de la montaña, anguilas resbaladizas y calamares brillantes pescados a medianoche.',
      en: 'Nighttime lake bream, slippery electric storm eels, and glowing deep ocean squids hooked at midnight.'
    }
  },

  // -------------------------------------------------------------
  // 4. SALA DE CALDERAS (BOILER ROOM)
  // -------------------------------------------------------------
  {
    id: 'boiler_blacksmith',
    roomId: 'boiler',
    name: 'Lote del Lingote Herrero',
    icon: '🔨',
    color: '#ea580c',
    desc: 'Minerales fundidos a fuego abrasador en los hornos de Clint.',
    items: [
      { name: 'Lingote de Cobre', icon: '🥉' },
      { name: 'Lingote de Hierro', icon: '🥈' },
      { name: 'Lingote de Oro', icon: '🥇' },
      { name: 'Carbón Negro', icon: '⚫' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 500,
    trialWords: {
      es: 'Barras fundidas de cobre rojizo, lingotes templados de hierro, oro puro brillante y carbón de las minas.',
      en: 'Smelted reddish copper bars, tempered mountain iron ingots, gleaming pure gold, and black lump coal.'
    }
  },
  {
    id: 'boiler_geologist',
    roomId: 'boiler',
    name: 'Lote del Geólogo',
    icon: '💎',
    color: '#a855f7',
    desc: 'Gemas y cristales subterráneos con propiedades elementales.',
    items: [
      { name: 'Cuarzo de Fuego', icon: '🔥' },
      { name: 'Lágrima Helada', icon: '💧' },
      { name: 'Geoda de Magma', icon: '🌋' },
      { name: 'Amatista Pulida', icon: '🔮' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 650,
    trialWords: {
      es: 'Cuarzo de fuego resplandeciente, lágrimas heladas de cristal, amatistas para Abigail y geodas de magma.',
      en: 'Glowing fire quartz, frozen mountain teardrop crystals, shiny purple amethyst for Abigail, and magma geodes.'
    }
  },
  {
    id: 'boiler_adventurer',
    roomId: 'boiler',
    name: 'Lote del Gremio Aventurero',
    icon: '⚔️',
    color: '#dc2626',
    desc: 'Trofeos de batalla conseguidos contra los monstruos de las cavernas.',
    items: [
      { name: 'Ala de Murciélago', icon: '🦇' },
      { name: 'Baba Gelatinosa', icon: '🧪' },
      { name: 'Esencia Solar', icon: '☀️' },
      { name: 'Esencia Sombría', icon: '🌑' }
    ],
    goldCost: 0,
    isGold: false,
    rewardGold: 800,
    trialWords: {
      es: 'Alas de murciélago veloz, baba verde gelatinosa, esencias solares y esencias sombrías del gremio de Marlon.',
      en: 'Swift cave bat wings, green gelatinous slime jars, radiant solar essence, and dark void essences for Marlon.'
    }
  },

  // -------------------------------------------------------------
  // 5. LA BÓVEDA (THE VAULT)
  // -------------------------------------------------------------
  {
    id: 'vault_2500',
    roomId: 'vault',
    name: 'Lote Comunitario: 2,500 $g',
    icon: '🪙',
    color: '#eab308',
    desc: 'Donación para reparar los cristales y bancos de madera del centro cívico.',
    items: [
      { name: 'Aporte de 2,500 $g', icon: '💰' }
    ],
    goldCost: 2500,
    isGold: true,
    rewardGold: 0,
    trialWords: {
      es: 'Donación comunitaria de 2,500 $g recaudada con cosechas para restaurar las ventanas y bancas de madera.',
      en: 'Community donation of 2,500 $g harvested from our crops to restore town hall windows and pine benches.'
    }
  },
  {
    id: 'vault_5000',
    roomId: 'vault',
    name: 'Lote de Infraestructura: 5,000 $g',
    icon: '💵',
    color: '#f59e0b',
    desc: 'Fondos para comprar repuestos mecánicos y pintura para la vieja marquesina.',
    items: [
      { name: 'Aporte de 5,000 $g', icon: '💰' }
    ],
    goldCost: 5000,
    isGold: true,
    rewardGold: 0,
    trialWords: {
      es: 'Presupuesto municipal de 5,000 $g para reparar el motor del autobús de Pam y reabrir la ruta del desierto.',
      en: 'Municipal fund of 5,000 $g to overhaul Pam bus diesel engine and reopen the Calico desert trail.'
    }
  },
  {
    id: 'vault_10000',
    roomId: 'vault',
    name: 'Lote del Gran Tesoro: 10,000 $g',
    icon: '👑',
    color: '#ffd700',
    desc: 'El aporte supremo del granjero para blindar el Centro Cívico contra Joja Corporation.',
    items: [
      { name: 'Aporte Supremo de 10,000 $g', icon: '💎' }
    ],
    goldCost: 10000,
    isGold: true,
    rewardGold: 0,
    trialWords: {
      es: 'La gran bóveda de Pelican Town sellada con diez mil monedas de oro puro para expulsar a Joja de una vez por todas.',
      en: 'The grand town vault sealed with ten thousand pure gold coins to banish Joja Corporation forever.'
    }
  }
];
