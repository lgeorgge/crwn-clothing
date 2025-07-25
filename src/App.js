//import "./categories.styles.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/homeRoute/home.component";
import NavigationBar from "./components/navigationBar/navigationBar.component";
import Calculator from "./routes/trialRoute/trial.component";
import Authentication from "./routes/AuthenticationRoute/Authentication.component";
import Shop from "./routes/shopRoute/shop.component";
import Checkout from "./routes/checkoutRoute/checkout.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path="Account" element={<Authentication />} />
				<Route path="trial" element={<Calculator />} />
				<Route path="shop" element={<Shop />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
