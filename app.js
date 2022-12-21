var txtInput = document.querySelector(".txt-input");
var btnTranslate = document.querySelector(".btn-translate");
var output = document.querySelector(".output")

var serverURL = "https://api.funtranslations.com/translate/pirate.json"


function getTranslateURL(inputText){
    return serverURL + "?" + "text=" +inputText;
}
// console.log(getTranslateURL)
// checking if the click event hapening-console clicked
// function clickHandler(){
//     console.log("clicked!")
// // }

function clickHandler() {
    var inputText = txtInput.value
    fetch(getTranslateURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        output.innerText=translatedText;
    })
}

btnTranslate.addEventListener("click", clickHandler);