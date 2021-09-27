import React from 'react';
import {Nav,Navbar,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink,withRouter} from 'react-router-dom';
import {HomeRounded,Telegram} from "@material-ui/icons";
import Custombutton from '../Button/Button';
import './Header.css';
import resumeData from '../../utils/resumeData';
const Header = (props) => {
    const pathName=props?.location?.pathname;

    
    return (
<Navbar expand="lg" sticky="top" className="header">
    {/* homelink */}
        <Nav.Link as={NavLink} to="/" className='header_navlink'>
            <Navbar.Brand className="header_home">
            <HomeRounded/>
            </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle/>

        <Navbar.Collapse>
            <Nav className='header_left'>
                {/* resume link */}

                <Nav.Link as={NavLink} to="/" className={pathName === "/" ? "header_link_active":"header_link"}>
                    Resume
                </Nav.Link>
                {/* portfolio link */}

                {/* <Nav.Link as={NavLink} to="/portfolio" className={pathName === "/" ? "header_link_active":"header_link"}>
                    portfolio
                </Nav.Link> */}
            </Nav>
            <div className="header_right">
            {Object.keys(resumeData.socials).map((key)=>(
                <a href={resumeData.socials[key].link} >
                    {resumeData.socials[key].icon}
                </a>
                ))}

                <Custombutton text={'Hire Me'} icon={<Telegram/>}/>
            </div>
        </Navbar.Collapse>
</Navbar>
    )
}

export default withRouter(Header);
