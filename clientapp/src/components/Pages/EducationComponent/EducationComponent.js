import './EducationComponent.css';
import { } from '@mui/material';
import { useEffect, useState } from 'react';

const EducationComponent = () => {
    const [educations, setEducation] = useState([]);

    const getEducation = async () => {
        const data = await fetch('/education/getEducation');
        const response = await data.json();
        setEducation(response);
    }

    useEffect(() => {
        getEducation();
    }, [])

    return (
        <>
            <div className='d-flex flex-column'>
                {
                    educations.map((education, index) => {
                        return (
                            <div className='my-1 d-flex flex-column'>
                                <strong className='p-1 bg-black text-white' style={{ maxWidth: "300px" }} key={index}>{education.Institute}</strong>
                                <div className='ms-5'>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default EducationComponent;