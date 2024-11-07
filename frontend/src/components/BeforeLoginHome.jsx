import React, { useEffect } from "react";
import ParticipantForm from "./ParticipantForm";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

const BeforeLoginHome = ({windowLocation}) => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      if(windowLocation === "/login") {
        navigate("/home");
      } else {
        navigate(`${windowLocation}`);
      }
    }
  }, [user, navigate]);

  return (
    <div className="text-white flex justify-center items-center w-screen h-screen">
      <div className="rounded-md md:flex-row flex flex-col justify-center items-center h-5/6 w-5/6 bg-gray-400">
        <LoginForm />
        <div className="md:m-0 mt-8 mb-8"></div>
        <ParticipantForm />
      </div>
    </div>
  );
};

export default BeforeLoginHome;
