import React from 'react'
import PhonImage from '../assets/задний фон для сайта связанного с ии в светло-серых и белых тонах, контент по середине сайта, акцент по всем бокам width 1200px.png';
import email from '../assets/free-icon-envelope-481658.png'
import pass from '../assets/free-icon-lock-5953216.png'
const Login = () => {
  return (
    <div className="Login-Base-div">
            <img className='Login-Base-div_img'  src={PhonImage} alt="Phon" />
            <div className='Login-Base-div2'>
            <div className='Login-Base-div1'>
                <div className='Login-Base-div3'>
                    <div className='Login-Base-div3_div'><div className='Login-Base-div3_div1'>
                    <div><h4>Questions?</h4><a className='Login-Base-div_a' href=''>Ask Ho3ein</a></div>
                    <img className='Login-Base-div_img2' src="https://images.pexels.com/photos/6153953/pexels-photo-6153953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div></div>
                    <h1>Get started</h1>
                    <h4>Don't have an account?
                        
                        <a className='Login-Base-div_a'>Register</a>
                        </h4>
                <div>
                    <div className='Login-Base-div4'><img src={email} alt="" /></div>
                    <label htmlFor="">Email</label>
                    <input type="text" className='Login-Base-div_input' placeholder='Enter your email' required/>
                </div>
                <div>
                    <div className='Login-Base-div4'><img src={pass} alt="" /></div>
                    <label htmlFor="">Password</label>
                    <input className='Login-Base-div_input' type="password" placeholder='Enter your password' required/>
                </div>
                <button type='submit' className='button'>Login</button>
                </div>
                <img className='Login-Base-div_img1' src="https://th.bing.com/th/id/OIP.sJLPhor1g64tcXpJ-EUnwgHaEk?rs=1&pid=ImgDetMain" alt="" />
            </div>
            </div>
        </div>
      )
}

export default Login


