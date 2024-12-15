import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faPeopleArrows, faWallet } from '@fortawesome/free-solid-svg-icons';

export default function Features() {
    const feature = [ 
        {
            icon: faTicket, 
            title: "Online Ticketing and Registration", 
            description: "Offer a simple, easy-to-use platform for creating and selling event tickets online. Organizers can"
        },
        {
            icon: faPeopleArrows, 
            title: "Event Promotion and Social Sharing", 
            description: "Help event organizers reach their audience by providing social sharing tools and customizable event pages to spread the word."
        },
        {
            icon: faWallet, 
            title: "Simple Payment Processing", 
            description: "Facilitate smooth and secure payment processing so that ticket buyers can quickly complete purchases."
        }
    ];

    return (
        <div className="container mx-auto px-4">
            <h1 className="font-[Space Grotesk] text-black text-5xl mt-24 tracking-wide 
                border-l-[7px] border-[#b30d0d] pl-3">
                Features
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
                {feature.map((item, index) =>
                    <div key={index} 
                        className="text-left rounded-3xl p-8 cursor-pointer 
                        transition-all duration-500 hover:shadow-lg hover:scale-110">
                        <FontAwesomeIcon 
                            icon={item.icon} 
                            className="text-[#b30d0d] mb-3" 
                            size='3x'
                        />
                        <h3 className="text-black mb-4 w-[150px] font-space">
                            {item.title}
                        </h3>
                        <p className="w-[250px] tracking-wide text-[#7a7a7a] font-space">
                            {item.description}
                        </p>
                    </div>
                )}         
            </div>
        </div>
    );
}