import React, { useEffect , useContext } from 'react'
import {getDocs, collection, doc} from "firebase/firestore"
import {db} from "../../config/firebase"
import { useState } from 'react'
import { SingleComment } from './SingleComment'
import "../../Styles/CommentLog.css"
import {UpdateContext} from "./CommentLog"




export const CommentSection = () => {
  const {update ,setUpdate} = useContext(UpdateContext)  //curly instead of square brackets

    const [commentsList, setCommentsList ] = useState(null)
    const commentsRef = collection(db, "comments")
 

    const getComments = async () => {
        const data =  await  getDocs(commentsRef)
       
    
       setCommentsList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    
    useEffect(()=>{ 
            getComments()   
    },[update])//use context veya reduxla create form submitine göre güncellenecek.
   
  return (
    <div className='comment-section'>{commentsList?.map((comment,index)=>(<SingleComment comment={comment} key={index} />))}</div>
  )
}
