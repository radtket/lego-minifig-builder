import styled from "styled-components";
import { position, size, rgba } from "polished";
import { theme } from "../../theme";

const { white, black, mercury } = theme.colors;

export const LowerBody = styled.div`
  ${position("absolute", "18.5em", null, null, "50%")};
  ${size("11.75em", "10em")}
  color: ${mercury};
  transform: ${({ isExploded }) =>
    isExploded ? "translate(-50%, 8em)" : "translate(-50%, 0)"};
  transition: transform 400ms;

  > div {
    background-color: currentColor;
    position: absolute;
  }
`;

export const Waist = styled.div`
  ${size("1.5em", "100%")}
  background-image: linear-gradient(
    ${rgba(black, 0.15)},
    transparent 80%,
    ${rgba(white, 0.1)} 90%,
    ${rgba(white, 0.15)}
  );
  border-radius: 0.125em;
  box-shadow: 0 0.75em 0.75em -0.25em ${rgba(black, 0.25)};
  top: 0;
  z-index: 1;

  &::before,
  &::after {
    ${size("3em")}
    ${position("absolute", null, null, "100%", "50%")}
    background-color: currentColor;
    content: "";
    transform: translateX(-50%);
  }

  &::before {
    background-image: linear-gradient(
        ${rgba(white, 0.75)},
        transparent 10%
      ),
      linear-gradient(
        to right,
        transparent 20%,
        ${rgba(white, 0.25)} 25%,
        transparent 40%,
        transparent 60%,
        ${rgba(white, 0.25)} 75%,
        transparent 80%,
        ${rgba(white, 0.2)}
      ),
      linear-gradient(${rgba(white, 0.1)}, ${rgba(black, 0.15)});
    border-radius: 50% 30% 0 0/100% 30% 0 100%;
    margin-left: -2.75em;
  }

  &::after {
    background-image: linear-gradient(
        ${rgba(white, 0.75)},
        transparent 10%
      ),
      linear-gradient(
        to right,
        transparent 20%,
        ${rgba(white, 0.25)} 25%,
        transparent 40%,
        transparent 60%,
        ${rgba(white, 0.25)}
        transparent 80%,
        ${rgba(white, 0.2)}
      ),
      linear-gradient(${rgba(white, 0.1)}, ${rgba(black, 0.15)});
    border-radius: 30% 50% 0% 0%/30% 100% 100% 0%;
    margin-left: 2.75em;
  }
`;

export const Crotch = styled.div`
  ${size("4.5em", "10%")}
  ${position("1.5em", null, null, "50%")}
  z-index: 1;
  transform: translateX(-50%);
  background-image: linear-gradient(
    ${rgba(black, 0.2)},
    ${rgba(black, 0.05)} 10%,
    ${rgba(black, 0.2)} 10%,
    ${rgba(white, 0.1)},
    ${rgba(black, 0.1)}
  );
  border-radius: 0 0 0.25em 0.25em;
  box-shadow: -0.5em 0 0.25em -0.25em ${rgba(black, 0.15)},
    0.5em 0 0.25em -0.25em ${rgba(black, 0.15)},
    -0.25em 0 0.125em -0.125em ${rgba(black, 0.2)},
    0.25em 0 0.125em -0.125em ${rgba(black, 0.2)};
`;

// Legs
export const Leg = styled.div`
  ${size("10.75em", "4.75em")}
  ${position(null, null, 0, "50%")}
  background-image: linear-gradient(
    ${rgba(black, 0.1)} 10%,
    ${rgba(white, 0.1)} 25%,
    ${rgba(black, 0.1)} 45%,
    transparent,
    50%,
    ${rgba(black, 0.05)},
    65%,
    transparent 74%,
    ${rgba(black, 0.1)},
    78%,
    ${rgba(white, 0.2)} 78%,
    transparent 82%,
    ${rgba(black, 0.1)}
  );
  border-radius: 0.25em 0.25em 0.0625em 0.0625em;
  transform: translateX(-50%);
`;

export const LeftLeg = styled(Leg)`
  margin-left: 2.75em;
`;

export const RightLeg = styled(Leg)`
  margin-left: -2.75em;
`;
