import { assets } from '../assets/asset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Backend/context/AuthContext';

export default function Discover() {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();

    const createEvent = () => {
        if (userLoggedIn) {
            navigate("/create-events");
        } else {
            navigate("/login-sign-up");
        }
    };

    return (
        <>
            <div className="px-[8%] py-6 bg-gradient-to-br from-black/40 to-black/50 
                bg-[url('../../assets/designs-03.jpg')] bg-center bg-no-repeat bg-cover 
                w-full h-screen relative overflow-hidden">
                <div>
                    <h1 className="font-[Space Grotesk] text-black text-5xl mt-12 tracking-wide 
                        border-l-[7px] border-[#b30d0d] pl-3 w-[200px] inline-block
                        animate-[fade-in_.5s_forwards] view-timeline-name:view 
                        view-timeline-axis:block">
                        Discover
                    </h1>
                    <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="text-black ml-12 -mb-1.5 
                            animate-[fade-in_0.5s_forwards]" 
                        size='1x'
                    />
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,350px))] 
                    justify-center items-center mt-12 gap-x-9 gap-y-11 p-4">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} 
                            className="align-content-center transition-all duration-500 ease-out 
                            shadow-[0_4px_8px_#f9f9f9] rounded-b-[30px] cursor-pointer bg-white">
                            <img 
                                src={assets.photo1} 
                                alt='display 1' 
                                className="w-full h-[35vh] object-cover object-center rounded-t-[30px] 
                                    border-b-[5px] border-gray-500 transition-all duration-500 ease-all
                                    hover:scale-105"
                                loading="lazy"
                            />
                            <p className="text-[#b30d0d] text-2xl font-semibold ml-2.5">AUG</p>
                            <p className="text-black font-normal ml-2.5">20th</p>
                            <div className="text-center">
                                <p className="text-2xl">Event Name</p>
                            </div>
                            <FontAwesomeIcon 
                                icon={faArrowRight} 
                                className="text-[#b30d0d] text-xl float-right mt-2.5 mr-2.5" 
                                size='1x'
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link to="/discovers" 
                        className="inline-flex justify-center mt-24 mb-12 font-[Space Grotesk] 
                        font-black text-xl tracking-wide rounded-[30px] border-[3px] 
                        border-[#b30d0d] text-black py-4 px-2 w-[215px] h-[65px] 
                        transition-transform duration-500 hover:scale-105 no-underline">
                        View All Events
                    </Link>
                </div>
            </div>

            <div className="bg-gradient-to-[30deg] from-[#b30d0d] to-black/70 w-full shadow-md">
                <div className="text-white text-center flex flex-col gap-4 mt-32 py-12
                    animate-[fade-in_0.5s_forwards]">
                    <h2>Make your own Event</h2>
                    <p className="mx-auto w-[350px]">
                        Effortlessly design and organize your event, from small gatherings to 
                        large festivals, with our simple, seamless tools.
                    </p>
                    <button 
                        onClick={createEvent} 
                        className="text-white bg-transparent border-4 border-[#f9f9f9] mt-2.5 
                            w-[225px] h-[50px] font-medium font-[Space Grotesk] rounded-[25px] 
                            text-sm cursor-pointer transition-all duration-500 mx-auto
                            hover:bg-[#f9f9f9] hover:text-[#b30d0d] hover:scale-105">
                        Create Events
                    </button>
                </div>
            </div>
        </>
    );
}

