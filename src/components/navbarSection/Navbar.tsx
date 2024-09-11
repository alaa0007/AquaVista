import React from 'react'
import classes  from  './navbar.module.css'
import { Link } from 'react-router-dom'
import AquaButton from '../common/buttons/AquaButton'


/**
 * The main navbar component. This component renders the main navigation bar for
 * the entire application.
 * @returns {React.ReactElement} The navbar component.
 */
const Navbar : React.FC = (): React.ReactElement => {
    return (
        <main className={classes.contianer}>
            <div className={classes.logo}>
                <p>LOGO</p>
            </div>
            <nav>
                <ul className={classes.navItem}>
                    <Link to="/">Accureil</Link>
                    <Link to="aboutus">About Us</Link>
                    <Link to="aquavista">AquaVista</Link>
                    <Link to="/">Contact Us</Link>
                </ul>
            </nav>
            <div className={classes.loginBtn}>
                <div>
                    <Link to="/signin">
                        <AquaButton title="Sign In" />
                    </Link>
                </div>
                <div >
                    <Link to="/signup">
                        <AquaButton title="Sign Up" />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Navbar;