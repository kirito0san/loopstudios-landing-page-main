import Header from "./Header";

const SectionOneAHeader = () => {
  return (
    <div className="SectionOne ">
      <div className="flex flex-col pt-[50px] gap-[100px]">
        <Header />
        <div className="border-2 uppercase font-Josefin   md:w-[500px] p-5 text-[42px] md:text-6xl">
          Immersive experiences that deliver
        </div>
      </div>
    </div>
  );
};

export default SectionOneAHeader;
