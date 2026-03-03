import { useState } from "react";
import "../Style/Blog.css";

function Blog() {
  // Add your blog posts here
  const [posts] = useState([
    {
      title: "My First React Project",
      date: "March 2026",
      content:
        "I built a full-stack portfolio website using React, React Router, and CSS modules. In this post, I explain how I structured components, routing, and styling...",
    },
    {
      title: "Exploring Machine Learning",
      date: "February 2026",
      content:
        "In this project, I implemented an SVM classifier to detect spam emails. I used Scikit-Learn and Python to train and test the model...",
    },
    {
      title: "Compiler Frontend Design",
      date: "January 2026",
      content:
        "I worked on designing a compiler frontend using Lex and Yacc. This post describes the lexer, parser, and semantic analysis steps...",
    },
  ]);

  return (
    <section className="blog" id="blog">
      <h1>Blog</h1>
      <div className="blog-container">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3>{post.title}</h3>
            <span className="blog-date">{post.date}</span>
            <p>{post.content}</p>
            {/* Future: Link to full post page */}
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;