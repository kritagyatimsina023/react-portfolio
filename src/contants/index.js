// index.js
// export const servicesData = [
//   {
//     title: "FullStack Development",
//     description:
//       "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
//     items: [
//       {
//         title: "Backend Engineering",
//         description: "(REST APIs, Microservices, Auth Systems)",
//       },
//       {
//         title: "Frontend Excellence",
//         description: "(React, TypeScript, Interactive UI/UX)",
//       },
//       {
//         title: "Database Design",
//         description: "(SQL/NoSQL Optimization, Scalable Structures)",
//       },
//     ],
//   },
//   {
//     title: "DevOps & Cloud Solutions",
//     description:
//       "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
//     items: [
//       {
//         title: "CI/CD Pipelines",
//         description: "(GitHub Actions, Docker, Kubernetes)",
//       },
//       // {
//       //   title: "Server Management ",
//       //   description: "(Linux, Nginx, Load Balancing)",
//       // },
//       {
//         title: "Performance Tuning",
//         description: "(Caching, Compression)",
//       },
//     ],
//   },
//   {
//     title: "Security & Optimization",
//     description:
//       "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
//     items: [
//       {
//         title: "Code Audits",
//         description: "(Refactoring, Tech Debt Cleanup)",
//       },
//       {
//         title: "Pen Testing",
//         description: "(Vulnerability Assessments)",
//       },
//       {
//         title: "SEO Tech Stack",
//         description: "(SSR, Metadata, Structured Data)",
//       },
//     ],
//   },
//   // {
//   //   title: "Web & Mobile Apps",
//   //   description:
//   //     "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
//   //   items: [
//   //     {
//   //       title: "Cross-Platform Apps",
//   //       description: "(Single codebase for iOS/Android/Web)",
//   //     },
//   //     {
//   //       title: "PWAs",
//   //       description: "(Offline mode, Push Notifications)",
//   //     },
//   //     {
//   //       title: "E-Commerce",
//   //       description: "(Checkout flows, Payment Gateways, Inventory APIs)",
//   //     },
//   //   ],
//   // },
// ];
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
export const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "I build end-to-end web applications with scalable architecture, clean code, and optimized performance. From intuitive frontends to robust backend systems, I focus on delivering reliable and maintainable digital products.",
    items: [
      {
        title: "Backend Engineering",
        description:
          "(Node.js, Express.js, REST APIs, Authentication, Business Logic)",
      },
      {
        title: "Frontend Development",
        description:
          "(React, Next.js, TypeScript, Zustand , Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL, MongoDB, Schema Optimization, Scalability, ORM)",
      },
    ],
  },

  {
    title: "Security & Authentication",
    description:
      "I implement secure and reliable authentication systems to protect user data and ensure safe access control across applications, following modern security best practices.",
    items: [
      {
        title: "Authentication Systems",
        description: "(JWT, OAuth, Session Management)",
      },
      {
        title: "API Security",
        description: "(Protected Routes, Middleware, Validation)",
      },
      {
        title: "Security Practices",
        description: "(Password Hashing, Input Sanitization, Access Control)",
      },
    ],
  },

  {
    title: "Research-Based AI/ML",
    description:
      "I explore machine learning concepts through research-driven development, building and experimenting with models to solve real-world problems using data-driven approaches.",
    items: [
      {
        title: "Model Development",
        description: "(Neural Networks, Classification, Feature Engineering)",
      },
      {
        title: "Research Work",
        description: "(Paper Study, Experimentation, Model Optimization)",
      },
      {
        title: "AI Integration",
        description: "(Python, TensorFlow, Real-world ML Applications)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Dentelligent",

    description:
      "An AI-powered dental healthcare platform that combines intelligent voice assistance, secure doctor appointment management, and modern patient care workflows. Users can interact with a real-time AI dental assistant for oral health guidance, treatment explanations, preventive care recommendations, and transparent service pricing while seamlessly managing consultations and appointments through a unified digital experience.",

    miniDescription:
      "A full-stack AI dental assistant and appointment platform featuring voice-based interactions, secure authentication, doctor scheduling, consultation management, and smart patient support built for modern healthcare experiences.",

    href: "",
    case: "Personal Project",

    image: "/assets/projects/dental.png",
    video:
      "https://res.cloudinary.com/dohtpxlnd/video/upload/v1777536423/Screen_Recording_2026-04-30_at_13.39.24_a14uwv.mov",
    bgImage: "/assets/backgrounds/dentalbg.png",
    overview_One:
      "Dentelligent is an AI-powered dental healthcare platform that combines voice-assisted patient support with secure appointment and consultation management. Users can receive instant dental guidance, treatment explanations, prevention tips, and transparent pricing through an intelligent conversational assistant.",
    overview_Two:
      "Built with a modern full-stack architecture, the platform focuses on scalability, security, and seamless user experience. It integrates real-time AI interactions, secure authentication, doctor scheduling, and efficient patient management workflows in one unified system.",

    summary_Frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Prisma ORM" },
    ],

    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Prisma ORM" },
      { id: 5, name: "VAPI API" },
      { id: 6, name: "Zustand" },
      { id: 7, name: "TanStack Query" },
      { id: 8, name: "Clerk" },
    ],
    highlights: [
      {
        icon: "tabler:microphone-2",
        label: "AI Voice Assistant",
        desc: "Real-time conversational dental assistant providing instant oral health guidance, treatment explanations, and prevention advice.",
      },
      {
        icon: "tabler:calendar-check",
        label: "Appointment Management",
        desc: "Secure doctor scheduling and consultation workflows with streamlined patient appointment management.",
      },
      {
        icon: "tabler:shield-lock",
        label: "Secure Authentication",
        desc: "Protected user access with modern authentication, session handling, and secure healthcare data workflows.",
      },
      {
        icon: "tabler:database",
        label: "Scalable Architecture",
        desc: "Built with optimized database structures, efficient state management, and scalable full-stack architecture.",
      },
      {
        icon: "tabler:activity-heartbeat",
        label: "Smart Patient Support",
        desc: "Provides treatment guidance, transparent pricing information, and preventive dental care recommendations.",
      },
      {
        icon: "tabler:device-desktop",
        label: "Modern User Experience",
        desc: "Responsive and intuitive interface designed for smooth interactions across devices and screen sizes.",
      },
    ],
  },
  {
    id: 2,
    name: "Query AI",
    description:
      "An AI-powered conversational platform inspired by modern chatbot systems, built to deliver fast, intelligent, and context-aware interactions. The application combines secure authentication, real-time AI responses, payment-based premium plans, persistent chat history, and shareable conversations into a scalable full-stack experience focused on performance, usability, and modern UI design.",
    miniDescription:
      "A full-stack AI chatbot platform featuring secure authentication, AI-powered conversations, premium subscriptions, payment integration, persistent chat history, and shareable chat sessions built with a scalable modern architecture.",

    href: "",
    case: "Personal Project",
    image: "/assets/projects/queryAiPic.png",
    video:
      "https://res.cloudinary.com/dohtpxlnd/video/upload/v1777524796/queryAi_nv9e7p.mp4",
    bgImage: "/assets/backgrounds/queryAi.png",
    overview_One:
      "Query AI is a modern AI conversational platform designed to provide intelligent, real-time responses with a smooth and engaging user experience. Users can securely create accounts, manage conversations, upload profile images, and access persistent AI-powered chats across sessions.",

    overview_Two:
      "The platform integrates premium subscription plans, Stripe payment workflows, shareable chat sessions, and scalable backend architecture while maintaining strong focus on security, responsiveness, and performance optimization. It is built to simulate a production-ready AI SaaS experience.",

    summary_Frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "OpenAI API" },
    ],
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "JWT Auth" },
      { id: 6, name: "Stripe + Esewa" },
      { id: 7, name: "Cloudinary" },
      { id: 8, name: "Framer Motion" },
      { id: 9, name: "ShadCN UI" },
      { id: 10, name: "OpenAI API" },
    ],

    highlights: [
      {
        icon: "tabler:brain",
        label: "AI Conversations",
        desc: "Real-time intelligent chatbot experience powered through OpenAI API integration with persistent context-aware conversations.",
      },
      {
        icon: "tabler:credit-card",
        label: "Premium Plans & Payments",
        desc: "Integrated Stripe payment workflows with plan management, active subscription tracking, and scalable premium feature architecture.",
      },
      {
        icon: "tabler:share",
        label: "Chat Sharing System",
        desc: "Users can securely generate shareable chat links while protecting sensitive account and authentication information.",
      },
    ],
  },
  {
    id: 3,
    name: "Emotion Driven Symbolic Music Generator",
    description:
      "A controllable and emotion-aware symbolic music generation framework that generates multi-track MIDI compositions from text captions and lyrics. The system uses Transformer-based autoregressive models with adversarial training to reduce exposure bias, enabling structurally coherent and emotionally aligned musical outputs.",
    miniDescription:
      "End-to-end full-stack platform for text-conditioned MIDI generation with three model versions (Stage 1, Stage 2, Stage 3 GAN), featuring emotion extraction from lyrics, caption-based conditioning, and multi-variant music generation with playback and download capabilities.",

    href: "",
    case: "Major Project",

    image: "/assets/projects/AIMusic.png",
    video:
      "https://res.cloudinary.com/dohtpxlnd/video/upload/v1777536780/Screen_Recording_2026-03-31_164957_n1q0gc.mov",
    bgImage: "/assets/backgrounds/musicGenerator.png",

    overview_One:
      "This project presents a Transformer-based framework for controllable symbolic music generation that conditions on both descriptive captions and emotional context derived from lyrics. The system uses REMI+ tokenization to convert MIDI files into structured token sequences and a FLAN-T5 encoder for text conditioning. A multi-stage training strategy progressively builds musical fluency: Stage 1 focuses on learning musical grammar through synthetic captions, Stage 2 fine-tunes on rich MIDICaps captions for semantic alignment, and Stage 3 introduces adversarial refinement to mitigate exposure bias the fundamental mismatch between teacher-forced training and free-running inference that causes error accumulation in long sequence generation.",

    overview_Two:
      "The full-stack platform features a React TypeScript frontend with Firebase authentication and a dual-backend architecture: Node.js + Express + MongoDB for user data management, and a Python Flask AI backend for model inference. Users can input lyrics or captions, select from three model versions (Stage 1, Stage 2, or Stage 3 GAN), and receive playable MIDI and audio outputs with multiple variants. The Stage 3 model employs a Teacher-Forcing style discriminator that distinguishes teacher-forced from free-running hidden states, reducing exposure bias while maintaining training stability. Objective evaluation using CLAP scores, Chroma DTW similarity, tempo binning accuracy, and structural compression ratios demonstrates that Stage 3 achieves the best key accuracy (50%), highest pattern coverage (92.4%), and improved free-running token match rate (46.7%) compared to baseline.",

    highlights: [
      {
        icon: "tabler:music",
        label: "Three-Stage Model Architecture",
        desc: "Stage 1 (Grammar Learning) → Stage 2 (Caption Fine-tuning) → Stage 3 (GAN Adversarial Refinement). Progressive training reduces exposure bias and improves long-range musical coherence.",
      },
      {
        icon: "tabler:microphone",
        label: "Emotion-Aware Generation",
        desc: "Hybrid valence-arousal extraction from lyrics using transformer-based sentiment (DistilBERT) and lexicon-based fusion, mapped to Russell's Circumplex Model for emotional conditioning.",
      },
      {
        icon: "tabler:file-music",
        label: "REMI+ Tokenization & MIDI Output",
        desc: "Symbolic music represented as discrete tokens (Bar, Position, Program, Pitch, Velocity, Duration) enabling Transformer-based autoregressive generation with legality masking for structurally valid outputs.",
      },
    ],
    summary_Frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Python" },
      { id: 4, name: "PyTorch" },
    ],

    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Express" },
      { id: 5, name: "MongoDB" },
      { id: 6, name: "Mongoose" },
      { id: 7, name: "Python" },
      { id: 8, name: "Flask" },
      { id: 9, name: "PyTorch" },
      { id: 10, name: "Firebase Auth" },
      { id: 11, name: "Zustand" },
      { id: 12, name: "Tailwind CSS" },
      { id: 13, name: "FluidSynth" },
    ],
  },
  {
    id: 4,
    name: "Spylt Milk Clone",

    description:
      "A design-focused front-end clone of the Spylt Milk website built to master advanced GSAP animations, smooth scroll interactions, and modern UI transitions. This project emphasizes visual storytelling, motion design, and premium landing page aesthetics rather than functional e-commerce logic.",

    miniDescription:
      "A GSAP animation practice project replicating a modern brand landing page with smooth scroll effects, transitions, and interactive UI motion design.",

    href: "",
    case: "Design Project",

    image: "/assets/projects/spyltmilk.png",
    bgImage: "/assets/backgrounds/Spylt.png",
    video:
      "https://res.cloudinary.com/dohtpxlnd/video/upload/v1777550140/Screen_Recording_2026-04-30_at_17.23.33_q5o4wr.mp4",

    overview_One:
      "Spylt Milk Clone is a front-end design reproduction project built to explore advanced animation techniques using GSAP. The focus is on recreating smooth scroll-based interactions, layered transitions, and modern landing page UI patterns.",

    overview_Two:
      "This project helped strengthen my understanding of motion design principles, including timeline sequencing, scroll-triggered animations, and responsive UI behavior. It is purely a design and animation study rather than a functional product.",

    summary_Frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "ScrollTrigger" },
      { id: 4, name: "Tailwind CSS" },
    ],

    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "GSAP Animation" },
      { id: 3, name: "ScrollTrigger" },
      { id: 4, name: "SplitText Animation" },
    ],

    highlights: [
      {
        icon: "tabler:bolt",
        label: "Advanced GSAP Animations",
        desc: "Implemented smooth scroll-based animations, transitions, and timeline control to replicate a premium landing page experience.",
      },
      {
        icon: "tabler:layout-dashboard",
        label: "Modern UI Replication",
        desc: "Focused on recreating a high-end brand interface with attention to spacing, typography, and visual hierarchy.",
      },
      {
        icon: "tabler:arrow-down",
        label: "Scroll Interaction Design",
        desc: "Built scroll-triggered effects using GSAP ScrollTrigger to enhance storytelling and user engagement.",
      },
    ],
  },
  {
    id: 5,
    name: "CodeBook",

    description:
      "A full-stack eBook commerce platform where users can explore, purchase, and manage digital books with a smooth and intuitive shopping experience. The system includes secure JWT-based authentication, cart functionality, and state-managed user interactions built with a modern frontend architecture.",

    miniDescription:
      "A full-stack eBook marketplace with JWT authentication, cart system, Redux state management, and seamless book purchasing experience.",

    href: "",
    case: "Learning Project",

    image: "/assets/projects/codeBookImg.png",
    bgImage: "/assets/backgrounds/Codebook.png",
    video:
      "https://res.cloudinary.com/dohtpxlnd/video/upload/v1777552088/Screen_Recording_2026-04-30_at_18.07.48_ze2jeb.mov",

    summary_Frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Redux Toolkit" },
      { id: 3, name: "JWT Auth" },
      { id: 4, name: "JSON Server" },
    ],

    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "JWT Authentication" },
      { id: 3, name: "Redux Toolkit" },
      { id: 4, name: "JSON Server" },
      { id: 5, name: "DaisyUI" },
    ],

    overview_One:
      "CodeBook is a simple yet functional eBook e-commerce platform built to understand full-stack application flow, including authentication, product listing, and cart management using Redux state handling.",

    overview_Two:
      "The project focuses on implementing JWT-based login and secure user sessions, allowing users to browse books, add items to cart, and simulate a complete digital purchase workflow with a clean UI experience.",

    highlights: [
      {
        icon: "tabler:lock",
        label: "JWT Authentication",
        desc: "Secure login system with token-based authentication to manage user sessions safely and efficiently.",
      },
      {
        icon: "tabler:shopping-cart",
        label: "Cart & Purchase Flow",
        desc: "Users can add books to cart, manage quantities, and simulate a complete checkout experience.",
      },
      {
        icon: "tabler:brand-redux",
        label: "Redux State Management",
        desc: "Centralized state handling for authentication, cart operations, and UI consistency across the app.",
      },
    ],
  },
  {
    id: 6,
    name: "Chatter",

    description:
      "A real-time messaging application built for learning full-stack communication systems, enabling users to send text messages and images instantly using Socket.io. The app also includes real-time notifications for incoming messages and focuses on building responsive, event-driven UI interactions.",

    miniDescription:
      "A real-time chat application with Socket.io supporting messaging, image sharing, and live notifications built as a full-stack learning project.",

    href: "",
    case: "Learning Project",

    image: "/assets/projects/chatter.png",
    video:
      "https://res.cloudinary.com/dohtpxlnd/video/upload/v1777527624/Screen_Recording_2026-04-30_at_11.21.37_ajfu02.mov",
    bgImage: "/assets/backgrounds/chatter.png",

    summary_Frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Socket.io" },
      { id: 4, name: "MongoDB" },
    ],

    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "Socket.io" },
      { id: 5, name: "MongoDB" },
      { id: 6, name: "Zustand" },
      { id: 7, name: "Tailwind CSS" },
    ],

    overview_One:
      "Chatter is a learning-focused real-time chat application that demonstrates how modern messaging systems work using Socket.io. Users can send text messages and images instantly with live updates across connected clients.",

    overview_Two:
      "The project emphasizes event-driven architecture, real-time communication, and state management. It also includes notification handling for incoming messages and provides a responsive UI for smooth chat interactions.",

    highlights: [
      {
        icon: "tabler:bolt",
        label: "Real-Time Messaging",
        desc: "Instant communication between users using Socket.io for live bidirectional data flow.",
      },
      {
        icon: "tabler:photo",
        label: "Image Sharing",
        desc: "Users can send and receive images in real-time as part of chat conversations.",
      },
      {
        icon: "tabler:bell",
        label: "Live Notifications",
        desc: "Real-time notifications alert users when new messages arrive, improving engagement and responsiveness.",
      },
    ],
  },
  {
    id: 7,
    name: "Laguna Al-Sha'ab",

    description:
      "A high-fidelity restaurant concept website for a fictional Mediterranean-Georgian gastronomic show, blending immersive scroll-driven animations, parallax salt crystal effects, and cinematic section transitions. The experience guides visitors through a 5-course tasting narrative — from an animated hero with clip-path reveals to a horizontal scroll course showcase, interactive drinks slider, and a pinned SALT acronym sequence — all orchestrated with GSAP ScrollTrigger and Next.js.",

    miniDescription:
      "A cinematic restaurant concept site featuring GSAP scroll animations, parallax effects, horizontal course scrolling, and immersive section transitions built with Next.js, Tailwind CSS, and GSAP.",

    href: "https://restaurant-design-snowy.vercel.app/",
    case: "Personal Project",

    image: "/assets/projects/resturents.png",
    video:
      "https://res.cloudinary.com/dohtpxlnd/video/upload/v1781059463/Screen_Recording_2026-06-10_at_08.20.25_1_fvp4f6.mp4",
    bgImage: "/assets/projects/resturents.png",

    overview_One:
      "Laguna Al-Sha'ab is a gastronomic concept restaurant website that immerses visitors in a multi-course Mediterranean-Georgian culinary journey. The site features a layered hero with clip-path scroll reveals, a pinned SALT section with animated letter sequences, and a horizontally scrolling 5-course showcase — each transition choreographed to feel like turning the page of a story.",

    overview_Two:
      "Built with a performance-first mindset, the project focuses on scroll-driven storytelling using GSAP ScrollTrigger timelines, smooth parallax on decorative salt crystal imagery, and seamless panel transitions. Every section — from the drinks carousel to the chef profiles — is designed to feel like a living editorial rather than a static webpage.",

    summary_Frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "TypeScript" },
    ],

    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "TypeScript" },
      { id: 5, name: "ScrollTrigger" },
      { id: 6, name: "useGSAP" },
      { id: 7, name: "next/image" },
    ],

    highlights: [
      {
        icon: "tabler:layers-intersect",
        label: "Scroll-driven Storytelling",
        desc: "GSAP ScrollTrigger timelines orchestrate pinned sections, clip-path reveals, and staggered fade-ins tied precisely to scroll progress.",
      },
      {
        icon: "tabler:arrows-horizontal",
        label: "Horizontal Course Scroll",
        desc: "A 5-course tasting menu transitions into a full-viewport horizontal scroll track with container-synced title opacity animations.",
      },
      {
        icon: "tabler:photo-up",
        label: "Parallax Crystal Effects",
        desc: "Decorative salt crystal images float at independent speeds and directions, creating a layered depth effect across multiple sections.",
      },
      {
        icon: "tabler:circle-half-2",
        label: "Clip-path Transitions",
        desc: "Sections reveal through animated circular clip-paths expanding from a focal point, producing a cinematic curtain-lift effect.",
      },
      {
        icon: "tabler:glass-cocktail",
        label: "Interactive Drinks Slider",
        desc: "A full-screen drinks carousel pairs each cocktail with its ingredients, navigated by index and animated with smooth crossfades.",
      },
      {
        icon: "tabler:device-desktop-analytics",
        label: "Editorial Layout Design",
        desc: "Typography-led layout with large serif headings, restrained color palette, and motion-balanced visuals for a luxury editorial feel.",
      },
    ],
  },
];
export const socials = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/kritagyatimsina/",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/kritagya-timsina/",
  },
  {
    icon: FaGithub,
    href: "https://github.com/kritagyatimsina023",
  },
];
export const contacts = [
  { name: "E-mail", contactInfo: "kritagyatimsina@gmail.com" },
  { name: "phone", contactInfo: "+977-9840256941" },
];
