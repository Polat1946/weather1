const key = '19231e466978cc8036844fe7e7d2506e';
let city = "Liège";
let units = "metric";
let lang = "en";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${key}&lang=${lang}`;
const searchBar = document.getElementById('searchBar');

fetch(url)
.then(weather =>{
    return weather.json();
})
.then((responseJson) => {
    console.log(responseJson.dt);
    function setQuery(e){
        console.log(searchBar.value);
    }
    // const displayResult= (weather) => {
    //     let city = document.querySelector('.city');
    //     city.innerText = `${result.name},${result.sys.country}`;
    // }
    searchBar.addEventListener('keyup', setQuery);
})
.catch((error)=>{
    console.log(error);
})







