import React from 'react';
import useHandlers from './Home.main';
import Button from 'component/kit/button';

const Home = () => {
  const {
    handleClickButtonExcel
  } = useHandlers();

  return(
    <div>
      <header>
        <h1>Super Tools</h1>
      </header>
      <Button
        title="EXCEL"
        onClick={handleClickButtonExcel}
      />
    </div>
  );
};

export default Home;
