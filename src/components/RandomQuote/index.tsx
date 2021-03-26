import { getRandomQuote } from 'api/quotes';
import IQuote from 'interfaces/quote';
import React, { useEffect, useState } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState<IQuote | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getRandomQuote()
      .then(res => {
        setQuote(res[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setQuote(null);
        setIsLoading(false);
        setError('Could not load quote...');
      });
  }, []);

  return (
    <div>
      {quote && (
        <>
          <h2>
            <b>{quote.author}</b>
          </h2>
          <p>{quote.quote}</p>
        </>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default RandomQuote;
