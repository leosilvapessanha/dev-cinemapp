import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 7rem;
  padding: 0 1.875rem;
  background: var(--background2);
`;

export const Content = styled.div`
  display: flex;
  flex: row;
  max-width: 1120px;
  align-items: center;
  margin: 0 auto;

  img {
    height: 3.75rem;
    border-radius: 1rem;
    border: none;
  }

  span {
    font-size: 3.75rem;
    color: var(--white);
    margin-left: 1.5rem;
  }
  p {
    display: inline;
    font-size: 3.75rem;
    color: var(--red);
  }
`;

export const TitleWhite = styled.h1`
  font-size: 3.75rem;
  color: var(--black);
`;
export const Navigation = styled.ul`
  display: flex;
  flex: 1;
  min-width: 300px;
  /* background-color: #000; */
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  margin-top: 1rem;
  a {
    text-decoration: none;

    li {
      font-weight: 600;
      font-size: 1.2rem;
      color: var(--white);
      transition: 0.2s;
      background-color: transparent;

      &:hover {
        color: ${shade(0.2, 'red')};
      }
    }
  }
`;
