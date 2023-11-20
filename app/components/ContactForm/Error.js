import React from "react";

export default function Error({ message }) {
  return (
    <div style={{ display: "flex" }}>
      <p
        style={{
          paddingTop: "0.3rem",
          paddingBottom: "0.3rem",
          lineHeight: "22px",
        }}
      >
        {message}
      </p>
    </div>
  );
}
