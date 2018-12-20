/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const express = require('express');
const app = express();
const request = require('request');

app.use(express.static(__dirname + '/build'));
let apiKey = 'ea17e180be78021853f5102e10706a1b';
let city = 'portland';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
// app.get('/' ,function(req,res){

//   request(url, function (err, response, body) {
//     if(err){
//       console.log('error:', error);
//     } else {
//       console.log('body:', body);
//       let weather = JSON.parse(body)
//       let message = `It's ${weather.main.temp} degrees in
//       ${weather.name}!`;
//       console.log(message);
//       res.send(message);
//     }
//   });
// })
  


const server = app.listen(8082, () => {

  const host = server.address().address;
  const port = server.address().port;
  // ttps://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=
 

  console.log('App listening at http://%s:%s', host, port);
});
