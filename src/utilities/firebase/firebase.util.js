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
} from "firebase/auth";

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
provider.getCustomParameters({
	prompt: "select_account",
});

export const authentication = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(authentication, provider);
