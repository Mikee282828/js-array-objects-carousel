//creo array di oggetti 
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
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
//aggiungo su pagina gli elementi html
images.forEach(element => {
    document.querySelector(".slide").innerHTML +=
        `
        <img src="./${element.image}" alt="spiderman" class="foto">
    
        <div class="description">
            <h1>${element.title}</h1>
            <p class="subtitle">${element.text}</p>
        </div>
        `;
    document.querySelector(".anteprima").innerHTML +=
        `
        <img src="./${element.image}" alt="spiderman" class="fotoAnteprima">
        `
});
//attivo la prima foto, descrizione, foto anteprima
document.querySelector(".slide>.foto:first-of-type").classList.add("active");
document.querySelector(".slide>.description:first-of-type").classList.add("active");
document.querySelector(".anteprima>.fotoAnteprima:first-of-type").classList.add("anteprimaActive");

//recupero codice dell'js-array-carousel però con modifiche relative alla description
let arrayFoto = document.querySelectorAll(".foto");
let arrayAnteprima = document.querySelectorAll(".fotoAnteprima");
let arrayDescription = document.querySelectorAll(".description");
let fotoAttiva;
let fotoSelezionata;
const tastoSuccessivo = document.querySelector(".successivo");
const tastoPrecedente = document.querySelector(".precedente");

tastoPrecedente.addEventListener("click", function () {

    //cerco la foto attualmente attiva
    for (let i = 0; i < arrayFoto.length; i++) {
        if (arrayFoto[i].classList.contains("active")) {
            fotoAttiva = i;
            arrayFoto[i].classList.remove("active");
            arrayAnteprima[i].classList.remove("anteprimaActive");
            arrayDescription[i].classList.remove("active");
        }
    }
    //cerco l'indice della foto precedente
    if (fotoAttiva == 0) {
        fotoSelezionata = arrayFoto.length - 1;
    } else {
        fotoSelezionata = fotoAttiva - 1;
    }

    //attivo la foto precedente
    arrayFoto[fotoSelezionata].classList.add("active");
    //attivo l'anteprima precedente
    arrayAnteprima[fotoSelezionata].classList.add("anteprimaActive");
    //attivo la description precedente
    arrayDescription[fotoSelezionata].classList.add("active");

    //stampo in pagina l'array foto per controllo
    console.log(arrayFoto);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

tastoSuccessivo.addEventListener("click", function () {
    
    //cerco la foto attualmente attiva
    for (let i = 0; i < arrayFoto.length; i++) {
        if (arrayFoto[i].classList.contains("active")) {
            fotoAttiva = i;
            arrayFoto[i].classList.remove("active");
            arrayAnteprima[i].classList.remove("anteprimaActive");
            arrayDescription[i].classList.remove("active");
        }
    }
    //cerco l'indice della foto successiva
    if (fotoAttiva + 1 == arrayFoto.length) {
        fotoSelezionata = 0;
    } else {
        fotoSelezionata = fotoAttiva + 1;
    }

    //attivo la foto successiva
    arrayFoto[fotoSelezionata].classList.add("active");

    //attivo l'anteprima successiva
    arrayAnteprima[fotoSelezionata].classList.add("anteprimaActive");
    
    //attivo la description successiva
    arrayDescription[fotoSelezionata].classList.add("active");

    //stampo in pagina l'array foto per controllo
    console.log(arrayFoto);
})