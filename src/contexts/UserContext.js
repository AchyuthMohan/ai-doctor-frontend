import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axiosInstance from "../auth/authHandler";
import { baseUrl } from "../utils/urls";

export const UserContext = createContext();

const UserDetails = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currusername, setCurrusername] = useState("");
  const [curruseremail, setCurruseremail] = useState("");
  const [curruserid, setCurruserid] = useState();
  const [appoints, setAppoints] = useState([]);
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/current-user/`).then(
      (response) => {
        setCurrusername(response.data.username);
        setCurruseremail(response.data.email);
        setCurruserid(response.data.id);
        setIsAuthenticated(true);
      },
      (error) => {
        if (error.response.status === 401) {
          setIsAuthenticated(false);
        }
      }
    );
  }, [curruserid]);
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/book-appointment/`).then(
      (response) => {
        setAppoints(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [curruserid]);
  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        appoints,
        setIsAuthenticated,
        curruseremail,
        curruserid,
        currusername,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserDetails;
