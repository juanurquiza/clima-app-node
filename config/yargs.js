const argv = require('yargs').options({
    direcion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}