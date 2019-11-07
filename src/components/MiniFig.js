import React from "react";

const MiniFig = () => {
  return (
    <div className="minifigure">
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
      <div className="upper-body">
        <div className="torso" />
        <div className="arm right">
          <div className="hand right" />
        </div>
        <div className="arm left">
          <div className="hand left" />
        </div>
      </div>
      <div className="lower-body">
        <div className="waist" />
        <div className="crotch" />
        <div className="leg right" />
        <div className="leg left" />
      </div>
    </div>
  );
};

export default MiniFig;
