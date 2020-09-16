import React from "react";
import PropTypes from "prop-types";

import { ERASER } from "../../../constants"
import { Holder, Tools, Title } from "../styles"

const ColorChooser = ({ selected, handleSelect, selectedTool }) => {
  const handleColor = e => {
    const color = e.target.value;
    handleSelect(color);
  }

  const isChooserDisabled = selectedTool === ERASER;

  return (
    <Holder>
      <Title disabled={isChooserDisabled}>Choose color</Title>
      <Tools>
        <input
          type="color"
          value={selected}
          onChange={handleColor}
          disabled={isChooserDisabled}
        />
      </Tools>
    </Holder>
  )
};

ColorChooser.propTypes = {
  selected: PropTypes.string.isRequired,
  selectedTool: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired
}

export default ColorChooser;
