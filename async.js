// function with return promise
// function getData() {
  
//   return MethodThatReturnsPromise()
//     .then(rawData => JSON.parse(rawData));     // then method wrap the parsed data into a new promise
// }

// rewrite function to async/await
async function getData() {
  
  let rawData = await MethodThatReturnsPromise();

  return JSON.parse(rawData);

}

getData()
  .then(data => console.log(data))
  .catch(error => console.log(error));

  // keep doing work while async code completes