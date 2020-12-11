import * as CRUD from './js/crud-provider';
import { init as initArchivos } from './js/archivos.page';
const { init } = require('./js/usuarios-page');

init();

CRUD.getUsuario(1).then(console.log);
CRUD.createUser({ name: 'Miguel', job: 'Desarrollador' }).then(console.log);
CRUD.updateUser({ name: 'Miguel', job: 'Frontend' }, 1).then(console.log);
CRUD.deleteUser(1).then(console.log);

initArchivos();
