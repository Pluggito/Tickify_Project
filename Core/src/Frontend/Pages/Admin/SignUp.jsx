import  { useState } from 'react';
import '../Css/SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signInWithGoogle, signUp } from '../../../Backend/Auth/auth';
import { useNavigate } from 'react-router';

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.password) {
            setError('');
            handleSignUp();
            console.log("Form Submitted", formData); // Handle form submission logic here
        } else {
            setError('Please fill in all fields');
        }
    };

    //ETTY
    //SIGN-UP METHOND
    const handleSignUp = async ()=> {
        try {
            
          await  signUp(formData.email,formData.password)
          navigate('/Tickify_Project/')
        } catch (err) {
            setError(err.message)
  
        }
    }
    //SIGN-IN WITH GOOGLE METHOD
    const handleSignInWithGoogle = async() =>{
        try {

           await signInWithGoogle()
           navigate('/Tickify_Project/')
        } catch (err) {
            setError(err.message)

        }
    }

    return (
        <div className="sign-up-content">
            <div className="left-section">
                <form >
                    <h2>Create Account</h2>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete='off'
                        />
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete='off'
                        />
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete='off'
                        />
                        <label htmlFor='password'>Password</label>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button onClick={handleSubmit} type="submit">Sign Up</button>
                    <p style={{color: '#b30d0d',textAlign: 'center', marginTop: '10px'}}>Or</p>
                    <div style={{justifyContent: 'center', marginTop: '30px', padding: '0 7rem'}}>
                        <FontAwesomeIcon icon={faGoogle} size="2x" style={{color: '#b30d0d', cursor: 'pointer'}} onClick={handleSignInWithGoogle} />
                    </div>
                </form>
            </div>
        </div>
    );
}
