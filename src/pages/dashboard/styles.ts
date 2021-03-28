import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem auto 5rem;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: #f4f4f4;
  margin-left: 3rem;
  line-height: 5rem;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  max-width: 43.75rem;
  display: flex;
  input {
    height: 4.375rem;
    width: 20rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.5rem;
    color: var (--black);

    &::placeholder {
      color: var(--gray);
    }
  }
  button {
    width: 7rem;
    height: 4.375rem;
    background: var(--red);
    border-radius: 0.5rem;
    border: 0;
    margin-left: 1rem;
    color: var(--white);
    font-weight: bold;
    transition: background-color 0.2s;
    align-items: center;

    &:hover {
      background: ${shade(0.2, '#6f1d1b')};
    }
  }
`;

export const Movies = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15.62rem, auto));
  grid-gap: 30px 32px;
  margin-top: 80px;
  text-align: center;
  justify-content: center;
  align-items: center;

  section {
    background: var(--background2);
    border-radius: 0.5rem;
    width: 100%;
    padding: 1.5rem;
    text-decoration: none;
    align-items: center;
    transition: transform 0.5s;
    height: 100%;

    &:hover {
      transform: translateY(-0.625rem);
    }
    img {
      width: 16rem;
      border-radius: 0.5rem;
    }
    & > div {
      /* margin-left: 1rem; */
      margin-top: 1rem;
      color: var(--white);
      & > div {
        color: red;
      }

      p {
        font-size: 1.125rem;
        margin: 0.25rem;
      }
    }
    button {
      background-color: transparent;
      border: none;
    }
  }
`;
