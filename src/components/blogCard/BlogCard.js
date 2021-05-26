import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog, isDark }) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div >
      <img type="image" src={blog.url}
        alt="Background" width="100%" 
      ></img>
      <p className= "assignment">
        {blog.name}
      </p>
      {/* <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
        >
          
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div> */}
    </div>
  );
}
