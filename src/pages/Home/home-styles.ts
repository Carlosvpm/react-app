import styled from "styled-components";

export const Left = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #55409c;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    color: #fff;
    letter-spacing: 2px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: justify;
    color: #fff;
    margin-top: 32px;
    letter-spacing: 1px;
    line-height: 1.4;
  }

  @media (max-width: 999px) {
    height: 350px;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 56px 16px 0;
`;
