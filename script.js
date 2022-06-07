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
var inpuEl = document.querySelector('#inputEl')

function displayPages() {
    if (state === 'page1') {
        page1El.style.display = 'block';
        page2El.style.display = 'none';
        page3El.style.display = 'none';
        page4El.style.display = 'none';
    }

    if (state === 'page2') {
        page1El.style.display = 'none';
        page2El.style.display = 'block';
        page3El.style.display = 'none';
        page4El.style.display = 'none';
    }

    if (state === 'page3') {
        page1El.style.display = 'none';
        page2El.style.display = 'none';
        page3El.style.display = 'block';
        page4El.style.display = 'none';
    }

    if (state === 'page4') {
        page1El.style.display = 'none';
        page2El.style.display = 'none';
        page3El.style.display = 'none';
        page4El.style.display = 'block';
    }
}

// function getSongs() {
//     fetch('https://pokeapi.co/api/v2/pokemon/')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             // callGif(name);
        
            
           
//         })
// }

function callGif(nameEl) {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=ZCIh2UkoAMZsDdlMKYVbI8ksUZ3kYD1z&q=' + nameEl + '&limit=25&offset=0&rating=g&lang=en')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var embedId = data.data[0].id
            var embedId1 = data.data[1].id
            var embedId2 = data.data[2].id
            var gif1 = document.createElement('iframe');
            var gif2  = document.createElement('iframe');
            var gif3 = document.createElement('iframe');
            gif1.setAttribute("src", "https://giphy.com/embed/" + embedId)
            gif2.setAttribute("src", "https://giphy.com/embed/" + embedId1)
            gif3.setAttribute("src", "https://giphy.com/embed/" + embedId2)
            page2El.append(gif1);
            page3El.append(gif2);
            page4El.append(gif3);
        })
}




submit.addEventListener("click", function () {
    state = 'page2';
    displayPages();
    callGif(inpuEl.value)
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
    // callGif(nameEl);
    getSongs();
}

init();