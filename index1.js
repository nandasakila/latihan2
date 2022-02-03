//NO 1
function trafficlight(lampulalulintas){
    if(lampulalulintas == "red"){
        return "stop"
   }
    else if(lampulalulintas == "yellow"){
       return "be carelfull!"
    }
    else if(lampulalulintas == "green"){
        return "Go!"
    }
}
var lamp = trafficlight("red");
console.log(lamp);

