import React from 'react'
import "../Styles/AboutMe.css"
import headshot from "../images/headshot.png" //dont use curly unnecessary
import roadmap from "../images/frontend-yol-haritam.png"

export const AboutMe = () => {
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
      <img className='headshot' src={headshot} alt={"my headshot"}  />
      
    </div>

    <div className='roadmap-container'> 
    <input type="checkbox" id="roadmap-check"/> 
    <div className='roadmap-clip'>
      <img className='roadmap-img' src={roadmap}></img> 
       <label className='show-roadmap-top' for="roadmap-check" >Click to see the roadmap</label> 
       <label className='hide-roadmap-top' for="roadmap-check" >Click to hide the roadmap</label> 
       </div>
        </div>
   
    </div>
  )
}
