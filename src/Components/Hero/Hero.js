import React from "react";
import me from '../../assets/img/photo.png';
import "./Hero.css";
import { GrMedium } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

const Hero = () => {
  return (
    <>
      <div className='hero' style={{ textAlign: 'center' }} id='home'>
        <section>
          <div className="main_class">
            <img className="photo_class" src={me} alt="yoyo" />
            <h1 className="name_class" style={{ color: 'whitesmoke', textShadow: '2px 2px black' }}><b>Chandrashekhar J.</b></h1>
        
            <h4 className="details_class">Hi! I'm Chandrashekhar Jenamoni. People call me Shekhar. <br /> I read, I write, I code, and I tell bad jokes that only I laugh at.</h4>
            
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero;


 







      
    
