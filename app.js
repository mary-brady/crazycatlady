const mrSnibbly = {
    name: 'mr. snibbly',
    moods: [
        'classy', 
        'sassy',
        'gone'
    ],
    moodImg: [
        'assets/fancycat.png',
        'assets/meancat.jpg',
        ''
    ],
    tolerance: 7,
    pets: 0,
    moodIndex: 0,
}

const mittens = {
    name: 'mr. snibbly',
    moods: [
        'sleepy', 
        'bitey',
        'she gone'
    ],
    moodImg: [
        'https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=ed148ff29b9b874a299f8b38e2fb04f3',
        'assets/meancat.jpg',
        'https://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg'
    ],
    tolerance: 2,
    pets: 0,
    moodIndex: 0,

}
let activeCat = mrSnibbly;

let cats = [mrSnibbly, mittens]

const catImg = document.getElementById('cat-img')
const catName = document.getElementById('name')
const mood = document.getElementById('name')
const pets = document.getElementById('pets')
const petButton = document.getElementById('pet-button')

function draw(cat) {
    catImg.setAttribute('src', activeCat[activeCat.moodIndex]);
    catName.innerText = activeCat.name;
    mood.innerText = activeCat.moods[activeCat.moodIndex];
    pets.innerText = activeCat.pets.toString();
    if(activeCat.pet >= activeCat.tolerance * 2) {
        petButton.disabled = true;
    }
}

function pet(cat) {
    activeCat.pets++;
    if(activeCat.pets % activeCat.tolerance == 0) {
        activeCat.moodIndex++; 
    }
    draw();
}

function reset(cat) {
    activeCat.pets = 0
    activeCat.moodIndex = 0
    petButton.disabled = false;
    draw()
}

function drawButtons() {
    let template = ''
    for (let i = 0; i < cats.length; i++) {
        const cat = cats[i];
        template +=`
        <button onclick="setActiveCat"(${i})>${cat.name}
        </button>
        `       
    }
    document.getElementById('cat-button').innerHTML = template
}

function setActiveCat(catIndex) {
    activeCat = cats[catIndex];

draw()
}
drawButtons()
draw()