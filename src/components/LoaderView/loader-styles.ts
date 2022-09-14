import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    0%{
        transform: rotate(0)
    }
    100%{
        transform: rotate(360deg)
    }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 8px solid white;
  border-left: 8px solid purple;

  animation-name: ${rotation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
