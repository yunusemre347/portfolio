
import {auth, ghProvider, provider} from "../../config/firebase"
import {signInWithPopup,signOut} from "firebase/auth"
import {useState} from "react"
import {useAuthState} from "react-firebase-hooks/auth"
import { async } from "@firebase/util"
import {CreateForm} from "./CreateForm"
import { CommentSection } from "./CommentSection"
import "../../Styles/CommentLog.css"

import {createContext} from "react"
export const UpdateContext = createContext({});



//in this page there will be comments. i will use firebase.
//lets start with the idea. You would be able to write comments with your google account
//or business card. but likes will only be given by google accounts. there should be a warning to 
//prevent like without account. everyone will see the comments. there will be a like and dislike button.
//seperate counters for both. 

//it will not be a seperate page. comments will be shown. log in screen or business card form will be hidden.
//they will slide with a click.

//comment with...
//business card.
  //your id:  name or nick...
  //your occupation:  ij dev. at xyz software
  //comment: your Comment.
//google account.

export const CommentLog = () => {
  //context state:
  const [update,setUpdate]=useState(false)

  // const [visitor,setVisitor] = useState(null);
  // const [profilePic, setProfilePic]=useState(null);
  //ilk basta state kullandım. sonra firebasenin kendi hookunu kullandım.
  //isimde calısıyordu ama fotoda sorun cıkıyordu

  const [user,loading,error] = useAuthState(auth);

 const signInWithGoogle = async () => {
 const result = await signInWithPopup(auth,provider)

  }
  // const signInWithGithub = async () => {
  //   const result = await signInWithPopup(auth,ghProvider)
  //    }
  const signUserOut = async () => {
    await signOut(auth);
    }
  return (
    <div className="comment-log">
      
      <UpdateContext.Provider value={{update , setUpdate}}>
      <CommentSection/>
      <div className="comment-right-container">
      <div className="user-container">
      <div className="user-card">
      {user? <button className="comment-buttons"  onClick={signUserOut} >log out</button> :<button className="comment-buttons" id="google-button" onClick={signInWithGoogle} >Sign in with Google</button> }
      <p >{user?.displayName}</p>
      {user ? <img alt="user picture" src={user?.photoURL || ""} /> : ""}
      </div>
      </div>
      <CreateForm/>
      </div>
      </UpdateContext.Provider>
    </div>
  )
}
