import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import coffee from '../../assets/img/coffee.png'
import graph from '../../assets/img/graph.png'
import hammer from '../../assets/img/hammer.png'
import music from '../../assets/img/music.png'
import thumbsup from '../../assets/img/thumbsup.png'
import pencil from '../../assets/img/pencil.png'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
    <br />
        <CardGroup className='cardgroup_class' >
      <Card style={{textAlign: 'center', border: 'none'}}>
      {/*   <Card.Img variant="top" src={hammer} style={{width: '10px'}}/> */}
        <Card.Body>
          <Card.Title> <img src={hammer} style={{width: '50px'}} alt="" /></Card.Title>
          <br />
          <Card.Text className='cardtext_class'>
          I enjoy critically reasoning and debating controversial topics. Topics that particularly interest me are Mental health & fitness, Politics, Technology, Cars and Economics. I will compile a cool list of my top picks for books, videos, articles, and internet news sources, and I'm gonna call it <span><a href="" style={{color: '#CC0088', textDecoration: 'none'}}> <b>Something's cooking</b></a></span>.
          </Card.Text>
        </Card.Body>
      </Card>
             <br />
      <Card style={{textAlign: 'center', border: 'none'}}>
       <Card.Body>
          <Card.Title><img src={graph} style={{width: '50px'}} alt="" /></Card.Title>
          <br />
          <Card.Text className='cardtext_class'>
          My <span><a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Myers-Briggs Type Indicator(MBTI)</a></span>  is <span><a href="https://www.16personalities.com/infj-personality" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>INFJ</a></span> [Introverted, Intuitive, Feeling, Judging]. The favorite people I supposedly share my personality type with are <span><a href="https://en.wikipedia.org/wiki/Kobe_Bryant" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> <b>Kobe Bryant</b></a></span>, <span><a href="https://en.wikipedia.org/wiki/Plato" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> <b>Plato</b></a></span> , <span><a href="https://en.wikipedia.org/wiki/Al_Pacino" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> <b>Al Pacino</b></a></span> and <span><a href="https://en.wikipedia.org/wiki/Vincent_van_Gogh" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> <b>Vincent van Gogh</b></a></span> (also <span><a href="https://en.wikipedia.org/wiki/Adolf_Hitler" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> <b>Adolf Hitler</b></a></span> ). You too should take the test <span><a href="https://www.16personalities.com/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>here</a></span>.
          </Card.Text>
        </Card.Body>
      </Card>

       <br />

       <Card style={{textAlign: 'center', border: 'none'}}>
       <Card.Body>
          <Card.Title><img src={coffee} style={{width: '50px'}} alt="" /></Card.Title>
          <br />
          <Card.Text className='cardtext_class'>
          I once lived off <span><a href="https://www.nescafe.com/in/coffee-types/what-is-an-americano" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>coffee</a></span>, <span><a href="https://en.wikipedia.org/wiki/Peanut_butter_and_jelly_sandwich" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Pbj sandwich</a></span> and <span><a href="https://en.wikipedia.org/wiki/Monster_Energy" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>monster energy</a></span>, often in that order. Now it's mostly <span><a href="https://en.wikipedia.org/wiki/Masala_chai" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>chai</a></span>, <span><a href="https://www.nescafe.com/in/coffee-types/what-is-an-americano" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>coffee</a></span> and <span><a href="https://en.wikipedia.org/wiki/Shawarma" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>shawarma.</a></span> I am a staunch believer in <span><a href="https://en.wikipedia.org/wiki/Intermittent_fasting" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>intermittent fasting</a></span> and have been religiously following it for the past five years.
          </Card.Text>
        </Card.Body>
      </Card>
      
    </CardGroup>


        
    </>
  )
}

export default AboutMe

/* personality type - avocate  */