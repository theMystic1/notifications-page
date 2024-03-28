import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* padding: 2rem; */

  ${(props) =>
    props.type === "primary" &&
    css`
      justify-content: space-between;
      width: 100%;
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      gap: 2rem;
    `}
`;
export default StyledDiv;
