import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes
import 'react-toastify/dist/ReactToastify.css'; // Add this in your main file
import './App.css';
import Header from './Layout/Header';
import Home from './PAGES/Home/Home';
import ShowMorePage from './PAGES/Home/ShowMorePage';
import Index from './PAGES/Write/Index';
import Update from './PAGES/Write/Update';
import Footer from './Layout/Footer';
import Write from './PAGES/Write/Write';
import SignIn from './PAGES/Home/Signin';
import SignUp from './PAGES/Home/Signup';
import ContactUs from './PAGES/Home/Contect';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Index" element={<Index />} />
          <Route path="/ShowMorePage/:id" element={<ShowMorePage />} />
          <Route path="/edit/:id" element={<Update />} />
          <Route path="/add" element={<Write/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
        </Routes>
        <Footer/>
      </Router >
    </>
  )
}

export default App

