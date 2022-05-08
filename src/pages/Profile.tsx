import React from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { logout } from "../redux/authState";

const Profile = () => {
  const navigate = useNavigate();
  const { username, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    window.location.reload();
    return navigate("/login");
  };

  return (
    <div>
      <div>
        <h1>Profile Page</h1>
        <p>Welcome! {username}</p>
      </div>
      {isAuthenticated && <button onClick={handleLogOut}>LogOut</button>}
    </div>
  );
};

export default Profile;
