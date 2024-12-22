import React, { useState } from "react";
import cloud from "../assets/Screenshot_24.png";
import folder from "../assets/free-icon-folder-456792.png";
import postimg from "../assets/image_post.png";

function Home() {
  const [setUploadedFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  return (
    <div className="Home-Page">
      <header>
        <h2>LOGO</h2>
        <button className="show">Sign in</button>
      </header>
      <h1 className="Home-Page_title">Welcome to the Smart Check Scanner</h1>
      <div
        className="upload-container"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          className="file-input"
          id="fileInput"
          onChange={handleFileChange}
        />
        <label htmlFor="fileInput" className="upload-label">
          <div className="upload-content">
            <img src={folder} alt="Upload Icon" className="upload-icon" />
            <img src={cloud} alt="Upload Icon" className="upload-icon1" />
            <h2>Upload your files</h2>
            <p className="upload-p">
              Drag and drop your files here or{" "}
              <span className="upload-files">choose files</span>
            </p>
          </div>
        </label>
      </div>

      <h1 className="Home-Page_title Home-Page_title1">Our Smart Check Scanner Posts:</h1>

      <div className="Show-sec">
      <div className="show-container">
        <div className="show-conten">
          <img src={postimg} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita adipisci saepe debitis dicta consequatur tempora modi, eligendi amet atque, eos vitae ex earum quasi eaque ipsum dolorem voluptatum! Tenetur assumenda sit cum totam ad tempore animi itaque quisquam magnam.</p>
          <h4>23.12.2024</h4>
        </div>

        <div className="show-conten">
          <img src={postimg} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita adipisci saepe debitis dicta consequatur tempora modi, eligendi amet atque, eos vitae ex earum quasi eaque ipsum dolorem voluptatum! Tenetur assumenda sit cum totam ad tempore animi itaque quisquam magnam.</p>
          <h4>23.12.2024</h4>
        </div>

        <div className="show-conten">
          <img src={postimg} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita adipisci saepe debitis dicta consequatur tempora modi, eligendi amet atque, eos vitae ex earum quasi eaque ipsum dolorem voluptatum! Tenetur assumenda sit cum totam ad tempore animi itaque quisquam magnam.</p>
          <h4>23.12.2024</h4>
        </div>

        <div className="show-conten">
          <img src={postimg} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita adipisci saepe debitis dicta consequatur tempora modi, eligendi amet atque, eos vitae ex earum quasi eaque ipsum dolorem voluptatum! Tenetur assumenda sit cum totam ad tempore animi itaque quisquam magnam.</p>
          <h4>23.12.2024</h4>
        </div>


      </div>
      </div>

      <hr />
      <footer><h4>All rights reserved © 2024 Your Company.</h4></footer>
    </div>
  );
}

export default Home;
