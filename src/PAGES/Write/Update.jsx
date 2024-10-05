import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ref as dbRef, get, ref, set } from 'firebase/database';
import db from '../../../firebase';
import 'animate.css'; 

const UpdateEvent = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    const fetchData = async () => {
        try {
            console.log("Fetching data for ID:", id);
            const databaseRef = dbRef(db, `EventsList/${id}`); 
            const snapshot = await get(databaseRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log("Fetched data:", data);
                reset(data);
            } else {
                console.log("No such event!");
            }
        } catch (error) {
            console.error("Error fetching document: ", error);
        }
    };

    const onSubmit = async (data) => {
        try {
            const dbRef = ref(db, `EventsList/${id}`); 
            await set(dbRef, data);
            alert("Event updated successfully!");
            reset();
            navigate('/'); 
        } catch (error) {
            console.error("Error saving document: ", error);
            alert("Error: " + error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="animate__animated animate__fadeIn">
                <h6 className='mb-4 mt-3 text-center'>Update Event Details</h6>
                <div className="container">
                    <div className="row d-flex mx-auto justify-content-center">
                        <div className="col-lg-10 mx-auto mt-3 mb-2">
                            <input type="text" className='form-control shadow py-3 border-primary' {...register('eventTitle')} autoFocus placeholder='Event Title' />
                        </div>
                        <div className="col-lg-7 mt-3">
                            <label htmlFor="imageInput" className="form-label" style={{ color: '#365E32' }}>Upload Event Banner</label>
                            <input type="text" className='form-control py-3 shadow border-primary' id="imageInput" {...register('eventBanner')} placeholder='Event Banner URL' />
                        </div>
                        <div className="col-lg-3 mt-3">
                            <label htmlFor="dateInput" className="form-label" style={{ color: '#365E32' }}>Event Date</label>
                            <input type="date" className='form-control py-3 shadow border-primary' id="dateInput" {...register('eventDate')} />
                        </div>
                        <div className="col-lg-10 mt-3">
                            <label htmlFor="eventType" className="form-label" style={{ color: '#365E32' }}>Event Type</label>
                            <input type="text" className='form-control py-3 shadow border-primary' placeholder='Event Type (e.g., Conference, Webinar)' {...register('eventType')} />
                        </div>
                        <div className="col-lg-10 mt-3">
                            <label htmlFor="eventLocation" className="form-label" style={{ color: '#365E32' }}>Location</label>
                            <input type="text" className='form-control py-3 shadow border-primary' placeholder='Event Location' {...register('location')} />
                        </div>
                    </div>
                    <div className="row d-grid mt-3">
                        <div className="col-lg-10 mx-auto mb-4">
                            <label htmlFor="eventDescription" className="form-label fs-6" style={{ color: '#365E32' }}>Event Description</label>
                            <textarea className="form-control shadow py-3 border-primary" id="eventDescription" {...register('description')} rows="8" placeholder="Describe your event here..."></textarea>
                        </div>
                    </div>
                </div>
                <button className='btn btn-success text-center mx-auto py-2 mb-3 d-grid mx-auto'>Update Event</button>
            </form>
        </>
    );
};

export default UpdateEvent;
