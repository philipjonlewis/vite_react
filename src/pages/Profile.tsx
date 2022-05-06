import React from "react";
import { useAuth } from "../utils/Auth";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  console.log(auth.user.username);
  const handleLogOut = () => {
    auth.logout();
    return <Navigate to="/" />;
  };

  return (
    <div>
      <div>
        <h1>Profile Page</h1>
        <p>Welcome! {auth.user}</p>
      </div>
      {auth.user && <button onClick={handleLogOut}>LogOut</button>}
    </div>
  );
};

export default Profile;
