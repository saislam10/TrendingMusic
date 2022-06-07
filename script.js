// fetch('https://api.giphy.com/v1/gifs/search?api_key=ZCIh2UkoAMZsDdlMKYVbI8ksUZ3kYD1z&q=J Cole&limit=25&offset=0&rating=g&lang=en')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
var state = 'page1';  
var page1El = document.querySelector('#page1')
var page2El = document.querySelector('#page2')
var page3El = document.querySelector('#page3')
var page4El = document.querySelector('#page4')

function displayPages() {
    if (state === 'page1'){
        page1El.style.display = 'block';
        page2El.style.display = 'none';
        page3El.style.display = 'none';
        page4El.style.display = 'none';
    }
    if (state === 'page2'){
        page1El.style.display = 'none';
        page2El.style.display = 'block';
        page3El.style.display = 'none';
        page4El.style.display = 'none';
    }
    if (state === 'page3'){
        page1El.style.display = 'none';
        page2El.style.display = 'none';
        page3El.style.display = 'block';
        page4El.style.display = 'none';
    }
    if (state === 'page4'){
        page1El.style.display = 'none';
        page2El.style.display = 'none';
        page3El.style.display = 'none';
        page4El.style.display = 'block';
    }
}

