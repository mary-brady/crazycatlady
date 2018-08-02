const mrSnibbly = {
    name: 'mr. snibbly',
    moods: [
        'classy', 
        'sassy'
    ],
    moodImg: [
        'assets/fancycat.png',
        'assets/meancat.jpg'
    ],
    tolerance: 7,
    pets: 0,
    moodIndex: 0,
}

const catImg = document.getElementById('cat-img')
const catName = document.getElementById('name')
const mood = document.getElementById('name')
const pets = document.getElementById('pets')

function draw() {
    catImg.setAttribute('src', mrSnibbly[mrSnibbly.moodIndex]);
    catName.innerText = mrSnibbly.name;
    mood.innerText = mrSnibbly.moods[mrSnibbly.moodIndex];
    pets.innerText = mrSnibbly.pets.toString();
}

function pet() {

}

function reset() {

}