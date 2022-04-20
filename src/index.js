//node-script.js
const EventEmitter = require('events');

// class, extendendo e simplificando
class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User logged', data);
  }
}

const users = new Users();

users.on('User logged', data => {
  console.log(data);
});

//somente o primeiro evento
// users.once('User logged', data => {
//   console.log(data);
// });

users.userLogged({ user: 'Celso' });
users.userLogged({ user: 'Wellysson' });
