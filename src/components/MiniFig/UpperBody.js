import styled from "styled-components";
import { position, size, rgba } from "polished";
import { theme } from "../../theme";

const { white, black, yellowDark, yellowLight, mercury } = theme.colors;

export const UpperBody = styled.div`
  ${position("absolute", "9.25em", null, null)}
  color: ${mercury};
  width: 100%;

  &::before,
  &::after {
    position: absolute;
    content: "";
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    ${size("3.5em", "3em")}
    background-color: currentColor;
    background-image: linear-gradient(
        to right,
        transparent 50%,
        ${rgba(white, 0.2)},
        transparent 90%
      ),
      linear-gradient(
        transparent 50%,
        ${rgba(black, 0.05)} 80%,
        ${rgba(black, 0.1)}
      );
    border-radius: 50% 50% 0 0/10% 10% 0 0;
    bottom: 100%;
  }

  &::after {
    ${size("2em")}
    background-color: ${rgba(black, 0.9)};
    background-image: linear-gradient(
      to right,
      transparent 50%,
      ${rgba(white, 0.2)} 80%,
      transparent
    );
    border-radius: 50%/10%;
    top: -2.75em;
  }
`;

export const Torso = styled.div`
  ${position("absolute", 0, null, null, "50%")}
  ${size("9.125em", "7.75em")}
  background-color: currentColor;
  background-image: linear-gradient(
    ${rgba(white, 0.1)},
    transparent 80%,
    ${rgba(black, 0.05)} 98%,
    ${rgba(black, 0.25)} 100%
  );
  border-radius: 0.5em 0.5em 0.125em 0.125em;
  box-shadow: inset 0 0.25em 0.25em ${rgba(white, 0.5)},
    -1.5em 0.5em 1em -1.25em ${rgba(black, 0.3)},
    1.5em 0.5em 1em -1.25em ${rgba(black, 0.3)};
  transform: translateX(-50%) rotateX(25deg);
  transform-origin: top center;
  z-index: 1;
`;

export const Arm = styled.div`
  ${size("5.5em", "3em")}
  ${position(
    "absolute",
    "4em",
    null,
    null,
    "50%"
  )}
  background-color: currentColor;
  border-radius: 1.5em/1em;
  transform-origin: center 1.5em;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 100%;
    transform-origin: center 4.5em;
    content: "";
    background-color: currentColor;
  }

  &::before {
    backface-visibility: hidden;
    border-radius: 1.5em/1.5em 1.5em 1em 1em;
    bottom: 3.5em;
    height: 5.5em;
  }

  &::after {
    border-radius: 50%;
    bottom: 0;
    box-shadow: inset 0 0 0 1em ${rgba(white, 0.2)};
    height: 1.5em;
  }
`;

// Arms
export const LeftArm = styled(Arm)`
  box-shadow: inset -0.5em 0.25em 0.375em -0.25em ${rgba(white, 0.4)},
    inset 0 0 0.75em 0.75em currentColor, inset 0 0 0 2em ${rgba(white, 0.15)};
  margin-left: 6.25rem;
  transform: translateX(-50%) rotate(-12deg);

  &::before {
    box-shadow: inset -0.75em 0.125em 0.375em -0.5em ${rgba(white, 0.4)},
      inset -0.25em 1.1em 0.75em 0.75em currentColor,
      inset 0 0 0 2em ${rgba(white, 0.15)};
    transform: rotate(-14deg);
  }
`;

export const RightArm = styled(Arm)`
  box-shadow: inset 0.5em 0.25em 0.375em -0.25em ${rgba(white, 0.4)},
    inset 0 0 0.75em 0.75em currentColor, inset 0 0 0 2em ${rgba(white, 0.15)};
  margin-left: -6.25rem;
  transform: translateX(-50%) rotate(12deg);

  &::before {
    box-shadow: inset 0.75em 0.125em 0.375em -0.5em ${rgba(white, 0.4)},
      inset 0.25em 1.1em 0.75em 0.75em currentColor,
      inset 0 0 0 2em ${rgba(white, 0.15)};
    transform: rotate(14deg);
  }
`;

// Hand
export const Hand = styled.div`
  ${position("absolute", "80%", null, null, "50%")}
  ${size("1.75em")}
  background-color: currentColor;
  background-image: linear-gradient(
    to right,
    ${rgba(white, 0.2)},
    ${rgba(black, 0.075)},
    ${rgba(white, 0.2)}
  );
  border-radius: 1em/0.5em;
  box-shadow: 0 -0.125em 0.125em ${rgba(black, 0.1)};
  color: ${yellowDark};
  transform: translateX(-50%);
  z-index: 1;

  &::before {
    ${position("absolute", "1em", null, null, "50%")}
    ${size("3.5em")}
    border: 0.75em solid;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-shadow: inset 0 0.25em ${rgba(black, 0.15)}, inset 0 0.25em;
    color: ${yellowLight};
    content: "";
    transform: translateX(-50%);
    z-index: 1;
  }
`;
