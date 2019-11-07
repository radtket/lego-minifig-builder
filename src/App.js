import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { defaultSliderValues } from "./utils/constants";

const App = () => {
  const [values, setValues] = useState({
    ...defaultSliderValues,
  });

  return (
    <div>
      <Sidebar {...{ values, setValues }} />
    </div>
  );
};

export default App;
