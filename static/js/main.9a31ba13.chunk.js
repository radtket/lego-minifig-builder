(this["webpackJsonplego-minifig"]=this["webpackJsonplego-minifig"]||[]).push([[0],{21:function(e,t,r){"use strict";r.r(t);var o=r(3),a=r(8),n=r.n(a),s=r(2),b=r(0),l=r(9),c=r.n(l),i=s.createGlobalStyle`
	${c.a}

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
`,m=r(1);const d={spacing:{small:"12px",base:"24px",large:"48px"},colors:{black:"#000",white:"#fff",yellowBright:"#f5d63d",yellowDark:"#f2cc0d",red:"#c00",mercury:"#e6e6e6",gray1:"#dedede",gray2:"#cccccc"}};var u=e=>{let{children:t}=e;return Object(m.jsxs)(s.ThemeProvider,{theme:d,children:[Object(m.jsx)(i,{}),t]})};const{white:j,black:p,yellowDark:O,gray1:g,gray2:$}=d.colors,f=s.default.button`
  background-color: ${j};
  border-radius: 0.5em;
  border: 1px solid ${g};
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
    color: ${p};
    border-color: ${$};
  }

  &:active {
    background-color: ${g};
  }
`,h=s.default.fieldset`
  border: none;
  margin: 1rem 0;
`,x=s.default.legend`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: small;
  letter-spacing: 0.03125em;
`,w=s.default.label`
  display: block;
  font-size: x-small;
  letter-spacing: 0.0625em;
`,v=s.default.input`
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
    background-color: ${O};
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
`;var k=e=>{let{label:t,id:r,inputProps:o}=e;return Object(m.jsxs)(w,{htmlFor:r,children:[t,Object(m.jsx)(v,{id:r,name:r,type:"range",...o})]})};const C={expression:0,upperHue:200,upperSaturation:50,upperLightness:90,lowerHue:200,lowerSaturation:50,lowerLightness:90},y={expression:{max:500,min:0,step:100,value:0},upperHue:{max:360,min:0,value:200},upperSaturation:{max:100,min:0,value:50},upperLightness:{max:90,min:0,value:90},lowerHue:{max:360,min:0,value:200},lowerSaturation:{max:100,min:0,value:50},lowerLightness:{max:90,min:0,value:90}},{gray1:X}=d.colors,z=s.default.aside`
  background-color: ${Object(b.b)(X,.5)};
  color: #333;
  padding: 1.5em;
  position: relative;
  text-transform: uppercase;
  width: 200px;
  z-index: 1;

  h2 {
    font-size: 1.25em;
    font-weight: 900;
    letter-spacing: 0.03125em;
    margin-bottom: 0.5rem;
  }
`,L=e=>{let{values:t,setValues:r,isExploded:o,setIsExploded:a}=e;const n=e=>{let{target:{name:t,value:o}}=e;r((e=>({...e,[t]:parseInt(o,10)})))},s=(e,t)=>Math.random()*(t-e)+e;return Object(m.jsxs)(z,{children:[Object(m.jsx)("h2",{children:"Controls"}),Object(m.jsx)(f,{onClick:()=>a(!o),type:"button",children:o?"Rebuild":"Explode"}),Object(m.jsx)(f,{onClick:()=>{r(Object.entries(y).reduce(((e,t)=>{let[r,{min:o,max:a}]=t;return{...e,[r]:"expression"!==r?s(o,a):100*Math.ceil(100*s(0,5)/100)}}),t))},type:"button",children:"Randomize"}),Object(m.jsx)(f,{onClick:()=>{r({...C})},type:"button",children:"Reset"}),Object(m.jsxs)(h,{children:[Object(m.jsx)(x,{children:"Head"}),Object(m.jsx)(k,{id:"expression",inputProps:{...y.expression,value:t.expression,onChange:n},label:"Expression"})]}),Object(m.jsxs)(h,{children:[Object(m.jsx)(x,{children:"Upper Body"}),Object(m.jsx)(k,{id:"upperHue",inputProps:{...y.upperHue,value:t.upperHue,onChange:n},label:"Hue"}),Object(m.jsx)(k,{id:"upperSaturation",inputProps:{...y.upperSaturation,value:t.upperSaturation,onChange:n},label:"Saturation"}),Object(m.jsx)(k,{id:"upperLightness",inputProps:{...y.upperLightness,value:t.upperLightness,onChange:n},label:"Lightness"})]}),Object(m.jsxs)(h,{children:[Object(m.jsx)(x,{children:"Lower Body"}),Object(m.jsx)(k,{id:"lowerHue",inputProps:{...y.lowerHue,value:t.lowerHue,onChange:n},label:"Hue"}),Object(m.jsx)(k,{id:"lowerSaturation",inputProps:{...y.lowerSaturation,value:t.lowerSaturation,onChange:n},label:"Saturation"}),Object(m.jsx)(k,{id:"lowerLightness",inputProps:{...y.lowerLightness,value:t.lowerLightness,onChange:n},label:"Lightness"})]})]})};L.defaultProps={values:{...C}};var S=L;const{white:H,black:E,yellowDark:Z,yellowLight:P,mercury:B}=d.colors,D=s.default.div`
  ${Object(b.a)("absolute","9.25em",null,null)}
  color: ${B};
  width: 100%;

  &::before,
  &::after {
    position: absolute;
    content: "";
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    ${Object(b.c)("3.5em","3em")}
    background-color: currentColor;
    background-image: linear-gradient(
        to right,
        transparent 50%,
        ${Object(b.b)(H,.2)},
        transparent 90%
      ),
      linear-gradient(
        transparent 50%,
        ${Object(b.b)(E,.05)} 80%,
        ${Object(b.b)(E,.1)}
      );
    border-radius: 50% 50% 0 0/10% 10% 0 0;
    bottom: 100%;
  }

  &::after {
    ${Object(b.c)("2em")}
    background-color: ${Object(b.b)(E,.9)};
    background-image: linear-gradient(
      to right,
      transparent 50%,
      ${Object(b.b)(H,.2)} 80%,
      transparent
    );
    border-radius: 50%/10%;
    top: -2.75em;
  }
`,I=s.default.div`
  ${Object(b.a)("absolute",0,null,null,"50%")}
  ${Object(b.c)("9.125em","7.75em")}
  background-color: currentColor;
  background-image: linear-gradient(
    ${Object(b.b)(H,.1)},
    transparent 80%,
    ${Object(b.b)(E,.05)} 98%,
    ${Object(b.b)(E,.25)} 100%
  );
  border-radius: 0.5em 0.5em 0.125em 0.125em;
  box-shadow: inset 0 0.25em 0.25em ${Object(b.b)(H,.5)},
    -1.5em 0.5em 1em -1.25em ${Object(b.b)(E,.3)},
    1.5em 0.5em 1em -1.25em ${Object(b.b)(E,.3)};
  transform: translateX(-50%) rotateX(25deg);
  transform-origin: top center;
  z-index: 1;
`,M=s.default.div`
  ${Object(b.c)("5.5em","3em")}
  ${Object(b.a)("absolute","4em",null,null,"50%")}
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
    box-shadow: inset 0 0 0 1em ${Object(b.b)(H,.2)};
    height: 1.5em;
  }
`,N=Object(s.default)(M)`
  box-shadow: inset -0.5em 0.25em 0.375em -0.25em ${Object(b.b)(H,.4)},
    inset 0 0 0.75em 0.75em currentColor, inset 0 0 0 2em ${Object(b.b)(H,.15)};
  margin-left: 6.25rem;
  transform: translateX(-50%) rotate(-12deg);

  &::before {
    box-shadow: inset -0.75em 0.125em 0.375em -0.5em ${Object(b.b)(H,.4)},
      inset -0.25em 1.1em 0.75em 0.75em currentColor,
      inset 0 0 0 2em ${Object(b.b)(H,.15)};
    transform: rotate(-14deg);
  }
`,R=Object(s.default)(M)`
  box-shadow: inset 0.5em 0.25em 0.375em -0.25em ${Object(b.b)(H,.4)},
    inset 0 0 0.75em 0.75em currentColor, inset 0 0 0 2em ${Object(b.b)(H,.15)};
  margin-left: -6.25rem;
  transform: translateX(-50%) rotate(12deg);

  &::before {
    box-shadow: inset 0.75em 0.125em 0.375em -0.5em ${Object(b.b)(H,.4)},
      inset 0.25em 1.1em 0.75em 0.75em currentColor,
      inset 0 0 0 2em ${Object(b.b)(H,.15)};
    transform: rotate(14deg);
  }
`,J=s.default.div`
  ${Object(b.a)("absolute","80%",null,null,"50%")}
  ${Object(b.c)("1.75em")}
  background-color: currentColor;
  background-image: linear-gradient(
    to right,
    ${Object(b.b)(H,.2)},
    ${Object(b.b)(E,.075)},
    ${Object(b.b)(H,.2)}
  );
  border-radius: 1em/0.5em;
  box-shadow: 0 -0.125em 0.125em ${Object(b.b)(E,.1)};
  color: ${Z};
  transform: translateX(-50%);
  z-index: 1;

  &::before {
    ${Object(b.a)("absolute","1em",null,null,"50%")}
    ${Object(b.c)("3.5em")}
    border: 0.75em solid;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-shadow: inset 0 0.25em ${Object(b.b)(E,.15)}, inset 0 0.25em;
    color: ${P};
    content: "";
    transform: translateX(-50%);
    z-index: 1;
  }
`,{white:V,black:W,mercury:Y}=d.colors,F=s.default.div`
  ${Object(b.a)("absolute","18.5em",null,null,"50%")};
  ${Object(b.c)("11.75em","10em")}
  color: ${Y};
  transform: ${e=>{let{isExploded:t}=e;return t?"translate(-50%, 8em)":"translate(-50%, 0)"}};
  transition: transform 400ms;

  > div {
    background-color: currentColor;
    position: absolute;
  }
`,G=s.default.div`
  ${Object(b.c)("1.5em","100%")}
  background-image: linear-gradient(
    ${Object(b.b)(W,.15)},
    transparent 80%,
    ${Object(b.b)(V,.1)} 90%,
    ${Object(b.b)(V,.15)}
  );
  border-radius: 0.125em;
  box-shadow: 0 0.75em 0.75em -0.25em ${Object(b.b)(W,.25)};
  top: 0;
  z-index: 1;

  &::before,
  &::after {
    ${Object(b.c)("3em")}
    ${Object(b.a)("absolute",null,null,"100%","50%")}
    background-color: currentColor;
    content: "";
    transform: translateX(-50%);
  }

  &::before {
    background-image: linear-gradient(
        ${Object(b.b)(V,.75)},
        transparent 10%
      ),
      linear-gradient(
        to right,
        transparent 20%,
        ${Object(b.b)(V,.25)} 25%,
        transparent 40%,
        transparent 60%,
        ${Object(b.b)(V,.25)} 75%,
        transparent 80%,
        ${Object(b.b)(V,.2)}
      ),
      linear-gradient(${Object(b.b)(V,.1)}, ${Object(b.b)(W,.15)});
    border-radius: 50% 30% 0 0/100% 30% 0 100%;
    margin-left: -2.75em;
  }

  &::after {
    background-image: linear-gradient(
        ${Object(b.b)(V,.75)},
        transparent 10%
      ),
      linear-gradient(
        to right,
        transparent 20%,
        ${Object(b.b)(V,.25)} 25%,
        transparent 40%,
        transparent 60%,
        ${Object(b.b)(V,.25)}
        transparent 80%,
        ${Object(b.b)(V,.2)}
      ),
      linear-gradient(${Object(b.b)(V,.1)}, ${Object(b.b)(W,.15)});
    border-radius: 30% 50% 0% 0%/30% 100% 100% 0%;
    margin-left: 2.75em;
  }
`,T=s.default.div`
  ${Object(b.c)("4.5em","10%")}
  ${Object(b.a)("1.5em",null,null,"50%")}
  z-index: 1;
  transform: translateX(-50%);
  background-image: linear-gradient(
    ${Object(b.b)(W,.2)},
    ${Object(b.b)(W,.05)} 10%,
    ${Object(b.b)(W,.2)} 10%,
    ${Object(b.b)(V,.1)},
    ${Object(b.b)(W,.1)}
  );
  border-radius: 0 0 0.25em 0.25em;
  box-shadow: -0.5em 0 0.25em -0.25em ${Object(b.b)(W,.15)},
    0.5em 0 0.25em -0.25em ${Object(b.b)(W,.15)},
    -0.25em 0 0.125em -0.125em ${Object(b.b)(W,.2)},
    0.25em 0 0.125em -0.125em ${Object(b.b)(W,.2)};
`,U=s.default.div`
  ${Object(b.c)("10.75em","4.75em")}
  ${Object(b.a)(null,null,0,"50%")}
  background-image: linear-gradient(
    ${Object(b.b)(W,.1)} 10%,
    ${Object(b.b)(V,.1)} 25%,
    ${Object(b.b)(W,.1)} 45%,
    transparent,
    50%,
    ${Object(b.b)(W,.05)},
    65%,
    transparent 74%,
    ${Object(b.b)(W,.1)},
    78%,
    ${Object(b.b)(V,.2)} 78%,
    transparent 82%,
    ${Object(b.b)(W,.1)}
  );
  border-radius: 0.25em 0.25em 0.0625em 0.0625em;
  transform: translateX(-50%);
`,q=Object(s.default)(U)`
  margin-left: 2.75em;
`,A=Object(s.default)(U)`
  margin-left: -2.75em;
`,{white:K,black:Q,yellowDark:_,red:ee}=d.colors,te=s.default.div`
  ${Object(b.a)("absolute","2.25em",null,null,"50%")}
  ${Object(b.c)("6.25em","7.25em")}
  background-color: currentColor;
  background-image: linear-gradient(
      ${Object(b.b)(K,.3)},
      transparent 20%,
      transparent 80%,
      ${Object(b.b)(Q,.15)} 95%,
      ${Object(b.b)(Q,.3)}
    ),
    linear-gradient(to right, transparent 50%, ${Object(b.b)(K,.2)}, transparent);
  border-radius: 1.5em;
  color: ${_};
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
    ${Object(b.c)("1.25em","3.5em")};
    background-image: linear-gradient(${Object(b.b)(K,.5)}, transparent 30%),
      linear-gradient(
        to right,
        transparent 70%,
        ${Object(b.b)(K,.25)} 80%,
        transparent 90%
      );
    border-radius: 0.25em 0.25em 0 0;
    top: -1.25em;
    transform: translateX(-50%);
  }

  &::after {
    ${Object(b.c)("1em","4.5em")};
    background-image: linear-gradient(
        ${Object(b.b)(Q,.2)},
        ${Object(b.b)(Q,.05)} 50%
      ),
      linear-gradient(
        to right,
        transparent 70%,
        ${Object(b.b)(K,.25)} 80%,
        transparent 90%
      );
    border-radius: 0 0 0.125em 0.125em;
    bottom: -1em;
    transform: translateX(-50%);
  }
`,re=s.default.div`
  height: 100%;
  overflow: hidden;
`,oe=s.default.div`
  display: flex;
  transition: transform 400ms cubic-bezier(0, 0, 0, 1.25);
`,ae=s.default.div`
  flex: 1 0 100%;
  position: relative;
`,ne=s.default.div`
  ${Object(b.c)("0.9375em","0.75em")};
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: inset 0 -0.125em 0 0.25em ${Q};
  color: ${K};
  position: absolute;
  top: 2.25em;

  &::before {
    color: ${Q};
    content: "";
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`,se=Object(s.default)(ne)`
  right: 2.25em;
`,be=Object(s.default)(ne)`
  left: 2.25em;
`,le=s.default.div`
  ${Object(b.c)("1em","1.75em")};
  ${Object(b.a)("absolute",null,null,"0.625em","50%")}
  border: 0.25em solid transparent;
  border-bottom: none;
  border-radius: 50% 50% 0 0;
  border-top-color: currentColor;
  color: ${Q};
  transform: translateX(-50%);
  transform-origin: 0 0;
`,ce=Object(s.default)(le)`
  border-right: none;
`,ie=Object(s.default)(le)`
  border-left: none;
`,me=s.default.div`
  ${Object(b.c)("1.5em","2.5em")};
  ${Object(b.a)("absolute","3.125em",null,null,"50%")}
  border: 0.25em solid transparent;
  border-bottom-color: currentColor;
  border-radius: 50%;
  color: ${Q};
  transform: translateX(-50%);

  &::before,
  &::after {
    content: "";
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`,de=Object(s.default)(ae)`
  ${ne} {
    top: 2.4375em;
    height: 0.75em;
    color: ${Q};
    box-shadow: none;
  }

  ${me} {
    top: 2.9375em;
  }
`,ue=Object(s.default)(ae)`
  ${ne} {
    top: 2.4375em;
    height: 0.75em;
    color: ${Q};
    box-shadow: none;
  }

  ${me} {
    top: 2.9375em;
  }
`,je=Object(s.default)(ae)`
  ${ne} {
    top: 2em;
  }

  ${le} {
    ${Object(b.c)("1.375em","1.25em")};
    bottom: 0.375em;
    border: none;
    border-top: 0.25em solid;
    border-radius: 50% 50% 0 0;
  }

  ${ie} {
    margin-left: -0.125em;
    transform: skewY(-10deg) translateX(-50%) translateZ(0);
  }

  ${ce} {
    margin-left: 0.125em;
    transform: skewY(10deg) translateX(-50%) translateZ(0);
  }

  ${me} {
    ${Object(b.c)("5em","3.125em")};
    top: 0.125em;
    border: none;
    border-bottom: 1.5em solid;
    border-radius: 0 0 70% 70%/0 0 50% 50%;

    &::before {
      ${Object(b.c)("2em","4.25em")};
      top: 1.6875em;
      color: ${Q};
      border: 0.1875em solid transparent;
      border-bottom-color: currentColor;
      border-radius: 0 0 50% 50%;
      box-shadow: 0 0.9375em 0 -0.75em ${K};
    }

    &::after {
      ${Object(b.c)("0.375em","1.25em")};
      top: 4.4375em;
      color: ${ee};
      background-color: currentColor;
      border-radius: 70% 70% 70% 70%/50% 50% 100% 100%;
    }
  }
`,pe=Object(s.default)(ae)`
  ${ne} {
    ${Object(b.c)("1.125em","1em")};
    top: 2.4375em;
    box-shadow: inset 0 -0.125em 0 0.3125em ${Q};
  }

  ${be} {
    left: 2.125em;
  }

  ${se} {
    right: 2.125em;
  }

  ${le} {
    ${Object(b.c)("0.875em","1.25em")};
    bottom: 1.25em;
    border-top: none;
    border-bottom: 0.25em solid currentColor;
    border-radius: 0 0 50% 50%;
  }

  ${ie} {
    margin-left: -0.25em;
    transform: rotate(-20deg) translateX(-50%) translateZ(0);
  }

  ${ce} {
    margin-left: 0.25em;
    transform: rotate(20deg) translateX(-50%) translateZ(0);
  }

  ${me} {
    ${Object(b.c)("1.25em","2em")};
    top: 4.5em;
    transform: translateX(-50%) rotate(-10deg) translateZ(0);
    border-top-color: currentColor;
    border-right: none;
    border-bottom-color: transparent;
    border-right-width: 0.5em;
    border-radius: 50% 50% 0 0;
  }
`,Oe=Object(s.default)(ae)`
  ${ne} {
    top: 2.625em;

    &::before {
      ${Object(b.c)("1em","1.25em")};
      bottom: 80%;
      border: 0.1875em solid transparent;
      border-bottom-color: currentColor;
      border-radius: 50%;
    }
  }

  ${be} {
    &::before {
      margin-left: -0.25em;
      transform: translateX(-50%) rotate(-20deg);
    }
  }

  ${se} {
    &::before {
      margin-left: 0.25em;
      transform: translateX(-50%) rotate(20deg);
    }
  }

  ${le} {
    width: 1.5em;
    bottom: 1.375em;
    border-top: none;
    border-bottom: 0.25em solid currentColor;
    border-radius: 0 0 50% 50%;
  }

  ${ie} {
    margin-left: -0.625em;
    transform: rotate(-35deg) translateX(-50%) translateZ(0);
  }

  ${ce} {
    margin-left: 0.625em;
    transform: rotate(35deg) translateX(-50%) translateZ(0);
  }

  ${me} {
    ${Object(b.c)("2em","2.75em")};
    top: 4.25em;
    margin-left: -0.125em;
    transform: translateX(-50%) rotate(-15deg) translateZ(0);
    border-top-color: currentColor;
    border-right: none;
    border-bottom-color: transparent;
    border-right-width: 0.5em;
    border-radius: 50% 50% 0 0;

    &::before {
      ${Object(b.c)("0.625em","0.75em")};
      top: 0.375em;
      margin-left: 0.125em;
      color: ${Q};
      border: 0.125em solid transparent;
      border-top-color: currentColor;
      border-right: none;
      border-radius: 50% 50% 0 0;
    }
  }
`,ge=Object(s.default)(ae)`
  ${ne} {
    ${Object(b.c)("1.125em","1em")};
    top: 2.4375em;
    box-shadow: inset 0 -0.125em 0 0.3125em ${Q};
  }

  ${le} {
    bottom: 1em;
    width: 1.5em;
    border-right: none;
    border-left: none;
  }

  ${ie} {
    margin-left: -0.5em;
    transform: rotate(-15deg) translateX(-50%) translateZ(0);
  }

  ${ce} {
    margin-left: 0.5em;
    transform: rotate(15deg) translateX(-50%) translateZ(0);
  }

  ${me} {
    ${Object(b.c)("1.625em","3.125em")};
    top: 4em;
    background-color: currentColor;
    border: none;
    border-radius: 70% 70% 60% 60%/100% 100% 50% 50%;

    &::before,
    &::after {
      background-color: currentColor;
      border-radius: 70% 70% 60% 60%/100% 100% 50% 50%;
      color: ${K};
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
`;var $e={classic:()=>Object(m.jsxs)(de,{children:[Object(m.jsx)(be,{}),Object(m.jsx)(se,{}),Object(m.jsx)(me,{})]}),smile:()=>Object(m.jsxs)(ue,{children:[Object(m.jsx)(be,{children:Object(m.jsx)(ie,{})}),Object(m.jsx)(se,{children:Object(m.jsx)(ce,{})}),Object(m.jsx)(me,{})]}),smileLarge:()=>Object(m.jsxs)(je,{children:[Object(m.jsx)(be,{children:Object(m.jsx)(ie,{})}),Object(m.jsx)(se,{children:Object(m.jsx)(ce,{})}),Object(m.jsx)(me,{})]}),worried:()=>Object(m.jsxs)(pe,{children:[Object(m.jsx)(be,{children:Object(m.jsx)(ie,{})}),Object(m.jsx)(se,{children:Object(m.jsx)(ce,{})}),Object(m.jsx)(me,{})]}),frown:()=>Object(m.jsxs)(Oe,{children:[Object(m.jsx)(be,{children:Object(m.jsx)(ie,{})}),Object(m.jsx)(se,{children:Object(m.jsx)(ce,{})}),Object(m.jsx)(me,{})]}),surprised:()=>Object(m.jsxs)(ge,{children:[Object(m.jsx)(be,{children:Object(m.jsx)(ie,{})}),Object(m.jsx)(se,{children:Object(m.jsx)(ce,{})}),Object(m.jsx)(me,{})]})};const fe=s.default.div`
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
`;var he=e=>{let{isExploded:t,expression:r,lowerHue:o,lowerSaturation:a,lowerLightness:n,upperHue:s,upperSaturation:b,upperLightness:l}=e;return Object(m.jsxs)(fe,{children:[Object(m.jsx)(te,{className:"head",style:{transform:`translate(-50%, ${t?"-8em":0})`},children:Object(m.jsx)(re,{className:"faces-wrap",children:Object(m.jsx)(oe,{className:"faces",style:{transform:t?"translateX(-500%)":`translateX(-${r}%)`},children:Object.entries($e).map((e=>{let[t,r]=e;return Object(m.jsx)(r,{key:t})}))})})}),Object(m.jsxs)(D,{style:{color:`hsl(${s},${b}%,${l}%)`},children:[Object(m.jsx)(I,{}),Object(m.jsx)(R,{children:Object(m.jsx)(J,{})}),Object(m.jsx)(N,{children:Object(m.jsx)(J,{})})]}),Object(m.jsxs)(F,{isExploded:t,style:{color:`hsl(${o},${a}%,${n}%)`},children:[Object(m.jsx)(G,{}),Object(m.jsx)(T,{}),Object(m.jsx)(A,{}),Object(m.jsx)(q,{})]})]})};var xe=()=>{const[e,t]=Object(o.useState)({...C}),[r,a]=Object(o.useState)(!1);return Object(m.jsxs)("main",{style:{display:"flex",justifyContent:"space-between",height:"100vh"},children:[Object(m.jsx)(he,{...e,isExploded:r}),Object(m.jsx)(S,{values:e,setValues:t,isExploded:r,setIsExploded:a})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(20);n.a.render(Object(m.jsx)(u,{children:Object(m.jsx)(xe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.9a31ba13.chunk.js.map