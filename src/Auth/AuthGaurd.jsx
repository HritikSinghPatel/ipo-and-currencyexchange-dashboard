// AuthGuard.js
import { Navigate, Outlet} from 'react-router-dom';
import { useAuth } from './AuthContext';

const AuthGaurd = ({ children, ...rest }) => {
  const { authenticated } = useAuth();

  // Check if the user is authenticated, if not, redirect to the login page
  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  
  // If the user is authenticated, render the child routes (Outlet)
  return <Outlet />;
};

export default AuthGaurd;
