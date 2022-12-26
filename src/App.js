
import "./Styles/App.css";
import {Greeting} from "./components/Greeting"
import {MyProjects} from "./components/My-projects/MyProjects"
import {AboutMe} from "./components/AboutMe"
import { Hobbies } from './components/Hobbies';
import { CommentLog } from './components/Comment-log/CommentLog';

//npm i @react-spring/parallax

//useref: grab a component

function App() {
  return (
    <div className="App">
      <Greeting/>
      <div className="general-container">
      <AboutMe/>
      <MyProjects/>
      <CommentLog/>
      <Hobbies/>
      </div>
    </div>
  );
}

export default App;
