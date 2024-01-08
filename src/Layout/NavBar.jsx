import React from "react";
import logoLight from "../assets/logo-dark.svg";

const NavBar = () => {
  return (
    <>
      <nav className="px-[24px] py-[24px] border">
        <img className="" src={logoLight} alt="logo"></img>
      </nav>
    </>
  );
};

export default NavBar;
