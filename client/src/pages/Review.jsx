import { useState, useEffect } from "react";
import "../App.css";
import WordCard from "../Components/WordCard";
import Form from "../Components/Form";
import { Routes, Route, Link } from "react-router-dom";

function Review() {
  const [words, setWords] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [toReview, setToReview] = useState("");
  const [wordCard, setWordCard] = useState(false);

  useEffect(() => {
    getWords();
  }, []);

  function handleSelectAllClick() {
    setSeeAll(true);
  }

  function gettingWords() {
    getWordWithType();
    setSeeAll(true);
  }

  function handleChange(e) {
    setToReview(e.target.value); //getting type to review
  }

  function handleWordCards(id) {
    setWordCard(true);
    getWordCard(id);
    console.log("click");
  }

  async function getWords() {
    try {
      const res = await fetch("/api/words");
      const data = await res.json();
      if (!res) throw new Error(data.message);
      setWords(data);
    } catch (err) {
      console.log(err);
    }
  }

  //when type selected
  async function getWordWithType() {
    try {
      const res = await fetch(`api/words/${toReview}`);
      const data = await res.json();
      setWords(data);
    } catch (err) {
      console.log(err);
    }
  }

  //get
  //When word Clicked
  async function getWordCard(id) {
    const valueID = id;
    console.log(id);
    try {
      const res = await fetch(`/api/values/${valueID}/wordfields`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteWord(id) {
    try {
      const res = await fetch(`/api/words/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div style={{ display: "flex" }} className="container-fluid">
        <div className="row">
          <div className="col-9 form">
            
            
              <label htmlFor="">
                What type of words would you like to review?
              </label>
              <input type="text" name="type" onChange={handleChange} />
              <button onClick={gettingWords}>Get words</button>
          
          </div>
          <div className="col ">
            <button onClick={handleSelectAllClick}> See All Words </button>
          </div>
        </div>
      </div>
      <div>
        {seeAll
          ? words.map((e) => (
              <div
                key={e.id}
                className="flashcards"
                onClick={() => handleWordCards(e.id)}
              >
                <ul style={{ listStyle: "none" }}>
                  <li>
                    {e.word}
                    <button
                      className="delete-button"
                      onClick={() => deleteWord(e.id)}
                    >
                      Delete Word
                    </button>
                  </li>
                </ul>
              </div>
            ))
          : null}
      </div>
      <div>
        <div className="row">
          <Link to="/add/form" className="notA">
            <button>Add a new word</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Review;

// <h1 className="subtitles">What Kind of Word do you want to review?</h1>
//       <button onClick={toggleNouns} className="small-buttons">
//         Nouns
//       </button>

//       {showNouns && (
//         <div name="nouns">
//           {nouns.map((noun) => (
//             <div key={noun.id}>
//               <div className="flashcards">
//                 <div className="name">
//                   {noun.article} {noun.noun}
//                 </div>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Meanings:</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{noun.meaning1}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{noun.meaning2}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{noun.meaning3}</span>
//                 <br />
//                 <div className="divider"></div>

//                 <span className="span1">Preposition:</span>
//                 <span className="span2">{noun.preposition}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Plural:</span>
//                 <span className="span2">{noun.plural}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Examples: </span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{noun.example1}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{noun.example2}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{noun.example3}</span>
//                 <br />
//                 <div className="divider"></div>

//                 <button
//                   className="delete-button"
//                   onClick={() => deleteNoun(noun.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <button onClick={toggleAdjectives} className="small-buttons">
//         Adjectives
//       </button>

//       {showAdjectives && (
//         <div name="adjectives">
//           {adjectives.map((adjective) => (
//             <div key={adjective.id}>
//               <div className="flashcards">
//                 <div className="name">{adjective.adjective}</div>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Meanings:</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{adjective.meaning1}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{adjective.meaning2}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{adjective.meaning3}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Examples:</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{adjective.example1}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{adjective.example2}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{adjective.example3}</span>
//                 <br />
//                 <div className="divider"></div>

//                 <button
//                   className="delete-button"
//                   onClick={() => deleteAdjective(adjective.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <button onClick={toggleVerbs} className="small-buttons">
//         Verbs
//       </button>

//       {showVerbs && (
//         <div name="verbs">
//           {verbs.map((verb) => (
//             <div key={verb.id}>
//               <div className="flashcards">
//                 <div className="name">{verb.verb}</div>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Meanings:</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{verb.meaning1}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{verb.meaning2}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{verb.meaning3}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Cases:</span>
//                 <span className="span2">{verb.cases}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Preposition:</span>
//                 <span className="span2">{verb.preposition}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Examples:</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{verb.example1}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{verb.example2}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{verb.example3}</span>
//                 <br />
//                 <div className="divider"></div>

//                 <button
//                   className="delete-button"
//                   onClick={() => deleteVerb(verb.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <button onClick={toggleExpressions} className="small-buttons">
//         Expressions
//       </button>

//       {showExpressions && (
//         <div name="expressions">
//           {expressions.map((expression) => (
//             <div key={expression.id}>
//               <div className="flashcards">
//                 <div className="name-expression">{expression.expression}</div>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Meanings:</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{expression.meaning1}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{expression.meaning2}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{expression.meaning3}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span1">Examples:</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{expression.example1}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{expression.example2}</span>
//                 <br />
//                 <div className="divider"></div>
//                 <span className="span2">{expression.example3}</span>
//                 <br />
//                 <div className="divider"></div>

//                 <button
//                   className="delete-button"
//                   onClick={() => deleteExpression(expression.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
