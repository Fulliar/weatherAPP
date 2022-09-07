let weather = {
    "apiKey": "4fd0129ecbb505cbbcb1d0c7545f4dbd",
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city + 
            "&units=metric&appid=" + 
            this.apiKey
        )
        .then((response => response.json()))
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} =data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src= "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/2300x1200/?" + name + "')"
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};
//Search Button Event Listener
document.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
});
//Enter Key Event Listener
document.querySelector(".search-bar")
.addEventListener("keyup", function(event){
if(event.key == "Enter"){
    weather.search();
}
})

weather.fetchWeather("Istanbul");