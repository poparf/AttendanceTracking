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
    <>
      {!user ? (
        <div className="text-white  flex justify-center items-center font-sferaregular  w-screen h-screen bg-black">
          <div className="rounded-md flex justify-center items-center h-5/6 w-5/6 bg-customColors-dark-green">
            <LoginForm />
            <ParticipantForm />
          </div>
        </div>
      ) : (
        <div className="text-white font-sferaregular  w-screen h-screen bg-black">
          <div className="flex items-start justify-between p-6">
            <div className="ml-6">
              <UserDetails user={user} />
            </div>
            <div className="mr-6">
              <Logout setUser={setUser} />
            </div>
          </div>
            <div className="font-everettlight text-white">
              <GroupList user={user} />
            </div>
        </div>
      )}
    </>
  );
};

export default App;
