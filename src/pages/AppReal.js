import { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

export const AppReal = () => {
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

  // Consumir API 2
  const getDefaultMovies = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=${process.env.REACT_APP_OMDB_API}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // Consumir API Clique 4-A
  const getMovies = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_OMDB_API}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // Consumir API Clique 4-B
  const handleKey = (e, search) => {
    console.log(e.key);

    if (e.key === "Enter" && search.length > 0) {
      getMovies(search);
    }
  };

  // Consumir API 3
  useEffect(() => {
    getDefaultMovies();
  }, []);

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
          {movies.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
        </CarrouselMovies>
      </ContainerContent>
    </ContainerApp>
  );
};

export const Movie = ({ movie }) => {
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
  padding-right: 20px;
`;

export const Search = styled.input`
  width: 136px;
  height: 32px;
  background-color: transparent;
  border: 1px solid;
  border-color: #ccc;
  padding: 4px 8px;
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
