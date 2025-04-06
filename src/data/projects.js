// Import images
import WebImage1 from "../images/web-project-1.jpg";
import WebImage2 from "../images/web-project-2.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage2 from "../images/mobile-project-2.jpg";
import UIImage1 from "../images/ui-project-1.jpg";
import UIImage2 from "../images/ui-project-2.jpg";
import Image1 from "../images/ui-project-1.jpg";
import Image2 from "../images/web-project-2.jpg";
import Image3 from "../images/mobile-project-2.jpg";
import Image4 from "../images/mobile-project-1.jpg";
import Image5 from "../images/web-project-1.jpg";
import Image6 from "../images/ui-project-2.jpg";
import BuffaloMain from "../images//Buffalo Burger/Buffalo-Burger-main.png";
import Buffalo1 from "../images//Buffalo Burger/Buffalo-Burger (1).png";
import Buffalo2 from "../images//Buffalo Burger/Buffalo-Burger (2).png";
import Buffalo3 from "../images//Buffalo Burger/Buffalo-Burger (3).png";
import Buffalo4 from "../images//Buffalo Burger/Buffalo-Burger (4).png";
import Buffalo5 from "../images//Buffalo Burger/Buffalo-Burger (5).png";
import Buffalo6 from "../images//Buffalo Burger/Buffalo-Burger (6).png";
import Buffalo7 from "../images//Buffalo Burger/Buffalo-Burger (7).png";
import Buffalo8 from "../images//Buffalo Burger/Buffalo-Burger (8).png";
import Buffalo9 from "../images//Buffalo Burger/Buffalo-Burger (9).png";
import Buffalo10 from "../images//Buffalo Burger/Buffalo-Burger (10).png";
import Buffalo11 from "../images//Buffalo Burger/Buffalo-Burger (11).png";
import BuffaloMobile12 from "../images//Buffalo Burger/Buffalo-Burger (12).png";
import BuffaloMobile13 from "../images//Buffalo Burger/Buffalo-Burger (13).png";
import BuffaloMobile14 from "../images//Buffalo Burger/Buffalo-Burger (14).png";
import BuffaloMobile15 from "../images//Buffalo Burger/Buffalo-Burger (15).png";
import BuffaloMobile16 from "../images//Buffalo Burger/Buffalo-Burger (16).png";
import BuffaloMobile17 from "../images//Buffalo Burger/Buffalo-Burger (17).png";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "Buffalo Burger Clone",
    category: "Frontend (React)",
    img: BuffaloMain,
    gallery: [Buffalo1, Buffalo2, Buffalo3, Buffalo4, Buffalo5, Buffalo6,Buffalo7,Buffalo8,Buffalo9,Buffalo10,Buffalo11],
    galleryMobile: [BuffaloMobile12,BuffaloMobile13,BuffaloMobile14,BuffaloMobile15,BuffaloMobile16,BuffaloMobile17],
    ProjectHeader: {
      title: "Buffalo Burger Clone – ITI Final Project",
      publishDate: "Nov 12, 2024",
      tags: "Frontend / React",
    },
    // ProjectImages: [
    //   {
    //     id: 1,
    //     title: "Kabul Project Management UI",
    //     img: Buffalo1,
    //   },
    //   {
    //     id: 2,
    //     title: "Kabul Project Management UI",
    //     img: Buffalo2,
    //   },
    //   {
    //     id: 3,
    //     title: "Kabul Project Management UI",
    //     img: Buffalo3,
    //   },
    //   {
    //     id: 4,
    //     title: "Kabul Project Management UI",
    //     img: Buffalo4,
    //   },
    //   {
    //     id: 5,
    //     title: "Kabul Project Management UI",
    //     img: Buffalo5,
    //   },
    //   {
    //     id: 6,
    //     title: "Kabul Project Management UI",
    //     img: Buffalo6,
    //   },
    // ],
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
        }
        
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
          "As part of my final project at the Information Technology Institute (ITI), I collaborated with a colleague to build a fully functional clone of the Buffalo Burger website. The goal was to replicate the original website’s design, structure, and functionality as closely as possible, while applying best practices in modern front-end development."        },
        {
          id: 2,
          details:
          "This project was developed using React.js for the frontend, combined with Tailwind CSS for styling, ensuring a responsive and visually consistent user interface across all devices. We also used React Context API for global state management, enabling smooth handling of user interactions such as adding items to the cart, changing quantities, and navigating between different sections of the website."        },
        {
          id: 3,
          details:
          "For the backend, we integrated Firebase, which we used for authentication, real-time database storage, and deployment. This allowed us to implement a full login and registration system, as well as storing user orders and managing product data dynamically."        },
        {
          id: 4,
          details:
          "The project mirrors the look and feel of the original Buffalo Burger site, including:"
      },
      {
        id:5,
        details:
          "A full menu with categories like sandwiches, meals, sides, and offers"
      },
      {
        id:6,
        details:
          "Dynamic cart management and order processing"
      },
      {
        id:7,
        details:
          "Responsive design optimized for both desktop and mobile views"
      },
      {
        id:8,
        details:
          "Multi-language support for both English and Arabic"
      },
      {
        id:9,
        details:
          "Firebase-based admin panel  for future scalability"
      },
      {
        id:10,
        details:
          "This project gave us a hands-on experience in building a real-world food delivery website, and helped us strengthen our skills in full-stack web development, UI/UX consistency, and collaboration in a team environment."
      },


      ],

    },

  },
  // {
  //   id: 2,
  //   title: "Phoenix Digital Agency",
  //   category: "Mobile Application(React native)",
  //   gallery: [Image1, Buffalo5, Image3, Image4, Image5, Image6],
  //   galleryMobile: [BuffaloMobile12,BuffaloMobile13,BuffaloMobile14,BuffaloMobile15,BuffaloMobile16],

  //   img: MobileImage2,
  //   ProjectHeader: {
  //     title: "Project Management UI",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: 1,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 2,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 3,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //     {
  //       id: 4,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 5,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 6,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: 1,
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: 2,
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: 3,
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: 4,
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: 1,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: 2,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 3,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 4,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     SocialSharing: [
  //       {
  //         id: 1,
  //         name: "Twitter",
  //         icon: <FiTwitter />,
  //         url: "https://twitter.com/realstoman",
  //       },
  //       {
  //         id: 2,
  //         name: "Instagram",
  //         icon: <FiInstagram />,
  //         url: "https://instagram.com/realstoman",
  //       },
  //       {
  //         id: 3,
  //         name: "Facebook",
  //         icon: <FiFacebook />,
  //         url: "https://facebook.com/",
  //       },
  //       {
  //         id: 4,
  //         name: "LinkedIn",
  //         icon: <FiLinkedin />,
  //         url: "https://linkedin.com/",
  //       },
  //       {
  //         id: 5,
  //         name: "Youtube",
  //         icon: <FiYoutube />,
  //         url: "https://www.youtube.com/c/StomanStudio",
  //       },
  //     ],
  //   },
  //   RelatedProject: {
  //     title: "Related Projects",
  //     Projects: [
  //       {
  //         id: 1,
  //         title: "Mobile UI",
  //         img: Image4,
  //       },
  //       {
  //         id: 2,
  //         title: "Web Application",
  //         img: Image5,
  //       },
  //       {
  //         id: 3,
  //         title: "UI Design",
  //         img: Image6,
  //       },
  //       {
  //         id: 4,
  //         title: "Kabul Mobile App UI",
  //         img: Image3,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 3,
  //   title: "Project Management UI",
  //   category: "Frontend (React)",
  //   gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
  //   img: UIImage1,
  //   ProjectHeader: {
  //     title: "Project Management UI",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: 1,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 2,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 3,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //     {
  //       id: 4,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 5,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 6,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: 1,
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: 2,
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: 3,
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: 4,
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: 1,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: 2,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 3,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 4,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     SocialSharing: [
  //       {
  //         id: 1,
  //         name: "Twitter",
  //         icon: <FiTwitter />,
  //         url: "https://twitter.com/realstoman",
  //       },
  //       {
  //         id: 2,
  //         name: "Instagram",
  //         icon: <FiInstagram />,
  //         url: "https://instagram.com/realstoman",
  //       },
  //       {
  //         id: 3,
  //         name: "Facebook",
  //         icon: <FiFacebook />,
  //         url: "https://facebook.com/",
  //       },
  //       {
  //         id: 4,
  //         name: "LinkedIn",
  //         icon: <FiLinkedin />,
  //         url: "https://linkedin.com/",
  //       },
  //       {
  //         id: 5,
  //         name: "Youtube",
  //         icon: <FiYoutube />,
  //         url: "https://www.youtube.com/c/StomanStudio",
  //       },
  //     ],
  //   },
  //   RelatedProject: {
  //     title: "Related Projects",
  //     Projects: [
  //       {
  //         id: 1,
  //         title: "Mobile UI",
  //         img: Image4,
  //       },
  //       {
  //         id: 2,
  //         title: "Web Application",
  //         img: Image5,
  //       },
  //       {
  //         id: 3,
  //         title: "UI Design",
  //         img: Image6,
  //       },
  //       {
  //         id: 4,
  //         title: "Kabul Mobile App UI",
  //         img: Image3,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 4,
  //   title: "Cloud Storage Platform",
  //   category: "Frontend (React)",
  //   gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
  //   img: UIImage2,
  //   ProjectHeader: {
  //     title: "Project Management UI",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: 1,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 2,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 3,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //     {
  //       id: 4,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 5,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 6,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: 1,
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: 2,
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: 3,
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: 4,
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: 1,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: 2,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 3,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 4,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     SocialSharing: [
  //       {
  //         id: 1,
  //         name: "Twitter",
  //         icon: <FiTwitter />,
  //         url: "https://twitter.com/realstoman",
  //       },
  //       {
  //         id: 2,
  //         name: "Instagram",
  //         icon: <FiInstagram />,
  //         url: "https://instagram.com/realstoman",
  //       },
  //       {
  //         id: 3,
  //         name: "Facebook",
  //         icon: <FiFacebook />,
  //         url: "https://facebook.com/",
  //       },
  //       {
  //         id: 4,
  //         name: "LinkedIn",
  //         icon: <FiLinkedin />,
  //         url: "https://linkedin.com/",
  //       },
  //       {
  //         id: 5,
  //         name: "Youtube",
  //         icon: <FiYoutube />,
  //         url: "https://www.youtube.com/c/StomanStudio",
  //       },
  //     ],
  //   },
  //   RelatedProject: {
  //     title: "Related Projects",
  //     Projects: [
  //       {
  //         id: 1,
  //         title: "Mobile UI",
  //         img: Image4,
  //       },
  //       {
  //         id: 2,
  //         title: "Web Application",
  //         img: Image5,
  //       },
  //       {
  //         id: 3,
  //         title: "UI Design",
  //         img: Image6,
  //       },
  //       {
  //         id: 4,
  //         title: "Kabul Mobile App UI",
  //         img: Image3,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 5,
  //   title: "React Social App",
  //   category: "Mobile Application(React native)",
  //   gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
  //   img: MobileImage1,
  //   ProjectHeader: {
  //     title: "Project Management UI",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: 1,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 2,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 3,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //     {
  //       id: 4,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 5,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 6,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: 1,
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: 2,
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: 3,
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: 4,
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: 1,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: 2,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 3,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 4,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     SocialSharing: [
  //       {
  //         id: 1,
  //         name: "Twitter",
  //         icon: <FiTwitter />,
  //         url: "https://twitter.com/realstoman",
  //       },
  //       {
  //         id: 2,
  //         name: "Instagram",
  //         icon: <FiInstagram />,
  //         url: "https://instagram.com/realstoman",
  //       },
  //       {
  //         id: 3,
  //         name: "Facebook",
  //         icon: <FiFacebook />,
  //         url: "https://facebook.com/",
  //       },
  //       {
  //         id: 4,
  //         name: "LinkedIn",
  //         icon: <FiLinkedin />,
  //         url: "https://linkedin.com/",
  //       },
  //       {
  //         id: 5,
  //         name: "Youtube",
  //         icon: <FiYoutube />,
  //         url: "https://www.youtube.com/c/StomanStudio",
  //       },
  //     ],
  //   },
  //   RelatedProject: {
  //     title: "Related Projects",
  //     Projects: [
  //       {
  //         id: 1,
  //         title: "Mobile UI",
  //         img: Image4,
  //       },
  //       {
  //         id: 2,
  //         title: "Web Application",
  //         img: Image5,
  //       },
  //       {
  //         id: 3,
  //         title: "UI Design",
  //         img: Image6,
  //       },
  //       {
  //         id: 4,
  //         title: "Kabul Mobile App UI",
  //         img: Image3,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 6,
  //   title: "Apple Design System",
  //   category: "Frontend (Angular)",
  //   gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
  //   img: WebImage1,
  //   ProjectHeader: {
  //     title: "Project Management UI",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: 1,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 2,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 3,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //     {
  //       id: 4,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 5,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 6,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: 1,
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: 2,
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: 3,
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: 4,
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: 1,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: 2,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 3,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 4,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     SocialSharing: [
  //       {
  //         id: 1,
  //         name: "Twitter",
  //         icon: <FiTwitter />,
  //         url: "https://twitter.com/realstoman",
  //       },
  //       {
  //         id: 2,
  //         name: "Instagram",
  //         icon: <FiInstagram />,
  //         url: "https://instagram.com/realstoman",
  //       },
  //       {
  //         id: 3,
  //         name: "Facebook",
  //         icon: <FiFacebook />,
  //         url: "https://facebook.com/",
  //       },
  //       {
  //         id: 4,
  //         name: "LinkedIn",
  //         icon: <FiLinkedin />,
  //         url: "https://linkedin.com/",
  //       },
  //       {
  //         id: 5,
  //         name: "Youtube",
  //         icon: <FiYoutube />,
  //         url: "https://www.youtube.com/c/StomanStudio",
  //       },
  //     ],
  //   },
  //   RelatedProject: {
  //     title: "Related Projects",
  //     Projects: [
  //       {
  //         id: 1,
  //         title: "Mobile UI",
  //         img: Image4,
  //       },
  //       {
  //         id: 2,
  //         title: "Web Application",
  //         img: Image5,
  //       },
  //       {
  //         id: 3,
  //         title: "UI Design",
  //         img: Image6,
  //       },
  //       {
  //         id: 4,
  //         title: "Kabul Mobile App UI",
  //         img: Image3,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 7,
  //   title: "Cloud Storage Platform",
  //   category: "WordPress",
  //   gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
  //   img: UIImage2,
  //   ProjectHeader: {
  //     title: "Project Management UI",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: 1,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 2,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 3,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //     {
  //       id: 4,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 5,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 6,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: 1,
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: 2,
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: 3,
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: 4,
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: 1,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: 2,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 3,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 4,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     SocialSharing: [
  //       {
  //         id: 1,
  //         name: "Twitter",
  //         icon: <FiTwitter />,
  //         url: "https://twitter.com/realstoman",
  //       },
  //       {
  //         id: 2,
  //         name: "Instagram",
  //         icon: <FiInstagram />,
  //         url: "https://instagram.com/realstoman",
  //       },
  //       {
  //         id: 3,
  //         name: "Facebook",
  //         icon: <FiFacebook />,
  //         url: "https://facebook.com/",
  //       },
  //       {
  //         id: 4,
  //         name: "LinkedIn",
  //         icon: <FiLinkedin />,
  //         url: "https://linkedin.com/",
  //       },
  //       {
  //         id: 5,
  //         name: "Youtube",
  //         icon: <FiYoutube />,
  //         url: "https://www.youtube.com/c/StomanStudio",
  //       },
  //     ],
  //   },
  //   RelatedProject: {
  //     title: "Related Projects",
  //     Projects: [
  //       {
  //         id: 1,
  //         title: "Mobile UI",
  //         img: Image4,
  //       },
  //       {
  //         id: 2,
  //         title: "Web Application",
  //         img: Image5,
  //       },
  //       {
  //         id: 3,
  //         title: "UI Design",
  //         img: Image6,
  //       },
  //       {
  //         id: 4,
  //         title: "Kabul Mobile App UI",
  //         img: Image3,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 8,
  //   title: "React Social App",
  //   category: "WordPress",
  //   gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
  //   img: MobileImage1,
  //   ProjectHeader: {
  //     title: "Project Management UI",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: 1,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 2,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 3,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //     {
  //       id: 4,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 5,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 6,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: 1,
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: 2,
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: 3,
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: 4,
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: 1,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: 2,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 3,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 4,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     SocialSharing: [
  //       {
  //         id: 1,
  //         name: "Twitter",
  //         icon: <FiTwitter />,
  //         url: "https://twitter.com/realstoman",
  //       },
  //       {
  //         id: 2,
  //         name: "Instagram",
  //         icon: <FiInstagram />,
  //         url: "https://instagram.com/realstoman",
  //       },
  //       {
  //         id: 3,
  //         name: "Facebook",
  //         icon: <FiFacebook />,
  //         url: "https://facebook.com/",
  //       },
  //       {
  //         id: 4,
  //         name: "LinkedIn",
  //         icon: <FiLinkedin />,
  //         url: "https://linkedin.com/",
  //       },
  //       {
  //         id: 5,
  //         name: "Youtube",
  //         icon: <FiYoutube />,
  //         url: "https://www.youtube.com/c/StomanStudio",
  //       },
  //     ],
  //   },
  //   RelatedProject: {
  //     title: "Related Projects",
  //     Projects: [
  //       {
  //         id: 1,
  //         title: "Mobile UI",
  //         img: Image4,
  //       },
  //       {
  //         id: 2,
  //         title: "Web Application",
  //         img: Image5,
  //       },
  //       {
  //         id: 3,
  //         title: "UI Design",
  //         img: Image6,
  //       },
  //       {
  //         id: 4,
  //         title: "Kabul Mobile App UI",
  //         img: Image3,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 9,
  //   title: "Apple Design System",
  //   category: "WordPress",
  //   gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
  //   img: WebImage1,
  //   ProjectHeader: {
  //     title: "Project Management UI",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: 1,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 2,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 3,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //     {
  //       id: 4,
  //       title: "Kabul Project Management UI",
  //       img: Image1,
  //     },
  //     {
  //       id: 5,
  //       title: "Kabul Project Management UI",
  //       img: Image2,
  //     },
  //     {
  //       id: 6,
  //       title: "Kabul Project Management UI",
  //       img: Image3,
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: 1,
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: 2,
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: 3,
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: 4,
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: 1,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: 2,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 3,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: 4,
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     SocialSharing: [
  //       {
  //         id: 1,
  //         name: "Twitter",
  //         icon: <FiTwitter />,
  //         url: "https://twitter.com/realstoman",
  //       },
  //       {
  //         id: 2,
  //         name: "Instagram",
  //         icon: <FiInstagram />,
  //         url: "https://instagram.com/realstoman",
  //       },
  //       {
  //         id: 3,
  //         name: "Facebook",
  //         icon: <FiFacebook />,
  //         url: "https://facebook.com/",
  //       },
  //       {
  //         id: 4,
  //         name: "LinkedIn",
  //         icon: <FiLinkedin />,
  //         url: "https://linkedin.com/",
  //       },
  //       {
  //         id: 5,
  //         name: "Youtube",
  //         icon: <FiYoutube />,
  //         url: "https://www.youtube.com/c/StomanStudio",
  //       },
  //     ],
  //   },
  //   RelatedProject: {
  //     title: "Related Projects",
  //     Projects: [
  //       {
  //         id: 1,
  //         title: "Mobile UI",
  //         img: Image4,
  //       },
  //       {
  //         id: 2,
  //         title: "Web Application",
  //         img: Image5,
  //       },
  //       {
  //         id: 3,
  //         title: "UI Design",
  //         img: Image6,
  //       },
  //       {
  //         id: 4,
  //         title: "Kabul Mobile App UI",
  //         img: Image3,
  //       },
  //     ],
  //   },
  // },
];
