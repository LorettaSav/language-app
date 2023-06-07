import { useState, useEffect } from "react";

export default function WordCard() {
  const [values, setValues] = useState([]);
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
      setValues(data);
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
      hello    
    </div>
  );
}
