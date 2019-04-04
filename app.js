const argv = require('./config/yargs').argv;
//const axios = require('./config/axios').axios;
const { getLocation, getLugarLatLng } = require('./config/axios');
const clima = require('./config/clima');
console.log(argv.direcion);

//getLocation(encodedURL);´
//getLugarLatLng(argv.direcion).then(console.log);





//clima.getClima(40.750000, -74.000000);






const getInfo = async(dir) => {

    try {

        const cordenadas = await getLugarLatLng(dir);
        const temperatura = await clima.getClima(cordenadas.lat, cordenadas.lng);
        return `el clima de ${ cordenadas.direccion } es de ${temperatura}`;
    } catch {
        return `no se pudo determinar el clima de ${dir}`;
    }


};

getInfo(argv.direcion).then(console.log).catch(console.log);


// instance.get()
//     .then(resp => { console.log(resp.data.Results[0]); })
//     .catch(err => { console.log(err); });