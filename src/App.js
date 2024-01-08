import logo from "./logo.svg";
import "./App.css";
import RouterCompo from "./Components/RouterCompo";
import { Footer } from "./Components/Footer/Footer";
import { CreateStore } from "./Components/Store/CreateStore";

function App() {
  return (
    <div className="App">
      <CreateStore>
        <RouterCompo />
        <Footer />
      </CreateStore>
    </div>
  );
}

export default App;
