function displayNum(num){
    result.value +=num;
    console.log(num);
}
function clearBox(){
    result.value="";
}
function evaluateExpression(){
    // expression=result.value;
    // output=eval(expression);
    // result.value=output;
    // console.log(output);
    result.value=eval(result.value);
}
function removeLast() {
    currentExpresion=result.value;
    result.value=currentExpresion.slice(0,-1);
}