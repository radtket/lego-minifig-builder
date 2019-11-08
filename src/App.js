import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MiniFig from "./components/MiniFig";
import { defaultSliderValues } from "./utils/constants";

const App = () => {
  const [values, setValues] = useState({
    ...defaultSliderValues,
  });
  const [isExploded, setIsExploded] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <MiniFig {...{ isExploded }} />
      <Sidebar {...{ values, setValues, isExploded, setIsExploded }} />
    </div>
  );
};

export default App;
