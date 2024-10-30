import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from 'axios';
import Logout from "./Logout";
import UserDetails from "./UserDetails";
import getUserDetails from "../services/getUserDetails"

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if(token !== null) {
      let userDetails = getUserDetails(token);
      if(userDetails == null) {
        console.error("Error fetching user data:", error);
        localStorage.removeItem('token'); // Clear invalid token
        return;
      }
      setUser(userDetails);
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      localStorage.setItem('token', token);
      window.history.replaceState({}, document.title, window.location.pathname);      
    }
  }, []);

  const handleSuccess = (credentials) => {
    setUser(getUserDetails(credentials.credential));
  }

  const handleError = (error) => {
    console.error(error);
  }

  return (
    <div
      className="bg-dark"
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        className="container min-vh-100 d-flex align-items-center"
        style={{ border: "1px solid black" }}
      >
        <div className="row w-100 m-0">
          <div
            className="col-md-6"
            style={{
              backgroundColor: "white",
              minHeight: "400px",
              padding: "2rem",
            }}
          >
            {!user ? (
              <>
                <p>Enter your email:</p>
                <input type="text" name="" id="" className="form-control mb-3" />
                <br />
                <p>Or sign in with google:</p>
                <GoogleLogin onSuccess={handleSuccess}
                  onError={handleError}/>
                <button
                  className="btn btn-outline-dark"
                  onClick={() =>
                    (window.location.href = "http://localhost:3001/auth/google")
                  }
                >
                  
                  Sign in with Google
                </button>
              </>
            ) : (
              <div className="text-center">
                <UserDetails user={user}/>
                <Logout setUser={setUser}/>
              </div>
            )}
          </div>
          <div
            className="col-md-6"
            style={{
              backgroundColor: "green",
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <h2 className="text-white">Enter as participant</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;