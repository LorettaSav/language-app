import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Add from "./pages/Add";
import Adjectives from "./AddComponents/Adjectives";
import Expressions from "./AddComponents/Expressions";
import Verbs from "./AddComponents/Verbs";
import Nouns from "./AddComponents/Nouns";
import Review from "./pages/Review";
import Play from "./pages/Play";
import background from "./background.jpg";
import "./App.css";

function App() {
  
  return (
    <div>
      <div className="title">
        <div className="logo"></div>
        <h1 className="subtitles">What would you like to do ?</h1>
      </div>
      <div>
        <nav>
        <Link to="/Add" className="buttons">
          Add a New Word 
        </Link>
        <Link to="/Review"className="buttons">
          Review Your Words
        </Link>
        <Link to="/Play" className="buttons">
          Play!
        </Link>
        </nav>
      </div> 
      <Routes>
        <Route path="/Add/" element={<Add />} >
          <Route path="/Add/Nouns" element={<Nouns />} />
          <Route path="/Add/Adjectives" element={<Adjectives />} />
          <Route path="/Add/Verbs" element={<Verbs />} />
          <Route path="/Add/Expressions" element={<Expressions />} />
        </Route>
        <Route path="/Review" element={<Review />} />
        <Route path="/Play" element={<Play />} />
        {/* <Route path="*" element={<Error404View />} /> */}
      </Routes>
    </div>
  );
}
    
         
       
export default App;