const gplay = require('google-play-scraper');
const { convalidateStore } = require("../categories");

//Para devolver la data de la consulta de la PlayStore...
exports.getPlayStore = (filter) => {
    return new Promise((resolve, reject) => {
        const convalidatePrice = {
            paid : "TOP_PAID", 
            free : "TOP_FREE"
        };
        let {
            category, 
            price, 
            country, 
            num,
        } = filter;
        //Convalidar a categoría con la PlayStore...
        for(let convalidate of convalidateStore) {
            if(convalidate.base === category) {
                category = convalidate.replace;
                break;
            }
        }
        gplay.list({
            category: gplay.category[category], 
            collection: gplay.collection[convalidatePrice[price]],
            country, 
            num, 
            lang : country === "co" ? "es" : "en"
        }).then(apps => {
            resolve(apps);
        });
    });
};