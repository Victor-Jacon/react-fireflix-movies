import { useState } from "react";
import styled from "styled-components";
import { ContainerMovie, MovieTitle, WatchButton } from "./Movie.styles";

// JEST RENDER 1 - Para testar o componente, sugiro usar o export default function. Quando eu faço usando o componente funcional comum, dá vários erros. É uma preferência pessoal.
export default function Movie({ movie }) {
  {
    /* Consumir API - Renderizar 2
    Desestruturei os dois valores de dentro de movie (só usarei eles)

    img:  Passo o link do poster na props src.
    MovieTitle:   Passo o Title (título do filme)
    
    WatchButton
      href:   Fiz uma concatenação para montar uma busca personalizada no youtube. (busquei o título do filme no youtube)
    */
  }
  const { Poster, Title } = movie;

  {
    /* estilizacao condicional 1 */
  }
  const [watched, setWatched] = useState(false);

  return (
    <ContainerMovie>
      <div>
        <img src={Poster} alt={Title} />
      </div>

      <MovieTitle>{Title}</MovieTitle>

      {/* estilizacao condicional 2 - 
      onClick:  Salvo se a pessoa clicou pra assistir ou não. 
      watched:  Crio uma props que passa os dados para o styled-components. 
        se watched for true: já assisti (botão vai ficar cinza)
        se watched for false: não assisti ainda (botão vai ficar vermelho)
      */}
      <WatchButton
        href={
          "https://www.youtube.com/results?search_query=" +
          `${Title}` +
          "+watch+online"
        }
        target="_blank"
        rel="noreferrer"
        onClick={() => setWatched(true)}
        watched={watched}
      >
        Watch now
      </WatchButton>
    </ContainerMovie>
  );
}
