import React from 'react';
import useHandlers from './Excel.main';
import Button from 'component/kit/button';
import FileUpload from 'component/kit/file-upload';
import './excel.scss';

const Excel = () => {
  const {
    handleClickButtonHome,
    handleUploadFile,
    handleClickSelectDownloadPath,
    imageList,
    logList,
    handleClickDownload
  } = useHandlers();

  return(
    <div className="excel_container">
      <Button title="Home" onClick={handleClickButtonHome}/>
      <hr/>
      <FileUpload onChange={handleUploadFile}/>
      <Button title="Thư mục lưu ảnh" onClick={handleClickSelectDownloadPath}/>
      <Button title="Tải ảnh" onClick={handleClickDownload}/>
      <hr/>
      <p>Tổng số transaction: {imageList ? imageList.reduce((count, item) => count + item.imageList.length, 0) : 0 }</p>
      <p>{logList}</p>
      {/* {
        imageList.map(({images}) => 
          images.map( ({imageUrl}, index) => 
            <a key={index} href={imageUrl} download="your-file">
              <img className="excel_image" src={imageUrl} />
            </a>
          )
        )
      } */}
    </div>
  );
};

export default Excel;
