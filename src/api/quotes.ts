/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import IQuote from 'interfaces/quote';
import { get } from './FetchInfo';

export const getRandomQuote = async () => {
  const quote = await get<IQuote[]>(
    `${process.env.REACT_APP_API_URL}quote/random`,
  );
  return quote;
};
