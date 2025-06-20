// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// we also need to import the authentication library
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	User,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyARpIybkUtDlKQzrnfylUFoMMl2tM3BZiE",
	authDomain: "crwn-clothing-db-f8a2c.firebaseapp.com",
	projectId: "crwn-clothing-db-f8a2c",
	storageBucket: "crwn-clothing-db-f8a2c.firebasestorage.app",
	messagingSenderId: "433254127323",
	appId: "1:433254127323:web:1be8b6f952cdbb8b605efe",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const authentication = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(authentication, provider);

export const db = getFirestore();

/**
 *
 * @param  {User} userAuthentication
 */

export const createUserDocumentFromAuthentication = async (
	userAuthentication
) => {
	const userReference = doc(db, "users", userAuthentication.uid);
	const userSnapshot = await getDoc(userReference);
	console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email, uid } = userAuthentication;
		const createdAt = new Date();

		try {
			await setDoc(userReference, {
				uid,
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.error(`error creating user document ${error}`);
		}
	}
};
