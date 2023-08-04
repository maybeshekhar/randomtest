import React from 'react'
import './SkillDesc.css'
import skill from '../../assets/img/skill.png'
import Carousel from 'react-bootstrap/Carousel';
import one from '../../assets/img/1.png'
import two from '../../assets/img/2.png'
import three from '../../assets/img/3.png'
import four from '../../assets/img/4.png'

const SkillDesc = () => {

   

  return (
    <>
         <div className='skillback'>
          <div style={{textAlign: 'center'}}>
                 <img src={skill} alt="" height={'130px'}  style={{margin: '50px'}}/>
          </div> 
            
            <div className='skill_para' style={{textAlign: 'center'}}>
                <p>As a self-learner in frontend development, I possess a range of skills  that enable me to <br /> create visually appealing  and responsive user interfaces for websites. I started the journey with <br /> HTML, CSS and JavaScript followed by ES6 functions. After that, I delved into Node JS and React JS  <br />and have completed numerous projects using this stack. Some of the projects I've mentioned <br /> in the <span><a href="#projects" style={{color: '#CC0088', textDecoration: 'none'}} >section</a></span> below this one, and for others, you can check <span><a href="https://github.com/maybeshekhar" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>here</a>.</span> Additionally, I have <br /> explored and acquired good knowledge on Angular, TypeScript, Next JS and API creation.</p>
            </div>
          </div> 
      
         
       


       <Carousel interval={500} touch={false} className='carousal_style'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={two}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={three}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={four}
          alt="First slide"
        />
      </Carousel.Item>
    
      
    </Carousel>

    </>
  )
}

export default SkillDesc;



