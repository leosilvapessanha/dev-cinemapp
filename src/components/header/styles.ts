import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
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
