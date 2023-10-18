import './OurClient.css'

const OurClient = () => {
    return (
        <>
             <h1 className='text-center team_heading'>Meet Our Team</h1>
           <br /><br />
            <div className="team max-w-[1200px] mx-auto">
                <div className="member member_1">
                   <img src="/image/team1.jpg" alt="" />
                   <p className='team_title'>Daniel</p>
                   <p className='team_desc'>Daniel has over a decade of experience in the field of social event management. He started his career as an event coordinator at a prestigious event planning company where he quickly rose through the ranks due to his impeccable attention to detail and creativity. Throughout his career, he has managed a wide range of events, from intimate weddings to large corporate gatherings. Daniel is known for his exceptional organizational skills and his ability to turn clients visions into reality. He is a go-to expert when it comes to creating seamless, unforgettable experiences for clients and their guests.</p>
                </div>
                <div className="member member_2">
                   <img src="/image/team2.jpg" alt="" />
                   <p className='team_title'>Benjamin</p>
                   <p className='team_desc'>Benjamin journey in social event management began with a deep passion for hospitality and a knack for creating memorable moments. He entered the industry as a hospitality management graduate, working in renowned hotels and resorts where he honed his skills in customer service and event coordination. His career naturally evolved into event management, where he now specializes in crafting bespoke events. Benjamin is known for his ability to seamlessly blend hospitality with event planning, ensuring that every guest feels not only welcomed but also part of a unique experience.</p>
                </div>
                <div className="member member_3">
                    <img src="/image/team3.jpg" alt="" />
                    <p className='team_title'>Emily</p>
                    <p className='team_desc'>Emily has been a trailblazer in the field of social event management, breaking barriers and bringing fresh perspectives to the industry. She started her career with a degree in event planning and design and quickly gained recognition for her innovative approach to event concepts and themes. Emily has a keen eye for design and is known for incorporating the latest trends and technology into her events. She has successfully managed a wide range of social events, from high-profile celebrity parties to community fundraisers, leaving a trail of delighted clients and guests in her wake. Emily commitment to creating inclusive and unforgettable experiences has made her a sought-after name in the industry.</p>
                </div>
            </div>
        </>
    );
};

export default OurClient;