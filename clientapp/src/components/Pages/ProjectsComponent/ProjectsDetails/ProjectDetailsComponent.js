import './ProjectDetailsComponent.css';
import { useParams } from 'react-router-dom';

const ProjectDetailsComponent = () => {
    let { id } = useParams();
    return (
        <>
            <div className='d-flex flex-column'>
                {id}
            </div>
        </>
    )
}

export default ProjectDetailsComponent;