import { useState, useEffect } from "react";

import { HIGHLIGHTER, ERASER } from "../../constants"

const useCanvasDrawing = ({ canvasRef, selectedTool, selectedWidth, selectedColor }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasContext, setCanvasContext] = useState(null);
  const [lastMouseCoord, setLastMouseCoord] = useState({});
  const [currentMouseCoord, setCurrentMouseCoord] = useState({});

  const lineWidth = selectedTool === HIGHLIGHTER
    ? 5
    : selectedWidth;

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
      if (selectedTool === ERASER) {
        canvasContext.clearRect(previousX, previousY, currentX - previousX, 20);
      } else {
        if (selectedTool === HIGHLIGHTER) {
          canvasContext.globalAlpha = 0.5
        } else {
          canvasContext.globalAlpha = 1;
        }
        canvasContext.beginPath();
        canvasContext.moveTo(previousX, previousY);
        canvasContext.lineTo(currentX, currentY);
        canvasContext.strokeStyle = selectedColor;
        canvasContext.lineWidth = lineWidth;
        canvasContext.stroke();
        canvasContext.closePath();
      }
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

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    setCanvasContext(context);
    canvasRef.current.width = window.innerWidth - 5;
    canvasRef.current.height = window.innerHeight - 100;
  }, []);

  useEffect(() => {if (isDrawing) draw();}, [currentMouseCoord.x]);

  return { handleMouseUp, handleMouseMove, handleMouseDown };
}



export default useCanvasDrawing;
