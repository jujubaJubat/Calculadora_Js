let tela= document.getElementById("tela");
let num1;
let op;
let num2;

    function adicionar(numero){
        tela.value += numero;
    }

    function tipoOP(operador){
        num1= Number(tela.value);
        op= operador;
        tela.value=" ";
    }

    function calcular(){
        num2= Number(tela.value);

            if (op === "+"){
                tela.value= num1 + num2;
            } else if (op === "-"){
                tela.value= num1 - num2;
            } else if (op === "*"){
                tela.value= num1 * num2;
            } else if (op === "/"){
                tela.value= num1 / num2;
            }

        }
            function apagar(){
                console.log("clicou")
                tela.value= tela.value.slice(0, -1);}