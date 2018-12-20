
 function createNode(element) {
        return document.createElement(element); 
    }
    
    function append(parent, el) {
        return parent.appendChild(el); 
    }


function userdata()
    {    
    const ul = document.getElementById('people');
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            let people = data;
    
            return people.map(function(person) {
                let li = createNode('li')
                    span = createNode('span');
    
                    var temp__=person.name;
                   
                      var name__=person.email;
                ul.innerHTML +=`<div  class="card text-left">
                <div class="card-body">
                  <p class="card-title">Email:${name__}</p>
                  <p class="card-text">Name${temp__}</p>
                </div>
              </div>`;
                    append(li, span);
                append(ul, li);
    
            });
        })
    }
    
function weather()
{  
    event.preventDefault();  
const ul = document.getElementById('temp1');
var city=document.getElementById('cityname').value;
let apiKey = 'ea17e180be78021853f5102e10706a1b';
// old key=' 27395456766d636d89b43ff9d187a3ef'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},in&units=metric&appid=${apiKey}`
document.getElementById('cityname').innerHTML= '';
fetch(url)
    .then(response =>  response.json())
    .then(data => {        
        var people =[]
       people.push(data);
        return people.map(function(person) {
            let li = createNode('li')
                span = createNode('span');
                var temp_=person.main.temp;
                  var name_=person.name;
                  var visibility_=person.visibility;
                  var pressure=person.main.pressure;
                  localStorage.setItem(name_,temp_);
                  ul.innerHTML +=`
                  <div  class="card text-left">
                      <div class="card-body">
                        <h4 class="card-title">City:${name_}</h4>
                        <p class="card-text">
                        Tempreture:${temp_} <br/>
                      
                        Pressure:${pressure}</p>
                      </div>
                    </div>`;
        });
    })
    
   }
// function offnetwork(){
//     console.log('method');
    
//     if(navigator.onLine){
//         weather();
//         console.log('on network');
        
//     }else{

//     console.log('reload/Network Not Avialable')
//     }
// }
        