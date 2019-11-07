import React from "react";

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
  hue: {
    max: 360,
    min: 0,
  },
  saturation: {
    max: 100,
    min: 0,
  },
  lightness: {
    max: 90,
    min: 0,
  },
};

const Sidebar = ({ values, setValues }) => {
  const onChange = ({ target: { name, value } }) => {
    setValues(prev => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

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
            value: values.expression,
            onChange,
          }}
          label="Expression"
        />
      </Fieldset>

      <Fieldset>
        <Legend>Upper Body</Legend>
        <InputSlider
          id="upperHue"
          inputProps={{
            ...inputConfig.hue,
            value: values.upperHue,
            onChange,
          }}
          label="Hue"
        />
        <InputSlider
          id="upperSaturation"
          inputProps={{
            ...inputConfig.saturation,
            value: values.upperSaturation,
            onChange,
          }}
          label="Saturation"
        />
        <InputSlider
          id="upperLightness"
          inputProps={{
            ...inputConfig.lightness,
            value: values.upperLightness,
            onChange,
          }}
          label="Saturation"
        />
      </Fieldset>
    </Controls>
  );
};

export default Sidebar;
