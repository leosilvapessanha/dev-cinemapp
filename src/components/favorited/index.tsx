import React, { ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  favorited?: boolean;
}

const FavoriteButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <S.Container {...rest}>{children}</S.Container>;
};

export default FavoriteButton;
