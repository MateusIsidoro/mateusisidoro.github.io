function puxara(button) {
    var bg = document.getElementById("bg");
    bg.style.display = "inline";
}

function puxar(button) {
    var trabalho = document.getElementById("trabalho");
    trabalho.style.display = "inline";
    trabalho.style.width = "900px";
    trabalho.style.height = "400px";
}

function puxar1(button) {
    var trabalho = document.getElementById("trabalho1");
    trabalho.style.display = "inline";
    trabalho.style.width = "900px";
    trabalho.style.height = "400px";
}

function puxar2(button) {
    var trabalho = document.getElementById("trabalho2");
    trabalho.style.display = "inline";
    trabalho.style.width = "900px";
    trabalho.style.height = "400px";
}

function puxar3(button) {
    var trabalho = document.getElementById("trabalho3");
    trabalho.style.display = "inline";
    trabalho.style.width = "900px";
    trabalho.style.height = "400px";
}

function puxar4(button) {
    var trabalho = document.getElementById("trabalho4");
    trabalho.style.display = "inline";
    trabalho.style.width = "900px";
    trabalho.style.height = "400px";
}

function puxar5(button) {
    var trabalho = document.getElementById("trabalho5");
    trabalho.style.display = "inline";
    trabalho.style.width = "900px";
    trabalho.style.height = "400px";
}

function levara(button) {
    var bg = document.getElementById("bg");
    bg.style.display = "none";
    trabalho.style.display = "none";
    trabalho.style.width = "0px";
    trabalho.style.height = "0px";
    trabalho1.style.display = "none";
    trabalho1.style.width = "0px";
    trabalho1.style.height = "0px";
    trabalho2.style.display = "none";
    trabalho2.style.width = "0px";
    trabalho2.style.height = "0px";
    trabalho3.style.display = "none";
    trabalho3.style.width = "0px";
    trabalho3.style.height = "0px";
    trabalho4.style.display = "none";
    trabalho4.style.width = "0px";
    trabalho4.style.height = "0px";
    trabalho5.style.display = "none";
    trabalho5.style.width = "0px";
    trabalho5.style.height = "0px";
}

function ajusta(body){
    var aside = document.getElementById("aside");
    var artigo = document.getElementById("artigo");
    aside.style.height = "100vh";
    artigo.style.height = "100vh";
}

function hamburguer(){
    const aside = document.getElementById("aside")
    const ul = document.getElementById("ul")

    if(aside.style.width == "0px" || aside.style.width == ""){
        aside.style.width = "100vw"
        ul.style.display = "inline"
        // artigo.style.width = "0vw"
    }else{
        aside.style.width = "0px"
        ul.style.display = "none"
        // artigo.style.width = "100vw"
    }
}

function abrpsg(pam){
    let localpag = document.querySelector('.artigo')
    let pag = new XMLHttpRequest()

    pag.onreadystatechange = () =>{
        if(pag.readyState == 4 && pag.status == 200){
            localpag.innerHTML = pag.response
        }
    }
    pag.open('GET', `../${pam}.html`)
    pag.send()
}
