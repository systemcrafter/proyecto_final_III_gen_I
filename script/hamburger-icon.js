console.log("hamburger-icon loaded");
(function (){
    const MAIN_OBJECT ={
        init: function () {
            this.eventhandlers()
        },
        eventhandlers: function () {
            document.querySelector('.hamburger-icon').addEventListener('click', function () {
                document.querySelector('.sub-menu-right').classList.toggle('menu-open');
            })
        }
    }
    MAIN_OBJECT.init()
})();
