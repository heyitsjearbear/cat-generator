import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem('token') !== null; // Replace this with your actual authentication check

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;