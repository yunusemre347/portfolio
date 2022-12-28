import React from 'react'
import "../Styles/AboutMe.css"
import headshot from "../images/headshot.png" //dont use curly unnecessary
import roadmap from "../images/frontend-yol-haritam.png"
import thumbsUpGreen from "../images/thumbs-up-green.png"


export const AboutMe = () => {
const handleClick = () => {
  console.log("why are you clicking on me you silly!")
}
  
  return (
    <div>
         
    <div className='about-me-container'>
      <div className='skill-container'>
        <h1 className='title-text'>My front end skills</h1>
      <div className='skill-box'>
        <span className='skill-title'>HTML</span>
        <div className='skill-bar'>
        <span className='skill-per html'>
           <span className='tooltip'>50%</span>
        </span>
        </div>
        
      </div>
      
      <div className='skill-box'>
        <span className='skill-title'>CSS</span>
        <div className='skill-bar'>
        <span className='skill-per css'>
           <span className='tooltip'>50%</span>
        </span>
      </div>
      </div>

      <div className='skill-box'>
        <span className='skill-title'>JavaScript</span>
        <div className='skill-bar'>
        <span className='skill-per javascript'>
           <span className='tooltip'>30%</span>
        </span>
      </div>
      </div>

      <div className='skill-box'>
        <span className='skill-title'>React</span>
        <div className='skill-bar'>
        <span className='skill-per react'>
           <span className='tooltip'>25%</span>
        </span>
      </div>
      </div>
      
      </div>
      <img className='headshot' src={headshot} alt={"my headshot"} onClick={handleClick}/>
      
    </div>
    <p className='roadmap-description'>This is a roadmap made by the roadmap.sh . I have marked my progress with thumbs up "<img className='thumbs-up-green' src={thumbsUpGreen} alt="thumbs up green"/>" .</p>
    <div  className='roadmap-container'> 
    <input type="checkbox" id="roadmap-check"/> 
    <div className='roadmap-clip'>
      <img className='roadmap-img' src={roadmap}></img> 
       <label className='show-roadmap-top' htmlFor="roadmap-check" >Click to see the roadmap</label> 
       <label className='hide-roadmap-top' htmlFor="roadmap-check" >Click to hide the roadmap</label> 
       </div>
        </div>
   
    </div>
  )
}
