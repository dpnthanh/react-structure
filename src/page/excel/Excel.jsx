import React from 'react';
import useHandlers from './Excel.main';
import Button from 'component/kit/button';
import FileUpload from 'component/kit/file-upload';
import './excel.scss';

const Excel = () => {
  const {
    handleClickButtonHome,
    handleUploadFile,
    handleClickDownloadFile,
    imageUrls,
  } = useHandlers();

  return(
    <div className="excel_container">
      <Button title="Home" onClick={handleClickButtonHome}/>
      <hr/>
      <FileUpload onChange={handleUploadFile}/>
      <Button title="Download" onClick={handleClickDownloadFile}/>
      <hr/>
      <p>Image Count: {imageUrls.length}</p>
      {
        imageUrls.map((imageUrl, index) => {
          return (
            <a key={index} href={imageUrl} download="your-file">
              <img className="excel_image" src={imageUrl} />
            </a>
          ) ;
        })
      }
    </div>
  );
};

export default Excel;
