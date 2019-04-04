const axios = require('axios');

// const instance = axios.create({
//     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,

//     headers: { 'X-RapidAPI-Key': '26706db2fcmsh5c4c31689445ab3p1f4896jsn2bbf8803e25c' }
// });

const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '26706db2fcmsh5c4c31689445ab3p1f4896jsn2bbf8803e25c' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultado para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

let getLocation = (dir) => {

    let instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,

        headers: { 'X-RapidAPI-Key': '26706db2fcmsh5c4c31689445ab3p1f4896jsn2bbf8803e25c' }
    });

    instance.get().then((result) => {
        console.log(result.data.Results[0]);
    }).catch((err) => {
        console.log(err);
    });


}


module.exports = {
    getLocation,
    getLugarLatLng
}