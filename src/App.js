import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import FirstScreen from "./Components/FirstScreen/FirstScreen";
import Section1 from "./Components/Section-1/Section-1";
import Section2 from "./Components/Section-2/Section-2";
import Section3 from "./Components/Section-3/Section-3";
import React from "react";


function App() {
  return (
    <>
      <div className="container">
        <Header />
          <main>
            <FirstScreen />
            <Section1 />
            {/*<Section2/>*/}
            <Section3/>
          </main>
        <Footer />
      </div>
    </>
  )
}

export default App;
