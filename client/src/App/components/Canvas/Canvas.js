import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

import useListeners from "./hooks/useListeners";
import useCanvasDrawing from './hooks/useCanvasDrawing'

const Canvas = ({ selectedTool, selectedWidth, selectedColor }) => {
  const canvasRef = useRef();

  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp
  } = useCanvasDrawing({ canvasRef, selectedTool, selectedWidth, selectedColor });
  useListeners({ handleMouseUp, handleMouseMove, handleMouseDown });

  return (
    <CanvasEl ref={canvasRef} height="720px" width="1400px">
      canvas
    </CanvasEl>
  );
}

Canvas.propTypes = {
  selectedTool: PropTypes.string.isRequired,
  selectedWidth: PropTypes.number.isRequired
}

const CanvasEl = styled.canvas`
  border-radius: 0.4rem;
  box-shadow: 0 0 1.4rem 0.4rem rgba(0, 0, 0, 0.2);
`;

export default Canvas;
