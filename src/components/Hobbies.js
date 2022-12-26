import React from 'react'
import Aviation from "../images/aviation.png"
import Motorsports from "../images/motorsports.png"
import Orienteering from "../images/orienteering.png"
import "../Styles/Hobbies.css"

export const Hobbies = () => {
  return (
    <div className='hobbie-container'> 
        <div className='hobbie-wrapper heading'><h3>My hobbies</h3></div>
       <div className='hobbie-wrapper'>
        <img className='hobbie-image' src={Orienteering}  style={{width:"200px"}}  alt="Orienteering"/>
        <p>I used to do orienteering professionally when i was in highschool. I dont run professionally anymore but sometimes i take part in race organizations</p>
        </div>
        <div className='hobbie-wrapper' id='middle-wrapper'>
        <img className='hobbie-image' id='middle-image' src={Motorsports}  style={{width:"200px"}}  alt="Motorsports"/>
        <p> My main hobby.I had been around cars ever since i know myself. From wrenching on cars to racing them i love every part of it. Even though Turkey is not the best place for a car guy, i am planning to do more activities about cars.</p>
        </div>
        <div className='hobbie-wrapper'>
        <img className='hobbie-image' src={Aviation} style={{width:"200px"}} alt="aviation" />
        <p> I am following civil aviation events and news. I am mostly interested in experimental planes, bush planes are my favourite. I had a little experience before, i would like to fly bush planes if i have a chance in the future</p>
        </div>
   
     
    </div>
  )
}
