import React, { useContext, useEffect, useRef, useState } from 'react'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import "../../Styles/CommentLog.css"
import {addDoc,collection} from "firebase/firestore"
import {db,auth} from "../../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import {UpdateContext} from "./CommentLog"

export const CreateForm = () => {
  const {update ,setUpdate} = useContext(UpdateContext)  //curly instead of square brackets
 

  const [textHeight,setTextHeight]=useState(50)
  const textareaRef = useRef(null)
  const heightRef = useRef(null)

  const [user] = useAuthState(auth)
  const schema = yup.object().shape({
    description: yup.string().required("you must add a comment")
  });

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  })

  const commentsRef = collection(db,"comments")

  const onCreateComment= async (data)=>{
   await addDoc(commentsRef,{
    // ...data  ---bu şekilde  de yazılabilir
    //user uid için if user exists falan. if doesnt exists rng businessid
    description: data.description,
    username: user.displayName,
    userId: user.uid,
   })
  
  }
 
  // use state
  // height:{valueinput} on something = {e=> setvalueinput(value)}

//  heightRef.current

const handleChange =(event)=>{


   const scHeight = event.target.scrollHeight;
   event.target.row=1;

   console.log(event.target.row)
    console.log(scHeight)
 
    // console.log(event.target.value)

   setTextHeight(scHeight-10)
}
const notLoggedInAlert=()=>{
   if(!user)
{alert("In order to leave a comment please log in via google")}
}
  return (
    <div  className='comment-box'>
      {/* burada business card da olacak. zor bişey yok aynısını yapıp name ve business eklenecek. if statement ile switch edecez formlar arasında */}
      {/* google comment create gözükmesi için giriş yapmak gerekecek. */}
      <form  onSubmit={handleSubmit(onCreateComment)} >
      <textarea onClick={notLoggedInAlert} onKeyDown={handleChange} style={{height:`${textHeight}px`}}  placeholder="Leave your comment here! Please let me know any opinion of yours about me or this website."{...register("description")  }></textarea>
      <input className="comment-buttons"  onClick={()=> setUpdate(!update)} type="submit" value={"submit"} ></input>
      <p style={{fontSize:"13px", color : "red"}}>{errors.description?.message}</p>
      </form>
    </div>
  )
}
