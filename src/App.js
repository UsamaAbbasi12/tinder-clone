import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Card />}></Route>
          <Route path="/about" element={<h1>Hello This is About</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
