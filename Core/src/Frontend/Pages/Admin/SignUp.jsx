import { useState } from "react";
import "../Css/SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { signInWithGoogle, signUp } from "../../../Backend/Auth/auth";
import { useNavigate } from "react-router";
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; //i have removed this icon
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ReactLoading from "react-loading";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Validation function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password &&
      termsAndConditions
    ) {
      setError("");
      handleSignUp();
      console.log("Form Submitted", formData);
    } else {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password ||
        !termsAndConditions
      ) {
        setError("Please fill in all fields");
      }
    }
  };

  // Sign-up method
  const handleSignUp = async () => {
    setLoading(true);
    try {
      await signUp(
        formData.email,
        formData.password,
        formData.firstName,
        formData.lastName
      );
      setLoading(false);
      navigate("/waiting");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google sign-in method
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  
  // LOADING ANIMATION
  if (loading) {
    // Show preloader while `loading` is true
    return (
      <div className="preloader-wrapper">
        <ReactLoading
          type="spinningBubbles"
          color="#b30d0d"
          height={100}
          width={100}
        />
      </div>
    );
  }

  //CAREW
  // I did a redesign of the sign up page
  return (
    <div className="signup-container">
      <div className="signup-content">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="close-icon"
          onClick={() => navigate("/login-sign-up")}
          size="lg"
        />
        <div className="heading">
          <h1>Create an account</h1>
        </div>

        <div className="sign-up-socials">
          <button className="social-button facebook">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
            <span>Sign up with X</span>
          </button>
          <button
            className="social-button google"
            onClick={handleSignInWithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} size="lg" />
            <span>Sign up with Google</span>
          </button>
          <div className="separator">
            <span>OR</span>
          </div>
        </div>
        <form>
          <div className="name-fields">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <div className="terms-and-conditions">
            <input
              type="checkbox"
              id="termsAndConditions"
              name="termsAndConditions"
              checked={termsAndConditions}
              onChange={() => setTermsAndConditions(!termsAndConditions)}
              required
            />

            <label htmlFor="termsAndConditions">
              I agree to the <a href="#">Terms and Conditions</a>
            </label>
          </div>
          {error && (
            <p className="error" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
