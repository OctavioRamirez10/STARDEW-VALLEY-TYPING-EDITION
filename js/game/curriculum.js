// Stardew Valley // Typing Valley - Master 100 Levels Curriculum
export const SECTOR_INFO = {
  "1": {
    "id": 1,
    "name": "Sector 1: Parcela del Abuelo",
    "icon": "🌱",
    "color": "#73b32a",
    "desc": "Posición base ASDF - JKLÑ, azada, semillas de chirivía y limpieza de maleza."
  },
  "2": {
    "id": 2,
    "name": "Sector 2: Huerto de Primavera & Pierre",
    "icon": "🍓",
    "color": "#e53935",
    "desc": "Fila superior QWERTYUIOP, fresas, patatas, coliflores y compras en la tienda de Pierre."
  },
  "3": {
    "id": 3,
    "name": "Sector 3: Las Minas de la Montaña",
    "icon": "⛏️",
    "color": "#8d6e63",
    "desc": "Fila inferior ZXCVBNM,.-, picos de minero, cobre, carbón, hierro y geodas."
  },
  "4": {
    "id": 4,
    "name": "Sector 4: La Playa de Willy & Pesca",
    "icon": "🎣",
    "color": "#29b6f6",
    "desc": "Shift de mano cruzada, mayúsculas, peces solares, carpas, cebos y cañas de bambú."
  },
  "5": {
    "id": 5,
    "name": "Sector 5: Rancho de Marnie & Animales",
    "icon": "🐔",
    "color": "#ffb300",
    "desc": "Acentos y signos dobles, vacas, gallinas, mayonesa dorada, queso y caricias diarias."
  },
  "6": {
    "id": 6,
    "name": "Sector 6: Centro Cívico & Lotes Junimo",
    "icon": "🌟",
    "color": "#ab47bc",
    "desc": "Fila numérica y monedas $g, lotes de la despensa, caldera, acuario y magia de los Junimos."
  },
  "7": {
    "id": 7,
    "name": "Sector 7: El Bosque Tizón & Torre del Mago",
    "icon": "🧙‍♂️",
    "color": "#5c6bc0",
    "desc": "Símbolos especiales (# $ % & * + = ~ ^), madera noble, pociones arcanas y hongos exóticos."
  },
  "8": {
    "id": 8,
    "name": "Sector 8: Feria del Pueblo & Festivales",
    "icon": "🥧",
    "color": "#fb8c00",
    "desc": "Exhibición del concurso de la feria, tarta de calabaza, sidra añejada y minijuegos del valle."
  },
  "9": {
    "id": 9,
    "name": "Sector 9: La Caverna Calavera del Desierto",
    "icon": "💀",
    "color": "#d81b60",
    "desc": "Autobús de Pam, bombas gigantes, momias, fragmentos prismáticos y mineral de iridio puro."
  },
  "10": {
    "id": 10,
    "name": "Sector 10: La Cumbre de la Verdadera Perfección",
    "icon": "👑",
    "color": "#ffd700",
    "desc": "El desafío supremo de 100% Perfección del Sr. Qi: velocidades de 80 a 120 WPM y 98% de precisión."
  }
};
export const SECTOR_CUTSCENES = {
  "1": {
    "speaker": "El Fantasma del Abuelo",
    "avatar": "👴",
    "quote": "Bienvenido a tu nueva vida, nieto mío... La tierra espera con paciencia. Siente los pequeños relieves en F y J y deja que tus dedos encuentren su hogar."
  },
  "2": {
    "speaker": "Pierre (Tendero)",
    "avatar": "🏪",
    "quote": "¡Hola vecino! La primavera ha llegado y la huerta pide semillas frescas de coliflor y fresas. ¡Cuida la fila superior de teclas!"
  },
  "3": {
    "speaker": "Clint (Herrero)",
    "avatar": "⛏️",
    "quote": "La montaña esconde vetas de cobre y carbón. Si tus dedos descienden a la fila inferior con firmeza, forjaremos herramientas de acero."
  },
  "4": {
    "speaker": "Willy (Pescador)",
    "avatar": "🎣",
    "quote": "¡Ahoy, marinero de agua dulce! La caña de pescar exige dominar la tecla Shift con ambas manos cruzadas. ¡Siente la calma del océano!"
  },
  "5": {
    "speaker": "Marnie (Granjera)",
    "avatar": "🐮",
    "quote": "Mis vacas y gallinas adoran que las trates con cariño y acentos bien colocados. ¡El queso de hoy será digno del gobernador!"
  },
  "6": {
    "speaker": "Espíritu Junimo",
    "avatar": "🌟",
    "quote": "¡Chirp chirp! Los lotes del Centro Cívico necesitan números exactos y monedas de oro. ¡Ayúdanos a devolverle la vida a Pelican Town!"
  },
  "7": {
    "speaker": "M. Rasmodius (El Mago)",
    "avatar": "🧙‍♂️",
    "quote": "Percibo una afinidad mágica con los símbolos arcanos en tus pulsaciones. El Bosque Tizón revelará sus misterios a quien domine corchetes y llaves."
  },
  "8": {
    "speaker": "Alcalde Lewis",
    "avatar": "🎩",
    "quote": "¡La feria anual está por inaugurarse! Todos esperan ver tu mejor expositor de calidad iridio. ¡Mantén la concentración campesina!"
  },
  "9": {
    "speaker": "El Señor Qi",
    "avatar": "🕶️",
    "quote": "La Caverna Calavera no perdona vacilaciones. Solo los granjeros con una velocidad de reacción pura sobre el teclado alcanzarán el piso cien."
  },
  "10": {
    "speaker": "Estatua de la Verdadera Perfección",
    "avatar": "👑",
    "quote": "Has recorrido cada sendero, cultivado cada fruto y ganado el corazón de cada aldeano. La cumbre te espera a 120 palabras por minuto."
  }
};
export const CURRICULUM = {
  "es": [
    {
      "id": 1,
      "sector": 1,
      "title": "Nivel 1: Las Marcas Táctiles (F y J)",
      "desc": "Encuentra las marcas de la azada con tus índices en F y J.",
      "keys": [
        "f",
        "j",
        " "
      ],
      "targetWpm": 18,
      "minAccuracy": 90,
      "timeLimit": 35,
      "content": "fff jjj fj fj jf jf fff jjj ffff jjjj fjfj jfjf f j f j ff jj fff jjj fj fj f j fj jf f j"
    },
    {
      "id": 2,
      "sector": 1,
      "title": "Nivel 2: Dedos Medios (D y K)",
      "desc": "Planta chirivías en D y K manteniendo los índices firmes.",
      "keys": [
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 20,
      "minAccuracy": 90,
      "timeLimit": 35,
      "content": "ddd kkk dkd kdk fdf jkj dk dk fd jk df kj ddd kkk fff jjj dfjk kjfd d k f j dkfj kfdj dk fd"
    },
    {
      "id": 3,
      "sector": 1,
      "title": "Nivel 3: Dedos Anulares (S y L)",
      "desc": "Riega las parcelas con los anulares en S y L sin torcer las muñecas.",
      "keys": [
        "s",
        "l",
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 22,
      "minAccuracy": 90,
      "timeLimit": 40,
      "content": "sss lll sls lsl sdf jkl asd lkj sss lll ddd kkk fff jjj sal las fas dal kas fjs ldk sl dk fj"
    },
    {
      "id": 4,
      "sector": 1,
      "title": "Nivel 4: Fila Guía Completa (A y Ñ)",
      "desc": "Los meñiques cuidan los bordes de la huerta en A y Ñ.",
      "keys": [
        "a",
        "ñ",
        "s",
        "l",
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 24,
      "minAccuracy": 91,
      "timeLimit": 40,
      "content": "aaa ñññ aña ñan asdf jklñ daña saña laña falla calla faja asdf jklñ la sal da la caña fa la da"
    },
    {
      "id": 5,
      "sector": 1,
      "title": "Nivel 5: Estiramiento Central (G y H)",
      "desc": "Los índices alcanzan el centro de la parcela: F a G y J a H.",
      "keys": [
        "g",
        "h",
        "f",
        "j",
        "a",
        "s",
        "d",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 26,
      "minAccuracy": 91,
      "timeLimit": 40,
      "content": "ggg hhh ghg hgh fgh jhg gas haz gala hala gafas hadas saga jaha fgh jklñ gas haz la hada gala"
    },
    {
      "id": 6,
      "sector": 1,
      "title": "Nivel 6: Limpieza de Maleza y Rocas",
      "desc": "Primeras palabras de la granja con la fila guía completa.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 28,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "el abuelo limpia la maleza con la azada y quita las piedras del huerto para sembrar"
    },
    {
      "id": 7,
      "sector": 1,
      "title": "Nivel 7: Primeras Semillas de Chirivía",
      "desc": "Siembra pastinacas y chirivías con ritmo constante y sereno.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 30,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "las chirivias crecen con el agua fresca del estanque bajo el sol de la huerta"
    },
    {
      "id": 8,
      "sector": 1,
      "title": "Nivel 8: El Regadío Matutino",
      "desc": "Llena la regadera en el estanque antes de que caiga el sol.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 32,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "regar los surcos con la regadera vieja cada manana temprano alegra la parcela"
    },
    {
      "id": 9,
      "sector": 1,
      "title": "Nivel 9: El Espantapájaros de Madera",
      "desc": "Protege los cultivos de los cuervos con buena colocación.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 34,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "el espantapajaros de madera vigila las chirivias para alejar a los cuervos negros"
    },
    {
      "id": 10,
      "sector": 1,
      "title": "Nivel 10: Fin de la Primera Jornada",
      "desc": "Cosecha tus primeras chirivías de calidad bronce en el valle.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 36,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "la primera cosecha de chirivias de la huerta del abuelo ya esta en el cajon de envios"
    },
    {
      "id": 11,
      "sector": 2,
      "title": "Nivel 11: Vocales Superiores (E e I)",
      "desc": "Sube los dedos medios desde la fila guía hacia E e I.",
      "keys": [
        "e",
        "i",
        "d",
        "k",
        " "
      ],
      "targetWpm": 36,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "semillas de coliflor y fresas dulces de primavera piden tierra fertil y riego diario"
    },
    {
      "id": 12,
      "sector": 2,
      "title": "Nivel 12: Índices Superiores (R y U)",
      "desc": "Estiramiento hacia R con índice izquierdo y hacia U con el derecho.",
      "keys": [
        "r",
        "u",
        "f",
        "j",
        " "
      ],
      "targetWpm": 37,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "pierre abre la tienda para vender abono puro y paquetes de semillas de patata"
    },
    {
      "id": 13,
      "sector": 2,
      "title": "Nivel 13: Centro Superior (T e Y)",
      "desc": "Extensión hacia T e Y: la tienda de Pierre abre temprano.",
      "keys": [
        "t",
        "y",
        "f",
        "j",
        " "
      ],
      "targetWpm": 38,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "la huerta de primavera tiene brotes verdes y fresas listas para cosechar en el valle"
    },
    {
      "id": 14,
      "sector": 2,
      "title": "Nivel 14: Anulares Superiores (W y O)",
      "desc": "Anular izquierdo a W y anular derecho a O para cosechar patatas.",
      "keys": [
        "w",
        "o",
        "s",
        "l",
        " "
      ],
      "targetWpm": 39,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "los canastos de madera rebosan de coliflores gigantes patatas de oro y flores silvestres"
    },
    {
      "id": 15,
      "sector": 2,
      "title": "Nivel 15: Meñiques Superiores (Q y P)",
      "desc": "Alcance de meñiques a Q y P: paquetes de semillas y primavera.",
      "keys": [
        "q",
        "p",
        "a",
        "ñ",
        " "
      ],
      "targetWpm": 40,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "ahorra paquetes de oro para comprar la mochila roja de treinta huecos de pierre"
    },
    {
      "id": 16,
      "sector": 2,
      "title": "Nivel 16: La Huerta de Fresas",
      "desc": "Las fresas son el cultivo estrella del Festival de los Huevos.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 41,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "el festival de los huevos trae las ansiadas semillas de fresas dulces para sembrar"
    },
    {
      "id": 17,
      "sector": 2,
      "title": "Nivel 17: Visita a la Tienda de Pierre",
      "desc": "Compra fertilizante de calidad y semillas de judías verdes.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 42,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "pierre ofrece fertilizante basico y abono de lujo para cosechas de calidad dorada"
    },
    {
      "id": 18,
      "sector": 2,
      "title": "Nivel 18: La Mochila de Treinta Huecos",
      "desc": "Ahorra oro para ampliar el inventario y llevar más herramientas.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 43,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "con dos mil monedas de oro amplias el zurron para llevar mas semillas y herramientas"
    },
    {
      "id": 19,
      "sector": 2,
      "title": "Nivel 19: Fertilizante Rápido de la Huerta",
      "desc": "Acelera el crecimiento de tus cosechas antes del cambio de estación.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 44,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "el abono rapido acelera el crecimiento de los cultivos antes del cambio de estacion"
    },
    {
      "id": 20,
      "sector": 2,
      "title": "Nivel 20: Cosecha Dorada de Primavera",
      "desc": "Cestas llenas de coliflores gigantes y fresas de calidad oro.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 45,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "el aroma a tierra mojada y fresas dulces llena el valle en el vigesimo octavo dia"
    },
    {
      "id": 21,
      "sector": 3,
      "title": "Nivel 21: Índices Inferiores (V y M)",
      "desc": "Baja los índices a V y M para descender a las profundidades de la mina.",
      "keys": [
        "v",
        "m",
        "f",
        "j",
        " "
      ],
      "targetWpm": 45,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "veta de cobre mina profunda vagoneta de metal maza de clint y moho en la cueva oscura"
    },
    {
      "id": 22,
      "sector": 3,
      "title": "Nivel 22: Medios Inferiores (C y Coma)",
      "desc": "Dedo medio izquierdo a C y derecho a coma para picar rocas.",
      "keys": [
        "c",
        ",",
        "d",
        "k",
        " "
      ],
      "targetWpm": 46,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "cobre, roca, cueva, pico, carbon, veta, geoda, hierro, mineral, camino subterraneo,"
    },
    {
      "id": 23,
      "sector": 3,
      "title": "Nivel 23: Anulares Inferiores (X y Punto)",
      "desc": "Anulares en X y punto para excavar gemas y geodas.",
      "keys": [
        "x",
        ".",
        "s",
        "l",
        " "
      ],
      "targetWpm": 47,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "cuarzo. geoda. mina. gema. polvo. mineral. hierro. cobre. jade. pico de minero."
    },
    {
      "id": 24,
      "sector": 3,
      "title": "Nivel 24: Meñiques Inferiores (Z y Guion)",
      "desc": "Meñiques en Z y guion para encender antorchas en la penumbra.",
      "keys": [
        "z",
        "-",
        "a",
        "ñ",
        " "
      ],
      "targetWpm": 48,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "zarza en la entrada pozo -pico -mina luz de antorcha veta azul raiz gema de cuarzo diez rocas"
    },
    {
      "id": 25,
      "sector": 3,
      "title": "Nivel 25: Índices Centrales Inferiores (B y N)",
      "desc": "Estiramiento hacia B y N: lingotes de cobre y carbón oscuro.",
      "keys": [
        "b",
        "n",
        "f",
        "j",
        " "
      ],
      "targetWpm": 49,
      "minAccuracy": 94,
      "timeLimit": 45,
      "content": "barro carbon nabo mineral cobre hierro lingote brillante vagoneta mina profunda buey"
    },
    {
      "id": 26,
      "sector": 3,
      "title": "Nivel 26: El Ascensor Minero",
      "desc": "El ascensor minero guarda tu progreso cada cinco niveles subterráneos.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 50,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "el ascensor de la montana guarda el progreso cada cinco pisos entre pozas de agua y antorchas"
    },
    {
      "id": 27,
      "sector": 3,
      "title": "Nivel 27: Murciélagos y Cangrejos de Roca",
      "desc": "Blande tu espada oxidada con reflejos ágiles ante los monstruos.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 51,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "rompe las piedras redondas con cuidado, un cangrejo de roca podria esconderse bajo el caparazon"
    },
    {
      "id": 28,
      "sector": 3,
      "title": "Nivel 28: La Herrería de Clint",
      "desc": "Abre geodas en el yunque de Clint para descubrir amatistas y jade.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 52,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "clint rompe cada geoda en su yunque por veinticinco monedas de oro, revelando gemas raras"
    },
    {
      "id": 29,
      "sector": 3,
      "title": "Nivel 29: El Horno de Fundición",
      "desc": "Quema carbón para fundir menas de hierro y lingotes relucientes.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 53,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "cinco menas de cobre y una unidad de carbon forman un lingote anaranjado en el horno de piedra"
    },
    {
      "id": 30,
      "sector": 3,
      "title": "Nivel 30: El Piso Ochenta de Magma",
      "desc": "El calor volcánico forja los mejores minerales de oro del valle.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 54,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "las pozas de lava burbujean en el fondo de la montana mientras los murcielagos de fuego acechan"
    },
    {
      "id": 31,
      "sector": 4,
      "title": "Nivel 31: Mayúsculas con Mano Cruzada",
      "desc": "Si escribes una letra con la mano izquierda, pulsa Shift con el meñique derecho.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "A",
        "Z"
      ],
      "targetWpm": 54,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Willy Playa Mar Oceano Muelle Pescador Cana Cebo Anzuelo Trucha Lubina Mareas Redes Bagre"
    },
    {
      "id": 32,
      "sector": 4,
      "title": "Nivel 32: Nombres Propios de Pelican Town",
      "desc": "Escribe con mayúsculas los nombres de los aldeanos de Stardew Valley.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "P",
        "L"
      ],
      "targetWpm": 55,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Robin, Demetrius, Maru, Sebastian, Linus, Pierre, Caroline, Abigail, Alex, Evelyn."
    },
    {
      "id": 33,
      "sector": 4,
      "title": "Nivel 33: La Caña de Bambú de Willy",
      "desc": "Lanza el anzuelo con el meñique en Shift para atrapar carpas de río.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 56,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Willy contempla las olas desde su muelle y te regala una Cana de Bambu con carino sincero."
    },
    {
      "id": 34,
      "sector": 4,
      "title": "Nivel 34: Peces Soles y Bagres de Río",
      "desc": "Los días lluviosos son perfectos para buscar al escurridizo Bagre.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 57,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "En los dias de lluvia y tormenta, los enormes Bagres plateados pican en el Rio del valle."
    },
    {
      "id": 35,
      "sector": 4,
      "title": "Nivel 35: Trampas para Cangrejos en el Muelle",
      "desc": "Coloca nasas con cebo para capturar almejas, berberechos y langostas.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 58,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Las Nasas para Cangrejos en los pontones del oceano flotan capturando langostas y almejas."
    },
    {
      "id": 36,
      "sector": 4,
      "title": "Nivel 36: El Mercado Nocturno de Invierno",
      "desc": "El submarino verde se sumerge en las profundidades abisales.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 59,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "El Submarino del Mercado Nocturno desciende en la oscuridad abisal para pescar rarezas marinas."
    },
    {
      "id": 37,
      "sector": 4,
      "title": "Nivel 37: La Caña de Iridio",
      "desc": "Equipa anzuelos giratorios y cebo silvestre para lanzamientos perfectos.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 60,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "La Cana de Iridio vendida por Willy permite enganchar plomos pesados para calmar a los peces rebeldes."
    },
    {
      "id": 38,
      "sector": 4,
      "title": "Nivel 38: Leyendas del Océano",
      "desc": "Atrapa al mítico Pez Carmesí en la poza este de la playa.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 61,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Solo los pescadores que dominan la calma del sedal logran capturar al Pez Carmesi sin romper el hilo."
    },
    {
      "id": 39,
      "sector": 4,
      "title": "Nivel 39: El Amuleto de la Sirena",
      "desc": "En los días de lluvia el viejo marinero aparece en el acantilado.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 62,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Bajo la lluvia del acantilado, el Viejo Marinero ofrece el mitico Colgante de Sirena por cinco mil monedas."
    },
    {
      "id": 40,
      "sector": 4,
      "title": "Nivel 40: Pescador Maestro del Valle",
      "desc": "Completaste la colección completa de peces del libro de recuerdos.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 63,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "El brillo plateado del agua despide a Willy mientras contemplas el horizonte azul desde el muelle."
    },
    {
      "id": 41,
      "sector": 5,
      "title": "Nivel 41: Vocales con Acento en la Granja",
      "desc": "Pulsación de tecla de acento antes de la vocal: gallinas y establos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 63,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "la vaca dio leche fresca, la gallina comió grano, el pato nadó en el estanque, nació un ternero"
    },
    {
      "id": 42,
      "sector": 5,
      "title": "Nivel 42: Signos de Exclamación e Interrogación",
      "desc": "¡Acaricia a tus animales cada mañana para subir sus corazones!",
      "keys": [
        "¿",
        "?",
        "¡",
        "!"
      ],
      "targetWpm": 64,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "¡Acaricia a tus animales cada mañana! ¿Escuchaste al gallo cantar al amanecer en el rancho de Marnie?"
    },
    {
      "id": 43,
      "sector": 5,
      "title": "Nivel 43: Comillas y Dos Puntos en la Quesería",
      "desc": "Marnie te explica: 'El queso curado tiene un sabor inigualable'.",
      "keys": [
        "\"",
        ":",
        ";"
      ],
      "targetWpm": 65,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Marnie dijo: \"Un animal bien alimentado con heno siempre da productos de calidad oro para la quesería\"."
    },
    {
      "id": 44,
      "sector": 5,
      "title": "Nivel 44: Las Gallinas Azules de Shane",
      "desc": "Conoce a las raras gallinas de plumaje azul que nacen con cariño.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "¡",
        "!",
        "¿",
        "?"
      ],
      "targetWpm": 66,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "¡Qué sorpresa tan hermosa! ¿Sabías que Shane cría gallinas azules cuando alcanzas ocho corazones con él?"
    },
    {
      "id": 45,
      "sector": 5,
      "title": "Nivel 45: Mayonesa de Huevo de Pato",
      "desc": "Coloca huevos grandes en la máquina de mayonesa para obtener frascos dorados.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 67,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "La mayonesa de pato se vende a un precio fantastico en el cajon de envios que el abuelo dejo en la granja."
    },
    {
      "id": 46,
      "sector": 5,
      "title": "Nivel 46: Las Trufas de los Cerdos",
      "desc": "Los cerdos excavan trufas aromáticas en el pasto durante el otoño.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 68,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Durante los dias soleados de otono, los cerdos buscan trufas frescas bajo la sombra de los robles centenarios."
    },
    {
      "id": 47,
      "sector": 5,
      "title": "Nivel 47: El Granero de Lujo de Robin",
      "desc": "Robin amplía el establo con sistema de alimentación automática de heno.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 69,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "El sistema automatico distribuye el heno en los comederos; ¡los animales duermen calidos en el establo!"
    },
    {
      "id": 48,
      "sector": 5,
      "title": "Nivel 48: Lana Suave y Telares Artesanales",
      "desc": "Esquila a las ovejas para hilar ovillos de lana en el telar de madera.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 70,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Las tijeras cortan suavemente la lana blanca de las ovejas; el telar mecanico produce rollos de tela fina."
    },
    {
      "id": 49,
      "sector": 5,
      "title": "Nivel 49: El Aceite de Trufa Dorado",
      "desc": "Procesa las trufas en la aceitera para multiplicar las ganancias del rancho.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 71,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "¡El aceite de trufa artesanal es codiciado por los chefs del meson y por el alcalde Lewis para sus recetas!"
    },
    {
      "id": 50,
      "sector": 5,
      "title": "Nivel 50: Amigo de los Animales del Valle",
      "desc": "Todos los animales de la granja tienen cinco corazones completos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 72,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Las vacas mugen contentas, las cabras balan en el corral y los gatos ronronean bajo el alero de la cabana."
    },
    {
      "id": 51,
      "sector": 6,
      "title": "Nivel 51: Fila Numérica Izquierda (1, 2, 3, 4, 5)",
      "desc": "Dígitos de la mano izquierda: oro en el monedero y cantidades de lotes.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "targetWpm": 72,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "123 chirivias, 451 patatas, 234 coliflores, 512 fresas y 345 judias para los lotes de los Junimos."
    },
    {
      "id": 52,
      "sector": 6,
      "title": "Nivel 52: Fila Numérica Derecha (6, 7, 8, 9, 0)",
      "desc": "Dígitos de la mano derecha: precios de semillas y materiales.",
      "keys": [
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 73,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "678 menas de cobre, 890 de hierro, 789 de oro y 600 maderas nobles para reconstruir el centro civico."
    },
    {
      "id": 53,
      "sector": 6,
      "title": "Nivel 53: Monedero de Oro ($g)",
      "desc": "Escribe precios exactos de Stardew Valley con el símbolo de oro.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 74,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "150$g en semillas, 500$g en abono, 2500$g para las vagonetas y 42500$g para reparar el autobus de Pam."
    },
    {
      "id": 54,
      "sector": 6,
      "title": "Nivel 54: Lote de la Despensa",
      "desc": "Donaciones de chirivías, judías, coliflores y patatas a los pequeños espíritus.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 75,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "El Lote de Primavera requiere 1 chirivia, 1 judia verde, 1 coliflor y 1 patata de calidad estandar."
    },
    {
      "id": 55,
      "sector": 6,
      "title": "Nivel 55: Lote de la Caldera",
      "desc": "99 piedras, 1 lingote de cobre, 1 lingote de hierro y 1 lingote de oro.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 76,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Al reparar la Sala de Calderas con 99 piedras y 3 lingotes, las vagonetas mineras vuelven a funcionar."
    },
    {
      "id": 56,
      "sector": 6,
      "title": "Nivel 56: Lote del Acuario de Peces",
      "desc": "El río, el lago de la montaña y el océano se unen para restaurar el estanque.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 77,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Los Junimos celebran danzando con 1 carpa, 1 bagre, 1 besugo, 1 pez sol y 1 esturion plateado del lago."
    },
    {
      "id": 57,
      "sector": 6,
      "title": "Nivel 57: Lote de la Caja Fuerte",
      "desc": "Dona 2500$g, 5000$g, 10000$g y 25000$g para reparar el autobús de Pam.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 78,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "La donacion total de 42500$g permite reparar el motor del viejo autobus que viaja al desierto de Calico."
    },
    {
      "id": 58,
      "sector": 6,
      "title": "Nivel 58: El Tablón de Anuncios",
      "desc": "Favores especiales para los vecinos: mermelada, vino y flores silvestres.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 79,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Completar el Tablon de Anuncios con mermelada y flores otorga 500 puntos de amistad con todos los aldeanos."
    },
    {
      "id": 59,
      "sector": 6,
      "title": "Nivel 59: La Danza de los Junimos",
      "desc": "Los pequeños espíritus del bosque saltan con estrellas mágicas en sus cabezas.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 80,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Cada noche los Junimos colocan una estrella dorada en la chimenea; la madera cobra vida con cantos magicos."
    },
    {
      "id": 60,
      "sector": 6,
      "title": "Nivel 60: ¡Centro Cívico Restaurado!",
      "desc": "El pueblo expulsa a JojaMart y recupera el corazón histórico del valle.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 81,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "El alcalde Lewis coloca la placa conmemorativa mientras todo Pelican Town celebra la derrota de JojaMart."
    },
    {
      "id": 61,
      "sector": 7,
      "title": "Nivel 61: Símbolos Mágicos del Mago M. Rasmodius",
      "desc": "Signos matemáticos y arcanos del libro de conjuros botánicos.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 81,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "#mago $oro %esencia &bosque *junimo +pocion =conjuro ~portal #runa *estrella $gema &valle"
    },
    {
      "id": 62,
      "sector": 7,
      "title": "Nivel 62: Llaves y Corchetes de Alquimia",
      "desc": "El Mago prepara el brebaje del bosque en su caldero burbujeante.",
      "keys": [
        "{",
        "}",
        "[",
        "]",
        "<",
        ">"
      ],
      "targetWpm": 82,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "pocion[raiz_mandragora + hongo_purpura]; caldero<magia_ancestral> = despertar_espiritus_junimo;"
    },
    {
      "id": 63,
      "sector": 7,
      "title": "Nivel 63: El Bosque Secreto y la Madera Noble",
      "desc": "Tala los tocones de madera noble que renacen cada nuevo día.",
      "keys": [
        "/",
        "\\",
        "|",
        "_"
      ],
      "targetWpm": 83,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "madera_noble/bosque_secreto | tocones_diarios = 12_piezas + hacha_de_acero_requerida;"
    },
    {
      "id": 64,
      "sector": 7,
      "title": "Nivel 64: La Cabaña de la Bruja en el Pantano",
      "desc": "Cruza el portal oscuro con la tinta mágica que el mago perdió.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 84,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "#tinta_magica + #esencia_vacio = acceso_pantano_bruja; sirviente_goblin.recibir('mayonesa_vacio');"
    },
    {
      "id": 65,
      "sector": 7,
      "title": "Nivel 65: Los Obeliscos Elementales del Mago",
      "desc": "El Mago construye torres de teletransporte instantáneo en tu granja.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 85,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "obelisco_agua = 1000000$g + 5_conchas; obelisco_tierra = 10_geodas_magma + 10_lingotes_iridio;"
    },
    {
      "id": 66,
      "sector": 7,
      "title": "Nivel 66: La Choza del Junimo Cosechador",
      "desc": "Los Junimos recolectan automáticamente tus hortalizas y flores.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 86,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "choza_junimo{radio: 'parcela_17x17', animo: 100%}; espiritus_recolectan_cosechas_automaticas = true;"
    },
    {
      "id": 67,
      "sector": 7,
      "title": "Nivel 67: La Estatua del Viejo Cannoli",
      "desc": "Entrega una baya de gema dulce al viejo maestro Cannoli.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 87,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "maestro_cannoli.ofrecer('baya_gema_dulce') -> '¡El sabor mas dulce de todos!' -> fruta_estelar;"
    },
    {
      "id": 68,
      "sector": 7,
      "title": "Nivel 68: El Gran Reloj Dorado de la Granja",
      "desc": "Diez millones de monedas para detener la aparición de maleza para siempre.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 88,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "reloj_dorado = 10000000$g; proteccion_granja{maleza: 0, escombros: 0, tiempo_detenido: true};"
    },
    {
      "id": 69,
      "sector": 7,
      "title": "Nivel 69: El Altar de las Ilusiones",
      "desc": "Cambia tu apariencia, ropa y peinado en el sótano del mago.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 89,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "altar_de_las_ilusiones.cambiar_apariencia({peinado: 'campesino', camisa: 'verde_hoja', sombrero: 'paja'});"
    },
    {
      "id": 70,
      "sector": 7,
      "title": "Nivel 70: La Alianza de los Arcanos del Bosque",
      "desc": "El valle y la magia del bosque viven en armoniosa prosperidad.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 90,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "la_magia_ancestral_de_rasmodius_y_los_junimos_bendice_la_tierra_del_valle_para_siempre;"
    },
    {
      "id": 71,
      "sector": 8,
      "title": "Nivel 71: El Concurso de Exhibición de Otoño",
      "desc": "Elige nueve artículos de calidad iridio para ganar el primer premio.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 90,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "La Feria de Stardew Valley abre el decimosexto dia de otono con musica campestre y puestos coloridos."
    },
    {
      "id": 72,
      "sector": 8,
      "title": "Nivel 72: Los Nueve Objetos de Calidad Iridio",
      "desc": "Vino añejado, queso de cabra, pez legendario y tarta casera.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 91,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "El alcalde Lewis evalua con lupa cada categoria: agricultura, pesca, mineria, artesania y cocina tradicional."
    },
    {
      "id": 73,
      "sector": 8,
      "title": "Nivel 73: La Rueda de la Fortuna",
      "desc": "Apuesta fichas estelares al verde o al naranja con prudencia.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 92,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "La rueda gira entre vitores mientras ganas suficientes fichas estelares para adquirir el mitico Stardrop."
    },
    {
      "id": 74,
      "sector": 8,
      "title": "Nivel 74: El Festival del Hielo de Invierno",
      "desc": "Compite contra Willy en el concurso de pesca sobre el lago congelado.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 93,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Corta un agujero circular en la capa de hielo y saca cinco truchas alpinas antes de que suene la campana."
    },
    {
      "id": 75,
      "sector": 8,
      "title": "Nivel 75: La Danza de las Medusas Lunares",
      "desc": "El último día del verano el océano se ilumina con medusas esmeralda.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 94,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Los farolillos de madera flotan en la orilla del muelle mientras las medusas fosforescentes bailan en el mar."
    },
    {
      "id": 76,
      "sector": 8,
      "title": "Nivel 76: La Fiesta de la Estrella Invernal",
      "desc": "Intercambia regalos secretos con el vecino que te ha tocado en suerte.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 95,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Bajo el arbol de pino iluminado, entregas una gema de amatista brillante que emociona a tu amigo secreto."
    },
    {
      "id": 77,
      "sector": 8,
      "title": "Nivel 77: El Banquete del Luau de Verano",
      "desc": "Añade un ingrediente de calidad iridio a la sopa comunitaria del Gobernador.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 96,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "El Gobernador saborea la cuchara con deleite: '¡Es la sopa mas deliciosa y aromatica que he probado jamas!'"
    },
    {
      "id": 78,
      "sector": 8,
      "title": "Nivel 78: El Laberinto Embrujado de la Víspera",
      "desc": "Encuentra la calabaza de oro escondida al final de los túneles tenebrosos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 97,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Esquiva las aranas de peluche y las manos de piedra hasta abrir el cofre que custodia la calabaza dorada."
    },
    {
      "id": 79,
      "sector": 8,
      "title": "Nivel 79: La Torta de Fruta Estelar",
      "desc": "La pastelería de Gus perfuma la taberna con recetas de cinco estrellas.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 98,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Cada porcion horneada con mantequilla fresca y moras silvestres restaura toda la energia del agricultor."
    },
    {
      "id": 80,
      "sector": 8,
      "title": "Nivel 80: Campeón Invicto de la Feria",
      "desc": "El alcalde Lewis te hace entrega del trofeo de honor del valle.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 99,
      "minAccuracy": 98,
      "timeLimit": 50,
      "content": "Con una puntuacion perfecta de ciento veinticinco puntos, tu expositor campestre queda grabado en la historia."
    },
    {
      "id": 81,
      "sector": 9,
      "title": "Nivel 81: El Desierto de Calico",
      "desc": "El autobús de Pam cruza las montañas rocosas hacia el calor del desierto.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "!",
        "?",
        ".",
        ",",
        "-"
      ],
      "targetWpm": 100,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "¡El desierto brilla bajo el sol ardiente! La Caverna Calavera abre sus fauces con peligros insospechados."
    },
    {
      "id": 82,
      "sector": 9,
      "title": "Nivel 82: Bombas y Megabombas de Iridio",
      "desc": "Detona conjuntos de rocas para descubrir agujeros y escaleras rápidas.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "targetWpm": 102,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Coloca 1 megabomba, corre 6 pasos atras, ¡BOOM! El agujero conduce 8 pisos mas abajo en caida libre."
    },
    {
      "id": 83,
      "sector": 9,
      "title": "Nivel 83: Las Momias y las Serpientes Reales",
      "desc": "Vence a las momias de tela con fuego y espada galáctica.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 104,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Las serpientes de iridio vuelan sobre las rocas; la Espada Galactica repele sus ataques feroces."
    },
    {
      "id": 84,
      "sector": 9,
      "title": "Nivel 84: El Piso Cien del Sr. Qi",
      "desc": "Llega al piso 100 sin usar más de diez escaleras de piedra.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 106,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "El Sr. Qi te espera con un vaso de leche de serpiente de iridio que aumenta permanentemente tu vitalidad."
    },
    {
      "id": 85,
      "sector": 9,
      "title": "Nivel 85: Los Fragmentos Prismáticos",
      "desc": "La gema más valiosa y misteriosa que refracta todos los colores del arcoíris.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 108,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Un Fragmento Prismatico brilla en tus manos; colocalo entre los tres pilares para despertar la Espada Galactica."
    },
    {
      "id": 86,
      "sector": 9,
      "title": "Nivel 86: Vetras Púrpuras de Iridio Puro",
      "desc": "Funde lingotes púrpuras para construir aspersores de iridio.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 110,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Los aspersores de iridio riegan veinticuatro parcelas automaticamente cada manana sin gastar energia."
    },
    {
      "id": 87,
      "sector": 9,
      "title": "Nivel 87: La Sala de Nueces de la Isla Jengibre",
      "desc": "Willy repara su barco pesquero para zarpar hacia el archipiélago tropical.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 112,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "El velero cruza las olas del sur hasta atracar en la orilla de Isla Jengibre, hogar de aves exoticas y volcanes."
    },
    {
      "id": 88,
      "sector": 9,
      "title": "Nivel 88: La Fruta Estelar del Desierto",
      "desc": "Tu mente se llena con el recuerdo de tu cosa favorita al morder el fruto.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 114,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "¡El sabor celestial de la Fruta Estelar te otorga una fuerza incansable y una serenidad indestructible!"
    },
    {
      "id": 89,
      "sector": 9,
      "title": "Nivel 89: Desafío de Qi: Menas Peligrosas",
      "desc": "Desciende por la caverna infestada con modificadores de dificultad extrema.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 116,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "Las criaturas radiactivas acechan en cada esquina; cada palabra tecleada con precision salva tu inventario."
    },
    {
      "id": 90,
      "sector": 9,
      "title": "Nivel 90: Conquistador de la Caverna Calavera",
      "desc": "Ningún piso subterráneo guarda secretos ante tu teclado.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 118,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "Sales a la superficie del desierto al amanecer con los bolsillos colmados de lingotes de iridio y gemas estelares."
    },
    {
      "id": 91,
      "sector": 10,
      "title": "Nivel 91: Gauntlet: La Huella del Abuelo",
      "desc": "Cuatro velas encendidas en el santuario del abuelo al comenzar el año tres.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 100,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Las cuatro velas del santuario arden iluminando el espiritu del abuelo que bendice tu labor campesina."
    },
    {
      "id": 92,
      "sector": 10,
      "title": "Nivel 92: Gauntlet: Amistad con Toda la Aldea",
      "desc": "Diez corazones con cada habitante de Pelican Town.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 102,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Desde Linus en su carpa hasta el viejo George en su sillon, cada vecino de Pelican Town te guarda afecto sincero."
    },
    {
      "id": 93,
      "sector": 10,
      "title": "Nivel 93: Gauntlet: Todas las Recetas de Cocina",
      "desc": "Cien platos preparados en la cocina de azulejos de tu hogar.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 104,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Sopa de trufa, tarta de chocolate, guiso de calamar y carpa crujiente; tu recetario no tiene paginas en blanco."
    },
    {
      "id": 94,
      "sector": 10,
      "title": "Nivel 94: Gauntlet: Todos los Peces Legendarios",
      "desc": "La leyenda de los cinco reyes del agua completada con maestría.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 106,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "La Leyenda, el Pez Carmesi, el Rape, el Glaciar y la Carpa Mutante descansan documentados en tu registro marino."
    },
    {
      "id": 95,
      "sector": 10,
      "title": "Nivel 95: Gauntlet: Museo de Gunther Completo",
      "desc": "Noventa y cinco minerales y artefactos arqueológicos catalogados.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 108,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Gunther custodia tus noventa y cinco donaciones en el museo y te entrega la llave de las cloacas con honor."
    },
    {
      "id": 96,
      "sector": 10,
      "title": "Nivel 96: Gauntlet: La Granja de los Diez Millones",
      "desc": "Campos automáticos, bodegas añejadas y molinos de viento dorados.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 110,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Las ganancias de tu esfuerzo fluyen como un manantial inagotable que nutre cada rincon de la comunidad del valle."
    },
    {
      "id": 97,
      "sector": 10,
      "title": "Nivel 97: Gauntlet: Las Cien Nueces Doradas",
      "desc": "Descubriste todos los enigmas de la jungla y el templo del volcán.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 112,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "El loro de Leo bate sus alas esmeralda mientras la puerta de nogal del Sr. Qi se abre de par en par con reverencia."
    },
    {
      "id": 98,
      "sector": 10,
      "title": "Nivel 98: Gauntlet: La Estatua de la Perfección",
      "desc": "Estatua de iridio que regala minerales preciosos cada nueva mañana.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 115,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "La escultura purpura resplandece en el porche de tu cabana como testimonio vivo de constancia y dedicacion suprema."
    },
    {
      "id": 99,
      "sector": 10,
      "title": "Nivel 99: El Sendero a la Cumbre",
      "desc": "La gran roca que bloqueaba las montañas se desvanece en polvo dorado.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 118,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Subes por el sendero rocoso donde las nubes se abren al horizonte; el valle entero descansa en paz bajo tus ojos."
    },
    {
      "id": 100,
      "sector": 10,
      "title": "Nivel 100: Leyenda Absoluta de Stardew Valley",
      "desc": "La prueba definitiva a 120 WPM y 98% de precisión: ¡El Valle te aclama!",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 120,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "En la cumbre de las montanas, rodeado por quienes amas y bajo el vuelo de las aves del cielo, te coronas como la Verdadera Leyenda Eterna de Stardew Valley. Tu nombre vivira por siempre en el corazon de esta tierra."
    }
  ],
  "en": [
    {
      "id": 1,
      "sector": 1,
      "title": "Level 1: Homing Marks (F and J)",
      "desc": "Feel the wooden hoe marks with your index fingers on F and J.",
      "keys": [
        "f",
        "j",
        " "
      ],
      "targetWpm": 18,
      "minAccuracy": 90,
      "timeLimit": 35,
      "content": "fff jjj fj fj jf jf fff jjj ffff jjjj fjfj jfjf f j f j ff jj fff jjj fj fj f j fj jf f j"
    },
    {
      "id": 2,
      "sector": 1,
      "title": "Level 2: Middle Fingers (D and K)",
      "desc": "Plant spring parsnip seeds using D and K with steady wrists.",
      "keys": [
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 20,
      "minAccuracy": 90,
      "timeLimit": 35,
      "content": "ddd kkk dkd kdk fdf jkj dk dk fd jk df kj ddd kkk fff jjj dfjk kjfd d k f j dkfj kfdj dk fd"
    },
    {
      "id": 3,
      "sector": 1,
      "title": "Level 3: Ring Fingers (S and L)",
      "desc": "Water the soil furrows with ring fingers on S and L smoothly.",
      "keys": [
        "s",
        "l",
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 22,
      "minAccuracy": 90,
      "timeLimit": 40,
      "content": "sss lll sls lsl sdf jkl asd lkj sss lll ddd kkk fff jjj sal las fas dal kas fjs ldk sl dk fj"
    },
    {
      "id": 4,
      "sector": 1,
      "title": "Level 4: Full Home Row (A and ;)",
      "desc": "Pinky fingers guard the garden edges across the home row.",
      "keys": [
        "a",
        "ñ",
        "s",
        "l",
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 24,
      "minAccuracy": 91,
      "timeLimit": 40,
      "content": "aaa ñññ aña ñan asdf jklñ daña saña laña falla calla faja asdf jklñ la sal da la caña fa la da"
    },
    {
      "id": 5,
      "sector": 1,
      "title": "Level 5: Center Reach (G and H)",
      "desc": "Index fingers reach the center of the field from F to G and J to H.",
      "keys": [
        "g",
        "h",
        "f",
        "j",
        "a",
        "s",
        "d",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 26,
      "minAccuracy": 91,
      "timeLimit": 40,
      "content": "ggg hhh ghg hgh fgh jhg gas haz gala hala gafas hadas saga jaha fgh jklñ gas haz la hada gala"
    },
    {
      "id": 6,
      "sector": 1,
      "title": "Level 6: Clearing Debris and Stones",
      "desc": "First farm vocabulary with the complete home row.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 28,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "grandpa clears weeds and rocks with the rusty hoe to plant fresh spring parsnips"
    },
    {
      "id": 7,
      "sector": 1,
      "title": "Level 7: First Parsnip Seeds",
      "desc": "Sow parsnips with a calm steady rhythm across the tilled soil.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 30,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "the tiny parsnip sprouts drink cool spring well water under the morning sunlight"
    },
    {
      "id": 8,
      "sector": 1,
      "title": "Level 8: The Morning Watering",
      "desc": "Fill the copper watering can at the farm pond before noon.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 32,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "watering crops every morning before noon keeps the soil dark moist and fertile"
    },
    {
      "id": 9,
      "sector": 1,
      "title": "Level 9: The Wooden Scarecrow",
      "desc": "Keep pesky black crows away from your precious crops.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 34,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "the wooden scarecrow stands tall over the crop field keeping pesky black crows away"
    },
    {
      "id": 10,
      "sector": 1,
      "title": "Level 10: End of the First Day",
      "desc": "Harvest your first bronze quality parsnips in the valley.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 36,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "your first harvest of golden parsnips is packed safe inside the wooden shipping bin"
    },
    {
      "id": 11,
      "sector": 2,
      "title": "Level 11: Upper Vowels (E and I)",
      "desc": "Reach up with middle fingers from home row to E and I.",
      "keys": [
        "e",
        "i",
        "d",
        "k",
        " "
      ],
      "targetWpm": 36,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "seeds of sweet strawberries and cauliflower need rich soil compost and daily water"
    },
    {
      "id": 12,
      "sector": 2,
      "title": "Level 12: Upper Index (R and U)",
      "desc": "Stretch left index to R and right index to U for potato seeds.",
      "keys": [
        "r",
        "u",
        "f",
        "j",
        " "
      ],
      "targetWpm": 37,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "pierre opens his store selling fresh potato seeds organic fertilizer and farm tools"
    },
    {
      "id": 13,
      "sector": 2,
      "title": "Level 13: Upper Center (T and Y)",
      "desc": "Extend fingers to T and Y as Pierre shop opens early.",
      "keys": [
        "t",
        "y",
        "f",
        "j",
        " "
      ],
      "targetWpm": 38,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "tender green sprouts and sweet berry bushes fill the sunny valley fields with joy"
    },
    {
      "id": 14,
      "sector": 2,
      "title": "Level 14: Upper Ring (W and O)",
      "desc": "Reach W with left ring and O with right ring for giant crops.",
      "keys": [
        "w",
        "o",
        "s",
        "l",
        " "
      ],
      "targetWpm": 39,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "wooden crates overflow with giant cauliflower heads golden potatoes and wild leeks"
    },
    {
      "id": 15,
      "sector": 2,
      "title": "Level 15: Upper Pinky (Q and P)",
      "desc": "Reach pinkies to Q and P for seed packets and spring sunshine.",
      "keys": [
        "q",
        "p",
        "a",
        "ñ",
        " "
      ],
      "targetWpm": 40,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "save your gold coins to buy the thirty slot red backpack from pierre general store"
    },
    {
      "id": 16,
      "sector": 2,
      "title": "Level 16: The Strawberry Patch",
      "desc": "Strawberries are the star crop of the annual Egg Festival.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 41,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "the egg festival brings prized strawberry seeds that yield multiple harvest cycles"
    },
    {
      "id": 17,
      "sector": 2,
      "title": "Level 17: Visiting Pierre Store",
      "desc": "Buy quality soil fertilizer and climbing pole bean seeds.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 42,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "pierre offers basic fertilizer and quality soil enhancers for star quality crops"
    },
    {
      "id": 18,
      "sector": 2,
      "title": "Level 18: The Thirty Slot Backpack",
      "desc": "Save gold to expand inventory space and carry more tools.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 43,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "two thousand gold coins double your inventory space for carrying seeds and forage"
    },
    {
      "id": 19,
      "sector": 2,
      "title": "Level 19: Speed-Gro Crop Fertilizer",
      "desc": "Accelerate plant growth cycles before the season turns.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 44,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "speed gro fertilizer accelerates harvest cycles before the hot summer season arrives"
    },
    {
      "id": 20,
      "sector": 2,
      "title": "Level 20: Golden Spring Harvest",
      "desc": "Crates brimming with giant cauliflowers and sweet berries.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 45,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "the aroma of sweet rain and wild blossoms fills the valley on the twenty eighth day"
    },
    {
      "id": 21,
      "sector": 3,
      "title": "Level 21: Lower Index (V and M)",
      "desc": "Descend with index fingers to V and M into mountain mines.",
      "keys": [
        "v",
        "m",
        "f",
        "j",
        " "
      ],
      "targetWpm": 45,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "mine cave vein copper vapor metal miner pickaxe moss dark mist rock magma void"
    },
    {
      "id": 22,
      "sector": 3,
      "title": "Level 22: Lower Middle (C and Comma)",
      "desc": "Middle finger to C and comma to break mineral nodes.",
      "keys": [
        "c",
        ",",
        "d",
        "k",
        " "
      ],
      "targetWpm": 46,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "copper, stone, cave, pickaxe, coal, vein, geode, iron, ore, underground, path,"
    },
    {
      "id": 23,
      "sector": 3,
      "title": "Level 23: Lower Ring (X and Period)",
      "desc": "Ring fingers on X and period to excavate rare gems.",
      "keys": [
        "x",
        ".",
        "s",
        "l",
        " "
      ],
      "targetWpm": 47,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "quartz. geode. mine. gem. dust. mineral. iron. copper. jade. steel pickaxe."
    },
    {
      "id": 24,
      "sector": 3,
      "title": "Level 24: Lower Pinky (Z and Hyphen)",
      "desc": "Pinkies on Z and hyphen to light torches in the dark.",
      "keys": [
        "z",
        "-",
        "a",
        "ñ",
        " "
      ],
      "targetWpm": 48,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "cave -pickaxe -mine torch light dark blue root gem quartz ten stone blocks"
    },
    {
      "id": 25,
      "sector": 3,
      "title": "Level 25: Lower Center (B and N)",
      "desc": "Stretch to B and N for copper ingots and lumps of coal.",
      "keys": [
        "b",
        "n",
        "f",
        "j",
        " "
      ],
      "targetWpm": 49,
      "minAccuracy": 94,
      "timeLimit": 45,
      "content": "coal mud turnip ore copper iron bright bar mine cart deep shaft cavern stone"
    },
    {
      "id": 26,
      "sector": 3,
      "title": "Level 26: Floor Twenty Mine Elevator",
      "desc": "The mine elevator saves progress every five floors.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 50,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "the mine elevator saves progress every five floors between deep pools and torches"
    },
    {
      "id": 27,
      "sector": 3,
      "title": "Level 27: Bats and Rock Crabs",
      "desc": "Swing your rusty sword with quick reflexes against beasts.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 51,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "smash round rocks carefully as rock crabs hide beneath their sturdy stone shells"
    },
    {
      "id": 28,
      "sector": 3,
      "title": "Level 28: Clint Blacksmith Forge",
      "desc": "Crack open geodes on Clint anvil to reveal minerals.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 52,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "clint cracks geodes on his heavy iron anvil to reveal amethyst jade and fire quartz"
    },
    {
      "id": 29,
      "sector": 3,
      "title": "Level 29: The Stone Smelting Furnace",
      "desc": "Burn coal to smelt ores into gleaming copper and iron bars.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 53,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "smelt five copper ores with one piece of coal to forge shiny bright metal bars"
    },
    {
      "id": 30,
      "sector": 3,
      "title": "Level 30: Lava Floor Eighty",
      "desc": "Volcanic heat deep within the mountain smelts pure gold.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 54,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "lava pools bubble deep inside the mountain while fire bats flutter through darkness"
    },
    {
      "id": 31,
      "sector": 4,
      "title": "Level 31: Cross-Hand Capital Shift",
      "desc": "Hold Shift with right pinky while typing left hand keys.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "A",
        "Z"
      ],
      "targetWpm": 54,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Willy Beach Ocean Sea Pier Fisherman Rod Bait Hook Trout Bass Salmon Catfish"
    },
    {
      "id": 32,
      "sector": 4,
      "title": "Level 32: Pelican Town Villager Names",
      "desc": "Capitalize proper names of the friendly Stardew villagers.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "P",
        "L"
      ],
      "targetWpm": 55,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Robin, Demetrius, Maru, Sebastian, Linus, Pierre, Caroline, Abigail, Alex, Evelyn."
    },
    {
      "id": 33,
      "sector": 4,
      "title": "Level 33: Willy Bamboo Fishing Pole",
      "desc": "Cast your line into the river to catch wild carp.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 56,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Willy smiles beneath the ocean breeze and hands you his old Bamboo Pole with warm pride."
    },
    {
      "id": 34,
      "sector": 4,
      "title": "Level 34: Sunfish and River Catfish",
      "desc": "Rainy days are ideal for hunting the elusive River Catfish.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 57,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "On stormy rainy days, giant Catfish bite aggressively in the rushing river currents."
    },
    {
      "id": 35,
      "sector": 4,
      "title": "Level 35: Crab Pots on the Pier",
      "desc": "Bait coastal traps to catch lobsters, clams, and crabs.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 58,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Crab pots set along the wooden pier drift gently catching lobsters, clams, and cockles."
    },
    {
      "id": 36,
      "sector": 4,
      "title": "Level 36: Winter Night Market",
      "desc": "The green submarine sinks into the deep oceanic abyss.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 59,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "The Night Market submarine sinks into deep ocean darkness to fish bizarre abyss dwellers."
    },
    {
      "id": 37,
      "sector": 4,
      "title": "Level 37: The Iridium Fishing Rod",
      "desc": "Attach tackle and lead bobbers for smooth perfect casts.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 60,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "The Iridium Rod fitted with lead bobbers calms the wild darting movements of rare fish."
    },
    {
      "id": 38,
      "sector": 4,
      "title": "Level 38: Ocean Legends of the Deep",
      "desc": "Hook the mythical Crimsonfish off the eastern pier.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 61,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "The legendary Crimsonfish leaps above crashing waves off the eastern beach dock."
    },
    {
      "id": 39,
      "sector": 4,
      "title": "Level 39: The Mermaid Pendant",
      "desc": "On stormy days the Old Mariner appears by the tidal pool.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 62,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Through the coastal downpour, the Old Mariner offers the Mermaid Pendant on the cliff."
    },
    {
      "id": 40,
      "sector": 4,
      "title": "Level 40: Master Angler of the Valley",
      "desc": "Complete your marine collection in the fishing ledger.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 63,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "With your collection ledger full of fish, Willy crowns you Master Angler of the Valley."
    },
    {
      "id": 41,
      "sector": 5,
      "title": "Level 41: Vocales con Acento en la Granja",
      "desc": "Pulsación de tecla de acento antes de la vocal: gallinas y establos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 63,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "the cow gave rich milk, the hen ate golden corn, the duck swam across the pond happily"
    },
    {
      "id": 42,
      "sector": 5,
      "title": "Level 42: Signos de Exclamación e Interrogación",
      "desc": "¡Acaricia a tus animales cada mañana para subir sus corazones!",
      "keys": [
        "¿",
        "?",
        "¡",
        "!"
      ],
      "targetWpm": 64,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Pet your farm animals every morning! Did you hear the cheerful clucking of brown hens?"
    },
    {
      "id": 43,
      "sector": 5,
      "title": "Level 43: Comillas y Dos Puntos en la Quesería",
      "desc": "Marnie te explica: 'El queso curado tiene un sabor inigualable'.",
      "keys": [
        "\"",
        ":",
        ";"
      ],
      "targetWpm": 65,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Marnie smiles: \"Happy animals fed with fresh hay always produce gold quality goods.\""
    },
    {
      "id": 44,
      "sector": 5,
      "title": "Level 44: Las Gallinas Azules de Shane",
      "desc": "Conoce a las raras gallinas de plumaje azul que nacen con cariño.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "¡",
        "!",
        "¿",
        "?"
      ],
      "targetWpm": 66,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Shane blue chickens are truly special! Their sapphire feathers shine with gentle care."
    },
    {
      "id": 45,
      "sector": 5,
      "title": "Level 45: Mayonesa de Huevo de Pato",
      "desc": "Coloca huevos grandes en la máquina de mayonesa para obtener frascos dorados.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 67,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Rich duck mayonnaise and golden egg jars fetch splendid prices in the shipping bin."
    },
    {
      "id": 46,
      "sector": 5,
      "title": "Level 46: Las Trufas de los Cerdos",
      "desc": "Los cerdos excavan trufas aromáticas en el pasto durante el otoño.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 68,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "During sunny autumn days, pigs forage under ancient oaks sniffing out aromatic truffles."
    },
    {
      "id": 47,
      "sector": 5,
      "title": "Level 47: El Granero de Lujo de Robin",
      "desc": "Robin amplía el establo con sistema de alimentación automática de heno.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 69,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Robin builds automated silo feeding systems so livestock stay cozy all through winter."
    },
    {
      "id": 48,
      "sector": 5,
      "title": "Level 48: Lana Suave y Telares Artesanales",
      "desc": "Esquila a las ovejas para hilar ovillos de lana en el telar de madera.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 70,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Shear warm white wool from fluffy sheep and spin soft yarn on the mechanical wood loom."
    },
    {
      "id": 49,
      "sector": 5,
      "title": "Level 49: El Aceite de Trufa Dorado",
      "desc": "Procesa las trufas en la aceitera para multiplicar las ganancias del rancho.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 71,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Pure truffle oil pressed on the farm is prized by the Stardrop Saloon and Mayor Lewis!"
    },
    {
      "id": 50,
      "sector": 5,
      "title": "Level 50: Amigo de los Animales del Valle",
      "desc": "Todos los animales de la granja tienen cinco corazones completos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 72,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Five full hearts shine above your cows and goats; the farm barn radiates pure bliss."
    },
    {
      "id": 51,
      "sector": 6,
      "title": "Level 51: Fila Numérica Izquierda (1, 2, 3, 4, 5)",
      "desc": "Dígitos de la mano izquierda: oro en el monedero y cantidades de lotes.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "targetWpm": 72,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "123 parsnips, 451 potatoes, 234 cauliflowers, 512 strawberries for the little Junimos."
    },
    {
      "id": 52,
      "sector": 6,
      "title": "Level 52: Fila Numérica Derecha (6, 7, 8, 9, 0)",
      "desc": "Dígitos de la mano derecha: precios de semillas y materiales.",
      "keys": [
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 73,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "678 copper ores, 890 iron ores, 789 gold ores, and 600 wood pieces for the center."
    },
    {
      "id": 53,
      "sector": 6,
      "title": "Level 53: Monedero de Oro ($g)",
      "desc": "Escribe precios exactos de Stardew Valley con el símbolo de oro.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 74,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "150g for seeds, 500g for fertilizer, 2500g for minecarts, and 42500g for the bus repair."
    },
    {
      "id": 54,
      "sector": 6,
      "title": "Level 54: Lote de la Despensa",
      "desc": "Donaciones de chirivías, judías, coliflores y patatas a los pequeños espíritus.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 75,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "The Spring Crops Bundle requires 1 parsnip, 1 green bean, 1 cauliflower, and 1 potato."
    },
    {
      "id": 55,
      "sector": 6,
      "title": "Level 55: Lote de la Caldera",
      "desc": "99 piedras, 1 lingote de cobre, 1 lingote de hierro y 1 lingote de oro.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 76,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Restoring the Boiler Room with 99 stones and metal bars reactivates minecart transit."
    },
    {
      "id": 56,
      "sector": 6,
      "title": "Level 56: Lote del Acuario de Peces",
      "desc": "El río, el lago de la montaña y el océano se unen para restaurar el estanque.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 77,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Junimos celebrate with 1 sunfish, 1 catfish, 1 carp, and 1 river bullhead in the tank."
    },
    {
      "id": 57,
      "sector": 6,
      "title": "Level 57: Lote de la Caja Fuerte",
      "desc": "Dona 2500$g, 5000$g, 10000$g y 25000$g para reparar el autobús de Pam.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 78,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Donating 42500g to the vault repairs the engine of the bus traveling to Calico Desert."
    },
    {
      "id": 58,
      "sector": 6,
      "title": "Level 58: El Tablón de Anuncios",
      "desc": "Favores especiales para los vecinos: mermelada, vino y flores silvestres.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 79,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "The Bulletin Board rewards friendship: blackberry jam, mead, and flowers for neighbors."
    },
    {
      "id": 59,
      "sector": 6,
      "title": "Level 59: La Danza de los Junimos",
      "desc": "Los pequeños espíritus del bosque saltan con estrellas mágicas en sus cabezas.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 80,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Junimos place a golden star on the mantelpiece, healing the ruined civic chambers."
    },
    {
      "id": 60,
      "sector": 6,
      "title": "Level 60: ¡Centro Cívico Restaurado!",
      "desc": "El pueblo expulsa a JojaMart y recupera el corazón histórico del valle.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 81,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "The Community Center shines restored! Pelican Town drives JojaMart away in triumph."
    },
    {
      "id": 61,
      "sector": 7,
      "title": "Level 61: Símbolos Mágicos del Mago M. Rasmodius",
      "desc": "Signos matemáticos y arcanos del libro de conjuros botánicos.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 81,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "#wizard $gold %essence &forest *junimo +potion =spell ~portal #rune *starlight"
    },
    {
      "id": 62,
      "sector": 7,
      "title": "Level 62: Llaves y Corchetes de Alquimia",
      "desc": "El Mago prepara el brebaje del bosque en su caldero burbujeante.",
      "keys": [
        "{",
        "}",
        "[",
        "]",
        "<",
        ">"
      ],
      "targetWpm": 82,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "potion[mandrake_root + purple_mushroom]; cauldron<ancient_magic> = awaken_junimos;"
    },
    {
      "id": 63,
      "sector": 7,
      "title": "Level 63: El Bosque Secreto y la Madera Noble",
      "desc": "Tala los tocones de madera noble que renacen cada nuevo día.",
      "keys": [
        "/",
        "\\",
        "|",
        "_"
      ],
      "targetWpm": 83,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "hardwood/secret_woods | daily_stumps = 12_pieces + steel_axe_requirement;"
    },
    {
      "id": 64,
      "sector": 7,
      "title": "Level 64: La Cabaña de la Bruja en el Pantano",
      "desc": "Cruza el portal oscuro con la tinta mágica que el mago perdió.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 84,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "#magic_ink + #void_essence = witch_swamp_path; goblin_henchman.receive('void_mayo');"
    },
    {
      "id": 65,
      "sector": 7,
      "title": "Level 65: Los Obeliscos Elementales del Mago",
      "desc": "El Mago construye torres de teletransporte instantáneo en tu granja.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 85,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "water_obelisk = 1000000g + 5_shells; earth_obelisk = 10_magma_geodes + 10_iridium_bars;"
    },
    {
      "id": 66,
      "sector": 7,
      "title": "Level 66: La Choza del Junimo Cosechador",
      "desc": "Los Junimos recolectan automáticamente tus hortalizas y flores.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 86,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "junimo_hut{harvest_range: '17x17', mood: 100%}; woodland_spirits_harvest_crops = true;"
    },
    {
      "id": 67,
      "sector": 7,
      "title": "Level 67: La Estatua del Viejo Cannoli",
      "desc": "Entrega una baya de gema dulce al viejo maestro Cannoli.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 87,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "statue_cannoli.offer('sweet_gem_berry') -> 'Sweetest taste in the world!' -> stardrop;"
    },
    {
      "id": 68,
      "sector": 7,
      "title": "Level 68: El Gran Reloj Dorado de la Granja",
      "desc": "Diez millones de monedas para detener la aparición de maleza para siempre.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 88,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "gold_clock = 10000000g; farm_protection{weeds: 0, debris: 0, decay_halted: true};"
    },
    {
      "id": 69,
      "sector": 7,
      "title": "Level 69: El Altar de las Ilusiones",
      "desc": "Cambia tu apariencia, ropa y peinado en el sótano del mago.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 89,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "shrine_of_illusions.alter_appearance({hair: 'farmer_cut', shirt: 'leaf_green', hat: 'straw'});"
    },
    {
      "id": 70,
      "sector": 7,
      "title": "Level 70: La Alianza de los Arcanos del Bosque",
      "desc": "El valle y la magia del bosque viven en armoniosa prosperidad.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 90,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "the_ancient_magic_of_rasmodius_and_junimos_blesses_the_valley_soil_for_eternity;"
    },
    {
      "id": 71,
      "sector": 8,
      "title": "Level 71: El Concurso de Exhibición de Otoño",
      "desc": "Elige nueve artículos de calidad iridio para ganar el primer premio.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 90,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "The Stardew Valley Fair opens on the sixteenth of fall with country music and booths."
    },
    {
      "id": 72,
      "sector": 8,
      "title": "Level 72: Los Nueve Objetos de Calidad Iridio",
      "desc": "Vino añejado, queso de cabra, pez legendario y tarta casera.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 91,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Mayor Lewis evaluates your nine item display spanning farming, fishing, and artisanry."
    },
    {
      "id": 73,
      "sector": 8,
      "title": "Level 73: La Rueda de la Fortuna",
      "desc": "Apuesta fichas estelares al verde o al naranja con prudencia.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 92,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Spin the wheel of fortune betting star tokens on green to purchase the coveted Stardrop."
    },
    {
      "id": 74,
      "sector": 8,
      "title": "Level 74: El Festival del Hielo de Invierno",
      "desc": "Compite contra Willy en el concurso de pesca sobre el lago congelado.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 93,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Compete against Willy in the Ice Fishing Festival pulling trout through frozen holes."
    },
    {
      "id": 75,
      "sector": 8,
      "title": "Level 75: La Danza de las Medusas Lunares",
      "desc": "El último día del verano el océano se ilumina con medusas esmeralda.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 94,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Wooden lanterns float offshore while green moonlight jellies glow beneath the quiet waves."
    },
    {
      "id": 76,
      "sector": 8,
      "title": "Level 76: La Fiesta de la Estrella Invernal",
      "desc": "Intercambia regalos secretos con el vecino que te ha tocado en suerte.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 95,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Beneath the evergreen tree, you present a sparkling amethyst to your secret gift recipient."
    },
    {
      "id": 77,
      "sector": 8,
      "title": "Level 77: El Banquete del Luau de Verano",
      "desc": "Añade un ingrediente de calidad iridio a la sopa comunitaria del Gobernador.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 96,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "The Governor tastes the communal Luau pot: \"The most exquisite broth in the entire nation!\""
    },
    {
      "id": 78,
      "sector": 8,
      "title": "Level 78: El Laberinto Embrujado de la Víspera",
      "desc": "Encuentra la calabaza de oro escondida al final de los túneles tenebrosos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 97,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Navigate the haunted maze past carved stone statues until you reach the golden pumpkin chest."
    },
    {
      "id": 79,
      "sector": 8,
      "title": "Level 79: La Torta de Fruta Estelar",
      "desc": "La pastelería de Gus perfuma la taberna con recetas de cinco estrellas.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 98,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Fresh baked pumpkin pies and wild blackberry tarts restore the weary farmer stamina."
    },
    {
      "id": 80,
      "sector": 8,
      "title": "Level 80: Campeón Invicto de la Feria",
      "desc": "El alcalde Lewis te hace entrega del trofeo de honor del valle.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 99,
      "minAccuracy": 98,
      "timeLimit": 50,
      "content": "One hundred and twenty five points secure first place for your legendary farm grange display!"
    },
    {
      "id": 81,
      "sector": 9,
      "title": "Level 81: El Desierto de Calico",
      "desc": "El autobús de Pam cruza las montañas rocosas hacia el calor del desierto.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "!",
        "?",
        ".",
        ",",
        "-"
      ],
      "targetWpm": 100,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Pam drives the rumbling bus into Calico Desert! Skull Cavern yawns with perilous secrets."
    },
    {
      "id": 82,
      "sector": 9,
      "title": "Level 82: Bombas y Megabombas de Iridio",
      "desc": "Detona conjuntos de rocas para descubrir agujeros y escaleras rápidas.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "targetWpm": 102,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Drop 1 megabomb, take 6 steps back, BOOM! The open hole drops you down 8 floors instantly."
    },
    {
      "id": 83,
      "sector": 9,
      "title": "Level 83: Las Momias y las Serpientes Reales",
      "desc": "Vence a las momias de tela con fuego y espada galáctica.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 104,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Fierce iridium serpents soar across chasms; the Galaxy Sword deflects their deadly strikes."
    },
    {
      "id": 84,
      "sector": 9,
      "title": "Level 84: El Piso Cien del Sr. Qi",
      "desc": "Llega al piso 100 sin usar más de diez escaleras de piedra.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 106,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "On floor 100, Mr. Qi commends your bravery and offers iridium snake milk for permanent health."
    },
    {
      "id": 85,
      "sector": 9,
      "title": "Level 85: Los Fragmentos Prismáticos",
      "desc": "La gema más valiosa y misteriosa que refracta todos los colores del arcoíris.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 108,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "A Prismatic Shard gleams in your hands; place it between three pillars to awaken the galaxy."
    },
    {
      "id": 86,
      "sector": 9,
      "title": "Level 86: Vetras Púrpuras de Iridio Puro",
      "desc": "Funde lingotes púrpuras para construir aspersores de iridio.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 110,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Smelt purple iridium ores into bars to craft sprinklers that water twenty four crops daily."
    },
    {
      "id": 87,
      "sector": 9,
      "title": "Level 87: La Sala de Nueces de la Isla Jengibre",
      "desc": "Willy repara su barco pesquero para zarpar hacia el archipiélago tropical.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 112,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "Willy repairs his fishing boat to sail south to Ginger Island, home of parrots and volcanoes."
    },
    {
      "id": 88,
      "sector": 9,
      "title": "Level 88: La Fruta Estelar del Desierto",
      "desc": "Tu mente se llena con el recuerdo de tu cosa favorita al morder el fruto.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 114,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "The divine taste of a Stardrop fills your mind with thoughts of home and limitless energy!"
    },
    {
      "id": 89,
      "sector": 9,
      "title": "Level 89: Desafío de Qi: Menas Peligrosas",
      "desc": "Desciende por la caverna infestada con modificadores de dificultad extrema.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 116,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "Qi dangerous mine quest tests your reflexes against radioactive beasts and iridium nodes."
    },
    {
      "id": 90,
      "sector": 9,
      "title": "Level 90: Conquistador de la Caverna Calavera",
      "desc": "Ningún piso subterráneo guarda secretos ante tu teclado.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 118,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "You emerge from Skull Cavern at sunrise with pockets full of iridium bars and prismatic gems."
    },
    {
      "id": 91,
      "sector": 10,
      "title": "Level 91: Gauntlet: La Huella del Abuelo",
      "desc": "Cuatro velas encendidas en el santuario del abuelo al comenzar el año tres.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 100,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Four candles burn bright at grandpa shrine, blessing your devoted care of the valley soil."
    },
    {
      "id": 92,
      "sector": 10,
      "title": "Level 92: Gauntlet: Amistad con Toda la Aldea",
      "desc": "Diez corazones con cada habitante de Pelican Town.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 102,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Ten hearts of genuine friendship connect you to every villager from Linus to old George."
    },
    {
      "id": 93,
      "sector": 10,
      "title": "Level 93: Gauntlet: Todas las Recetas de Cocina",
      "desc": "Cien platos preparados en la cocina de azulejos de tu hogar.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 104,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "One hundred cooking recipes crafted in your farmhouse kitchen leave no blank ledger pages."
    },
    {
      "id": 94,
      "sector": 10,
      "title": "Level 94: Gauntlet: Todos los Peces Legendarios",
      "desc": "La leyenda de los cinco reyes del agua completada con maestría.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 106,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "The Legend, Crimsonfish, Angler, Glacierfish, and Mutant Carp complete your master ledger."
    },
    {
      "id": 95,
      "sector": 10,
      "title": "Level 95: Gauntlet: Museo de Gunther Completo",
      "desc": "Noventa y cinco minerales y artefactos arqueológicos catalogados.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 108,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Gunther preserves your ninety five museum donations and awards the rusted sewer key with honor."
    },
    {
      "id": 96,
      "sector": 10,
      "title": "Level 96: Gauntlet: La Granja de los Diez Millones",
      "desc": "Campos automáticos, bodegas añejadas y molinos de viento dorados.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 110,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Ten million gold earned from pristine harvests funds the Golden Clock safeguarding the farm."
    },
    {
      "id": 97,
      "sector": 10,
      "title": "Level 97: Gauntlet: Las Cien Nueces Doradas",
      "desc": "Descubriste todos los enigmas de la jungla y el templo del volcán.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 112,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "One hundred golden walnuts on Ginger Island open Mr. Qi walnut room high upon the ridge."
    },
    {
      "id": 98,
      "sector": 10,
      "title": "Level 98: Gauntlet: La Estatua de la Perfección",
      "desc": "Estatua de iridio que regala minerales preciosos cada nueva mañana.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 115,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "The Statue of True Perfection gleams on the porch, forged from pure purple iridium and stars."
    },
    {
      "id": 99,
      "sector": 10,
      "title": "Level 99: El Sendero a la Cumbre",
      "desc": "La gran roca que bloqueaba las montañas se desvanece en polvo dorado.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 118,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "The boulder blocking the mountain summit dissolves; the entire valley sleeps peacefully below."
    },
    {
      "id": 100,
      "sector": 10,
      "title": "Level 100: Leyenda Absoluta de Stardew Valley",
      "desc": "La prueba definitiva a 120 WPM y 98% de precisión: ¡El Valle te aclama!",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 120,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Standing at the summit among loved ones, you are crowned the True Eternal Legend of Stardew Valley. Your name and legacy will live forever in the beating heart of this land."
    }
  ],
  "pt": [
    {
      "id": 1,
      "sector": 1,
      "title": "Nível 1: Las Marcas Táctiles (F y J)",
      "desc": "Encuentra las marcas de la azada con tus índices en F y J.",
      "keys": [
        "f",
        "j",
        " "
      ],
      "targetWpm": 18,
      "minAccuracy": 90,
      "timeLimit": 35,
      "content": "fff jjj fj fj jf jf fff jjj ffff jjjj fjfj jfjf f j f j ff jj fff jjj fj fj f j fj jf f j"
    },
    {
      "id": 2,
      "sector": 1,
      "title": "Nível 2: Dedos Medios (D y K)",
      "desc": "Planta chirivías en D y K manteniendo los índices firmes.",
      "keys": [
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 20,
      "minAccuracy": 90,
      "timeLimit": 35,
      "content": "ddd kkk dkd kdk fdf jkj dk dk fd jk df kj ddd kkk fff jjj dfjk kjfd d k f j dkfj kfdj dk fd"
    },
    {
      "id": 3,
      "sector": 1,
      "title": "Nível 3: Dedos Anulares (S y L)",
      "desc": "Riega las parcelas con los anulares en S y L sin torcer las muñecas.",
      "keys": [
        "s",
        "l",
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 22,
      "minAccuracy": 90,
      "timeLimit": 40,
      "content": "sss lll sls lsl sdf jkl asd lkj sss lll ddd kkk fff jjj sal las fas dal kas fjs ldk sl dk fj"
    },
    {
      "id": 4,
      "sector": 1,
      "title": "Nível 4: Fila Guía Completa (A y Ñ)",
      "desc": "Los meñiques cuidan los bordes de la huerta en A y Ñ.",
      "keys": [
        "a",
        "ñ",
        "s",
        "l",
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 24,
      "minAccuracy": 91,
      "timeLimit": 40,
      "content": "aaa ñññ aña ñan asdf jklñ daña saña laña falla calla faja asdf jklñ la sal da la caña fa la da"
    },
    {
      "id": 5,
      "sector": 1,
      "title": "Nível 5: Estiramiento Central (G y H)",
      "desc": "Los índices alcanzan el centro de la parcela: F a G y J a H.",
      "keys": [
        "g",
        "h",
        "f",
        "j",
        "a",
        "s",
        "d",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 26,
      "minAccuracy": 91,
      "timeLimit": 40,
      "content": "ggg hhh ghg hgh fgh jhg gas haz gala hala gafas hadas saga jaha fgh jklñ gas haz la hada gala"
    },
    {
      "id": 6,
      "sector": 1,
      "title": "Nível 6: Limpieza de Maleza y Rocas",
      "desc": "Primeras palabras de la granja con la fila guía completa.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 28,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "el vovô limpia la maleza con la azada y quita las piedras del horta para sembrar"
    },
    {
      "id": 7,
      "sector": 1,
      "title": "Nível 7: Primeras Semillas de Chirivía",
      "desc": "Siembra pastinacas y chirivías con ritmo constante y sereno.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 30,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "las pastinacas crecen con el agua fresca del estanque bajo el sol de la huerta"
    },
    {
      "id": 8,
      "sector": 1,
      "title": "Nível 8: El Regadío Matutino",
      "desc": "Llena la regadera en el estanque antes de que caiga el sol.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 32,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "regar los surcos con la regadera vieja cada manana temprano alegra la parcela"
    },
    {
      "id": 9,
      "sector": 1,
      "title": "Nível 9: El Espantapájaros de Madera",
      "desc": "Protege los cultivos de los cuervos con buena colocación.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 34,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "el espantapajaros de madera vigila las pastinacas para alejar a los cuervos negros"
    },
    {
      "id": 10,
      "sector": 1,
      "title": "Nível 10: Fin de la Primera Jornada",
      "desc": "Cosecha tus primeras chirivías de calidad bronce en el valle.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 36,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "la primera cosecha de pastinacas de la huerta del vovô ya esta en el cajon de envios"
    },
    {
      "id": 11,
      "sector": 2,
      "title": "Nível 11: Vocales Superiores (E e I)",
      "desc": "Sube los dedos medios desde la fila guía hacia E e I.",
      "keys": [
        "e",
        "i",
        "d",
        "k",
        " "
      ],
      "targetWpm": 36,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "semillas de coliflor y fresas dulces de primavera piden tierra fertil y riego diario"
    },
    {
      "id": 12,
      "sector": 2,
      "title": "Nível 12: Índices Superiores (R y U)",
      "desc": "Estiramiento hacia R con índice izquierdo y hacia U con el derecho.",
      "keys": [
        "r",
        "u",
        "f",
        "j",
        " "
      ],
      "targetWpm": 37,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "pierre abre la tienda para vender abono puro y paquetes de semillas de patata"
    },
    {
      "id": 13,
      "sector": 2,
      "title": "Nível 13: Centro Superior (T e Y)",
      "desc": "Extensión hacia T e Y: la tienda de Pierre abre temprano.",
      "keys": [
        "t",
        "y",
        "f",
        "j",
        " "
      ],
      "targetWpm": 38,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "la huerta de primavera tiene brotes verdes y fresas listas para cosechar en el valle"
    },
    {
      "id": 14,
      "sector": 2,
      "title": "Nível 14: Anulares Superiores (W y O)",
      "desc": "Anular izquierdo a W y anular derecho a O para cosechar patatas.",
      "keys": [
        "w",
        "o",
        "s",
        "l",
        " "
      ],
      "targetWpm": 39,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "los canastos de madera rebosan de coliflores gigantes patatas de oro y flores silvestres"
    },
    {
      "id": 15,
      "sector": 2,
      "title": "Nível 15: Meñiques Superiores (Q y P)",
      "desc": "Alcance de meñiques a Q y P: paquetes de semillas y primavera.",
      "keys": [
        "q",
        "p",
        "a",
        "ñ",
        " "
      ],
      "targetWpm": 40,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "ahorra paquetes de oro para comprar la mochila roja de treinta huecos de pierre"
    },
    {
      "id": 16,
      "sector": 2,
      "title": "Nível 16: La Huerta de Fresas",
      "desc": "Las fresas son el cultivo estrella del Festival de los Huevos.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 41,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "el festival de los huevos trae las ansiadas semillas de fresas dulces para sembrar"
    },
    {
      "id": 17,
      "sector": 2,
      "title": "Nível 17: Visita a la Tienda de Pierre",
      "desc": "Compra fertilizante de calidad y semillas de judías verdes.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 42,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "pierre ofrece fertilizante basico y abono de lujo para cosechas de calidad dorada"
    },
    {
      "id": 18,
      "sector": 2,
      "title": "Nível 18: La Mochila de Treinta Huecos",
      "desc": "Ahorra oro para ampliar el inventario y llevar más herramientas.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 43,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "con dos mil monedas de oro amplias el zurron para llevar mas semillas y herramientas"
    },
    {
      "id": 19,
      "sector": 2,
      "title": "Nível 19: Fertilizante Rápido de la Huerta",
      "desc": "Acelera el crecimiento de tus cosechas antes del cambio de estación.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 44,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "el abono rapido acelera el crecimiento de los cultivos antes del cambio de estacion"
    },
    {
      "id": 20,
      "sector": 2,
      "title": "Nível 20: Cosecha Dorada de Primavera",
      "desc": "Cestas llenas de coliflores gigantes y fresas de calidad oro.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 45,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "el aroma a tierra mojada y fresas dulces llena el valle en el vigesimo octavo dia"
    },
    {
      "id": 21,
      "sector": 3,
      "title": "Nível 21: Índices Inferiores (V y M)",
      "desc": "Baja los índices a V y M para descender a las profundidades de la mina.",
      "keys": [
        "v",
        "m",
        "f",
        "j",
        " "
      ],
      "targetWpm": 45,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "veta de cobre mina profunda vagoneta de metal maza de clint y moho en la cueva oscura"
    },
    {
      "id": 22,
      "sector": 3,
      "title": "Nível 22: Medios Inferiores (C y Coma)",
      "desc": "Dedo medio izquierdo a C y derecho a coma para picar rocas.",
      "keys": [
        "c",
        ",",
        "d",
        "k",
        " "
      ],
      "targetWpm": 46,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "cobre, roca, cueva, pico, carbon, veta, geoda, hierro, mineral, camino subterraneo,"
    },
    {
      "id": 23,
      "sector": 3,
      "title": "Nível 23: Anulares Inferiores (X y Punto)",
      "desc": "Anulares en X y punto para excavar gemas y geodas.",
      "keys": [
        "x",
        ".",
        "s",
        "l",
        " "
      ],
      "targetWpm": 47,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "cuarzo. geoda. mina. gema. polvo. mineral. hierro. cobre. jade. pico de minero."
    },
    {
      "id": 24,
      "sector": 3,
      "title": "Nível 24: Meñiques Inferiores (Z y Guion)",
      "desc": "Meñiques en Z y guion para encender antorchas en la penumbra.",
      "keys": [
        "z",
        "-",
        "a",
        "ñ",
        " "
      ],
      "targetWpm": 48,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "zarza en la entrada pozo -pico -mina luz de antorcha veta azul raiz gema de cuarzo diez rocas"
    },
    {
      "id": 25,
      "sector": 3,
      "title": "Nível 25: Índices Centrales Inferiores (B y N)",
      "desc": "Estiramiento hacia B y N: lingotes de cobre y carbón oscuro.",
      "keys": [
        "b",
        "n",
        "f",
        "j",
        " "
      ],
      "targetWpm": 49,
      "minAccuracy": 94,
      "timeLimit": 45,
      "content": "barro carbon nabo mineral cobre hierro lingote brillante vagoneta mina profunda buey"
    },
    {
      "id": 26,
      "sector": 3,
      "title": "Nível 26: El Ascensor Minero",
      "desc": "El ascensor minero guarda tu progreso cada cinco niveles subterráneos.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 50,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "el ascensor de la montanha guarda el progreso cada cinco pisos entre pozas de agua y antorchas"
    },
    {
      "id": 27,
      "sector": 3,
      "title": "Nível 27: Murciélagos y Cangrejos de Roca",
      "desc": "Blande tu espada oxidada con reflejos ágiles ante los monstruos.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 51,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "rompe las piedras redondas con cuidado, un cangrejo de roca podria esconderse bajo el caparazon"
    },
    {
      "id": 28,
      "sector": 3,
      "title": "Nível 28: La Herrería de Clint",
      "desc": "Abre geodas en el yunque de Clint para descubrir amatistas y jade.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 52,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "clint rompe cada geoda en su yunque por veinticinco monedas de oro, revelando gemas raras"
    },
    {
      "id": 29,
      "sector": 3,
      "title": "Nível 29: El Horno de Fundición",
      "desc": "Quema carbón para fundir menas de hierro y lingotes relucientes.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 53,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "cinco menas de cobre y una unidad de carbon forman un lingote anaranjado en el horno de piedra"
    },
    {
      "id": 30,
      "sector": 3,
      "title": "Nível 30: El Piso Ochenta de Magma",
      "desc": "El calor volcánico forja los mejores minerales de oro del valle.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 54,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "las pozas de lava burbujean en el fondo de la montanha mientras los murcielagos de fuego acechan"
    },
    {
      "id": 31,
      "sector": 4,
      "title": "Nível 31: Mayúsculas con Mano Cruzada",
      "desc": "Si escribes una letra con la mano izquierda, pulsa Shift con el meñique derecho.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "A",
        "Z"
      ],
      "targetWpm": 54,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Willy Playa Mar Oceano Muelle Pescador Cana Cebo Anzuelo Trucha Lubina Mareas Redes Bagre"
    },
    {
      "id": 32,
      "sector": 4,
      "title": "Nível 32: Nombres Propios de Pelican Town",
      "desc": "Escribe con mayúsculas los nombres de los aldeanos de Stardew Valley.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "P",
        "L"
      ],
      "targetWpm": 55,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Robin, Demetrius, Maru, Sebastian, Linus, Pierre, Caroline, Abigail, Alex, Evelyn."
    },
    {
      "id": 33,
      "sector": 4,
      "title": "Nível 33: La Caña de Bambú de Willy",
      "desc": "Lanza el anzuelo con el meñique en Shift para atrapar carpas de río.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 56,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Willy contempla las olas desde su muelle y te regala una Cana de Bambu con carino sincero."
    },
    {
      "id": 34,
      "sector": 4,
      "title": "Nível 34: Peces Soles y Bagres de Río",
      "desc": "Los días lluviosos son perfectos para buscar al escurridizo Bagre.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 57,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "En los dias de lluvia y tormenta, los enormes Bagres plateados pican en el Rio del valle."
    },
    {
      "id": 35,
      "sector": 4,
      "title": "Nível 35: Trampas para Cangrejos en el Muelle",
      "desc": "Coloca nasas con cebo para capturar almejas, berberechos y langostas.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 58,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Las Nasas para Cangrejos en los pontones del oceano flotan capturando langostas y almejas."
    },
    {
      "id": 36,
      "sector": 4,
      "title": "Nível 36: El Mercado Nocturno de Invierno",
      "desc": "El submarino verde se sumerge en las profundidades abisales.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 59,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "El Submarino del Mercado Nocturno desciende en la oscuridad abisal para pescar rarezas marinas."
    },
    {
      "id": 37,
      "sector": 4,
      "title": "Nível 37: La Caña de Iridio",
      "desc": "Equipa anzuelos giratorios y cebo silvestre para lanzamientos perfectos.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 60,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "La Cana de Iridio vendida por Willy permite enganchar plomos pesados para calmar a los peces rebeldes."
    },
    {
      "id": 38,
      "sector": 4,
      "title": "Nível 38: Leyendas del Océano",
      "desc": "Atrapa al mítico Pez Carmesí en la poza este de la playa.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 61,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Solo los pescadores que dominan la calma del sedal logran capturar al Pez Carmesi sin romper el hilo."
    },
    {
      "id": 39,
      "sector": 4,
      "title": "Nível 39: El Amuleto de la Sirena",
      "desc": "En los días de lluvia el viejo marinero aparece en el acantilado.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 62,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Bajo la lluvia del acantilado, el Viejo Marinero ofrece el mitico Colgante de Sirena por cinco mil monedas."
    },
    {
      "id": 40,
      "sector": 4,
      "title": "Nível 40: Pescador Maestro del Valle",
      "desc": "Completaste la colección completa de peces del libro de recuerdos.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 63,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "El brillo plateado del agua despide a Willy mientras contemplas el horizonte azul desde el muelle."
    },
    {
      "id": 41,
      "sector": 5,
      "title": "Nível 41: Vocales con Acento en la Granja",
      "desc": "Pulsación de tecla de acento antes de la vocal: gallinas y establos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 63,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "la vaca dio leche fresca, la gallina comió grano, el pato nadó en el estanque, nació un ternero"
    },
    {
      "id": 42,
      "sector": 5,
      "title": "Nível 42: Signos de Exclamación e Interrogación",
      "desc": "¡Acaricia a tus animales cada mañana para subir sus corazones!",
      "keys": [
        "¿",
        "?",
        "¡",
        "!"
      ],
      "targetWpm": 64,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "¡Acaricia a tus animales cada mañana! ¿Escuchaste al gallo cantar al amanecer en el rancho de Marnie?"
    },
    {
      "id": 43,
      "sector": 5,
      "title": "Nível 43: Comillas y Dos Puntos en la Quesería",
      "desc": "Marnie te explica: 'El queso curado tiene un sabor inigualable'.",
      "keys": [
        "\"",
        ":",
        ";"
      ],
      "targetWpm": 65,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Marnie dijo: \"Un animal bien alimentado con heno siempre da productos de calidad oro para la quesería\"."
    },
    {
      "id": 44,
      "sector": 5,
      "title": "Nível 44: Las Gallinas Azules de Shane",
      "desc": "Conoce a las raras gallinas de plumaje azul que nacen con cariño.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "¡",
        "!",
        "¿",
        "?"
      ],
      "targetWpm": 66,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "¡Qué sorpresa tan hermosa! ¿Sabías que Shane cría gallinas azules cuando alcanzas ocho corazones con él?"
    },
    {
      "id": 45,
      "sector": 5,
      "title": "Nível 45: Mayonesa de Huevo de Pato",
      "desc": "Coloca huevos grandes en la máquina de mayonesa para obtener frascos dorados.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 67,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "La mayonesa de pato se vende a un precio fantastico en el cajon de envios que el vovô dejo en la fazenda."
    },
    {
      "id": 46,
      "sector": 5,
      "title": "Nível 46: Las Trufas de los Cerdos",
      "desc": "Los cerdos excavan trufas aromáticas en el pasto durante el otoño.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 68,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Durante los dias soleados de outono, los cerdos buscan trufas frescas bajo la sombra de los robles centenarios."
    },
    {
      "id": 47,
      "sector": 5,
      "title": "Nível 47: El Granero de Lujo de Robin",
      "desc": "Robin amplía el establo con sistema de alimentación automática de heno.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 69,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "El sistema automatico distribuye el heno en los comederos; ¡los animales duermen calidos en el establo!"
    },
    {
      "id": 48,
      "sector": 5,
      "title": "Nível 48: Lana Suave y Telares Artesanales",
      "desc": "Esquila a las ovejas para hilar ovillos de lana en el telar de madera.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 70,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Las tijeras cortan suavemente la lana blanca de las ovejas; el telar mecanico produce rollos de tela fina."
    },
    {
      "id": 49,
      "sector": 5,
      "title": "Nível 49: El Aceite de Trufa Dorado",
      "desc": "Procesa las trufas en la aceitera para multiplicar las ganancias del rancho.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 71,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "¡El aceite de trufa artesanal es codiciado por los chefs del meson y por el prefeito Lewis para sus recetas!"
    },
    {
      "id": 50,
      "sector": 5,
      "title": "Nível 50: Amigo de los Animales del Valle",
      "desc": "Todos los animales de la granja tienen cinco corazones completos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 72,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Las vacas mugen contentas, las cabras balan en el corral y los gatos ronronean bajo el alero de la cabana."
    },
    {
      "id": 51,
      "sector": 6,
      "title": "Nível 51: Fila Numérica Izquierda (1, 2, 3, 4, 5)",
      "desc": "Dígitos de la mano izquierda: oro en el monedero y cantidades de lotes.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "targetWpm": 72,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "123 pastinacas, 451 patatas, 234 coliflores, 512 fresas y 345 judias para los lotes de los Junimos."
    },
    {
      "id": 52,
      "sector": 6,
      "title": "Nível 52: Fila Numérica Derecha (6, 7, 8, 9, 0)",
      "desc": "Dígitos de la mano derecha: precios de semillas y materiales.",
      "keys": [
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 73,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "678 menas de cobre, 890 de hierro, 789 de oro y 600 maderas nobles para reconstruir el centro civico."
    },
    {
      "id": 53,
      "sector": 6,
      "title": "Nível 53: Monedero de Oro ($g)",
      "desc": "Escribe precios exactos de Stardew Valley con el símbolo de oro.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 74,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "150$g en semillas, 500$g en abono, 2500$g para las vagonetas y 42500$g para reparar el autobus de Pam."
    },
    {
      "id": 54,
      "sector": 6,
      "title": "Nível 54: Lote de la Despensa",
      "desc": "Donaciones de chirivías, judías, coliflores y patatas a los pequeños espíritus.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 75,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "El Lote de Primavera requiere 1 pastinaca, 1 judia verde, 1 coliflor y 1 patata de calidad estandar."
    },
    {
      "id": 55,
      "sector": 6,
      "title": "Nível 55: Lote de la Caldera",
      "desc": "99 piedras, 1 lingote de cobre, 1 lingote de hierro y 1 lingote de oro.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 76,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Al reparar la Sala de Calderas con 99 piedras y 3 lingotes, las vagonetas mineras vuelven a funcionar."
    },
    {
      "id": 56,
      "sector": 6,
      "title": "Nível 56: Lote del Acuario de Peces",
      "desc": "El río, el lago de la montaña y el océano se unen para restaurar el estanque.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 77,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Los Junimos celebran danzando con 1 carpa, 1 bagre, 1 besugo, 1 pez sol y 1 esturion plateado del lago."
    },
    {
      "id": 57,
      "sector": 6,
      "title": "Nível 57: Lote de la Caja Fuerte",
      "desc": "Dona 2500$g, 5000$g, 10000$g y 25000$g para reparar el autobús de Pam.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 78,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "La donacion total de 42500$g permite reparar el motor del viejo autobus que viaja al desierto de Calico."
    },
    {
      "id": 58,
      "sector": 6,
      "title": "Nível 58: El Tablón de Anuncios",
      "desc": "Favores especiales para los vecinos: mermelada, vino y flores silvestres.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 79,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Completar el Tablon de Anuncios con mermelada y flores otorga 500 puntos de amistad con todos los aldeanos."
    },
    {
      "id": 59,
      "sector": 6,
      "title": "Nível 59: La Danza de los Junimos",
      "desc": "Los pequeños espíritus del bosque saltan con estrellas mágicas en sus cabezas.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 80,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Cada noche los Junimos colocan una estrella dorada en la chimenea; la madera cobra vida con cantos magicos."
    },
    {
      "id": 60,
      "sector": 6,
      "title": "Nível 60: ¡Centro Cívico Restaurado!",
      "desc": "El pueblo expulsa a JojaMart y recupera el corazón histórico del valle.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 81,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "El prefeito Lewis coloca la placa conmemorativa mientras todo Pelican Town celebra la derrota de JojaMart."
    },
    {
      "id": 61,
      "sector": 7,
      "title": "Nível 61: Símbolos Mágicos del Mago M. Rasmodius",
      "desc": "Signos matemáticos y arcanos del libro de conjuros botánicos.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 81,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "#mago $oro %esencia &bosque *junimo +pocion =conjuro ~portal #runa *estrella $gema &valle"
    },
    {
      "id": 62,
      "sector": 7,
      "title": "Nível 62: Llaves y Corchetes de Alquimia",
      "desc": "El Mago prepara el brebaje del bosque en su caldero burbujeante.",
      "keys": [
        "{",
        "}",
        "[",
        "]",
        "<",
        ">"
      ],
      "targetWpm": 82,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "pocion[raiz_mandragora + hongo_purpura]; caldero<magia_ancestral> = despertar_espiritus_junimo;"
    },
    {
      "id": 63,
      "sector": 7,
      "title": "Nível 63: El Bosque Secreto y la Madera Noble",
      "desc": "Tala los tocones de madera noble que renacen cada nuevo día.",
      "keys": [
        "/",
        "\\",
        "|",
        "_"
      ],
      "targetWpm": 83,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "madera_noble/bosque_secreto | tocones_diarios = 12_piezas + hacha_de_acero_requerida;"
    },
    {
      "id": 64,
      "sector": 7,
      "title": "Nível 64: La Cabaña de la Bruja en el Pantano",
      "desc": "Cruza el portal oscuro con la tinta mágica que el mago perdió.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 84,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "#tinta_magica + #esencia_vacio = acceso_pantano_bruja; sirviente_goblin.recibir('mayonesa_vacio');"
    },
    {
      "id": 65,
      "sector": 7,
      "title": "Nível 65: Los Obeliscos Elementales del Mago",
      "desc": "El Mago construye torres de teletransporte instantáneo en tu granja.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 85,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "obelisco_agua = 1000000$g + 5_conchas; obelisco_tierra = 10_geodas_magma + 10_lingotes_iridio;"
    },
    {
      "id": 66,
      "sector": 7,
      "title": "Nível 66: La Choza del Junimo Cosechador",
      "desc": "Los Junimos recolectan automáticamente tus hortalizas y flores.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 86,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "choza_junimo{radio: 'parcela_17x17', animo: 100%}; espiritus_recolectan_cosechas_automaticas = true;"
    },
    {
      "id": 67,
      "sector": 7,
      "title": "Nível 67: La Estatua del Viejo Cannoli",
      "desc": "Entrega una baya de gema dulce al viejo maestro Cannoli.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 87,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "maestro_cannoli.ofrecer('baya_gema_dulce') -> '¡El sabor mas dulce de todos!' -> fruta_estelar;"
    },
    {
      "id": 68,
      "sector": 7,
      "title": "Nível 68: El Gran Reloj Dorado de la Granja",
      "desc": "Diez millones de monedas para detener la aparición de maleza para siempre.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 88,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "reloj_dorado = 10000000$g; proteccion_fazenda{maleza: 0, escombros: 0, tiempo_detenido: true};"
    },
    {
      "id": 69,
      "sector": 7,
      "title": "Nível 69: El Altar de las Ilusiones",
      "desc": "Cambia tu apariencia, ropa y peinado en el sótano del mago.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 89,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "altar_de_las_ilusiones.cambiar_apariencia({peinado: 'campesino', camisa: 'verde_hoja', sombrero: 'paja'});"
    },
    {
      "id": 70,
      "sector": 7,
      "title": "Nível 70: La Alianza de los Arcanos del Bosque",
      "desc": "El valle y la magia del bosque viven en armoniosa prosperidad.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 90,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "la_magia_ancestral_de_rasmodius_y_los_junimos_bendice_la_tierra_del_valle_para_siempre;"
    },
    {
      "id": 71,
      "sector": 8,
      "title": "Nível 71: El Concurso de Exhibición de Otoño",
      "desc": "Elige nueve artículos de calidad iridio para ganar el primer premio.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 90,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "La Feria de Stardew Valley abre el decimosexto dia de outono con musica campestre y puestos coloridos."
    },
    {
      "id": 72,
      "sector": 8,
      "title": "Nível 72: Los Nueve Objetos de Calidad Iridio",
      "desc": "Vino añejado, queso de cabra, pez legendario y tarta casera.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 91,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "El prefeito Lewis evalua con lupa cada categoria: agricultura, pesca, mineria, artesania y cocina tradicional."
    },
    {
      "id": 73,
      "sector": 8,
      "title": "Nível 73: La Rueda de la Fortuna",
      "desc": "Apuesta fichas estelares al verde o al naranja con prudencia.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 92,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "La rueda gira entre vitores mientras ganas suficientes fichas estelares para adquirir el mitico Stardrop."
    },
    {
      "id": 74,
      "sector": 8,
      "title": "Nível 74: El Festival del Hielo de Invierno",
      "desc": "Compite contra Willy en el concurso de pesca sobre el lago congelado.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 93,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Corta un agujero circular en la capa de hielo y saca cinco truchas alpinas antes de que suene la campana."
    },
    {
      "id": 75,
      "sector": 8,
      "title": "Nível 75: La Danza de las Medusas Lunares",
      "desc": "El último día del verano el océano se ilumina con medusas esmeralda.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 94,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Los farolillos de madera flotan en la orilla del muelle mientras las medusas fosforescentes bailan en el mar."
    },
    {
      "id": 76,
      "sector": 8,
      "title": "Nível 76: La Fiesta de la Estrella Invernal",
      "desc": "Intercambia regalos secretos con el vecino que te ha tocado en suerte.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 95,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Bajo el arbol de pino iluminado, entregas una gema de amatista brillante que emociona a tu amigo secreto."
    },
    {
      "id": 77,
      "sector": 8,
      "title": "Nível 77: El Banquete del Luau de Verano",
      "desc": "Añade un ingrediente de calidad iridio a la sopa comunitaria del Gobernador.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 96,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "El Gobernador saborea la cuchara con deleite: '¡Es la sopa mas deliciosa y aromatica que he probado jamas!'"
    },
    {
      "id": 78,
      "sector": 8,
      "title": "Nível 78: El Laberinto Embrujado de la Víspera",
      "desc": "Encuentra la calabaza de oro escondida al final de los túneles tenebrosos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 97,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Esquiva las aranas de peluche y las manos de piedra hasta abrir el cofre que custodia la calabaza dorada."
    },
    {
      "id": 79,
      "sector": 8,
      "title": "Nível 79: La Torta de Fruta Estelar",
      "desc": "La pastelería de Gus perfuma la taberna con recetas de cinco estrellas.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 98,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Cada porcion horneada con mantequilla fresca y moras silvestres restaura toda la energia del agricultor."
    },
    {
      "id": 80,
      "sector": 8,
      "title": "Nível 80: Campeón Invicto de la Feria",
      "desc": "El alcalde Lewis te hace entrega del trofeo de honor del valle.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 99,
      "minAccuracy": 98,
      "timeLimit": 50,
      "content": "Con una puntuacion perfecta de ciento veinticinco puntos, tu expositor campestre queda grabado en la historia."
    },
    {
      "id": 81,
      "sector": 9,
      "title": "Nível 81: El Desierto de Calico",
      "desc": "El autobús de Pam cruza las montañas rocosas hacia el calor del desierto.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "!",
        "?",
        ".",
        ",",
        "-"
      ],
      "targetWpm": 100,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "¡El desierto brilla bajo el sol ardiente! La Caverna Calavera abre sus fauces con peligros insospechados."
    },
    {
      "id": 82,
      "sector": 9,
      "title": "Nível 82: Bombas y Megabombas de Iridio",
      "desc": "Detona conjuntos de rocas para descubrir agujeros y escaleras rápidas.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "targetWpm": 102,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Coloca 1 megabomba, corre 6 pasos atras, ¡BOOM! El agujero conduce 8 pisos mas abajo en caida libre."
    },
    {
      "id": 83,
      "sector": 9,
      "title": "Nível 83: Las Momias y las Serpientes Reales",
      "desc": "Vence a las momias de tela con fuego y espada galáctica.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 104,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Las serpientes de iridio vuelan sobre las rocas; la Espada Galactica repele sus ataques feroces."
    },
    {
      "id": 84,
      "sector": 9,
      "title": "Nível 84: El Piso Cien del Sr. Qi",
      "desc": "Llega al piso 100 sin usar más de diez escaleras de piedra.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 106,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "El Sr. Qi te espera con un vaso de leche de serpiente de iridio que aumenta permanentemente tu vitalidad."
    },
    {
      "id": 85,
      "sector": 9,
      "title": "Nível 85: Los Fragmentos Prismáticos",
      "desc": "La gema más valiosa y misteriosa que refracta todos los colores del arcoíris.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 108,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Un Fragmento Prismatico brilla en tus manos; colocalo entre los tres pilares para despertar la Espada Galactica."
    },
    {
      "id": 86,
      "sector": 9,
      "title": "Nível 86: Vetras Púrpuras de Iridio Puro",
      "desc": "Funde lingotes púrpuras para construir aspersores de iridio.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 110,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Los aspersores de iridio riegan veinticuatro parcelas automaticamente cada manana sin gastar energia."
    },
    {
      "id": 87,
      "sector": 9,
      "title": "Nível 87: La Sala de Nueces de la Isla Jengibre",
      "desc": "Willy repara su barco pesquero para zarpar hacia el archipiélago tropical.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 112,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "El velero cruza las olas del sur hasta atracar en la orilla de Isla Jengibre, hogar de aves exoticas y volcanes."
    },
    {
      "id": 88,
      "sector": 9,
      "title": "Nível 88: La Fruta Estelar del Desierto",
      "desc": "Tu mente se llena con el recuerdo de tu cosa favorita al morder el fruto.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 114,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "¡El sabor celestial de la Fruta Estelar te otorga una fuerza incansable y una serenidad indestructible!"
    },
    {
      "id": 89,
      "sector": 9,
      "title": "Nível 89: Desafío de Qi: Menas Peligrosas",
      "desc": "Desciende por la caverna infestada con modificadores de dificultad extrema.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 116,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "Las criaturas radiactivas acechan en cada esquina; cada palabra tecleada con precision salva tu inventario."
    },
    {
      "id": 90,
      "sector": 9,
      "title": "Nível 90: Conquistador de la Caverna Calavera",
      "desc": "Ningún piso subterráneo guarda secretos ante tu teclado.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 118,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "Sales a la superficie del desierto al amanecer con los bolsillos colmados de lingotes de iridio y gemas estelares."
    },
    {
      "id": 91,
      "sector": 10,
      "title": "Nível 91: Gauntlet: La Huella del Abuelo",
      "desc": "Cuatro velas encendidas en el santuario del abuelo al comenzar el año tres.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 100,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Las cuatro velas del santuario arden iluminando el espiritu del vovô que bendice tu labor campesina."
    },
    {
      "id": 92,
      "sector": 10,
      "title": "Nível 92: Gauntlet: Amistad con Toda la Aldea",
      "desc": "Diez corazones con cada habitante de Pelican Town.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 102,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Desde Linus en su carpa hasta el viejo George en su sillon, cada vecino de Pelican Town te guarda afecto sincero."
    },
    {
      "id": 93,
      "sector": 10,
      "title": "Nível 93: Gauntlet: Todas las Recetas de Cocina",
      "desc": "Cien platos preparados en la cocina de azulejos de tu hogar.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 104,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Sopa de trufa, tarta de chocolate, guiso de calamar y carpa crujiente; tu recetario no tiene paginas en blanco."
    },
    {
      "id": 94,
      "sector": 10,
      "title": "Nível 94: Gauntlet: Todos los Peces Legendarios",
      "desc": "La leyenda de los cinco reyes del agua completada con maestría.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 106,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "La Leyenda, el Pez Carmesi, el Rape, el Glaciar y la Carpa Mutante descansan documentados en tu registro marino."
    },
    {
      "id": 95,
      "sector": 10,
      "title": "Nível 95: Gauntlet: Museo de Gunther Completo",
      "desc": "Noventa y cinco minerales y artefactos arqueológicos catalogados.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 108,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Gunther custodia tus noventa y cinco donaciones en el museo y te entrega la llave de las cloacas con honor."
    },
    {
      "id": 96,
      "sector": 10,
      "title": "Nível 96: Gauntlet: La Granja de los Diez Millones",
      "desc": "Campos automáticos, bodegas añejadas y molinos de viento dorados.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 110,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Las ganancias de tu esfuerzo fluyen como un manantial inagotable que nutre cada rincon de la comunidad del valle."
    },
    {
      "id": 97,
      "sector": 10,
      "title": "Nível 97: Gauntlet: Las Cien Nueces Doradas",
      "desc": "Descubriste todos los enigmas de la jungla y el templo del volcán.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 112,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "El loro de Leo bate sus alas esmeralda mientras la puerta de nogal del Sr. Qi se abre de par en par con reverencia."
    },
    {
      "id": 98,
      "sector": 10,
      "title": "Nível 98: Gauntlet: La Estatua de la Perfección",
      "desc": "Estatua de iridio que regala minerales preciosos cada nueva mañana.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 115,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "La escultura purpura resplandece en el porche de tu cabana como testimonio vivo de constancia y dedicacion suprema."
    },
    {
      "id": 99,
      "sector": 10,
      "title": "Nível 99: El Sendero a la Cumbre",
      "desc": "La gran roca que bloqueaba las montañas se desvanece en polvo dorado.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 118,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Subes por el sendero rocoso donde las nubes se abren al horizonte; el valle entero descansa en paz bajo tus ojos."
    },
    {
      "id": 100,
      "sector": 10,
      "title": "Nível 100: Leyenda Absoluta de Stardew Valley",
      "desc": "La prueba definitiva a 120 WPM y 98% de precisión: ¡El Valle te aclama!",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 120,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "En la cumbre de las montanhas, rodeado por quienes amas y bajo el vuelo de las aves del cielo, te coronas como la Verdadera Leyenda Eterna de Stardew Valley. Tu nombre vivira por siempre en el corazon de esta tierra."
    }
  ],
  "fr": [
    {
      "id": 1,
      "sector": 1,
      "title": "Niveau 1: Las Marcas Táctiles (F y J)",
      "desc": "Encuentra las marcas de la azada con tus índices en F y J.",
      "keys": [
        "f",
        "j",
        " "
      ],
      "targetWpm": 18,
      "minAccuracy": 90,
      "timeLimit": 35,
      "content": "fff jjj fj fj jf jf fff jjj ffff jjjj fjfj jfjf f j f j ff jj fff jjj fj fj f j fj jf f j"
    },
    {
      "id": 2,
      "sector": 1,
      "title": "Niveau 2: Dedos Medios (D y K)",
      "desc": "Planta chirivías en D y K manteniendo los índices firmes.",
      "keys": [
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 20,
      "minAccuracy": 90,
      "timeLimit": 35,
      "content": "ddd kkk dkd kdk fdf jkj dk dk fd jk df kj ddd kkk fff jjj dfjk kjfd d k f j dkfj kfdj dk fd"
    },
    {
      "id": 3,
      "sector": 1,
      "title": "Niveau 3: Dedos Anulares (S y L)",
      "desc": "Riega las parcelas con los anulares en S y L sin torcer las muñecas.",
      "keys": [
        "s",
        "l",
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 22,
      "minAccuracy": 90,
      "timeLimit": 40,
      "content": "sss lll sls lsl sdf jkl asd lkj sss lll ddd kkk fff jjj sal las fas dal kas fjs ldk sl dk fj"
    },
    {
      "id": 4,
      "sector": 1,
      "title": "Niveau 4: Fila Guía Completa (A y Ñ)",
      "desc": "Los meñiques cuidan los bordes de la huerta en A y Ñ.",
      "keys": [
        "a",
        "ñ",
        "s",
        "l",
        "d",
        "k",
        "f",
        "j",
        " "
      ],
      "targetWpm": 24,
      "minAccuracy": 91,
      "timeLimit": 40,
      "content": "aaa ñññ aña ñan asdf jklñ daña saña laña falla calla faja asdf jklñ la sal da la caña fa la da"
    },
    {
      "id": 5,
      "sector": 1,
      "title": "Niveau 5: Estiramiento Central (G y H)",
      "desc": "Los índices alcanzan el centro de la parcela: F a G y J a H.",
      "keys": [
        "g",
        "h",
        "f",
        "j",
        "a",
        "s",
        "d",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 26,
      "minAccuracy": 91,
      "timeLimit": 40,
      "content": "ggg hhh ghg hgh fgh jhg gas haz gala hala gafas hadas saga jaha fgh jklñ gas haz la hada gala"
    },
    {
      "id": 6,
      "sector": 1,
      "title": "Niveau 6: Limpieza de Maleza y Rocas",
      "desc": "Primeras palabras de la granja con la fila guía completa.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 28,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "el grand-pere limpia la maleza con la azada y quita las piedras del potager para sembrar"
    },
    {
      "id": 7,
      "sector": 1,
      "title": "Niveau 7: Primeras Semillas de Chirivía",
      "desc": "Siembra pastinacas y chirivías con ritmo constante y sereno.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 30,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "las panais crecen con el agua fresca del estanque bajo el sol de la huerta"
    },
    {
      "id": 8,
      "sector": 1,
      "title": "Niveau 8: El Regadío Matutino",
      "desc": "Llena la regadera en el estanque antes de que caiga el sol.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 32,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "regar los surcos con la regadera vieja cada manana temprano alegra la parcela"
    },
    {
      "id": 9,
      "sector": 1,
      "title": "Niveau 9: El Espantapájaros de Madera",
      "desc": "Protege los cultivos de los cuervos con buena colocación.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 34,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "el espantapajaros de madera vigila las panais para alejar a los cuervos negros"
    },
    {
      "id": 10,
      "sector": 1,
      "title": "Niveau 10: Fin de la Primera Jornada",
      "desc": "Cosecha tus primeras chirivías de calidad bronce en el valle.",
      "keys": [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ñ",
        " "
      ],
      "targetWpm": 36,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "la primera cosecha de panais de la huerta del grand-pere ya esta en el cajon de envios"
    },
    {
      "id": 11,
      "sector": 2,
      "title": "Niveau 11: Vocales Superiores (E e I)",
      "desc": "Sube los dedos medios desde la fila guía hacia E e I.",
      "keys": [
        "e",
        "i",
        "d",
        "k",
        " "
      ],
      "targetWpm": 36,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "semillas de coliflor y fresas dulces de primavera piden tierra fertil y riego diario"
    },
    {
      "id": 12,
      "sector": 2,
      "title": "Niveau 12: Índices Superiores (R y U)",
      "desc": "Estiramiento hacia R con índice izquierdo y hacia U con el derecho.",
      "keys": [
        "r",
        "u",
        "f",
        "j",
        " "
      ],
      "targetWpm": 37,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "pierre abre la tienda para vender abono puro y paquetes de semillas de patata"
    },
    {
      "id": 13,
      "sector": 2,
      "title": "Niveau 13: Centro Superior (T e Y)",
      "desc": "Extensión hacia T e Y: la tienda de Pierre abre temprano.",
      "keys": [
        "t",
        "y",
        "f",
        "j",
        " "
      ],
      "targetWpm": 38,
      "minAccuracy": 92,
      "timeLimit": 45,
      "content": "la huerta de primavera tiene brotes verdes y fresas listas para cosechar en el valle"
    },
    {
      "id": 14,
      "sector": 2,
      "title": "Niveau 14: Anulares Superiores (W y O)",
      "desc": "Anular izquierdo a W y anular derecho a O para cosechar patatas.",
      "keys": [
        "w",
        "o",
        "s",
        "l",
        " "
      ],
      "targetWpm": 39,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "los canastos de madera rebosan de coliflores gigantes patatas de oro y flores silvestres"
    },
    {
      "id": 15,
      "sector": 2,
      "title": "Niveau 15: Meñiques Superiores (Q y P)",
      "desc": "Alcance de meñiques a Q y P: paquetes de semillas y primavera.",
      "keys": [
        "q",
        "p",
        "a",
        "ñ",
        " "
      ],
      "targetWpm": 40,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "ahorra paquetes de oro para comprar la mochila roja de treinta huecos de pierre"
    },
    {
      "id": 16,
      "sector": 2,
      "title": "Niveau 16: La Huerta de Fresas",
      "desc": "Las fresas son el cultivo estrella del Festival de los Huevos.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 41,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "el festival de los huevos trae las ansiadas semillas de fresas dulces para sembrar"
    },
    {
      "id": 17,
      "sector": 2,
      "title": "Niveau 17: Visita a la Tienda de Pierre",
      "desc": "Compra fertilizante de calidad y semillas de judías verdes.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 42,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "pierre ofrece fertilizante basico y abono de lujo para cosechas de calidad dorada"
    },
    {
      "id": 18,
      "sector": 2,
      "title": "Niveau 18: La Mochila de Treinta Huecos",
      "desc": "Ahorra oro para ampliar el inventario y llevar más herramientas.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 43,
      "minAccuracy": 93,
      "timeLimit": 50,
      "content": "con dos mil monedas de oro amplias el zurron para llevar mas semillas y herramientas"
    },
    {
      "id": 19,
      "sector": 2,
      "title": "Niveau 19: Fertilizante Rápido de la Huerta",
      "desc": "Acelera el crecimiento de tus cosechas antes del cambio de estación.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 44,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "el abono rapido acelera el crecimiento de los cultivos antes del cambio de estacion"
    },
    {
      "id": 20,
      "sector": 2,
      "title": "Niveau 20: Cosecha Dorada de Primavera",
      "desc": "Cestas llenas de coliflores gigantes y fresas de calidad oro.",
      "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        " "
      ],
      "targetWpm": 45,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "el aroma a tierra mojada y fresas dulces llena el valle en el vigesimo octavo dia"
    },
    {
      "id": 21,
      "sector": 3,
      "title": "Niveau 21: Índices Inferiores (V y M)",
      "desc": "Baja los índices a V y M para descender a las profundidades de la mina.",
      "keys": [
        "v",
        "m",
        "f",
        "j",
        " "
      ],
      "targetWpm": 45,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "veta de cobre mina profunda vagoneta de metal maza de clint y moho en la cueva oscura"
    },
    {
      "id": 22,
      "sector": 3,
      "title": "Niveau 22: Medios Inferiores (C y Coma)",
      "desc": "Dedo medio izquierdo a C y derecho a coma para picar rocas.",
      "keys": [
        "c",
        ",",
        "d",
        "k",
        " "
      ],
      "targetWpm": 46,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "cobre, roca, cueva, pico, carbon, veta, geoda, hierro, mineral, camino subterraneo,"
    },
    {
      "id": 23,
      "sector": 3,
      "title": "Niveau 23: Anulares Inferiores (X y Punto)",
      "desc": "Anulares en X y punto para excavar gemas y geodas.",
      "keys": [
        "x",
        ".",
        "s",
        "l",
        " "
      ],
      "targetWpm": 47,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "cuarzo. geoda. mina. gema. polvo. mineral. hierro. cobre. jade. pico de minero."
    },
    {
      "id": 24,
      "sector": 3,
      "title": "Niveau 24: Meñiques Inferiores (Z y Guion)",
      "desc": "Meñiques en Z y guion para encender antorchas en la penumbra.",
      "keys": [
        "z",
        "-",
        "a",
        "ñ",
        " "
      ],
      "targetWpm": 48,
      "minAccuracy": 93,
      "timeLimit": 45,
      "content": "zarza en la entrada pozo -pico -mina luz de antorcha veta azul raiz gema de cuarzo diez rocas"
    },
    {
      "id": 25,
      "sector": 3,
      "title": "Niveau 25: Índices Centrales Inferiores (B y N)",
      "desc": "Estiramiento hacia B y N: lingotes de cobre y carbón oscuro.",
      "keys": [
        "b",
        "n",
        "f",
        "j",
        " "
      ],
      "targetWpm": 49,
      "minAccuracy": 94,
      "timeLimit": 45,
      "content": "barro carbon nabo mineral cobre hierro lingote brillante vagoneta mina profunda buey"
    },
    {
      "id": 26,
      "sector": 3,
      "title": "Niveau 26: El Ascensor Minero",
      "desc": "El ascensor minero guarda tu progreso cada cinco niveles subterráneos.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 50,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "el ascensor de la montagne guarda el progreso cada cinco pisos entre pozas de agua y antorchas"
    },
    {
      "id": 27,
      "sector": 3,
      "title": "Niveau 27: Murciélagos y Cangrejos de Roca",
      "desc": "Blande tu espada oxidada con reflejos ágiles ante los monstruos.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 51,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "rompe las piedras redondas con cuidado, un cangrejo de roca podria esconderse bajo el caparazon"
    },
    {
      "id": 28,
      "sector": 3,
      "title": "Niveau 28: La Herrería de Clint",
      "desc": "Abre geodas en el yunque de Clint para descubrir amatistas y jade.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 52,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "clint rompe cada geoda en su yunque por veinticinco monedas de oro, revelando gemas raras"
    },
    {
      "id": 29,
      "sector": 3,
      "title": "Niveau 29: El Horno de Fundición",
      "desc": "Quema carbón para fundir menas de hierro y lingotes relucientes.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 53,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "cinco menas de cobre y una unidad de carbon forman un lingote anaranjado en el horno de piedra"
    },
    {
      "id": 30,
      "sector": 3,
      "title": "Niveau 30: El Piso Ochenta de Magma",
      "desc": "El calor volcánico forja los mejores minerales de oro del valle.",
      "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "-"
      ],
      "targetWpm": 54,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "las pozas de lava burbujean en el fondo de la montagne mientras los murcielagos de fuego acechan"
    },
    {
      "id": 31,
      "sector": 4,
      "title": "Niveau 31: Mayúsculas con Mano Cruzada",
      "desc": "Si escribes una letra con la mano izquierda, pulsa Shift con el meñique derecho.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "A",
        "Z"
      ],
      "targetWpm": 54,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Willy Playa Mar Oceano Muelle Pescador Cana Cebo Anzuelo Trucha Lubina Mareas Redes Bagre"
    },
    {
      "id": 32,
      "sector": 4,
      "title": "Niveau 32: Nombres Propios de Pelican Town",
      "desc": "Escribe con mayúsculas los nombres de los aldeanos de Stardew Valley.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "P",
        "L"
      ],
      "targetWpm": 55,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Robin, Demetrius, Maru, Sebastian, Linus, Pierre, Caroline, Abigail, Alex, Evelyn."
    },
    {
      "id": 33,
      "sector": 4,
      "title": "Niveau 33: La Caña de Bambú de Willy",
      "desc": "Lanza el anzuelo con el meñique en Shift para atrapar carpas de río.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 56,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "Willy contempla las olas desde su muelle y te regala una Cana de Bambu con carino sincero."
    },
    {
      "id": 34,
      "sector": 4,
      "title": "Niveau 34: Peces Soles y Bagres de Río",
      "desc": "Los días lluviosos son perfectos para buscar al escurridizo Bagre.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 57,
      "minAccuracy": 94,
      "timeLimit": 50,
      "content": "En los dias de lluvia y tormenta, los enormes Bagres plateados pican en el Rio del valle."
    },
    {
      "id": 35,
      "sector": 4,
      "title": "Niveau 35: Trampas para Cangrejos en el Muelle",
      "desc": "Coloca nasas con cebo para capturar almejas, berberechos y langostas.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 58,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Las Nasas para Cangrejos en los pontones del oceano flotan capturando langostas y almejas."
    },
    {
      "id": 36,
      "sector": 4,
      "title": "Niveau 36: El Mercado Nocturno de Invierno",
      "desc": "El submarino verde se sumerge en las profundidades abisales.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 59,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "El Submarino del Mercado Nocturno desciende en la oscuridad abisal para pescar rarezas marinas."
    },
    {
      "id": 37,
      "sector": 4,
      "title": "Niveau 37: La Caña de Iridio",
      "desc": "Equipa anzuelos giratorios y cebo silvestre para lanzamientos perfectos.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 60,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "La Cana de Iridio vendida por Willy permite enganchar plomos pesados para calmar a los peces rebeldes."
    },
    {
      "id": 38,
      "sector": 4,
      "title": "Niveau 38: Leyendas del Océano",
      "desc": "Atrapa al mítico Pez Carmesí en la poza este de la playa.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 61,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Solo los pescadores que dominan la calma del sedal logran capturar al Pez Carmesi sin romper el hilo."
    },
    {
      "id": 39,
      "sector": 4,
      "title": "Niveau 39: El Amuleto de la Sirena",
      "desc": "En los días de lluvia el viejo marinero aparece en el acantilado.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 62,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Bajo la lluvia del acantilado, el Viejo Marinero ofrece el mitico Colgante de Sirena por cinco mil monedas."
    },
    {
      "id": 40,
      "sector": 4,
      "title": "Niveau 40: Pescador Maestro del Valle",
      "desc": "Completaste la colección completa de peces del libro de recuerdos.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 63,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "El brillo plateado del agua despide a Willy mientras contemplas el horizonte azul desde el muelle."
    },
    {
      "id": 41,
      "sector": 5,
      "title": "Niveau 41: Vocales con Acento en la Granja",
      "desc": "Pulsación de tecla de acento antes de la vocal: gallinas y establos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 63,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "la vaca dio leche fresca, la gallina comió grano, el pato nadó en el estanque, nació un ternero"
    },
    {
      "id": 42,
      "sector": 5,
      "title": "Niveau 42: Signos de Exclamación e Interrogación",
      "desc": "¡Acaricia a tus animales cada mañana para subir sus corazones!",
      "keys": [
        "¿",
        "?",
        "¡",
        "!"
      ],
      "targetWpm": 64,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "¡Acaricia a tus animales cada mañana! ¿Escuchaste al gallo cantar al amanecer en el rancho de Marnie?"
    },
    {
      "id": 43,
      "sector": 5,
      "title": "Niveau 43: Comillas y Dos Puntos en la Quesería",
      "desc": "Marnie te explica: 'El queso curado tiene un sabor inigualable'.",
      "keys": [
        "\"",
        ":",
        ";"
      ],
      "targetWpm": 65,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Marnie dijo: \"Un animal bien alimentado con heno siempre da productos de calidad oro para la quesería\"."
    },
    {
      "id": 44,
      "sector": 5,
      "title": "Niveau 44: Las Gallinas Azules de Shane",
      "desc": "Conoce a las raras gallinas de plumaje azul que nacen con cariño.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "¡",
        "!",
        "¿",
        "?"
      ],
      "targetWpm": 66,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "¡Qué sorpresa tan hermosa! ¿Sabías que Shane cría gallinas azules cuando alcanzas ocho corazones con él?"
    },
    {
      "id": 45,
      "sector": 5,
      "title": "Niveau 45: Mayonesa de Huevo de Pato",
      "desc": "Coloca huevos grandes en la máquina de mayonesa para obtener frascos dorados.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 67,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "La mayonesa de pato se vende a un precio fantastico en el cajon de envios que el grand-pere dejo en la ferme."
    },
    {
      "id": 46,
      "sector": 5,
      "title": "Niveau 46: Las Trufas de los Cerdos",
      "desc": "Los cerdos excavan trufas aromáticas en el pasto durante el otoño.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 68,
      "minAccuracy": 95,
      "timeLimit": 50,
      "content": "Durante los dias soleados de otono, los cerdos buscan trufas frescas bajo la sombra de los robles centenarios."
    },
    {
      "id": 47,
      "sector": 5,
      "title": "Niveau 47: El Granero de Lujo de Robin",
      "desc": "Robin amplía el establo con sistema de alimentación automática de heno.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 69,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "El sistema automatico distribuye el heno en los comederos; ¡los animales duermen calidos en el establo!"
    },
    {
      "id": 48,
      "sector": 5,
      "title": "Niveau 48: Lana Suave y Telares Artesanales",
      "desc": "Esquila a las ovejas para hilar ovillos de lana en el telar de madera.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 70,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Las tijeras cortan suavemente la lana blanca de las ovejas; el telar mecanico produce rollos de tela fina."
    },
    {
      "id": 49,
      "sector": 5,
      "title": "Niveau 49: El Aceite de Trufa Dorado",
      "desc": "Procesa las trufas en la aceitera para multiplicar las ganancias del rancho.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 71,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "¡El aceite de trufa artesanal es codiciado por los chefs del meson y por el maire Lewis para sus recetas!"
    },
    {
      "id": 50,
      "sector": 5,
      "title": "Niveau 50: Amigo de los Animales del Valle",
      "desc": "Todos los animales de la granja tienen cinco corazones completos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú"
      ],
      "targetWpm": 72,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Las vacas mugen contentas, las cabras balan en el corral y los gatos ronronean bajo el alero de la cabana."
    },
    {
      "id": 51,
      "sector": 6,
      "title": "Niveau 51: Fila Numérica Izquierda (1, 2, 3, 4, 5)",
      "desc": "Dígitos de la mano izquierda: oro en el monedero y cantidades de lotes.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "targetWpm": 72,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "123 panais, 451 patatas, 234 coliflores, 512 fresas y 345 judias para los lotes de los Junimos."
    },
    {
      "id": 52,
      "sector": 6,
      "title": "Niveau 52: Fila Numérica Derecha (6, 7, 8, 9, 0)",
      "desc": "Dígitos de la mano derecha: precios de semillas y materiales.",
      "keys": [
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 73,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "678 menas de cobre, 890 de hierro, 789 de oro y 600 maderas nobles para reconstruir el centro civico."
    },
    {
      "id": 53,
      "sector": 6,
      "title": "Niveau 53: Monedero de Oro ($g)",
      "desc": "Escribe precios exactos de Stardew Valley con el símbolo de oro.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 74,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "150$g en semillas, 500$g en abono, 2500$g para las vagonetas y 42500$g para reparar el autobus de Pam."
    },
    {
      "id": 54,
      "sector": 6,
      "title": "Niveau 54: Lote de la Despensa",
      "desc": "Donaciones de chirivías, judías, coliflores y patatas a los pequeños espíritus.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 75,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "El Lote de Primavera requiere 1 panais, 1 judia verde, 1 coliflor y 1 patata de calidad estandar."
    },
    {
      "id": 55,
      "sector": 6,
      "title": "Niveau 55: Lote de la Caldera",
      "desc": "99 piedras, 1 lingote de cobre, 1 lingote de hierro y 1 lingote de oro.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 76,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Al reparar la Sala de Calderas con 99 piedras y 3 lingotes, las vagonetas mineras vuelven a funcionar."
    },
    {
      "id": 56,
      "sector": 6,
      "title": "Niveau 56: Lote del Acuario de Peces",
      "desc": "El río, el lago de la montaña y el océano se unen para restaurar el estanque.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 77,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Los Junimos celebran danzando con 1 carpa, 1 bagre, 1 besugo, 1 pez sol y 1 esturion plateado del lago."
    },
    {
      "id": 57,
      "sector": 6,
      "title": "Niveau 57: Lote de la Caja Fuerte",
      "desc": "Dona 2500$g, 5000$g, 10000$g y 25000$g para reparar el autobús de Pam.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 78,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "La donacion total de 42500$g permite reparar el motor del viejo autobus que viaja al desierto de Calico."
    },
    {
      "id": 58,
      "sector": 6,
      "title": "Niveau 58: El Tablón de Anuncios",
      "desc": "Favores especiales para los vecinos: mermelada, vino y flores silvestres.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 79,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Completar el Tablon de Anuncios con mermelada y flores otorga 500 puntos de amistad con todos los aldeanos."
    },
    {
      "id": 59,
      "sector": 6,
      "title": "Niveau 59: La Danza de los Junimos",
      "desc": "Los pequeños espíritus del bosque saltan con estrellas mágicas en sus cabezas.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 80,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "Cada noche los Junimos colocan una estrella dorada en la chimenea; la madera cobra vida con cantos magicos."
    },
    {
      "id": 60,
      "sector": 6,
      "title": "Niveau 60: ¡Centro Cívico Restaurado!",
      "desc": "El pueblo expulsa a JojaMart y recupera el corazón histórico del valle.",
      "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ],
      "targetWpm": 81,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "El maire Lewis coloca la placa conmemorativa mientras todo Pelican Town celebra la derrota de JojaMart."
    },
    {
      "id": 61,
      "sector": 7,
      "title": "Niveau 61: Símbolos Mágicos del Mago M. Rasmodius",
      "desc": "Signos matemáticos y arcanos del libro de conjuros botánicos.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 81,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "#mago $oro %esencia &bosque *junimo +pocion =conjuro ~portal #runa *estrella $gema &valle"
    },
    {
      "id": 62,
      "sector": 7,
      "title": "Niveau 62: Llaves y Corchetes de Alquimia",
      "desc": "El Mago prepara el brebaje del bosque en su caldero burbujeante.",
      "keys": [
        "{",
        "}",
        "[",
        "]",
        "<",
        ">"
      ],
      "targetWpm": 82,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "pocion[raiz_mandragora + hongo_purpura]; caldero<magia_ancestral> = despertar_espiritus_junimo;"
    },
    {
      "id": 63,
      "sector": 7,
      "title": "Niveau 63: El Bosque Secreto y la Madera Noble",
      "desc": "Tala los tocones de madera noble que renacen cada nuevo día.",
      "keys": [
        "/",
        "\\",
        "|",
        "_"
      ],
      "targetWpm": 83,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "madera_noble/bosque_secreto | tocones_diarios = 12_piezas + hacha_de_acero_requerida;"
    },
    {
      "id": 64,
      "sector": 7,
      "title": "Niveau 64: La Cabaña de la Bruja en el Pantano",
      "desc": "Cruza el portal oscuro con la tinta mágica que el mago perdió.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 84,
      "minAccuracy": 96,
      "timeLimit": 50,
      "content": "#tinta_magica + #esencia_vacio = acceso_pantano_bruja; sirviente_goblin.recibir('mayonesa_vacio');"
    },
    {
      "id": 65,
      "sector": 7,
      "title": "Niveau 65: Los Obeliscos Elementales del Mago",
      "desc": "El Mago construye torres de teletransporte instantáneo en tu granja.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 85,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "obelisco_agua = 1000000$g + 5_conchas; obelisco_tierra = 10_geodas_magma + 10_lingotes_iridio;"
    },
    {
      "id": 66,
      "sector": 7,
      "title": "Niveau 66: La Choza del Junimo Cosechador",
      "desc": "Los Junimos recolectan automáticamente tus hortalizas y flores.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 86,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "choza_junimo{radio: 'parcela_17x17', animo: 100%}; espiritus_recolectan_cosechas_automaticas = true;"
    },
    {
      "id": 67,
      "sector": 7,
      "title": "Niveau 67: La Estatua del Viejo Cannoli",
      "desc": "Entrega una baya de gema dulce al viejo maestro Cannoli.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 87,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "maestro_cannoli.ofrecer('baya_gema_dulce') -> '¡El sabor mas dulce de todos!' -> fruta_estelar;"
    },
    {
      "id": 68,
      "sector": 7,
      "title": "Niveau 68: El Gran Reloj Dorado de la Granja",
      "desc": "Diez millones de monedas para detener la aparición de maleza para siempre.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 88,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "reloj_dorado = 10000000$g; proteccion_ferme{maleza: 0, escombros: 0, tiempo_detenido: true};"
    },
    {
      "id": 69,
      "sector": 7,
      "title": "Niveau 69: El Altar de las Ilusiones",
      "desc": "Cambia tu apariencia, ropa y peinado en el sótano del mago.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 89,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "altar_de_las_ilusiones.cambiar_apariencia({peinado: 'campesino', camisa: 'verde_hoja', sombrero: 'paja'});"
    },
    {
      "id": 70,
      "sector": 7,
      "title": "Niveau 70: La Alianza de los Arcanos del Bosque",
      "desc": "El valle y la magia del bosque viven en armoniosa prosperidad.",
      "keys": [
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "=",
        "~"
      ],
      "targetWpm": 90,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "la_magia_ancestral_de_rasmodius_y_los_junimos_bendice_la_tierra_del_valle_para_siempre;"
    },
    {
      "id": 71,
      "sector": 8,
      "title": "Niveau 71: El Concurso de Exhibición de Otoño",
      "desc": "Elige nueve artículos de calidad iridio para ganar el primer premio.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 90,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "La Feria de Stardew Valley abre el decimosexto dia de otono con musica campestre y puestos coloridos."
    },
    {
      "id": 72,
      "sector": 8,
      "title": "Niveau 72: Los Nueve Objetos de Calidad Iridio",
      "desc": "Vino añejado, queso de cabra, pez legendario y tarta casera.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 91,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "El maire Lewis evalua con lupa cada categoria: agricultura, pesca, mineria, artesania y cocina tradicional."
    },
    {
      "id": 73,
      "sector": 8,
      "title": "Niveau 73: La Rueda de la Fortuna",
      "desc": "Apuesta fichas estelares al verde o al naranja con prudencia.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 92,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "La rueda gira entre vitores mientras ganas suficientes fichas estelares para adquirir el mitico Stardrop."
    },
    {
      "id": 74,
      "sector": 8,
      "title": "Niveau 74: El Festival del Hielo de Invierno",
      "desc": "Compite contra Willy en el concurso de pesca sobre el lago congelado.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 93,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Corta un agujero circular en la capa de hielo y saca cinco truchas alpinas antes de que suene la campana."
    },
    {
      "id": 75,
      "sector": 8,
      "title": "Niveau 75: La Danza de las Medusas Lunares",
      "desc": "El último día del verano el océano se ilumina con medusas esmeralda.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 94,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Los farolillos de madera flotan en la orilla del muelle mientras las medusas fosforescentes bailan en el mar."
    },
    {
      "id": 76,
      "sector": 8,
      "title": "Niveau 76: La Fiesta de la Estrella Invernal",
      "desc": "Intercambia regalos secretos con el vecino que te ha tocado en suerte.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 95,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Bajo el arbol de pino iluminado, entregas una gema de amatista brillante que emociona a tu amigo secreto."
    },
    {
      "id": 77,
      "sector": 8,
      "title": "Niveau 77: El Banquete del Luau de Verano",
      "desc": "Añade un ingrediente de calidad iridio a la sopa comunitaria del Gobernador.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 96,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "El Gobernador saborea la cuchara con deleite: '¡Es la sopa mas deliciosa y aromatica que he probado jamas!'"
    },
    {
      "id": 78,
      "sector": 8,
      "title": "Niveau 78: El Laberinto Embrujado de la Víspera",
      "desc": "Encuentra la calabaza de oro escondida al final de los túneles tenebrosos.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 97,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Esquiva las aranas de peluche y las manos de piedra hasta abrir el cofre que custodia la calabaza dorada."
    },
    {
      "id": 79,
      "sector": 8,
      "title": "Niveau 79: La Torta de Fruta Estelar",
      "desc": "La pastelería de Gus perfuma la taberna con recetas de cinco estrellas.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 98,
      "minAccuracy": 97,
      "timeLimit": 50,
      "content": "Cada porcion horneada con mantequilla fresca y moras silvestres restaura toda la energia del agricultor."
    },
    {
      "id": 80,
      "sector": 8,
      "title": "Niveau 80: Campeón Invicto de la Feria",
      "desc": "El alcalde Lewis te hace entrega del trofeo de honor del valle.",
      "keys": [
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 99,
      "minAccuracy": 98,
      "timeLimit": 50,
      "content": "Con una puntuacion perfecta de ciento veinticinco puntos, tu expositor campestre queda grabado en la historia."
    },
    {
      "id": 81,
      "sector": 9,
      "title": "Niveau 81: El Desierto de Calico",
      "desc": "El autobús de Pam cruza las montañas rocosas hacia el calor del desierto.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "!",
        "?",
        ".",
        ",",
        "-"
      ],
      "targetWpm": 100,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "¡El desierto brilla bajo el sol ardiente! La Caverna Calavera abre sus fauces con peligros insospechados."
    },
    {
      "id": 82,
      "sector": 9,
      "title": "Niveau 82: Bombas y Megabombas de Iridio",
      "desc": "Detona conjuntos de rocas para descubrir agujeros y escaleras rápidas.",
      "keys": [
        "ShiftLeft",
        "ShiftRight",
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "targetWpm": 102,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Coloca 1 megabomba, corre 6 pasos atras, ¡BOOM! El agujero conduce 8 pisos mas abajo en caida libre."
    },
    {
      "id": 83,
      "sector": 9,
      "title": "Niveau 83: Las Momias y las Serpientes Reales",
      "desc": "Vence a las momias de tela con fuego y espada galáctica.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 104,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Las serpientes de iridio vuelan sobre las rocas; la Espada Galactica repele sus ataques feroces."
    },
    {
      "id": 84,
      "sector": 9,
      "title": "Niveau 84: El Piso Cien del Sr. Qi",
      "desc": "Llega al piso 100 sin usar más de diez escaleras de piedra.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 106,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "El Sr. Qi te espera con un vaso de leche de serpiente de iridio que aumenta permanentemente tu vitalidad."
    },
    {
      "id": 85,
      "sector": 9,
      "title": "Niveau 85: Los Fragmentos Prismáticos",
      "desc": "La gema más valiosa y misteriosa que refracta todos los colores del arcoíris.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 108,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Un Fragmento Prismatico brilla en tus manos; colocalo entre los tres pilares para despertar la Espada Galactica."
    },
    {
      "id": 86,
      "sector": 9,
      "title": "Niveau 86: Vetras Púrpuras de Iridio Puro",
      "desc": "Funde lingotes púrpuras para construir aspersores de iridio.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 110,
      "minAccuracy": 97,
      "timeLimit": 45,
      "content": "Los aspersores de iridio riegan veinticuatro parcelas automaticamente cada manana sin gastar energia."
    },
    {
      "id": 87,
      "sector": 9,
      "title": "Niveau 87: La Sala de Nueces de la Isla Jengibre",
      "desc": "Willy repara su barco pesquero para zarpar hacia el archipiélago tropical.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 112,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "El velero cruza las olas del sur hasta atracar en la orilla de Isla Jengibre, hogar de aves exoticas y volcanes."
    },
    {
      "id": 88,
      "sector": 9,
      "title": "Niveau 88: La Fruta Estelar del Desierto",
      "desc": "Tu mente se llena con el recuerdo de tu cosa favorita al morder el fruto.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 114,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "¡El sabor celestial de la Fruta Estelar te otorga una fuerza incansable y una serenidad indestructible!"
    },
    {
      "id": 89,
      "sector": 9,
      "title": "Niveau 89: Desafío de Qi: Menas Peligrosas",
      "desc": "Desciende por la caverna infestada con modificadores de dificultad extrema.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 116,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "Las criaturas radiactivas acechan en cada esquina; cada palabra tecleada con precision salva tu inventario."
    },
    {
      "id": 90,
      "sector": 9,
      "title": "Niveau 90: Conquistador de la Caverna Calavera",
      "desc": "Ningún piso subterráneo guarda secretos ante tu teclado.",
      "keys": [
        "ShiftLeft",
        "ShiftRight"
      ],
      "targetWpm": 118,
      "minAccuracy": 98,
      "timeLimit": 45,
      "content": "Sales a la superficie del desierto al amanecer con los bolsillos colmados de lingotes de iridio y gemas estelares."
    },
    {
      "id": 91,
      "sector": 10,
      "title": "Niveau 91: Gauntlet: La Huella del Abuelo",
      "desc": "Cuatro velas encendidas en el santuario del abuelo al comenzar el año tres.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 100,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Las cuatro velas del santuario arden iluminando el espiritu del grand-pere que bendice tu labor campesina."
    },
    {
      "id": 92,
      "sector": 10,
      "title": "Niveau 92: Gauntlet: Amistad con Toda la Aldea",
      "desc": "Diez corazones con cada habitante de Pelican Town.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 102,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Desde Linus en su carpa hasta el viejo George en su sillon, cada vecino de Pelican Town te guarda afecto sincero."
    },
    {
      "id": 93,
      "sector": 10,
      "title": "Niveau 93: Gauntlet: Todas las Recetas de Cocina",
      "desc": "Cien platos preparados en la cocina de azulejos de tu hogar.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 104,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Sopa de trufa, tarta de chocolate, guiso de calamar y carpa crujiente; tu recetario no tiene paginas en blanco."
    },
    {
      "id": 94,
      "sector": 10,
      "title": "Niveau 94: Gauntlet: Todos los Peces Legendarios",
      "desc": "La leyenda de los cinco reyes del agua completada con maestría.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 106,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "La Leyenda, el Pez Carmesi, el Rape, el Glaciar y la Carpa Mutante descansan documentados en tu registro marino."
    },
    {
      "id": 95,
      "sector": 10,
      "title": "Niveau 95: Gauntlet: Museo de Gunther Completo",
      "desc": "Noventa y cinco minerales y artefactos arqueológicos catalogados.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 108,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Gunther custodia tus noventa y cinco donaciones en el museo y te entrega la llave de las cloacas con honor."
    },
    {
      "id": 96,
      "sector": 10,
      "title": "Niveau 96: Gauntlet: La Granja de los Diez Millones",
      "desc": "Campos automáticos, bodegas añejadas y molinos de viento dorados.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 110,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Las ganancias de tu esfuerzo fluyen como un manantial inagotable que nutre cada rincon de la comunidad del valle."
    },
    {
      "id": 97,
      "sector": 10,
      "title": "Niveau 97: Gauntlet: Las Cien Nueces Doradas",
      "desc": "Descubriste todos los enigmas de la jungla y el templo del volcán.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 112,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "El loro de Leo bate sus alas esmeralda mientras la puerta de nogal del Sr. Qi se abre de par en par con reverencia."
    },
    {
      "id": 98,
      "sector": 10,
      "title": "Niveau 98: Gauntlet: La Estatua de la Perfección",
      "desc": "Estatua de iridio que regala minerales preciosos cada nueva mañana.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 115,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "La escultura purpura resplandece en el porche de tu cabana como testimonio vivo de constancia y dedicacion suprema."
    },
    {
      "id": 99,
      "sector": 10,
      "title": "Niveau 99: El Sendero a la Cumbre",
      "desc": "La gran roca que bloqueaba las montañas se desvanece en polvo dorado.",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 118,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "Subes por el sendero rocoso donde las nubes se abren al horizonte; el valle entero descansa en paz bajo tus ojos."
    },
    {
      "id": 100,
      "sector": 10,
      "title": "Niveau 100: Leyenda Absoluta de Stardew Valley",
      "desc": "La prueba definitiva a 120 WPM y 98% de precisión: ¡El Valle te aclama!",
      "keys": [
        "a",
        "z",
        "ShiftLeft"
      ],
      "targetWpm": 120,
      "minAccuracy": 98,
      "timeLimit": 40,
      "content": "En la cumbre de las montagnes, rodeado por quienes amas y bajo el vuelo de las aves del cielo, te coronas como la Verdadera Leyenda Eterna de Stardew Valley. Tu nombre vivira por siempre en el corazon de esta tierra."
    }
  ]
};
export const ARCADE_WORDS = {
  "es": [
    "junimo",
    "semilla",
    "azada",
    "pala",
    "riego",
    "fresa",
    "pastinaca",
    "chufa",
    "maiz",
    "trigo",
    "arroz",
    "patata",
    "tomate",
    "calabaza",
    "melocoton",
    "uva",
    "gallina",
    "vaca",
    "oveja",
    "pato",
    "conejo",
    "cerdo",
    "caballo",
    "trufa",
    "leche",
    "queso",
    "huevo",
    "lana",
    "mayonesa",
    "miel",
    "sidra",
    "vino",
    "cobre",
    "hierro",
    "oro",
    "iridio",
    "cuarzo",
    "rubi",
    "jade",
    "amatista",
    "geoda",
    "carbon",
    "diamante",
    "prismatico",
    "stardrop",
    "estrella",
    "bosque",
    "rio",
    "playa",
    "muelle",
    "carpa",
    "trucha",
    "lucio",
    "bagre",
    "lubina",
    "robin",
    "demetrius",
    "maru",
    "sebastian",
    "pierre",
    "caroline",
    "abigail",
    "alex",
    "evelyn",
    "george",
    "haley",
    "emily",
    "lewis",
    "marnie",
    "shane",
    "clint",
    "gus",
    "willy",
    "linus",
    "harvey",
    "elliott",
    "leah",
    "penny"
  ],
  "en": [
    "junimo",
    "seed",
    "hoe",
    "shovel",
    "water",
    "strawberry",
    "parsnip",
    "yam",
    "corn",
    "wheat",
    "rice",
    "potato",
    "tomato",
    "pumpkin",
    "peach",
    "grape",
    "chicken",
    "cow",
    "sheep",
    "duck",
    "rabbit",
    "pig",
    "horse",
    "truffle",
    "milk",
    "cheese",
    "egg",
    "wool",
    "mayo",
    "honey",
    "cider",
    "wine",
    "copper",
    "iron",
    "gold",
    "iridium",
    "quartz",
    "ruby",
    "jade",
    "amethyst",
    "geode",
    "coal",
    "diamond",
    "prismatic",
    "stardrop",
    "star",
    "forest",
    "river",
    "beach",
    "dock",
    "carp",
    "trout",
    "pike",
    "catfish",
    "bass",
    "robin",
    "demetrius",
    "maru",
    "sebastian",
    "pierre",
    "caroline",
    "abigail",
    "alex",
    "evelyn",
    "george",
    "haley",
    "emily",
    "lewis",
    "marnie",
    "shane",
    "clint",
    "gus",
    "willy",
    "linus",
    "harvey",
    "elliott",
    "leah",
    "penny"
  ],
  "pt": [
    "junimo",
    "semente",
    "enxada",
    "pá",
    "rega",
    "morango",
    "pastinaca",
    "inhame",
    "milho",
    "trigo",
    "arroz",
    "batata",
    "tomate",
    "abóbora",
    "pêssego",
    "uva",
    "galinha",
    "vaca",
    "ovelha",
    "pato",
    "coelho",
    "porco",
    "cavalo",
    "trufa",
    "leite",
    "queijo",
    "ovo",
    "lã",
    "maionese",
    "mel",
    "sidra",
    "vinho",
    "cobre",
    "ferro",
    "ouro",
    "irídio",
    "quartzo",
    "rubi",
    "jade",
    "ametista",
    "geodo",
    "carvão",
    "diamante",
    "prismático",
    "stardrop",
    "estrela",
    "floresta",
    "rio",
    "praia",
    "cais",
    "carpa",
    "truta",
    "lúcio",
    "bagre",
    "robalo",
    "robin",
    "demetrius",
    "maru",
    "sebastian",
    "pierre",
    "caroline",
    "abigail",
    "alex",
    "evelyn",
    "george",
    "haley",
    "emily",
    "lewis",
    "marnie",
    "shane",
    "clint",
    "gus",
    "willy",
    "linus",
    "harvey",
    "elliott",
    "leah",
    "penny"
  ],
  "fr": [
    "junimo",
    "graine",
    "houe",
    "pelle",
    "arrosage",
    "fraise",
    "panais",
    "patate",
    "mais",
    "ble",
    "riz",
    "pomme",
    "tomate",
    "citrouille",
    "peche",
    "raisin",
    "poule",
    "vache",
    "mouton",
    "canard",
    "lapin",
    "cochon",
    "cheval",
    "truffe",
    "lait",
    "fromage",
    "oeuf",
    "laine",
    "mayo",
    "miel",
    "cidre",
    "vin",
    "cuivre",
    "fer",
    "or",
    "iridium",
    "quartz",
    "rubis",
    "jade",
    "amethyste",
    "geode",
    "charbon",
    "diamant",
    "prismatique",
    "stardrop",
    "etoile",
    "foret",
    "riviere",
    "plage",
    "jetee",
    "carpe",
    "truite",
    "brochet",
    "barbeau",
    "bar",
    "robin",
    "demetrius",
    "maru",
    "sebastian",
    "pierre",
    "caroline",
    "abigail",
    "alex",
    "evelyn",
    "george",
    "haley",
    "emily",
    "lewis",
    "marnie",
    "shane",
    "clint",
    "gus",
    "willy",
    "linus",
    "harvey",
    "elliott",
    "leah",
    "penny"
  ]
};
export const BOSS_ENCOUNTERS = {
  "es": [
    {
      "phase": 1,
      "speech": "¡Habitante del valle! Joja Corporation demolerá el Centro Cívico para construir un almacén JojaMart.",
      "counterText": "cultivar pastinacas con abono natural y cuidar la tierra del abuelo",
      "timeLimit": 16
    },
    {
      "phase": 2,
      "speech": "¿Crees que unas semillas silvestres detendrán a la mayor corporación del continente? ¡Firma la membresía Joja!",
      "counterText": "las semillas frescas de Pierre tienen la fuerza del sol de primavera",
      "timeLimit": 15
    },
    {
      "phase": 3,
      "speech": "¡Compraré la tienda de Pierre y pondré precios abusivos en todas las herramientas del pueblo!",
      "counterText": "los aldeanos de Pelican Town se mantienen unidos frente a Joja",
      "timeLimit": 14
    },
    {
      "phase": 4,
      "speech": "¡Mis excavadoras de Joja verterán residuos en las aguas del río de Willy!",
      "counterText": "los peces plateados nadan libres en las corrientes limpias del valle",
      "timeLimit": 13
    },
    {
      "phase": 5,
      "speech": "¡Los cupones de descuento del noventa por ciento quebrarán el comercio local para siempre!",
      "counterText": "el valor de lo artesanal y el trabajo honesto supera a cualquier cupon",
      "timeLimit": 12
    },
    {
      "phase": 6,
      "speech": "¡Activando la máquina expendedora de Joja-Cola en cada rincón del pueblo!",
      "counterText": "la sidra dorada de manzana y el queso curado de Marnie son incomparables",
      "timeLimit": 11
    },
    {
      "phase": 7,
      "speech": "¡No puedes vencerme! ¡Tengo el contrato corporativo sellado en mi maletín de cuero!",
      "counterText": "los pequenos espiritus Junimos despiertan la magia de las estrellas doradas",
      "timeLimit": 10
    },
    {
      "phase": 8,
      "speech": "¡NOOO! ¡Los Junimos me están expulsando del valle! ¡JojaMart se declara en bancarrota!",
      "counterText": "EL CENTRO CIVICO VIVE PARA SIEMPRE Y EL VALLE FLORECE EN PAZ Y LIBERTAD",
      "timeLimit": 9
    }
  ],
  "en": [
    {
      "phase": 1,
      "speech": "Greetings farmer! Joja Corporation will tear down the Community Center for a giant JojaMart warehouse.",
      "counterText": "grow fresh parsnips with organic fertilizer and honor grandpa land",
      "timeLimit": 16
    },
    {
      "phase": 2,
      "speech": "Do you think small wild seeds can stop the greatest corporation in the world? Sign the Joja membership!",
      "counterText": "Pierre seeds carry the natural warmth and bright energy of spring sunshine",
      "timeLimit": 15
    },
    {
      "phase": 3,
      "speech": "I will buy out Pierre store and double the price on every farm tool in Pelican Town!",
      "counterText": "the villagers of Pelican Town stand together against corporate greed",
      "timeLimit": 14
    },
    {
      "phase": 4,
      "speech": "Joja bulldozers will dump chemical waste into Willy pristine coastal ocean water!",
      "counterText": "silver scale fish swim freely in the clean blue currents of the valley",
      "timeLimit": 13
    },
    {
      "phase": 5,
      "speech": "Our ninety percent discount coupons will bankrupt local craftspeople forever!",
      "counterText": "the true value of honest farming and craftsmanship triumphs over greed",
      "timeLimit": 12
    },
    {
      "phase": 6,
      "speech": "Deploying Joja Cola vending machines to every street corner in the town!",
      "counterText": "aged apple cider and golden artisan goat cheese cannot be replaced",
      "timeLimit": 11
    },
    {
      "phase": 7,
      "speech": "You cannot stop us! The Joja executive contract is signed and stamped in my briefcase!",
      "counterText": "the little Junimo spirits awaken ancient starlight magic across the woods",
      "timeLimit": 10
    },
    {
      "phase": 8,
      "speech": "NOOO! The Junimos are chasing me out of town! JojaMart is officially bankrupt!",
      "counterText": "THE COMMUNITY CENTER STANDS PROUD AND THE VALLEY BLOSSOMS FOREVER",
      "timeLimit": 9
    }
  ],
  "pt": [
    {
      "phase": 1,
      "speech": "Habitante do vale! A Joja Corporation vai demolir o Centro Comunitário para construir um depósito JojaMart.",
      "counterText": "cultivar pastinacas com adubo natural e cuidar da terra do vovô",
      "timeLimit": 16
    },
    {
      "phase": 2,
      "speech": "Você acha que sementes silvestres vão parar a maior corporação do continente? Assine o plano Joja!",
      "counterText": "as sementes frescas do Pierre têm a força da luz da primavera",
      "timeLimit": 15
    },
    {
      "phase": 3,
      "speech": "Vou comprar a loja do Pierre e colocar preços abusivos em todas as ferramentas da vila!",
      "counterText": "os moradores da Vila Pelicanos permanecem unidos contra a Joja",
      "timeLimit": 14
    },
    {
      "phase": 4,
      "speech": "Nossos tratores Joja vão despejar resíduos nas águas do rio do Willy!",
      "counterText": "os peixes prateados nadam livres nas correntes cristalinas do vale",
      "timeLimit": 13
    },
    {
      "phase": 5,
      "speech": "Nossos cupons de noventa por cento de desconto vão quebrar o comércio local para sempre!",
      "counterText": "o valor do trabalho artesanal e honesto supera qualquer cupom falso",
      "timeLimit": 12
    },
    {
      "phase": 6,
      "speech": "Instalando máquinas de Joja-Cola em cada esquina da vila!",
      "counterText": "a sidra dourada de maçã e o queijo curado da Marnie são incomparáveis",
      "timeLimit": 11
    },
    {
      "phase": 7,
      "speech": "Você não pode me derrotar! Tenho o contrato corporativo selado na minha pasta!",
      "counterText": "os pequenos espíritos Junimos despertam a magia das estrelas douradas",
      "timeLimit": 10
    },
    {
      "phase": 8,
      "speech": "NÃOOO! Os Junimos estão me expulsando do vale! A JojaMart faliu!",
      "counterText": "O CENTRO COMUNITARIO VIVE PARA SEMPRE E O VALE FLORESCE EM PAZ",
      "timeLimit": 9
    }
  ],
  "fr": [
    {
      "phase": 1,
      "speech": "Fermier! Joja Corporation va raser le Centre Communautaire pour y bâtir un entrepôt JojaMart.",
      "counterText": "cultiver des panais avec du compost naturel sur la terre de grand-pere",
      "timeLimit": 16
    },
    {
      "phase": 2,
      "speech": "Penses-tu que de simples graines arrêteront la plus puissante corporation? Signe le contrat Joja!",
      "counterText": "les graines de Pierre portent l'energie vive et pure du printemps",
      "timeLimit": 15
    },
    {
      "phase": 3,
      "speech": "Je vais racheter la boutique de Pierre et doubler le prix de chaque outil du village!",
      "counterText": "les habitants de Pelican Town restent solidaires face a Joja Corporation",
      "timeLimit": 14
    },
    {
      "phase": 4,
      "speech": "Nos engins Joja vont déverser des déchets dans les rivières limpides de Willy!",
      "counterText": "les poissons argentés nagent en liberté dans les eaux pures de la vallee",
      "timeLimit": 13
    },
    {
      "phase": 5,
      "speech": "Nos réductions massives détruiront l'artisanat local pour toujours!",
      "counterText": "la valeur du travail artisanal surpasse toutes les reductions illusoires",
      "timeLimit": 12
    },
    {
      "phase": 6,
      "speech": "Installation de distributeurs Joja-Cola à chaque coin de rue du village!",
      "counterText": "le cidre dore de pomme et le fromage affine de Marnie sont sans pareils",
      "timeLimit": 11
    },
    {
      "phase": 7,
      "speech": "Tu ne peux rien faire! Le contrat officiel de rachat est dans ma mallette!",
      "counterText": "les petits esprits Junimos eveillent la magie celeste des etoiles dorees",
      "timeLimit": 10
    },
    {
      "phase": 8,
      "speech": "NON! Les Junimos me chassent de la vallée! JojaMart est ruiné!",
      "counterText": "LE CENTRE COMMUNAUTAIRE SURVIT ET LA VALLEE FLEURIT POUR TOUJOURS",
      "timeLimit": 9
    }
  ]
};
export const SPEED_TEST_TEXTS = {
  "es": "El abuelo siempre supo que algún día sentirías el peso de la vida moderna y necesitarías un refugio donde reconectar con la tierra. En Stardew Valley los días avanzan al compás del viento entre las copas de los robles, el canto alegre de los petirrojos al amanecer y el murmullo cristalino del río que cruza Pelican Town. Cada surco que abres con la azada, cada semilla de chirivía que riegas y cada sonrisa que intercambias con los vecinos construye un hogar cálido y lleno de propósito. No existe mayor satisfacción que ver germinar los frutos del esfuerzo paciente bajo el cielo estrellado.",
  "en": "Grandpa always knew that one day you would feel the exhausting weight of modern life and yearn for a peaceful haven to reconnect with the soil. In Stardew Valley, days unfold gently to the rustling of oak leaves in the breeze, the morning songs of blue jays, and the crystal murmurs of the mountain river flowing through Pelican Town. Every furrow tilled with the hoe, every seed watered with care, and every warm greeting shared with a neighbor weaves a life of quiet joy. There is no greater blessing than watching the fruits of patient labor bloom beneath the starlit sky.",
  "pt": "O vovô sempre soube que um dia você sentiria o peso da rotina moderna e precisaria de um refúgio para reconectar seu espírito com a terra. No Stardew Valley os dias fluem suaves ao som do vento entre os carvalhos, o cantar matinal dos pássaros e o riacho cristalino que serpenteia a Vila Pelicanos. Cada canteiro regado com carinho e cada sorriso compartilhado com os vizinhos constrói uma vida repleta de harmonia e paz.",
  "fr": "Grand-père savait qu'un jour vous ressentiriez le fardeau de la vie urbaine et chercheriez un havre paisible pour renouer avec la nature. À Stardew Valley, les journées s'écoulent au rythme du vent dans les arbres, du chant des oiseaux à l'aube et de la rivière claire qui traverse le village de Pelican Town. Chaque graine arrosée avec amour porte la promesse d'une récolte généreuse."
};
export const FISHING_WORDS = {
  "es": [
    "carpa",
    "trucha",
    "bagre",
    "anguila",
    "salmon",
    "dorado",
    "pez sol",
    "pez fantasma",
    "calamar",
    "pulpo",
    "arenque",
    "atun",
    "lubina",
    "perca",
    "esturion",
    "lucio",
    "cebo magico",
    "anzuelo",
    "boya",
    "plomo",
    "caña de bambu",
    "caña de fibra",
    "caña de iridio",
    "trampa de cangrejo",
    "perla",
    "alga marina",
    "arrecife",
    "tesoro hundido",
    "concha nautilo",
    "erizo de mar",
    "coral",
    "marea alta",
    "muelle de willy",
    "oceano azul",
    "pesca legendaria",
    "calidad iridio",
    "pez carpa del lago",
    "trucha arcoiris",
    "leyenda del lago",
    "pez mutante"
  ],
  "en": [
    "carp",
    "trout",
    "catfish",
    "eel",
    "salmon",
    "dorado",
    "sunfish",
    "ghostfish",
    "squid",
    "octopus",
    "herring",
    "tuna",
    "bass",
    "perch",
    "sturgeon",
    "pike",
    "magic bait",
    "hook",
    "bobber",
    "lead",
    "bamboo pole",
    "fiberglass rod",
    "iridium rod",
    "crab pot",
    "pearl",
    "seaweed",
    "coral reef",
    "sunken treasure",
    "nautilus shell",
    "sea urchin",
    "coral",
    "high tide",
    "willy pier",
    "blue ocean",
    "legendary fish",
    "iridium quality",
    "lake carp",
    "rainbow trout",
    "the legend",
    "mutant carp"
  ],
  "pt": [
    "carpa",
    "truta",
    "bagre",
    "enguia",
    "salmão",
    "dourado",
    "peixe lua",
    "peixe fantasma",
    "lula",
    "polvo",
    "arenque",
    "atum",
    "robalo",
    "perca",
    "esturjão",
    "lúcio",
    "isca mágica",
    "anzol",
    "bóia",
    "chumbo",
    "vara de bambu",
    "vara de fibra",
    "vara de irídio",
    "covo de caranguejo",
    "pérola",
    "alga marinha",
    "recife",
    "tesouro afundado",
    "concha náutilo",
    "ouriço do mar",
    "coral",
    "maré alta",
    "cais do willy",
    "oceano azul",
    "pesca lendária",
    "qualidade irídio",
    "carpa do lago",
    "truta arco-íris",
    "a lenda",
    "peixe mutante"
  ],
  "fr": [
    "carpe",
    "truite",
    "barbeau",
    "anguille",
    "saumon",
    "dorade",
    "poisson lune",
    "fantome",
    "calmar",
    "poulpe",
    "hareng",
    "thon",
    "bar",
    "perche",
    "esturgeon",
    "brochet",
    "appat magique",
    "hamecon",
    "flotteur",
    "plomb",
    "canne en bambou",
    "canne en fibre",
    "canne iridium",
    "casier a crabe",
    "perle",
    "algue marine",
    "recif",
    "tresor englouti",
    "coquille nautile",
    "oursin",
    "corail",
    "maree haute",
    "jetee de willy",
    "ocean bleu",
    "peche legendaire",
    "qualite iridium",
    "carpe du lac",
    "truite arc en ciel",
    "la legende",
    "carpe mutante"
  ]
};
