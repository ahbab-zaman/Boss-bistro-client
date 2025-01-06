import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [iseAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (user && iseAdmin) {
    return children;
  }
  if (loading || isAdminLoading) {
    return <span className="loading loading-bars loading-lg "></span>;
  }
  return (
    <div>
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </div>
  );
};

export default AdminRoute;
