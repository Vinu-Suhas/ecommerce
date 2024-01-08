import logo from "./logo.svg";
import "./App.css";
import RouterCompo from "./Components/RouterCompo";
import { Footer } from "./Components/Footer/Footer";
import { CreateStore } from "./Components/Store/CreateStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <CreateStore>
        <RouterCompo />
        <Footer />
      </CreateStore>
      <ToastContainer />
    </div>
  );
}

export default App;
