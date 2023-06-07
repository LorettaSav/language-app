import { useState } from "react";

export default function Form() {
  const [type, setType] = useState("word");
  const [radioSelect, setRadioSelect] = useState(false);
  //const [values, setValues] = useState([]);
  const [word, setWord] = useState("");
  const [inputs, setInputs] = useState([]);

  function handleRadio(e) {
    setType(e.target.value);
    setRadioSelect(true);
    // console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    postInputsToDB(word, type, inputs);
    //to reset form?
  }

  function handleWord(e) {
    //  console.log(e.target.value);
    setWord(e.target.value);
  }
  function handleInputs(e) {
    const { name, value } = e.target;
    // console.log(name, value);

    setInputs((state) => ({ ...state, [name]: value }));
  }

  async function postInputsToDB(word, type, inp) {
    // let propName = Object.keys(inp)
    // let keyVal = Object.values(inp)

    try {
        const res = await fetch("/api/words", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            word,
            type,
            inp
          }),
        });
      
      const data = res.json();
      if (!res.ok) throw new Error(data.message);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="wordTypeRadio">
            <h4 style={{ fontSize: "2vw" }}> Choose word type </h4>
            <div style={{ display: "flex", fontSize: "1.5vw" }}>
              <label htmlFor="noun">Noun</label>
              <input
                id="noun"
                type="radio"
                name="radioInput"
                className="examples-input"
                value="noun"
                onClick={handleRadio}
              />
              <label htmlFor="adjective">Adjective</label>
              <input
                id="adjective"
                type="radio"
                name="radioInput"
                className="examples-input"
                value="adjective"
                onClick={handleRadio}
              />
              <label htmlFor="verb">Verb</label>
              <input
                id="verb"
                type="radio"
                name="radioInput"
                className="examples-input"
                value="verb"
                onClick={handleRadio}
              />
              <label htmlFor="expression">Expression</label>
              <input
                id="expression"
                type="radio"
                name="radioInput"
                className="examples-input"
                value="expression"
                onClick={handleRadio}
              />
            </div>
          </div>
          {radioSelect ? (
            <div>
              <div>
                <label> Add your {type}: </label>
                <input type="text" name="word" onChange={handleWord} />
              </div>
              {type === "verb" ? (
                <div>
                  <label> Add preposition/s if any </label>
                  <input
                    type="text"
                    name="preposition"
                    onChange={handleInputs}
                  />
                  <label> Add verb case </label>
                  <input type="text" name="case" />
                </div>
              ) : null}
              {type === "noun" ? (
                <div>
                  <label> Add preposition/s if any </label>
                  <input
                    type="text"
                    name="preposition"
                    onChange={handleInputs}
                  />
                  <label> What is the article? (if it has any) </label>
                  <input type="text" name="article" onChange={handleInputs} />
                  <label> Plural form of noun:</label>
                  <input type="text" name="plural" onChange={handleInputs} />
                </div>
              ) : null}
              <div>
                <label> Enter one or more meanings of your new {type}: </label>
                <input
                  className="meaning-input"
                  type="text"
                  name="meaning1"
                  onChange={handleInputs}
                  required
                />
                <input
                  className="meaning-input"
                  type="text"
                  name="meaning2"
                  onChange={handleInputs}
                />
                <input
                  className="meaning-input"
                  type="text"
                  name="meaning3"
                  onChange={handleInputs}
                />
              </div>
              <div>
                <label>
                  Do you have one or more examples of how to use this {type}?
                </label>
                <input
                  className="examples-input"
                  type="text"
                  name="example1"
                  onChange={handleInputs}
                />
                <input
                  className="examples-input"
                  type="text"
                  name="example2"
                  onChange={handleInputs}
                />
                <input
                  className="examples-input"
                  type="text"
                  name="example3"
                  onChange={handleInputs}
                />
              </div>
              <div>
                <button> Add {type} </button>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
