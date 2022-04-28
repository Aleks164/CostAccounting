import React, { useState } from "react";

interface MyEventTarget extends EventTarget {
  style: { backgroundColor: string };
}

export const h1Style = {
  border: `2px solid black`,
  backgroundColor: `rgb(176 159 233)`,
  textAlign: `center`,
  width: `230px`,
};

export const Title = () => {
  const [value, setValue] = useState(false);
  const [hover, setHover] = useState(false);
  const handleChange = () => {
    setValue(!value);
  };

  const hoverChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (hover) {
      (
        event.target as MyEventTarget
      ).style.backgroundColor = `rgb(176 159 233)`;
    } else {
      (event.target as MyEventTarget).style.backgroundColor = `red`;
    }
    setHover(!hover);
  };
  return (
    <>
      <h1
        style={h1Style as React.CSSProperties}
        onClick={handleChange}
        onMouseEnter={hoverChange}
        onMouseLeave={hoverChange}
      >
        Click on me
      </h1>
      {value && (
        <div style={h1Style as React.CSSProperties}>
          <h1>Hidden content1</h1>
          <hr />
          <h1>Hidden content2</h1>
          <hr />
          <h1>Hidden content3</h1>
        </div>
      )}
    </>
  );
};
