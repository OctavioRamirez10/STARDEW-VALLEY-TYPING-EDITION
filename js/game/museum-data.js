// Stardew Valley // Typing Edition - Gunther's Museum & Library Catalog
// 20 Rare Artifacts & Minerals across 4 Wings of Pelican Town Museum

export const MUSEUM_WINGS = [
  { id: 'fossils', name: 'Ala de Fósiles', icon: '🦖', desc: 'Huesos colosales y vestigios de criaturas prehistóricas del valle.' },
  { id: 'minerals', name: 'Ala de Cristales', icon: '💎', desc: 'Gemas telúricas y minerales ígneos extraídos de las profundidades de la mina.' },
  { id: 'relics', name: 'Ala de Reliquias', icon: '🏺', desc: 'Tesoros y pergaminos de los antiguos habitantes de Ferngill y los enanos.' },
  { id: 'curios', name: 'Curiosidades y Mar', icon: '⚓', desc: 'Descubrimientos arqueológicos de naufragios y artefactos misteriosos.' }
];

export const MUSEUM_ARTIFACTS = [
  // --- ALA 1: FÓSILES & PALEONTOLOGÍA ---
  {
    id: 'dino_egg',
    wing: 'fossils',
    name: 'Huevo de Dinosaurio',
    icon: '🦖',
    desc: 'Un huevo fósil gigantesco con cáscara moteada. Gunther asegura que aún late con tenue calor primordial.',
    typingPrompt: 'Los paleontologos del valle descubrieron este huevo intacto bajo estratos arcillosos milenarios con restos organicos fosilizados.',
    rewardG: 350
  },
  {
    id: 'skeletal_skull',
    wing: 'fossils',
    name: 'Cráneo Prehistórico',
    icon: '💀',
    desc: 'Cráneo de un mamífero primitivo que pastaba en los valles antes de la fundación de Pelican Town.',
    typingPrompt: 'La estructura osea preserva colmillos curvados adaptados a la vegetacion densa que cubria el valle durante la era glacial.',
    rewardG: 250
  },
  {
    id: 'amphibian_fossil',
    wing: 'fossils',
    name: 'Fósil de Anfibio Ancestral',
    icon: '🦴',
    desc: 'Impronta en pizarra de un pequeño tetrápodo que nadaba en el río del valle hace trescientos millones de años.',
    typingPrompt: 'Las huellas de la columna vertebral y la membrana palmeada quedaron petrificadas en capas finas de barro de rio sereno.',
    rewardG: 200
  },
  {
    id: 'trilobite',
    wing: 'fossils',
    name: 'Trilobite del Paleozoico',
    icon: '🦐',
    desc: 'Artrópodo marino segmentado con caparazón calcificado perfectamente conservado.',
    typingPrompt: 'Este antiguo habitante marino rodaba sobre el lecho oceanico antes de que las montanas de Pelican Town emergieran del mar.',
    rewardG: 220
  },
  {
    id: 'prehistoric_scapula',
    wing: 'fossils',
    name: 'Omóplato Prehistórico',
    icon: '🦕',
    desc: 'Hueso macizo de un herbívoro cuadrúpedo que medía más de doce metros de longitud.',
    typingPrompt: 'El minucioso pulido con cincel revela las marcas de insercion muscular de una bestia herbivora colosal del pasado remoto.',
    rewardG: 260
  },

  // --- ALA 2: GEMAS & MINERALES TELÚRICOS ---
  {
    id: 'prismatic_shard',
    wing: 'minerals',
    name: 'Fragmento Prismático',
    icon: '💎',
    desc: 'La sustancia más pura y codiciada del cosmos. Emite un arcoíris palpitante que ilumina toda la galería.',
    typingPrompt: 'La luz refractada por el fragmento prismatico oscila en frecuencias cosmicas imposibles de reproducir con cristales ordinarios.',
    rewardG: 800
  },
  {
    id: 'fire_geode',
    wing: 'minerals',
    name: 'Geoda de Fuego',
    icon: '🔥',
    desc: 'Una esfera de basalto volcánico que al partirse expone un lecho de amatistas ígneas al rojo vivo.',
    typingPrompt: 'El herrero Clint empleo su maza mas pesada para partir la corteza y descubrir cristales de azufre y cuarzo incandescente.',
    rewardG: 300
  },
  {
    id: 'star_shards',
    wing: 'minerals',
    name: 'Fragmentos de Estrella',
    icon: '⭐',
    desc: 'Polvo de meteorito condensado que cayó sobre la granja durante una noche de tormenta estival.',
    typingPrompt: 'Nadie sabe como cayeron al valle, pero estos trozos estrellados centellean con fulgor plateado al contacto con el aire nocturno.',
    rewardG: 400
  },
  {
    id: 'thunder_egg',
    wing: 'minerals',
    name: 'Huevo de Trueno Heliodoro',
    icon: '⚡',
    desc: 'Nódulo de ágata translúcida formado por burbujas de gas en lava riolítica hace eones.',
    typingPrompt: 'Las leyendas mineras afirman que estas esferas de agata absorben el estruendo de los rayos en la cima de la montana.',
    rewardG: 280
  },
  {
    id: 'ghost_crystal',
    wing: 'minerals',
    name: 'Cristal Espectral del Vacío',
    icon: '🔮',
    desc: 'Un mineral gélido e intangible que parece evaporarse si se mira directamente.',
    typingPrompt: 'Los chamanes enanos utilizaban este cuarzo transparente para comunicarse con las sombras pacíficas de las profundidades.',
    rewardG: 350
  },

  // --- ALA 3: RELIQUIAS & CURIOSIDADES ANTIGUAS ---
  {
    id: 'dwarf_scroll',
    wing: 'relics',
    name: 'Pergamino de los Enanos I',
    icon: '📜',
    desc: 'Manuscrito redactado en runas enanas doradas que relata la alianza de los mineros y los espíritus del bosque.',
    typingPrompt: 'Las runas doradas trazadas con tinta de calamar revelan tratados comerciales entre enanos y mercaderes del valle ancestral.',
    rewardG: 250
  },
  {
    id: 'ancient_doll',
    wing: 'relics',
    name: 'Muñeco Antiguo Hecho a Mano',
    icon: '🎎',
    desc: 'Pequeña figura de arcilla y paja encontrada enterrada junto al arroyo de la granja del abuelo.',
    typingPrompt: 'Este juguete rustico confeccionado con fibras de lino y arcilla roja pertenecio a los primeros colonos del bosque secreto.',
    rewardG: 220
  },
  {
    id: 'dwarvish_helm',
    wing: 'relics',
    name: 'Yelmo Enano de Batalla',
    icon: '🪖',
    desc: 'Casco de bronce forjado a mano con visera reforzada para excavar galerías subterráneas.',
    typingPrompt: 'A pesar del paso de los siglos, el metal conserva su temple y el grabado frontal que representa la llama eterna de la forja.',
    rewardG: 320
  },
  {
    id: 'golden_mask',
    wing: 'relics',
    name: 'Máscara Dorada Antigua',
    icon: '🎭',
    desc: 'Máscara ceremonial ceremonial de oro puro pulido con incrustaciones de lapislázuli.',
    typingPrompt: 'Los sacerdotes solares portaban esta mascara en los solsticios para bendecir las cosechas de maiz dulce y calabazas gigantes.',
    rewardG: 450
  },
  {
    id: 'rusty_key',
    wing: 'relics',
    name: 'Antigua Llave Oxidada',
    icon: '🗝️',
    desc: 'Llave pesada de hierro forjado que según Gunther abre el portón sellado de las cloacas de Krobus.',
    typingPrompt: 'El oxido ferroso recubre el paleton de esta llave centenaria que una vez resguardo los pasajes subterraneos del pueblo.',
    rewardG: 300
  },

  // --- ALA 4: CURIOSIDADES Y TESOROS DEL MAR ---
  {
    id: 'nautilus_fossil',
    wing: 'curios',
    name: 'Concha Náutilo Fosilizada',
    icon: '🐚',
    desc: 'Espiral áurea perfecta de una concha marina petrificada en roca sedimentaria marina.',
    typingPrompt: 'La proporcion matematica de la espiral calcarea demuestra la armonia geometrica de los moluscos que poblaron el golfo.',
    rewardG: 240
  },
  {
    id: 'anchor',
    wing: 'curios',
    name: 'Ancla del Galeón Sumergido',
    icon: '⚓',
    desc: 'Ancla de hierro rescatada del arrecife rocoso frente a la cabaña de pesca de Willy.',
    typingPrompt: 'Willy relato que esta ancla pertenecio a una fragata que transportaba especias orientales y naufrago en una noche brumosa.',
    rewardG: 320
  },
  {
    id: 'ancient_sword',
    wing: 'curios',
    name: 'Espada Oxidada Ancestral',
    icon: '⚔️',
    desc: 'Hoja de espada mellada que data de las antiguas disputas entre duendes y hombres del valle.',
    typingPrompt: 'El pomo de bronce y la hoja desgastada recuerdan epocas turbulentas antes de que la paz campestre reinara en Pelican Town.',
    rewardG: 270
  },
  {
    id: 'rare_disc',
    wing: 'curios',
    name: 'Disco Extraño Desconocido',
    icon: '📀',
    desc: 'Un disco de aleación misteriosa con ranuras concéntricas que reflejan luz violeta iridiscente.',
    typingPrompt: 'Ningun arqueologo ha podido descifrar la composicion de este disco metalico que parece levitar ligeramente sobre la mesa.',
    rewardG: 500
  },
  {
    id: 'golden_relic',
    wing: 'curios',
    name: 'Estatua del Pollo Dorado del Abuelo',
    icon: '👑',
    desc: 'La joya legendaria de la familia: un pollo tallado en oro macizo con corona de rubíes.',
    typingPrompt: 'El abuelo guardo este tesoro como simbolo de la perseverancia del granjero honesto que cultiva con amor y dedicacion.',
    rewardG: 700
  }
];

