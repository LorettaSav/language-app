import { useState, useEffect } from "react";

function Play() {
  const nounSteps = {
    meaning1: "What is the meaning of this noun?",
    meaning2: "Do you remember another meaning of this noun?",
    meaning3: "Do you remember another meaning of this noun?",
    preposition: "What is the preposition of this noun?",
    plural: "What is the plural of this noun?",
  };
  const adjectiveSteps = {
    meaning1: "What is the meaning of this adjective?",
    meaning2: "Do you remember another meaning of this adjective?",
    meaning3: "Do you remember another meaning of this adjective?",
  };

  const verbSteps = {
    meaning1: "What is the meaning of this verb?",
    meaning2: "Do you remember another meaning of this verb?",
    meaning3: "Do you remember another meaning of this verb?",
    cases: "What is the case of this verb?",
    preposition: "What is the preposition of this verb?",
  };
  const expressionSteps = {
    meaning1: "What is the meaning of this expression?",
    meaning2: "Do you remember another meaning of this expression?",
    meaning3: "Do you remember another meaning of this expression?",
  };

  // const [step, setStep] = useState(0);
  // const [input, setInput] = useState("");
  // const [word, setWord] = useState(null);
  // //const [isCorrect, setIsCorrect] = useState(null);
  // const [message, setMessage] = useState("");
  // const [showContent, setShowContent] = useState(true);

  const [randWord, setRandWord] = useState("");
  const [play, setPlay] = useState(false);


  // useEffect(() => {
  //   const randomTable = getRandomTable();
  //   getWord(randomTable);
  // }, []);

  // //getting a random table
  // const getRandomTable = () => {
  //   const tables = ["nouns", "adjectives", "verbs", "expressions"];
  //   const randomIndex = Math.floor(Math.random() * tables.length);
  //   return tables[randomIndex];
  // };
  // getting a word from a random table
  // const getWord = async (tableName) => {
  //   try{
  //     const response = await fetch(`/api/words/random?table=${tableName}`);
  //     const data = await response.json();
  //     if(!response.ok) throw new Error(data.message);
  //       setWord(data[0]);
  //     } catch(err) {
  //       console.log(err);
  //     }
  //   };

  function handlePlay() {
    setPlay(true);
    getRandWord();

  }

  const getRandWord = async () => {
    try {
      const res = await fetch("/api/words/random");
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setRandWord(data[0].word);
    } catch (err) {
      console.log(err);
    }
  };

  // function checkCurrentAnswer() {
  //   console.log("button was clicked");
  //   const currentStep = filteredSteps[step];
  //   const rightAnswer = "The answer is correct!";
  //   const wrongAnswer = `The answer is incorrect, the right answer is: ${word[currentStep]}`;

  //   if (word.hasOwnProperty("noun")) {
  //     if (
  //       word[currentStep] === input ||
  //       (word[currentStep] === null && input === "")
  //     ) {
  //       //setIsCorrect(true);
  //       setMessage(rightAnswer);
  //       setInput("");
  //       setStep((step) => step + 1);
  //     } else {
  //       //setIsCorrect(false);
  //       setMessage(wrongAnswer);
  //     }
  //   }

  //   if (word.hasOwnProperty("adjective")) {
  //     if (
  //       word[currentStep] === input ||
  //       (word[currentStep] === null && input === "")
  //     ) {
  //       //setIsCorrect(true);
  //       setMessage(rightAnswer);
  //       setInput("");
  //       setStep((step) => step + 1);
  //     } else {
  //       //setIsCorrect(false);
  //       setMessage(wrongAnswer);
  //     }
  //   }

  //   if (word.hasOwnProperty("verb")) {
  //     if (
  //       word[currentStep] === input ||
  //       (word[currentStep] === null && input === "")
  //     ) {
  //       //setIsCorrect(true);
  //       setMessage(rightAnswer);
  //       setInput("");
  //       setStep((step) => step + 1);
  //     } else {
  //       //setIsCorrect(false);
  //       setMessage(wrongAnswer);
  //     }
  //   }

  //   if (word.hasOwnProperty("expression")) {
  //     if (
  //       word[currentStep] === input ||
  //       (word[currentStep] === null && input === "")
  //     ) {
  //       //setIsCorrect(true);
  //       setMessage(rightAnswer);
  //       setInput("");
  //       setStep((step) => step + 1);
  //     } else {
  //       //setIsCorrect(false);
  //       setMessage(wrongAnswer);
  //     }
  //   }
  // }

  // function filterSteps() {
  //   if (!word) return [];
  //   if (word.hasOwnProperty("noun")) {
  //     return Object.keys(nounSteps).filter((key) => {
  //       // console.log(key, word[key]);
  //       return word[key] !== "" && word[key] !== null;
  //     });
  //   }
  //   if (word.hasOwnProperty("adjective")) {
  //     return Object.keys(adjectiveSteps).filter((key) => {
  //       // console.log(key, word[key]);
  //       return word[key] !== "" && word[key] !== null;
  //     });
  //   }
  //   if (word.hasOwnProperty("verb")) {
  //     return Object.keys(verbSteps).filter((key) => {
  //       return word[key] !== "" && word[key] !== null;
  //     });
  //   }
  //   if (word.hasOwnProperty("expression")) {
  //     return Object.keys(expressionSteps).filter((key) => {
  //       return word[key] !== "" && word[key] !== null;
  //     });
  //   }
  // }

  // const filteredSteps = filterSteps();

  // function handleNewWord() {
  //   setStep(0);
  //   setInput("");
  //   setMessage("");
  //   setShowContent(true);
  //   const randomTable = getRandomTable();
  //   getWord(randomTable);
  // }

  return (
    <div>
      <h2 className="subtitles">Let's Play!</h2>
      <button onClick={handlePlay}>Play</button>
      <div>
        { play? <div>{randWord}</div> : null}
      </div>
      
      <button onClick={getRandWord} className="small-buttons">
        Get another word
      </button>
    </div>
  );
}

