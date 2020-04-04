import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import XLSX from 'xlsx';
import { helper } from '@/util';
import path from 'path';

const useHandlers = () => {
  const [imageUrls, setImageUrls] = useState([]);
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
        for(var R = range.s.r; R <= range.e.r; ++R) {
          for(var C = range.s.c; C <= range.e.c; ++C) {
            let cellAddress = {c:C, r:R};
            /* if an A1-style address is needed, encode the address */
            let cellRef = XLSX.utils.encode_cell(cellAddress);
            if(!ws[cellRef]) {continue;} // if cell doesn't exist, move on
            var cell = ws[cellRef];
            let cellValue = cell.f;
            if(cellValue && cellValue.indexOf('HYPERLINK') !== -1) {
              let imageUrl = cellValue.split('"')[1];
              setImageUrls(prevState => [...prevState, imageUrl]);
            }
          }
        }
       
      };
      reader.readAsBinaryString(f);
    }
  };

  const handleClickDownloadFile = () => {
    helper.getFolder(saveDir => {
      imageUrls.forEach(link => {
        console.log('download: ', link);
        helper.downloadImage(link, path.resolve(saveDir, helper.getRandomString(10) + '.jpg'));
      });
    });
    
  };

  return {
    handleClickButtonHome,
    handleUploadFile,
    handleClickDownloadFile,
    imageUrls,
  };
};

export default useHandlers;
