import React, {useState} from 'react';
import ProjectCards from '../components/ProjectCards'
import './Projects.css';


function Projects(props) {
    const [projectData, setprojectData] = useState([
    {
        name: 'Poker Dealer',
        thumbnail_url: 'https://i.imgur.com/Wi6IMTz.png',
        github_url: 'https://github.com/omegadesigner/Poker-Dealer',
        deployment_url: 'https://omegadesigner.github.io/Poker-Dealer/',
        short_description: 'A 5 card poker game where the game logic is coded in Javascript.',
        long_description: 'This is a very basic poker game, the card deck API will create a new deck and shuffle it. The player and their virtual opponent will be dealt five cards each. The two hands will then be compared to determine a winner and display the winning hand on screen for the player. The player will then be asked if they wish to play again.',
        skills: 
        [
            {name: 'Html 5', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/html.png'},
            {name: 'CSS 3', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/css3.png'},
            {name: 'Javascript', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/javascript.png'}
        ]
    },
    {
        name: 'Mind Your Money',
        thumbnail_url: 'https://i.imgur.com/NIgRTCQ.png',
        github_url: 'https://github.com/omegadesigner/Mind-Your-Money',
        deployment_url: 'https://mindyourmoney.netlify.app/',
        short_description: 'A collaboration on a svings and goal mangement app.',
        long_description: 'This app is a useful tool that individuals can use to manage their money while allocating it into separate accounts for specific goals. Users can update their account balances through the spreadsheet listed on the app. These changes will be reflected in the progress bar for each goal. Goals and progress can be edited by the user.',
        skills: 
        [
            {name: 'Html 5', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/html.png'},
            {name: 'CSS 3', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/css3.png'},
            {name: 'Javascript', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/javascript.png'},
            {name: 'Heroku', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/heroku.png'},
            {name: 'Node JS', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/node-js.png'},
            {name: 'MongoDb', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/mongodb.png'},
            {name: 'Express', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/express.png'}
        ]
    },
    {
        name: 'Custom Portfolio',
        thumbnail_url: 'https://i.imgur.com/2CwdRgB.png',
        github_url: 'https://github.com/omegadesigner/Custom-Portfolio',
        deployment_url: 'https://omegadesigner-portfolio.netlify.app/',
        short_description: 'My current project, a free to use portfolio template.',
        long_description: 'Custom Portfolio Is an open source free to use portfolio starter. The idea is that someone can clone down the git repo and deploy the site to heroku and netlify, or whatever package their chip they choose, and then adjust the username and password for custom login. At that point they will be able to add examples of their project work, skills they wish to showcase, and receive messages from anyone browsing the site who wishes to contact them. They will be able to add edit and delete new projects and skills along with being able to delete read messages.',
        skills: 
        [
            {name: 'Html 5', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/html.png'},
            {name: 'CSS 3', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/css3.png'},
            {name: 'Javascript', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/javascript.png'},
            {name: 'Ruby', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/ruby.png'},
            {name: 'Rails', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/rails.png'},
            {name: 'PostgreSQL', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/postgresql.png'},
            {name: 'Heroku', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/heroku.png'},
            {name: 'Node JS', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/node-js.png'}
        ]
    }
    ])

    return (
        <div className='Projects-layout'>
            <div className='Projects-window-header'>
                <h1>Projects</h1>
                <p>Here I have a few past and current projects. Click the cards for more details.</p>
            </div>
            <div className='Projects-window-list'>
                {projectData.map((project, index) => (
                    <ProjectCards
                        key={index}
                        project={project}
                    />
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;