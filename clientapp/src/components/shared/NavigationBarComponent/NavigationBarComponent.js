import './NavigationBarComponent.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MenuItem, Select } from '@mui/material';

import i18n from '../../../utils/i18n';

import logo from '../../../assets/img/logo.svg';
import up from '../../../assets/img/up.svg';
import origin from '../../../assets/img/origin.svg';
import japan from '../../../assets/img/country_flags/japan.png';
import uk from '../../../assets/img/country_flags/uk.png';

const NavigationBarComponent = ({ routes }) => {

    const lang = localStorage.getItem("lang");
    const [language, setLanguage] = useState(lang ? lang : 'en')

    const swapLanguage = (value) => {
        localStorage.setItem("lang", value);
        setLanguage(value);
        i18n.changeLanguage(value);
    }

    const [menuBtn, setMenuBtn] = useState(document.getElementById('menuButton'));
    const [menuPage, setMenuPage] = useState(document.getElementById('menuPage'));
    const [menuOpen, setMenuOpen] = useState(false);
    const [showFAB, setShowFAB] = useState(0);

    const languages = [
        { language: "English", value: "en", img: uk },
        { language: "日本語", value: "jp", img: japan },
    ]

    const closeMenuPage = () => {
        menuBtn.classList.remove('open');
        menuPage.classList.remove('open');
        setMenuOpen(false);
    }

    const getState = () => {
        setMenuBtn(document.getElementById('menuButton'));
        setMenuPage(document.getElementById('menuPage'));
        if (menuBtn !== null) {
            menuBtn.addEventListener('click', () => {
                if (!menuOpen) {
                    menuBtn.classList.add('open');
                    menuPage.classList.add('open');
                    setMenuOpen(true);
                    return;
                }
                closeMenuPage();
            })
        }
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY !== 0) {
            setShowFAB(true)
            return;
        }
        setShowFAB(false);
    })

    return (
        <>
            <div className='language-bar-container'>
                <Select
                    style={{ "maxHeight": "50px" }}
                    required
                    label="Format"
                    labelId="format"
                    value={language}
                    onChange={(x) => { swapLanguage(x.target.value) }}
                    name="format"
                >
                    {
                        languages.map(language => {
                            return (
                                <MenuItem key={language.value} value={language.value}>
                                    <img src={language.img} style={{ width: "30px" }} alt="country_flag" />&nbsp;
                                    {language.language}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </div>
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
            <div className='nav-container-mobile' onClick={() => { getState() }}>
                <div className='menu-btn' id='menuButton'>
                    <div className='menu-btn__burger'></div>
                </div>
            </div>
            <div className='menu-page' id='menuPage'>
                <div className='d-flex flex-column m-auto text-center'>
                    {
                        routes.map((route, index) => {
                            return (
                                <Link to={route.route} key={index} onClick={() => { closeMenuPage() }} className='my-3 text-white text-decoration-none'>
                                    <h2>{route.name}</h2>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            {
                <div className={`${showFAB ? "backtotop-in" : "backtotop-out"} d-flex flex-column`} onClick={() => window.scrollTo(0, 0)}>
                    <img src={up} alt="" style={{ "width": "20px" }} className="origin-animation" />
                    <img src={origin} alt="" className='origin-container' />
                </div>
            }
        </>
    )
}

export default NavigationBarComponent;