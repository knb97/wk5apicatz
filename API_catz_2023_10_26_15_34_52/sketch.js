
function setup() {
  createCanvas(400, 400);
}

function draw() {
 background(255)
}

  function preload(){
 loadJSON("https://api.thecatapi.com/v1/images/search?limit=5&api_key=live_thlgNz6D1isqCLBAnF5UXvX4l2oKOeer46YRQiiYfZml35mbHqtHQ5NW5XtmvmxK", 
          
function(json){
    createImg( json[0].url);
  });
}