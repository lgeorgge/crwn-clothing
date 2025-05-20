
import { signInWithGooglePopup } from '../../utilities/firebase/firebase.util'


const SignIn = () => {
    const signInTOGoogle = async () => {
        let response = await signInWithGooglePopup();
        console.log(response);
    }





    return (
        <div>
            this will be sign in form
            <button onClick={signInTOGoogle}>sign in to google</button>
        </div>

    )
}

export default SignIn;