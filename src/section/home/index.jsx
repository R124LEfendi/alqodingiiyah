import React from 'react';
//PAGES
import Blog from './Blog';
import Contact from './Contact';
import Hero from './Hero';
import HomeKitchen from './HomeKitchen';
import Intro from './Intro';

function HomeSection() {
  return (
    <React.Fragment>
      <Hero />
      <HomeKitchen />
      <Blog />
      <Contact />
      <Intro />
    </React.Fragment>
  );
}

export default HomeSection;
