// // // import { useState } from "react";
// // // import "../Style/Blog.css";

// // // function Courses() {
// // //   // Add your blog posts here
// // //   const [posts] = useState([
// // //     {
// // //       title: "DSA",
// // //       date: "March 2026",
// // //       content:
// // //         "I built a full-stack portfolio website using React, React Router, and CSS modules. In this post, I explain how I structured components, routing, and styling...",
// // //         link:"../Courses/DSA.html",
// // //     },
// // //     {
// // //       title: "OS",
// // //       date: "February 2026",
// // //       content:
// // //         "In this project, I implemented an SVM classifier to detect spam emails. I used Scikit-Learn and Python to train and test the model...",
// // //          link:"../Courses/OS.html",
// // //     },
// // //     {
// // //       title: "Compiler Design",
// // //       date: "January 2026",
// // //       content:
// // //         "I worked on designing a compiler frontend using Lex and Yacc. This post describes the lexer, parser, and semantic analysis steps...",
// // //          link:"../Courses/CD.html",
// // //     },
// // //   ]);

// // //   return (
// // //     <section className="blog" id="blog">
// // //       <h1>Courses</h1>
// // //       <div className="blog-container">
// // //         {posts.map((post, index) => (
// // //           <div className="blog-card" key={index}>
// // //             <h3>{post.title}</h3>
// // //             <span className="blog-date">{post.date}</span>
// // //             <p>{post.content}</p>
            
// // //             {/* Future: Link to full post page */}
            
// // //             <button className="read-more">Read More</button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default Courses;
// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "../Style/Blog.css";

// // function Courses() {

// //   const [posts] = useState([
// //     {
// //       title: "DSA",
// //       date: "March 2026",
// //       content: "Data Structures and Algorithms concepts, problems, and implementations.",
// //       link: "/courses/dsa",
// //     },
// //     {
// //       title: "OS",
// //       date: "February 2026",
// //       content: "Operating System concepts like scheduling, memory management and processes.",
// //       link: "/courses/os",
// //     },
// //     {
// //       title: "Compiler Design",
// //       date: "January 2026",
// //       content: "Compiler phases including lexical analysis, parsing and semantic analysis.",
// //       link: "/courses/compiler",
// //     },
// //   ]);

// //   return (
// //     <section className="blog" id="blog">
// //       <h1>Courses</h1>

// //       <div className="blog-container">
// //         {posts.map((post, index) => (
// //           <div className="blog-card" key={index}>
// //             <h3>{post.title}</h3>
// //             <span className="blog-date">{post.date}</span>
// //             <p>{post.content}</p>

// //             <Link to={post.link}>
// //               <button className="read-more">Read More</button>
// //             </Link>

// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // export default Courses;
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "../Style/Blog.css";

// function Courses() {

//   const [posts] = useState([
//     {
//       title: "DSA",
//       date: "March 2026",
//       content: "Data Structures and Algorithms concepts and implementations.",
//       link: "/Courses/DSA.html",
//     },
//     {
//       title: "OS",
//       date: "February 2026",
//       content: "Operating System concepts like scheduling and memory management.",
//       link: "/courses/os",
//     },
//     {
//       title: "Compiler Design",
//       date: "January 2026",
//       content: "Compiler phases including lexical analysis and parsing.",
//       link: "/courses/compiler",
//     },
//   ]);

//   return (
//     <section className="blog">
//       <h1>Courses</h1>

//       <div className="blog-container">
//         {posts.map((post, index) => (
//           <div className="blog-card" key={index}>
//             <h3>{post.title}</h3>
//             <span className="blog-date">{post.date}</span>
//             <p>{post.content}</p>

//             <Link to={post.link}>
//               <button className="read-more">Read More</button>
//             </Link>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Courses;
import { useState } from "react";
import "../Style/Blog.css";

function Courses() {
  const [posts] = useState([
    {
      title: "DSA",
      date: "March 2026",
      content:
        "Learn Data Structures and Algorithms including arrays, linked lists, trees, graphs, and problem-solving strategies.",
      link: "/Courses/DSA.html",
    },
    {
      title: "OS",
      date: "February 2026",
      content:
        "Operating Systems concepts including processes, scheduling, memory management, file systems, and synchronization.",
      link: "/Courses/OS.html",
    },
    {
      title: "Compiler Design",
      date: "January 2026",
      content:
        "Study compiler phases such as lexical analysis, parsing, semantic analysis, and intermediate code generation.",
      link: "/Courses/CD.html",
    },
     {
      title: "Computer Networks",
      date: "January 2026",
      content:
        "Study computer networks,ip addressing ,newtworking.",
      link: "/Courses/CN.html",
    },
     {
      title: "DBMS",
      date: "January 2026",
      content:
        "Study dbms.",
      link: "/Courses/DBMS.html",
    },
     {
      title: "OOPS",
      date: "January 2026",
      content:
        "Study oops.",
      link: "/Courses/OOPS.html",
    },
  ]);

  return (
    <section className="blog" id="blog">
      <h1>Courses</h1>

      <div className="blog-container">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3>{post.title}</h3>

            <span className="blog-date">{post.date}</span>

            <p>{post.content}</p>

            <a href={post.link}>
              <button className="read-more">Read More</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;