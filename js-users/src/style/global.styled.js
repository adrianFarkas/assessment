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

export const CenteredCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 45px;
  text-align: center;
  margin: 25px 10px;
  position: relative;
  color: ${props => props.theme.colors.blue};
  :after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 80px;
    height: 3px;
    border-radius: 100px;
    transform: translate(-50%, 0);
    background: ${props => props.theme.colors.blue};
  }
`;
