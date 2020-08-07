export const isEmpty = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
};

export const getDate = () => {
  let date = new Date().toLocaleDateString();
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const getTime = () => {
  let time = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  time = time.split(':');
  time = time.join('');
  return time;
};

export const chunkArrays = (array, chunkSize) => {
  let index = 0;
  let chunk;
  let arrayLength = array.length;
  let tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    chunk = array.slice(index, index + chunkSize);
    tempArray.push(chunk);
  }
  return tempArray;
};

export const dataURItoBlob = (dataURI, name) => {
  let byteString = dataURI;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  let ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  let file = new Blob([ia], { type: mimeString });
  file.name = name;
  file.lastModifiedDate = new Date();

  return window.URL.createObjectURL(file);
  // return file;
};


