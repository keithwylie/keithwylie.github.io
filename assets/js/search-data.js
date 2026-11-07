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
          description: "",
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
          title: 'forensic psychology',
          description: "forensic practice, assessment, expert testimony, corrections, and public-serving psychological science",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/forensic-psychology/";
            },},{id: "teaching-learning-and-memory",
          title: 'learning and memory',
          description: "behavioral, cognitive, and neural mechanisms of learning and memory",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/learning-and-memory/";
            },},{id: "teaching-legal-psychology",
          title: 'legal psychology',
          description: "applying psychological science to investigations, trials, and justice",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/legal-psychology/";
            },},{id: "teaching-memory",
          title: 'memory',
          description: "upper-level seminar in human memory, theory, methods, and applications",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/memory/";
            },},{id: "teaching-psychology-of-language",
          title: 'psychology of language',
          description: "upper-level seminar on psycholinguistics, sociolinguistics, and language in public life",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/psychology-of-language/";
            },},{id: "teaching-pseudoscience",
          title: 'pseudoscience',
          description: "critical thinking and scientific literacy in psychology",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/psychology-of-pseudoscience/";
            },},{id: "teaching-research-methods",
          title: 'research methods',
          description: "how psychologists ask questions and build evidence",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/research-methods/";
            },},{id: "teaching-science-of-learning",
          title: 'science of learning',
          description: "evidence-based strategies for studying, remembering, and thinking",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/science-of-learning/";
            },},{id: "teaching-science-of-pop-culture",
          title: 'Science of Pop Culture',
          description: "social scientific inquiry through drag, identity, representation, and popular culture",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/science-of-pop-culture/";
            },},{id: "teaching-social-psychology",
          title: 'social psychology',
          description: "how people think about, influence, and relate to one another",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/social-psychology/";
            },},{
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
