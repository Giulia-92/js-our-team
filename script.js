//document.getElementById("team").innerHTML = "";


/*const cards = [
    {
        immagine: 'img/wayne-barnett-founder-ceo.jpg',
        titolo: 'Wayne Barnett',
        nome: 'Founder & CEO'
        
    },

    {
        immagine: 'img/angela-caroll-chief-editor.jpg',
        titolo: 'Chief Editor',
        nome: 'Angela Caroll'
    },
    {
        immagine: 'img/angela-lopez-social-media-manager.jpg',
        titolo: 'Social Media Manager',
        nome: 'Angela Lopez'
    },
    {
        immagine: 'img/scott-estrada-developer.jpg',
        titolo: 'Developer',
        nome: 'Scott Estrada'
    },
    {
        immagine: 'img/walter-gordon-office-manager.jpg',
        titolo: 'Office Manager',
        nome: 'Walter Gordon'
    },
    {
        immagine: 'img/barbara-ramos-graphic-designer.jpg',
        titolo: 'Graphic Designer',
        nome: 'Barbara Ramos'
    },
];
*/
let teamcard = document.createElement("div");
teamcard.setAttribute("class", "team-card");
let selezione = document.getElementById("team");
//let sel2 = selezione.getElementsByClassName("container");
let teamcontainer = document.getElementsByClassName("container").createElement("div");
teamcontainer.setAttribute("class", "team-card");
//teamcontainer.append(teamcard);

selezione.append(teamcard);

// for(let i= 0; i < cards.length; i++ ){
//     let cont1 = document.createElement("div");
//     cont1.setAttribute("class", "team-card");
//     let cont2 = document.createElement("div");
//     cont2.setAttribute("class", "card-image");
//     let foto = document.createElement("img");
//     foto.setAttribute("src"(cards[i].immagine));







//     let cont3 = document.createElement("div");
//     cont3.setAttribute("class","card-text");
//     cont3.append(cont2);
//     let nome = document.createElement("h3");
//     nome.innerText((cards[i].nome));
//     let lavoro = document.createElement("p");
//     lavoro.innerText((cards[i].testo))






//     contenitore.append(cont1);
//     cont1.append(cont2);
//     cont2.append(foto);
// }








// console.log(cards[i].immagine)


// array[numeroindice] //array monodimensionale
// array[nindice1][nindice2] //array bidimensionale
// oggetto.attributo //oggetto
// //array[nindice].attributo //array di oggetti
