import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Adjectives from "../AddComponents/Adjectives";
import Expressions from "../AddComponents/Expressions";
import Verbs from "../AddComponents/Verbs";
import Nouns from "../AddComponents/Nouns";
import "../App.css";

function Add() {
  
  return (
    <div>
      <div className="title">
        <h1>What Kind of Word Do You Want to Add?</h1>
      </div>
      <div className="form">
        <nav>
        <Link to="/Add/Nouns" className="buttons">
          Noun
        </Link>
        <Link to="/Add/Adjectives" className="buttons">
          Adjective
        </Link>
        <Link to="/Add/Verbs" className="buttons">
          Verb
        </Link>
        <Link to="/Add/Expressions" className="buttons">
          Expressions
        </Link> 
        </nav>
      </div> 
      <Routes>
        <Route path="/Add/Nouns" element={<Nouns />} />
        <Route path="/Add/Adjectives" element={<Adjectives />} />
        <Route path="/Add/Verbs" element={<Verbs />} />
        <Route path="/Add/Expressions" element={<Expressions />} />
        {/* <Route path="*" element={<Error404View />} /> */}
      </Routes>
    </div>
  );
}
       
export default Add;
      

    
  

  

