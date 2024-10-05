const Footer = () => {
    return (
        <footer className="footer bg-primary text-light py-4">
            <div className="container text-center mb-3 mt-3">
                <h5 className="mb-3">Stay Connected for Upcoming Events!</h5>
                <div className="social-icons mb-3">
                    <a href="/" className="social-icon mx-2 ">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon mx-2">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon mx-2">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shailesh-patel-3102bb277" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/sp1862004" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <p className="mb-0">© {new Date().getFullYear()} <span className="fw-bold">SP E V <i className="fa-regular fa-calendar-check"></i> <i className="fa-regular fa-calendar-check"></i> N T S</span>. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
