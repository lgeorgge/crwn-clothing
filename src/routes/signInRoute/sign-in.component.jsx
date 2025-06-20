
import { createUserDocumentFromAuthentication, signInWithGooglePopup } from '../../utilities/firebase/firebase.util'


const SignIn = () => {




    const signInToGoogle = async () => {

        let signingIn = false;
        if (signingIn) return;
        signingIn = true;

        try {
            let response = await signInWithGooglePopup();
            createUserDocumentFromAuthentication(response.user)
        }
        catch (error) {
            console.error('error in sign in', error);
        }
        finally {
            signingIn = false;
        }

    }





    return (
        <div>
            this will be sign in form
            <button onClick={signInToGoogle}>sign in to google</button>
        </div>

    )
}

export default SignIn;