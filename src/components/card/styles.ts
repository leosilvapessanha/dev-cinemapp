import styled from 'styled-components';

export const Section = styled.section`
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
`;
