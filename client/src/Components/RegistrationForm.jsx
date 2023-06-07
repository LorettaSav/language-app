import {useState} from "react";

export default function RegistrationForm() {
  const [inputs, setInputs] = useState([{
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: ""
  }]);


  function handleChange(e) {
    const { name, value } = e.target;
   
    setInputs((state) => ({ ...state, [name]: value }));

  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit")
    addUsers(inputs);

  }

  //not working ERROR
  async function addUsers(inp) {
    try {
      const res =  await fetch("/api/auth/register", {
        method: "POST",
         headers: {
           "Content-Type": "application / json"
         },
        body: JSON.stringify(inp),
       })
      const data = await res.json
      if(!res.ok) throw new Error(data.message)
      res.send(data)
    } catch (err) {
      console.log({message: err});
    }
  }

  //REMEMBER TO ADD COLUMNS TO USERS TABLE  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="firstname" name="firstname" onChange={handleChange} />
        <input type="text" placeholder="lastname" name="lastname" onChange={handleChange} />
        <input type="mail" placeholder="example@example.com" name="email" onChange={handleChange} />
        <input type="text" placeholder="username" name="username" onChange={handleChange}/>
        <input type="password" placeholder="password" name="password" onChange={handleChange}/>
        <button> Register </button>
      </form>
    </div>
  );
}
