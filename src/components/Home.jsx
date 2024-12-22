import { useEffect, useState } from "react";
import cloud from "../assets/Screenshot_24.png";
import folder from "../assets/free-icon-folder-456792.png";
import postimg from "../assets/image_post.png";
import useAuth from "../hooks/useAuth";
import { $axios } from "../api";
import { useNavigate } from "react-router-dom";

function Home() {
  const {isAuth, setIsAuth}  = useAuth()
  const [documents, setDocuments] = useState([])
  const [setUploadedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')
  const [showLoader, setShowLoader] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const navigate = useNavigate()
  
  useEffect(() => {
    document.title = 'Home'
    getAllDocuments()
  }, [])

  const getAllDocuments = () => {
    $axios.get('checks/')
        .then(res => {
          console.log(res.data)
          setDocuments(res.data)
        })
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // const handleFileChange = (event) => {
    // const files = Array.from(event.target.files);
    // setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  // };

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuth(false)
    navigate('/login')
  }

  const deleteDocument = (id) => {
    if (confirm("Do you want to delete this check?")) {
      $axios.delete(`checks/${id}/`)
        .then(res => {
          console.log(res)
          getAllDocuments()
        })
    }
  }

  const handleFileChange = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
          const formData = new FormData();
          formData.append('file', file);
          setShowLoader(true)
          setShowForm(false)
    
          $axios.post('checks/', formData, {
            headers: {
                  'Content-Type': 'multipart/form-data',
            }
          })  
                .then(res => {
                      console.log(res)
                      getAllDocuments()

                      setShowLoader(false)
                      setShowForm(true)
                })
                .catch(err => {
                      setErrorMessage(err.response.data.message)
                      
                      setShowLoader(false)
                      setShowForm(true)
                })
          }
      };

  return (
    <div className="Home-Page">
      <header>
        <h2>LOGO</h2>
        {!useAuth ? (<button className="show">Sign in</button>) : (
          <button onClick={logout} className="show">Log Out</button>
        )}
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
      
      {showLoader ? <h2 className="loading">Loading...</h2>: ''}
      
      <div className="Show-sec">
        {documents ? (
          <div className="show-container">
            {documents.map((document, key) => (
              <div className="show-conten" key={key}>
              <img src={postimg} alt="" />
              <p dangerouslySetInnerHTML={{ __html: document.recommendations }}></p>
              <h4>{document.created_at}</h4>
              <h4 className="del" 
              onClick={() => {deleteDocument(document.id)}}>Delete</h4>
            </div>
            ))}
          </div>
        ): (
          <h2>Loading...</h2>
        )}
      </div>

      <hr />
      <footer><h4>All rights reserved © 2024 Your Company.</h4></footer>
    </div>
  );
}

export default Home;
