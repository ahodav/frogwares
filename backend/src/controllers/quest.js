const fs = require('fs');

exports.get = (req, res) => {
  var { id, alias } = req.params;
  fs.readFile('./src/data/GeneralQuestsInfo.json', (err, data) => {
    if (err) throw  err;
    let info = JSON.parse(data);
    let obj = info.find((el) => {
      if(el.globalId == id && el.alias == alias) {
        return el;
      }
    });
    fs.readFile('./src/data/FinishedQuestsLeafs.json', (err, data) => {
      if (obj == undefined){
        res.send('error');
      }else{
        let leaf = obj.pathway.leafs;
        let arr = [];
        let result =[];
        let qId = obj.id;
        let finishedleafs = JSON.parse(data);
        let fil = finishedleafs.filter(obj => obj.questId == qId);
        for(let i = 0; i < fil.length; i++){
          arr.push(fil[i].name);
        }
        for(let i = 0; i < leaf.length; i++){
          if(arr.indexOf(leaf[i]) != -1){
            result.push(true);
          }else{
            result.push(false);
          }
        }
        obj.finishedleafs = result;
        res.send(obj);
      }
    })
  });      
}