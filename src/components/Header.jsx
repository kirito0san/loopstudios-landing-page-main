import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={
        " flex items-center justify-between  App-header font-Josefin" + (open ? " Open" : "")
      }
    >
      <img
        className={"w-[192px]  z-40 h-[32px]"}
        src={require("../assets/images/logo.svg").default}
        alt="logo"
      />
      <img
        className={"z-40 cursor-pointer w-[24px] h-[16px] md:hidden" + (open ? " hidden" : " ")}
        src={require("../assets/images/icon-hamburger.svg").default}
        alt="hamburger"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <img
        className={"w-[20px] cursor-pointer h-[20px] z-40" + (open ? "" : " hidden")}
        src={require("../assets/images/icon-close.svg").default}
        alt="icon-close"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <nav
        className={
          " transition-all  z-40 gap-5  md:flex hidden " +
          (open
            ? "!flex absolute flex-col text-3xl top-[150px] gap-7 uppercase left-1/2 -translate-x-1/2  w-[90%]  h-screen "
            : " hidden")
        }
      >
        <p>About</p>
        <p>Careers</p>
        <p>Events</p>
        <p>Products</p>
        <p>Support</p>
      </nav>
    </header>
  );
};

export default Header;
