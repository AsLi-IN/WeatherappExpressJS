const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status")
const temp_real_val = document.getElementById("temp_real_val")
//below does same thing
const datahide=document.querySelector(".middle_layer");

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityname.value;
    if (cityVal === "") {
        city_name.innerText = "Please enter the City name"
        datahide.classList.add('data_hide')

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=99eae7c64b2155386d4d31ec60aadaf2&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country} `

            temp_real_val.innerText = arrdata[0].main.temp;
            console.log(arrdata[0].weather[0].main);
           let WeatherType= arrdata[0].weather[0].main;
            switch(WeatherType){
                case "Clear":
                    temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
                    break;
                case "Clouds":
                    temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
                    break;
                case "Rain":
                    temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
                    break;
                case "Haze":
                    temp_status.innerHTML="<i class='fas fa-radiation' style='color: #a4b0be;'></i>";
                    break;
                default:
                    temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide') 


        } catch {
            city_name.innerText = "Error with API, Try again. "
            datahide.classList.add('data_hide')

        }
    }
}
submitBtn.addEventListener('click', getInfo);