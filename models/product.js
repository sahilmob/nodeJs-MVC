const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      //We use callback function since the return is inside the read file hence the fetchAll func. does not return anything.
      // return [] 
      cb([]);
    } else {
      //We use callback function since the return is inside the read file hence the fetchAll func. does not return anything.
      // return JSON.parse(fileContent)
      cb(JSON.parse(fileContent));
    }
  });
}

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}