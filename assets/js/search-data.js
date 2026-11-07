// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-teaching",
          title: "teaching",
          description: "Courses and original teaching activities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in peer-reviewed journals",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-presentations",
          title: "presentations",
          description: "conference papers, posters, and invited talks",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "teaching-forensic-psychology",
          title: 'Forensic Psychology',
          description: "Assessment, professional practice, and psychology in legal settings",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/forensic-psychology/";
            },},{id: "teaching-learning-and-memory",
          title: 'Learning and Memory',
          description: "Learning processes, memory systems, and hands-on demonstrations",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/learning-and-memory/";
            },},{id: "teaching-legal-psychology",
          title: 'Legal Psychology',
          description: "Psychological science in investigations, trials, and legal decisions",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/legal-psychology/";
            },},{id: "teaching-memory",
          title: 'Memory',
          description: "An advanced seminar in human memory and its applications",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/memory/";
            },},{id: "teaching-psychology-of-language",
          title: 'Psychology of Language',
          description: "Language processing, social meaning, and communication in public life",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/psychology-of-language/";
            },},{id: "teaching-psychology-of-pseudoscience",
          title: 'Psychology of Pseudoscience',
          description: "Why questionable claims persuade us and how to evaluate evidence",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/psychology-of-pseudoscience/";
            },},{id: "teaching-research-methods",
          title: 'Research Methods',
          description: "Designing studies, analyzing data, and communicating evidence",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/research-methods/";
            },},{id: "teaching-science-of-learning",
          title: 'Science of Learning',
          description: "A Flagler Core course on learning, evidence, and research literacy",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/science-of-learning/";
            },},{id: "teaching-science-of-pop-culture",
          title: 'Science of Pop Culture',
          description: "A Flagler Core course on drag, identity, and social scientific inquiry",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/science-of-pop-culture/";
            },},{id: "teaching-social-psychology",
          title: 'Social Psychology',
          description: "How people think, influence each other, and act in social settings",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/social-psychology/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%77%79%6C%69%65@%66%6C%61%67%6C%65%72.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bkwylie", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1050-0151", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=_7-N6a4AAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
