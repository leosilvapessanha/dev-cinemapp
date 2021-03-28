/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IMovie } from '../pages/dashboard';

export function getLocalStorage(key: string): IMovie[] {
  const response = localStorage.getItem(key);
  if (response) {
    return JSON.parse(response);
  }

  return [];
}

export function addToLocalStorage(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}
