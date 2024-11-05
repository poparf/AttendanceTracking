import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Logout from "./Logout";
import UserDetails from "./UserDetails";
import ParticipantForm from "./ParticipantForm";
import GroupForm from "./GroupForm";
import LoginForm from "./LoginForm";
import GroupList from "./GroupList";
import GoogleBtn from "./GoogleBtn";

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
    <div className="font- flex justify-center items-center w-screen h-screen bg-customColors-dark-green-shadow">
      {!user ? (
        <div className="rounded-md flex justify-center items-center h-5/6 w-5/6 bg-customColors-dark-green">
          <LoginForm />
          <ParticipantForm />
        </div>
      ) : (
        <div>
          <UserDetails user={user} />
          <Logout setUser={setUser} />
          <div>
            <GroupList user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
