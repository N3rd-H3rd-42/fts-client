import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./newNavBar.css";

const NewNavBar = () => {
  const [clicked, setClicked] = useState(false);
  // const navigate = useNavigate();
  const items = [
    {
      title: "request a ride",
      url: "/",
      cName: "nav-item",
    },
    {
      title: "home",
      url: "/",
      cName: "nav-item",
    },
    {
      title: "about",
      url: "/about",
      cName: "nav-item",
    },
    {
      title: "contact",
      url: "/contact",
      cName: "nav-item",
    },
    {
      title: "apply",
      url: "/apply",
      cName: "nav-item",
    },
    {
      title: "login",
      url: "/login",
      cName: "nav-item",
    },
  ];

  // const handleNavigation = (pathname) => {
  //   if (pathname) navigate(`${pathname}`, { replace: true })
  // };

  const renderNavItems = () => {
    return items.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.url} className={item.cName}>
            {item.title.toUpperCase()}
          </a>
        </li>
      );
    });
  };

  const onHandleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="nav-menu">
      <img src="./images/fts-logo.jpeg" className="nav-logo" alt="fts-logo" />

      <div className="menu-icon" onClick={onHandleClick}>
        <i className={clicked ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>
      </div>

      <ul className={clicked ? "nav-list active" : "nav-list"}>
        {renderNavItems()}
      </ul>
    </nav>
  );
};

export default NewNavBar;
