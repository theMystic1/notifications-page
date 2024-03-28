import styled, { css } from "styled-components";

const GreyParagraphs = styled.p`
  color: var(--Dark-grayish-blue);
  ${(props) =>
    props.as === "button" &&
    css`
      background-color: transparent;
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.6s;
      border: none;

      &:hover {
        color: var(--Blue);
        border: none;
      }
      &:active {
        border: none;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: 700;
      font-size: 1.8rem;
    `}

  ${(props) =>
    props.as === "p" &&
    css`
      font-size: 1.6rem;
    `}
`;

GreyParagraphs.defaultProps = {
  as: "p",
};

export default GreyParagraphs;
