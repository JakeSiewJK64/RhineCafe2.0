import './NavigationBarComponent.css';
import logo from '../../../assets/img/logo.svg';

const NavigationBarComponent = ({ routes }) => {

    return (
        <>
            <div className="w-50">
                <ul>
                    <img src={logo} alt="logo" />
                    {
                        routes.map((route, i) => {
                            return (
                                <div className="link-container" key={i}>
                                    <li>
                                        <strong>{route.name}</strong>
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default NavigationBarComponent;