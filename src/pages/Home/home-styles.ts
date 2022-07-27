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



export const Content = styled.div`
  margin-top: 8px;
  margin-left: 16px;
  max-height: 120px;

  h2 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 1.5;
    max-height: 45px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  p {
    font-size: 14px;
    color: #6c6c6c;
    margin-top: 8px;
  }
`;

export const Description = styled.h2`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 1.5;
  max-height: 45px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const ProfileBottom = styled.div`
  align-self: center;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 24px;

  border: 1px solid #d3d3d3;
  border-radius: 4px;
`;

export const StarIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px 8px;
`;

export const StarTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  border-left: 1px solid #d3d3d3;

  padding: 0px 8px;
  h4 {
    font-weight: 500;
    font-size: 14px;
    color: #6c6c6c;
  }
`;

export const SeeMoreButton = styled.a`
  width: 100%;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #55409c;
  color: #fff;

  border-radius: 4px;
  border: none;

  font-weight: 400;
  font-size: 14px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  justify-content: space-between;
  cursor: pointer;

  button {
    background: none;
    border: none;
    height: 30px;

    display: flex;
    align-items: center;
    cursor: pointer;

    color: #55409c;
    font-size: 14px;

    &:first-child {
      svg {
        margin-right: 8px;
      }
    }

    &:nth-child(2) {
      svg {
        margin-left: 8px;
      }
    }
  }
`;
