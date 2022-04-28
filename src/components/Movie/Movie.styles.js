import styled from "styled-components";

export const ContainerMovie = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 300px;
  }
`;

export const MovieTitle = styled.h1`
  display: flex;
  align-items: center;

  font-size: 16px;
  color: white;
  margin-top: 16px;
  height: 42px;
`;

export const WatchButton = styled.a`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  /* estilizacao condicional 3
    Recebo a props watched que passei na etapa anterior.
    watched é true: eu assisti, então vai ficar cinza.
    caso contrário: não assisti, vai ficar vermelho.
  */
  background-color: ${({ watched }) => (watched ? `#ccc` : `#a90000`)};
  border-radius: 8px;
  width: 120px;
  color: white;
  height: 42px;
`;
