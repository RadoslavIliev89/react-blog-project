import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container">
            
            <Link to="/">
              <h1>Blog</h1>
            </Link>
                <section className="section-container">
                    <ul>
                        <li><Link className="register-button" to={"/register"} >Register</Link></li>
                        <li><Link to={"/login"} >Login</Link></li>
                        <li><Link className="create-button" to={"/create"} >Create Post</Link></li>
                    </ul>
                </section>
                
            
        </div>
    );
}
export default Header;