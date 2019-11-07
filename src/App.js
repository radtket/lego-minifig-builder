import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [values, setValues] = useState({
    expression: 0,
    upperHue: 200,
    upperSaturation: 0,
    upperLightness: 90,
  });

  return (
    <div>
      <Sidebar {...{ values, setValues }} />
    </div>
  );
};

export default App;
