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
	createUserWithEmailAndPassword,
	UserCredential,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const authentication = getAuth(fireBaseApp);

export const signInWithGooglePopup = () =>
	signInWithPopup(authentication, googleProvider);

export const signInWithGoogleRedirect = () => {
	return signInWithRedirect(authentication, googleProvider);
};

export const db = getFirestore();

/**
 *
 * @param  {User} userAuthentication
 */

export const createUserDocumentFromAuthentication = async ( // creates document equals adding a user to the database
	userAuthentication,
	additionalInformation = {}
) => {
	const userReference = doc(db, "users", userAuthentication.uid);
	const userSnapshot = await getDoc(userReference);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuthentication;
		const createdAt = new Date();

		try {
			await setDoc(userReference, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.error(`error creating user document ${error}`);
		}
	}
	return userReference;
};

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns {UserCredential}
 */

export const createUserAuthenticationUsingEmailAndPassword = async (
	email,
	password
) => {
	if (!email || !password) return; // check if email and password are provided
	return await createUserWithEmailAndPassword(
		authentication,
		email,
		password
	);
};

export const signInUserAuthenticationUsingEmailAndPassword = async (
	email,
	password
) => {
	if (!email || !password) return; // check if email and password are provided
	return await signInWithEmailAndPassword(authentication, email, password);
};

export const signOutUser = async () => await signOut(authentication);


export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(authentication, callback);