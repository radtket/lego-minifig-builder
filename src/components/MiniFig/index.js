import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { UpperBody, Torso, RightArm, LeftArm, Hand } from "./UpperBody";
import { LowerBody, Waist, Crotch, LeftLeg, RightLeg } from "./LowerBody";
import FACES, { Head, FacesWrap, Faces } from "./Faces";

const MiniFigure = styled.div`
  height: 485px;
  margin: auto;
  perspective: 200;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 400ms;
  width: 300px;

  &.explode {
    transform: scale(0.75) translateZ(0);
  }
`;

const MiniFig = ({
  isExploded,
  expression,
  lowerHue,
  lowerSaturation,
  lowerLightness,
  upperHue,
  upperSaturation,
  upperLightness,
}) => {
  return (
    <MiniFigure>
      <Head
        className="head"
        style={{
          transform: `translate(-50%, ${isExploded ? "-8em" : 0})`,
        }}
      >
        <FacesWrap className="faces-wrap">
          <Faces
            className="faces"
            style={{
              transform: isExploded
                ? "translateX(-500%)"
                : `translateX(-${expression}%)`,
            }}
          >
            {Object.entries(FACES).map(([key, Face]) => (
              <Face {...{ key }} />
            ))}
          </Faces>
        </FacesWrap>
      </Head>
      <UpperBody
        style={{
          color: `hsl(${upperHue},${upperSaturation}%,${upperLightness}%)`,
        }}
      >
        <Torso />
        <RightArm>
          <Hand />
        </RightArm>
        <LeftArm>
          <Hand />
        </LeftArm>
      </UpperBody>
      <LowerBody
        {...{ isExploded }}
        style={{
          color: `hsl(${lowerHue},${lowerSaturation}%,${lowerLightness}%)`,
        }}
      >
        <Waist />
        <Crotch />
        <RightLeg />
        <LeftLeg />
      </LowerBody>
    </MiniFigure>
  );
};

MiniFig.propTypes = {
  isExploded: PropTypes.bool.isRequired,
  expression: PropTypes.number.isRequired,
  lowerHue: PropTypes.number.isRequired,
  lowerSaturation: PropTypes.number.isRequired,
  lowerLightness: PropTypes.number.isRequired,
  upperHue: PropTypes.number.isRequired,
  upperSaturation: PropTypes.number.isRequired,
  upperLightness: PropTypes.number.isRequired,
};

export default MiniFig;
