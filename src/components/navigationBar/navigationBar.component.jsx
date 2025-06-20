import { Outlet } from "react-router-dom"
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigationBar.styles.scss'


const NavigationBar = () => {
    return (
        <Fragment>
            <div className="nav-bar">
                <Link to='/' className="logo-container">
                    <CrwnLogo />
                </Link>
                <div className="nav-links-container" >
                    <Link className="nav-link">this will be link to shop</Link>
                    <Link to='/sign-in' className="nav-link">Sign-In</Link>
                    <Link to='/trial' className="nav-link">try this calculator</Link>

                </div>
            </div>




            <Outlet />


        </Fragment>

    )
}

export default NavigationBar;  //exporting the component so that it can be used in other files.