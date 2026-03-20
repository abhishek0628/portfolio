
// // import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// // import Navbar from "./Components/Navbar"
// // import Home from "./Pages/Home"
// // import Projects from "./Pages/Projects"
// // import Contacts from "./Pages/Contacts"
// // import About from "./Pages/About"
// // import Blog from "./Pages/Blog"
// // import Courses from "./Pages/Courses"

// // function App(){
// //   return(
// //     <Router>
// //       <Navbar/>
// //       <Routes>
// //         <Route path="/" element={<Home/>}/>
// //         <Route path="/projects" element={<Projects/>}/>
// //         <Route path="/contacts" element={<Contacts/>}/>
// //         <Route path="/About" element={<About/>}/>
// //         <Route path="/Blog" element={<Blog/>}/>
// //         <Route path="/Courses" element={<Courses/>}/>

// //       </Routes>
// //     </Router>
// //   )
// // }
// // export default App
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Courses from "./Pages/Courses";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home";
// import Projects from "./Pages/Projects";
// import Contacts from "./Pages/Contacts";
// import About from "./Pages/About";
// import Blog from "./Pages/Blog";
// import Courses from "./Pages/Courses";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/courses" element={<Courses />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home";
// import Projects from "./Pages/Projects";
// import Contacts from "./Pages/Contacts";
// import About from "./Pages/About";
// import Blog from "./Pages/Blog";
// import Courses from "./Pages/Courses";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/courses" element={<Courses />} />
//       </Routes>
//     </>
//   );
// }

// export default App;