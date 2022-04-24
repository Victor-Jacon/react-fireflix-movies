import { StyledLink } from "../styles/index.styles";
import styled from "styled-components";

export const Home = () => {
  return (
    <ContainerHome>
      <StyledTitle>Home</StyledTitle>

      <NavContainer>
        <StyledButton>
          <StyledLink to="/">Home</StyledLink>
        </StyledButton>

        <StyledButton>
          <StyledLink to="/aprendendo-react">Aprendendo React</StyledLink>
        </StyledButton>

        <StyledButton>
          <StyledLink to="/app-real">WebApp Real - FireFlix</StyledLink>
        </StyledButton>
      </NavContainer>
    </ContainerHome>
  );
};

export const StyledTitle = styled.h1`
  color: white;
  text-align: center;
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;

  background-color: #000000;
  height: 100vh;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #8f0000;
  height: 50px;
`;
