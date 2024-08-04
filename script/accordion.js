console.log("accordion loaded");

const dataAccordion = [
    {
        "title":"Contacto sede Alajuela",
        "desc" : "<strong> Dirección: </strong> Plaza Real Alajuela, tercera etapa local N41.<br>\
        <strong> Teléfono: </strong> 1234-5678 <br>\
        <strong> Horario: </strong> Lunes a Viernes de 5:00am a 9:00pm, Sábados y Domingos de 7:00am a 7:00pm<br>"
    },

    {
        "title":"Contacto sede Escazú",
        "desc" : "<strong> Dirección: </strong> Avenida Escazú, primer piso del edificio AE201, Local 02 <br>\
        <strong> Teléfono: </strong> 9876-5432 <br>\
        <strong> Horario: </strong> Lunes a Viernes de 5:00am a 9:00pm, Sábados y Domingos de 7:00am a 7:00pm<br>"
    }
];


(function () {
    let Accordion = {
        init:function () {
            let _self = this
            // Llamamos a las funciones
            this.insertData(_self);
            this.eventhandler(_self);
        },

        insertData: function (_self) {
            dataAccordion.map (function (item,index){
                document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
            });
        },

        eventhandler: function (_self) {
            let arrayRefs = document.querySelectorAll('.accordion-title');

            for (let x = 0; x < arrayRefs.length; x++) {
                arrayRefs[x].addEventListener('click', function(event){
                    console.log('event: ',event);
                    _self.showTab(event.target);
                });
            }
        },

        tplAccordionItem: function (item){
            return (`
                <div class='accordion-item'>
                <div class='accordion-title'><p>${item.title}</div>
                <div class='accordion-desc'><p>${item.desc}</div>
                </div>
                `);
        },

        showTab: function (refItem) {
            let activeTab = document.querySelector('.tab-active')
            if (activeTab) {
                activeTab.classList.remove('tab-active')
            }
            console.log('Show tab: ', refItem);
            refItem.parentElement.classList.toggle('tab-active');
        },
    }
    Accordion.init();

})();