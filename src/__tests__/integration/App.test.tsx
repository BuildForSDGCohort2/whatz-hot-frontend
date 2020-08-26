import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { Axios } from '../../helpers/axios';

describe('The App', () => {
  const setupApp = (
    routerProps = {
      initialEntries: ['/', '*'],
      initialIndex: 0
    }
  ) =>
    render(
      <MemoryRouter {...routerProps}>
        <App />
      </MemoryRouter>
    );

  test('renders Home page', () => {
    const { container } = setupApp();

    expect(container.innerHTML).toMatch(/Welcome to whatz-hot/i);
  });
});
