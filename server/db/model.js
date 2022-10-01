const db = require('./dbms.js');

module.exports = {
  getAll: (callback) => {
    db.query(
      'SELECT * FROM movies',
      function (err, res) {
        if (err) {
          console.log(err);
        } else {
          callback(null, res);
        }
      }
    )
  }
}


// module.exports.getAll((err, results) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(JSON.stringify(results));
//   }
// });