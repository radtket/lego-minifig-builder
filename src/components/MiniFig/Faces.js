import styled from "styled-components";
import { position, size } from "polished";

export const Head = styled.div`
  ${position("absolute", "2.25em", null, null, "50%")}
  ${size("6.25em", "7.25em")}
  background-color: currentColor;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      transparent 20%,
      transparent 80%,
      rgba(0, 0, 0, 0.15) 95%,
      rgba(0, 0, 0, 0.3)
    ),
    linear-gradient(
      to right,
      transparent 50%,
      rgba(255, 255, 255, 0.2),
      transparent
    );
  border-radius: 1.5em;
  color: hsla(50, 90%, 50%, 1);
  transition: transform 400ms;
  z-index: 1;

  &::before,
  &::after {
    background-color: currentColor;
    content: "";
    left: 50%;
    position: absolute;
  }

  &::before {
    ${size("1.25em", "3.5em")};
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), transparent 30%),
      linear-gradient(
        to right,
        transparent 70%,
        rgba(255, 255, 255, 0.25) 80%,
        transparent 90%
      );
    border-radius: 0.25em 0.25em 0 0;
    top: -1.25em;
    transform: translateX(-50%);
  }

  &::after {
    ${size("1em", "4.5em")};
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.05) 50%
      ),
      linear-gradient(
        to right,
        transparent 70%,
        rgba(255, 255, 255, 0.25) 80%,
        transparent 90%
      );
    border-radius: 0 0 0.125em 0.125em;
    bottom: -1em;
    transform: translateX(-50%);
  }
`;

export const FacesWrap = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const Faces = styled.div`
  display: flex;
  transition: transform 400ms cubic-bezier(0, 0, 0, 1.25);
`;

export const Face = styled.div`
  flex: 1 0 100%;
  position: relative;
`;

export const Eye = styled.div`
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: inset 0 -0.125em 0 0.25em #000;
  color: #fff;
  height: 0.9375em;
  position: absolute;
  top: 2.25em;
  width: 0.75em;

  &::before {
    color: #000;
    content: "";
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`;

export const LeftEye = styled(Eye)`
  right: 2.25em;
`;

export const RightEye = styled(Eye)`
  left: 2.25em;
`;

export const Brow = styled.div`
  border: 0.25em solid transparent;
  border-bottom: none;
  border-radius: 50% 50% 0 0;
  border-top-color: currentColor;
  bottom: 0.625em;
  color: #000;
  height: 1em;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  transform-origin: 0 0;
  width: 1.75em;
`;

export const LeftBrow = styled(Brow)`
  border-right: none;
`;

export const RightBrow = styled(Brow)`
  border-left: none;
`;

export const Mouth = styled.div`
  border: 0.25em solid transparent;
  border-bottom-color: currentColor;
  border-radius: 50%;
  color: #000;
  height: 1.5em;
  left: 50%;
  position: absolute;
  top: 3.125em;
  transform: translateX(-50%);
  width: 2.5em;

  &::before,
  &::after {
    content: "";
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`;

export const ClassicFace = styled(Face)`
  ${Eye} {
    top: 2.4375em;
    height: 0.75em;
    color: #000;
    box-shadow: none;
  }

  ${Mouth} {
    top: 2.9375em;
  }
`;

export const SmileFace = styled(Face)`
  ${Eye} {
    top: 2.4375em;
    height: 0.75em;
    color: #000;
    box-shadow: none;
  }

  ${Mouth} {
    top: 2.9375em;
  }
`;

export const LargeSmileFace = styled(Face)`
  ${Eye} {
    top: 2em;
  }

  ${Brow} {
    bottom: 0.375em;
    width: 1.25em;
    height: 1.375em;
    border: none;
    border-top: 0.25em solid;
    border-radius: 50% 50% 0 0;
  }

  ${RightBrow} {
    margin-left: -0.125em;
    transform: skewY(-10deg) translateX(-50%) translateZ(0);
  }

  ${LeftBrow} {
    margin-left: 0.125em;
    transform: skewY(10deg) translateX(-50%) translateZ(0);
  }

  ${Mouth} {
    top: 0.125em;
    width: 3.125em;
    height: 5em;
    border: none;
    border-bottom: 1.5em solid;
    border-radius: 0 0 70% 70%/0 0 50% 50%;

    &::before {
      top: 1.6875em;
      width: 4.25em;
      height: 2em;
      color: #000;
      border: 0.1875em solid transparent;
      border-bottom-color: currentColor;
      border-radius: 0 0 50% 50%;
      box-shadow: 0 0.9375em 0 -0.75em #fff;
    }

    &::after {
      top: 4.4375em;
      width: 1.25em;
      height: 0.375em;
      color: #c00;
      background-color: currentColor;
      border-radius: 70% 70% 70% 70%/50% 50% 100% 100%;
    }
  }
`;

