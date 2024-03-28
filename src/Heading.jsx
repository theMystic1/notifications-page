import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.2rem;
      font-weight: 700;
      color: var(--Very-dark-blue);
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 700;
      color: var(--Very-dark-blue);
      transition: all 0.6s;
      cursor: pointer;
      /* padding: 0 2rem; */

      /* &:hover {
        color: var(--Blue);
      } */
    `}

     ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      color: var(--Blue);
    `}
`;

export default Heading;

Heading.defaultProps = {
  as: "h1",
};
