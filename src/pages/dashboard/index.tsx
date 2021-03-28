import React, { useState, FormEvent } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

import Header from '../../components/header';
import { addToLocalStorage } from '../../utils/LocalStorage';
import { api } from '../../services/api';
import * as S from './styles';

export interface IMovie {
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
    const movie = response.data?.Search || [];
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
          <div key={eachMovie.imdbID}>
            <img src={eachMovie.Poster} alt={eachMovie.Title} />
            <div>
              <strong>{eachMovie.Title}</strong>
              <p>{eachMovie.Year}</p>
              <p>{eachMovie.Rated}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                addToLocalStorage(eachMovie);
                // console.log();
              }}
            >
              <AiOutlineHeart color="#A30015" align-itens="right" />
            </button>
          </div>
        ))}
      </S.Movies>
    </>
  );
};

export default Dashboard;
