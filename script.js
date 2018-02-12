var url = 'https://talaikis.com/api/quotes/random';

var button = document.getElementById('quote-button');

var tweet = document.getElementById('tweet-button');

getQuote();

button.addEventListener('click', function () {
    getQuote();
});

var paragraph = document.getElementById('quote');
var author = document.getElementById('author');

function getQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function () {
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.quote;
        author.innerHTML = "~" + response.author;
        tweet.href = "https://twitter.com/intent/tweet?text=" + response.quote + " /// " + response.author;
    });

    xhr.send();
}

function playSound() {
    var audio = document.getElementById('audio');
    audio.currentTime = 0;
    audio.play();
}
