import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { get, ref, update } from 'firebase/database'; 
import { useNavigate } from 'react-router-dom'; 
import db from '../../../firebase';
import 'animate.css'; 

const ShowMorePage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null); 
    const [rsvpStatus, setRsvpStatus] = useState(''); 
    const [userId] = useState('user1'); 
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchData = async () => {
            const dbRef = ref(db, `EventsList/${id}`); 
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                setEvent(snapshot.val());
            } else {
                console.log("No such event found!");
            }
        };

        fetchData();
    }, [id]);

    const handleRsvp = async () => {
        if (rsvpStatus) {
            const rsvpRef = ref(db, `EventsList/${id}/rsvpList`);
            await update(rsvpRef, { [userId]: rsvpStatus });
            alert('RSVP submitted successfully!');
            navigate('/');
        } else {
            alert('Please select an RSVP status.');
        }
    };

    if (!event) {
        return <p className="text-center mt-5 mb-5">Loading...</p>;
    }

    return (
        <div className="container mb-5">
            <h3 className="mt-5 mb-5">Event Details</h3>
           
            <div className="row justify-content-center">
                <div className="col-lg-8 border p-3 shadow-lg rounded animate__animated animate__fadeIn">
                    <img 
                        src={event.eventBanner} 
                        height={500} 
                        className="card-img-top shadow-lg rounded" 
                        alt={event.eventTitle} 
                    />
                    <div className="card-body">
                        <h6 className="card-title">{event.eventTitle} 
                            <span style={{ color: '#5A639C' }}> Created at: {event.datePosted}</span>
                        </h6>
                        <p className="card-text mt-4 mb-3"><b>Date</b>: {event.eventDate}</p>
                        <p className="card-text mt-4 mb-3"><b>Type</b>: {event.eventType}</p>
                        <p className="card-text mt-4 mb-3"><b>Location</b>: {event.location}</p>
                        <p className="card-text">{event.description}</p>
                    </div>
                    <Link 
                        to={`/edit/${id}`} 
                        className="btn btn-warning text-center py-1 mb-3 mx-auto mt-4 shadow-lg rounded"
                    >
                        Update
                    </Link>

                  
                    <div className="rsvp-section mt-4">
                        <h5>RSVP to this Event</h5>
                        <select 
                            value={rsvpStatus} 
                            onChange={(e) => setRsvpStatus(e.target.value)} 
                            className="form-control mb-3"
                        >
                            <option value="">Select RSVP Status</option>
                            <option value="yes">Yes, I'll attend</option>
                            <option value="no">No, I can't attend</option>
                        </select>
                        <button onClick={handleRsvp} className="btn btn-primary">Submit RSVP</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowMorePage;
