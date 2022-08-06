import './Footer.css';
import Flex from '@react-css/flex';
import { Link } from 'react-router-dom';

const Footer = ({ routes }) => {
    return (
        <footer style={{ "position": "relative", "marginTop": "10rem" }} className="bg-black text-white w-100">
            <Flex flexDirection='column' style={{ "margin": "4em" }}>
                <ol className="d-flex flex-row justify-content-center m-5">
                    {
                        routes.map((route, index) => {
                            return (
                                <Link to={route.route} key={index}>
                                    <li className="route-container mx-4 text-uppercase text-white" key={index} style={{ "cursor": "pointer" }}>
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