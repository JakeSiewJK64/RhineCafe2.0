import './ProjectsComponent.css';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProjectsComponent = () => {

    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const rows = await fetch('/projects/getProjects');
        const data = await rows.json();
        setProjects(data);
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className='d-flex flex-column'>
            {
                projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/projects/detail/${project._id}`} className="text-decoration-none text-black">
                                <div className='d-flex flex-row p-1'>
                                    <strong className='my-auto me-5'>{moment(project.StartDate).format('YYYY-MM-DD')}</strong>
                                    <div className='my-1 d-flex flex-column'>
                                        <strong className='p-1 bg-black text-white' style={{ maxWidth: "300px" }} key={index}>{project.Name}</strong>
                                        <div className='mt-2'>
                                            <strong>{t('Tools')}:&nbsp;</strong>
                                            <div className='d-flex flex-row flex-wrap'>
                                                {
                                                    project.Tools.map((tool, index) => {
                                                        return (
                                                            <Chip key={index} label={tool} color={index % 2 === 0 ? "warning" : index % 3 === 0 ? "info" : index % 4 === 0 ? "success" : "primary"} variant="outlined" className="m-1" />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className='d-flex'>
                                <a href={project.URL} target="_blank" rel="noreferrer" className="project-url ms-auto me-1">
                                    {t('SeeProject')}
                                </a>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectsComponent;