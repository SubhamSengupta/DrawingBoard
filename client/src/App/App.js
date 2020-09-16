import React, {useState} from "react";

import Header from "./components/Header";
import Palette from "./components/Palette";
import Canvas from "./components/Canvas"

import { PEN, WIDTH_1, BLACK, YELLOW, HIGHLIGHTER } from "./components/constants"

const App = () => {
  const [selectedTool, selectTool] = useState(PEN);
  const [selectedWidth, selectWidth] = useState(WIDTH_1);
  const [selectedPenColor, selectPenColor] = useState(BLACK);
  const [selectedHLColor, selectHLColor] = useState(YELLOW);

  const setColor = color => {
    if (selectedTool === PEN) {
      selectPenColor(color)
    } else {
      selectHLColor(color);
    }
  }

  const selectedColor = selectedTool === PEN
    ? selectedPenColor
    : selectedHLColor;

  return (
    <div>
      <Header/>
      <Palette
        selectedTool={selectedTool}
        handleToolSelect={selectTool}
        selectedWidth={selectedWidth}
        handleWidthSelect={selectWidth}
        selectedColor={selectedColor}
        handleColorSelect={setColor}
      />
      <Canvas
        selectedTool={selectedTool}
        selectedWidth={selectedWidth}
        selectedColor={selectedColor}
      />
    </div>
  );
}

export default App;
