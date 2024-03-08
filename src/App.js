import { useState } from "react";

function App() {
  const [quote, setQuote] = useState();

  const apiUrl = "https://api.quotable.io/random";

  const getQuote = async () => {
    try {
      const response = await fetch(apiUrl);
      const quote = await response.json();
      setQuote(quote);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={getQuote}>Get a New Quote</button>
      </div>
      {quote && (
        <div>
          <h1>"{quote.content}"</h1>
          <p>{quote.author}</p>
        </div>
      )}
    </div>
  );
}

export default App;
