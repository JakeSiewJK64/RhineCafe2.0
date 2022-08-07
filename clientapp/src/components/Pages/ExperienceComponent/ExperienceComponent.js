import './ExperienceComponent.css';
import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Chip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExperienceComponent = () => {
    const [experiences, setExperiences] = useState([]);
    const { t } = useTranslation();

    const getExperiences = async () => {
        const data = await fetch('/experience/getExperiences');
        const response = await data.json();
        setExperiences(response);
    }

    useEffect(() => {
        getExperiences();
    }, [])

    return (
        <>
            {
                experiences ?
                    experiences.map((experience, index) => {
                        return (
                            <div key={index} className="m-2">
                                <Accordion elevation={0} className='experience-container' square={true}>
                                    <AccordionSummary expandIcon={"V"}>
                                        <div className="d-flex flex-column w-100">
                                            <h4>{experience.CompanyName}</h4>
                                            <h5>{t('Category')}: {experience.Category}</h5>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className='text-center'>
                                            <img src={experience.CompanyImage} alt="companyimage" style={{ "maxWidth": "300px" }} className="mb-3" />
                                        </div>
                                        <Typography>
                                            <strong>{t('Duration')}:</strong> {experience.Duration} {t('Month')}</Typography>
                                        <Typography>{experience.Description}</Typography>
                                        <Typography fontWeight="bold">{t('Tools')}: </Typography>
                                        {
                                            experience.Tools.map((tool, index) => {
                                                return (
                                                    <Chip key={index} label={tool} color={index % 2 === 0 ? "warning" : index % 3 === 0 ? "info" : index % 4 === 0 ? "success" : "primary"} variant="outlined" className="m-1" />
                                                )
                                            })
                                        }
                                        <Typography fontWeight="bold">{t('Languages')}: </Typography>
                                        {
                                            experience.Languages.map((language, index) => {
                                                return (
                                                    <Chip key={index} label={language} color={index % 2 === 0 ? "warning" : index % 3 === 0 ? "info" : index % 4 === 0 ? "success" : "primary"} variant="outlined" className="m-1" />
                                                )
                                            })
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )
                    })
                    :
                    <>
                    </>
            }
        </>
    )
}

export default ExperienceComponent;