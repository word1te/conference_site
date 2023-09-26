import Footer from "./Components/Footer/Footer";
import FirstScreen from "./Components/FirstScreen/FirstScreen";
import Section1 from "./Components/Section-1/Section-1";
import Section2 from "./Components/Section-2/Section-2";
import Section3 from "./Components/Section-3/Section-3";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function App() {
  const [elementInView, setElementInView] = useState(false);
  const [element2InView, setElement2InView] = useState(false);
  const elementScroll = useInView({
    threshold: 0.5,
  });

  const element2Scroll = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (elementScroll.inView) setElementInView(true);
  }, [elementScroll.inView]);

  useEffect(() => {
    if (element2Scroll.inView) setElement2InView(true);
  }, [element2Scroll.inView]);

  return (
    <>
      <div className="container">
        <main>
          <FirstScreen />
          <Section1 />
          <Section2 userRef={elementScroll.ref} elementInView={elementInView} />
          <Section3
            userRef={element2Scroll.ref}
            elementInView={element2InView}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
