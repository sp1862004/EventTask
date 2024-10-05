import React, { useEffect, useState } from 'react';
import { useEvents } from '../../context/EventsContext';
import { ref, onValue } from 'firebase/database';
import db from '../../../firebase'; 
import { Link } from 'react-router-dom';
import 'animate.css';

const EventsList = () => {
    const { handleDelete } = useEvents();
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const eventRef = ref(db, 'EventsList');
        onValue(eventRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const eventList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                setEvents(eventList);
            }
        });
    }, []);

    const filteredEvents = events.filter(event =>
        event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.eventType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control shadow-lg p-3 mb-5 bg-light rounded"
                        placeholder="Search events by name or type..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            
            <div className="row">
                {filteredEvents.map((event) => {
                    
                    const rsvpCount = event.rsvpList ? Object.keys(event.rsvpList).length : 0;
                    
                    return (
                        <div key={event.id} className="col-md-6 mb-5">
                            <div className="card h-100 shadow-lg border-0 animated animate__fadeIn">
                                <img 
                                    src={event.eventBanner} 
                                    className="card-img-top" 
                                    alt={event.eventTitle} 
                                    style={{ height: '200px', objectFit: 'cover' }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{event.eventTitle}</h5>
                                    <p className="card-text">
                                        <strong>Type:</strong> {event.eventType}<br />
                                        <strong>Date:</strong> {event.eventDate}<br />
                                        <strong>Location:</strong> {event.location}<br />
                                        <strong>RSVPs:</strong> {rsvpCount}
                                    </p>
                                    <Link to={`/ShowMorePage/${event.id}`} className="btn btn-primary">Show More</Link>
                                    <button 
                                        onClick={() => handleDelete(event.id)} 
                                        className="btn btn-danger ms-3"
                                    >
                                        Delete
                                    </button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Posted on {event.datePosted}</small>
                                </div>
                            </div>
                        </div>
                    );
                })}

                
                {filteredEvents.length === 0 && (
                    <div className="text-center fs-1 mt-5 text-danger mb-5">
                        <h5>No events found.</h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsList;
