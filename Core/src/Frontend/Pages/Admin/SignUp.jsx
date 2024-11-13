import { useState } from 'react';
import '../Css/SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signInWithGoogle, signUp } from '../../../Backend/Auth/auth';
import { useNavigate } from 'react-router';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isPasswordMatching, setIsPasswordMatching] = useState(false);
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Validation function
    const validateForm = () => {
        if (!termsAndConditions) {
            setError('You must accept the terms and conditions.');
            return false;
        }
        if (formData.password !== confirmPassword) {
            setErrorPassword('Password does not match');
            setIsPasswordMatching(false);
            return false;
        }
        setErrorPassword('');
        setIsPasswordMatching(true);
        return true;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName && formData.lastName && formData.email && formData.password && validateForm()) {
            setError('');
            handleSignUp();
            console.log("Form Submitted", formData);
        } else {
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
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

    return (
        <div className="sign-up-content">
            <div className="sign-up-left-section">
                <form>
                    <FontAwesomeIcon icon={faCircleXmark} size="2x" style={{ color: 'black', cursor: 'pointer' }} onClick={() => navigate('/Tickify_Project/login-sign-up')} className="cross-circle" />
                    <h2>Create Account</h2>
                    <div className="input-group">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                            id="firstName"
                        />
                        <label htmlFor="firstName">First Name</label>
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                            id="lastName"
                        />
                        <label htmlFor="lastName">Last Name</label>
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                            id="email"
                        />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                            id="password"
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            autoComplete="off"
                            id="confirmPassword"
                        />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        {isPasswordMatching && <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4CAF50', marginLeft: '10px' }} />}
                    </div>

                    <p className="error-password">{errorPassword}</p>

                    <div className="terms-and-conditions">
                        <input
                            type="checkbox"
                            name="termsAndConditions"
                            onChange={(e) => setTermsAndConditions(e.target.checked)}
                            checked={termsAndConditions}
                            id="termsAndConditions"
                        />
                        <label htmlFor="termsAndConditions">Accept Terms and Conditions</label>
                    </div>
                    
                    {error && <p className="error">{error}</p>}
                    <button onClick={handleSubmit} type="submit" className="sign-up-button">Sign Up</button>
                    <p style={{ color: '#b30d0d', textAlign: 'center', marginTop: '10px' }}>Or</p>
                    <div style={{ justifyContent: 'center', marginTop: '30px', padding: '0 7rem' }}>
                        <FontAwesomeIcon icon={faGoogle} size="2x" style={{ color: '#b30d0d', cursor: 'pointer', justifyContent: 'center', margin: '0 4.2rem' }} onClick={handleSignInWithGoogle} />
                    </div>
                </form>
            </div>
            <div className="right-section"></div>
        </div>
    );
}
