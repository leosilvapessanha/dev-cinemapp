import React from 'react';
// import { AiOutlineHeart } from 'react-icons/ai';

import Header from '../../components/header';
import {
  deleteInLocalStorage,
  getLocalStorage,
} from '../../utils/LocalStorage';
import * as S from './styles';

const FavoriteMovies: React.FC = () => {
  const data = getLocalStorage();
  console.log(data);

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Você tem tantos filmes fantásticos para ver...</S.Title>
      </S.Container>
      <S.Movies>
        {data.map(eachMovie => (
          <header key={eachMovie.imdbID}>
            <img src={eachMovie.Poster} alt={eachMovie.Title} />
            <div>
              <strong>{eachMovie.Title}</strong>
              <p>{eachMovie.Year}</p>
              <p>{eachMovie.Rated}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                deleteInLocalStorage(eachMovie);
                console.log(deleteInLocalStorage);
              }}
            >
              botão
            </button>
          </header>
        ))}
      </S.Movies>
    </>
  );
};

export default FavoriteMovies;
