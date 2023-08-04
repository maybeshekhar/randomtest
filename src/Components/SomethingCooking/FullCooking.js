import React from 'react'
import Nnavbar from '../Navbar/Navbar'
import CookingHero from './CookingHero'
import Footer from '../Footer/Footer'
import Cooking from './Cooking'

const FullCooking = () => {
  return (
    <>
        <div >
            <Nnavbar />
            <CookingHero />
            <Cooking />
            <Footer />
        </div>
    </>
  )
}

export default FullCooking