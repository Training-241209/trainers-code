//console.log("test");

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {

    e.preventDefault();

    const location = document.getElementById('city').value; // this should be not null
    const myAPI = ""; // BAD practice! ALWAYS hide your API and other sensitive to .env!

    console.log(location);

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=2&units=metric&appid=${myAPI}`;

     fetch(url)
     .then(response => {
       
        return response.json();
    }) // as soon as you get a response back from the server, convert it to json.
     .then(data => {
        
        console.log(data.list[0].main.feels_like);
        const weatherResults = document.querySelector("#Weather-results");
        
        const tempContainer = document.createElement("div");
        tempContainer.innerHTML = `<p>Temp in ${location} feels like ${data.list[0].main.feels_like}</p>`
        weatherResults.appendChild(tempContainer);

     })
     .catch(error => {
        console.log(error);
     })



})