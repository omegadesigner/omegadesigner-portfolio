import React, {useState} from 'react';
import SkillCards from './SkillCards'
import './SkillList.css';

function SkillList(props) {
    const [skillData, setSkillData] = useState(
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
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/node-js.png'},
            {name: 'MongoDb', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/mongodb.png'},
            {name: 'Express', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/express.png'},
            {name: 'C++', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/cplusplus.png'},
            {name: 'Java', 
            thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/java.png'}
        ])
    return (
        <div className='SkillList-layout'>
            <div className='SkillList-window'>
                <div className='SkillList-window-header'>
                    <h2>Skills</h2>
                </div>
                <div className='SkillList-window-container'>
                    {skillData.map((skill, index) => (
                        <SkillCards key={index} skill={skill}/>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SkillList;