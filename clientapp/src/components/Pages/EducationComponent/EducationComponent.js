import './EducationComponent.css';
import { } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const EducationComponent = () => {

    const { t } = useTranslation();
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
            <div className='d-flex flex-column m-2'>
                {
                    educations.map((education, index) => {
                        return (
                            <div key={index}>
                                <div className='d-flex flex-row'>
                                    <strong className='my-auto me-5'>{moment(education.StartDate).format('YYYY-MM-DD')}</strong>
                                    <div className='my-1 d-flex flex-column'>
                                        <strong className='p-1 bg-black text-white' style={{ maxWidth: "300px" }} key={index}>{education.Institute}</strong>
                                        <div className='mt-2'>
                                            <div className='d-flex flex-row'>
                                                <strong>{t('Duration')}:&nbsp;</strong>
                                                <span>{education.Duration} {t('Year')}</span>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <strong>{t('Qualification')}:&nbsp;</strong>
                                                <span>{education.Qualification}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default EducationComponent;