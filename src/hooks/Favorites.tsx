/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable camelcase */
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { IMovie } from '../pages/dashboard';

import { addToLocalStorage, getLocalStorage } from '../utils/LocalStorage';

interface FavoritsData {
  favoriteList: IMovie[];
  toggleFavorite: (movie: IMovie) => void;
  isFavorite: (id: string) => boolean;
}

interface FavoriteProvidersProps {
  children: ReactNode;
}

const Favorits = createContext({} as FavoritsData);

function FavoritsProvider({ children }: FavoriteProvidersProps) {
  const [favoriteList, setFavoriteList] = useState<IMovie[]>(
    getLocalStorage('@CineWeb:movies'),
  );
  console.log(favoriteList);
  function toggleFavorite(movie: IMovie): void {
    const movieExists = favoriteList.find(data => data.imdbID === movie.imdbID);
    if (movieExists) {
      const filteredMovies = favoriteList.filter(
        data => data.imdbID !== movieExists.imdbID,
      );
      setFavoriteList(filteredMovies);
      addToLocalStorage('@CineWeb:movies', filteredMovies);
      return;
    }
    const newFavoriteList = [...favoriteList, movie];
    setFavoriteList(newFavoriteList);
    addToLocalStorage('@CineWeb:movies', newFavoriteList);
  }
  function isFavorite(id: string): boolean {
    const movieExists = favoriteList.find(data => data.imdbID === id);
    if (movieExists) {
      return true;
    }
    return false;
  }
  return (
    <Favorits.Provider value={{ favoriteList, toggleFavorite, isFavorite }}>
      {children}
    </Favorits.Provider>
  );
}

function useFavorits(): FavoritsData {
  const context = useContext(Favorits);
  return context;
}

export { FavoritsProvider, useFavorits };
