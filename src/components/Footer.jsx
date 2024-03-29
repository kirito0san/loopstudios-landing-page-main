const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex justify-between items-center flex-wrap w-[90%] mx-auto p-5 md:p-10 text-white">
        <img
          className="w-[192px] mx-auto md:mx-0 order-1  md:order-none h-[32px] "
          src={require("../assets/images/logo.svg").default}
          alt=""
        />

        <div className="footerimg ">
          <p>
            <img src={require("../assets/images/icon-facebook.svg").default} alt="" />
          </p>
          <p>
            <img src={require("../assets/images/icon-instagram.svg").default} alt="" />
          </p>
          <p>
            <img src={require("../assets/images/icon-pinterest.svg").default} alt="" />
          </p>
          <p>
            <img src={require("../assets/images/icon-twitter.svg").default} alt="" />
          </p>
        </div>
        <nav className=" flex gap-5 flex-col text-center items-center md:items-start md:text-start md:flex-row w-full md:order-none order-2 md:w-[50%] mt-10">
          <p>About</p>
          <p>Careers</p>
          <p>Events</p>
          <p>Products</p>
          <p>Support</p>
        </nav>
        <p className="opacity-50 md:w-[50%] mx-auto md:mx-0 text-end md:order-none order-4  mt-10">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
