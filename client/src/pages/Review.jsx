import { useState, useEffect } from "react";import { Routes, Route, Link } from "react-router-dom";
import Nouns from "../AddComponents/Nouns";
import "../App.css";




function Review (){
const [nouns, setNouns] = useState([]);
const [adjectives, setAdejctives] = useState([]);
const [verbs, setVerbs] = useState([]);
const [expressions, setExpressions] = useState([]);

useEffect(() => {
  getNouns();
}, []);

const getNouns = async () => {
  try {
    const response = await fetch("/api/users/nouns");
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    setNouns(data);
  } catch (err) {
    console.log(err);
  }
};

async function deleteNoun(id) {
  try {
    const response = await fetch(`/api/nouns/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) throw new Error(data.message);
    getStudents();
  } catch (err) {
    console.log(err);
  }
}



return(
  <div>
    <button>Nouns</button>
  
    <div name="nouns">
     {nouns.map((noun) =>(
      <div key={noun.id}>
        <div>
        {noun.noun}
        {noun.meaning1}
        {noun.meaning2}
        {noun.meaning3}
        {noun.article}
        {noun.preposition}
        {noun.plural}
        {noun.example1}
        {noun.example2}
        {noun.example3}
        </div>
        <button onClick={() =>
          "deleteNoun"(noun.id)}>Delete
        </button>
        <button>Edit</button>
      </div>
     ))};
    </div>

    <button>Adjectives</button>
    <div name="adjectives">
     {adjectives.map((adjective) =>(
      <div key={adjective.id}>
        <div>
        {adjective.noun}
        {adjective.meaning1}
        {adjective.meaning2}
        {adjective.meaning3}
        {adjective.article}
        {adjective.preposition}
        {adjective.plural}
        {adjective.example1}
        {adjective.example2}
        {adjective.example3}
        </div>
        <button onClick={() =>
          "deleteAdjective"(adjective.id)}>Delete
        </button>
        <button>Edit</button>
      </div>
     ))};
    </div>

    <button>Verbs</button>
    <div name="verbs">
     {verbs.map((verb) =>(
      <div key={verb.id}>
        <div>
        {verb.noun}
        {verb.meaning1}
        {verb.meaning2}
        {verb.meaning3}
        {verb.article}
        {verb.preposition}
        {verb.plural}
        {verb.example1}
        {verb.example2}
        {verb.example3}
        </div>
        <button onClick={() =>
          "deleteVerb"(verb.id)}>Delete
        </button>
        <button>Edit</button>
      </div>
     ))};
    </div>

    <button>Expressions</button>
    <div name="expressions">
     {expressions.map((expression) =>(
      <div key={expression.id}>
        <div>
        {expression.noun}
        {expression.meaning1}
        {expression.meaning2}
        {expression.meaning3}
        {expression.article}
        {expression.preposition}
        {expression.plural}
        {expression.example1}
        {expression.example2}
        {expression.example3}
        </div>
        <button onClick={() =>
          "deleteExpression"(expression.id)}>Delete
        </button>
        <button>Edit</button>
      </div>
     ))};
    </div>
  </div>

)
}

export default Review;