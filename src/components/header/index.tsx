import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt="CINE" />
        <span>
          Cine<p> Web</p>
        </span>
      </S.Content>
      <S.Navigation>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/favorite">
          <li>favorite</li>
        </Link>
      </S.Navigation>
    </S.Container>
  );
};

export default Header;
