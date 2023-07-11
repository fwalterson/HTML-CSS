function menuShow(){

let telnav= document.querySelector('.tel-navegacao');
 
if(telnav.classList.contains('open')){

    telnav.classList.remove('open');
    document.querySelector('.icon'). src="/img/cardapio.png";
}
else{
    telnav.classList.add('open');
    document.querySelector('.icon').src="/img/simbolo.png";
}

}