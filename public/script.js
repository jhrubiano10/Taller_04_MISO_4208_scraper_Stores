$(function(){
    var printCard = function(data, position) {
        return "<div class='text-center'>" + 
                    "<div class='card' style='width: 15rem; display: inline-block; margin-top: 10px;'>" + 
                        "<div class='position'>"+(position)+"</div>" + 
                        "<img class='card-img-top' src='"+(data.icon)+"' alt='Card image cap'>" + 
                        "<div class='card-block' style='margin-bottom: 10px;'>" + 
                            "<p class='card-text'>" + 
                                "<h4>"+(data.title)+"</h4>" + 
                                "<div>"+(data.price)+"</div>" + 
                            "</p>" + 
                            "<a href='"+(data.url)+"' class='btn btn-primary' target='_blank' rel='noopener noreferrer'>Detalles</a>" + 
                        "</div>" + 
                    "</div>" + 
                "</div>";
    };

    var printStores = function(stores) {
        var render = [{
                div : "playstore", 
                data : "dataPlayStore"
            }, {
                div : "appstore", 
                data : "dataAppStore"
            }
        ];
        for(var i = 0; i < render.length; i++) {
            $("#" + render[i].div).empty();
            for(var c = 1; c <= stores[render[i].data].length; c++) {
                $("#" + render[i].div).append(
                    printCard(stores[render[i].data][c - 1], c)
                );
            }
        }
    };

    var service = function(callback) {
        var data = {
            category : $("#category").val(),
            price : $("#price").val(),
            country : $("#country").val(),
            num : $("#num").val()
        };
        $.ajax({
            url         : "/getdata",
            type        : "POST",
            data        : JSON.stringify(data),
            dataType    : "json",
            contentType: "application/json; charset=utf-8"
        }).done(function(data) {
            callback(data);
        }).fail(function(request, status, error) {
            sweetAlert("Error", request.responseText, "error");
        });
    };
    ["category", "price", "country", "num"].map(function(combo){
        $("#" + combo).change(function(e){
            if($("#category").val() !== "0") {
                service(function(data){
                    if(!data.error) {
                        printStores(data.stores);
                    } else {
                        swal({
                            title: "Error",
                            text: data.msg, 
                            type : "error"
                        });
                    }
                });
            }
        });
    });
});