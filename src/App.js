import { useState, useEffect } from 'react';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero/Hero';
import  Navbar  from './Components/Navbar/Navbar';

import MiniAbout from './Components/MiniAbout/MiniAbout';
import HomePage from './pages/HomePage';
import WorkHero from './Components/Worked/WorkHero';
import Worked from './Components/Worked/Worked';
import SkillHero from './Components/Skill/SkillHero';
import SkillDesc from './Components/Skill/SkillDesc';
import ProjectHero from './Components/Projects/ProjectHero';
import AboutMeHero from './Components/AboutMe/AboutMeHero';
import ProjectContent from './Components/Projects/ProjectContent';
import AboutMe from './Components/AboutMe/AboutMe';
import ResumeHero from './Components/Resume/ResumeHero';
import ResumeMain from './Components/Resume/ResumeMain';
import Footer from './Components/Footer/Footer';
import Nnavbar from './Components/Navbar/Navbar';
import CookingHero from './Components/SomethingCooking/CookingHero';
import Cooking from './Components/SomethingCooking/Cooking';
import FullCooking from './Components/SomethingCooking/FullCooking';

function App() {
   
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])

  return (

    <>
    <Nnavbar />
    <HomePage />
    <MiniAbout />
    <WorkHero />
    <Worked/>
    <SkillHero />
    <SkillDesc />
    <br />
    <ProjectHero />
    <ProjectContent />
   
    <AboutMeHero />
    <AboutMe />
    <ResumeHero />
    <ResumeMain/>
    <Footer/>
    
    

    </>
  );
}

export default App;
