/*eslint-env browser*/
/*eslint "no-console": "off" */



fetch("https://api.myjson.com/bins/udbm5")
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        books(myJson);
    });

function books(myBooks) {

//
    var template = "";
    myBooks.books.forEach(function (books) {
        
        template += `
            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div class="flipper">

                    <div class="back">
                        <span> ${books.descripcion}</span>
                        <a href="${books.detalle}"><br><button>More Info</button></a>
                    </div>

                <div class="front">
                        <img class="cover img-responsive" src="${books.portada}">
                    </div>

                </div>
            </div>
        
        `;
            })
    document.getElementById("books").innerHTML = template;
}
   


$(document).ready(function() {

	
	
	$("button").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});
        
/*
//        var image = document.createElement("img");
//        image.setAttribute("src", everyBook.portada);
//        
//        var front = document.createElement("div");
//        front.setAttribute("class", "singeltitle");
//
//
//        var back = document.createElement("div");
//        back.setAttribute("class", "back");
//        
//        front.append(image);
//        
//        
//        document.getElementById("books").append(front)
//        document.getElementById("books").append(back)*/


