let animales = { 
    noa:{
    vicuna: {
        id:0,
        name: "Vicuña",
        name_sci: "Vicugna vicugna",
        desc: "Camélido de cuello muy largo y de cabeza pequeña. Sus orejas y ojos son prominentes y tiene una hendidura central en el labio superior. Su pelaje es finísimo siendo muy apreciado. Tienen largos y sedosos mechones de color blanco sucio que cuelgan del pecho y lo protegen del frío cuando se echa. El cuello lomo y los lados son de color café claro o canela; el vientre y el interior de los muslos son de color blanco.  Las extremidades son largas y el tercio anterior del cuerpo es más bajo que el posterior.",
        info: "La vicuña se alimenta casi exclusivamente de pasto, prefiriendo las zonas ricas en agua. Prefieren gramíneas cortas y herbáceas y algunas plantas suculentas; raramente comen pastos duros, aunque sí líquenes.<br><br>El cortejo delas vicuñas es muy primitivo, el macho muy excitado, persigue a la hembra elegida hasta agotarla, la empuja, muerde y da la impresión de que la fuerza a la cópula. La cópula tiene lugar con la hembra en pie o arrodillada y en ocasiones, tumbada. La gestación dura unos 11 meses, las hembras crían todos los años y entran en celo nada mas parir. La única cría es capaz de andar casi nada mas nacer. Al año aproximadamente, los jóvenes machos son expulsados del rebaño y forman grupos de solteros.<br><br>Sus principales enemigos son el puma y el zorro y tras estos el hombre, el cual la ha cazado debido a la suavidad, belleza y valor de su pelo.",
        img: "..\\res\\img\\animals\\noa\\vicuna\\vicuna.png",
        fact1: "Son casi exclusivamente herbívoras; se alimentan de hierbas que cortan con sus dientes sin arrancarlas.",
        fact2: "Tienen una longevidad promedio de unos 15 o 20 años.",
        fact3: "Su peso es aproximadamente de entre 45 y 55 Kg."
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
        this.region=region;
        let transVal=0;
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
            transVal +=1000; 
            if(transVal>=1000){
                transVal= (-2000);
            }       
            cardsDiv.style.transform = `translateX(${transVal}px)`
            cardsDiv.style.transition = `.5s`;
        })

        next.addEventListener('click', () => {
            let cardsDiv = document.getElementsByClassName('animalCards')[0];
            transVal -=1000; 
            if(transVal<=(-2400)){
                transVal= 0;
            }     
            cardsDiv.style.transform = `translateX(${transVal}px)`
            cardsDiv.style.transition = `.5s`;
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
    card.innerHTML = `<div class="card-left">
                        <img class="card-left-img" id="imgAnimal${datos.id}"/>
                        <div class="card-left-facts">
                        <img src="../res/img/tracks.png">
                        <ul>
                            <li>🍖 ${datos.fact1}</li>
                            <br>
                            <li>🏡 ${datos.fact2}</li>
                            <br>
                            <li>🦴 ${datos.fact3}</li>
                        </ul>
                        </div>
                        </div>
                        <div class="card-right">
                            <div class="card-right-title">
                                ${datos.name}
                                <div class="card-left-title-sub">
                                    (${datos.name_sci})
                                </div>
                            </div>
                            <div class="card-right-body">
                                <div class="card-right-desc">
                                    ${datos.desc}
                                </div>
                                <hr>
                                <div class="card-right-img-slider>
                                    <div class="card-right-img-slider-wrapper>
                                    <div class="card-right-img-slider-element"">
                                        <img id="img-el0">
                                    </div>
                                    <div class="card-right-img-slider-element" id="el1">
                                        <img id="img-el1">
                                    </div>
                                    <div class="card-right-img-slider-element" id="el2">
                                        <img id="img-el2">
                                    </div>
                                </div>
                        </div>
                    </div>`;
    body.appendChild(card);
    let imgAnimal =  document.getElementById(`imgAnimal${datos.id}`);
    let img_el0 =  document.getElementById(`img-el${datos.slide0}`);
    let img_el1 =  document.getElementById(`img-el${datos.slide1}`);
    let img_el2 =  document.getElementById(`img-el${datos.slide2}`);
    imgAnimal.setAttribute('src', `${datos.img}`)
}