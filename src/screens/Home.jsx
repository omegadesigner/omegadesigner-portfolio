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
                <div className='Home-profile-text'>
                <p>
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
                <p>
                I pride myself not on graphic design but on logical systems
                and functionality. Complicated data structures and challenging 
                cause-effect relationships are where I find the most satisfaction
                in what I do. If you are looking for someone to help figure out
                the moving parts for game logic or an app that returns mutated 
                values back to the user I would love to collaborate. I look 
                forward to working with you.
                </p>
                </div>
            </div>
        </div>
    );
}

export default Home;