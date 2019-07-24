const fs = require('fs');

exports.get = function (req, res) {
  fs.readFile('./src/data/MainPageInfo.json', (err, data) => {
    if (err) throw  err;
    let info = JSON.parse(data);
    res.send(info);
  });
}