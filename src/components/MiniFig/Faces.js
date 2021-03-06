import React from "react";
import styled from "styled-components";
import { position, size, rgba } from "polished";
import { theme } from "../../theme";

const { white, black, yellowDark, red } = theme.colors;

export const Head = styled.div`
  ${position("absolute", "2.25em", null, null, "50%")}
  ${size("6.25em", "7.25em")}
  background-color: currentColor;
  background-image: linear-gradient(
      ${rgba(white, 0.3)},
      transparent 20%,
      transparent 80%,
      ${rgba(black, 0.15)} 95%,
      ${rgba(black, 0.3)}
    ),
    linear-gradient(to right, transparent 50%, ${rgba(white, 0.2)}, transparent);
  border-radius: 1.5em;
  color: ${yellowDark};
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
    background-image: linear-gradient(${rgba(white, 0.5)}, transparent 30%),
      linear-gradient(
        to right,
        transparent 70%,
        ${rgba(white, 0.25)} 80%,
        transparent 90%
      );
    border-radius: 0.25em 0.25em 0 0;
    top: -1.25em;
    transform: translateX(-50%);
  }

  &::after {
    ${size("1em", "4.5em")};
    background-image: linear-gradient(
        ${rgba(black, 0.2)},
        ${rgba(black, 0.05)} 50%
      ),
      linear-gradient(
        to right,
        transparent 70%,
        ${rgba(white, 0.25)} 80%,
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

const Face = styled.div`
  flex: 1 0 100%;
  position: relative;
