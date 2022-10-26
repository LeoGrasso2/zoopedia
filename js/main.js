let animales = { 
    noa:{
    vicuna: {
        id:0,
        name: "Vicuña",
        name_sci: "Vicugna vicugna",
        desc: "Camélido de cuello muy largo y de cabeza pequeña. Sus orejas y ojos son prominentes y tiene una hendidura central en el labio superior. Su pelaje es finísimo siendo muy apreciado. Tienen largos y sedosos mechones de color blanco sucio que cuelgan del pecho y lo protegen del frío cuando se echa. El cuello lomo y los lados son de color café claro o canela; el vientre y el interior de los muslos son de color blanco.  Las extremidades son largas y el tercio anterior del cuerpo es más bajo que el posterior.",
        img: "..\\res\\img\\animals\\noa\\vicuna\\vicuna.png",
        fact1: "Son casi exclusivamente herbívoras; se alimentan de hierbas que cortan con sus dientes sin arrancarlas.",
        fact2: "Tienen una longevidad promedio de unos 15 o 20 años.",
        fact3: "Su peso es aproximadamente de entre 45 y 55 Kg.",
        slide: {
            slide0: "..\\res\\img\\animals\\noa\\vicuna\\0.png",
            slide1: "..\\res\\img\\animals\\noa\\vicuna\\1.png",
            slide2: "..\\res\\img\\animals\\noa\\vicuna\\2.png",
        },
    },
    oso_hormiguero: {
        id:1,
        name: "Oso hormiguero",
        name_sci: "Myrmecophaga tridactyla",
        desc: "El oso hormiguero es un animal que suele vivir en zonas de bosques algo achaparrados y sobre todo en llanura. Al ser molestado, emprende un galope bastante ágil, y enfrenta a sus enemigos con sus poderosas garras.<br>Su pelaje es bastante rústico y largo, llegando a medir en el dorso de 15 a 20 cm; alcanza su máxima longitud en la cola, con unos 40 cm de largo, presentando la cerda en esta zona una forma aplanada.<br>Su coloración es gris matizado, con una característica banda negra que atraviesa el pecho, pasando por los flancos hasta la espalda, y bordeada en su límite superior por una franja blanca algo indefinida.",
        img: "..\\res\\img\\animals\\noa\\oso_hormiguero\\oso_hormiguero.png",
        fact1: "Se alimenta de hormigas y termitas que captura gracias a su lengua larga y espinosa y a la saliva pegajosa.",
        fact2: "Viven, en promedio, unos 14 años.",
        fact3: "Tienen un peso de entre 27 y 41kg.",
        slide: {
            slide0: "..\\res\\img\\animals\\noa\\oso_hormiguero\\0.png",
            slide1: "..\\res\\img\\animals\\noa\\oso_hormiguero\\1.png",
            slide2: "..\\res\\img\\animals\\noa\\oso_hormiguero\\2.png",
        },
        },
    condor_andino: {
        id:2,
        name: "Condor andino",
        name_sci: "Vultur gryphus",
        desc: "El cóndor de los Andes es una de las especies rapaces más grandes del neotrópico. El largo del cuerpo es de 120 cm, alcanzando una envergadura de 300 cm y un peso de alrededor de 12 kg. Su pico es blanco-crema en el extremo y negro en la base. Tiene patas grises y el iris marrón amarillento. El macho tiene el cuello y la cabeza desnudos y rojizos. La cabeza presenta una carúncula alargada a manera de cresta carnosa que parte de la cera hasta la mitad de la cabeza. Su collar es blanco vistoso en la base del cuello, siendo el resto de su cuerpo negro.<br>Cuenta con una amplia zona blanca en el ala dorsal y su cola es de color negro. La hembra es similar al macho, pero de menor tamaño y sin cresta o carúncula en la cabeza. El iris es rojo. El cóndor juvenil es pardo oscuro y lleva collar del mismo color, sin cresta ni blanco en las alas..",
        img: "..\\res\\img\\animals\\noa\\condor_andino\\condor_andino.png",
        fact1: "Los cóndores son buitres; los cadáveres de animales grandes componen la mayor parte de su dieta",
        fact2: "Pueden llegar a vivir 80 años, aunque el promedio es unos 50.",
        fact3: "Tienen un peso de alrededor de 12 kg.",
        slide: {
            slide0: "..\\res\\img\\animals\\noa\\condor_andino\\0.png",
            slide1: "..\\res\\img\\animals\\noa\\condor_andino\\1.png",
            slide2: "..\\res\\img\\animals\\noa\\condor_andino\\2.png",
        },
        },
    huemul: {
        id:3,
        name: "Huemul",
        name_sci: "Hippocamelus bisulcus",
        desc:"El huemul, como su pariente filogenético, la taruca, tiene un cuerpo rechoncho, robusto y patas cortas. Alcanza un tamaño de hasta 165 cm de longitud y hasta 170 cm de altura contando las astas, siendo las hembras un poco más pequeñas que los machos. Su pelaje es grueso, denso y de color beige o café oscuro, según la época del año.<br>Sus orejas y su cola, miden entre 10 y 20 cm de largo. Los machos poseen un par de astas bifurcadas que pueden alcanzar hasta 30 cm de longitud. Su peso ronda entre los 40 y 100 kg. que se alimenta principalmente de arbustos, hierbas y brotes de árboles",
        img:"..\\res\\img\\animals\\noa\\huemul\\huemul.png",
        fact1: "Se alimenta principalmente de arbustos, hierbas y brotes de árboles."
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
                                <div class="card-right-img-slider">
                                    <div class="card-right-img-slider-prevBtn" id="${datos.id}-prevBtn"><</div>
                                    <div class="card-right-img-slider-container">
                                    <div class="card-right-img-slider-wrapper">
                                        <div class="card-right-img-slider-element" id="el0">
                                            <img id="img-${datos.id}-el0">
                                        </div>
                                        <div class="card-right-img-slider-element" id="el1">
                                            <img id="img-${datos.id}-el1">
                                        </div>
                                        <div class="card-right-img-slider-element" id="el2">
                                            <img id="img-${datos.id}-el2">
                                        </div>
                                </div>
                                </div>
                                    <div class="card-right-img-slider-prevBtn" id="${datos.id}-nextBtn">></div>
                        </div>
                    </div>`;

    body.appendChild(card);
    let prevBtn = document.getElementById(`${datos.id}-prevBtn`);
    let nextBtn = document.getElementById(`${datos.id}-nextBtn`);
    let transVal=0;
    let imgAnimal =  document.getElementById(`imgAnimal${datos.id}`);
    let i=0;
    for(img of Object.keys(datos.slide)){
        console.log(img)
        let img_el =  document.getElementById(`img-${datos.id}-el${i}`);
        img_el.setAttribute('src', datos.slide[img])
        i++;
    }
    
    prevBtn.addEventListener('click', () => {
        let card = document.getElementsByClassName('card-right-img-slider-wrapper')[datos.id];
        transVal +=500; 
        if(transVal>=500){
            transVal= (-1000);
        }       
        card.style.transform = `translateX(${transVal}px)`
        card.style.transition = `.5s`;
    })

    nextBtn.addEventListener('click', () => {
        let card = document.getElementsByClassName('card-right-img-slider-wrapper')[datos.id];
        transVal -=500; 
        if(transVal<=(-1500)){
            transVal= 0;
        }     
        card.style.transform = `translateX(${transVal}px)`
        card.style.transition = `.5s`;
    })
    imgAnimal.setAttribute('src', `${datos.img}`)
}