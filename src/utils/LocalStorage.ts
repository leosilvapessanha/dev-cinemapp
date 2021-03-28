import { IMovie } from '../pages/dashboard';

export function getLocalStorage(): IMovie[] {
  const response = localStorage.getItem('@Movies');
  if (response) {
    return JSON.parse(response);
  }

  return [];
}

export function addToLocalStorage(data: IMovie): void {
  const movies = getLocalStorage();
  const movieExists = movies.find(movie => movie.imdbID === data.imdbID);
  if (movieExists) {
    return;
  }
  const updatedMovies = [...movies];
  updatedMovies.push(data);

  localStorage.setItem('@Movies', JSON.stringify(updatedMovies));
}

export function deleteInLocalStorage(data: IMovie): void {
  const movies = getLocalStorage();
  const movieExists = movies.findIndex(movie => movie.imdbID === data.imdbID);
  if (movieExists < 0 || -1) {
    return;
  }
  const updatedMovies = [...movies];
  updatedMovies.splice(1, movieExists);

  localStorage.setItem('@Movies', JSON.stringify(updatedMovies));
}
