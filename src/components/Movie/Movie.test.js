import renderer from "react-test-renderer";
import Movie from "./Movie";

it("renders correctly", () => {
  // JEST RENDER 2 - Passamos um dado mockado para a props movie.
  const movie = {
    Title: "Star Wars: Episode IV - A New Hope",
    Year: "1977",
    imdbID: "tt0076759",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  };

  // JEST RENDER 3 - Cria o componente + serializa para JSON + comparamos o componente gerado com o snapshot. Eles precisam "bater (match)".
  const MovieComponent = renderer.create(<Movie movie={movie} />).toJSON();
  expect(MovieComponent).toMatchSnapshot();
});
