import { useState } from "react";
import hamburger from "../assets/icon-menu.svg";
import sailLogo from "../assets/Sail logo.png";
import arrowside from "../assets/arrowside.svg";
import arrowdown from "../assets/arrowdown.svg";
import DashboardIcon from "../assets/dashboard-svgrepo-com.svg";
import { NavLink, Link } from "react-router-dom";
import admin from "../assets/admin-with-cogwheels-svgrepo-com.svg";
import messageicon from '../assets/messages-svgrepo-com.svg';
import studentIcon from '../assets/boy-and-girl-students-svgrepo-com.svg'

const Sidepane = ({ showSidebar, setShowSidebar }) => {
  function handleSidebar() {
    setShowSidebar(!showSidebar);
  }
  return (
    <div
      className="hidden md:block w-[25%] bg-white overflow-y-auto fixed top-0 left-0 z-10 max-h-[100vh] p-2 sideMenu "
      style={showSidebar ? { display: "block" } : { display: "none" }}
    >
      <nav className="flex items-center justify-between pb-2">
        <img className="w-28" src={sailLogo} alt="sail logo" />
        <img src={hamburger} alt="hamburger icon" onClick={handleSidebar} />
      </nav>
      <ul className="mt-8">
        <Sidepanecontent heading="Dashboard" icon={DashboardIcon} />
        <Sidepanecontent
          heading="Courses"
          arrow={true}
          icon={DashboardIcon}
        ></Sidepanecontent>
        <Sidepanecontent
          heading="Instructors"
          arrow={true}
          icon={DashboardIcon}
        />
        <Sidepanecontent heading="Students" icon={studentIcon} />
        <Sidepanecontent
          heading="Enrolment"
          arrow={true}
          icon={DashboardIcon}
        />
        <Sidepanecontent heading="Messages" icon={messageicon} />
        <Sidepanecontent heading="Admin Profile" icon={admin} />
        <Sidepanecontent heading="Settings" icon={DashboardIcon} />
      </ul>
    </div>
  );
};

export default Sidepane;

const Sidepanecontent = ({ heading, to, icon, arrow, children }) => {
  const [direction, setDirection] = useState(false);

  function directionHandler() {
    setDirection(!direction);
  }

  return (
    <NavLink
      onClick={directionHandler}
      className="flex items-center p-2 py-4 mb-3 hover:bg-slate-200 sideContent w-[100%]"
      to={to}
    >
      <Link>
        <img src={icon} alt="" className="w-8 bg-transparent mr-4 pr-0" />
      </Link>
      <h5 className="text-xl text-slate-4 ">
        <Link>{heading}</Link>
      </h5>
      {arrow && (
        <img
          src={direction ? arrowdown : arrowside}
          alt="arrow icon"
          className="ml-auto"
        />
      )}
      <div>{direction && children}</div>
    </NavLink>
  );
};
