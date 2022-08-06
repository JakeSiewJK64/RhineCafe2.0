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

const HomeComponent = () => {
    const custom_routes = [
        { path: "/statements", component: <TemplatePage title="Statements" renderPage={<StatementComponent />} /> },
        { path: "/projects", component: <TemplatePage title="Projects" renderPage={<ProjectComponent />} /> },
        { path: "/experiences", component: <TemplatePage title="Experiences" renderPage={<ExperienceComponent />} /> },
        { path: "/education", component: <TemplatePage title="Education" renderPage={<EducationComponent />} /> },
        { path: "**", component: <TemplatePage title="Experiences" renderPage={<StatementComponent />} /> },
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