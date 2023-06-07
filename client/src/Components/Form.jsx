import { useState } from "react";

export default function Form() {
  const [type, setType] = useState("word");
  const [radioSelect, setRadioSelect] = useState(false);
  //const [value, setValue] = useState([]);
  const [word, setWord] = useState("");
  const [fields, setFields] = useState([]);
  const [getWords, setGetWords] = useState([]);
  const [getFields, setGetFields] = useState([]);

  function handleRadio(e) {
    setType(e.target.value);
    setRadioSelect(true);
    // console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addWord(word, type);
    addFields(fields);
    addValues()
    //to reset form?
  }

  function handleWord(e) {
    console.log(e.target.value);
    setWord(e.target.value);
  }
  function handleValue(e) {
    const { name, value } = e.target;
    //console.log(name, value);
    setFields((state) => ({ ...state, [name]: value }));
    //setValue((state) => ({ ...state, [name]: value }));
  }

  async function getWordsForId() {
    try {
      const res = await fetch("/api/words");
      const data = await res.json();
      setGetWords(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getFieldsForId() {
    try {
      const res = await fetch("/api/fields");
      const data = await res.json();
      setGetFields(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function addWord(word, type) {
    try {
      const res = await fetch("/api/words", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word, type }),
      });
      const data = res.json(word, type);
      if (!res.ok) throw new Error(data.message);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function addFields(fields) {
    try {
      const res = await fetch("/api/fields", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields }),
      });
      const data = res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  // async function addValues(values, wordID, fieldID)
  async function addValues(values, wordID, fieldID) {
    getFieldsForId();
    getWordsForId();
    let words = getWords.map((e) => e.id);
    let fields = getFields.map((e) => e.id);
    wordID = words[words.length - 1];
    fieldID = fields[fields.length-1]
    console.log(wordID, "wordID");
    console.log(fieldID,fields[fields.length-1]);
    // try {
    //   const res = await fetch("/api/values", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(fieldData),
    //   });
    //   const data = await res.json();
    // } catch (err) {
    //   console.log(err);
    // }
  }

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="wordTypeRadio">
            <h4 style={{ fontSize: "2vw" }}> What is the word type? </h4>
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
                <label> Type {type}: </label>
                <input type="text" name="word" onChange={handleWord} />
              </div>
              {type === "verb" ? (
                <div>
                  <label> Does it have a preposition ? </label>
                  <input
                    type="text"
                    name="preposition"
                    placeholder="write the preposition"
                    onChange={handleValue}
                  />
                  <label> What is the case your is verb in? </label>
                  <input type="text" name="case" />
                </div>
              ) : null}
              {type === "noun" ? (
                <div>
                  <label> Does it have a preposition ? </label>
                  <input
                    type="text"
                    name="preposition"
                    placeholder="write the preposition"
                    onChange={handleValue}
                  />
                  <label> What is the article? (if it has any) </label>
                  <input type="text" name="article" onChange={handleValue} />
                  <label> Write the plural form of the noun</label>
                  <input type="text" name="plural" onChange={handleValue} />
                </div>
              ) : null}
              <div>
                <label> Enter one or more meanings of your new {type}: </label>
                <input
                  className="meaning-input"
                  type="text"
                  name="meaning1"
                  onChange={handleValue}
                  required
                />
                <input
                  className="meaning-input"
                  type="text"
                  name="meaning2"
                  onChange={handleValue}
                />
                <input
                  className="meaning-input"
                  type="text"
                  name="meaning3"
                  onChange={handleValue}
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
                  onChange={handleValue}
                />
                <input
                  className="examples-input"
                  type="text"
                  name="example2"
                  onChange={handleValue}
                />
                <input
                  className="examples-input"
                  type="text"
                  name="example3"
                  onChange={handleValue}
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
