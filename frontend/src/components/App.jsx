import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Logout from "./Logout";
import UserDetails from "./UserDetails";
import ParticipantForm from "./ParticipantForm";
import GroupForm from "./GroupForm";
import LoginForm from "./LoginForm";
import GroupList from "./GroupList";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token !== null) {
      axios
        .get("http://localhost:3001/auth/google/userdetails", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, document.title, window.location.pathname);
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
              minHeight: "400px",
              padding: "2rem",
            }}
          >
            {!user ? (
              <>
                <LoginForm />
              </>
            ) : (
              <>
                <div className="text-center">
                  <UserDetails user={user} />

                  <Logout setUser={setUser} />
                </div>
              </>
            )}
          </div>
          {!user ? (
            <>
              <ParticipantForm />
            </>
          ) : (
            <>
              <GroupList user={user}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
