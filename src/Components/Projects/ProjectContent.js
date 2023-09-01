import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './ProjectContent.css'
import project from '../../assets/img/projects.png'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import tinlo from '../../assets/proj/tinder.png'
import fashion from '../../assets/proj/sleeve.png'
import whey from '../../assets/proj/js.png'
import blog from '../../assets/proj/udemy.png'
import jstricks from '../../assets/proj/whey.png'
import painting from '../../assets/proj/blog.png'


const ProjectContent = () => {

    /* const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }; */

  return (
    <>
       <div style={{backgroundColor: 'rgb(33,33,33)',backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat' ,overflowX : 'hidden' }}>

       <div style={{textAlign: 'center'}}>
                 <img src={project} alt="" height={'100px'}  style={{margin: '40px'}}/>

          </div>   
        

    <Row xs={1} md={3} className="g-4">
   
        <Col >
          <Card style={{backgroundColor: 'rgb(33,33,33)', border: 'none'}}>
           <a href="https://lucky-kangaroo-146fbd.netlify.app/" target='blank'> <Card.Img className='work_image' variant="top" src={tinlo} /> </a>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title className='title_class'> <h3>Imaginary Tinder</h3></Card.Title>
              <br />
              <Card.Text className='text_class'><p>
              I've created a UI that's just like Tinder, and added swipe-able cards with smooth swiping animations. And guess what? I've used the latest Firebase version V9, to power it up and make it even better. Just click on the image and dive right in.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>



        <Col >
          <Card style={{backgroundColor: 'rgb(33,33,33)', border: 'none'}}>
           <a href="https://lovely-croquembouche-a5060a.netlify.app/" target='blank'><Card.Img className='work_image' variant="top" src={fashion} /> </a> 
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title className='title_class'> <h3>Sleeve fashion store</h3></Card.Title>
              <br />
              <Card.Text className='text_class' >
              <p>
              This is a street-wear fashion destination e-commerce website, I'm pretty much obsessed with sneakers personally so just had a thought of making my own dreamy collection store. I've used Redux toolkit to maintain and update data across multiple components here and user Authentication function for anyone who's a sneakerhead just like me.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={{backgroundColor: 'rgb(33,33,33)', border: 'none'}}>
            <a href="https://64bc044d5797ba02c276c247--bespoke-alpaca-a4a27d.netlify.app/" target='blank'> <Card.Img className='work_image' variant="top" src={whey} /> </a>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title className='title_class'> <h3>JS Tips & Tricks</h3></Card.Title>
              <br />
              <Card.Text className='text_class'>
              <p>
              I was preparing for my interviews and came across some very common, yet confusing concepts of JavaScript. Right then, I had this idea of creating a website where I can provide a lot of resources, notes, and some tricky concepts, all sprinkled with JavaScript and development-related memes. This is just a miniature version of what's coming up big soon! Do check it out here.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={{backgroundColor: 'rgb(33,33,33)', border: 'none'}}>
            <a href="https://cheery-fenglisu-9d52b1.netlify.app/" target='blank'> <Card.Img className='work_image' variant="top" src={jstricks} /> </a>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title className='title_class'> <h3>Protien Station</h3></Card.Title>
              <br />
              <Card.Text className='text_class'>
              <p>
              This is a Whey protein supplement e-commerce UI, and what's even cooler is that I built this entire thing using only JavaScript ES6, no fancy frameworks or libraries involved. I'm pretty sure many wouldn't get that if I weren't this honest. Make sure to check it out twice, from two different perspectives. Enjoy the experience!</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={{backgroundColor: 'rgb(33,33,33)', border: 'none'}}>
           <a href="https://delicate-clafoutis-57560f.netlify.app/" target='blank'> <Card.Img className='work_image' variant="top" src={blog} /> </a>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title className='title_class'> <h3>Udemy Clone</h3></Card.Title>
              <br />
              <Card.Text className='text_class'>
              <p>
              From the bottom of my heart, I strongly believe Udemy should come up with a platform exclusively for developers, so that it doesn't recommend me their <span><a href="https://www.udemy.com/course/crash-course-on-dealing-with-a-break-up-or-divorce/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>crash course on dealing with a break up</a></span>, almost every other day. On another note, check out my little Udemy clone. It's like a mini me version of the real deal! </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={{backgroundColor: 'rgb(33,33,33)', border: 'none'}}>
           <a href="https://64c3e4dcbfe6ca1edf86fbec--fastidious-daifuku-794f80.netlify.app/" target='blank'> <Card.Img className='work_image' variant="top" src={painting} /> </a>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title className='title_class'> <h3>CJ's Blogsite</h3></Card.Title>
              <br />
              <Card.Text className='text_class'><p>
              This is one of those projects I made for a little creativity and some practice, and it ended up turning out so beautifully! Check it out. It's also one of my very initial React JS projects. You can also visit my <span><a href="https://github.com/maybeshekhar" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Github</a></span> for some more exciting projects like the <span><a href="https://imaginative-gingersnap-5377e4.netlify.app/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Sidhu Moosewala Tribute audio player</a></span>, <span><a href="https://unrivaled-axolotl-078403.netlify.app/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Online Coding platform</a></span>, and <span><a href="https://mellow-strudel-698ec6.netlify.app/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Note-taking App</a></span> with a toggle theme function and many more.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <br /> <br />
        </Col>
     {/*  ))} */}
    </Row>

       </div>
    </>
  )
}

export default ProjectContent