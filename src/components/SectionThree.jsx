const SectionThree = () => {
  return (
    <div className="SectionThree md:flex-col mb-[150px]">
      <div className="flex flex-col ">
        <div className="flex justify-center md:justify-between">
          <h3 className="my-10 text-4xl text-center uppercase font-Josefin"> Our creations</h3>
          <button className="hidden btn md:block">see all</button>
        </div>{" "}
        <div className="imgsMobile">
          <div>
            <img src={require("../assets/images/mobile/image-deep-earth.jpg")} alt="deep-earth" />
            <img src={require("../assets/images/desktop/image-deep-earth.jpg")} alt="deep-earth" />
            <p>
              Deep <br /> earth
            </p>
          </div>
          <div>
            <img
              src={require("../assets/images/mobile/image-night-arcade.jpg")}
              alt="night-arcade"
            />
            <img
              src={require("../assets/images/desktop/image-night-arcade.jpg")}
              alt="night-arcade"
            />
            <p>
              Night <br /> arcade
            </p>
          </div>
          <div>
            <img
              src={require("../assets/images/mobile/image-soccer-team.jpg")}
              alt="Soccer-team-VR"
            />
            <img
              src={require("../assets/images/desktop/image-soccer-team.jpg")}
              alt="Soccer-team-VR"
            />
            <p>
              Soccer <br />
              team VR
            </p>
          </div>
          <div>
            <img src={require("../assets/images/mobile/image-grid.jpg")} alt="The-grid" />
            <img src={require("../assets/images/desktop/image-grid.jpg")} alt="The-grid" />
            <p>
              The <br />
              grid
            </p>
          </div>
          <div>
            <img
              src={require("../assets/images/mobile/image-from-above.jpg")}
              alt="From-up-above-VR"
            />
            <img
              src={require("../assets/images/desktop/image-from-above.jpg")}
              alt="From-up-above-VR"
            />
            <p>
              From up <br />
              above VR
            </p>
          </div>
          <div>
            <img
              src={require("../assets/images/mobile/image-pocket-borealis.jpg")}
              alt="Pocket-borealis"
            />
            <img
              src={require("../assets/images/desktop/image-pocket-borealis.jpg")}
              alt="Pocket-borealis"
            />
            <p>
              Pocket <br />
              borealis
            </p>
          </div>
          <div>
            <img src={require("../assets/images/mobile/image-curiosity.jpg")} alt="The-curiosity" />
            <img
              src={require("../assets/images/desktop/image-curiosity.jpg")}
              alt="The-curiosity"
            />
            <p>
              The <br />
              curiosity
            </p>
          </div>
          <div>
            <img src={require("../assets/images/mobile/image-fisheye.jpg")} alt="Make-it-fisheye" />
            <img
              src={require("../assets/images/desktop/image-fisheye.jpg")}
              alt="Make-it-fisheye"
            />
            <p>
              Make it
              <br />
              fisheye
            </p>
          </div>
        </div>
        <button className="btn md:hidden">see all</button>
      </div>
    </div>
  );
};

export default SectionThree;
