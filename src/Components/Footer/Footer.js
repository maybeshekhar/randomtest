import React from 'react'
import './Footer.css'
import { GrMedium } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';


const Footer = () => {
  return (
    <>
    <div className='footer_main'>

      <div className='footer_class' style={{textAlign: 'center'}}>

        <hr style={{color: 'gainsboro'}}/>
        <br />
          <h5 style={{color: 'gainsboro'}}>Copyright © Chandrashekhar Jenamoni 2023</h5>

          <div className="social_iconss">
              <a href="https://www.linkedin.com/in/chandrashekhar-j-1915891a7/" target="_blank"><GrLinkedinOption /></a>
              <a href="https://medium.com/@shekharmaybe" target="_blank"><GrMedium /></a>
              <a href="https://github.com/maybeshekhar" target="_blank"><BsGithub /></a>
              <a href="mailto:shekharmaybe.dev@gmail.com"><GrMail /></a>
            </div>
      </div>
    </div>
    </>
  )
}

export default Footer