import React, {useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero'
import MiniAbout from '../Components/MiniAbout/MiniAbout'

const HomePage = () => {

    const [showNav, setShowNav ] = useState(false)

  return (
    <>
        {/* <header>
        <GiHamburgerMenu style={{color: 'white'}} onClick={() => setShowNav (!showNav)} />
       </header>
        <Navbar show={showNav} /> */}
        <Hero />
        
        
        
    </>
  )
}

export default HomePage