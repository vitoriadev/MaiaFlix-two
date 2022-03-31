function adicionarFilme() {
    let campoFilme = document.getElementById("filme").value;
    if (campoFilme.endswith(".jpg")) {
    let elementoFilme = "<img src=" + campoFilme + ">"
    let elementoLista = document.getElementById("listaFilmes")
    elementoLista.innerHTML = elementoLista.innerHTML + elementoFilme;
    } else {
        console.error("Endereço de filme inválido")
    }
    document.getElementById("filme").value = ""   
}