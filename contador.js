function incrementarContador() {
    let contadorVisitas = localStorage.getItem('contadorVisitas');
    contadorVisitas = contadorVisitas ? parseInt(contadorVisitas) + 1 : 1;
    localStorage.setItem('contadorVisitas', contadorVisitas);
    document.getElementById('contador').innerText = contadorVisitas;
}
incrementarContador();
