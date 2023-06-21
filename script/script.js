let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var disntancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(disntancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[4].classList.add("trabajo");
        habilidades[4].classList.add("creatividad");
        habilidades[4].classList.add("dedicacion");
        habilidades[4].classList.add("gestion");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
winwod.onscroll = function(){
    efectoHabilidades();
}