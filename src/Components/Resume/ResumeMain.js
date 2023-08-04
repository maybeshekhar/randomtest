import React from 'react'
import './ResumeMain.css'
import eye from '../../assets/img/eye.png'
import resume from '../../assets/cv/cv0001.pdf'
import { ImEye } from 'react-icons/im'

const ResumeMain = () => {
  return (
    <>
    <div className='resume_main'>

        <div style={{textAlign: 'center'}}>
            <button className='resume_button' style={{border: 'none', backgroundColor:'rgb(33,33,33)'}} > 
            <a href={resume} download="Resume"> 
            <ImEye className='eyecon' /> 
            </a>
            </button>
        </div>
    </div>
    </>
  )
}

export default ResumeMain