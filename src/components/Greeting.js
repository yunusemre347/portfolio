import React from 'react'
import headshot from "../images/headshot.png" //dont use curly unnecessary
import "../Styles/Greeting.css"

import { DiCss3, DiJavascript1,DiReact} from "react-icons/di"
import {AiFillHtml5,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {TbWorld} from "react-icons/tb"

export const Greeting = () => {
  return (
    <div className='greeting-box' >
      <div className='greeting-header'>
      <a href='https://www.linkedin.com/in/yunus-emre-y%C4%B1lmaz-a7136b242/'> <AiFillLinkedin/></a>
      <a href='https://github.com/yunusemre347/'> <AiFillGithub/></a>
   
      </div>
      <div className='greeting-container'>
        <h2>HELLO</h2>
        <h3>I am Yunus Emre</h3>
        <p>This is my personal portfolio. I am a front end developer.</p>
        </div>
    </div>
  )
}
