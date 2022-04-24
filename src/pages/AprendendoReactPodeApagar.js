import { useState } from "react";
import styled from "styled-components";
import { Paragraph, StyledLink, StyledTitle } from "../styles/index.styles";
import { StyledButton } from "./Home";

export const AprendendoReactPodeApagar = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    gap: 24px;

    background-color: #000000;
  `;

  return (
    <Container className="App">
      <StyledButton>
        <StyledLink to="/">Voltar pra Home</StyledLink>
      </StyledButton>

      <StyledTitle>Sessão: Aprendendo react</StyledTitle>

      <TesteJavascript />
      <TesteJSX />
    </Container>
  );
};

export const TesteJavascript = () => {
  return (
    <>
      <StyledTitle>Usando JAVASCRIPT PURO dentro do return</StyledTitle>

      {(() => {
        const nome = "victor";

        if (typeof nome === "string") {
          return <Paragraph>É uma string!</Paragraph>;
        } else {
          return <Paragraph>Não é string!</Paragraph>;
        }
      })()}
    </>
  );
};

export const TesteJSX = () => {
  const [show, setShow] = useState(false);
  const style = { width: 150, padding: 12 };

  return (
    <>
      <StyledTitle>Usando JSX dentro do return</StyledTitle>
      <button onClick={() => setShow(!show)} style={style}>
        {show ? "Esconder frase" : "Mostrar frase"}
      </button>

      {show && <Paragraph>React é delícia demais.</Paragraph>}
    </>
  );
};
