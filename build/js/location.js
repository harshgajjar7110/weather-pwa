if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( function success(position) {
 console.log('latitude', position.coords.latitude, 
             'longitude', position.coords.longitude);
  
const ul = document.getElementById('temp0');
var city=document.getElementById('cityname').value;
let apiKey = 'ea17e180be78021853f5102e10706a1b';
var lat=position.coords.latitude;
var lon=position.coords.longitude;
// old key=' 27395456766d636d89b43ff9d187a3ef'
// https://samples.openweathermap.org/data/2.5/weather?lat=22.258651999999998&lon=71.1923805&appid=b6907d289e10d714a6e88b30761fae22
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
fetch(url)
    .then(response =>  response.json())
    .then(data => {
        
        
        var people =[]
       people.push(data);
   
        return people.map(function(person) {
                var temp_=person.main.temp;
                //   li.innerHTML=temp_
                  var name_=person.name;
                  var visibility_=person.visibility;
                  var pressure=person.main.pressure;
                //   span.innerHTML = name_;          
                //   localStorage.setItem(location,temp_);
                ul.innerHTML +=` 
                  <div class="card-group mt-1 w-100" >
                 
                  <div  class="card text-left">
                      <div class="card-body">
                        <h4 class="card-title">City:${name_}</h4>
                        <p class="card-text">
                        Tempreture:${temp_} <br/>
                        Pressure:${pressure}</p>
                      </div>
                    </div>`;
            // append(li, span);
            // append(ul, li);

        });
    })
    
   
}
);

  }