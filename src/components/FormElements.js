import styled from "styled-components";

export const Button = styled.button`
  background-color: #fff;
  border-radius: 0.5em;
  border: 1px solid #ddd;
  color: #666;
  cursor: pointer;
  font-family: inherit;
  letter-spacing: 0.0625em;
  margin: 0.25rem 0;
  outline: none;
  padding: 0.5em 1em;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    color: #000;
    border-color: #ccc;
  }

  &:active {
    background-color: #ddd;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin: 1rem 0;
`;

export const Legend = styled.legend`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: small;
  letter-spacing: 0.03125em;
`;

export const Label = styled.label`
  display: block;
  font-size: x-small;
  letter-spacing: 0.0625em;
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: currentColor;
  border-radius: 1em;
  color: inherit;
  height: 2em;
  margin: 0.25rem 0 1rem;
  outline: none;
  padding: 0.375em;
  position: relative;
  width: 100%;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    z-index: 10;
    width: 1.5em;
    height: 1.5em;
    background-color: hsla(50, 90%, 50%, 1);
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    position: relative;
    z-index: 10;
    width: 1.5em;
    height: 1.5em;
    background-color: #333;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-track {
    background-color: transparent;
  }
`;
