import logo from './logo.svg';
import './App.css';
import Create from "./Create";
import { ToastContainer } from "react-toastify";
import View from "./View";
import Edit from "./Edit";
import ConfirmationModal from "./Component/ConfirmationModal";

function App() {
  return (
    <div className="App">
      <Create />
      {/* <Edit /> */}
    </div>
  );
}

export default App;
