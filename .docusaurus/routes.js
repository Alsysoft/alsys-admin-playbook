import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/alsys-admin-playbook/blog',
    component: ComponentCreator('/alsys-admin-playbook/blog', 'dab'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/blog/archive',
    component: ComponentCreator('/alsys-admin-playbook/blog/archive', '79c'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/blog/first-blog-post',
    component: ComponentCreator('/alsys-admin-playbook/blog/first-blog-post', 'f32'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/blog/long-blog-post',
    component: ComponentCreator('/alsys-admin-playbook/blog/long-blog-post', '777'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/blog/mdx-blog-post',
    component: ComponentCreator('/alsys-admin-playbook/blog/mdx-blog-post', '838'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/blog/tags',
    component: ComponentCreator('/alsys-admin-playbook/blog/tags', '06c'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/blog/tags/docusaurus',
    component: ComponentCreator('/alsys-admin-playbook/blog/tags/docusaurus', '0f0'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/blog/tags/facebook',
    component: ComponentCreator('/alsys-admin-playbook/blog/tags/facebook', 'b2e'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/blog/tags/hello',
    component: ComponentCreator('/alsys-admin-playbook/blog/tags/hello', '82b'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/blog/tags/hola',
    component: ComponentCreator('/alsys-admin-playbook/blog/tags/hola', 'c33'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/blog/welcome',
    component: ComponentCreator('/alsys-admin-playbook/blog/welcome', 'ff0'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/intro',
    component: ComponentCreator('/alsys-admin-playbook/intro', 'eff'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/markdown-page',
    component: ComponentCreator('/alsys-admin-playbook/markdown-page', '8fc'),
    exact: true
  },
  {
    path: '/alsys-admin-playbook/next',
    component: ComponentCreator('/alsys-admin-playbook/next', '7b9'),
    routes: [
      {
        path: '/alsys-admin-playbook/next/',
        component: ComponentCreator('/alsys-admin-playbook/next/', '07f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Admin/Guide to Alsys Admin application',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Admin/Guide to Alsys Admin application', '076'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Admin/Health',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Admin/Health', 'a7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Admin/Induction',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Admin/Induction', '187'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Admin/Newsfeed',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Admin/Newsfeed', '2d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Admin/Organization',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Admin/Organization', '534'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Admin/Time & Attendance',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Admin/Time & Attendance', '6cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Admin/User management',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Admin/User management', '5b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Connect/Guide to Mobile Application',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Connect/Guide to Mobile Application', '6d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Connect/Health',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Connect/Health', '574'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Connect/Home',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Connect/Home', 'fed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Connect/Induction',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Connect/Induction', 'c39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Connect/Newsfeed',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Connect/Newsfeed', 'ba9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Connect/Settings',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Connect/Settings', '77a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Connect/User Profile',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Connect/User Profile', '6d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Alsys Connect/User Registration',
        component: ComponentCreator('/alsys-admin-playbook/next/Alsys Connect/User Registration', '836'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/category/alsys-admin',
        component: ComponentCreator('/alsys-admin-playbook/next/category/alsys-admin', 'ff2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/category/alsys-connect',
        component: ComponentCreator('/alsys-admin-playbook/next/category/alsys-connect', '8b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/alsys-admin-playbook/',
    component: ComponentCreator('/alsys-admin-playbook/', '428'),
    routes: [
      {
        path: '/alsys-admin-playbook/',
        component: ComponentCreator('/alsys-admin-playbook/', 'c98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Admin/Guide to Alsys Admin application',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Admin/Guide to Alsys Admin application', 'a97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Admin/Health',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Admin/Health', '5fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Admin/Induction',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Admin/Induction', 'd86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Admin/Newsfeed',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Admin/Newsfeed', '93c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Admin/Organization',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Admin/Organization', 'ab6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Admin/Time & Attendance',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Admin/Time & Attendance', 'cc4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Admin/User management',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Admin/User management', 'e3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Connect/Guide to Mobile Application',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Connect/Guide to Mobile Application', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Connect/Health',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Connect/Health', 'f8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Connect/Home',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Connect/Home', 'feb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Connect/Induction',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Connect/Induction', '151'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Connect/Newsfeed',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Connect/Newsfeed', 'd94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Connect/Settings',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Connect/Settings', '4b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Connect/User Profile',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Connect/User Profile', '744'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Alsys Connect/User Registration',
        component: ComponentCreator('/alsys-admin-playbook/Alsys Connect/User Registration', 'f45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/category/alsys-admin',
        component: ComponentCreator('/alsys-admin-playbook/category/alsys-admin', '8da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/category/alsys-connect',
        component: ComponentCreator('/alsys-admin-playbook/category/alsys-connect', 'fcd'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
