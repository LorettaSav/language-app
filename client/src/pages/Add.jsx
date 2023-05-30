import { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "../App.css";


function Add() {
  
  return (
    <div>
      <div className="title">
        <h1>What Kind of Word Do You Want to Add?</h1>
      </div>
      <div>
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
      <Outlet />
    </div>
  );
}
       
export default Add;
      

    
  

  

