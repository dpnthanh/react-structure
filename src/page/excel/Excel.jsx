import React from 'react';
import useHandlers from './Excel.main';
import Button from 'component/kit/button';
import FileUpload from 'component/kit/file-upload';
import './excel.scss';

const Excel = () => {
  const {
    handleClickButtonHome,
    handleUploadFile,
  } = useHandlers();

  return(
    <div>
      <Button title="Home" onClick={handleClickButtonHome}/>
      <hr/>
      <hr/>
      <FileUpload onChange={handleUploadFile}/>
      <hr/>
      
    </div>
  );
};

export default Excel;
