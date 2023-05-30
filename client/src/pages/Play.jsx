import { useState, useEffect } from "react";

function Play() {

  const nounSteps = {
    meaning1: "What is the meaninng of this noun?",
    meaning2: "Do you remember another meaning of this noun?",
    meaning3: "Do you remember another meaning of this noun?",
    preposition: "What is the preposition of this noun?",
    plural: "What is the plural of this noun?"
  }
  const adjectiveSteps = {
    meaning1: "What is the meaninng of this adjective?",
    meaning2: "Do you remember another meaning of this adjective?",
    meaning3: "Do you remember another meaning of this adjective?"
  }

  const verbSteps = {
    meaning1: "What is the meaninng of this verb?",
    meaning2: "Do you remember another meaning of this verb?",
    meaning3: "Do you remember another meaning of this verb?",
    cases: "What is the case of this verb?",
    preposition: "What is the preposition of this verb?"
  }
  const expressionSteps = {
    meaning1: "What is the meaninng of this expression?",
    meaning2: "Do you remember another meaning of this expression?",
    meaning3: "Do you remember another meaning of this expression?"
  }
  
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [word, setWord] = useState(null);
  //const [isCorrect, setIsCorrect] = useState(null);
  const [message, setMessage] = useState("");
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const randomTable = getRandomTable();
    getWord(randomTable);
  }, []);
  
  const getRandomTable = () => {
    const tables = ["nouns", "adjectives", "verbs", "expressions"];
    const randomIndex = Math.floor(Math.random() * tables.length);
    return tables[randomIndex];
  }
      
  const getWord = async (tableName) => {
    try{
      const response = await fetch(`/api/words/random?table=${tableName}`);
      const data = await response.json();
      if(!response.ok) throw new Error(data.message);
        setWord(data[0]);
      } catch(err) {
        console.log(err);
      }
    };




function checkCurrentAnswer(){
  console.log("button was clicked")
  if(word.hasOwnProperty("noun")){
    
    if(word[Object.keys(nounSteps)[step]] === input){
      //setIsCorrect(true);
      setMessage("The answer is correct!");
      setStep((step) => step + 1);
    }else {
      //setIsCorrect(false);
      setMessage("The answer is incorrect, try again!")
     }
    }

    if(word.hasOwnProperty("adjective")){
      if(word[Object.keys(adjectiveSteps)[step]] === input){
        //setIsCorrect(true);
        setMessage("The answer is correct!");
        setStep((step) => step + 1);
      } else {
        //setIsCorrect(false);
        setMessage("The answer is incorrect, try again!");
      }
    }
    
    if(word.hasOwnProperty("verb")){
      if(word[Object.keys(verbSteps)[step]] === input){
        //setIsCorrect(true);
        setMessage("The answer is correct!");
        setStep((step) => step + 1);
      } else {
        //setIsCorrect(false);
        setMessage("The answer is incorrect, try again!");
       }
      }
      
      if(word.hasOwnProperty("expression")){
        if(word[Object.keys(expressionSteps)[step]] === input){
          //setIsCorrect(true);
          setMessage("The answer is correct!");
          setStep((step) => step + 1);
        } else {
          //setIsCorrect(true);
          setMessage("The answer is incorrect, try again!");
         }
        }
      };

  function filterSteps(){
    if(word.hasOwnProperty("noun")){
      return Object.keys(nounSteps).filter(key => word[key] !== "")
    }
    if(word.hasOwnProperty("adjective")){
      return Object.keys(adjectiveSteps).filter(key => word[key] !== "")
    }
    if(word.hasOwnProperty("verb")){
      return Object.keys(verbSteps).filter(key => word[key] !== "")
    }
    if(word.hasOwnProperty("expression")){
      return Object.keys(expressionSteps).filter(key => word[key] !== "")
    }
  }      
  
  function handleNewWord(){
    setStep(0);
    setInput("");
    setMessage("");
    setShowContent(true);
    const randomTable = getRandomTable();
    getWord(randomTable);
  }

  return (
  <div>
    <h2>Let's Play!</h2>
    <button onClick={handleNewWord} className="buttons">Get another word</button>
    { word && word.hasOwnProperty("noun") && 
      step < filterSteps().length && showContent &&(  
        <div>
            <div>
            {word.article} {word.noun}
            </div>
            <div>{nounSteps[filterSteps()[step]]}</div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => checkCurrentAnswer()} className="buttons">Check Answer</button>
            <div>{message}</div>
          </div>
        )
      }
      
      {word && step >= filterSteps().length && (
        <div> 
          <div>Good job! Here are some examples of how to use this noun: {word.example1}, {word.example2}, {word.example3}</div>
          <button onClick={handleNewWord} className="buttons">Get a new Word</button>
        </div>
      )}

      { word && word.hasOwnProperty("adjective") && 
      step < filterSteps().length && showContent &&(  
        <div>
            <div>
            {word.adjective}
            </div>
            <div>{adjectiveSteps[filterSteps()[step]]}</div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => checkCurrentAnswer()} className="buttons">Check Answer</button>
            <div>{message}</div>
          </div>
        )
      }
      
      {word && step >= filterSteps().length && (
        <div>
          <div>Good job! Here are some examples of how to use this adjective: {word.example1}, {word.example2}, {word.example3}</div>
          <button  onClick={handleNewWord} className="buttons">Get a new Word</button>
        </div>
      )}

{ word && word.hasOwnProperty("verb") && 
      step < filterSteps().length && showContent &&(  
        <div>
            <div>
            {word.verb}
            </div>
            <div>{verbSteps[filterSteps()[step]]}</div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => checkCurrentAnswer()} className="buttons">Check Answer</button>
            <div>{message}</div>
          </div>
        )
      }
      
      {word && step >= filterSteps().length && (
        <div>
          <div>Good job! Here are some examples of how to use this verb: {word.example1}, {word.example2}, {word.example3}</div>
          <button  onClick={handleNewWord} className="buttons">Get a new Word</button>
        </div>
      )}

{ word && word.hasOwnProperty("expression") && 
      step < filterSteps().length && showContent &&(  
        <div>
            <div>
            {word.expression}
            </div>
            <div>{expressionSteps[filterSteps()[step]]}</div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => checkCurrentAnswer()} className="buttons">Check Answer</button>
            <div>{message}</div>
          </div>
        )
      }
      
      {word && step >= filterSteps().length && (
        <div>
          <div>Good job! Here are some examples of how to use this expression: {word.example1}, {word.example2}, {word.example3}</div>
          <button  onClick={handleNewWord} className="buttons">Get a new Word</button>
        </div>
      )}
  </div>
  )
}
        
export default Play;         

    
     






  
         











