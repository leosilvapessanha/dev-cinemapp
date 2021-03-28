import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import Header from '../../components/header';
import { useFavorits } from '../../hooks/Favorites';
import * as S from './styles';

const FavoriteMovies: React.FC = () => {
  console.log(useFavorits());
  const { toggleFavorite, favoriteList } = useFavorits();

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Você tem tantos filmes fantásticos para ver...</S.Title>
      </S.Container>
      <S.Movies>
        {favoriteList.map(eachMovie => (
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
                toggleFavorite(eachMovie);
              }}
            >
              <AiFillHeart color="#A30015" align-itens="right" />
            </button>
          </header>
        ))}
      </S.Movies>
    </>
  );
};

export default FavoriteMovies;
