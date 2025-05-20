//import "./categories.styles.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/homeRoute/home.component";
import NavigationBar from "./components/navigationBar/navigationBar.component";
import SignIn from "./routes/signInRoute/sign-in.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path="sign-in" element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
