import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/Auth";

const LogIn = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const location = useLocation() as any;
  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label>Username</label>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleLogin}>LogIn</button>
    </div>
  );
};

export default LogIn;
