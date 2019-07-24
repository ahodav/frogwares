const index = require('./controllers/index');
const quest = require('./controllers/quest');
const sendFile = require('./controllers/sendFile');

var multer = require('multer');
const upload = multer();

module.exports = (app) => {
  app.get('/', index.get);
  app.get('/quest/:id/:alias/:status', quest.get);
  app.post('/send-file',  upload.single('file'), sendFile.post)
}