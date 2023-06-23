import React from "react";
import { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepo from "./mockData.js/mockRepo";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";
const rootUrl = "https://api.github.com";
const GithubtContext = React.createContext();
//Provider,consumer GithubContext.provider
const GithubProvider = ({ children }) => {
  return <GithubtContext.Provider value={'hello'}>{children}</GithubtContext.Provider>;
};
export {GithubProvider,GithubtContext}
