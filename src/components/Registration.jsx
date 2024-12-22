import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PhonImage from '../assets/phone_pict.png';
import email from '../assets/free-icon-envelope-481658.png';
import pass from '../assets/free-icon-lock-5953216.png';
import user from '../assets/free-icon-user-profile-16876871.png';
import photo from '../assets/gradient.png';
import Slider from './slider';

export const Registration = () => {
  return (
    <div className="Login-Base-div">
      <img className="Login-Base-div_img" src={PhonImage} alt="Phon" />
      <div className="Login-Base-div2">
        <div className="Login-Base-div1">
          <div className="Login-Base-div3">
            <h1 className="Login-Base_h1">Get started</h1>
            <h4>
              Already have an account? 
              <a className="Login-Base-div_a">Login</a>
            </h4>

            <div className='Login-Base-div-input_1'>
              <div className="Login-Base-div4">
                <img src={user} alt="" />
              </div>
              <label htmlFor="">Name</label>
              <input type="text" className="Login-Base-div_input" placeholder="Enter your name" required />
            </div>

            <div className='Login-Base-div-input_1'>
              <div className="Login-Base-div4">
                <img src={email} alt="" />
              </div>
              <label htmlFor="">Email</label>
              <input type="text" className="Login-Base-div_input" placeholder="Enter your email" required />
            </div>

            <div className='Login-Base-div-input_1'>
              <div className="Login-Base-div4">
                <img src={pass} alt="" />
              </div>
              <label htmlFor="">Password</label>
              <input className="Login-Base-div_input" type="password" placeholder="Enter your password" required />
            </div>

            <button type="submit" className="button">Register</button>
          </div>

          
          <div>
            
          <Slider />
            <img className="Login-Base-div_img1" src={photo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
