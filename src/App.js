import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Card";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/chat" element={<h1>Hello This is About</h1>}></Route>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Card />
                <SwipeButtons />
              </>
            }
          >
            {" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
