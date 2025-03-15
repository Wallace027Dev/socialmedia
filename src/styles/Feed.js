import styled from "styled-components";

export const FeedContainer = styled.section`
  margin-top: 40px;
  width: 592px;

  article {
    background-color: var(--white);
    border: 1px solid var(--gray-200);
    padding: 24px;
    border-radius: 8px;
    width: 100%;
  }

  article + article {
    margin-top: 24px;
  }

  article p {
    line-height: 160%;
  }

  article footer {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  article footer .user-details {
    display: flex;
    align-items: center;
  }

  article footer .user-details strong {
    font-size: 14px;
    margin-left: 16px;
  }

  article footer .time {
    display: flex;
    align-items: center;
  }

  article footer .time span {
    color: var(--gray-500);
    font-size: 12px;
    margin-left: 8px;
  }
`;

export const FeedStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1,
  h2 {
    font-weight: normal;
    text-align: center;
    max-width: 472px;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    color: var(--gray-500);
    font-size: 16px;
    margin-top: 16px;
  }
`;
