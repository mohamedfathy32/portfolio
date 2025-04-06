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
    title: "Google Health Platform",
    category: "Frontend (React)",
    img: WebImage2,
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    ProjectHeader: {
      title: "Project Management UI",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Image3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/realstoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/realstoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 2,
    title: "Phoenix Digital Agency",
    category: "Mobile Application(React native)",
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    img: MobileImage2,
    ProjectHeader: {
      title: "Project Management UI",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Image3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/realstoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/realstoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 3,
    title: "Project Management UI",
    category: "Frontend (React)",
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    img: UIImage1,
    ProjectHeader: {
      title: "Project Management UI",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Image3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/realstoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/realstoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 4,
    title: "Cloud Storage Platform",
    category: "Frontend (React)",
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    img: UIImage2,
    ProjectHeader: {
      title: "Project Management UI",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Image3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/realstoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/realstoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 5,
    title: "React Social App",
    category: "Mobile Application(React native)",
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    img: MobileImage1,
    ProjectHeader: {
      title: "Project Management UI",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Image3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/realstoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/realstoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 6,
    title: "Apple Design System",
    category: "Frontend (Angular)",
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    img: WebImage1,
    ProjectHeader: {
      title: "Project Management UI",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Image3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/realstoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/realstoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 7,
    title: "Cloud Storage Platform",
    category: "WordPress",
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    img: UIImage2,
    ProjectHeader: {
      title: "Project Management UI",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Image3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/realstoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/realstoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 8,
    title: "React Social App",
    category: "WordPress",
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    img: MobileImage1,
    ProjectHeader: {
      title: "Project Management UI",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Image3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/realstoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/realstoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 9,
    title: "Apple Design System",
    category: "WordPress",
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    img: WebImage1,
    ProjectHeader: {
      title: "Project Management UI",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Image3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Image1,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: Image2,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/realstoman",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/realstoman",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
];
