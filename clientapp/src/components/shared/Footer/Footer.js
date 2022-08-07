import './Footer.css';
import Flex from '@react-css/flex';
import { Link } from 'react-router-dom';

const Footer = ({ routes }) => {
    return (
        <footer className="bg-black text-white w-100 footer-container">
            <Flex flexDirection='column' style={{ "margin": "1em" }}>
                <ol className="link-container-footer justify-content-center m-5 flex-wrap">
                    {
                        routes.map((route, index) => {
                            return (
                                <Link to={route.route} key={index} className='text-decoration-none'>
                                    <li className="route-container mx-4 text-uppercase text-white" key={index} style={{ "cursor": "pointer"}}>
                                        <strong>{route.name}</strong>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ol>
                <div className='mx-auto text-center'>
                    <strong>JakeSiewJK64 | {new Date().getFullYear()}</strong>
                </div>
            </Flex>
        </footer >
    )
}

export default Footer;