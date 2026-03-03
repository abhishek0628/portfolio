// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Contacts from "./Pages/Contacts"
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import Courses from "./Pages/Courses"

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Courses" element={<Courses/>}/>

      </Routes>
    </Router>
  )
}
export default App
