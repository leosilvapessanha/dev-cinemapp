import React, { useState, FormEvent } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import Header from '../../components/header';
import { api } from '../../services/api';
import * as S from './styles';

interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Rated: string;
  Poster: string;
}

interface ISearch {
  Search: IMovie[];
}

const Dashboard: React.FC = () => {
  const [newMovie, setNewMovie] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);

  async function handleAddMovies(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get<ISearch>(
      `/?${process.env.REACT_APP_API_KEY}&s=${newMovie}`,
    );
    console.log(response);
    const movie = response.data.Search;
    setMovies([...movies, ...movie]);
  }
  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Qual filme você quer procurar?</S.Title>
        <S.Form onSubmit={handleAddMovies}>
          <input
            value={newMovie}
            onChange={e => setNewMovie(e.target.value)}
            type="text"
            placeholder="Coloque o nome do filme aqui"
          />
          <button type="submit">Pesquisar</button>
        </S.Form>
      </S.Container>
      <S.Movies>
        {movies.map(eachMovie => (
          <a key={eachMovie.imdbID} href="movie">
            <img src={eachMovie.Poster} alt={eachMovie.Title} />
            <div>
              <strong>{eachMovie.Title}</strong>
              <p>{eachMovie.Year}</p>
              <p>{eachMovie.Rated}</p>
            </div>
            {/* <div> */}
            <AiOutlineHeart color="#A30015" align-itens="right" />
            {/* </div> */}
          </a>
        ))}
      </S.Movies>
    </>
  );
};

export default Dashboard;
