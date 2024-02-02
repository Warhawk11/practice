import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from './App'; // Assuming this is your main App component
import Home from './component/Home';
import About from './component/About';
describe('App routing', () => {
    it('renders the Home component when the home route is accessed', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Home />
        </MemoryRouter>
      );
      expect(screen.getByText('Welcome to the Home Page')).toBeInTheDocument();
    });
    it('renders the About component when the about route is accessed', () => {
        render(
          <MemoryRouter initialEntries={['/about']}>
            <About />
          </MemoryRouter>
        );
        expect(screen.getByText('About Us')).toBeInTheDocument();
      });
})