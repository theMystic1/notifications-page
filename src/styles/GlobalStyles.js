import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 :root {
--White: hsl(0, 0%, 100%);
--Very-light-grayish-blue: hsl(210, 60%, 98%);
--Light-grayish-blue-1: hsl(211, 68%, 94%);
--Light-grayish-blue-2: hsl(205, 33%, 90%);
--Grayish-blue: hsl(219, 14%, 63%);
--Dark-grayish-blue: hsl(219, 12%, 42%);
--Very-dark-blue: hsl(224, 21%, 14%);
--Red: hsl(1, 90%, 64%);
--Blue: hsl(219, 85%, 26%);

  -border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 16px;


 

 }

  *,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}


  body {
  font-family: "Plus Jakarta Sans", sans-serif;
  background-color: var(--Light-grayish-blue-1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  line-height: 1.5;
  font-size: 1.6rem;
  padding: 8rem 4rem;
}

@media (max-width: 39em) {
  body {
    padding:  8rem 2rem;
  }
}


@media (max-width: 30em) {
  body {
    padding:  8rem 0;
  }
}


`;

export default GlobalStyles;
