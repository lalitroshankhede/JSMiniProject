 let city = "Mumbai";

 city.toLowerCase();

 console.log(city);



 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=9de7ebd2d223fb01c9bead1530d58c84&units=metric`)
   .then(response => {
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   })
   .then(data => {
     console.log('Data received:', data);
     document.querySelector(".city-name").innerHTML = data.name;
     document.querySelector(".temperature").innerHTML = data.main.temp + "&deg;";
     document.querySelector(".condition").innerHTML = data.weather[0].main;
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.deg + "km/h";
     document.querySelector(".air-press").innerHTML = data.main.pressure;
     document.querySelector(".visibility").innerHTML = data.visibility + "km/h";

   })
   .catch(error => {
     console.error('There was a problem with the fetch operation:', error);
   });




 const cityBtn = document.querySelector(".submit-btn");
 cityBtn.addEventListener("click", submitData);

 function submitData() {

   let city = document.querySelector(".search-box").value;
   city.toLowerCase();
   console.log(city);

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=9de7ebd2d223fb01c9bead1530d58c84&units=metric`)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {
       console.log('Data received:', data);
       document.querySelector(".city-name").innerHTML = data.name;
       document.querySelector(".temperature").innerHTML = data.main.temp + "&deg;";
       document.querySelector(".condition").innerHTML = data.weather[0].main;
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".wind").innerHTML = data.wind.deg + "km/h";
       document.querySelector(".air-press").innerHTML = data.main.pressure;
       document.querySelector(".visibility").innerHTML = data.visibility + "km/h";

     })
     .catch(error => {
       console.error('There was a problem with the fetch operation:', error);
     });


   document.querySelector(".search-box").value = "";


 }
