
if(navigator.onLine){

    fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=d67f80774a1d489da722ff10e692098c')
    .then(res =>res.json())
    .then(data =>{
        console.log(data);
        var placetoput=document.getElementById('news');

for(i=0;i<10;i++){
    console.log(data.articles[i].title);
    var title=data.articles[i].title
    var urlToImage =data.articles[i].urlToImage;
    var description=data.articles[i].description;
    var content=data.articles[i].content;
    var url=data.articles[i].url;
    placetoput.innerHTML +=`
    <div  class="card text-left">
    <a href=${url}><img class="card-img-top" src="${urlToImage}" alt=""></a>
    <div class="card-body">
    <h4 class="card-title">${title}</h4>
    <p class="card-text">
    ${description} <br/>
    ${content}<br/>
   </p>
    </div>
    </div>`;
}
    } 
    );


    }else{
        location.replace(offline.html);
    }