import React from "react";
import styled from "styled-components";

import { UpperBody, Torso, RightArm, LeftArm, Hand } from "./UpperBody";

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

const MiniFig = () => {
  return (
    <MiniFigure>
      <div className="head">
        <div className="faces-wrap">
          <div className="faces">
            <div className="face classic">
              <div className="eye right" />
              <div className="eye left" />
              <div className="mouth" />
            </div>

            <div className="face smile">
              <div className="eye right">
                <div className="brow" />
              </div>
              <div className="eye left">
                <div className="brow" />
              </div>
              <div className="mouth" />
            </div>

            <div className="face large-smile">
              <div className="eye right">
                <div className="brow" />
              </div>
              <div className="eye left">
                <div className="brow" />
              </div>
              <div className="mouth" />
            </div>

            <div className="face worried">
              <div className="eye right">
                <div className="brow" />
              </div>
              <div className="eye left">
                <div className="brow" />
              </div>
              <div className="mouth" />
            </div>

            <div className="face frown">
              <div className="eye right">
                <div className="brow" />
              </div>
              <div className="eye left">
                <div className="brow" />
              </div>
              <div className="mouth" />
            </div>

            <div className="face surprised">
              <div className="eye right">
                <div className="brow" />
              </div>
              <div className="eye left">
                <div className="brow" />
              </div>
              <div className="mouth" />
            </div>
          </div>
        </div>
      </div>
      <UpperBody>
        <Torso />
        <RightArm>
          <Hand />
        </RightArm>
        <LeftArm>
          <Hand />
        </LeftArm>
      </UpperBody>
      <div className="lower-body">
        <div className="waist" />
        <div className="crotch" />
        <div className="leg right" />
        <div className="leg left" />
      </div>
    </MiniFigure>
  );
};

export default MiniFig;
