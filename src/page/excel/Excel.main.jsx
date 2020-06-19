import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import XLSX from 'xlsx';
import { helper } from '@/util';
import path from 'path';

const useHandlers = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [logList, setLogList] = useState([]);
  const [outputDir, setOutputDir] = useState([]);
  const history = useHistory();

  const handleClickButtonHome = () => {
    history.push('/');
  };

  const handleUploadFile = e => {
    if(e.target.files && e.target.files[0]) {
      let f = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (evt) => { // evt = on_file_select event
        /* Parse data */
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, {type:'binary'});
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        var range = XLSX.utils.decode_range(ws['!ref']);
        for(var R = 1; R <= range.e.r; ++R) {
          let address = helper.replaceSpace(helper.removeAccents(getCellValue(ws, 2, R)));
          let date = getCellValue(ws, 14, R).split(' ')[0];
          let imageList = [];
          for (let i = 15; i < 25; i++) {
            if(getCellValue(ws,i,R) != null) {
              let imageName = getCellValue(ws,i,R); 
              imageList.push({
                imageName: imageName,
                imageUrl: getHyperLink(ws, i, R)
              });
            }
          }
          setTransactionList(prevState => [{address, date, imageList}, ...prevState]);
        }
       
      };
      reader.readAsBinaryString(f);
    }
  };

  const getCellValue = (ws, c,r) => {
    let cellAddress = {c:c, r:r};
    let cellRef = XLSX.utils.encode_cell(cellAddress);
    if(!ws[cellRef]) {return null;}
    return ws[cellRef].v;
  };

  const getHyperLink = (ws, c, r) => {
    let cellAddress = {c:c, r:r};
    let cellImageRef = XLSX.utils.encode_cell(cellAddress);
    if(!ws[cellImageRef]) {return null;} // if cell doesn't exist, move on
    let cellImageValue = ws[cellImageRef].f;
    if(cellImageValue && cellImageValue.indexOf('HYPERLINK') !== -1) {
      return cellImageValue.split('"')[1];
    }
  };

  const handleClickSelectDownloadPath = () => {
    helper.getFolder(saveDir => {
      setOutputDir(saveDir);
      console.log(saveDir);
    });
  };

  const handleClickDownload = async () => {
    log('Downloading....');
    let newTransactionList = helper.chunkArray(transactionList, 50);
    const listLength = newTransactionList.length;
    for(let i = 0; i < listLength; i ++) {
      const res = await downloadImages(newTransactionList[i]);
      log(`${i+1}/${listLength}`);
    }
    // download code here
  };

  const extractList = list => {
    const newList = [];
    list.forEach(transaction => {
      transaction.imageList.forEach(image => {
        newList.push({image, address: transaction.address, date: transaction.date});
      });
    });
    return newList;
  };

  const downloadImages = (list) => 
    Promise.all(extractList(list).map(download => helper.downloadImage(download.image.imageUrl, path.resolve(outputDir, download.address, download.date, `${download.image.imageName}.jpg`))));

  const log = (message) => {
    console.log(message);
    setLogList(prevState =>[...prevState, message]);
  };

    
  return {
    handleClickButtonHome,
    handleUploadFile,
    handleClickSelectDownloadPath,
    imageList: transactionList,
    logList,
    handleClickDownload
  };
};

export default useHandlers;
