import React from "react";
import { Infos, Repos, User, Search, Navbar } from "../component";
import loadingImages from "../images/preloader.gif";
import { GithubContext } from "../content/content";
const Dashboard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Infos />
      <User />
      <Repos />
    </main>
  );
};
export default Dashboard;
