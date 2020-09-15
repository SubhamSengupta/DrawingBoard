import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import useListeners from "../../../../utils/hooks/useListeners";

const Canvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasContext, setCanvasContext] = useState(null);
  const [lastMouseCoord, setLastMouseCoord] = useState({});
  const [currentMouseCoord, setCurrentMouseCoord] = useState({});

  const canvasRef = useRef();

  const handleCurrentMouseCoord = event => {
    if (canvasRef.current) {
      const { offsetLeft, offsetTop } = canvasRef.current;
      const { clientX, clientY } = event;

      setCurrentMouseCoord({
        x: clientX - offsetLeft,
        y: clientY - offsetTop
      });
    }
  }

  const draw = () => {
    const { x:currentX = 0, y:currentY = 0 } = currentMouseCoord;
    const { x:previousX = 0, y:previousY = 0 } = lastMouseCoord;

    if (canvasContext) {
      canvasContext.beginPath();
      canvasContext.moveTo(previousX, previousY);
      canvasContext.lineTo(currentX, currentY);
      canvasContext.strokeStyle = 'black';
      canvasContext.lineWidth = 1;
      canvasContext.stroke();
      canvasContext.closePath();
    }

    setLastMouseCoord({ x: currentX, y: currentY });
  }

  const resetPrevious = event => {
    const { clientX, clientY } = event;
    const { offsetLeft, offsetTop } = canvasRef.current;
    setLastMouseCoord({x: clientX - offsetLeft, y: clientY - offsetTop});
  }

  const handleMouseMove = e => handleCurrentMouseCoord(e);
  const handleMouseUp = e => {
    handleCurrentMouseCoord(e);
    setIsDrawing(false);
  }
  const handleMouseDown = event => {
    resetPrevious(event);
    handleCurrentMouseCoord(event)
    setIsDrawing(true);
  }

  useListeners({ handleMouseUp, handleMouseMove, handleMouseDown });
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    setCanvasContext(context);
    canvasRef.current.width = window.innerWidth - 5;
    canvasRef.current.height = window.innerHeight - 100;
  }, []);

  useEffect(() => {if (isDrawing) draw();}, [currentMouseCoord.x]);

  return (
    <CanvasEl ref={canvasRef} height="720px" width="1400px">
      canvas
    </CanvasEl>
  );
}

const CanvasEl = styled.canvas`
  border-radius: 0.4rem;
  box-shadow: 0 0 1.4rem 0.4rem rgba(0, 0, 0, 0.2);
`;

export default Canvas;
