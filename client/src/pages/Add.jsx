import { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import "../App.css";


function Add() {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  
  return (
    <div>
      <div className="title">
        <h1 className="subtitles">What Kind of Word Do You Want to Add?</h1>
      </div>
      <div>
        <nav>
        <Link 
          to="/Add/Nouns" 
          className={`small-buttons ${activeLink === "/Add/Nouns" ? "active" : ""}`}
          onClick={() => setActiveLink("/Add/Nouns")}
         >
          Noun
        </Link>
        <Link 
          to="/Add/Adjectives" 
          className={`small-buttons ${activeLink === "/Add/Adjectives" ? "active" : ""}`}
          onClick={() => setActiveLink("/Add/Adjectives")}
        >
          Adjective
        </Link>
        <Link 
          to="/Add/Verbs" 
          className={`small-buttons ${activeLink === "/Add/Verbs" ? "active" : ""}`}
          onClick={() => setActiveLink("/Add/Verbs")}
          >
          Verb
        </Link>
        <Link 
          to="/Add/Expressions" 
          className={`small-buttons ${activeLink === "/Add/Expressions" ? "active" : ""}`} 
          onClick={() => setActiveLink("/Add/Expressions")}
          >
          Expressions
        </Link> 
        </nav>
      </div> 
      <Outlet />
    </div>
  );
}
       
export default Add;
      

    
  

  

