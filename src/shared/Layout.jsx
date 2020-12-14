import React, {useState} from 'react';
import Navbar from './Navbar';
import './shared.css';

function Layout(props) {
    const [displayContact, setDisplayContact] = useState("none");
    const [contactInfo, setContactInfo] = useState({
        full_name: "Geoffrey McCabe",
        email: "omegadesigner@hotmail.com",
        linkedin: "https://www.linkedin.com/in/geoffrey-mccabe-omegadesigner/",
        phone: "(954) 805-6805",
        github: "https://github.com/omegadesigner",
        resume: "https://docs.google.com/document/d/1EGd10TQWrSN05xljLVjZmA16WzfFmcAt2Pfg48EcPGk/edit?usp=sharing"
    });
    

    function handleDisplayContact() {
        setDisplayContact("flex")
    }
    function handleCloseContact() {
        setDisplayContact("none")
    }

    return (
        <div className='Layout-layout'>
            <Navbar 
                handleDisplayContact={handleDisplayContact}
                contactInfo={contactInfo}
            />
            <div 
                className="contact-modal" 
                style={{display: displayContact}}
            >
                <div className="contact-popup">
                    <div 
                        className="close"
                        onClick={handleCloseContact}>&times;
                    </div>
                    <div className='contact-display'>
        
                        <div className='contact-info'>
                            <h1>{contactInfo.full_name}</h1>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" className='contact-info-link' href={contactInfo.linkedin}>Click Here For Linkedin</a>
                            </div>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" className='contact-info-link' href={contactInfo.resume}>Click Here For My Resume</a>
                            </div>
                            <div>{contactInfo.email}</div>
                            <div>{contactInfo.phone}</div>
                        </div>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default Layout;