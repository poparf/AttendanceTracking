import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";

const App = () => {

    useEffect(() => {
        // Get token from URL if it exists
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        
        if (token) {
            // Store the token
            localStorage.setItem('token', token);
            // Remove token from URL
            window.history.replaceState({}, document.title, window.location.pathname);
            // You can also redirect to another page here if needed
        }
    }, []);

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
              minHeight: "400px", // Added height
              padding: "2rem", // Added padding
            }}
          >
            <input type="text" name="" id="" className="form-control mb-3" />
            <br />
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            ></GoogleLogin>
            <button
              className="btn btn-outline-dark"
              onClick={() =>
                (window.location.href = "http://localhost:3001/auth/google")
              }
            >
              Sign in with Google
            </button>
          </div>
          <div
            className="col-md-6"
            style={{
              backgroundColor: "green",
              minHeight: "400px", // Added height
              display: "flex", // Added flex
              alignItems: "center", // Added center alignment
              justifyContent: "center",
              padding: "2rem", // Added padding
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
