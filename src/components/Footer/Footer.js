
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <p> &copy; RGI. All rights reserved.
                <a href="https://www.linkedin.com/in/radoslav-iliev-92a73520b/" target="_blank" rel='noreferrer'>
                    <FaLinkedin color="white" size='30px' />
                </a>
            </p>

        </footer>
    );
};
export default Footer;