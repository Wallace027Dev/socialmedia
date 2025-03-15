import styled from "styled-components";

export const PostFormContainer = styled.form`
  background-color: var(--white);
  box-shadow: 0px 16px 40px 8px rgba(113, 128, 150, 0.12);
  width: 592px;
  border-radius: 8px;
  padding: 24px;

  input::placeholder {
    color: var(--gray-400);
  }

  input {
    color: var(--gray-700);
  }

  > input {
    width: 100%;
    border: none;
    padding: 8px 0 24px;
    outline: none;
  }

  > div {
    border-top: 1px solid var(--gray-200);
    padding-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div input {
    flex: 1;
    margin: 0 16px;
    border: none;
    outline: 0;
  }

  > div button {
    background-color: var(--primary);
    padding: 16px 32px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: var(--white);
    font-weight: 600;
    display: flex;
    align-items: center;
    transition: background-color 0.2s ease-in;
  }

  > div button img {
    margin-right: 16px;
  }

  > div button:hover {
    background-color: var(--primary-light);
  }

  > div button:active,
  > div button:focus {
    background-color: var(--primary-dark);
  }

  > div button:disabled {
    background-color: var(--gray-400);
    cursor: default;
  }

  .error-container {
    border: 0;
    padding: 16px;
    margin-bottom: 24px;
    font-size: 14px;
    color: var(--danger);
    background-color: var(--danger-light);
    text-align: center;
    border-radius: 8px;
    display: flex;
    justify-content: center;
  }
`;
