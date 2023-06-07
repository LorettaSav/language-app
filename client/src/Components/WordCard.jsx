import { useState, useEffect } from "react";

export default function WordCard() {
  const [words, setWords] = useState([]);
  const [type, getType] = useState("")
  const [isOne, setIsOne] = useState(false)
    
  useEffect(() => {
    getWords();
  });

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
      <h5>{word}</h5>
      <p><i>{type}</i></p>
      
    </div>
  );
}
