function doAsyncWork(resolve, reject){

  //perform async calls
  if (success){
    resolve(data);
  }
  else {
    reject(reason);
  }
}

let myPromise = new Promise(doAsyncWork);