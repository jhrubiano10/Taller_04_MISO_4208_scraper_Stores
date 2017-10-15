# Taller 04 Extracción automática de información de Google Play

Enlace del taller: https://miso-4208-labs.gitlab.io/talleres/taller4.html#fn_2

Extraer información automáticamente de páginas web haciendo uso de la librería [JSoup] se ha realizado el ejercicio planteado en el taller, 
el cual se encuentra en la carpeta [jsoup]


## Extracción de información de Google Play y PlayStore

![demo](https://github.com/jhrubiano10/Taller_04_MISO_4208_scraper_Stores/blob/master/gif_aplication.gif?raw=true)

URL despliegue: https://taller04-stores.herokuapp.com/


Para el taller se ha hecho uso de los siguientes paquetes:

* [google-play-scraper]
* [app-store-scraper]

Los cuales permiten la extracción de información de las tiendas de aplicaciones Google Play Store y AppStore.

Debido a que existe una serie de diferencias entre los tipos de categorías que existen en ambas tiendas, se ha realizado un proceso de convalidación, esto se puede apreciar en el archivo [categories.js]

## Servicio REST

Se ha creado un servicio REST de tipo ``POST`` el cual recibe los siguientes parámetros:

* **Categoría:** La cual es aplicable para ambas tiendas.
* **Precio:** Si es paga o gratuita
* **País:** En este caso se ha tenido en cuentas las tiendas de Colombia (co) y de Estados Unidos (us)
* **Cantidad a mostrar:** Número de aplicaciones a mostrar

### Ejemplo

```json
{
    "category":"ENTERTAINMENT", 
    "price" : "paid", 
    "country" : "co", 
    "num" : 5
}
```

### Autor
* Jorge Rubaino [@ostjh]
* Código: 201510711

License
----
MIT

[@ostjh]:https://twitter.com/ostjh
[JSoup]:https://jsoup.org/
[jsoup]:https://github.com/jhrubiano10/Taller_04_MISO_4208_scraper_Stores/tree/master/jsoup
[google-play-scraper]:https://github.com/facundoolano/google-play-scraper
[app-store-scraper]:https://github.com/facundoolano/app-store-scraper
[categories.js]:https://github.com/jhrubiano10/Taller_04_MISO_4208_scraper_Stores/blob/master/categories.js#L42


