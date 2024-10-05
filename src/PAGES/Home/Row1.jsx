import React from 'react';
import 'animate.css';  

const Row1 = () => {
    return (
        <>
            <div className='container'>
               
                <h2 className='text-center fs-2 mt-5 upcoming-events animate__animated animate__fadeInUp'>
                    Exciting Upcoming Events
                </h2>
                <p style={{ color: '#1679AB' }} className="animate__animated animate__fadeInLeft mt-5 ">
                    Discover a world of engaging events, workshops, and experiences at 
                    <span style={{ color: 'black' }}> SP E V <i className="fa-regular fa-calendar-check"></i> <i className="fa-regular fa-calendar-check"></i> N T S</span>.
                    We bring you a wide array of eventswhether you’re looking to network, learn, or simply have fun. Get inspired by thought-provoking conferences, hands-on workshops, and amazing entertainment.
                </p>
                <p style={{ color: '#1679AB' }} className="animate__animated animate__fadeInRight mb-5">
                    Join us on our journey of discovery and adventure by sharing your experiences, attending events, and contributing ideas.
                    <span style={{ color: 'black' }}> SP E V <i className="fa-regular fa-calendar-check"></i> <i className="fa-regular fa-calendar-check"></i> N T S</span> offers a platform for all enthusiasts to connect, learn, and grow.
                    Start your journey towards creating memorable experiences!
                </p>

                <div className="container border"></div>
            </div>
        </>
    );
}

export default Row1;
