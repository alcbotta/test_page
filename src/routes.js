import React from 'react';
import Loadable from 'react-loadable'
import DefaultLayout from './containers/DefaultLayout/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}


const Home = Loadable({
    loader: () => import('./views/Home/Home.jsx'),
    loading: Loading,
  });

  const About = Loadable({
    loader: () => import('./views/About/About.jsx'),
    loading: Loading,
  });

  const Cakes = Loadable({
    loader: () => import('./views/Cakes/Cakes.jsx'),
    loading: Loading,
  });

  const routes = [
    // { path: '/', exact: true, name: 'Home', component: DefaultLayout },
    // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/home', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/cakes', name: 'Cakes', component: Cakes },
  ];

  export default routes;
