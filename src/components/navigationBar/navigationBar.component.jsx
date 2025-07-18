import { Outlet } from "react-router-dom"
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigationBar.styles.scss'
import { UserContext } from "../../contexts/userContext.context";
import { signOutUser } from "../../utilities/firebase/firebase.util";


const NavigationBar = () => {
    const { user } = useContext(UserContext);

    


    return (
        <Fragment>
            <div className="nav-bar">
                <Link to='/' className="logo-container">
                    <CrwnLogo />
                </Link>
                <div className="nav-links-container">
                    

                    {user ? (<span className="nav-link" onClick={signOutUser}> Sign out</span>) : (<Link to='/Account' className="nav-link">Sign-In</Link>)}

                    <Link to='/trial' className="nav-link">try this calculator</Link>
                    <Link to='/Shop' className="nav-link">Shop</Link>
                </div>
            </div>
            <Outlet />


        </Fragment>

    )
}

export default NavigationBar;  //exporting the component so that it can be used in other files.