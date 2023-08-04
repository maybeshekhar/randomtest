import React from 'react'
import './MiniAbout.css'
import user from '../../assets/img/user.png'

const MiniAbout = () => {
  return (
    <>
        <div className='mini_about' id='statusquo' >
            <div style={{textAlign: 'center'}}>
                 <img src={user} alt="" height={'100px'}  style={{margin: '50px'}}/>
                 <p className='status_para' >
                 I am a frontend developer with a passion for developing and customizing websites, while <br /> simultaneously indulging in a coffee binge. I love the challenge of working in a competitive <br /> environment, constantly striving to learn new things and deliver quality work <br /> that benefits both sides of the table. <br /> <br /> I graduated with a Bachelor's in <span><a href="https://xkcd.com/138/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> Computer Science</a></span> from <span><a href="https://tat.ac.in/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Trident Academy of Technology</a></span> <br /> after completing my high school education in <span><a href="https://en.wikipedia.org/wiki/Jamshedpur" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Jamshedpur</a></span>. During my time at <span><a href="" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Trident</a></span> , I was <br /> a part of the <span><a href="https://tact.ac.in/index.php/activities/co-curricullar/#1464922719875-7a522c57-e066" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Literature and Debate Club</a>,</span> under Professor<span><a href="https://www.linkedin.com/in/sidharth-mohapatra-59027630/?originalSubdomain=in" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> <b>Sidharth S. Mohapatra</b></a></span> as our mentor.
</p>
            </div>
        </div>
    </>
  )
}

export default MiniAbout