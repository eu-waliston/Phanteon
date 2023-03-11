import React, { Fragment } from "react";

import { Routes, BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Biography from "./components/History/Biography";
import Skins from "./components/Skins/Skins";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home />}/>
          <Route exact path="/biography" element={ <Biography />}/>
          <Route exact path="/skins" element={ <Skins />}/>
        </Routes>
      </BrowserRouter>

    </Fragment>
  )
}

export default App;
