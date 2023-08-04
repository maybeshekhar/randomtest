import React from 'react'
import './Worked.css'
import group from '../../assets/img/group.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ajatus from '../../assets/proj/ajatus.png'
import vyncx from '../../assets/proj/vyncx.png'
import asiana from '../../assets/proj/asiana.png'

const Worked = () => {
  return (
    <>

          <div className='workedback'>
          <div style={{textAlign: 'center'}}>
                 <img src={group} alt="" height={'100px'}  style={{margin: '50px'}}/>
          </div>    

          {/* <div className='ajatus' style={{textAlign: 'center'}}>
             <img style={{borderRadius: '50%'}} src="https://media.licdn.com/dms/image/C510BAQFoU3-R-5C1Vw/company-logo_200_200/0/1564633358835?e=2147483647&v=beta&t=PiiBqIC9NbkSU4rj7Tb8pl6YGAF3m-e4h0d-aGSEuyc" alt="" />
          </div>
          <br />

          <div style={{textAlign: 'center'}}>
          <h1 style={{ color: 'whitesmoke'}}>Ajatus Software</h1>
          <br />
            <p style={{color:'whitesmoke'}}>July - Sept '22</p>
             <br />
            <p style={{color: 'whitesmoke' , fontSize: '25px' , margin: '5px 70px'}}>
            During my three-month internship as a React JS      developer, I had the
            opportunity to work on two exciting projects. First, I built the user
            dashboard for a prominent air purifier company's website, enhancing
            the user experience and ensuring seamless functionality. Additionally,
            I actively contributed my skills to a cross-platform cloud kitchen food
            application, assisting in its development and delivering impactful
            solutions. Overall, my internship provided valuable hands-on experience</p>
          </div>

            <br /> <br /> <br />

          <div className='ajatus' style={{textAlign: 'center'}}>
             <img style={{borderRadius: '50%'}} src="https://play-lh.googleusercontent.com/6hejIJlSXD39pRTdXkCHr0_TCzuRrjK421xl1D6LZmygcuOrg50RXhiNONTifGjLZQ=w240-h480-rw" alt="" />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
          <h1 style={{ color: 'whitesmoke'}}>Vyncx Corporation</h1>
          <br />
            <p style={{color:'whitesmoke'}}>June - Sept '20</p>
             <br />
            <p style={{color: 'whitesmoke' , fontSize: '25px' , margin: '5px 70px'}}>
            During my four-month internship as a Market Research Analyst, I had
the opportunity to work with a GPS tracking system company. My
main focus was on an internal product designed to streamline the
client review process during client onboarding. I conducted extensive
market research to gather insights and identify key pain points in the
existing review process. This allowed me to enhance my analytical
skills and gain valuable knowledge in improving internal processes for
client satisfaction.
</p>
          </div> */}

          <CardGroup className='card_group'>
      <Card style={{border: 'none'}}>
        
        <Card.Body style={{backgroundColor: 'rgb(33,33,33)'}}>
          <Card.Title ><a href="https://asianatimes.com/"> <img className='work_image_asiana' src={asiana} alt="" /></a> </Card.Title> 
          <h1 style={{ color: 'whitesmoke'}}>Asiana Times</h1>
          
            <p style={{color:'whitesmoke'}}>July'23 - Present</p>
             <br />
             <Card.Text className='card_text'> 
            <p >
            As a lectiophile and someone who keeps myself informed about <br /> world  events, I am grateful to be a part of <span><a href="https://asianatimes.com/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Asiana Times</b></a></span> as a Web Story Intern,  <br /> where I work under <span><a href="https://www.linkedin.com/in/nirmiti-raj-6aa33924a/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> <b>Nirmiti Raj</b></a>.</span>  Despite it being outside my professional career,<br /> this opportunity allows me to indulge in my hobby of crafting the art of news <br /> writing  in form of stories. You can read the web stories <span><a href="https://asianatimes.com/web-stories" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>here</a>.</span> </p>
             </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>


          <br />

          <CardGroup className='card_group'>
      <Card style={{border: 'none'}}>
        
        <Card.Body style={{backgroundColor: 'rgb(33,33,33)'}}>
          <Card.Title ><a href="https://www.ajatus.in/"> <img className='work_image_ajatus' src={ajatus} alt="" /></a> </Card.Title> 
          <h1 style={{ color: 'whitesmoke'}}>Ajatus Software</h1>
          
            <p style={{color:'whitesmoke'}}>July - Sept '22</p>
             <br />
             <Card.Text className='card_text'> 
            <p >
            I interned as a React JS developer, where I built the user dashboard for <br /> a prominent  air purifier company's website and ensuring seamless functionality,<br /> being mentored by the incredible <span><a href="https://www.linkedin.com/in/girishprsahu/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> <b>Girish Sahu</b></a>.</span> Additionally, I contributed my skills <br />to a cross-platform cloud kitchen food application, assisting in its UI development <br /> and functionality, where I worked under <span><a href="https://www.linkedin.com/in/satya-prakash-dash-5319831a1/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> <b>Satya Dash</b></a>.</span></p>
             </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
 
       <br />

    <CardGroup style={{textAlign: 'center'}}>
      
      <Card style={{border: 'none'}}>
        
        <Card.Body style={{backgroundColor: 'rgb(33,33,33)'}}>
          <Card.Title> <a href="https://vyncx.in/"> <img className='work_image_vyncx' src={vyncx} alt="" /> </a> </Card.Title>
          <h1 style={{ color: 'whitesmoke'}}>Vyncx Corporation</h1>
          
            <p style={{color:'whitesmoke'}}>June - Sept '20</p>
             <br />
             <Card.Text  className='card_text' > 
            <p>
             I worked on the internal product  designed to streamline the client review process <br /> during client onboarding.  I conducted extensive market research to gather insights <br /> and identify  key pain points in the existing review process.</p>
             </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
      </div>
    </>
  )
}

export default Worked;