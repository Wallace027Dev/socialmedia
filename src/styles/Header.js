import styled from "styled-components";

export const HeaderContainer = styled.header`
  h1,
  h2 {
    font-weight: normal;
    text-align: center;
    max-width: 440px;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 18px;
    line-height: 160%;
    margin-top: 16px;
    color: var(--gray-500);
    font-weight: normal;
  }
`;
