import { useState } from 'react';
import '../Css/SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { signInWithGoogle, signUp } from '../../../Backend/Auth/auth';
import { useNavigate } from 'react-router';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; //i have removed this icon 
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
   const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Validation function

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName && formData.lastName && formData.email && formData.password && termsAndConditions) {
            setError('');
            handleSignUp();
            console.log("Form Submitted", formData);
        } else {
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !termsAndConditions) {
                setError('Please fill in all fields');
            }
        }
    };

    // Sign-up method
    const handleSignUp = async () => {
        try {
            await signUp(formData.email, formData.password);
            navigate('/Tickify_Project/');
        } catch (err) {
            setError(err.message);
        }
    };

    // Google sign-in method
    const handleSignInWithGoogle = async () => {
        try {
            await signInWithGoogle();
            navigate('/Tickify_Project/');
        } catch (err) {
            setError(err.message);
        }
    };

    //CAREW
    // I did a redesign of the sign up page
    return (
        <div className="signup-container">
            <div className="signup-content">
            <FontAwesomeIcon icon={faCircleXmark} className="close-icon" onClick={() => navigate('/Tickify_Project/login-sign-up')} size='lg'/>
                <div className="heading">
                <h1>Create an account</h1>
                </div>

                <div className='sign-up-socials'>
                <button className="social-button facebook">
                    <FontAwesomeIcon icon={faFacebook} size='lg'/>
                    <span>Sign up with Facebook</span>
                    </button>
                    <button className="social-button google" onClick={handleSignInWithGoogle}>
                    <FontAwesomeIcon icon={faGoogle} size='lg'/>
                    <span>Sign up with Google</span>
                    </button>
                    <div className="separator">
                    <span>OR</span>
                    </div>
                </div>    
                <form>
                <div className="name-fields">
                    <input type="text" 
                    placeholder="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete='off'
                    required />

                    <input type="text" 
                    placeholder="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete='off'
                    required />
                </div>
                
                <input type="email"
                 placeholder="Email address" 
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 autoComplete='off'
                required />

                <input type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete='off'
                required />

                <div className='terms-and-conditions'>
                <input type='checkbox'
                id='termsAndConditions'
                name='termsAndConditions'
                checked={termsAndConditions}
                onChange={() => setTermsAndConditions(!termsAndConditions)}
                required />

                <label htmlFor="termsAndConditions">I agree to the <a href="#">Terms and Conditions</a></label>
                </div>
                {error && <p className="error" style={{color: 'red'}}>{error}</p>}
                <button type="submit" className="submit-button" onClick={handleSubmit}>
                    Sign up
                </button>
                </form>   
            </div>
        </div>

    )
      
}
