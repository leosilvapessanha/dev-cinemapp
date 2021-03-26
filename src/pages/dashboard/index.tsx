import React from 'react';
import Header from '../../components/header';
import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <S.Title>dash</S.Title>
      <S.Form>
        <input type="text" placeholder="Coloque o nome do filme aqui" />
        <button type="submit">Pesquisar</button>
      </S.Form>
      <S.Movies>
        <a href="teste">
          <img
            src="https://image.freepik.com/fotos-gratis/camera-de-filme-antigo_62754-36.jpg"
            alt="máquina"
          />
          <div>
            <strong>Máquina</strong>
            <p>máquina de filmar antiga</p>
          </div>
        </a>
        <a href="teste">
          <img
            src="https://image.freepik.com/fotos-gratis/camera-de-filme-antigo_62754-36.jpg"
            alt="máquina"
          />
          <div>
            <strong>Máquina</strong>
            <p>máquina de filmar antiga</p>
          </div>
        </a>
      </S.Movies>
    </>
  );
};

export default Dashboard;
