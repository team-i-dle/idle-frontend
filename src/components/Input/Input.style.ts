import { css } from "@emotion/react";
import { colors, fonts } from "constants/theme";

const defaultInputStyle = css`
width: 100%;
${fonts.s16}
color: ${colors.gray08};
border-radius: 2px;
padding: 12px 14px;
background-color: ${colors.secondary02};
border-bottom: 1px solid ${colors.gray03};
transition: all 0.3s;
&:focus {
  border-bottom-color: ${colors.primaryDim01};
  box-shadow: 0px 1px 4px rgba(34, 176, 125, 0.25);
};
&:active {
  border-bottom-color: ${colors.gray04};
  background-color: ${colors.primary10};
  color: ${colors.gray04};
};
&::placeholder {
  color: ${colors.gray09};
  -webkit-text-fill-color: ${colors.gray09};
  opacity: 0.2;
};
&:disabled {
  background-color: ${colors.secondary01};
  border-bottom-color: ${colors.gray01};
  color: ${colors.gray05};
  -webkit-text-fill-color: ${colors.gray05};
  opacity: 1; /* required on iOS */
};
&.error {
  color: ${colors.error};
  border-bottom-color: ${colors.error};
  box-shadow: none;
  &:active {
    background-color: ${colors.secondary02};
  }
}
`;

export default defaultInputStyle;
