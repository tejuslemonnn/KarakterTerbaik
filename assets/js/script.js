// Button
let btnBaby = document.querySelector('.btn-baby');
let btnDomba = document.querySelector('.btn-domba');
let btnNinja = document.querySelector('.btn-ninja');
let inputAlasan = document.querySelector('.input-alasan');

/* ------------------------- Input Alasan ------------------------- */
btnBaby.addEventListener('click',() =>{
    inputAlasan.value = "Saya suka baby ben sebab ";
})

btnDomba.addEventListener('click',() =>{
    inputAlasan.value = "Saya suka Guru Domba sebab ";
})

btnNinja.addEventListener('click',() =>{
    inputAlasan.value = "Saya suka Ninja Ken sebab ";
})

/* ------------------------- Result  ------------------------- */
let btnAlasan = document.querySelector('.btn-alasan');
let result = document.querySelector('.txt-result');

btnAlasan.addEventListener('click', () =>{
    result.value = inputAlasan.value;
})
