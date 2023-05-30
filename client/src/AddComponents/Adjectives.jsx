import { useEffect, useState } from 'react';
import '../App.css'


function Adjectives() {
  const state = {
    adjective: "",
    meaning1: "",
    meaning2: "",
    meaning3: "",
    example1: "",
    example2: "",
    example3: ""
  };

  const [adjectives, setAdjectives] = useState([]);
  const [newAdjective, setNewAdjective] = useState(state);
  const [successMessage, setSuccessMessage] = useState(""); 

  useEffect(() => {
    getAdjectives();
  }, []);
  
  const getAdjectives = async () => {
    try {
      const response = await fetch("/api/adjectives");
      const data = await response.json();
      if(!response.ok) throw new Error(data.message);
      setAdjectives(data);
    } catch (err) {
      console.log(err);
    }
  };
    
    
  async function addAdjective(e) {
    e.preventDefault();
    const isAdjectiveExisting = adjectives.some((adjective) => adjective.adjective.toLowerCase() === newAdjective.adjective.toLowerCase());
    if (isAdjectiveExisting) {
    alert("This adjective already exists!");
    return;
    }
    try {
      const response = await fetch("/api/adjectives", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAdjective),
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) throw new Error(data.message);
      getAdjectives();
      setSuccessMessage("Adjective added successfully!");
      setNewAdjective(state);
    } catch (err) {
      console.log(err);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewAdjective((state) => ({ ...state, [name]: value }));
    console.log(newAdjective);
  }

  return(
    <div>
      <div className='title'>
        <h1>Add New Adjective</h1>
      </div>
      <div className="form">
        <form onSubmit={addAdjective}>
          <label> Enter your new adjective: 
            <input 
            type="text"
            name="adjective"
            placeholder="adjective"
            value={newAdjective.adjective}
            onChange={handleInputChange}
            />
          </label>
          <label> Enter one or more meanings of your new adjective:
            <input 
            className="meaning-input"
            type= "text" 
            name="meaning1"
            placeholder="meaning1"
            value={newAdjective.meaning1}
            onChange={handleInputChange}
            />
            <input 
            className="meaning-input"
            type="text" 
            name="meaning2"
            placeholder="meaning2"
            value={newAdjective.meaning2}
            onChange={handleInputChange}
            />
            <input
            className="meaning-input" 
            type="text"
            name="meaning3"
            placeholder="meaning3"
            value={newAdjective.meaning3}
            onChange={handleInputChange}
            />
          </label>
          <label> Do you have one or more examples of how to use this noun?
            <input 
            className="examples-input"
            type="text" 
            name="example1"
            placeholder="example1"
            value={newAdjective.example1}
            onChange={handleInputChange}
            />
            <input 
            className="examples-input"
            type="text" 
            name="example2"
            placeholder="examples2"
            value={newAdjective.example2}
            onChange={handleInputChange}
            />
            <input
            className="examples-input" 
            type="text" 
            name="example3"
            placeholder="examples3"
            value={newAdjective.example3}
            onChange={handleInputChange}
            />
          </label>
          <button >Submit</button>
        </form>
      </div>
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
 )
}
      
          
          

export default Adjectives
          
          



