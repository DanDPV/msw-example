/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import { rest } from 'msw';
import quotes from './data/quotes.json';
import { getCharacterById } from './testData';

const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}quote/random`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([quotes[0]]));
  }),
  rest.get(
    `${process.env.REACT_APP_API_URL}characters/:idCharacter`,
    (req, res, ctx) => {
      const { idCharacter } = req.params;
      const char = getCharacterById(parseInt(idCharacter, 10));
      if (char) {
        return res(ctx.status(200), ctx.json([char]));
      }
      return res(ctx.status(404));
    },
  ),
  rest.get('*', (req, res, ctx) => {
    // eslint-disable-next-line no-console
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: 'Please add handler' }));
  }),
];

export default handlers;
