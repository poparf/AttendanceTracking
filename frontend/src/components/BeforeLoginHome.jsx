import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import CS50BG from "../images/CS50BG.jpg"
import TimelineCycle from "../images/TimelineCycle.png";

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
  }, [user]);

  return (
    <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">
      <div className="w-full h-full relative">
        <img src={CS50BG} alt="background" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="backdrop-blur-sm relative z-10 flex flex-col items-center justify-center h-full">
          <div className="mb-4">
            <p className="text-white font-bold font-everettlight text-6xl">We're changing the way you interact with your participants</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-400 font-everettlight text-4xl">Create events, see your participants and more</p>
          </div>
          <div>
            <LoginForm/>
          </div>
        </div>
      </div>
      
      <div className="w-screen h-screen flex items-center justify-center bg-white">
        <img src={TimelineCycle} alt="Timeline cycle of steps"/>
      </div>
    </div>
  )
};

export default BeforeLoginHome;
