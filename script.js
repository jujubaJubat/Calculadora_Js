function calcular(Op){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    let res;
        if (Op==='+'){
            res = num1 + num2;
        }   else if (Op=== '-'){
            res = num1 - num2;
        }   else if (Op=== '*'){
            res = num1 * num2;
        }   else if (Op==='/'){
            res = num1 / num2;
        }
        document.getElementById("res").textContent = `"Resultado:" ${res}`;
}