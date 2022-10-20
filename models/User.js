const fs = require('fs');
const { use, all } = require('../routes/main');

const User = {
    fileName: './Black_diamond_BD/blackdiamond_db.sql',

    getData: function() {
        return fs.readFileSync(this.fileName, 'utf-8');

    },

    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
       return 1;
    },

    findAll: function() {
        return this.getData();
    },

    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(onseUser => onseUser.id === id);
        return userFound;
    },

    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(onseUser => onseUser[field] === text);
        return userFound;
    },


    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        };
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

console.log(User.getData())

module.exports = User;