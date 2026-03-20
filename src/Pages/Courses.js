
import { useState } from "react";
import "../Style/Blog.css";

function Courses() {
  const [posts] = useState([
    {
      title: "DSA",
      date: "March 2026",
      content:
        "Learn Data Structures and Algorithms including arrays, linked lists, trees, graphs, and problem-solving strategies.",
      link: "Courses/DSA.html",
    },
    {
      title: "OS",
      date: "February 2026",
      content:
        "Operating Systems concepts including processes, scheduling, memory management, file systems, and synchronization.",
      link: "Courses/OS.html",
    },
    {
      title: "Compiler Design",
      date: "January 2026",
      content:
        "Study compiler phases such as lexical analysis, parsing, semantic analysis, and intermediate code generation.",
      link: "Courses/CD.html",
    },
     {
      title: "Computer Networks",
      date: "January 2026",
      content:
        "Study computer networks,ip addressing ,newtworking.",
      link: "Courses/CN.html",
    },
     {
      title: "DBMS",
      date: "January 2026",
      content:
        "Study dbms.",
      link: "Courses/DBMS.html",
    },
     {
      title: "OOPS",
      date: "January 2026",
      content:
        "Study oops.",
      link: "Courses/OOPS.html",
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
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "../Style/Blog.css";

// function Courses() {
//   const [posts] = useState([
//     {
//       title: "DSA",
//       date: "March 2026",
//       content:
//         "Learn Data Structures and Algorithms including arrays, linked lists, trees, graphs, and problem-solving strategies.",
//       link: "/courses/dsa",
//     },
//     {
//       title: "OS",
//       date: "February 2026",
//       content:
//         "Operating Systems concepts including processes, scheduling, memory management, file systems, and synchronization.",
//       link: "/courses/os",
//     },
//     {
//       title: "Compiler Design",
//       date: "January 2026",
//       content:
//         "Study compiler phases such as lexical analysis, parsing, semantic analysis, and intermediate code generation.",
//       link: "/courses/compiler-design",
//     },
//     {
//       title: "Computer Networks",
//       date: "January 2026",
//       content: "Study computer networks, IP addressing, and networking concepts.",
//       link: "/courses/networks",
//     },
//     {
//       title: "DBMS",
//       date: "January 2026",
//       content: "Study DBMS concepts.",
//       link: "/courses/dbms",
//     },
//     {
//       title: "OOPS",
//       date: "January 2026",
//       content: "Study Object-Oriented Programming concepts.",
//       link: "/courses/oops",
//     },
//   ]);

//   return (
//     <section className="blog" id="blog">
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