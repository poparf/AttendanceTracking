// UserContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { serverBaseUrl } from "../utils/variables";

const retrieveToken = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  if (token) {
    localStorage.setItem("token", token);
  } 
  return localStorage.getItem("token");
};

const fetchUserData = async (token) => {
  try {
    const response = await axios.get(`${serverBaseUrl}/auth/google/userdetails`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user data", error);
    throw error;
  }
};

const fetchGroupsData = async (token) => {
  try {
    const response = await axios.get("http://localhost:3001/api/group", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch groups data", error);
    throw error;
  }
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const token = retrieveToken();
    if (token) {
      (async () => {
        try {
          const userData = await fetchUserData(token);
          setUser(userData);

          const groupsData = await fetchGroupsData(token);
          setGroups(groupsData);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, groups, setGroups }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;