import { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useFireflixContext } from "../context/app";
import Movie from "../components/Movie/Movie";

export const AppReal = () => {
  // CONTEXT API 9 - Importo as variaveis que vou usar
  const { movies, setMovies, search, setSearch } = useFireflixContext();

  // Consumir API Clique 4-A
  const getMovies = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_OMDB_API}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // Consumir API 2
  const getDefaultMovies = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=${process.env.REACT_APP_OMDB_API}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // Consumir API 3 - Array vazia: As variáveis que estiverem dentro da array, são os "gatilhos" para que o código seja ativado.
  // Se eu colocar [movies], toda vez q a variável movies for alterada, o código será executado novamente.
  useEffect(() => {
    getDefaultMovies();
  }, []);

  // Consumir API Clique 4-B
  const handleKey = (e, search) => {
    console.log(e.key);

    if (e.key === "Enter" && search.length > 0) {
      getMovies(search);
    }
  };

  return (
    <ContainerApp onKeyPress={(e) => handleKey(e, search)}>
      <Section>
        <ContainerMenu>
          <MobileMenu />
          <LogoFireflix>FIREFLIX</LogoFireflix>
        </ContainerMenu>

        <ContainerSearch>
          {/* Consumir API Clique 2 */}
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Buscar"
          />

          {/* Consumir API Clique 3 */}
          <IconSearch onClick={() => getMovies(search)} />
        </ContainerSearch>
      </Section>

      <ContainerContent>
        <MovieCategory>Populares</MovieCategory>
        <CarrouselMovies>
          {/* Consumir API - Renderizar 1
          Passo o filme para o componente Movie. Assim ele recebe o poster e o título do filme.
          Ele vai criar um componente Movie para cada filme que tiver na lista. 
          Pra isso damos o nome de renderização dinâmica.
          */}
          {movies &&
            movies.map((movie, index) => <Movie movie={movie} key={index} />)}
        </CarrouselMovies>
      </ContainerContent>
    </ContainerApp>
  );
};

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #141414;
  height: 100vh;
  padding-left: 20px;
`;

export const Section = styled.div`
  display: flex;
`;

export const MobileMenu = styled(AiOutlineMenu)`
  color: white;
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

export const LogoFireflix = styled.h1`
  color: #ff0000;
  font-size: 24px;
  padding-top: 4px;
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 46px;
`;

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  height: 46px;
  width: 100%;
  align-items: center;
  padding-right: 12px;
  padding-left: 12px;
`;

export const Search = styled.input`
  width: 100%;
  height: 32px;
  background-color: transparent;
  border: 1px solid;
  border-color: #ccc;
  padding: 4px 24px 4px 8px;
  color: #ccc;
`;

export const IconSearch = styled(AiOutlineSearch)`
  position: absolute;

  color: #ccc;
  width: 24px;
  height: 24px;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const CarrouselMovies = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 24px;
  margin-top: 9px;
`;

export const MovieCategory = styled.div`
  font-size: 19px;
  font-weight: bold;
  color: #999999;
`;