`;

const Eye = styled.div`
  ${size("0.9375em", "0.75em")};
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: inset 0 -0.125em 0 0.25em ${black};
  color: ${white};
  position: absolute;
  top: 2.25em;

  &::before {
    color: ${black};
    content: "";
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`;

const LeftEye = styled(Eye)`
  right: 2.25em;
`;

const RightEye = styled(Eye)`
  left: 2.25em;
`;

const Brow = styled.div`
  ${size("1em", "1.75em")};
  ${position("absolute", null, null, "0.625em", "50%")}
  border: 0.25em solid transparent;
  border-bottom: none;
  border-radius: 50% 50% 0 0;
  border-top-color: currentColor;
  color: ${black};
  transform: translateX(-50%);
  transform-origin: 0 0;
`;

const LeftBrow = styled(Brow)`
  border-right: none;
`;

const RightBrow = styled(Brow)`
  border-left: none;
`;

const Mouth = styled.div`
  ${size("1.5em", "2.5em")};
  ${position("absolute", "3.125em", null, null, "50%")}
  border: 0.25em solid transparent;
  border-bottom-color: currentColor;
  border-radius: 50%;
  color: ${black};
  transform: translateX(-50%);

  &::before,
  &::after {
    content: "";
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`;

const ClassicFace = styled(Face)`
  ${Eye} {
    top: 2.4375em;
    height: 0.75em;
    color: ${black};
    box-shadow: none;
  }

  ${Mouth} {
    top: 2.9375em;
  }
`;

const SmileFace = styled(Face)`
  ${Eye} {
    top: 2.4375em;
    height: 0.75em;
    color: ${black};
    box-shadow: none;
  }

  ${Mouth} {
    top: 2.9375em;
  }
`;

const LargeSmileFace = styled(Face)`
  ${Eye} {
    top: 2em;
  }

  ${Brow} {
    ${size("1.375em", "1.25em")};
    bottom: 0.375em;
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
    ${size("5em", "3.125em")};
    top: 0.125em;
    border: none;
    border-bottom: 1.5em solid;
    border-radius: 0 0 70% 70%/0 0 50% 50%;

    &::before {
      ${size("2em", "4.25em")};
      top: 1.6875em;
      color: ${black};
      border: 0.1875em solid transparent;
      border-bottom-color: currentColor;
      border-radius: 0 0 50% 50%;
      box-shadow: 0 0.9375em 0 -0.75em ${white};
    }

    &::after {
      ${size("0.375em", "1.25em")};
      top: 4.4375em;
      color: ${red};
      background-color: currentColor;
      border-radius: 70% 70% 70% 70%/50% 50% 100% 100%;
    }
  }
`;

const WorriedFace = styled(Face)`
  ${Eye} {
    ${size("1.125em", "1em")};
    top: 2.4375em;
    box-shadow: inset 0 -0.125em 0 0.3125em ${black};
  }

  ${RightEye} {
    left: 2.125em;
  }

  ${LeftEye} {
    right: 2.125em;
  }

  ${Brow} {
    ${size("0.875em", "1.25em")};
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
    ${size("1.25em", "2em")};
    top: 4.5em;
    transform: translateX(-50%) rotate(-10deg) translateZ(0);
    border-top-color: currentColor;
    border-right: none;
    border-bottom-color: transparent;
    border-right-width: 0.5em;
    border-radius: 50% 50% 0 0;
  }
`;

const FrownFace = styled(Face)`
  ${Eye} {
    top: 2.625em;

    &::before {
      ${size("1em", "1.25em")};
      bottom: 80%;
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
    ${size("2em", "2.75em")};
    top: 4.25em;
    margin-left: -0.125em;
    transform: translateX(-50%) rotate(-15deg) translateZ(0);
    border-top-color: currentColor;
    border-right: none;
    border-bottom-color: transparent;
    border-right-width: 0.5em;
    border-radius: 50% 50% 0 0;

    &::before {
      ${size("0.625em", "0.75em")};
      top: 0.375em;
      margin-left: 0.125em;
      color: ${black};
      border: 0.125em solid transparent;
      border-top-color: currentColor;
      border-right: none;
      border-radius: 50% 50% 0 0;
    }
  }
`;

const SurprisedFace = styled(Face)`
  ${Eye} {
    ${size("1.125em", "1em")};
    top: 2.4375em;
    box-shadow: inset 0 -0.125em 0 0.3125em ${black};
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
    ${size("1.625em", "3.125em")};
    top: 4em;
    background-color: currentColor;
    border: none;
    border-radius: 70% 70% 60% 60%/100% 100% 50% 50%;

    &::before,
    &::after {
      background-color: currentColor;
      border-radius: 70% 70% 60% 60%/100% 100% 50% 50%;
      color: ${white};
      height: 0.375em;
    }

    &::before {
      top: 0.1875em;
      width: 2em;
    }

    &::after {
      bottom: 0.1875em;
      width: 2.25em;
    }
  }
`;

export default {
  classic: () => (
    <ClassicFace>
      <RightEye />
      <LeftEye />
      <Mouth />
    </ClassicFace>
  ),
  smile: () => (
    <SmileFace>
      <RightEye>
        <RightBrow />
      </RightEye>
      <LeftEye>
        <LeftBrow />
      </LeftEye>
      <Mouth />
    </SmileFace>
  ),
  smileLarge: () => (
    <LargeSmileFace>
      <RightEye>
        <RightBrow />
      </RightEye>
      <LeftEye>
        <LeftBrow />
      </LeftEye>
      <Mouth />
    </LargeSmileFace>
  ),
  worried: () => (
    <WorriedFace>
      <RightEye>
        <RightBrow />
      </RightEye>
      <LeftEye>
        <LeftBrow />
      </LeftEye>
      <Mouth />
    </WorriedFace>
  ),
  frown: () => (
    <FrownFace>
      <RightEye>
        <RightBrow />
      </RightEye>
      <LeftEye>
        <LeftBrow />
      </LeftEye>
      <Mouth />
    </FrownFace>
  ),
  surprised: () => (
    <SurprisedFace>
      <RightEye>
        <RightBrow />
      </RightEye>
      <LeftEye>
        <LeftBrow />
      </LeftEye>
      <Mouth />
    </SurprisedFace>
  ),
};
