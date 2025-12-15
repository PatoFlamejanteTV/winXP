import React, { useState, useEffect } from 'react';

function DashedBox({ startPos }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (startPos) {
      setMouse({ x: startPos.x, y: startPos.y });
    }
    const onMouseMove = e => {
      setMouse({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [startPos]);

  function getRect() {
    return {
      x: Math.min(startPos.x, mouse.x),
      y: Math.min(startPos.y, mouse.y),
      w: Math.abs(startPos.x - mouse.x),
      h: Math.abs(startPos.y - mouse.y),
    };
  }
  if (startPos) {
    const { x, y, w, h } = getRect();
    return (
      <div
        style={{
          transform: `translate(${x}px,${y}px)`,
          width: w,
          height: h,
          position: 'absolute',
          border: `1px dotted gray`,
        }}
      />
    );
  }
  return null;
}

export default DashedBox;
