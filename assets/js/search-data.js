// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-presentations",
          title: "Presentations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-supervision",
          title: "Supervision",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/supervision/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Fanzon_CV.pdf";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-excited-to-start-my-new-position-as-lecturer-in-applied-mathematics-at-the-university-of-hull",
          title: 'Excited to start my new position as Lecturer in Applied Mathematics at the...',
          description: "",
          section: "News",},{id: "news-my-website-silviofanzon-com-is-live",
          title: 'My website silviofanzon.com is live',
          description: "",
          section: "News",},{id: "news-i-became-a-member-of-ipia-the-inverse-problems-international-association",
          title: 'I became a member of IPIA, the Inverse Problems International Association',
          description: "",
          section: "News",},{id: "news-happy-to-have-joined-the-primo-reserach-group-looking-forward-to-attend-their-talks-on-inverse-problems-machine-learning-and-optimization",
          title: 'Happy to have joined the PRIMO Reserach Group. Looking forward to attend their...',
          description: "",
          section: "News",},{id: "news-i-have-been-accepted-into-the-postgraduate-certificate-in-academic-practice-pcap-programme-at-the-university-of-hull-the-programme-is-designed-to-develop-my-teaching-practice-in-higher-education-and-will-lead-to-a-fellowship-of-the-higher-education-academy-fhea-looking-forward-to-start-in-february-2024",
          title: 'I have been accepted into the Postgraduate Certificate in Academic Practice (PCAP) programme...',
          description: "",
          section: "News",},{id: "news-our-paper-asymptotic-linear-convergence-of-fully-corrective-generalized-gradient-methods-has-been-published-on-mathematical-programming-for-a-quick-overview-of-the-paper-check-out-these-slides-more-detailed-explanation-here",
          title: 'Our paper Asymptotic linear convergence of Fully-Corrective Generalized Gradient methods has been published...',
          description: "",
          section: "News",},{id: "news-from-4-8-september-i-am-at-the-aip-2023-conference-in-göttingen-germany-i-am-presenting-in-the-minisymposium-ms40-dynamic-imaging-on-5-september-at-2pm-room-vg2-107-here-are-the-slides",
          title: 'From 4-8 September I am at the AIP 2023 conference in Göttingen (Germany)....',
          description: "",
          section: "News",},{id: "news-during-term-1-of-the-current-academic-year-2023-24-i-am-leading-the-courses-numbers-sequences-and-series-and-differential-geometry-at-the-university-of-hull-follow-the-links-for-lecture-notes-and-exercises",
          title: 'During Term 1 of the current academic year 2023/24 I am leading the...',
          description: "",
          section: "News",},{id: "news-our-preprint-faster-identification-of-faster-formula-1-drivers-via-time-rank-duality-is-out-we-provide-a-novel-approach-to-estimate-race-winning-probabilities-which-leads-to-new-insights-regarding-driver-level-versus-car-level-effects-as-well-as-a-simplified-monte-carlo-simulation-algorithm-the-annotated-r-code-to-reproduce-the-findings-is-here",
          title: 'Our preprint Faster identification of faster Formula 1 drivers via time-rank duality is...',
          description: "",
          section: "News",},{id: "news-i-am-teaching-the-module-statistical-models-at-the-university-of-hull-this-is-a-year-2-module-for-the-bsc-in-mathematics-2023-24-here-are-the-module-webpage-and-slides",
          title: 'I am teaching the module Statistical Models at the University of Hull. This...',
          description: "",
          section: "News",},{id: "news-our-paper-faster-identification-of-faster-formula-1-drivers-via-time-rank-duality-has-been-published-on-economics-letters-we-provide-a-novel-approach-to-estimate-race-winning-probabilities-which-leads-to-new-insights-regarding-driver-level-versus-car-level-effects-as-well-as-a-simplified-monte-carlo-simulation-algorithm-the-paper-can-be-found-here-the-annotated-r-code-to-reproduce-the-findings-is-here",
          title: 'Our paper Faster identification of faster Formula 1 drivers via time-rank duality has...',
          description: "",
          section: "News",},{id: "news-i-have-written-two-case-studies-for-the-final-assessment-of-the-pcap-module-titled-reflective-teaching-in-higher-education-the-first-case-study-link-addresses-how-i-have-employed-a-range-of-methods-approaches-and-digital-skills-in-my-teaching-learning-and-assessment-during-my-first-year-at-hull-the-second-case-study-link-provides-insights-into-how-i-have-supported-individual-students-including-my-experience-of-co-authoring-a-paper-with-a-hull-undergraduate-student-faster-identification-of-faster-formula-1-drivers-via-time-rank-duality",
          title: 'I have written two case studies for the final assessment of the PCAP...',
          description: "",
          section: "News",},{id: "news-check-out-our-paper-elementary-econometric-and-strategic-analysis-of-curling-matches-we-develop-a-markov-model-of-curling-matches-parametrised-by-the-probability-of-winning-an-end-and-the-probability-distribution-of-scoring-ends-using-a-maximum-entropy-argument-we-predict-that-the-points-distribution-of-scoring-ends-should-follow-a-constrained-geometric-distribution-read-the-paper-here",
          title: 'Check out our paper Elementary econometric and strategic analysis of curling matches. We...',
          description: "",
          section: "News",},{id: "news-i-have-produced-a-curriculum-evaluation-for-the-module-statistical-models-which-i-taght-in-2023-24-this-analysis-is-part-of-the-final-assessment-for-the-pcap-module-curriculum-design-the-presentation-video-and-slides-are-available-here",
          title: 'I have produced a Curriculum Evaluation for the module Statistical Models which I...',
          description: "",
          section: "News",},{id: "news-during-t1-of-the-2024-25-academic-year-i-am-teaching-the-modules-numbers-sequences-and-series-and-differential-geometry-at-the-university-of-hull-you-can-find-lecture-notes-and-more-information-by-following-the-links",
          title: 'During T1 of the 2024/25 academic year, I am teaching the modules Numbers,...',
          description: "",
          section: "News",},{id: "news-i-am-teaching-the-module-statistical-models-at-the-university-of-hull-this-is-a-year-2-module-for-the-bsc-in-mathematics-2024-25-here-are-the-module-webpage-and-slides",
          title: 'I am teaching the module Statistical Models at the University of Hull. This...',
          description: "",
          section: "News",},{id: "news-our-paper-elementary-econometric-and-strategic-analysis-of-curling-matches-has-been-published-on-managerial-finance-we-develop-a-markov-model-of-curling-matches-parametrised-by-the-probability-of-winning-an-end-and-the-probability-distribution-of-scoring-ends-using-a-maximum-entropy-argument-we-predict-that-the-points-distribution-of-scoring-ends-should-follow-a-constrained-geometric-distribution-read-the-paper-here",
          title: 'Our paper Elementary econometric and strategic analysis of curling matches has been published...',
          description: "",
          section: "News",},{id: "news-i-have-just-completed-writing-my-teaching-philosophy-statement-it-was-a-thoughtful-process-reflecting-on-my-approach-values-and-goals-as-an-educator-i-am-sharing-it-now-check-it-out-here-looking-forward-to-continuing-to-grow-as-a-teacher",
          title: 'I have just completed writing my teaching philosophy statement! It was a thoughtful...',
          description: "",
          section: "News",},{id: "news-i-have-successfully-completed-the-postgraduate-certificate-in-academic-practice-pcap-programme-at-the-university-of-hull-as-a-result-i-have-been-awarded-the-fellowship-of-the-higher-education-academy-fhea",
          title: 'I have successfully completed the Postgraduate Certificate in Academic Practice (PCAP) programme at...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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
