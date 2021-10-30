const projectsData = [
  {
    id: 1,
    name: 'AlgoThinker',
    year: 2021,
    tags: [
      'PERN Stack',
      'Fullstack',
      'Algoritmos',
      'Estructuras de datos',
      'SPA',
    ],
    images: [
      '/images/algothinker-1.png',
      '/images/algothinker-2.png',
      '/images/algothinker-3.gif',
      '/images/algothinker-4.gif',
      '/images/algothinker-5.gif',
      '/images/algothinker-6.gif',
    ],
    description: [
      'Aplicación web fullstack creada para enseñar a estudiantes de la URBE sobre las caracteristicas de los algorimos y estructuras de datos mediante simulaciones interactivas, ejemplos de codigo y ejercicios prácticos (Proyecto de tesis, creado con: React, Node, Express, PostgreSQL, D3.js, Styled components, JWT',
    ],
    repositories: [
      {
        label: 'Código frontend',
        src: 'https://github.com/luisdbarboza/algothinker-front',
      },
      {
        label: 'Código backend',
        src: 'https://github.com/luisdbarboza/algothinker-front',
      },
    ],
    liveURL: 'https://admiring-hodgkin-478922.netlify.app/',
  },
  {
    id: 2,
    name: 'Chiguire Electrónico',
    year: 2021,
    tags: ['PERN Stack', 'Fullstack', 'Blog', 'NodeMailer', 'JWT'],
    images: [
      '/images/chiguire1.png',
      '/images/chiguire2.png',
      '/images/chiguire3.png',
      '/images/chiguire4.png',
      '/images/chiguire5.png',
    ],
    description: [
      'Aplicación web fullstack de noticias, con categorias, posts, arbol de comentarios, sesiones de usuario, API para las funciones CRUD',
    ],
    repositories: [
      {
        label: 'Código frontend',
        src: 'https://github.com/luisdbarboza/algothinker-front',
      },
      {
        label: 'Código backend',
        src: 'https://github.com/luisdbarboza/chiguireElectronico',
      },
    ],
    liveURL: 'https://chiguireelectronico.herokuapp.com/',
  },
  {
    id: 3,
    name: 'Questlinks(Closed source)',
    year: 2021,
    tags: ['GraphQL', 'Pasantias', 'NextJS', 'ChakraUI', 'CodeCraftKit'],
    images: [
      '/images/questlinks1.png',
      '/images/questlinks2.png',
      '/images/questlinks3.png',
      '/images/questlinks4.png',
      '/images/questlinks5.png',
    ],
    description: [
      'Aplicación web hecha para el ecosistema interno de apps usado por CodeCraft, el departamento de desarrollo de Fino Company Venezuela',
    ],
    repositories: [],
  },
  {
    id: 4,
    name: 'ChakraShop',
    year: 2021,
    tags: [
      'ReactJS',
      'NodeJS',
      'MongoDB',
      'GraphQL',
      'ChakraUI',
      'CodeCraftKit',
    ],
    images: [
      '/images/chakrashop1.png',
      '/images/chakrashop2.png',
      '/images/chakrashop3.png',
    ],
    description: [
      'Ecommerce (sin pagos integrados por ahora) sencillo elaborado para prácticar el stack de tecnologías usado por la empresa donde hice mis prácticas profesionales.',
    ],
    repositories: [
      {
        label: 'Código',
        src: 'https://github.com/luisdbarboza/chakra-shop',
      },
    ],
    liveURL: 'https://chiguireelectronico.herokuapp.com/',
  },
  {
    id: 5,
    name: 'Calculadora basada en pilas',
    year: 2020,
    tags: ['ReactJS', 'Estructuras de datos', 'Algoritmos'],
    images: [
      '/images/calculadora.png',
      '/images/calculadora2.png',
      '/images/calculadora3.png',
    ],
    description: [
      'Aplicación de calculadora sencilla, que implementa el algoritmo Shunting yard para evaluar expresiones aritmeticas en orden de acuerdo a la notación polaca inversa.',
    ],
    repositories: [
      {
        label: 'Código',
        src: 'https://github.com/luisdbarboza/FCC-Calculator',
      },
    ],
    liveURL: 'https://calculator-luisdbarboza.stackblitz.io/',
  },
  {
    id: 6,
    name: 'Previsualizador de markdown',
    year: 2020,
    tags: ['ReactJS', 'Librerias Javascript'],
    images: ['/images/markdown.png'],
    description: [
      'Editor de markdown que muestra una vista previa del código markdown a medida que escribes código.',
    ],
    repositories: [
      {
        label: 'Código',
        src: 'https://github.com/luisdbarboza/markdown',
      },
    ],
    liveURL: 'https://chiguireelectronico.herokuapp.com/',
  },
  {
    id: 7,
    name: 'Reloj pomodoro',
    year: 2020,
    tags: ['ReactJS', 'Librerias Javascript'],
    images: [
      '/images/pomodoro1.png',
      '/images/pomodoro2.png',
      '/images/pomodoro3.png',
    ],
    description: [
      'Editor de markdown que muestra una vista previa del código markdown a medida que escribes código.',
    ],
    repositories: [
      {
        label: 'Código',
        src: 'https://github.com/luisdbarboza/pomodoroClock',
      },
    ],
    liveURL: 'https://luisdbarboza.github.io/pomodoroClock/',
  },
];

export default projectsData;
