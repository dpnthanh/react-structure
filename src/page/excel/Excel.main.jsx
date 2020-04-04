import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { helper } from '@/util';

const useHandlers = () => {
  const history = useHistory();

  const handleClickButtonHome = () => {
    history.push('/');
  };

  const handleUploadFile = e => {
    if(e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
    }
  };

  return {
    handleClickButtonHome,
    handleUploadFile,
  };
};

export default useHandlers;
