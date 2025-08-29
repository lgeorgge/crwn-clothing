import { Outlet } from "react-router-dom"
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigationBar.styles.scss'
import { CartContext } from "../../contexts/cartContext.context";
import { signOutUser } from "../../utilities/firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useSelector, useDispatch } from "../../../node_modules/react-redux/dist/react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";


const NavigationBar = () => {
    // const { user } = useContext(UserContext);


    const user = useSelector((state) => state.user.user)

    // const { isCartOpen } = useContext(CartContext);

    const isCartOpen = useSelector(selectIsCartOpen)






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
                    <CartIcon className="nav-link" />
                    {isCartOpen && < CartDropdown />}

                </div>
            </div>
            <Outlet />


        </Fragment>

    )
}

export default NavigationBar;  //exporting the component so that it can be used in other files.