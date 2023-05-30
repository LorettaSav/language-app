import { useState, useEffect } from "react";import { Routes, Route, Link } from "react-router-dom";
import "../App.css";





function Review (){
const [nouns, setNouns] = useState([]);
const [showNouns, setShowNouns] = useState(false);

const [adjectives, setAdjectives] = useState([]);
const [showAdjectives, setShowAdjectives] = useState(false);

const [verbs, setVerbs] = useState([]);
const [showVerbs, setShowVerbs] = useState(false);

const [expressions, setExpressions] = useState([]);
const [showExpressions, setShowExpressions] = useState(false);

useEffect(() => {
  getNouns();
  getAdjectives();
  getVerbs();
  getExpressions();
}, []);

const getNouns = async () => {
  try {
    const response = await fetch("/api/nouns");
    console.log(response)
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    setNouns(data);
  } catch (err) {
    console.log(err);
  }
};

async function deleteNoun(id) {
  console.log(id)
  try {
    const response = await fetch(`/api/nouns/${id}`, {
      method: "DELETE",
    });
    console.log(response)
    const data = await response.json();
    console.log(data);
    if (!response.ok) throw new Error(data.message);
    getNouns();
  } catch (err) {
    console.log(err);
  }
}

const toggleNouns = () => {
  setShowNouns(!showNouns);
};

const getAdjectives = async () => {
  try {
    const response = await fetch("/api/adjectives");
    console.log(response)
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    setAdjectives(data);
  } catch (err) {
    console.log(err);
  }
};

async function deleteAdjective(id) {
  try {
    const response = await fetch(`/api/adjectives/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) throw new Error(data.message);
    getAdjectives();
  } catch (err) {
    console.log(err);
  }
}

const toggleAdjectives = () => {
  setShowAdjectives(!showAdjectives);
};

const getVerbs = async () => {
  try {
    const response = await fetch("/api/verbs");
    console.log(response)
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    setVerbs(data);
  } catch (err) {
    console.log(err);
  }
};

async function deleteVerb(id) {
  try {
    const response = await fetch(`/api/verbs/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) throw new Error(data.message);
    getVerbs();
  } catch (err) {
    console.log(err);
  }
}

const toggleVerbs = () => {
  setShowVerbs(!showVerbs);
};

const getExpressions = async () => {
  try {
    const response = await fetch("/api/expressions");
    console.log(response)
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    setExpressions(data);
  } catch (err) {
    console.log(err);
  }
};

async function deleteExpression(id) {
  try {
    const response = await fetch(`/api/expressions/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) throw new Error(data.message);
    getExpressions();
  } catch (err) {
    console.log(err);
  }
}

const toggleExpressions = () => {
  setShowExpressions(!showExpressions);
};

return(
  <div>
   
    <button onClick={toggleNouns} className="buttons">
    Nouns
    </button>

    {showNouns &&
    (<div name="nouns">
     {nouns.map((noun) =>(
      <div key={noun.id} >
        <div className="flashcards">
        Name: {noun.noun}<br />
        Meanings:<br />
        {noun.meaning1}<br />
        {noun.meaning2}<br />
        {noun.meaning3}<br />
        Article: {noun.article}<br />
        Preposition: {noun.preposition}<br />
        Plural: {noun.plural}<br />
        Examples: <br />
        {noun.example1}<br />
        {noun.example2}<br />
        {noun.example3}<br />
        </div>
        <button onClick={() =>
          deleteNoun(noun.id)} className='smallerbuttons'>Delete
        </button>
      </div>
     ))}
    </div>
    )}

    
    <button onClick={toggleAdjectives} className="buttons">Adjectives</button>

    {showAdjectives && (
    <div name="adjectives" >
     {adjectives.map((adjective) =>(
      <div key={adjective.id}>
        <div className="flashcards">
        Name:{adjective.adjective}<br />
        Meanings:<br />
        {adjective.meaning1}<br />
        {adjective.meaning2}<br />
        {adjective.meaning3}<br />
        Examples:<br />
        {adjective.example1}<br />
        {adjective.example2}<br />
        {adjective.example3}<br />
        </div>
        <button onClick={() =>
          deleteAdjective(adjective.id)} className='smallerbuttons'>Delete
        </button>
      </div>
     ))}
    </div>
    )}  

    
    <button onClick={toggleVerbs} className="buttons">Verbs</button>

    {showVerbs && (
    <div name="verbs" >
     {verbs.map((verb) =>(
      <div key={verb.id}>
        <div className="flashcards">
        Name: {verb.verb}<br />
        Meanings:<br />
        {verb.meaning1}<br />
        {verb.meaning2}<br />
        {verb.meaning3}<br />
        Cases: {verb.cases}<br />
        Preposition: {verb.preposition}<br />
        Examples:<br />
        {verb.example1}<br />
        {verb.example2}<br />
        {verb.example3}<br />
        </div>
        <button onClick={() =>
          deleteVerb(verb.id)} className='smallerbuttons'>Delete
        </button>
      </div>
     ))}
    </div>
    )}

    
    <button onClick={toggleExpressions} className="buttons">Expressions</button>

    {showExpressions && (
    <div name="expressions" >
     {expressions.map((expression) =>(
      <div key={expression.id}>
        <div className="flashcards">
        Name: {expression.expression}<br />
        Meanings:<br />
        {expression.meaning1}<br />
        {expression.meaning2}<br />
        {expression.meaning3}<br />
        Examples:<br />
        {expression.example1}<br />
        {expression.example2}<br />
        {expression.example3}<br />
        </div>
        <button onClick={() =>
          deleteExpression(expression.id)} className='smallerbuttons'>Delete
        </button>
      </div>
     ))}
    </div>
  )} 
  </div>

)
}

export default Review;