export const WorriedFace = styled(Face)`
  ${Eye} {
    top: 2.4375em;
    width: 1em;
    height: 1.125em;
    box-shadow: inset 0 -0.125em 0 0.3125em #000;
  }

  ${RightEye} {
    left: 2.125em;
  }

  ${LeftEye} {
    right: 2.125em;
  }

  ${Brow} {
    width: 1.25em;
    height: 0.875em;
    bottom: 1.25em;
    border-top: none;
    border-bottom: 0.25em solid currentColor;
    border-radius: 0 0 50% 50%;
  }

  ${RightBrow} {
    margin-left: -0.25em;
    transform: rotate(-20deg) translateX(-50%) translateZ(0);
  }

  ${LeftBrow} {
    margin-left: 0.25em;
    transform: rotate(20deg) translateX(-50%) translateZ(0);
  }

  ${Mouth} {
    top: 4.5em;
    width: 2em;
    height: 1.25em;
    transform: translateX(-50%) rotate(-10deg) translateZ(0);
    border-top-color: currentColor;
    border-right: none;
    border-bottom-color: transparent;
    border-right-width: 0.5em;
    border-radius: 50% 50% 0 0;
  }
`;

export const FrownFace = styled(Face)`
  ${Eye} {
    top: 2.625em;

    &::before {
      bottom: 80%;
      width: 1.25em;
      height: 1em;
      border: 0.1875em solid transparent;
      border-bottom-color: currentColor;
      border-radius: 50%;
    }
  }

  ${RightEye} {
    &::before {
      margin-left: -0.25em;
      transform: translateX(-50%) rotate(-20deg);
    }
  }

  ${LeftEye} {
    &::before {
      margin-left: 0.25em;
      transform: translateX(-50%) rotate(20deg);
    }
  }

  ${Brow} {
    width: 1.5em;
    bottom: 1.375em;
    border-top: none;
    border-bottom: 0.25em solid currentColor;
    border-radius: 0 0 50% 50%;
  }

  ${RightBrow} {
    margin-left: -0.625em;
    transform: rotate(-35deg) translateX(-50%) translateZ(0);
  }

  ${LeftBrow} {
    margin-left: 0.625em;
    transform: rotate(35deg) translateX(-50%) translateZ(0);
  }

  ${Mouth} {
    top: 4.25em;
    width: 2.75em;
    height: 2em;
    margin-left: -0.125em;
    transform: translateX(-50%) rotate(-15deg) translateZ(0);
    border-top-color: currentColor;
    border-right: none;
    border-bottom-color: transparent;
    border-right-width: 0.5em;
    border-radius: 50% 50% 0 0;

    &::before {
      top: 0.375em;
      width: 0.75em;
      height: 0.625em;
      margin-left: 0.125em;
      color: #000;
      border: 0.125em solid transparent;
      border-top-color: currentColor;
      border-right: none;
      border-radius: 50%;
      border-radius: 50% 50% 0 0;
    }
  }
`;

export const SurprisedFace = styled(Face)`
  ${Eye} {
    top: 2.4375em;
    width: 1em;
    height: 1.125em;
    box-shadow: inset 0 -0.125em 0 0.3125em #000;
  }

  ${Brow} {
    bottom: 1em;
    width: 1.5em;
    border-right: none;
    border-left: none;
  }

  ${RightBrow} {
    margin-left: -0.5em;
    transform: rotate(-15deg) translateX(-50%) translateZ(0);
  }

  ${LeftBrow} {
    margin-left: 0.5em;
    transform: rotate(15deg) translateX(-50%) translateZ(0);
  }

  ${Mouth} {
    top: 4em;
    width: 3.125em;
    height: 1.625em;
    background-color: currentColor;
    border: none;
    border-radius: 70% 70% 60% 60%/100% 100% 50% 50%;

    &::before {
      color: #fff;
      background-color: currentColor;
      top: 0.1875em;
      width: 2em;
      height: 0.375em;
      border-radius: 70% 70% 60% 60%/100% 100% 50% 50%;
    }

    &::after {
      color: #fff;
      background-color: currentColor;
      bottom: 0.1875em;
      width: 2.25em;
      height: 0.375em;
      border-radius: 70% 70% 60% 60%/100% 100% 50% 50%;
    }
  }
`;