// Enrich artifacts with alias properties for complete compatibility
MUSEUM_ARTIFACTS.forEach(art => {
  art.wingId = art.wing;
  art.prompt = art.typingPrompt;
  art.goldReward = art.rewardG;
  if (!art.source) {
    if (art.wing === 'fossils') art.source = 'Fósil Paleontológico';
    else if (art.wing === 'minerals') art.source = 'Gemas y Mina';
    else if (art.wing === 'relics') art.source = 'Reliquia Antigua';
    else art.source = 'Tesoro de Costa';
  }
});

export const MUSEUM_MILESTONES = [
  { count: 5, name: 'Lupa de Arqueólogo', icon: '🔍', desc: 'Aumenta un 20% el oro obtenido en todas las actividades del valle.', rewardText: 'Aumenta un 20% el oro obtenido en todas las actividades del valle.' },
  { count: 10, name: 'Semilla Ancestral', icon: '🌱', desc: 'Desbloquea el prestigioso título de "Curador de Pelican Town".', rewardText: 'Desbloquea el prestigioso título de "Curador de Pelican Town".' },
  { count: 15, name: 'Estatua de Oso de Gunther', icon: '🧸', desc: 'Decoración emblemática de la biblioteca y +300 $g de recompensa.', rewardText: 'Decoración emblemática de la biblioteca y +300 $g de recompensa.' },
  { count: 20, name: 'Fruta Estelar del Museo (Stardrop)', icon: '🌟', desc: '¡Colección Completa! La máxima bendición del valle con 1000 $g y gloria eterna.', rewardText: '¡Colección Completa! La máxima bendición del valle con 1000 $g y gloria eterna.' }
];
