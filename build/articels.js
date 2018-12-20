// https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=d67f80774a1d489da722ff10e692098c
function newsapi(){

    fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=d67f80774a1d489da722ff10e692098c').then(res =>res.json()).then(data => console.log(data));
}