import { Fragment } from "react";
import Home from "./pages/Home";
import "./assets/styles/style.css"
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
   <Provider store={store}>
    <Home/>
   </Provider> 
  );
}

export default App;
