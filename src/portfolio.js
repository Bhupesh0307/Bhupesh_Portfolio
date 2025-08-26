/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1750 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bhupesh Jha",
  title: "Hiii, I'm Bhupesh",
  subTitle: emoji(
    "Aspiring product analyst specializing in data visualization, automation and business intelligence to drive impactful decision-making and enhance operational efficiency. Eager to apply analytical and technical expertise to contribute to a dynamic data analysis team."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Bhupesh0307",
  linkedin: "https://www.linkedin.com/in/bhupesh-jha-09aa5323a/",
  gmail: "bjha0307.work@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Data painter, using visualization to bring insights to life. Data wizard, conjuring insights from the depths of complex datasets.",
  skills: [
    emoji(
      "⚡  Developed a multi-page Power BI dashboard analyzing key business metrics (sales, returns, customer segments, store performance, and product trends), optimizing decision-making"
    ),
    emoji("⚡ Implemented data modeling & visualization techniques to identify sales trends and reduce return rates, improving performance."),
    emoji(
      "⚡ Devised a three-channel revenue model with an good monthly app revenue."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The LNM Institute of Information Technology",
      logo: require("./assets/images/cropped_circle_image.png"),
      subHeader: "Btech Computer Science Engineering",
      duration: "2022 - 2026",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis",
      progressPercentage: "90%"
    },
    {
       Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Summer Intern",
      company: "Celebal Technologies",
      companylogo: require("./assets/images/celebal_logo.jpeg"),
      date: "Jun 2025 – Aug 2025",
      desc: "Completed a 2-month remote internship as a Full Stack Intern, gaining hands-on experience in both frontend and backend web development through real-world, industry-level projects. Delivered two fully functional web applications under the guidance of experienced mentors, emphasizing practical implementation of full stack concepts:",
      descBullets: [
        " Spotify Clone: Created a responsive music streaming web app using React, integrated with a third-party music API. ",
        " E-commerce Store: Developed a full stack platform featuring user authentication, product listings, shopping cart, and mock payment gateway"
      ]
    },
    {
      role: "Artist and Operations Head",
      company: "Vivacity",
      companylogo: require("./assets/images/cropped_circle_image (1).png"),
      date: "Aug 2024 – Feb 2025",
      desc: "Vivacity is the annual cultural fest of LNMIIT, Jaipur, and it’s one of the largest student-driven festivals in Rajasthan with 10,000+ footfall. It is a 3-day celebration of music, dance, art, drama, literature, and fashion, bringing together students from colleges across India. ",
      descBullets: [
        " Successfully managed end-to-end artist booking, coordination, negotiations, contracts, and logistics.",
        " Led a 50+ member cross-functional team to coordinate stage schedules, technical setups, and on-ground execution, ensuring timely performances and enhanced audience engagement throughout the fest."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Yellow and Black Modern Media Logo (4).png"),
      projectName: "StayNear",
      projectDesc: "Finding comfortable and affordable accommodation near your college made simple.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://stay-near.vercel.app/"
        },
        {
          name: "Github",
          url: "https://github.com/Bhupesh0307/StayNear"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/FAD1.png"),
      projectName: "Fitness Analytic Dashboard",
      projectDesc: "A comprehensive tool to monitor fitness, performance, and business insights.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Bhupesh0307/Fitness-Analytic-Dashboard"
        }
        //  you can add extra buttons here.
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Web Development Harkirat",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://shrutijha0803-vfure.wordpress.com/2025/08/25/power-bi-transforming-data-into-business-insights/",
      title: "Power BI: Transforming Data into Business Insights",
      description:
        "Discover how Power BI turns raw data into actionable insights."
    },
    {
      url: "https://shrutijha0803-vfure.wordpress.com/2025/08/25/sql-the-language-behind-data/",
      title: "SQL: The Language Behind Data",
      description:
        "SQL explained: the essential language behind databases and data-driven decisions."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me! ☎️"),
  subtitle:
    "Discuss a project, Hire me or just want to say hi? My Inbox is open for all.",
  number: "+91 63774 91725",
  email_address: "bjha0307.work@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
