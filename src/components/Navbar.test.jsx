import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Mock props
const defaultProps = {
  showNavbar: true,
  nightMode: false,
  setNightMode: () => {},
};

describe('Navbar', () => {
  it('renders the Zen logo', () => {
    render(
      <MemoryRouter>
        <Navbar {...defaultProps} />
      </MemoryRouter>
    );
    expect(screen.getByText('Zen')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar {...defaultProps} />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('New Stories')).toBeInTheDocument();
    expect(screen.getByText('Top Weekly Stories')).toBeInTheDocument();
  });

  it('renders Login and Register buttons', () => {
    render(
      <MemoryRouter>
        <Navbar {...defaultProps} />
      </MemoryRouter>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });
});
