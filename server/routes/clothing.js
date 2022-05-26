const express = require('express');
const fs = require('fs');
const fsPromises = require('fs').promises;
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
// router.route('/')
//   .get(function(req, res) {

//     getClothingData()
//       .then(data => {
//         console.log('Returning clothing data to browser.');
//         res.send(data);
//       })
//       .catch(err => res.status(500).send(err))
//       .finally(() => console.log('All done processing promise.'));

//     console.log('Doing more work');

//   });

router.route('/')
  .get(async function(req, res) {

    try{
      let data = await getClothingData();
      console.log('Returning async data.');
      res.send(data);
    }
    catch (error){
      res.status(500).send(error);
    }
    console.log('Doing more work');

  });

//function getClothingData() {
async function getClothingData() {

  // WITHOUT AWAIT
  // let clothingPromise = fsPromises.readFile(datafile, 'utf8')
  //   .then(data => JSON.parse(data));
  // console.log(clothingPromise);
  // return clothingPromise;

  // WITH AWAIT
  let rawData = await fsPromises.readFile(datafile, 'utf8');
  let clothingData = JSON.parse(rawData);

  console.log(clothingData);
  return clothingData;

  // OLD CODE
  // return new Promise((resolve, reject) => {
  //   fs.readFile(datafile, 'utf8', (err, data) => {
  //     if (err){
  //       reject(err);
  //     } else {
  //       let clothingData = JSON.parse(data);
  //       resolve(clothingData);
  //     }
  //   });
  // });


}
module.exports = router;
