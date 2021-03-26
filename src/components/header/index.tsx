import React from 'react';
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
    </S.Container>
  );
};

export default Header;
