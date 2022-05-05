import React from "react";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();

  const handleLogOut = () => {
    auth.logout();
    useNavigate("/");
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
