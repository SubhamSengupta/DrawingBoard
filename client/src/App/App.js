import React from "react";

import Header from "./components/Header";
import Palette from "./components/Palette";
import Canvas from "./components/Canvas"

const App = () => {
  return (
    <div>
      <Header/>
      <Palette/>
      <Canvas/>
    </div>
  );
}

export default App;
