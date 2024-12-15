import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { signInWithGoogle, signUp } from "../../../Backend/Auth/auth";
import { useNavigate } from "react-router";
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.firstName && formData.lastName && formData.email && 
            formData.password && termsAndConditions) {
            setError("");
            handleSignUp();
        } else {
            setError("Please fill in all fields");
        }
    };

    const handleSignUp = async () => {
        setLoading(true);
        try {
            await signUp(formData.email, formData.password, formData.firstName, formData.lastName);
            navigate("/waiting");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            await signInWithGoogle();
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-full h-full flex justify-center items-center bg-white/80 z-50">
                <ReactLoading
                    type="spinningBubbles"
                    color="#b30d0d"
                    height={100}
                    width={100}
                />
            </div>
        );
    }

    return (
        <div className="min-h-[120vh] flex justify-center items-center
            bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url('../../assets/background_image.jpg')]
            bg-center bg-no-repeat bg-cover">
            <div className="bg-white p-8 rounded-lg w-[700px] shadow-lg text-black
                animate-[slideIn_2s_ease-out] animate-delay-100">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="cursor-pointer transition-all duration-500 hover:text-[#b30d0d] 
                        hover:scale-110"
                    onClick={() => navigate("/login-sign-up")}
                    size="lg"
                />
                <div className="flex flex-row mb-5 items-center justify-center gap-2.5">
                    <h1>Create an account</h1>
                </div>

                <div className="flex flex-col gap-2.5 p-2.5 rounded-[30px] items-center justify-center">
                    <button className="flex items-center justify-center gap-2.5 w-[350px] h-[50px] 
                        px-3 py-2 my-2 text-base border-2 border-gray-300 rounded-lg cursor-pointer 
                        bg-none shadow-md">
                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                        <span>Sign up with X</span>
                    </button>
                    <button
                        onClick={handleSignInWithGoogle}
                        className="flex items-center justify-center gap-2.5 w-[350px] h-[50px] 
                            px-3 py-2 my-2 text-base border-2 border-gray-300 rounded-lg 
                            cursor-pointer bg-none shadow-md text-[#DB4437]">
                        <FontAwesomeIcon icon={faGoogle} size="lg" />
                        <span>Sign up with Google</span>
                    </button>
                    <div className="flex items-center my-4 before:flex-1 before:border-t 
                        before:border-black before:mt-0.5 after:flex-1 after:border-t 
                        after:border-black after:mt-0.5">
                        <span className="mx-4 text-sm text-gray-500">OR</span>
                    </div>
                </div>

                <form className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="First name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg text-base"
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg text-base"
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
                        className="w-full p-3 border border-gray-300 rounded-lg text-base"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg text-base"
                    />

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="termsAndConditions"
                            checked={termsAndConditions}
                            onChange={() => setTermsAndConditions(!termsAndConditions)}
                            required
                            className="w-4 h-4 cursor-pointer accent-[#b30d0d]"
                        />
                        <label htmlFor="termsAndConditions" className="text-gray-600 text-sm">
                            I agree to the <a href="#" className="hover:text-[#b30d0d]">
                                Terms and Conditions</a>
                        </label>
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-gray-300 text-white text-base font-bold py-3 rounded-full 
                            cursor-pointer transition-colors duration-300 w-2/3 mx-auto
                            hover:bg-[#b30d0d]">
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}
