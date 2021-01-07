{
    function init() {
        
        mainMenuToggle();
    }
    
    function mainMenuToggle() {
        let listButton = document.getElementById('mainMenuIcon');
        let mainMenu = document.getElementById('mainMenu');
    
        listButton.addEventListener('click', function () {
            
            if (mainMenu.classList.contains("mainMenuClose")) {
                
                mainMenu.classList.add("mainMenuOpen");
                mainMenu.classList.remove("mainMenuClose");
            } else {
                mainMenu.classList.add("mainMenuClose");
                mainMenu.classList.remove("mainMenuOpen");
            }
            
        });

    }


    document.addEventListener("DOMContentLoaded", init);
}