import StatementComponent from '../StatementComponent/StatementComponent';
import ProjectComponent from '../ProjectsComponent/ProjectsComponent';
import './HomeComponent.css';
import {
    Switch,
    Route,
} from "react-router-dom";

const HomeComponent = ({ routes }) => {
    const custom_routes = [
        { path: "/statement", component: StatementComponent },
        { path: "/projects", component: ProjectComponent },
    ]
    return (
        <div className="d-flex flex-row w-100" style={{ "paddingTop": "10em" }}>
            <div className="d-flex flex-column">
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