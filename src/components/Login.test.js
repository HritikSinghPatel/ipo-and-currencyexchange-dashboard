import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import { AuthProvider } from '../Auth/AuthContext';

jest.mock('../Auth/AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

describe('Login Component', () => {
  it('renders login form and handles login', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );

    // Check if the login form is rendered
    expect(screen.getByText(/Login/i)).toBeInTheDocument();

    // Mock input values
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Trigger login button click
    fireEvent.click(screen.getByText(/Login/i));

    // Check if the login function is called with the correct arguments
    expect(useAuth().login).toHaveBeenCalledWith('testuser', 'testpassword');
  });

  it('redirects to dashboard after successful login', async () => {
    // Mock the useNavigate function from react-router-dom
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );

    // Mock input values
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Trigger login button click
    fireEvent.click(screen.getByText(/Login/i));

    // Check if useNavigate is called with the correct argument
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
  });
});
