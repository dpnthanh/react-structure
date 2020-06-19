import React from 'react';
import Button from 'component/kit/button';
import imgFilm from 'img/film.jpg';
import './Home.scss';
import {
  useHandleClickButtonExcel,
  useHandleClickButtonDemoRecoil,
} from './Home.util';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const handleClickButtonExcel = useHandleClickButtonExcel({ history });
  const handleClickButtonDemoRecoil = useHandleClickButtonDemoRecoil({ history });

  return(
    <div>
      <header className="home_header">
        <h1>Super Tools</h1>
      </header>
      <div className="view_center">
        <Button
          title="Excel"
          onClick={handleClickButtonExcel}
        />
        <Button
          title="Demo recoil"
          onClick={handleClickButtonDemoRecoil}
        />
      </div>
      <img className="home_image" src={imgFilm}/>
    </div>
  );
};

export default Home;
