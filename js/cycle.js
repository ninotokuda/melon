var titles=["Pancakes","Scones","Omelettes","Granola","Eggs Benedict","Corned Beef Hash","Bagel","Granola","French Toast","Breakfast Taco"];
var files=["<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-pancakes.jpg\">","<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-scones.jpg\","<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-omelet.jpg\","<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-granola.jpg\","<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-eggsbenedict.jpg\","<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-corned-beef-hash.jpg\","<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-bagel.jpg\","<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-granola.jpg\","<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-french-toast.jpg\","<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-taco.JPG\"];
var nextid=["<a id=\"foodID\" href=\"pick.html&index=1\" class=\"dislikeButton push-right\"><img class=\"dislike no-border\" src=\"img/dislike.jpg\"></a>","<a id=\"foodID\" href=\"pick.html&index=2\" class=\"dislikeButton push-right\"><img class=\"dislike no-border\" src=\"img/dislike.jpg\"></a>","<a id=\"foodID\" href=\"pick.html&index=3\" class=\"dislikeButton push-right\"><img class=\"dislike no-border\" src=\"img/dislike.jpg\"></a>","<a id=\"foodID\" href=\"pick.html&index=4\" class=\"dislikeButton push-right\"><img class=\"dislike no-border\" src=\"img/dislike.jpg\"></a>","<a id=\"foodID\" href=\"pick.html&index=5\" class=\"dislikeButton push-right\"><img class=\"dislike no-border\" src=\"img/dislike.jpg\"></a>","<a id=\"foodID\" href=\"pick.html&index=6\" class=\"dislikeButton push-right\"><img class=\"dislike no-border\" src=\"img/dislike.jpg\"></a>","<a id=\"foodID\" href=\"pick.html&index=7\" class=\"dislikeButton push-right\"><img class=\"dislike no-border\" src=\"img/dislike.jpg\"></a>","<a id=\"foodID\" href=\"pick.html&index=8\" class=\"dislikeButton push-right\"><img class=\"dislike no-border\" src=\"img/dislike.jpg\"></a>","<a id=\"foodID\" href=\"pick.html&index=9\" class=\"dislikeButton push-right\"><img class=\"dislike no-border\" src=\"img/dislike.jpg\"></a>","<a id=\"foodID\" href=\"pick.html&index=0\" class=\"dislikeButton push-right\"><img class=\"dislike no-border\" src=\"img/dislike.jpg\"></a>"];

//get iindex from url. if there's no parameter, index=0.


parseQueryString = function() {

    var str = window.location.search;
    var objURL = {};

    str.replace(
    	new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
    	function( $0, $1, $2, $3 ){
    		objURL[ $1 ] = $3;
    	}
    );
    return objURL;
};

//Example how to use it: 
var params = parseQueryString();
index = params["index"];
if(!index)
    index=0;

document.getElementById("foodTitle").innerHTML = titles[index];
document.getElementById("foodImg").innerHTML = files[index];
document.getElementById("foodID").innerHTML = nextid[index];
