import { Navigate, useLocation } from 'react-router-dom';

function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ error: 'Please log in first.' }} replace />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/" state={{ error: 'Access denied. Admins only.' }} replace />;
  }

  return children;
}

export default AdminRoute;
