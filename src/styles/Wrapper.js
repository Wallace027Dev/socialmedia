import styled from "styled-components";

export const WrapperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 0;

  ::before {
    content: " ";
    background-color: var(--gray-100);
    width: 100%;
    height: 160px;
    position: absolute;
    z-index: -1;
    top: 0;
  }

  nav {
    margin-bottom: 16px;
  }

  nav a {
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    color: var(--gray-700);
    transition: all 0.2s ease-in;
    margin: 0 16px;
  }

  nav a:hover {
    color: var(--primary);
  }
`;
