import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Backend/context/AuthContext";
import { logIn } from "../../../Backend/Auth/auth";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function TicketLogin() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { currentUser, userLoggedIn } = useAuth();
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await logIn(email, password);
            navigate("/");
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    }

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
        <div className="flex justify-center items-center w-full h-screen bg-[#f0f4f8]
            bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url('../../assets/pexels-sebastian-ervi-866902-1763075.jpg')]
            bg-center bg-no-repeat bg-cover">
            <div className="flex w-[700px] h-[600px] bg-white shadow-lg rounded-lg overflow-hidden
                animate-[slideIn_1.5s_ease-out] animate-delay-100 -mt-5">
                <div className="w-2/5 h-full bg-[#b30d0d] text-white flex flex-col items-center 
                    justify-center p-5 text-center animate-[fadeIn_1s_ease-out]">
                    <h1 className="text-2xl mb-2.5">Tickify</h1>
                    <p className="text-sm leading-relaxed">
                        Your gateway to seamless event experiences
                    </p>
                </div>

                <form className="w-3/5 p-10 flex flex-col items-center justify-center 
                    animate-[fadeIn_0.8s_ease-out]" autoComplete="off">
                    <h2 className="text-2xl mb-2.5 text-black">Welcome Back</h2>
                    <p className="text-sm text-gray-600 mb-8">
                        Please log in to access your tickets
                    </p>

                    <div className="relative w-full mb-5">
                        <input
                            type="email"
                            id="email"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="off"
                            className="w-full py-3 px-0 text-base border-none border-b-2 
                                border-gray-300 outline-none transition-all duration-300
                                focus:border-[#b30d0d]"
                        />
                        <label htmlFor="email" className="absolute left-0 -top-5 text-xs 
                            text-gray-600 transition-colors duration-300">
                            Email
                        </label>
                    </div>

                    <div className="relative w-full mb-5">
                        <input
                            type="password"
                            id="password"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full py-3 px-0 text-base border-none border-b-2 
                                border-gray-300 outline-none transition-all duration-300
                                focus:border-[#b30d0d]"
                        />
                        <label htmlFor="password" className="absolute left-0 -top-5 text-xs 
                            text-gray-600 transition-colors duration-300">
                            Password
                        </label>
                    </div>

                    <div className="flex items-center my-4 before:flex-1 before:border-t 
                        before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t 
                        after:border-gray-300 after:mt-0.5">
                        <p className="text-sm text-gray-500 px-3">OR</p>
                    </div>

                    <button className="flex items-center justify-center gap-2.5 w-[350px] h-[50px] 
                        px-3 py-2 my-2 text-base border-2 border-gray-300 rounded-lg cursor-pointer 
                        bg-none shadow-md text-[#DB4437]">
                        <FontAwesomeIcon icon={faGoogle} size="lg" />
                        <span>Sign up with Google</span>
                    </button>

                    <p className="mt-4">
                        Forgot password?{" "}
                        <Link to="/forgetpassword" className="cursor-pointer text-[#b30d0d]">
                            Click here
                        </Link>
                    </p>

                    <button onClick={login} type="submit" 
                        className="w-full py-3 text-base text-white bg-[#b30d0d] border-none 
                        rounded cursor-pointer transition-colors duration-300 mt-4
                        hover:bg-[#8d0a0a]">
                        Log In
                    </button>

                    <p className="mt-5 text-sm text-black">
                        Don't have an account?{" "}
                        <Link to="/sign-up" className="text-[#b30d0d]">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

