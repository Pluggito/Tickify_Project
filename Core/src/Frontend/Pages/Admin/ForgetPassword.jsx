import { useState } from "react"
import { Link } from "react-router-dom"
import '../Css/Reset.css'
import { forgetPassword } from "../../../Backend/Auth/auth"


export default function ForgetPassword(){
  const [email, setEmail] = useState("")

  const handleForgetPassword = () =>{
    forgetPassword(email)
  }
    return(
    
            <div className="ResetContainer">
    <div className="form-wrapper">
      <h1 className="form-name">Reset Password</h1>
      <p className="description">Enter your email address, and we `&aspo` ll send you a link to reset your password.</p>
      <form id="forgot-password-form" >
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email"  onChange={e=>setEmail(e.target.value)} required />
        </div>
        <button onClick={handleForgetPassword} className="btn">Send Reset Link</button>
      </form>
      <Link to="/login-sign-up" className="back-link">Back to Login</Link>
    </div>
  </div>
        
    )
}
