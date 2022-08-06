import StatementComponent from '../StatementComponent/StatementComponent';
import ProjectComponent from '../ProjectsComponent/ProjectsComponent';
import './HomeComponent.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const HomeComponent = () => {
    const custom_routes = [
        { path: "/", component: StatementComponent },
        { path: "/projects", component: ProjectComponent },
    ]
    return (
        <div className="d-flex flex-row w-100" style={{ "paddingTop": "10em" }}>
            <div className="d-flex flex-column">
                <Router>
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
                </Router>
            </div>
        </div>
    )
}

export default HomeComponent;