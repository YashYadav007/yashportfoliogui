export const METADATA = {
  author: "Yash Yadav",
  title: "Portfolio | Yash Yadav",
  description: "Yash Yadav is a passionate developer exploring AI, ML, and web apps.",
  siteUrl: "https://yourdomain.vercel.app/",
  twitterHandle: "",
  keywords: [
    "Yash Yadav",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
    "Gen Ai"
  ].join(", "),
  image:"",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "An aspiring Developer",
  "Loves building smart user experiences",
  "Engineer who blends logic with design",
]
;

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: yahsuyadav197@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/YashYadav009/",
  },
  {
    name: "github",
    url: "https://github.com/YashYadav007",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/yashyash009/",
  },
  {
    name: "twitter",
    url: "--",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "python",
    "java",
    "c++",
    "html",
    "css",
    "javascript",
    "lua",
    "nodejs",
    "openaiw",
    "vite",
    "php",
    "figma",
    "llm",
    "gemini"
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "tailwindcss",
    "jinja",
    "fastapi",
    "spring",
    "tenserflow",
    "streamlit",
    "flutter"
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "vsCode" , "ollamaw" , "aistudio" , "jupyter" ],
};

export const PROJECTS = [
  {
    name: "Auto-Gen Sollution for Iot Devices",
    image: "/projects/studio.png",
    blurImage: "/projects/blur/studio.png",
    description: "No coding. No struggle. Just AI-powered device onboarding.🤖",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/YashYadav007/Gen-Ai-Iot-Devices-",
    tech: ["aistudio", "matter", "jinja", "lua"],
  },
  {
    name: "One-Tap Video Object Eraser",
    image: "/projects/propainter.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Unwanted object? Gone in a tap — like magic for your videos.✨",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/YashYadav007",
    tech: ["flutter", "python", "tenserflow", "fastapi"],
  },
  {
    name: "Perfect-Pixel",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Generation of pixel perfect image with embedded data🎙",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/YashYadav007/pixelperfect",
    tech: ["streamlit", "python", "ollamaw"],
  },
  {
    name: "Codsick",
    image: "/projects/codsick.png",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Take Your Career to the Next Level with CodSick.🏎️",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://cod-sick.vercel.app/",
    tech: ["react","mongodb", "gemini", "tailwindcss"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  SAMSUNG: [
    {
      title: "Samsung",
      description:
        "Samsung Research is the advanced R&D hub of Samsung Electronics, driving innovation across AI, next-gen communication, and device intelligence. At Samsung Research, I contributed to projects focused on applied AI and real-world deployment of intelligent systems.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          <img
            src="/images/samsung.jpg"
            alt="samsung logo"
            className="h-300 w-auto mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Magpie",
      description:
        "I am be working on real-world problems in the domain of applied AI and smart systems. While my work is in the early stages, this opportunity offers hands-on exposure to cutting-edge research, industry-grade tools, and collaborative innovation in one of the world’s leading tech environments. I'm excited to contribute meaningfully to impactful AI-driven projects under expert mentorship.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          MAGPIE Research Intern
        </div>
      ),
    },
    {
      title: "Prism",
      description:
        "I contributed to the development of cutting-edge Generative AI solutions aimed at enhancing multimedia processing and content creation workflows. My work focused on building intelligent systems capable of real-time visual understanding, enabling tasks such as object removal and pixel-accurate scene reconstruction from complex video inputs. I collaborated closely with experienced researchers to prototype deployable models that combined efficiency with precision, gaining valuable experience in production-grade AI pipelines and model optimization.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          PRISM Intern
        </div>
      ),
    },
  ],
  MOBILEPROGRAMMING: [
    {
      title: "Mobile Programming",
      description:
        "Mobile Programming LLC is a global technology solutions provider, delivering cutting-edge software development services across industries with a focus on mobile, web, and enterprise solutions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          <img
            src="/images/mobile.jpg"
            alt="company logo"
            className="h-300 w-auto mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        " I worked with the Java Spring framework to develop and maintain scalable backend services. I gained hands-on experience building real-world production-level systems, contributing directly to projects for clients like Betway, where I was involved in the development of REST APIs, database integrations, and performance optimizations. This role sharpened my understanding of microservices architecture, deployment pipelines, and secure backend development in a professional environment.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
         Backend Intern
        </div>
      ),
    },
  ],
  COEDSAI: [
    {
      title: "COE-DSAI",
      description:
        "A joint initiative by Thapar Institute's Centre of Data Science & Artificial Intelligence and partnering institute, fostering cutting-edge research and innovation in AI-driven real-world applications.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          <img
            src="/images/dsai.png"
            alt="dsai logo"
            className="h-300 w-300 mx-1"
          />
        </div>
      ),
    },
    {
      title: "Behaviourial Science",
      description:
        "Currently building an AI-powered adaptive learning system under a behavioral science initiative, focused on analyzing children's interaction patterns to tailor personalized educational content. By leveraging data-driven insights, the system recommends learning materials and videos aligned with each child's unique cognitive and engagement profile, fostering a more effective and intuitive learning experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Exchange Program (Thapar x LMU)
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
