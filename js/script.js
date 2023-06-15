let result = document.getElementById('resultado');

function input(num){
    let number = result.value;
    result.value = number + num;
}

function reset(){
    result.value = '';
}

function calc(){
    if(result.value != ""){
        let result2  = result.value;
        result.value = eval(result2)
    } else{
        alert("Erro! Adicione valores válidos.")
    }
}

result.addEventListener('keypress', getKeyBoardValue);

    function getKeyBoardValue(){
        if(event.keyCode == 13){
            calc();
        } else if(event.keyCode == 27){
            reset();
        }
    }