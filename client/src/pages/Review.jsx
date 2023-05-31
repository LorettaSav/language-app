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
   <h1 className="subtitles">What Kind of Word do you want to review?</h1>
    <button onClick={toggleNouns} className="small-buttons">
    Nouns
    </button>

    {showNouns &&
    (<div name="nouns">
     {nouns.map((noun) =>(
      <div key={noun.id} >
        <div className="flashcards">
        <div className="name">{noun.article} {noun.noun}</div><br />
        <div className="divider"></div>
        <span className="span1">Meanings:</span><br />
        <div className="divider"></div>
        <span className="span2">{noun.meaning1}</span><br />
        <div className="divider"></div>
        <span className="span2">{noun.meaning2}</span><br />
        <div className="divider"></div>
        <span className="span2">{noun.meaning3}</span><br />
        <div className="divider"></div>
        
        <span className="span1">Preposition:</span><span className="span2">{noun.preposition}</span><br />
        <div className="divider"></div>
        <span className="span1">Plural:</span><span className="span2">{noun.plural}</span><br />
        <div className="divider"></div>
        <span className="span1">Examples: </span><br />
        <div className="divider"></div>
        <span className="span2">{noun.example1}</span><br />
        <div className="divider"></div>
        <span className="span2">{noun.example2}</span><br />
        <div className="divider"></div>
        <span className="span2">{noun.example3}</span><br />
        <div className="divider"></div>

       
        <button className="delete-button" onClick={() =>
          deleteNoun(noun.id)}>Delete
        </button>
        

        </div>
      </div>
     ))}
    </div>
    )}

    
    <button onClick={toggleAdjectives} className="small-buttons">Adjectives</button>

    {showAdjectives && (
    <div name="adjectives" >
     {adjectives.map((adjective) =>(
      <div key={adjective.id}>
        <div className="flashcards">
        <div  className="name">{adjective.adjective}</div><br />
        <div className="divider"></div>
        <span className="span1">Meanings:</span><br />
        <div className="divider"></div>
        <span className="span2">{adjective.meaning1}</span><br />
        <div className="divider"></div>
        <span className="span2">{adjective.meaning2}</span><br />
        <div className="divider"></div>
        <span className="span2">{adjective.meaning3}</span><br />
        <div className="divider"></div>
        <span className="span1">Examples:</span><br />
        <div className="divider"></div>
        <span className="span2">{adjective.example1}</span><br />
        <div className="divider"></div>
        <span className="span2">{adjective.example2}</span><br />
        <div className="divider"></div>
        <span className="span2">{adjective.example3}</span><br />
        <div className="divider"></div>
        
        <button className='delete-button' onClick={() =>
          deleteAdjective(adjective.id)}>Delete
        </button>
       
        </div>
      </div>
     ))}
    </div>
    )}  

    
    <button onClick={toggleVerbs} className="small-buttons">Verbs</button>

    {showVerbs && (
    <div name="verbs" >
     {verbs.map((verb) =>(
      <div key={verb.id}>
        <div className="flashcards">
        <div className="name">{verb.verb}</div><br />
        <div className="divider"></div>
        <span className="span1">Meanings:</span><br />
        <div className="divider"></div>
        <span className="span2">{verb.meaning1}</span><br />
        <div className="divider"></div>
        <span className="span2">{verb.meaning2}</span><br />
        <div className="divider"></div>
        <span className="span2">{verb.meaning3}</span><br />
        <div className="divider"></div>
        <span className="span1">Cases:</span><span className="span2">{verb.cases}</span><br />
        <div className="divider"></div>
        <span className="span1">Preposition:</span><span className="span2">{verb.preposition}</span><br />
        <div className="divider"></div>
        <span className="span1">Examples:</span><br />
        <div className="divider"></div>
        <span className="span2">{verb.example1}</span><br />
        <div className="divider"></div>
        <span className="span2">{verb.example2}</span><br />
        <div className="divider"></div>
        <span className="span2">{verb.example3}</span><br />
        <div className="divider"></div>
       
        <button className='delete-button' onClick={() =>
          deleteVerb(verb.id)}>Delete
        </button>
        
        </div>
      </div>
     ))}
    </div>
    )}

    
    <button onClick={toggleExpressions} className="small-buttons">Expressions</button>

    {showExpressions && (
    <div name="expressions" >
     {expressions.map((expression) =>(
      <div key={expression.id}>
        <div className="flashcards">
        <div className="name-expression">{expression.expression}</div><br />
        <div className="divider"></div>
        <span className="span1">Meanings:</span><br />
        <div className="divider"></div>
        <span className="span2">{expression.meaning1}</span><br />
        <div className="divider"></div>
        <span className="span2">{expression.meaning2}</span><br />
        <div className="divider"></div>
        <span className="span2">{expression.meaning3}</span><br />
        <div className="divider"></div>
        <span className="span1">Examples:</span><br />
        <div className="divider"></div>
        <span className="span2">{expression.example1}</span><br />
        <div className="divider"></div>
        <span className="span2">{expression.example2}</span><br />
        <div className="divider"></div>
        <span className="span2">{expression.example3}</span><br />
        <div className="divider"></div>
        
        <button className='delete-button' onClick={() =>
          deleteExpression(expression.id)} >Delete
        </button>
        
        </div>
      </div>
     ))}
    </div>
  )} 
  </div>

)
}

export default Review;