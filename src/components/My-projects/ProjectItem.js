import React from 'react'
import "../../Styles/MyProjects.css"

import { DiCss3, DiJavascript1,DiReact} from "react-icons/di"
import {AiFillHtml5,AiFillGithub} from "react-icons/ai"
import {FaReact} from "react-icons/fa"
import {TbWorld} from "react-icons/tb"


export const ProjectItem = ({name,image,ghLink,webLink,links,skills}) => {
  return (
    <div className='project-item'>
        <div className='project-image' style={{backgroundImage:`url(${image})`}}>
           {/* <img className='objectImage' src={`${image}`} /> */}
        </div>
        <h1>{name}</h1>
            {/* <a href={ghLink}>   github </a>
            <a href={webLink}>  weblink </a> */}
            
            <h3>links: <br/>
            <div className='link-container'>
            <div className='gh-container'>
             {(links.gh) ? <a className='project-link' href={ghLink} rel="noreferrer" target="_blank" ><AiFillGithub/></a> :""} 
             </div>
             <div className='web-container'>
             {(links.web) ?<a className='project-link' href={webLink} rel="noreferrer" target="_blank" > <TbWorld/>  </a>:""} 
             </div>
             </div>
             {/* blank yeni sekmede actırıyor._blank olunca her seferinde yeni sekmede acılıyor. rel"noreferer" siteyi refere göstermeden direk trafik olarak yönlendiriyor. güvenlikle alakalı. arayınca direk çıkıyor zaten */}
        </h3> 
            
           <h3>skills: {(skills.html) ? <AiFillHtml5/> :""}
           { (skills.css) ? <DiCss3/> :""}
           {  (skills.js) ? <DiJavascript1/> :"" }
             {(skills.react) ? <FaReact/> :"" }</h3> 
    </div>
  )
}
