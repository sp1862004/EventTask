import { Link } from 'react-router-dom';
import 'animate.css';  


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand ms-5 event-brand animate__animated animate__bounceIn">
                        SP E V <i className="fa-regular fa-calendar-check"></i> <i className="fa-regular fa-calendar-check"></i> N T S
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active animate__animated animate__fadeInDown text-hover" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/add'} className="nav-link active animate__animated animate__fadeInDown text-hover" aria-current="page">Create Event</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/signup'} className="nav-link active animate__animated animate__fadeInDown text-hover" aria-current="page">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link active animate__animated animate__fadeInDown text-hover" aria-current="page">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
