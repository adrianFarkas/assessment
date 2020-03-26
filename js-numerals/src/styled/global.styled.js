import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
  min-width: 200px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px 10px;
  border: 0;
  border-radius: 6px;
  color: #666666;
  background: #f4f4f4;
  font-weight: bold;
  font-size: 20px;
  box-shadow: inset 6px 6px 10px #dedede, inset -6px -6px 10px #fff;
  ::placeholder {
    color: #66666660;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px 10px;
  margin-top: 20px;
  cursor: pointer;
  color: #666666;
  background: #f4f4f4;
  font-weight: bold;
  font-size: 20px;
  border: 0;
  border-radius: 6px;
  box-shadow: 6px 6px 10px #dedede, -6px -6px 10px #fff;
  transition: background-color 0.3s;
  :hover {
    background: #efefef;
  }
`;
