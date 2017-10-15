const express = require("express");
const router = express.Router();
const playStore = require("./controllers/playStore");
const appStore = require("./controllers/appStore");
const {
    categories, 
    validateCategory
} = require("./categories");

//Para la vista del login...
router.get("/", (req, res) => {	
	res.render("index", {
        categories
    });
});

router.post("/getdata", async (req, res) => {
    //Recibir el tipo de filtro que se desea hacer...
    const { 
        category, 
        price, 
        country, 
        num
    } = req.body;
    let response = {
        error : false, 
        msg : "Proceso realizado"
    };
    if(validateCategory(category)) {
        if(price === "paid" || price === "free") {
            if(country === "co" || country === "us") {
                if(num >= 5 && num <= 15) {
                    //Para la PlayStore...
                    const dataPlayStore = await playStore.getPlayStore(
                        req.body
                    );
                    //Para los datos de la appStore...
                    const dataAppStore = await appStore.getAppStore(
                        req.body
                    );
                    //response.playStore = dataPlayStore;
                    response.stores = {
                        dataPlayStore,
                        dataAppStore
                    };
                } else {
                    response.error = true;
                    response.msg = "El valor de cantidad a mostrar no es válido";   
                }
            } else {
                response.error = true;
                response.msg = "El valor de país no es válido";
            }
        } else {
            response.error = true;
            response.msg = "El valor de precio no es válido";    
        }
    } else {
        response.error = true;
        response.msg = "No existe la categoría";
    }
    return res.status(200).json(
        response
    );
});

module.exports = router;