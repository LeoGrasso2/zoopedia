let animales = { 
    noa:{
    vicuna: {
        name: "Vicuña",
        name_sci: "Vicugna vicugna",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde molestias iste delectus rem, doloribus dolore repellat voluptate quas corrupti debitis dolores, voluptates expedita adipisci aut molestiae ad labore exercitationem cumque.",
        info: "Labore distinctio reprehenderit quod ullam aut nihil aliquam accusantium non? Libero, tempore magnam numquam repellendus impedit quod ab fuga dolores ut ex ipsam, asperiores possimus nesciunt minima modi dolorum! Earum.",
        img: "..\\res\\img\\animals\\noa\\vicuna.png",
        }
    }
}

console.log(Object.keys(animales.noa).length);

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href;
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1;
})


function addCard(datos){
    let card = document.createElement('div');
    let body = document.querySelector('.animalCards');
    card.setAttribute('id', `${datos.name}`);
    card.setAttribute('class', 'card-total')
    card.innerHTML = `<div class="card-left"><img class="card-left-img" id="img${datos.name}"/></div><div class="card-right"><div class="card-right-title">${datos.name}<div class="card-left-title-sub">(${datos.name_sci})</div></div><div class="card-right-body"><div class="card-right-desc">${datos.desc}</div><hr><div class="card-right-info">${datos.info}</div></div></div>`;
    body.appendChild(card);
    document.getElementById(`img${datos.name}`).setAttribute('src', `${datos.img}`)
    
}