import logo from "./logo.svg";
import "./App.css";
import Header from "./screens/Header";
import Menu from "./screens/Menu";
import About from "./screens/About";
import Schedule from "./screens/Schedule";

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
