var state = 'page1';
var page1El = document.querySelector('#page1');
var page2El = document.querySelector('#page2');
var page3El = document.querySelector('#page3');
var page4El = document.querySelector('#page4');
var submit = document.querySelector('#submit');
var next1 = document.querySelector('#next1');
var next2 = document.querySelector('#next2');
var restart = document.querySelector('#restart');
var dateEl = document.querySelector('#date');
var nameEl = document.querySelector('#input');
var today = moment().format("dddd, MMMM Do, YYYY");
var artistName1El = document.querySelector("#artistName1");
var album1El = document.querySelector('#album1');
var artistStart1El = document.querySelector("#artistStart1");
var artistGenre1El = document.querySelector("#artistGenre1");
var artistBio1El = document.querySelector("#bio1");
var artistName2El = document.querySelector("#artistName2");
var album2El = document.querySelector('#album2');
var artistStart2El = document.querySelector("#artistStart2");
var artistGenre2El = document.querySelector("#artistGenre2");
var artistBio2El = document.querySelector("#bio2");
var artistName3El = document.querySelector("#artistName3");
var album3El = document.querySelector('#album3');
var artistStart3El = document.querySelector("#artistStart3");
var artistGenre3El = document.querySelector("#artistGenre3");
var artistBio3El = document.querySelector("#bio3");
var gif1El = document.querySelector("#gif1");
var gif2El = document.querySelector("#gif2");
var gif3El = document.querySelector("#gif3");


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
function getAlbum() {
    fetch('https://theaudiodb.com/api/v1/json/523532/trending.php?country=us&type=itunes&format=albums')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var artist3 = data.trending[3].strArtist 
            var album3 = data.trending[3].strAlbum 
            var artist2 = data.trending[4].strArtist 
            var album2 = data.trending[4].strAlbum 
            var artist1 = data.trending[5].strArtist 
            var album1 = data.trending[5].strAlbum 
            artistName1El.append(artist3); 
            artistName2El.append(artist2); 
            artistName3El.append(artist1); 
            album1El.append(album3)
            album2El.append(album2)
            album3El.append(album1)
        
        });
    }

function getArtist(nameEl) {
    fetch('https://theaudiodb.com/api/v1/json/2/search.php?s=' + nameEl.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var artistName = data.artists[0].strArtist;
            var artistBio = data.artists[0].strBiographyEN;
            var artistStart = data.artists[0].intFormedYear;
            var artistGenre = data.artists[0].strGenre;

            artistNameEl.append("Artist: " + artistName);
            artistName2El.append(artistName);
            artistStartEl.append("Started in:  " + artistStart);
            artistGenreEl.append("Genre:  " + artistGenre);
            artistBioEl.append(artistBio);

            artistNameEl.style.fontSize = "40px";
            artistNameEl.style.fontWeight = "bolder";
            artistNameEl.style.padding = "10px";
            artistName2El.style.fontSize = "40px";
            artistName2El.style.fontWeight = "bolder";
            artistName2El.style.padding = "10px";
            artistStartEl.style.padding = "10px";
            artistGenreEl.style.padding = "10px";
            artistStartEl.style.fontSize = "18px";
            artistGenreEl.style.fontSize = "18px";
            artistBioEl.style.padding = "10px";
        })
}


function callGif(nameEl) {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=ZCIh2UkoAMZsDdlMKYVbI8ksUZ3kYD1z&q=' + nameEl.value + '&limit=25&offset=0&rating=g&lang=en')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var embedId = data.data[0].id
            var embedId1 = data.data[1].id
            var embedId2 = data.data[2].id
            var gif1 = document.createElement('iframe');
            var gif2 = document.createElement('iframe');
            var gif3 = document.createElement('iframe');
            gif1.setAttribute("src", "https://giphy.com/embed/" + embedId)
            gif2.setAttribute("src", "https://giphy.com/embed/" + embedId1)
            gif3.setAttribute("src", "https://giphy.com/embed/" + embedId2)
            gif1El.append(gif1);
            gif2El.append(gif2);
            gif3El.append(gif3);

            gif1.style.padding = "10px";
            gif2.style.padding = "10px";
            gif3.style.padding = "10px";
            
        })
}



submit.addEventListener("click", function () {
    state = 'page2';
    displayPages();
    getArtist(nameEl);
    callGif(nameEl);
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
    dateEl.append("Today's Date: " + today);
    dateEl.style.fontSize = "18px";
    displayPages();
    getAlbum();
}


init();