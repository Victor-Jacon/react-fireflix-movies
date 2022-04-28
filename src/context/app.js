/* CONTEXT API 1 - INTRODUÇÃO
Temos níveis de "complexidade de dados" no react.
1-Quando é algo muito simples, usamos props.
2-Quando é simples, mas precisa compartilhar dados entre várias telas, usamos context. (caso contrário, o seu código seria muito bagunçado)
3-Quando é complexo ou exige mais performance, usamos arquitetura FLUX. O redux é um exemplo de arquitetura FLUX.
obs: Nesta apresentação usaremos props e context. */

import { createContext, useContext, useState } from "react";

// CONTEXT API 2 - É um boilerplate. Quando for criar outro contexto, basta copiar e colar. (igual fazemos com o redux, para não perder tempo)
const FireflixContext = createContext({});

// CONTEXT API 3 - O provider é o responsável por passar os dados para os componentes. (ele faz o papel de passar props/passar dados)
const FireflixProvider = ({ children }) => {
  // CONTEXT API 4 - Criamos as variáveis com useState, que vão armazenar os dados da busca e os dados dos filmes.
  // Consumir API 1
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
  ]);

  // Consumir API Clique 1
  const [search, setSearch] = useState("");

  // CONTEXT API 5 - Passamos os dados para os componentes.
  // Toda vez que um dado for alterado, o componente que o usa, será atualizado.
  // Então a implementação precisa ser pensada com cuidado, para não ativar uma atualização de componente desnecessária. Isso causaria perda de performance.
  return (
    <FireflixContext.Provider
      value={{
        movies,
        setMovies,
        search,
        setSearch,
      }}
    >
      {children}
    </FireflixContext.Provider>
  );
};

// CONTEXT API 6 - Crio um hook para consumir o contexto. Desta forma a repetição de código em cada componente que usa este contexto, será reduzida.
function useFireflixContext() {
  const context = useContext(FireflixContext);
  if (!context)
    throw new Error(
      "useFireflixContext must be called inside the FireflixProvider"
    );

  // desestruturando context
  const { movies, setMovies, search, setSearch } = context;

  return {
    movies,
    setMovies,
    search,
    setSearch,
  };
}

// CONTEXT API 7 - Exporto o provider e o CustomHook.
export { FireflixProvider, useFireflixContext };
