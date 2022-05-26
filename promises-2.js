let myPromise = new Promise((resolve, reject) => {

  // perform async calls
  if (success) {
    resolve(data);
  } else {
    reject(reason);
  }
  
});