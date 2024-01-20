// App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Navbar', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders main content', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument(); 
  });

  it('renders Footer', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('displays loading state on initial load', async () => {
    render(<App />);
    expect(await screen.findByText('Loading')).toBeInTheDocument();
  });

  it('routes to Home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
