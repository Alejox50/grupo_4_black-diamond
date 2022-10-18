/* module.exports = {
  "development": {
    "username": "root",
    "port": "3306",
    "password": 'root',
    "database": "blackdiamond_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "port": "3306",
    "password": 'root',
    "database": "blackdiamond_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "port": "3306",
    "password": 'root',
    "database": "blackdiamond_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
} */
const   conf_db_host = 'localhost',
conf_db_name   = 'blackdiamond_db', 
conf_user     = 'root',
    conf_password = 'alejo147',
    conf_port     = '3306';
module.exports = {
    conf_db_host : conf_db_host,
    conf_db_name   : conf_db_name,
    conf_user     : conf_user,
    conf_password : conf_password,
    conf_port     : conf_port
};