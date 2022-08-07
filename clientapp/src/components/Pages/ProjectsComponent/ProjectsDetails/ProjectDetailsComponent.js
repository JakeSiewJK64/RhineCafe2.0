import './ProjectDetailsComponent.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProjectDetailsComponent = () => {

    const { t } = useTranslation();

    const [data, setData] = useState(null);
    let { id } = useParams();

    const getProjectById = async () => {
        const row = await fetch(`/projects/getProjectById/${id}`);
        const data = await row.json();
        setData(data);
    }

    useEffect(() => {
        if (data === null) {
            getProjectById();
        }
    });

    return (
        <>
            <div style={{ "margin": "2rem" }}>
                {
                    data ?
                        <div className='d-flex flex-column'>
                            <strong>{moment(data.StartDate).format('yyyy-MM-DD')}</strong>
                            <h1>{data.Name}</h1>
                            <hr />
                            <div>
                                {data.Description}
                            </div>
                            <strong>{t('Tools')}:</strong>
                            <div className='d-flex flex-row flex-wrap'>
                                {
                                    data.Tools.map((tool, index) => {
                                        return (
                                            <Chip label={tool} key={index} variant="outlined" color={index % 2 === 0 ? "primary" : "warning"} className='mx-1 m-1' />
                                        )
                                    })
                                }
                            </div>
                            <div className='d-flex flex-column my-2'>
                                <a href={data.GithubRepo} className="my-2 text-black text-decoration-none ms-auto">
                                    <strong>{t('GithubRepo')}</strong>
                                </a>
                                <a href={data.URL} className="my-2 text-black text-decoration-none ms-auto">
                                    <strong>{t('ProjectURL')}</strong>
                                </a>
                            </div>
                            {
                                data.Screenshots && data.Screenshots.length > 0 ?
                                    <>
                                        <hr />
                                        <h1>Screenshots</h1>
                                        {
                                            data.Screenshots.map((screenshot, index) => {
                                                return (
                                                    <div style={{ "border": "solid black 1px" }} key={index} className="my-2">
                                                        <img src={screenshot} alt="" className='w-100' />
                                                    </div>
                                                )
                                            })
                                        }
                                    </> : <></>
                            }
                        </div>
                        : <></>
                }
            </div>
        </>
    )
}

export default ProjectDetailsComponent;