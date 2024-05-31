import React, { FC } from "react";
import ColorfulLoader from "../colorfulLoader";

const Example: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ColorfulLoader />
    </div>
  );
};

export default Example;
