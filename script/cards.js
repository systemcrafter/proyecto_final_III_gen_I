console.log("cards loaded");

const dataCards =[
    {
    
        "title":"Crossfit y Funcionales",
        "url_image":"./images/card_1.png",
        "desc":"Nuestro entrenamiento combina ejercicios de alta intensidad con movimientos funcionales. Te desafiarás físicamente mientras mejoras tu fuerza, resistencia y agilidad. Prepárate para superar tus límites y alcanzar tus objetivos de acondicionamiento.<br>\
        <br>\<strong>Beneficios:</strong><br>\
        Mejora la fuerza, la coordinación y la resistencia cardiovascular.",
        "cta":"Mostrar más...",
        "link":"./card_ingenieria-industrial.php"
    },
    
    {
    
        "title":"Yoga",
        "url_image":"./images/card_2.png",
        "desc":"Sumérgete en la serenidad del yoga. Nuestras clases te guiarán a través de posturas fluidas, técnicas de respiración y meditación. Encuentra equilibrio, flexibilidad y paz interior.<br>\
        <br>\<br>\<br>\<br>\<strong>Beneficios:</strong><br>\
        Reduce el estrés, mejora la flexibilidad y fomenta la conexión mente-cuerpo.",
        "cta":"Mostrar más...",
        "link":"./card_ingenieria-sistemas.php"
    },
    
    {
    
        "title":"Preparación Deportes de Alto Impacto",
        "url_image":"./images/card_3.png",
        "desc":"Para atletas de alto desempeño, nuestro programa de preparación para deportes de alto impacto está diseñado para optimizar tu rendimiento. Trabajaremos en fuerza, velocidad y resistencia para que alcances tus metas deportivas.<br>\
        <br>\<br>\<strong>Beneficios:</strong><br>\
        Aumenta la potencia, la agilidad y la resistencia específica para tu deporte.",
        "cta":"Mostrar más...",
        "link":"./card_administracion.php"
    },

    {
    
        "title":"Acondicionamiento Físico",
        "url_image":"./images/card_4.png",
        "desc":"Si buscas una rutina versátil y efectiva, nuestro programa de acondicionamiento físico es ideal. Combina ejercicios cardiovasculares, levantamiento de pesas y más para mejorar tu salud general.<br>\
        <br>\<br>\<br>\<strong>Beneficios:</strong><br>\
        Quema calorías, fortalece el corazón y tonifica el cuerpo.",
        "cta":"Mostrar más...",
        "link":"./card_administracion.php"
    }
    
    ];

    (function (){
        let CARD = {
            init: function() {
                let _self = this;
                
                // Llamar a la function
                this.insertData(_self);
            },
    
            insertData: function(_self){
                dataCards.map(function (item, index){
                    document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
                });
            },
    
            tplCardItem: function (item, index) {
                return(`<div class='card-item' id=card-number-${index}">
                    <img src="${item.url_image}"/>
                    <div class='card-info'>
                        <p class='card-title'>${item.title}</p>
                        <p class='card-desc'>${item.desc}</p>
                        <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                        </div>
    
                `)
            }
    
    
        }
    
        CARD.init();
        }
    )();