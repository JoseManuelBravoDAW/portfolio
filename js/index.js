{
    function init() {

        AOS.init();
        
        mainMenuToggle();

        scrollOnClick();
    }
    
    function mainMenuToggle() {
        let listButton = document.getElementById('mainMenuIcon');
        let mainMenu = document.getElementById('mainMenu');
        let menuOpen = false;
        listButton.addEventListener('click', function () {
            
            if (menuOpen) {
                
                mainMenu.classList.remove("mainMenuOpen");
                menuOpen = false;
            } else {
                mainMenu.classList.add("mainMenuOpen");
                menuOpen = true;
            }
            
        });

    }

    function scrollOnClick() {
        $('li a').on('click', function (e) {
            e.preventDefault();
            var targetSec = $(this).text().replace(/ /g,'');
            
            $('html, body').animate({
               scrollTop: $('#' + targetSec).offset().top-60
            }, 2000);
         });
    }


    document.addEventListener("DOMContentLoaded", init);
}