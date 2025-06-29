import { createUserAuthenticationUsingEmailAndPassword, createUserDocumentFromAuthentication } from "../../utilities/firebase/firebase.util";
import { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'







const defaultFormfield = {
    DisplayName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
}


const SignUp = () => {
    const [FormFields, setFormFields] = useState(defaultFormfield);
    const { DisplayName, Email, Password, ConfirmPassword } = FormFields;//destructuring

    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        // Only allow submit if all fields are filled and passwords match
        if (
            DisplayName &&
            Email &&
            Password &&
            ConfirmPassword &&
            Password === ConfirmPassword
        ) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    }, [DisplayName, Email, Password, ConfirmPassword]);

    /**
     * @param {Event} event 
     */
    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...FormFields, [name]: value });

    }


    const clearForm = () => {
        setFormFields(defaultFormfield);
    }


    /**
     * @param {Event} event 
     */

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!canSubmit) {
            return;
        }
        try {
            const response = await createUserAuthenticationUsingEmailAndPassword(Email, Password);
            console.log(response.user);
            await createUserDocumentFromAuthentication(response.user, { displayName: DisplayName });
            clearForm();


        } catch (error) {
            console.error("error at creation, ", error);


        }
    }

    // Derived value to check if passwords match
    const passwordsMatch = Password === ConfirmPassword || ConfirmPassword === "";

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up using Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" required onChange={handleInput} name="DisplayName" value={DisplayName} />

                <FormInput label="Email" type="email" required onChange={handleInput} name="Email" value={Email} />

                <FormInput label="Password" type="password" required onChange={handleInput} name="Password" value={Password} />

                <FormInput label="Confirm Password" type="password" required onChange={handleInput} name="ConfirmPassword" value={ConfirmPassword} />
                <span id="passwordWarning">
                    {!passwordsMatch && <span style={{ color: 'red' }}>Passwords do not match</span>}
                </span>
                <button type="submit" disabled={!canSubmit} >Sign up</button>
            </form>
        </div>
    )




}


export default SignUp; 