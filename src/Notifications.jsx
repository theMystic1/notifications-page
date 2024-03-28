import styled from "styled-components";

const Main = styled.main`
  font-size: 2rem;
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  /* min-height: 100vh; */
  padding: 4rem 2rem;
  border-radius: var(--border-radius-lg);

  /* width: 90%; */

  @media (max-width: 39em) {
    padding: 4rem 0.6rem;
  }
`;

export default Main;
