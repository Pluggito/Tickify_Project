import { useState } from "react";
import './Text.Css';

export default function LoginSignup() {
    const [isSignedIn, setIsSignedIn] = useState(false); // To manage the transition state

    const handleSignInClick = () => {
        setIsSignedIn(true); // Trigger the transition
    };

    return (
        <div className="login-wrapper">
            <div className={`login-container ${isSignedIn ? 'move-left' : ''}`}>
                {/* Left Section (Glassmorphism) */}
                <div className="left-section">
                    <h1>Tickify</h1>
                    <p>Welcome Back</p>
                    <p>We're so excited to see you again!</p>
                </div>

                {/* Right Section (Login Form) */}
                <div className={`login-form ${isSignedIn ? 'show-details' : ''}`}>
                    <h2>Sign In</h2>
                    <p>Enter your credentials to sign in.</p>

                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <label>Email</label>
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <label>Password</label>
                    </div>

                    <button className="login-btn" onClick={handleSignInClick}>Sign In</button>
                </div>
            </div>
        </div>
    );
}
