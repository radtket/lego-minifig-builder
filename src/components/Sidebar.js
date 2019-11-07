import React, { useState } from "react";

import styled from "styled-components";
import { Button, Fieldset, Legend } from "./FormElements";
import InputSlider from "./InputSlider";

const Controls = styled.aside`
  background-color: rgba(220, 220, 220, 0.5);
  color: #333;
  padding: 1.5em;
  position: relative;
  text-transform: uppercase;
  width: 200px;
  z-index: 1;

  h2 {
    font-size: 1.25em;
    font-weight: 900;
    letter-spacing: 0.03125em;
    margin-bottom: 0.5rem;
  }
`;

const inputConfig = {
  expression: {
    max: 500,
    min: 0,
    step: 100,
  },
};

const Sidebar = () => {
  const [values, setValues] = useState({
    expression: 0,
  });

  return (
    <Controls>
      <h2>Controls</h2>
      <Button type="button">Explode</Button>
      <Button type="button">Randomize</Button>
      <Fieldset>
        <Legend>Head</Legend>
        <InputSlider
          id="expression"
          inputProps={{
            ...inputConfig.expression,
            value: 0,
          }}
          label="Expression"
        />
      </Fieldset>
      {/*
      <Fieldset>
        <Legend>Upper Body</Legend>
        <InputSlider
          id="upper-hue"
          inputProps={{
            max: 360,
            min: 0,
            step: 100,
            value: 200,
          }}
          label="Hue"
        />
      </Fieldset> */}
    </Controls>
  );
};

export default Sidebar;
