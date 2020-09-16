import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"

import { PEN, HIGHLIGHTER, ERASER } from "../../../constants";
import { Holder, Tools, Tool, Title } from "../styles";

const tools = [
  {
    icon: '&#128394;',
    key: PEN
  },
  {
    icon: '&#128397;',
    key: HIGHLIGHTER
  },
  {
    icon: '&#128433;',
    key: ERASER
  }
]

const ToolSelector = ({ selected, handleSelect }) => {
  const handleToolSelect = key => () => handleSelect(key)
  return (
    <Holder>
      <Title>Choose tool</Title>
      <Tools>
        {tools.map(({icon, key}) => (
          <Tool
            key={key}
            isSelected={key === selected}
            onClick={handleToolSelect(key)}
            dangerouslySetInnerHTML={{__html: icon}}
          />
        ))}
      </Tools>
    </Holder>
  )
}

ToolSelector.propTypes = {
  selected: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired
}

export default ToolSelector;
