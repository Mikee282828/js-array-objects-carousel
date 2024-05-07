//creo array di oggetti 
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//autoplay
let clock;
let direction = true;
let clockOn = false;
let interval = 3;
document.getElementById("start").addEventListener("click",()=>{
    if(clockOn == false){
        clock = setInterval(next,interval*1000);
        clockOn = true;
    }
});
document.getElementById("inversion").addEventListener("click",()=>{
    if(direction == true && clockOn == true){
        clearInterval(clock);
        clock = setInterval(previous,interval*1000);
        direction = false;
    }else if(direction == false && clockOn == true){
        clearInterval(clock);
        clock = setInterval(next,interval*1000);
        direction = true;
    }
})
document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(clock);
    clockOn = false;
});
//aggiungo su pagina gli elementi html
images.forEach((element,index)=> {
    //aggiungo la slide
    document.querySelector(".slide").innerHTML +=
        `
        <img src="./${element.image}" class="foto">
    
        <div class="description">
            <h1>${element.title}</h1>
            <p class="subtitle">${element.text}</p>
        </div>
        `;
    //aggiungo l'anteprima
    let anteprima = document.createElement("img");
    anteprima.src = element.image;
    anteprima.classList.add("fotoAnteprima");
    document.querySelector(".anteprima").append(anteprima);

    //aggiungo l'event listener all'anteprima
    anteprima.addEventListener("click",function(){  
        //cerco e tolgo la slide attualmente attiva
        searchActive();
        fotoSelezionata = index;
        newActivate();
    });
});

//attivo la prima foto, descrizione, foto anteprima
document.querySelector(".slide>.foto:first-of-type").classList.add("active");
document.querySelector(".slide>.description:first-of-type").classList.add("active");
document.querySelector(".anteprima>.fotoAnteprima:first-of-type").classList.add("anteprimaActive");

//recupero codice dell'js-array-carousel però con modifiche relative alla description
let arrayFoto = document.querySelectorAll(".foto");
let arrayAnteprima = document.querySelectorAll(".fotoAnteprima");
let arrayDescription = document.querySelectorAll(".description");
const tastoSuccessivo = document.querySelector(".successivo");
const tastoPrecedente = document.querySelector(".precedente");
let fotoAttiva;
let fotoSelezionata;

// tasto precedente e successivo
tastoPrecedente.addEventListener("click",previous);
tastoSuccessivo.addEventListener("click",next);

//funzioni
function searchActive(){
    for (let i = 0; i < arrayFoto.length; i++) {
        if (arrayFoto[i].classList.contains("active")) {
            fotoAttiva = i;
            arrayFoto[i].classList.remove("active");
            arrayAnteprima[i].classList.remove("anteprimaActive");
            arrayDescription[i].classList.remove("active");
        }
    }
}
function newActivate(){
    arrayFoto[fotoSelezionata].classList.add("active");
    arrayAnteprima[fotoSelezionata].classList.add("anteprimaActive");
    arrayDescription[fotoSelezionata].classList.add("active");
}
function searchPrevious(){
    if (fotoAttiva == 0) {
        fotoSelezionata = arrayFoto.length - 1;
    } else {
        fotoSelezionata = fotoAttiva - 1;
    }
}
function searchNext(){
    if (fotoAttiva + 1 == arrayFoto.length) {
        fotoSelezionata = 0;
    } else {
        fotoSelezionata = fotoAttiva + 1;
    }
}
function previous() {
    searchActive();
    //cerco l'indice della foto precedente
    searchPrevious();
    //attivo la foto,anteprima,description precedente
    newActivate();
}
function next(){
    searchActive();
    //cerco l'indice della foto successiva
    searchNext();
    //attivo la foto,anteprima,description successiva
    newActivate();
}