import './NavigationBarComponent.css';
import logo from '../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NavigationBarComponent = ({ routes }) => {

    useEffect(() => {
        const menuBtn = document.getElementById('menuButton');
        const menuPage = document.getElementById('menuPage');
        let menuOpen = false;
        if (menuBtn !== null) {
            menuBtn.addEventListener('click', () => {
                if (!menuOpen) {
                    menuBtn.classList.add('open');
                    menuPage.classList.add('open');
                    menuOpen = true;
                    return;
                }

                menuBtn.classList.remove('open');
                menuPage.classList.remove('open');
                menuOpen = false;
            })
        }
    }, [])


    return (
        <>
            <div className="w-50 nav-container-desktop">
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
            <div className='nav-container-mobile'>
                <div className='menu-btn' id='menuButton'>
                    <div className='menu-btn__burger'></div>
                </div>
            </div>
            <div className='menu-page' id='menuPage'>
                <div className='d-flex flex-column m-auto text-center'>
                    {
                        routes.map((route, index) => {
                            return (
                                <Link to={route.route} key={index} className='my-3 text-white text-decoration-none'>
                                    <h2>{route.name}</h2>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default NavigationBarComponent;