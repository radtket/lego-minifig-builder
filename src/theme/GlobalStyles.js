import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	${styledNormalize}

	html {
  	box-sizing: border-box;
	}

	*,
	*::before,
	*::before {
		box-sizing: inherit;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: Montserrat, sans-serif;
	}
`;
