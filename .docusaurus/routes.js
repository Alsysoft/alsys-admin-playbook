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
    path: '/alsys-admin-playbook/1.0.0',
    component: ComponentCreator('/alsys-admin-playbook/1.0.0', '28b'),
    routes: [
      {
        path: '/alsys-admin-playbook/1.0.0/',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/', 'bee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Admin/Guide to Alsys Admin application',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Admin/Guide to Alsys Admin application', '14e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Admin/Health',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Admin/Health', 'e7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Admin/Induction',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Admin/Induction', '47c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Admin/Newsfeed',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Admin/Newsfeed', 'cb3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Admin/Organization',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Admin/Organization', '232'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Admin/Time & Attendance',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Admin/Time & Attendance', '121'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Admin/User management',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Admin/User management', '7ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Connect/Guide to Mobile Application',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Connect/Guide to Mobile Application', 'f42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Connect/Health',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Connect/Health', 'a1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Connect/Home',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Connect/Home', 'f52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Connect/Induction',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Connect/Induction', '468'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Connect/Newsfeed',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Connect/Newsfeed', '39e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Connect/Settings',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Connect/Settings', '467'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Connect/User Profile',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Connect/User Profile', '623'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/Alsys Connect/User Registration',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/Alsys Connect/User Registration', 'fa9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/category/alsys-admin',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/category/alsys-admin', 'a61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/1.0.0/category/alsys-connect',
        component: ComponentCreator('/alsys-admin-playbook/1.0.0/category/alsys-connect', '07c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/alsys-admin-playbook/next',
    component: ComponentCreator('/alsys-admin-playbook/next', 'f07'),
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
      },
      {
        path: '/alsys-admin-playbook/next/category/conply-mobile-app',
        component: ComponentCreator('/alsys-admin-playbook/next/category/conply-mobile-app', '0f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/category/organization',
        component: ComponentCreator('/alsys-admin-playbook/next/category/organization', '8f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/category/using-conply',
        component: ComponentCreator('/alsys-admin-playbook/next/category/using-conply', '9aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Conply Mobile App/Home',
        component: ComponentCreator('/alsys-admin-playbook/next/Conply Mobile App/Home', 'b65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Conply Mobile App/Onboarding',
        component: ComponentCreator('/alsys-admin-playbook/next/Conply Mobile App/Onboarding', '80d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Conply Mobile App/Profile',
        component: ComponentCreator('/alsys-admin-playbook/next/Conply Mobile App/Profile', 'e95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Conply Mobile App/Users',
        component: ComponentCreator('/alsys-admin-playbook/next/Conply Mobile App/Users', '677'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Using Conply/Creating an Account',
        component: ComponentCreator('/alsys-admin-playbook/next/Using Conply/Creating an Account', '435'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Using Conply/Dashboard',
        component: ComponentCreator('/alsys-admin-playbook/next/Using Conply/Dashboard', 'edc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Using Conply/FAQ',
        component: ComponentCreator('/alsys-admin-playbook/next/Using Conply/FAQ', 'd76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Using Conply/Get Support',
        component: ComponentCreator('/alsys-admin-playbook/next/Using Conply/Get Support', 'd9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Using Conply/Health',
        component: ComponentCreator('/alsys-admin-playbook/next/Using Conply/Health', '6a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Using Conply/Induction',
        component: ComponentCreator('/alsys-admin-playbook/next/Using Conply/Induction', '292'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Using Conply/Newsfeed',
        component: ComponentCreator('/alsys-admin-playbook/next/Using Conply/Newsfeed', 'af0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Using Conply/Organization/Setting up Account',
        component: ComponentCreator('/alsys-admin-playbook/next/Using Conply/Organization/Setting up Account', '413'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Using Conply/Time & Attendance',
        component: ComponentCreator('/alsys-admin-playbook/next/Using Conply/Time & Attendance', '39b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/next/Using Conply/User management',
        component: ComponentCreator('/alsys-admin-playbook/next/Using Conply/User management', '879'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/alsys-admin-playbook/',
    component: ComponentCreator('/alsys-admin-playbook/', '5d2'),
    routes: [
      {
        path: '/alsys-admin-playbook/',
        component: ComponentCreator('/alsys-admin-playbook/', 'e53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/category/conply-mobile-app',
        component: ComponentCreator('/alsys-admin-playbook/category/conply-mobile-app', 'cbc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/category/organization',
        component: ComponentCreator('/alsys-admin-playbook/category/organization', '67d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/category/using-conply',
        component: ComponentCreator('/alsys-admin-playbook/category/using-conply', 'f79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Conply Mobile App/Home',
        component: ComponentCreator('/alsys-admin-playbook/Conply Mobile App/Home', 'c89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Conply Mobile App/Onboarding',
        component: ComponentCreator('/alsys-admin-playbook/Conply Mobile App/Onboarding', '223'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Conply Mobile App/Profile',
        component: ComponentCreator('/alsys-admin-playbook/Conply Mobile App/Profile', '761'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Conply Mobile App/Users',
        component: ComponentCreator('/alsys-admin-playbook/Conply Mobile App/Users', '3ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Using Conply/Creating an Account',
        component: ComponentCreator('/alsys-admin-playbook/Using Conply/Creating an Account', '537'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Using Conply/Dashboard',
        component: ComponentCreator('/alsys-admin-playbook/Using Conply/Dashboard', '119'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Using Conply/FAQ',
        component: ComponentCreator('/alsys-admin-playbook/Using Conply/FAQ', 'e59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Using Conply/Get Support',
        component: ComponentCreator('/alsys-admin-playbook/Using Conply/Get Support', '486'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Using Conply/Health',
        component: ComponentCreator('/alsys-admin-playbook/Using Conply/Health', '662'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Using Conply/Induction',
        component: ComponentCreator('/alsys-admin-playbook/Using Conply/Induction', '0a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Using Conply/Newsfeed',
        component: ComponentCreator('/alsys-admin-playbook/Using Conply/Newsfeed', '9fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Using Conply/Organization/Setting up Account',
        component: ComponentCreator('/alsys-admin-playbook/Using Conply/Organization/Setting up Account', '1dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Using Conply/Time & Attendance',
        component: ComponentCreator('/alsys-admin-playbook/Using Conply/Time & Attendance', '8d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/alsys-admin-playbook/Using Conply/User management',
        component: ComponentCreator('/alsys-admin-playbook/Using Conply/User management', '3fb'),
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
