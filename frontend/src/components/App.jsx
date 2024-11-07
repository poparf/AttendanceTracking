// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserProvider from "../hooks/UserProvider";
import useUser from "../hooks/useUser";
import Home from "./Home";
import BeforeLoginHome from "./BeforeLoginHome";
import CreateEvent from "./CreateEvent";

const App = () => {
  const { user } = useUser();
  const [windowLocation, setWindowLocation] = useState(window.location.pathname);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<BeforeLoginHome windowLocation={windowLocation}/>} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/create-event" element={user ? <CreateEvent /> : <Navigate to="/login" />} />
        <Route path="*" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default () => (
  <UserProvider>
    <App />
  </UserProvider>
);
