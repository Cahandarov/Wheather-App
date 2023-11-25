var window = document.querySelector("window");
var container = document.querySelector(".container");
var part1 = document.querySelector("#part1");
var part2 = document.querySelector("#part2");
var part3 = document.querySelector("#part3");
var select = document.getElementsByClassName("places");
var thickBox_Main = document.querySelector("#thickBox_Main");
var part4 = document.querySelector("#part4");
var search_input = document.getElementById("search");
var local = document.getElementById("local");


window.addEventListener("load", () => {
    axios
        .get("http://api.weatherapi.com/v1/forecast.json?key=cb7565cfb0f74e86a0f155847221912&q=Baku&days=7&aqi=no&alerts=no")
        .then((res) => {
            getData_Part1(res.data);
            getData_Part2(res.data.forecast.forecastday[0].day);
            getData_Part3(res.data.forecast.forecastday[0].hour)
            getData_Part4(res.data.forecast.forecastday);
            console.log(res.data);
        })

})


function getData_Part1(obj) {
    part1.innerHTML = "";
    part1.innerHTML = `
    <div id="head">
    <label for="places" class="places">${obj.location.name}</label>
    <select name="select" id="places">
        <option value=""></option>
    </select>
</div>

<div id="main_box">
<img src="http:${obj.current.condition.icon}" id="main_png />
<div class="flex">
<p class="current_temperature">${Math.round(obj.current.temp_c)}<span>&deg;</span></p>
</div><p id="Precipitations">${obj.current.condition.text}</p>
</div>
    `
}



function getData_Part2(obj) {

    part2.innerHTML = "";
    part2.innerHTML = `
        <div id="PreBottom">
        <span id="maxandmin">Max.:<span id="max">${Math.round(obj.maxtemp_c)}<span>&deg;<span class="min">Min.:<span 
        id="min">${Math.round(obj.mintemp_c)}<span>&deg;</span>
    </div>

    <div id="slimBox">
        <div class="rain_posibility">
            <img src="./image/rain_posibility.svg" alt="">
            <p id="rain_posibility">${obj.daily_chance_of_rain}<span>%</span></p>
        </div>
        <div class="humidity">
            <img src="./image/humidity.svg" alt="">
            <p id="humidity">${obj.avghumidity}<span>%</span></p>
        </div>
        <div class="wind">
            <img src="./image/wind.svg" alt="">
            <p id="wind">${obj.maxwind_kph}<span>km/h</span></p>
        </div>
    </div> 
  `
}

function getData_Part3(arr) {
    const now = new Date();
    const weatherData = arr;
    var first4HoursData = [];
    for (let i = 1; i < 5; i++) {
        const nextHour = new Date(now);
        nextHour.setHours(now.getHours() + i);
        const matchingData = weatherData.find(data => {
            const dataTime = new Date(data.time);
            return dataTime.getHours() === nextHour.getHours();
        });
        if (matchingData) {
            first4HoursData.push(matchingData);
        }
    }
    var today = new Date();
    var month = today.getMonth();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = monthNames[month];
    part3.innerHTML = `
    <div id="thickBox">
            <div id="headOFthickbox">
                <p class="today">Today</p>
                <p class="date"><span id="moumth">${monthName}<span>, </span><span id="day">${new Date().getDate()}</span></p>
            </div>
            <div id="thickBox_Main">
            <div id="first_hour" class="columnsOF_thickbox">
                <div class="columns_Temp" >${Math.round(first4HoursData[0].temp_c)}<span>&deg;C</span></div>
                <img src="http:${first4HoursData[0].condition.icon}" alt="" id="first_hour_img" class="columns_img">
                <p class="first_hour_hour">${(new Date(first4HoursData[0].time).getHours()) < 10 ? ("0" + (new Date(first4HoursData[0].time).getHours())) : (new Date(first4HoursData[0].time).getHours())}:00</p>
                </span>
            </div>
            <div id="second_hour" class="columnsOF_thickbox">
                <div class="columns_Temp">${Math.round(first4HoursData[1].temp_c)}<span>&deg;C</span></div>
                <img src="http:${first4HoursData[1].condition.icon}" alt="" id="first_hour_img" class="columns_img">
                <p class="first_hour_hour">${(new Date(first4HoursData[1].time).getHours()) < 10 ? ("0" + (new Date(first4HoursData[1].time).getHours())) : (new Date(first4HoursData[1].time).getHours())}:00</p>
                </span>
            </div>
            <div id="third_hour" class="columnsOF_thickbox">
                <div class="columns_Temp">${Math.round(first4HoursData[2].temp_c)}<span>&deg;C</span></div>
                <img src="http:${first4HoursData[2].condition.icon}" alt="" id="first_hour_img" class="columns_img">
                <p class="first_hour_hour">${(new Date(first4HoursData[2].time).getHours()) < 10 ? ("0" + (new Date(first4HoursData[2].time).getHours())) : (new Date(first4HoursData[2].time).getHours())}:00</p>
                </span>
            </div>
            <div id="fourth_hour" class="columnsOF_thickbox">
                <div class="columns_Temp">${Math.round(first4HoursData[3].temp_c)}<span>&deg;C</span></div>
                <img src="http:${first4HoursData[3].condition.icon}" alt="" id="first_hour_img" class="columns_img">
                <p class="first_hour_hour">${(new Date(first4HoursData[3].time).getHours()) < 10 ? ("0" + (new Date(first4HoursData[3].time).getHours())) : (new Date(first4HoursData[3].time).getHours())}:00</p>
                </span>
            </div>
        </div>
        </div>
    `
}


