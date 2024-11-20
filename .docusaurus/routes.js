import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '976'),
    exact: true
  },
  {
    path: '/blog/2023/09/19/exceptions',
    component: ComponentCreator('/blog/2023/09/19/exceptions', '2a8'),
    exact: true
  },
  {
    path: '/blog/2023/10/17/arbeitsauftrag',
    component: ComponentCreator('/blog/2023/10/17/arbeitsauftrag', '434'),
    exact: true
  },
  {
    path: '/blog/2024/10/14/github',
    component: ComponentCreator('/blog/2024/10/14/github', 'f80'),
    exact: true
  },
  {
    path: '/blog/2024/10/18/phpstorm-softwrap',
    component: ComponentCreator('/blog/2024/10/18/phpstorm-softwrap', '585'),
    exact: true
  },
  {
    path: '/blog/2024/11/04/index',
    component: ComponentCreator('/blog/2024/11/04/index', '06e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/b-bastian',
    component: ComponentCreator('/blog/authors/b-bastian', '3f9'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '137'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4e5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '359'),
            routes: [
              {
                path: '/docs/allgemeines/toc',
                component: ComponentCreator('/docs/allgemeines/toc', '866'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/xmlBook',
                component: ComponentCreator('/docs/projects/xmlBook', '36c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/xmlProject',
                component: ComponentCreator('/docs/projects/xmlProject', '776'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SE/anforderungsanalyse',
                component: ComponentCreator('/docs/SE/anforderungsanalyse', 'f24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SE/design-patterns',
                component: ComponentCreator('/docs/SE/design-patterns', 'ac6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SE/dokumente',
                component: ComponentCreator('/docs/SE/dokumente', '101'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SE/softwaretests',
                component: ComponentCreator('/docs/SE/softwaretests', 'b2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SE/wasserfall',
                component: ComponentCreator('/docs/SE/wasserfall', '83b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/bewerten',
                component: ComponentCreator('/docs/theorie/bewerten', 'e12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/initiieren',
                component: ComponentCreator('/docs/theorie/initiieren', 'a0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projekt',
                component: ComponentCreator('/docs/theorie/projekt', 'cb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projekt-wuerdigkeit',
                component: ComponentCreator('/docs/theorie/projekt-wuerdigkeit', '968'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projektarten',
                component: ComponentCreator('/docs/theorie/projektarten', '9f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projektinstrumente',
                component: ComponentCreator('/docs/theorie/projektinstrumente', '5d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projektmanagement',
                component: ComponentCreator('/docs/theorie/projektmanagement', '9dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projektrollen',
                component: ComponentCreator('/docs/theorie/projektrollen', '5d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/projektziele',
                component: ComponentCreator('/docs/theorie/projektziele', 'fc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/qualitaetsmanagement',
                component: ComponentCreator('/docs/theorie/qualitaetsmanagement', 'f7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/theorie/umweltanalyse',
                component: ComponentCreator('/docs/theorie/umweltanalyse', '657'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tipps-tricks/tipps-und-tricks',
                component: ComponentCreator('/docs/tipps-tricks/tipps-und-tricks', '8e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools/allgemeines',
                component: ComponentCreator('/docs/tools/allgemeines', '885'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools/diagrams',
                component: ComponentCreator('/docs/tools/diagrams', '940'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
