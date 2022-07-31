import "./App.css";
import DashBoard from "./Container/Components/DashBoard/DashBoard";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
}

export default App;
