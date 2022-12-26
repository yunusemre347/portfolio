import React from 'react'
import { ProjectList } from './ProjectList'
import { ProjectItem } from './ProjectItem'
import "../../Styles/MyProjects.css"

export const MyProjects = () => {
  return (
    <div className="myprojects-box">
      <div className='introduction-to-projects'><p >These are practices that i have done. There are projects that i have done and there are practices that i have seen on internet and made a copy to myself for education purposes. I made some changes and fixes in some of the code i have copied from internet but nonetheless credits for creators are attached to the projects. If you have advice for me and how should i do them in the future please make a comment in the comment section below or email me: yunusemreyilmaz347@gmail.com</p></div>
      
      <div className='projects-container'>
      {ProjectList.map((props,index)=>(<ProjectItem key={index} name={props.name} image={props.image} ghLink={props.ghLink} webLink={props.webLink} links={props.links} skills={props.skills} />
    //  bir ara id leri projectliste yazarız
    
     ))}
      </div>
      
      </div>
  )
}
