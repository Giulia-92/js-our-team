
const cards = [
    {
        immagine: 'wayne-barnett-founder-ceo.jpg',titolo: 'Wayne Barnett',nome: 'Founder & CEO'
    },

    {
        immagine: 'angela-caroll-chief-editor.jpg',titolo: 'Chief Editor',nome: 'Angela Caroll'
    },
    {
        immagine: 'angela-lopez-social-media-manager.jpg',titolo: 'Social Media Manager',nome: 'Angela Lopez'
    },
    {
        immagine: 'scott-estrada-developer.jpg',titolo: 'Developer',nome: 'Scott Estrada'
    },
    {
        immagine: 'walter-gordon-office-manager.jpg',titolo: 'Office Manager',nome: 'Walter Gordon'
    },
    {
        immagine: 'barbara-ramos-graphic-designer.jpg',titolo: 'Graphic Designer', nome: 'Barbara Ramos'
    },
];
console.log(cards);

const teamContainer = document.querySelector('.team-container');
//console.log('team-container')
function stampaTeam(){
    let item;
    for(let i= 0; i < cards.length; i++ ){
        console.log(cards[i]);
        item +=  ` 
        <div class="team-card">
        <div class="card-image">
          <img
            src="img/${cards[i].immagine}barbara-ramos-graphic-designer.jpg"
            alt="Wayne Barnett"
          />
        </div>
        <div class="card-text">
          <h3>${cards[i].nome}</h3>
          <p>${cards[i].titolo}Founder & CEO</p>
        </div>
        </div> 
        ` 
    } 
    teamContainer.innerHTML =item; 
}
stampaTeam();

/*const button = document.getElementById('');
button.addEventListener('click',aggMembro);
function aggMembro(){
    const name
}*/