MethodThatReturnsPromise()
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('All done!'));