import './ExperienceComponent.css';
import { useState } from 'react';

const ExperienceComponent = () => {
    const [experiences, setExperiences] = useState([]);

    const getExperiences = async () => {
        const data = await fetch('/experience/getExperiences');
        const response = await data.json();
        setExperiences(response);
    }

    getExperiences();

    return (
        <>
            {
                experiences ?
                    experiences.map((experience, index) => {
                        return (
                            <div className='experience-container' key={index}>
                                {experience.CompanyName}
                            </div>
                        )
                    })
                    :
                    <></>
            }
        </>
    )
}

export default ExperienceComponent;