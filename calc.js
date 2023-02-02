function displayContent(content){
    calcscreen.value+=content
}
function allClear(){
    calcscreen.value=''
}
function delClear(){
    calcscreen.value=calcscreen.value.slice(0,-1)
}
function evalExpression(){
    calcscreen.value=eval(calcscreen.value)
}