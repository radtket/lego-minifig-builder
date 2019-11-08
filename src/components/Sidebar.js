import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";
import { rgba } from "polished";
import { Button, Fieldset, Legend } from "./FormElements";
import InputSlider from "./InputSlider";
import { defaultSliderValues, inputConfig } from "../utils/constants";
import { theme } from "../theme";

const { gray1 } = theme.colors;

const Controls = styled.aside`
  background-color: ${rgba(gray1, 0.5)};
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

const Sidebar = ({ values, setValues, isExploded, setIsExploded }) => {
  const onChange = ({ target: { name, value } }) => {
    setValues(prev => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

  const getRandomNum = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const randomize = () => {
    setValues(
      Object.entries(inputConfig).reduce((all, one) => {
        const [key, value] = one;
        const { min, max } = value;

        return {
          ...all,
          [key]:
            key !== "expression"
              ? getRandomNum(min, max)
              : Math.ceil((getRandomNum(0, 5) * 100) / 100) * 100,
        };
      }, values)
    );
  };

  return (
    <Controls>
      <h2>Controls</h2>
      <Button onClick={() => setIsExploded(!isExploded)} type="button">
        {isExploded ? "Rebuild" : "Explode"}
      </Button>
      <Button onClick={randomize} type="button">
        Randomize
      </Button>
      <Button
        onClick={() => {
          setValues({ ...defaultSliderValues });
        }}
        type="button"
      >
        Reset
      </Button>
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
            ...inputConfig.upperHue,
            value: values.upperHue,
            onChange,
          }}
          label="Hue"
        />
        <InputSlider
          id="upperSaturation"
          inputProps={{
            ...inputConfig.upperSaturation,
            value: values.upperSaturation,
            onChange,
          }}
          label="Saturation"
        />
        <InputSlider
          id="upperLightness"
          inputProps={{
            ...inputConfig.upperLightness,
            value: values.upperLightness,
            onChange,
          }}
          label="Lightness"
        />
      </Fieldset>

      <Fieldset>
        <Legend>Lower Body</Legend>
        <InputSlider
          id="lowerHue"
          inputProps={{
            ...inputConfig.lowerHue,
            value: values.lowerHue,
            onChange,
          }}
          label="Hue"
        />
        <InputSlider
          id="lowerSaturation"
          inputProps={{
            ...inputConfig.lowerSaturation,
            value: values.lowerSaturation,
            onChange,
          }}
          label="Saturation"
        />
        <InputSlider
          id="lowerLightness"
          inputProps={{
            ...inputConfig.lowerLightness,
            value: values.lowerLightness,
            onChange,
          }}
          label="Lightness"
        />
      </Fieldset>
    </Controls>
  );
};

Sidebar.propTypes = {
  values: PropTypes.shape({
    expression: PropTypes.number,
    upperHue: PropTypes.number,
    upperSaturation: PropTypes.number,
    upperLightness: PropTypes.number,
    lowerHue: PropTypes.number,
    lowerSaturation: PropTypes.number,
    lowerLightness: PropTypes.number,
  }),
  setValues: PropTypes.func.isRequired,
  isExploded: PropTypes.bool.isRequired,
  setIsExploded: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  values: {
    ...defaultSliderValues,
  },
};

export default Sidebar;
