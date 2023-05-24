import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Add from "./pages/Add";
import Review from "./pages/Review";
import Play from "./pages/Play";
import "./App.css";

function App() {
  
  return (
    <div>
      <div className="title">
        <h1>My Vocabulary Trainer</h1>
        <h2>What would you like to do ?</h2>
      </div>
      <div className="form">
        <nav>
        <Link to="/Add" className="buttons">
          Add a New Word
        </Link>
        <Link to="/Review"className="buttons">
          Review Your Words
        </Link>
        <Link to="/Play" className="buttons">
          Play
        </Link>
        </nav>
      </div> 
      <Routes>
        <Route path="/Add/*" element={<Add />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Play" element={<Play />} />
        {/* <Route path="*" element={<Error404View />} /> */}
      </Routes>
    </div>
  );
}
    
         
       
export default App;