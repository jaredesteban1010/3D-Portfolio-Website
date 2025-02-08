import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  gdu,
  rewind,
  portfolio,
  stickytanks,
  threejs,
  unity,
  love2d,
  cpp,
  csharp,
  python,
  java,
  blender,
  mysql,
  lua,
  godot,
  photo,
  pr,
  bootstrap,
  masterpizza,
  bugs,
  neon_fables,
  tictactoe
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "3D Artist",
    icon: backend,
  },
  {
    title: "Animator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Godot",
    icon: godot,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "LOVE2D",
    icon: love2d,
  },
  {
    name: "lua",
    icon: lua,
  },
  {
    name: "Photoshop",
    icon: photo,
  },
  {
    name: "Premier Pro",
    icon: pr,
  }
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Niumedia",
    icon: gdu,
    iconBg: "#383E56",
    date: "April 2022 - October 2024",
    points: [
      "Leveraged expertise in both front-end (e.g., React, Angular, Vue.js) and back-end technologies (e.g., Node.js, Python, Java)",
      "Ensured quality and scalability of applications through robust coding practices."
    ],
  },
  {
    title: "Farias Residence",
    company_name: "Independent",
    icon: gdu,
    iconBg: "#383E56",
    date: "November 2024 - December 2024",
    points: [
      "Designed a 3D model of a house in Mexico.",
      "Created detailed renderings of the living room.",
      "Generated visual representations of the dining room.",
      "Developed 3D visuals of the kitchen.",
      "Rendered the TV room to showcase its design.",
      "Created a 3D model of the office space.",
      "Designed and rendered the bedroom area."
    ],
  },
];

const projects = [
  {
    name: "Sticky Tanks",
    description:
      "A thrilling two-player tank game where strategy and quick thinking lead to victory. Game made in Unity 3D",
    tags: [
      {
        name: "CSharp",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
    ],
    image: stickytanks,
    source_code_link: "https://github.com/jaredesteban1010/StickyTanks",
    live_project_link: "",
  },
  {
    name: "Neon Fables",
    description:
      "A sidescroller detective game where you are trying to solve a mystery by talking and gathering clues.",
    tags: [
      {
        name: "CSharp",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
    ],
    image: neon_fables,
    source_code_link: "https://github.com/jaredesteban1010/GameOff0024",
    live_project_link: "",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "A full-stack Tic-Tac-Toe game with real-time chat functionality, built using the StreamChat API.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "StreamChat API",
        color: "green-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/jaredesteban1010/Tic-Tac-Toe",
    live_project_link: "",
  }, {
    name: "Master Pizza",
    description:
      "Master Pizza is typically known as a pizza restaurant chain or a franchise, built using the ReactJS, 3D, StreamChat API.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "StreamChat API",
        color: "green-text-gradient",
      },
    ],
    image: masterpizza,
    source_code_link: "https://github.com/jaredesteban1010/Master-Pizza-Franchise-Group-LLC",
    live_project_link: "https://masterpizza.com",
  },
  {
    name: "3D Portfolio Website",
    description:
      "A personal portfolio website developed using React and ThreeJS. It showcases my skills and projects in a visually appealing manner, leveraging 3D visuals, animations, and transitions",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "EmailJS",
        color: "green-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/jaredesteban1010/3D-Portfolio-Website.git",
    live_project_link: "",
  },
];

export { services, technologies, experiences, projects };