import './HomeComponent.css';
import StatementComponent from '../StatementComponent/StatementComponent';
import ProjectComponent from '../ProjectsComponent/ProjectsComponent';
import ExperienceComponent from '../ExperienceComponent/ExperienceComponent';
import TemplatePage from '../../shared/TemplatePage/TemplatePage';
import {
    Switch,
    Route,
} from "react-router-dom";
import EducationComponent from '../EducationComponent/EducationComponent';
import ProjectDetailsComponent from '../ProjectsComponent/ProjectsDetails/ProjectDetailsComponent';
import { useTranslation } from 'react-i18next';

const HomeComponent = () => {

    const { t } = useTranslation();

    const custom_routes = [
        { path: "/statements", component: <TemplatePage title={t('StatementsRoute')} renderPage={<StatementComponent />} /> },
        { path: "/experiences", component: <TemplatePage title={t('ExperienceRoute')} renderPage={<ExperienceComponent />} /> },
        { path: "/education", component: <TemplatePage title={t('EducationRoute')} renderPage={<EducationComponent />} /> },
        { path: "/projects", component: <TemplatePage title={t('ProjectsRoute')} renderPage={<ProjectComponent />} /> },
        { path: "/projects/detail/:id", component: <TemplatePage title={t('ProjectDetailsRoute')} renderPage={<ProjectDetailsComponent />} /> },
        { path: "**", component: <TemplatePage title={t('StatementsRoute')} renderPage={<StatementComponent />} /> },
    ]
    return (
        <div className="d-flex flex-row w-100" style={{ "paddingTop": "10em" }}>
            <div className="d-flex flex-column w-100">
                <Switch>
                    {
                        custom_routes.map((route, index) => {
                            return (
                                <Route exact path={route.path} key={index}>
                                    {route.component}
                                </Route>
                            )
                        })
                    }
                </Switch>
            </div>
        </div>
    )
}

export default HomeComponent;