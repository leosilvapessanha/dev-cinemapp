import React, { useState, FormEvent } from 'react';

import Header from '../../components/header';
import { api } from '../../services/api';
import * as S from './styles';

interface IMovie {
  Title: string;
  Year: string;
  Rated: string;
  poster: string;
}

const Dashboard: React.FC = () => {
  const [newMovie, setNewMovie] = useState('');
  const [movies, setMovies] = useState<IMovie>([]);

  async function handleAddMovies(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    console.log('working on');

    const response = await api.get<IMovie>(
      `/?${process.env.REACT_APP_API_KEY}&t=${newMovie}`,
    );
    // console.log(response);
    const movie = response.data;
    setMovies([...movies, movie)];
  }
  return (
    <>
      <Header />
      <S.Title>dash</S.Title>
      <S.Form onSubmit={handleAddMovies}>
        <input
          value={newMovie}
          onChange={e => setNewMovie(e.target.value)}
          type="text"
          placeholder="Coloque o nome do filme aqui"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>
      <S.Movies>
        <a href="teste">
          <img
            src="https://image.freepik.com/fotos-gratis/camera-de-filme-antigo_62754-36.jpg"
            alt="máquina"
          />
          <div>
            <strong>Máquina</strong>
            <p>máquina de filmar antiga</p>
          </div>
        </a>
      </S.Movies>
    </>
  );
};

export default Dashboard;
