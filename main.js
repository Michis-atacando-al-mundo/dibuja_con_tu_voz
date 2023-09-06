x = 0;
y = 0;
draw_circle = "";
draw_rect = "";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla."; 
    recognition.start();
} 

recognition.onresult = function(event) {
    console.log(event); 
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "La voz se reconoció como: " + content; 
    
    if(content== "gatito")
    {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      document.getElementById("status").innerHTML = "Se empezó a dibujar un gatito "; 
      draw_circle = "set";
    } 

    
    if(content== "zorrito")
    {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      document.getElementById("status").innerHTML = "Se empezó a dibujar un zorrito "; 
      draw_rect = "set";
    } 
}

function setup(){
canvas= createCanvas(900,600);
}


function draw(){
 if (draw_circle == "set") 
   {
    radius = Math.floor(Math.random()*100);
    circle(x, y ,radius );
    document.getElementById("status").innerHTML = "Se dibujó un gatito. ";
    draw_circle="";
   } 
   
   if(draw_rect == " set")
   {
    altura = Math.floor(Math.random()*100);
    base = Math.floor(Math.random()*100);
    rect(x, y ,altura,base );
    document.getElementById("status").innerHTML = "Se dibujó un zorrito. ";
    draw_rect="";

   }
   


}




