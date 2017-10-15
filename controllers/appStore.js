var store = require('app-store-scraper');

exports.getAppStore = (filter) => {
    return new Promise((resolve, reject) => {
        const convalidatePrice = {
            paid : "TOP_PAID_IOS", 
            free : "TOP_FREE_IOS"
        };
        const {
            category, 
            price, 
            country, 
            num,
        } = filter;
        store.list({
            category: store.category[category],
            collection: store.collection[convalidatePrice[price]],
            country : country, 
            num
        }).then(apps => {
            resolve(apps);
        });
    });
};



