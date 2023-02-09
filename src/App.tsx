import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async (): Promise<void> => {
    try {
      const id = Math.random() * 224;
      const response = await axios.get(
        `https://api.adviceslip.com/advice/${id}`
      );
      const { advice } = await response.data.slip;
      setQuote(advice);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  return (
    <div className="App">
      <div className="quote__container">
        <h1 className="quote__text">{quote}</h1>
        <button className="quote__button" onClick={() => fetchAdvice()}>
          <span>GIVE ME ADVICE</span>
        </button>
      </div>
    </div>
  );
}

export default App;
