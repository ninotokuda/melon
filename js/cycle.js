var titles=["Pancakes","Scones","Omelettes","Granola","Eggs Benedict","Corned Beef Hash","Bagel","Granola","French Toast","Breakfast Taco"];
var files=["<img class=\"img-responsive img-resize\" src=\"img/breakfast/breakfast-pancakes.jpg\">","/breakfast/breakfast-scones.jpg","/breakfast/breakfast-omelet.jpg","/breakfast/breakfast-granola.jpg","/breakfast/breakfast-eggsbenedict.jpg","/breakfast/breakfast-corned-beef-hash.jpg","/breakfast/breakfast-bagel.jpg","/breakfast/breakfast-bagel.jpg","/breakfast/breakfast-granola.jpg","/breakfast/breakfast-french-toast.jpg","/breakfast/breakfast-taco.JPG"];
var nextid=[1,2,3,4,5,6,7,8,9,0];

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
document.getElementById("foodID").innerHTML = "fancy.html&index=" + nextid[index];
