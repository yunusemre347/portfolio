import React, { useEffect,useState } from 'react'
import "../../Styles/CommentLog.css"
import {db,auth } from "../../config/firebase"
import {addDoc,deleteDoc,getDocs,collection,query,where, doc} from "firebase/firestore" //query kullanarak tek bir dosyaya erisebiliriz
import { useAuthState } from 'react-firebase-hooks/auth'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbsDown,faThumbsUp} from "@fortawesome/free-solid-svg-icons"
import {faThumbsUp as faThumbsUpRegular,faThumbsDown as faThumbsDownRegular} from "@fortawesome/free-regular-svg-icons"

import { } from "@fortawesome/fontawesome-svg-core"

export const SingleComment = ({comment}) => {
const [user] = useAuthState(auth);
const [likes,setLikes] = useState([])
const [dislikes,setDislikes] = useState([])

  const likesRef = collection(db,"likes")
  const likesDoc = query(likesRef, where("commentId","==",comment.id))
  const getLikes = async ()=>{
  const data = await getDocs(likesDoc)
  setLikes(data.docs.map((doc)=>({userId: doc.data().userId })))
  }
  const hasUserLiked = likes.find((like) => like.userId === user?.uid);
  useEffect(()=>{
    getLikes()
  },[])
  
  const addLike= async ()=>{
    try {
   await addDoc(likesRef,{
  userId: user?.uid ,
  commentId: comment.id
   })
  if(user){
     //  getLikes()
    setLikes((prev)=>prev ? [...prev, {userId: user?.uid}] : [{userId: user?.uid}]) //typescript burada hata veriyor ama js vermiyor. arrayin boş oldugu durum için o yüzden if li yazdık
  }
  } catch (err) {
  console.log(err,"try catch")
  }
  };

  const removeLike= async ()=>{
    try {
      const likeToDeleteQuery = query (likesRef, where("commentId","==",comment.id), where("userId","==",user?.uid));
      const likeToDeleteData = await getDocs(likeToDeleteQuery)
      const likeToDelete = doc(db,"likes",likeToDeleteData.docs[0].id)
   await deleteDoc(likeToDelete)
  if(user){
     //  getLikes()
    setLikes((prev)=> prev.filter((like)=>like.id===likeToDeleteData.docs[0].id))
  }
  } catch (err) {
  console.log(err,"try catch")
  }
  };
////////////////////////////////////////
const dislikesRef = collection(db,"dislikes")
const dislikesDoc = query(dislikesRef, where("commentId","==",comment.id))

const getDislikes = async ()=>{
const data = await getDocs(dislikesDoc)
setDislikes(data.docs.map((doc)=>({userId: doc.data().userId })))
}
const hasUserDisliked = dislikes.find((dislike) => dislike.userId === user?.uid);
useEffect(()=>{
  getDislikes()
},[])

const addDislike= async ()=>{
  try {
 await addDoc(dislikesRef,{
userId: user?.uid ,
commentId: comment.id
 })
if(user){
   //  getLikes()
  setDislikes((prev)=>prev ? [...prev, {userId: user?.uid}] : [{userId: user?.uid}]) //typescript burada hata veriyor ama js vermiyor. arrayin boş oldugu durum için o yüzden if li yazdık
}
} catch (err) {
console.log(err,"try catch1")
}
};

const removeDislike= async ()=>{
  try {
    const dislikeToDeleteQuery = query (dislikesRef, where("commentId","==",comment.id), where("userId","==",user?.uid));
    const dislikeToDeleteData = await getDocs(dislikeToDeleteQuery)
    const dislikeToDelete = doc(db,"dislikes",dislikeToDeleteData.docs[0].id)
 await deleteDoc(dislikeToDelete)
if(user){
   //  getLikes()
  setDislikes((prev)=> prev.filter((dislike)=>dislike.id===dislikeToDeleteData.docs[0].id))
}
} catch (err) {
console.log(err,"try catch2")
}
};
const likeAction = ()=>{
  if (hasUserDisliked )
  { removeDislike()};
{   hasUserLiked ? removeLike() :addLike()}
}
const dislikeAction = ()=>{
  if (hasUserLiked ){ removeLike()}
    { {hasUserDisliked ? removeDislike() : addDislike()} }
}
const likedFullIcon=<FontAwesomeIcon icon={faThumbsUp} style={{fontSize:"1.2rem"}} />
const likedEmptyIcon=<FontAwesomeIcon icon={faThumbsUpRegular} style={{fontSize:"1.2rem"}}/>
const dislikedFullIcon=<FontAwesomeIcon icon={faThumbsDown} style={{fontSize:"1.2rem"}}/>
const dislikedEmptyIcon=<FontAwesomeIcon icon={faThumbsDownRegular} style={{fontSize:"1.2rem"}}/>

  return (
    <div className='single-comment-box'>
        <h4>{comment.username}</h4>
        <p>{comment.description}</p>
        <div className='button-box'>
        <span className='like-button' onClick={likeAction}>{hasUserLiked ? likedFullIcon : likedEmptyIcon} {likes?.length}</span> 
        <span className='dislike-button' onClick={ dislikeAction}>{hasUserDisliked ? dislikedFullIcon: dislikedEmptyIcon} {dislikes?.length} </span>
        </div>
        <div className='arrow-up' ></div>
         {/* bu dislike butonu olacak */}
        {/* <p className='likes-count'> Likes : {likes?.length}</p>
        <p  className='likes-count'> Dislikes : {dislikes?.length} </p> */}
    </div>
  )
}
