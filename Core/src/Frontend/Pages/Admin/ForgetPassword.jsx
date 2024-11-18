import { Link } from "react-router-dom"
import '../Css/Reset.css'


export default function ForgetPassword(){
    return(
    
            <div className="container">
    <div className="form-wrapper">
      <h1 className="form-name">Reset Password</h1>
      <p className="description">Enter your email address, and we `&aspo` ll send you a link to reset your password.</p>
      <form id="forgot-password-form" action="/reset-password" method="POST">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <button type="submit" className="btn">Send Reset Link</button>
      </form>
      <Link to="/login-sign-up" className="back-link">Back to Login</Link>
    </div>
  </div>
        
    )
}
