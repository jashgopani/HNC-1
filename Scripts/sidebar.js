var locationButton = document.getElementById("kml");
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        alert("Geo location is not supported by this browser");
    }
}

function showPosition(position){
    //write the country displaying code here
    //when the getCurrentPosition function is called, it returns an
    //object called position which we took as parameter and we will use
    //position.coords.latitude and same for longitude
}