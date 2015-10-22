$(document).ready(function(){


    $(".container").on('click', '.deleteButton', function(){
        console.log("Delete");
        $(this).parent().remove();
    });

    $("#loadButton").on('click', function(){
        $(".container").empty();
        loadData();
    })

            //console.log("HI"); //This consoles first, because there will be a slight lag in the code block above.
});

function loadData(){
    $.ajax({
        type : "GET",
        url : "/data", //Doesn't require Data, can be labeled differently, IT NEEDS TO MATCH AN app.get FROM THE app.js FILE ON THE SERVER SIDE
        success : function(data) {
            //console.log("Round Trip Complete");
            appendDom(data);
        }
    });
}


function appendDom(data){
    for(var key in data){
        var object = data[key];
        for(var prop in object){
            $(".container").append("<div class='person well col-md-3 col-md-offset-1'></div>");

            var $el = $(".container").children().last();
            $el.append("<img src=" + object[prop].imageURL + " class='img-thumbnail' width='160' height='160'>");
            $el.append("<p>" + object[prop].name + "</p>");
            $el.append("<p>" + object[prop].position + "</p>");
            $el.append("<p>" + object[prop].location + "</p>");
            $el.append("<button class='deleteButton'>Delete</button>");



        }
    }
}