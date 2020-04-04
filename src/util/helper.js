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
  }
};