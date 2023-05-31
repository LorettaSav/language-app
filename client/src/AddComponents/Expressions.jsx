import { useEffect, useState } from 'react';

import '../App.css'


function Expressions() {
  const state = {
    expression: "",
    meaning1: "",
    meaning2: "",
    meaning3: "",
    example1: "",
    example2: "",
    example3: ""
  }

  const [expressions, setExpressions] = useState([]);
  const [newExpression, setNewExpression] = useState(state);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    getExpressions();
  }, []);
  
  const getExpressions = async () => {
    try {
      const response = await fetch("/api/expressions");
      const data = await response.json();
      if(!response.ok) throw new Error(data.message);
      setExpressions(data);
    } catch (err) {
      console.log(err);
    }
  };

  async function addExpression(e) {
    e.preventDefault();
    const isExpressionExisting = expressions.some((expression) => expression.expression.toLowerCase() === newExpression.expression.toLowerCase());
    if (isExpressionExisting) {
    alert("This expression already exists!");
    return;
    }
    try {
      const response = await fetch("/api/expressions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExpression),
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) throw new Error(data.message);
      getExpressions();
      setSuccessMessage("Expression was added successfully!");
      setNewExpression(state);
    } catch (err) {
      console.log(err);
    }
  }
    
  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewExpression((state) => ({ ...state, [name]: value }));
    console.log(newExpression);
  } 




  return(
    <div>
      <div className='title'>
        <h1 className='subtitles'>Add New Expression</h1>
      </div>
      <div className="form">
        <form onSubmit={addExpression}>
          <label> Enter your new expression: 
            <input 
            type="text"
            name="expression"
            className="examples-input"
            value={newExpression.expression}
            onChange={handleInputChange}
            required
            />
          </label>
          <label> Enter one or more meanings of your new expression:
            <input 
            className="meaning-input"
            type= "text" 
            name="meaning1"
            value={newExpression.meaning1}
            onChange={handleInputChange}
            required
            />
            <input 
            className="meaning-input"
            type="text" 
            name="meaning2"
            
            value={newExpression.meaning2}
            onChange={handleInputChange}
            />
            <input
            className="meaning-input" 
            type="text"
            name="meaning3"
           
            value={newExpression.meaning3}
            onChange={handleInputChange}
            />
          </label>
          <label> Do you have one or more examples of how to use this expression?
            <input 
            className="examples-input"
            type="text" 
            name="example1"
           
            value={newExpression.example1}
            onChange={handleInputChange}
            />
            <input 
            className="examples-input"
            type="text" 
            name="example2"
           
            value={newExpression.example2}
            onChange={handleInputChange}
            />
            <input
            className="examples-input" 
            type="text" 
            name="example3"
            
            value={newExpression.example3}
            onChange={handleInputChange}
            />
          </label>
        </form>
      </div>
      <button className='submitbutton'  onClick={addExpression}>Submit</button>
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
 )
}
          
          

export default Expressions