import { push, ref, set } from 'firebase/database';
import { useForm } from 'react-hook-form';
import db from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const Write = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setValue('eventBanner', reader.result); 
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = (data) => {
        const date = new Date(data.eventDate);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();

        const formattedData = {
            ...data,
            eventDate: `${day} ${month} ${year}`,
            datePosted: new Date().toLocaleDateString(),  
        };

        const newDocRef = push(ref(db, "EventsList")); 
        set(newDocRef, formattedData)
            .then(() => {
                alert("Event added successfully");
                reset();
                navigate("/");
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="animate__animated animate__fadeIn">
            <h4 className='mb-4 mt-3 text-center'>Create Your Event</h4>
            <div className="container">
                <div className="row d-flex mx-auto justify-content-center">
                    <div className="col-lg-10 mx-auto mt-3 mb-2">
                        <input type="text" className='form-control shadow py-3 border-primary' {...register('eventTitle')} autoFocus placeholder='Event Title' />
                    </div>
                    <div className="col-lg-7 mt-3">
                        <label htmlFor="imageInput" className="form-label" style={{ color: '#365E32' }}>Upload Event Banner</label>
                        <input type="file" className='form-control py-3 shadow border-primary' id="imageInput" onChange={handleFileChange} />
                    </div>
                    <div className="col-lg-3 mt-3">
                        <label htmlFor="dateInput" className="form-label" style={{ color: '#365E32' }}>Event Date</label>
                        <input type="date" className='form-control py-3 shadow border-primary' id="dateInput" {...register('eventDate')} />
                    </div>
                    <div className="col-lg-10 mt-3">
                        <label htmlFor="eventType" className="form-label" style={{ color: '#365E32' }}>Event Type</label>
                        <input type="text" className='form-control py-3 shadow border-primary' placeholder='e.g., Conference, Webinar, Workshop' {...register('eventType')} />
                    </div>
                    <div className="col-lg-10 mt-3">
                        <label htmlFor="eventLocation" className="form-label" style={{ color: '#365E32' }}>Location</label>
                        <input type="text" className='form-control py-3 shadow border-primary' placeholder='Enter event location' {...register('location')} />
                    </div>
                </div>
                <div className="row d-grid mt-3">
                    <div className="col-lg-10 mx-auto mb-4">
                        <label htmlFor="eventDescription" className="form-label fs-6" style={{ color: '#365E32' }}>Event Description</label>
                        <textarea className="form-control shadow py-3 border-primary" id="eventDescription" {...register('description')} rows="8" placeholder="Describe your event here..."></textarea>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary text-center mx-auto py-2 mb-3 d-grid mx-auto'>Create Event</button>
        </form>
    );
};

export default Write;
