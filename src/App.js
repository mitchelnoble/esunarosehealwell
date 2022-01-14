import logo from "./logo.svg";
import "./App.css";
import Landing from "./screens/Landing";
import About from "./screens/About";
import Schedule from "./screens/Schedule";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Schedule />
    </div>
  );
}

export default App;
