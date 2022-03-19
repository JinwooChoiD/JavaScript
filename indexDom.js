const h2Element = document.querySelector('h2');
const pElement = document.querySelector('p');
function replaceH2(){
    h2Element.innerText = '정상적으로 작동됩니다!'
}
function replaceP(){
    pElement.innerText = '정상적으로 작동됩니다!'
}
h2Element.addEventListener('click',replaceH2);
pElement.addEventListener('click',replaceP);
