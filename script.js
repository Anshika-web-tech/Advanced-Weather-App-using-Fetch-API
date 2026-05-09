async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "16752f24850c30bd2ccf7cc035e23a01";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("result").innerHTML = `

        <div class="weather-info">

            <h2>${data.name}, ${data.sys.country}</h2>

            <div class="temp">
                ${Math.round(data.main.temp)}°C
            </div>

            <p>${data.weather[0].description}</p>

            <div class="details">

                <div class="detail-box">
                    <h4>Humidity</h4>
                    <p>${data.main.humidity}%</p>
                </div>

                <div class="detail-box">
                    <h4>Wind</h4>
                    <p>${data.wind.speed} m/s</p>
                </div>

                <div class="detail-box">
                    <h4>Feels Like</h4>
                    <p>${data.main.feels_like}°C</p>
                </div>

                <div class="detail-box">
                    <h4>Pressure</h4>
                    <p>${data.main.pressure} hPa</p>
                </div>

            </div>

        </div>

        `;

    } catch(error){

        document.getElementById("result").innerHTML = `
        <p style="color:#ffb3b3;">${error.message}</p>
        `;
    }
}
