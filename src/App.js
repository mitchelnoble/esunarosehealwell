import logo from "./logo.svg";
import "./App.css";
import Header from "./sections/Header";
import Menu from "./sections/Menu";
import About from "./sections/About";
import Schedule from "./sections/Schedule";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Schedule />
      <About />
    </div>
  );
}

export default App;
