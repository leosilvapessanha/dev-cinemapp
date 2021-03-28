import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useFavorits } from '../../hooks/Favorites';
import { IMovie } from '../../pages/dashboard';

import * as S from './styles';

interface ICardProps {
  movie: IMovie;
}

const Card: React.FC<ICardProps> = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useFavorits();
  return (
    <S.Section key={movie.imdbID}>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <strong>{movie.Title}</strong>
        <p>{movie.Year}</p>
        <p>{movie.Rated}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          toggleFavorite(movie);
        }}
      >
        {isFavorite(movie.imdbID) ? (
          <AiFillHeart color="#A30015" align-itens="right" />
        ) : (
          <AiOutlineHeart color="#A30015" align-itens="right" />
        )}
      </button>
    </S.Section>
  );
};
export default Card;
