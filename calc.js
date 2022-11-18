function display(num){
    result.value=result.value+num
}

function allclear(){
    result.value=''
}

function evaluateexp(){
    result.value=eval(result.value)
}

function backspace(){
    result.value=result.value.slice(0,-1)
    // or
    // data=result.value
    //s=data.slice(0,-1)
    //result.value=s
}