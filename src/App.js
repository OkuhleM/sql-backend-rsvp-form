import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Attenders from "./Components/Attenders";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/attenders" element={<Attenders />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
