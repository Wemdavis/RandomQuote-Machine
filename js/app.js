import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    fetchQuote();

    // Set a timer to fetch a new quote every 10 seconds
    const intervalId = setInterval(fetchQuote, 10000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const fetchQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    const data = response.data;
    setQuote({ text: data.content, author: data.author });
  };

  return (
    <div id="quote-box">
      <h1>Random Quote Generator</h1>
      <p id="new-quote">{quote.text}</p>
      <p id="quote-author">- {quote.author}</p>
    </div>
  );
}

export default App;