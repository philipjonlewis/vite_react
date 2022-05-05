import React from "react";
import "./styles/style.scss";

import {
  Home,
  About,
  Contact,
  ErrorPage,
  Products,
  First,
  Second,
  Users,
  UserDetails,
  Profile,
} from "./pages";

import { AuthProvider } from "./utils/auth";

//This is how you lazy load
const LazyAbout = React.lazy(() => import("./pages/About"));

import { LogIn, Navbar, RequireAuth } from "./components";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            // Must be nababalutan nitong react suspense ang mga lazy components
            // Use lazy components for heavy components
            <React.Suspense fallback={<ErrorPage />}>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />}>
          {/* This index is the one that will be shown first */}
          <Route index element={<First />} />
          <Route path="first" element={<First />} />
          <Route path="second" element={<Second />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="login" element={<LogIn />} />
        {/* Make an authenticated component */}

        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