function getData_Part4(arr) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];
    part4.innerHTML = `
    <div class="bottom">
    <div class="bottom_top">
        <p class="next_forcast">Next Forecast</p>
        <img src="./image/calendar.svg" alt="">
    </div>

    <div class="next_day">
        <P class="nextday_Name">${days[new Date(arr[1].date).getDay()]}</P>
        <img src="http:${arr[1].day.condition.icon}" alt="" class="Nextday_image">
        <div><span class="nextday_max">${Math.round(arr[1].day.maxtemp_c)}<span>&deg;C</span><span class="nexntday_min">${Math.round(arr[1].day.mintemp_c)}<span>&deg;C</span>
        </div>
    </div>

    <div class="next_day">
        <P class="nextday_Name">${days[new Date(arr[2].date).getDay()]}</P>
        <img src="http:${arr[2].day.condition.icon}" alt="" class="Nextday_image">
        <div><span class="nextday_max">${Math.round(arr[2].day.maxtemp_c)}<span>&deg;C</span><span class="nexntday_min">${Math.round(arr[2].day.mintemp_c)}<span>&deg;C</span>
        </div>
    </div>
</div>
  `
}
// console.log(local)
search_input.addEventListener("mouseover", ()=>{
    if(local.style.display = "inline"){
        local.style.display = "none"
    }
    else{
        local.style.display = "inline"
    }
})

search_input.addEventListener("mouseout", ()=>{
    if(local.style.display = "none"){
        local.style.display = "inline"
    }
    else{
        local.style.display = "none"
    }
    search_input.value = "";
})

console.log(search_input)
search_input.addEventListener("change", ()=> {
    searched_Text(search_input.value);
    // document.getElementById("places")=search_input.value;

    
  
});

function searched_Text(searched_Text) {
    axios
        .get(`http://api.weatherapi.com/v1/forecast.json?key=cb7565cfb0f74e86a0f155847221912&q=${searched_Text}&days=7&aqi=no&alerts=no`)
        .then((res) => {
            getData_Part1(res.data);
            getData_Part2(res.data.forecast.forecastday[0].day);
            getData_Part3(res.data.forecast.forecastday[0].hour)
            getData_Part4(res.data.forecast.forecastday);
        })
       
}


// select.addEventListener("change", (e)=> {
//     select_cities(e.target.value);
// });

// function select_cities(cities) {
//     console.log(cat)
//     axios.get(`https://dummyjson.com/products/category/${cat}`)
//         .then((res) => {
//             getData(data);
//         })
// }