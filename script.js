let botaoBarra = document.getElementById("botaoBarra");

botaoBarra.addEventListener("click", ativarBarra);

let menu = document.getElementById("menuAcessibilidade");

function ativarBarra(){
    if(menu.style.right == "-100%" || menu.style.right == ""){
        menu.style.right = "0";
    }else if(menu.style.right = "0"){
        menu.style.right == "-100%";
    }
}