const fs = require('fs');

exports.post = function (req, res) {
  const file = req.file.buffer;
  const jsonFile = JSON.parse(file);
  fs.writeFileSync('./src/data/FinishedQuestsLeafs.json', JSON.stringify(jsonFile), (error) => {
    if(error) res.send(err); 
    res.status(200);
    res.send();
  })
}