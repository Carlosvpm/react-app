import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #55409c;
  margin-bottom: 1rem;

  button {
    padding: 0 8px;
    color: #fff;
    height: 100%;
    border: none;
    background: #55409c;
    font-size: 14px;

    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 450px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  background-color: transparent;
  padding-left: 16px;
  cursor: pointer;
`;