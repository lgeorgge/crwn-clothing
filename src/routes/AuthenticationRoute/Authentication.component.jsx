import { createUserDocumentFromAuthentication, signInWithGooglePopup, signInWithGoogleRedirect, authentication } from '../../utilities/firebase/firebase.util'

//import { getRedirectResult, onAuthStateChanged } from 'firebase/auth';
//import { useEffect, } from 'react';

import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';
import './authentication.styles.scss';

const Authentication = () => {



    // useEffect(() => {
    //     fetchRedirectResult();
    // }, []);
    // const fetchRedirectResult = async () => {
    //     try {
    //         const result = await getRedirectResult(authentication);
    //         if (result) {
    //             console.log("Redirect result:", result.user);
    //             await createUserDocumentFromAuthentication(result.user);
    //             return;
    //         }
    //     } catch (error) {
    //         console.error("Error getting redirect result:", error);
    //     }

    //     // Fallback: check if user is already logged in
    //     onAuthStateChanged(authentication, async (user) => {
    //         if (user) {
    //             console.log("✅ User already signed in:", user);
    //             await createUserDocumentFromAuthentication(user);
    //         }
    //     });
    // };





    // const signInToGoogleRedirect = async () => {
    //     try {
    //         await signInWithGoogleRedirect();
    //         // The actual result will be handled by useEffect/redirect result handler
    //     } catch (error) {
    //         console.error('error in redirect sign in', error);
    //     }
    // }






    return (
        <div className="authentication-container">
            <SignUp />
            <SignIn />
        </div>

    )
}

export default Authentication;
