import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux";
import Root from "./root";
import ModalControl from "./components/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ModalControl />
      <Root />
    </BrowserRouter>
  </Provider>
);
