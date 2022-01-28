const route = require('express').Router();
const studentCtrl = require('../controller/studentCtrl');

route.get('/read',studentCtrl.read);
route.get('/edit/:id',studentCtrl.edit)

route.post('/create',studentCtrl.create);
route.post('/update/:id',studentCtrl.update);
route.post('/delete/:id',studentCtrl.delete);


module.exports = route;
