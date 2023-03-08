const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const form =  document.querySelector('#form');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');

form.addEventListener('submit', sumar);

function sumar(event){
    console.log({event});
    event.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText= "Resultado: "+ suma;
}