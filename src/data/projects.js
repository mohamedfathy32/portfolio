// Import images

import BuffaloMain from "../images/Buffalo Burger/Buffalo-Burger-main.png";
import BuffaloAppMain2 from "../images/Buffalo Burger App/main image 2.png";
const importAll = (r) => r.keys().map(r);

// Buffalo Burger Desktop gallery
const desktopImagesBuffalo = importAll(
  require.context(
    "../images/Buffalo Burger",
    false,
    /^\.\/Buffalo-Burger \(([1-9]|1[0-1])\)\.png$/
  )
);

// Buffalo Burger Mobile gallery
const mobileImagesBuffalo = importAll(
  require.context(
    "../images/Buffalo Burger",
    false,
    /^\.\/Buffalo-Burger \((1[2-8])\)\.png$/
  )
);

const BuffaloAppImages = importAll(
  require.context(
    "../images/Buffalo Burger App",
    false,
    /^\.\/Buffalo Burger App \(([1-9]|1[0-1])\)\.jpg$/
  )
);

export const projectsData = [
  {
    id: 1,
    title: "Buffalo Burger Clone",
    category: "Frontend (React)",
    img: BuffaloMain,
    gallery: desktopImagesBuffalo,
    galleryMobile: mobileImagesBuffalo,
    ProjectHeader: {
      title: "Buffalo Burger Clone – ITI Final Project",
      publishDate: "Nov 12, 2024",
      tags: "Frontend / React",
    },

    ProjectInfo: {
      ClientHeading: "About project",
      CompanyInfo: [
        {
          id: 1,
          title: "Project Type",
          details: "Graduation Project (ITI)",
        },
        {
          id: 2,
          title: "my role",
          details: "Team Leader, UI Designer & Frontend Developer",
        },
        {
          id: 3,
          title: "Website",
          details: "https://buffalo-burger-clone.vercel.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The objective of this project was to replicate the Buffalo Burger website, providing a fully functional and responsive food ordering experience using modern front-end technologies like React.js and Tailwind CSS. The goal was to practice building real-world UIs, implement dynamic cart/order logic, and support both Arabic and English languages.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Reactjs",
            "TailwindCSS",
            "Context API",
            "Firebase",
            "Axios",
            "Git",
            "GitHub",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "As part of my final project at the Information Technology Institute (ITI), I collaborated with a colleague to build a fully functional clone of the Buffalo Burger website. The goal was to replicate the original website’s design, structure, and functionality as closely as possible, while applying best practices in modern front-end development.",
        },
        {
          id: 2,
          details:
            "This project was developed using React.js for the frontend, combined with Tailwind CSS for styling, ensuring a responsive and visually consistent user interface across all devices. We also used React Context API for global state management, enabling smooth handling of user interactions such as adding items to the cart, changing quantities, and navigating between different sections of the website.",
        },
        {
          id: 3,
          details:
            "For the backend, we integrated Firebase, which we used for authentication, real-time database storage, and deployment. This allowed us to implement a full login and registration system, as well as storing user orders and managing product data dynamically.",
        },
        {
          id: 4,
          details:
            "The project mirrors the look and feel of the original Buffalo Burger site, including:",
        },
        {
          id: 5,
          details:
            "A full menu with categories like sandwiches, meals, sides, and offers",
        },
        {
          id: 6,
          details: "Dynamic cart management and order processing",
        },
        {
          id: 7,
          details:
            "Responsive design optimized for both desktop and mobile views",
        },
        {
          id: 8,
          details: "Multi-language support for both English and Arabic",
        },
        {
          id: 9,
          details: "Firebase-based admin panel  for future scalability",
        },
        {
          id: 10,
          details:
            "This project gave us a hands-on experience in building a real-world food delivery website, and helped us strengthen our skills in full-stack web development, UI/UX consistency, and collaboration in a team environment.",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Buffalo Burger Clone – Mobile App",
    category: "Mobile Application (React-Native)",
    img: BuffaloAppMain2,
    gallery: [],
    galleryMobile: BuffaloAppImages,
    ProjectHeader: {
      title: " Buffalo Burger Clone – Mobile App (Graduation Project - ITI)",
      publishDate: "Nov 12, 2024",
      tags: "React-Native",
    },

    ProjectInfo: {
      ClientHeading: "About project",
      CompanyInfo: [
        {
          id: 1,
          title: "Project Type",
          details: "Graduation Project (ITI)",
        },
        {
          id: 2,
          title: "my role",
          details:
            "Team Leader, UI Designer & Frontend Developer (React Native)",
        },
        {
          id: 3,
          title: "repo",
          details: "https://github.com/mohamedfathy32/Buffalo-Burger-App",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The objective of this project was to create a mobile application clone of the Buffalo Burger app, offering a fully functional and responsive food ordering experience using React Native. The goal was to practice building real-world UIs, implement dynamic product browsing and ordering logic, integrate Firebase for data and user management, and support easy ordering with a smooth and intuitive interface.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "TailwindCSS",
            "Expo",
            "JavaScript",
            "Firebase",
            "React Navigation",
            "Context API",
            "Git",
            "GitHub",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details: "Buffalo Burger Clone – Mobile App",
        },
        {
          id: 2,
          details:
            "A mobile application clone of the real Buffalo Burger app, developed as part of my ITI graduation project. The app replicates the user interface and experience of the original Buffalo Burger mobile platform, offering essential features such as hot offers, product browsing, loyalty points, and cart functionality.",
        },
        {
          id: 3,
          details:
            "For the backend, we integrated Firebase, which we used for authentication, real-time database storage, and deployment. This allowed us to implement a full login and registration system, as well as storing user orders and managing product data dynamically.",
        },
        {
          id: 4,
          details: "Key Features: ",
        },
        {
          id: 5,
          details:
            "User-friendly interface inspired by the original Buffalo Burger app, featuring banners, top-selling products, and hot offers.",
        },
        {
          id: 6,
          details:
            "Easy ordering system, allowing users to place food orders directly from the app with a smooth and intuitive experience.",
        },
        {
          id: 7,
          details: "Cart system with product listings and quantity management.",
        },
      ],
    },
  },
];
