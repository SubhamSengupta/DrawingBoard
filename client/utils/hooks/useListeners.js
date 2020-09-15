import { useEffect } from "react";
import _throttle from "lodash-es/throttle"

const useListeners = ({ handleMouseMove, handleMouseDown, handleMouseUp }) => {
  const throttledMouseMove = _throttle(handleMouseMove, 30);

  useEffect(() => {
    window.addEventListener('mousemove', throttledMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    }
  }, []);
}

export default useListeners;
