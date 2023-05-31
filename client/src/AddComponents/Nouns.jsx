import { useEffect, useState } from 'react';
import '../App.css'


function Nouns() {

  const state = {
    noun: "",
    meaning1: "",
    meaning2: "",
    meaning3: "",
    article: "",
    preposition: "",
    plural: "",
    example1: "",
    example2: "",
    example3: ""
  }

  const [nouns, setNouns] = useState([]);
  const [newNoun, setNewNoun] = useState(state);
  const [successMessage, setSuccessMessage] = useState(""); 

  useEffect(() => {
    getNouns();
  }, []);

  

  const getNouns = async () => {
    try {
      const response = await fetch("/api/nouns");
      const data = await response.json();
      if(!response.ok) throw new Error(data.message);
      setNouns(data);
    } catch (err) {
      console.log(err);
    }
  };

  async function addNoun(e) {
    e.preventDefault();
    const isNounExisting = nouns.some((noun) => noun.noun.toLowerCase() === newNoun.noun.toLowerCase());
    if (isNounExisting) {
    alert("This noun already exists!");
    return;
    }
    const firstLetterNoun = newNoun.noun[0];
    const firstLetterPlural = newNoun.plural[0];
    if (firstLetterNoun === firstLetterNoun.toLowerCase() || firstLetterPlural === firstLetterPlural.toLowerCase()) {
    alert("Remember that in german the first letter of the nouns must be in uppercase.");
    return;
    }
    try {
      const response = await fetch("/api/nouns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNoun),
      });
      console.log(newNoun)
      const data = await response.json();
      console.log(data);
      if (!response.ok) throw new Error(data.message);
      getNouns();
      setSuccessMessage("Noun added successfully!");
      setNewNoun(state);
    } catch (err) {
      console.log(err);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewNoun((state) => ({ ...state, [name]: value }));
    console.log(newNoun);
  }


  return(
    <div>
      <div className='title'>
        <h1 className='subtitles'>Add New Noun</h1>
      </div>
      <div className="form">
        <form onSubmit={addNoun}>
          <label> Enter your new noun: 
            <input 
            type="text"
            name="noun"
            value={newNoun.noun}
            onChange={handleInputChange}
            required
            />
          </label>
          <label> Enter one or more meanings of your new noun:
            <input 
            className="meaning-input"
            type= "text" 
            name="meaning1"
            value={newNoun.meaning1}
            onChange={handleInputChange}
            required
            />
            <input 
            className="meaning-input"
            type="text" 
            name="meaning2"
           
            value={newNoun.meaning2}
            onChange={handleInputChange}
            />
            <input
            className="meaning-input" 
            type="text"
            name="meaning3"
            
            value={newNoun.meaning3}
            onChange={handleInputChange}
            />
          </label>
          <label> What is the article of your noun?
            <input 
            type="text"
            name="article" 
            value={newNoun.article}
            onChange={handleInputChange}
            required
            />
          </label>
          <label> Does your noun have a preposition?
            <input 
            type="text" 
            name="preposition"
            
            value={newNoun.preposition}
            onChange={handleInputChange}
            />
          </label>
          <label> What is the plural of your noun?
            <input 
            type="text" 
            name="plural"
            
            value={newNoun.plural}
            onChange={handleInputChange}
            />
          </label>
          <label> Do you have one or more examples of how to use this noun?
            <input 
            className="examples-input"
            type="text" 
            name="example1"
            
            value={newNoun.example1}
            onChange={handleInputChange}
            />
            <input 
            className="examples-input"
            type="text" 
            name="example2"
            
            value={newNoun.example2}
            onChange={handleInputChange}
            />
            <input
            className="examples-input" 
            type="text" 
            name="example3"
           
            value={newNoun.example3}
            onChange={handleInputChange}
            />
          </label>
        </form>
      </div>
      <button className='submitbutton' onClick={addNoun}>Submit</button>
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
  )
};

export default Nouns
