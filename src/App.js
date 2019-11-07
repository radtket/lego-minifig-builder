import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MiniFig from "./components/MiniFig";
import { defaultSliderValues } from "./utils/constants";

const App = () => {
  const [values, setValues] = useState({
    ...defaultSliderValues,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <MiniFig />
      <Sidebar {...{ values, setValues }} />
    </div>
  );
};

export default App;
