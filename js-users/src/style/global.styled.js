import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled(Container)`
  width: 50%;
  padding: 20px;
  min-height: 100vh;
  flex-direction: column;
  background: ${props => props.theme.colors.shadow};
`;

export const IconCotnainer = styled(Container)`
  font-size: 20px;
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 6px;
  background: ${props => props.theme.colors.light};
  box-shadow: 4px 4px 10px ${props => props.theme.colors.shadow};
`;
