import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

import { Section } from "./components/styles"

import ToolSelector from "./components/ToolSelector";
import WidthSelector from "./components/WidthSelector";
import ColorChooser from "./components/ColorChooser"

const Palette = ({
  selectedTool,
  handleToolSelect,
  selectedWidth,
  handleWidthSelect,
  selectedColor,
  handleColorSelect
}) => {
  return (
    <Section>
      <ToolSelector
        selected={selectedTool}
        handleSelect={handleToolSelect}
      />
      <WidthSelector
        selected={selectedWidth}
        handleSelect={handleWidthSelect}
        selectedTool={selectedTool}
      />
      <ColorChooser
        selected={selectedColor}
        handleSelect={handleColorSelect}
        selectedTool={selectedTool}
      />
    </Section>
  );
}

Palette.propTypes = {
  selectedTool: PropTypes.string.isRequired,
  handleToolSelect: PropTypes.func.isRequired,
  selectedWidth: PropTypes.number.isRequired,
  handleWidthSelect: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
  handleColorSelect: PropTypes.func.isRequired,
}



export default Palette;
