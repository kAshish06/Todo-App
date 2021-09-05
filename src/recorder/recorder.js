import { isFunction } from "../utils/commonUtils";

export const record = (onDataAvailable) => {
  let audioStream;
  let recorder;
  let audioChunks = [];
  let recordPromise = new Promise((resolve, reject) => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        audioStream = stream;
        recorder = new MediaRecorder(audioStream);
        recorder.ondataavailable = (e) => {
          audioChunks.push(e.data);
          if (onDataAvailable && isFunction(onDataAvailable)) {
            onDataAvailable(e);
          }
        };
        // recorder.onstop = (e) => {
        //   return new Promise((resolve, reject) => {
        //     resolve(audioChunks);
        //   });
        // };
        resolve({ recorder });
      })
      .catch((err) => {
        reject("Something went wrong in creating your recorder.");
        console.log("Audio stream not available");
      });
  });

  return recordPromise;
};
