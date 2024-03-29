const SectionTwo = () => {
  return (
    <div className=" SectionTwo">
      <img
        className="md:hidden"
        src={require("../assets/images/desktop/image-interactive.jpg")}
        alt="interactive"
      />
      <img
        className="hidden md:block   w-[731px] h-[500px]"
        src={require("../assets/images/mobile/image-interactive.jpg")}
        alt="interactive"
      />
      <div className="bottom-0  left-[575px] md:grow   md:flex md:flex-col md:items-center xl:absolute md:bg-white md:p-10 md:pb-0">
        <p className="my-10 md:max-w-[447px] text-4xl uppercase md:text-6xl ">
          {" "}
          The leader in interactive VR
        </p>
        <p className="md:max-w-[447px]">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
          some of the best companies around the globe. Our award-winning creations have transformed
          businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