export default Play;



      // {word &&
      //   word.hasOwnProperty("noun") &&
      //   step < filteredSteps.length &&
      //   showContent && (
      //     <div>
      //       <div className="game-container">
      //         <div className="word-container">
      //           {word.article} {word.noun}
      //         </div>
      //         <div className="divider"></div>
      //         <div className="question-container">
      //           {nounSteps[filteredSteps[step]]}
      //         </div>
      //         <input
      //           className="examples-input"
      //           type="text"
      //           value={input}
      //           onChange={(e) => setInput(e.target.value)}
      //         />
      //       </div>
      //       <button
      //         onClick={() => checkCurrentAnswer()}
      //         className="check-buttons"
      //       >
      //         Check Answer
      //       </button>
      //       <div className="success-message">{message}</div>
      //     </div>
      //   )}

      // {word &&
      //   word.hasOwnProperty("adjective") &&
      //   step < filteredSteps.length &&
      //   showContent && (
      //     <div>
      //       <div className="game-container">
      //         <div className="word-container">{word.adjective}</div>
      //         <div className="divider"></div>
      //         <div className="question-container">
      //           {adjectiveSteps[filteredSteps[step]]}
      //         </div>
      //         <input
      //           className="examples-input"
      //           type="text"
      //           value={input}
      //           onChange={(e) => setInput(e.target.value)}
      //         />
      //       </div>
      //       <button
      //         onClick={() => checkCurrentAnswer()}
      //         className="check-buttons"
      //       >
      //         Check Answer
      //       </button>
      //       <div className="success-message">{message}</div>
      //     </div>
      //   )}

      // {word &&
      //   word.hasOwnProperty("verb") &&
      //   step < filteredSteps.length &&
      //   showContent && (
      //     <div>
      //       <div className="game-container">
      //         <div className="word-container">{word.verb}</div>
      //         <div className="divider"></div>
      //         <div className="question-container">
      //           {verbSteps[filteredSteps[step]]}
      //         </div>
      //         <input
      //           className="examples-input"
      //           type="text"
      //           value={input}
      //           onChange={(e) => setInput(e.target.value)}
      //         />
      //       </div>
      //       <button
      //         onClick={() => checkCurrentAnswer()}
      //         className="check-buttons"
      //       >
      //         Check Answer
      //       </button>
      //       <div className="success-message">{message}</div>
      //     </div>
      //   )}

      // {word &&
      //   word.hasOwnProperty("expression") &&
      //   step < filteredSteps.length &&
      //   showContent && (
      //     <div>
      //       <div className="expression-container">
      //         <div className="word-container">{word.expression}</div>
      //         <div className="divider"></div>
      //         <div className="question-container">
      //           {expressionSteps[filteredSteps[step]]}
      //         </div>
      //         <input
      //           className="examples-input"
      //           type="text"
      //           value={input}
      //           onChange={(e) => setInput(e.target.value)}
      //         />
      //         <button
      //           onClick={() => checkCurrentAnswer()}
      //           className="expression-check-buttons"
      //         >
      //           Check Answer
      //         </button>
      //       </div>
      //       <div className="success-message">{message}</div>
      //     </div>
      //   )}

      // {word && step >= filteredSteps.length && (
      //   <div>
      //     <div className="final-message">
      //       <span className="congrats">
      //         Good job! Here are some examples of how to use this word:
      //       </span>
      //       <br />
      //       <span className="examples">
      //         {word.example1}
      //         <br />
      //         {word.example2}
      //         <br />
      //         {word.example3}
      //       </span>
      //     </div>
      //     <button onClick={handleNewWord} className="check-buttons">
      //       Get a new Word
      //     </button>
      //   </div>
      // )}