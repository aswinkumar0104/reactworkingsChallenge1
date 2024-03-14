import React from "react";

const BoxContent = ({ boxContent, color, hexValue }) => {
  return (
    <div>
      <main style={{ background: boxContent, color: color }}>
        <p>{boxContent ? boxContent : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
      </main>
    </div>
  );
};

export default BoxContent;
