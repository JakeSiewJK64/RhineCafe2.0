import './NavigationBarComponent.css';
import logo from '../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const NavigationBarComponent = ({ routes }) => {
    return (
        <>
            <div className="w-50">
                <ul>
                    <img src={logo} alt="logo" />
                    {
                        routes.map((route, i) => {
                            return (
                                <Link to={route.route} style={{ "textDecoration": "none" }} className="text-black" key={i}>
                                    <div className="link-container" key={i}>
                                        <li>
                                            <strong>
                                                {route.name}
                                            </strong>
                                        </li>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default NavigationBarComponent;