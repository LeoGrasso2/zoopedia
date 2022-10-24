let animales = { 
    noa:{
    vicuna: {
        id:0,
        name: "Vicuña",
        name_sci: "Vicugna vicugna",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde molestias iste delectus rem, doloribus dolore repellat voluptate quas corrupti debitis dolores, voluptates expedita adipisci aut molestiae ad labore exercitationem cumque.",
        info: "Labore distinctio reprehenderit quod ullam aut nihil aliquam accusantium non? Libero, tempore magnam numquam repellendus impedit quod ab fuga dolores ut ex ipsam, asperiores possimus nesciunt minima modi dolorum! Earum.",
        img: "..\\res\\img\\animals\\noa\\vicuna.png",
        },
    oso_hormiguero: {
        id:1,
        name: "Oso hormiguero",
        name_sci: "Myrmecophaga tridactyla",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde molestias iste delectus rem, doloribus dolore repellat voluptate quas corrupti debitis dolores, voluptates expedita adipisci aut molestiae ad labore exercitationem cumque.",
        info: "Labore distinctio reprehenderit quod ullam aut nihil aliquam accusantium non? Libero, tempore magnam numquam repellendus impedit quod ab fuga dolores ut ex ipsam, asperiores possimus nesciunt minima modi dolorum! Earum.",
        img: "..\\res\\img\\animals\\noa\\oso_hormiguero.png",
        },
    condor_andino: {
        id:2,
        name: "Condor andino",
        name_sci: "Vultur gryphus",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde molestias iste delectus rem, doloribus dolore repellat voluptate quas corrupti debitis dolores, voluptates expedita adipisci aut molestiae ad labore exercitationem cumque.",
        info: "Labore distinctio reprehenderit quod ullam aut nihil aliquam accusantium non? Libero, tempore magnam numquam repellendus impedit quod ab fuga dolores ut ex ipsam, asperiores possimus nesciunt minima modi dolorum! Earum.",
        img: "..\\res\\img\\animals\\noa\\condor_andino.png",
        }
    }
}

function slider(region){
    if(document.getElementById('sliderTotal') != null){
        let pos=0;
        this.region=region;
        this.objectAnimales= Object.keys(animales[region]);
        let cards = Object.keys(animales[region]);
        let prev = document.getElementById('prevBtn');
        let next = document.getElementById('nextBtn');

        for(card of cards){
            console.log(card)
            addCard(animales[region][card]);
        }

        prev.addEventListener('click', () => {
            let cardsDiv = document.getElementsByClassName('animalCards')[0];
            console.log(cardsDiv.classList)
            let transVal = '-800px');
            console.log(pos)
            cardsDiv.style.transform = `translateX(${transVal}px)`
            pos--;
            if(pos<Number(objectAnimales.length)-1){
                pos=(Number(objectAnimales.length)-1)
            }

        })

        next.addEventListener('click', () => {
            pos++
            if(pos>(Number(objectAnimales.length)-1)){
                pos=0;
            }
        })
    }
}


document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1;
})


function addCard(datos){
    let card = document.createElement('div');
    let body = document.querySelector('.animalCards');
    card.setAttribute('id', 'cardAnimal');
    card.setAttribute('class', 'card-total')
    card.innerHTML = `<div class="card-left"><img class="card-left-img" id="imgAnimal${datos.id}"/></div><div class="card-right"><div class="card-right-title">${datos.name}<div class="card-left-title-sub">(${datos.name_sci})</div></div><div class="card-right-body"><div class="card-right-desc">${datos.desc}</div><hr><div class="card-right-info">${datos.info}</div></div></div>`;
    body.appendChild(card);
    let imgAnimal =  document.getElementById(`imgAnimal${datos.id}`);
    
    imgAnimal.setAttribute('src', `${datos.img}`)
}