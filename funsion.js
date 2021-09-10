var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonlicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        hacerBrBr();
        licuadora.classList.add("active");
    
    } else {
        estadoLicuadora = "apagada"
        hacerBrBr();
        licuadora.classList.remove("active");
    }
}

function hacerBrBr(){
    if ( sonidoLicuadora.paused) {
        botonlicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonlicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}