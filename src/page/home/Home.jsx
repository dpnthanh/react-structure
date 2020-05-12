import React from 'react';
import useHandlers from './Home.main';
import Button from 'component/kit/button';
import imgFilm from 'img/film.jpg';
import './Home.scss';

const Home = () => {
  const {
    handleClickButtonExcel
  } = useHandlers();

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
      </div>
      <img className="home_image" src={imgFilm}/>
    </div>
  );
};

export default Home;
