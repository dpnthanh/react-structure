import download from 'image-downloader';
import Path from 'path';
import fs from 'fs';
export default {
  getRandomString: (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },

  imageToBase64: (file, callback) => {
    var reader = new FileReader();

    reader.onload = function(e) {
      callback(e.target.result);  
    };

    reader.readAsDataURL(file);
  },

  isImageFile: path => {
    const appceptType = [
      'jpg',
      'png',
      'jpeg'
    ];
    let ext = path.substring(path.lastIndexOf('.') + 1, path.length);
    const hasType = appceptType.find(type => {
      return type === ext;
    });
    if (hasType) {return true;}
    return false;
  },

  downloadImage: (url, path) => {  
    let dirName = Path.dirname(path);
    if(!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName, {recursive: true});
    }
    
    let options = {
      url: url,
      dest: path
    };

    return download.image(options);
  },

  getFolder: (callback) => {
    let input = document.createElement('input');
    document.body.appendChild(input);
    input.type='file';
    input.onchange = e => {
      if (e.target.files[0]) {
        let path = e.target.files[0].path.split('/');
        path.pop();
        callback(path.join('/'));
        document.body.removeChild(input);
      }
    };
    input.setAttribute('directory', '');
    input.webkitdirectory = true;
    input.click();
    
  },
  removeAccents: (str) => {
    return str.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  },
  replaceSpace: (str) => {
    str = str.replace(/ /g, '_');
    return str;
  },
  chunkArray: (myArray, chunkSize) => {
    var results = [];
 
    while (myArray.length) {
      results.push(myArray.splice(0, chunkSize));
    }
 
    return results;
  }
};