import React from "react";
import { useAuth } from "../utils/Auth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const auth: AuthType = useAuth();

  // console.log(auth);

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return <>children</>;
};

export default RequireAuth;
