/*CALCULADORA IMC*/
//1) Variáveis dos elementos: 
//Evitar variáveis globais! Colocar as variáveis dentro das funções:
//const txtnome = document.getElementById("txtnome");
//const txtalt = document.getElementById("txtalt");
//const txtpes = document.getElementById("txtpes"); 
const calc = document.getElementById("calc"); //Única variável global


//3)
function imc(){
    //teste:
    //alert("Teste click")     

    const txtnome = document.getElementById("txtnome");
    const txtalt = document.getElementById("txtalt");
    const txtpes = document.getElementById("txtpes"); 
    const res = document.getElementById("res");

    //Lógica:
    //1) Verificar se nome está vazio ou não; "Acessa o valor dentro da variável":
    if(txtnome.value == "" && txtalt.value == "" && txtpes.value == ""){
        //Teste: 
        //alert("Preencha todos os campos!")
        res.textContent = "Preencha todos os campos!"

    } else {
        //Teste:
        //alert("Valores preenchidos!");
        res.textContent = "Valores preenchidos!"
        
    }
    //Ou:
    /*
    if(txtnome.value !== "" && txtalt.value !== "" && txtpes.value !== ""){
        alert("Valores preenchidos!");
    } else {
        alert("Preencha todos os campos!")
    }
    */

}

//2)
calc.addEventListener("click", imc);