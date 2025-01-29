const projectsData = [
  {
    id: 1,
    name: 'AlgoThinker',
    year: 2021,
    tags: [
      'PERN Stack',
      'Fullstack',
      'Algorithms',
      'Data structures',
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
      'Fullstack web application created to teach URBE students about the characteristics of algorithms and data structures through interactive simulations, code examples and practical exercises (Thesis project, created with: React, Node, Express, PostgreSQL, D3.js, Styled components, JWT',
    ],
    repositories: [
      {
        label: 'Frontend code',
        src: 'https://github.com/luisdbarboza/algothinker-front',
      },
      {
        label: 'Backend code',
        src: 'https://github.com/luisdbarboza/algothinker-front',
      },
    ],
  },
  {
    id: 2,
    name: 'Chiguire Electrónico',
    year: 2021,
    tags: ['MERN Stack', 'Fullstack', 'Blog', 'NodeMailer', 'JWT'],
    images: [
      '/images/chiguire1.png',
      '/images/chiguire2.png',
      '/images/chiguire3.png',
      '/images/chiguire4.png',
      '/images/chiguire5.png',
    ],
    description: [
      'Fullstack news web application, with categories, posts, comments tree, user sessions, API for CRUD functions',
    ],
    repositories: [
      {
        label: 'Frontend code',
        src: 'https://github.com/luisdbarboza/algothinker-front',
      },
      {
        label: 'Backend code',
        src: 'https://github.com/luisdbarboza/chiguireElectronico',
      },
    ],
  },
  {
    id: 3,
    name: 'A* algorithm visualization',
    year: 2024,
    tags: ['Angular', 'Typecript', 'Algorithms', 'Data structures'],
    images: [
      '/images/aStar.png'
    ],
    description: [
      'Visualization of the A* pathfinding algorithm, used widely across the game development industry',
    ],
    repositories: [
      {
        label: 'Code',
        src: 'https://github.com/luisdbarboza/AStarAlgorithmVisualization',
      },
    ],
    liveURL: 'https://a-star-visualization-pqpgoifhe-luisdbarbozas-projects.vercel.app/',
  },
  {
    id: 4,
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
      'Web application made for the internal app ecosystem used by CodeCraft, the development department of Fino Company Venezuela',
    ],
    repositories: [],
  },
  {
    id: 5,
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
      'Simple ecommerce (without integrated payments for now) designed to practice the technology stack used by the company where I did my internship.',
    ],
    repositories: [
      {
        label: 'Code',
        src: 'https://github.com/luisdbarboza/chakra-shop',
      },
    ],
  },
  {
    id: 6,
    name: 'Stack based calculator',
    year: 2020,
    tags: ['ReactJS', 'Data structures', 'Algorithms', 'FreeCodeCamp'],
    images: [
      '/images/calculadora.png',
      '/images/calculadora2.png',
      '/images/calculadora3.png',
    ],
    description: [
      'Simple calculator application, which implements the Shunting yard algorithm to evaluate arithmetic expressions in order according to the reverse Polish notation.',
    ],
    repositories: [
      {
        label: 'Code',
        src: 'https://github.com/luisdbarboza/FCC-Calculator',
      },
    ],
    liveURL: 'https://fcc-calculator-five.vercel.app/',
  },
  {
    id: 7,
    name: 'Markdown previewer',
    year: 2020,
    tags: ['ReactJS', 'Javascript Libraries', 'FreeCodeCamp'],
    images: [
      '/images/markdown.png',
      '/images/markdown2.png',
      '/images/markdown3.png',
    ],
    description: [
      'Markdown editor that shows a preview of markdown code as you type code.',
    ],
    repositories: [
      {
        label: 'Code',
        src: 'https://github.com/luisdbarboza/markdown',
      },
    ],
    liveURL: 'https://markdown-sandy.vercel.app/',
  },
  {
    id: 8,
    name: 'Pomodoro Clock',
    year: 2020,
    tags: ['ReactJS', 'Javascript libraries', 'FreeCodeCamp'],
    images: [
      '/images/pomodoro1.png',
      '/images/pomodoro2.png',
      '/images/pomodoro3.png',
    ],
    description: [
      "Simple pomodoro clock made for FreeCodeCamp's frontend libraries certification",
    ],
    repositories: [
      {
        label: 'Code',
        src: 'https://github.com/luisdbarboza/pomodoroClock',
      },
    ],
    liveURL: 'https://pomodoro-clock-wbzr.vercel.app/',
  },
];

export default projectsData;
