import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  height: 100vh;

  .error-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      font-size: 28px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 16px;
    }

    .message {
      font-size: 16px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.6);
      text-align: center;
    }
  }
`;
