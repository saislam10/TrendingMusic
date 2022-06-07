
var state = 'page1';  
var page1El = document.querySelector('#page1');
var page2El = document.querySelector('#page2');
var page3El = document.querySelector('#page3');
var page4El = document.querySelector('#page4');
var submit = document.querySelector('#submit');
var next1 = document.querySelector('#next1');
var next2 = document.querySelector('#next2');
var restart = document.querySelector('#restart');
var usa = document.querySelector('#usa');
var italy = document.querySelector('#italy');
var uk = document.querySelector('#uk');
var germany = document.querySelector('#germany');
var france = document.querySelector('#france')

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

function callGif(name) {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=ZCIh2UkoAMZsDdlMKYVbI8ksUZ3kYD1z&q='+ name + '&limit=25&offset=0&rating=g&lang=en')
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var data1 = data[0].url;
        console.log(data1);
    })
}

// function getSongs() {
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=ZCIh2UkoAMZsDdlMKYVbI8ksUZ3kYD1z&q='+ name + '&limit=25&offset=0&rating=g&lang=en')
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function (data) {
    //     console.log(data);
    //     var data1 = data[0].url;
    //     console.log(data1);
    // })
// }

submit.addEventListener("click", function () {
    state = 'page2';
    displayPages();
});

next1.addEventListener("click", function () {
    state = 'page3';
    displayPages();
});

next2.addEventListener("click", function () {
    state = 'page4';
    displayPages();
});

restart.addEventListener("click", function () {
    state = 'page1';
    displayPages();
});

function init() {
    displayPages();
    callGif("Drake");
}

init();
