import React, { useState, FormEvent } from 'react';
// import { useHistory } from 'react-router-dom';

import Header from '../../components/header';
// import { addToLocalStorage } from '../../utils/LocalStorage';
import { api } from '../../services/api';
import * as S from './styles';
import Card from '../../components/card';

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
    setMovies([...movie]);
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
          <Card movie={eachMovie} />
        ))}
      </S.Movies>
    </>
  );
};

export default Dashboard;
