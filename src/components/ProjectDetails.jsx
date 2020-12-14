import React from 'react';
import './ProjectDetails.css';

function ProjectDetails(props) {
    return (
        <div className='ProjectDetails-layout'>
            <div className='project-popup-left'>
                <img 
                    className='project-popup-img'
                    src={props.project.thumbnail_url}
                    alt={props.project.name}
                />
                <div className='project-popup-links'>
                <a target="_blank" rel="noopener noreferrer" className='contact-info-link' className='project-popup-link' href={props.project.github_url}>Github Link</a>
                <a target="_blank" rel="noopener noreferrer" className='contact-info-link' className='project-popup-link' href={props.project.deployment_url}>Deployed Site</a>
                </div>
            </div>
            <div className='project-popup-right'>
                <h1>{props.project.name}</h1>
                <div className='project-popup-info'>
                    <div className='project-popup-skills'>
                        {props.project.skills.map((skill, index) => (
                        <div className='project-popup-skill' key={index}>
                            <img className='project-popup-skill-img' src={skill.thumbnail_url}/>
                            {skill.name}
                        </div>
                        ))}
                    </div>
                    <p className='project-popup-text'>{props.project.long_description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;