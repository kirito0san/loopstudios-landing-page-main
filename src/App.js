import Footer from "./components/Footer";
import SectionOneAHeader from "./components/SectionOneAHeader";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";


function App() {
  return (
    <div className="App  flex-col flex gap-[80px]">
      <SectionOneAHeader />
      <SectionTwo />
      <SectionThree />
      <Footer />

    </div >

  );
}

export default App;
