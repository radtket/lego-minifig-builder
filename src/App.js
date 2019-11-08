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
    <main
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <MiniFig {...{ ...values, isExploded }} />
      <Sidebar {...{ values, setValues, isExploded, setIsExploded }} />
    </main>
  );
};

export default App;
