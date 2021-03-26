import styled from 'styled-components';
import { shade } from 'polished';

// export const Container = styled.div`
//   /* display: flex; */
//   height: 7rem;
//   padding: 0 1.875rem;
// `;

export const Title = styled.h1`
  font-size: 3rem;
  color: #f4f4f4;
  margin-top: 5rem;
  margin-left: 3rem;
  line-height: 5rem;
`;

export const Form = styled.form`
  margin-left: 3rem;
  margin-top: 2.5rem;
  max-width: 43.75rem;
  display: flex;
  input {
    flex: 1;
    height: 4.375rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.3125rem 0 0 0.3125rem;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 13.125rem;
    height: 4.375rem;
    background: #04d361;
    border-radius: 0px 0.3125rem 0.3125rem 0px;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Movies = styled.div`
  margin-left: 3rem;
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 0.3125rem;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.5s;
    & + a {
      margin-top: 1.5rem;
    }
    &:hover {
      transform: translateY(-0.625rem);
    }
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
    div {
      margin-left: 1rem;
      margin-top: 1rem;
      /* align-content: center; */
      strong {
        color: #000;
      }
      p {
        font-size: 1.125rem;
        color: #000;
        margin-top: 0.25rem;
      }
    }
  }
`;
