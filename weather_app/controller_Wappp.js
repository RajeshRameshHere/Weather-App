const api_key="845ccad085dd41ffc8220e7f4a407f8e";
const api_url="https://api.openweathermap.org/data/2.5/weather?r&units=metric";

const searchbox =document.querySelector(".search input") ;    // it takes the input field text when it is clicked by the button follwed by bellow element
const searchbtn =document.querySelector(".search button");   //when button is clicked it passes the element to above element        <h3 class="update"> sunny</h3>

const weatherIcon=document.querySelector(".weather_icon");


async function checkweather(city){
    //to get the data from the api
    const response=await fetch(api_url +`&q=${city}`+ `&appid=${api_key}`);
   
  if (response.status==404) {
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
 
  } else{
    var data=await response.json(); 
    //weather details

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
    document.querySelector(".update").innerHTML=`"${data.weather[0].description}"`;


   





 if (data.weather[0].main=="Clouds") {
    weatherIcon.src="assets/clouds.png";
}

else if (data.weather[0].main=="Thunderstorm") {
    weatherIcon.src="assets/storm.png";
}

else if (data.weather[0].main=="Drizzle") {
    weatherIcon.src="assets/drizzle.png";
}

else if (data.weather[0].main=="Rain") {
    weatherIcon.src="assets/raincloud.png";
}


else if (data.weather[0].main=="Snow") {
    weatherIcon.src="assets/snow.png";
}

else if (data.weather[0].main=="Clear") {
    weatherIcon.src="assets/clear.png";
}

else if (data.weather[0].main=="Mist" ||"Haze"||"Smoke"||"Dust"||"Fog"||"sand") {
    weatherIcon.src="assets/mist.png";
}

//for diplaying the weather from none to show

    document.querySelector(".weather").style.display="block" ;
    document.querySelector(".error").style.display="none" ;

    

  }
  
    
    
//it is just to print the data on backend
console.log(data);

}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})














