import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import reducers from './reducers';
import App from "./App"

const store = configureStore({ reducer: reducers });

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);