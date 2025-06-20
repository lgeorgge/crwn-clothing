//import "./categories.styles.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/homeRoute/home.component";
import NavigationBar from "./components/navigationBar/navigationBar.component";
import SignIn from "./routes/signInRoute/sign-in.component";
import Calculator from "./routes/trialRoute/trial.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path="sign-in" element={<SignIn />} />
				<Route path="trial" element={<Calculator />} />
			</Route>
		</Routes>
	);
};

export default App;
