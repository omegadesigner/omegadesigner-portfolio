import React from 'react';
import SkillList from '../components/SkillList'
import './Home.css';

function Home(props) {

    return (
        <div className='Home-layout'>
            <SkillList />
            <div className='Home-profile'>
                <img 
                    className='Home-profile-img'
                    src="https://i.imgur.com/dE79Uhh.jpg?3"
                    alt="Profile Image"
                />
                <p className='Home-profile-text'>
                Junior Developer with over 10 years of 
                experience who is now making a 
                transition from hardware to software. 
                My methodology is based on analytical 
                abstraction, coupled with creative 
                problem-solving to create consistent and 
                reliable results. My experience brings 
                together troubleshooting, customer 
                communication, and resource management 
                to help create quality user experiences. 
                The challenge of creating these 
                experiences, as well as their unending 
                variety, is what has prompted my career 
                pivot to Software Development.
                </p>
            </div>
        </div>
    );
}

export default Home;