import { createUserAuthenticationUsingEmailAndPassword, createUserDocumentFromAuthentication, signInUserAuthenticationUsingEmailAndPassword } from "../../utilities/firebase/firebase.util";
import { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import Button from "../button/Button.component";


import { signInWithGooglePopup } from "../../utilities/firebase/firebase.util";






const defaultFormFields = {
    Email: "",
    Password: "",
}


const SignIn = () => {
    const [FormFields, setFormFields] = useState(defaultFormFields);
    const { Email, Password } = FormFields;//destructuring

    const [canSubmit, setCanSubmit] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // Only allow submit if all fields are filled and passwords match
        if (
            Email &&
            Password
        ) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    }, [Email, Password,]);

    /**
     * @param {Event} event 
     */
    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...FormFields, [name]: value });

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
        setErrorMessage("");
    }


    const signInWithGoogle = async () => {
        try {
            let response = await signInWithGooglePopup();
            await createUserDocumentFromAuthentication(response.user);
        } catch (error) {
            console.error('error in sign in', error);
        }
    }


    /**
     * @param {Event} event 
     *
     */

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!canSubmit) {
            return;
        }
        try {
            let response = await signInUserAuthenticationUsingEmailAndPassword(Email, Password);
            console.log('response', response);
            resetFormFields();
        } catch (error) {
            console.error("error at creation, ", error);
            setErrorMessage(error.code);
        }
    }


    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>

            <form onSubmit={handleSubmit}>



                <FormInput label="Email" type="email" required onChange={handleInput} name="Email" value={Email} />
                <FormInput label="Password" type="password" required onChange={handleInput} name="Password" value={Password} />
                {errorMessage && <div className="error-message"><span>{errorMessage}</span></div>}

                <div className="buttons-container">
                    <Button buttonType={'default'} type="submit" disabled={!canSubmit} >Sign in</Button>
                    <Button buttonType={'google'} onClick={signInWithGoogle} type='button' >Sign in with Google</Button>
                </div>
            </form>
        </div>
    )




}


export default SignIn; 