export const isFunction = (val) => {
  return typeof val === "function";
};

export function convertBase64MediaToBlob(base64Media, sliceSize = 512) {
  const byteCharacters = atob(base64Media.split(",")[1]);
  const byteArrays = [];
  for (let i = 0; i < byteCharacters.length; i += sliceSize) {
    const slice = byteCharacters.slice(i, i + sliceSize);
    const byteChars = new Array(slice.length);
    for (let j = 0; j < slice.length; j++) {
      byteChars[j] = slice.charCodeAt(j);
    }
    const byteArray = new Uint8Array(byteChars);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: "audio/ogg; codecs=opus" });
  return blob;
}

export function convertToBase64String(blob) {
  let promise = new Promise((resolve, reject) => {
    try {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onloadend = () => {
        resolve(fileReader.result);
      };
    } catch (e) {
      reject(e);
    }
  });
  return promise;
}
