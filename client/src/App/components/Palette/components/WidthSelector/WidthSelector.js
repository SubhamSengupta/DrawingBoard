import React from "react";
import PropTypes from "prop-types";

import { WIDTH_1, WIDTH_3, WIDTH_5, PEN } from "../../../constants"
import { Title, Tools, Tool, Point, Holder } from "../styles";

const WidthSelector = ({ selected, handleSelect, selectedTool }) => {
  const isPenSelected = selectedTool === PEN;
  const handleWidthSelect = key => () => {
    if (isPenSelected) handleSelect(key);
  };

  return (
    <Holder>
      <Title disabled={!isPenSelected}>Choose width</Title>
      <Tools>
      {[WIDTH_1, WIDTH_3, WIDTH_5].map(width => (
          <Tool
            key={`width-${width}`}
            isSelected={isPenSelected && width === selected}
            onClick={handleWidthSelect(width)}
            disabled={!isPenSelected}
          >
            <Point width={width} disabled={!isPenSelected}/>
          </Tool>
        ))}
      </Tools>
    </Holder>
  );
};

WidthSelector.propTypes = {
  selected: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired,
  selectedTool: PropTypes.string.isRequired,
}

export default WidthSelector;
