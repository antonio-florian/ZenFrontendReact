import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders the main Zen app', () => {
    render(<App />);
    expect(screen.getByText('Zen')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
