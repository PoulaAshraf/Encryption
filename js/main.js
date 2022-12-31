let text = "Coder Shiyar";
let encoded_text = btoa(text);

let decode_text = atob(encoded_text);
console.log(decode_text);

let textArea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");
textArea.addEventListener("input", ()=>{
    makeResult();
});
textArea.addEventListener("change", ()=>{
    makeResult();
});
function makeResult(){
    if(select.value == "decode"){
        result.value = window.atob(textArea.value);
    }else{
        result.value = window.btoa(textArea.value);
    }
}