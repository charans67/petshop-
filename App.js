import React from 'react';
import Header from "./Header";
import Comp1 from "./Compo1";
import Compo2 from "./Compo2";
import Compo3 from "./Compo3";
import Compo4 from "./compo4";
import Compo5 from "./Compo5";
import Compo6 from "./Compo6";
import Compo7 from "./Compo7";
import Compo8 from "./Compo8";
import Footer from "./Footer";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
     <Header /> 
    <Comp1 />
    <Compo2 />
    <Compo3 />
    <Compo4 />
    <Compo5 />
    <Compo6 />
    <Compo7 />
    <Compo8 />
    <Footer />
    <Routes>
      <Route path="/" element={<Header/>} />
    </Routes>
    </div>
  );
}

export default App;
