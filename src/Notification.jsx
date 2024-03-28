import styled, { css } from "styled-components";

const StyledNotification = styled.div`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 8rem;
  /* color: ; */
  position: relative;
  gap: 2rem;
  cursor: pointer;
  border-radius: var(--border-radius-tiny);
  /* margin-bottom: 1rem; */

  ${(props) =>
    props.type === "unread" &&
    css`
      background-color: var(--Very-light-grayish-blue);
    `}

  ${(props) =>
    props.type === "read" &&
    css`
      background-color: var(--White);
    `}
`;

export default StyledNotification;
