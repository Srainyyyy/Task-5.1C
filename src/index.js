import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';


function PostForm() {
  const [postType, setPostType] = useState("Question");


  const handlePostTypeChange = (e) => {
    setPostType(e.target.value);
  };

  return (
    <div className="container">
      <h2 className="header">New Post</h2>
      {/* Form type selection */}
      <div className="post-type">
      <label>Select Post Type:  </label>
        <label>
          <input
            type="radio"
            name="postType"
            value="Question"
            checked={postType === "Question"}
            onChange={handlePostTypeChange}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            name="postType"
            value="Article"
            checked={postType === "Article"}
            onChange={handlePostTypeChange}
          />
          Article
        </label>
      </div>

    
      {postType === "Question" && (
        <div className="question-section">
          <h2 className="subheader">What do you want to ask or share</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This section is designed based on the type of the post. It could be
            developed by conditional rendering.   
          <span className="highlighted-text">
            For post an article, the following section would be appeared.
          </span>
          </p>
          
          <label className="section-title">Title</label>
          <input type="text" placeholder="Start your question with how, what, why, etc." />
          <label className="section-title">Describe your problem</label>
          <textarea rows="15"></textarea>
          <label className="section-title">Tags</label>
          <textarea rows="1" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"></textarea>
        </div>
      )}

      {postType === "Article" && (
        <div className="article-section">
          <h2 className="subheader">What do you want to ask or share</h2>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This section is designed based on the type of the post. It could be
            developed by conditional rendering.   
          <span className="highlighted-text">
            For post an article, the following section would be appeared.
          </span>
          </p>
          <label className="section-title">Title</label>
          <input type="text" placeholder="Enter a descriptive title" />
          <label className="section-title">Abstract</label>
          <textarea rows="5" placeholder="Enter a 1-paragraph abstract"></textarea>
          <label className="section-title">Article Text</label>
          <textarea rows="12" placeholder="Enter the article text"></textarea>
          <label className="section-title">Tags</label>
      <textarea rows="1" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"></textarea>
        </div>
      )}

      
      

      {/* submit button */}
      <div  className="button-container">
      <button className="submit-btn">Post</button>
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PostForm />);
