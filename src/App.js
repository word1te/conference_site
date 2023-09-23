import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Section1 from "Components/Section-1/Section-1";
import Section2 from "Components/Section-2/Section-2";
import Section3 from "Components/Section-3/Section-3";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
          <main>
            <Section1/>
            <Section2/>
            <Section3/>
          </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
