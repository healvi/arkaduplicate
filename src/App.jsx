import "./App.scss";
import { Menu, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-menu m-1 flex flex-col  my-[14px] items-center sm:justify-start sm:py-[5px]">
        <Menu />
        <div className="flex-1 flex row justify-center container-xl relative">
          <img
            src={require("./assets/image/secone/backone.png")}
            className="sm:order-1"
            alt="backone"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
