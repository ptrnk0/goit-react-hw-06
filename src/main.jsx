import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./components/app/App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={<p>Loading...</p>} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>
);
