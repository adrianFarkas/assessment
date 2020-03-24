import React, { useState } from "react";
import styled from "styled-components";
import { numToWord } from "../../utils/converter";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
  min-width: 200px;
`;

const Converter = styled.div`
  width: 700px;
  padding: 20px;
  margin: 10px;
  border-radius: 6px;
  border: 4px solid #f4f4f4;
  background: #f4f4f4;
  box-shadow: 6px 6px 10px #dedede, -6px -6px 10px #fff,
    inset -4px -4px 10px #fff, inset 4px 4px 10px #dedede;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: #666666;
  margin-bottom: 30px;
`;

const Input = styled.input`
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

const Button = styled.button`
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

const Result = styled.div`
  color: #666666;
  margin-top: 30px;
  font-size: 20px;
  display: ${props => !props.show && "none"};
`;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const result = numToWord(value);
    if (value !== "") setResult(result);
  };

  const handleClick = e => {
    setValue("");
  };

  return (
    <Container>
      <Converter>
        <Title>Numeral Converter</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="number"
            min="-999999999999999"
            max="999999999999999"
            onChange={handleChange}
            value={value}
            placeholder="Type a number"
            onClick={handleClick}
          />
          <Button type="submit">Convert</Button>
        </form>
        <Result show={!!result}>
          <SubTitle>Result:</SubTitle>
          {result}
        </Result>
      </Converter>
    </Container>
  );
}

export default App;
