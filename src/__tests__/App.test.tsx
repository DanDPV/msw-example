/* eslint-disable no-undef */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from 'App';
import server from 'mocks/server';
import { rest } from 'msw';

describe('Test on App component', () => {
  test('should render app correctly', async () => {
    const { container, getByText } = render(<App />);

    await waitFor(() => {
      expect(
        getByText("You forgot your ice trays! YOU'RE GONNA NEED THE ICE TRAYS!"),
      ).toBeInTheDocument();
      expect(getByText('Walter White (Heisenberg)')).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  test('should handle errors', async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_API_URL}quote/random`,
        (req, res, ctx) => res(ctx.status(404)),
      ),

      rest.get(
        `${process.env.REACT_APP_API_URL}characters/:idCharacter`,
        (req, res, ctx) => res(ctx.status(404)),
      ),
    );

    const { getByText } = render(<App />);

    await waitFor(() => {
      expect(getByText('Could not load quote...')).toBeInTheDocument();
      expect(getByText('Could not load character...')).toBeInTheDocument();
    });
  });
});
