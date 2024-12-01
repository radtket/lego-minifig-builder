import React from "react";
import PropTypes from "prop-types";
import { Label, RangeInput } from "./FormElements";

const InputSlider = ({ label, id, inputProps }) => (
  <Label htmlFor={id}>
    {label}
    <RangeInput id={id} name={id} type="range" {...inputProps} />
  </Label>
);

InputSlider.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inputProps: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    type: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func,
  }).isRequired,
};

export default InputSlider;
