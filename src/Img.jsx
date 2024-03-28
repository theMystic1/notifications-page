import styled, { css } from "styled-components";

const StyledImg = styled.img`
  width: 6rem;
  ${(props) =>
    props.type === "spaced" &&
    css`
      position: absolute;
      right: 4rem;

      @media (max-width: 39em) {
        display: none;
      }
    `}
`;

export default StyledImg;
