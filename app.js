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

function errorhandler(error){
    console.log("error occured", error);
    alert("Some issue with API server, please try again later")
}

// function clickHandler() {
//     var inputText = txtInput.value
//     fetch(getTranslateURL(inputText))
//     .then(response=>response.json())
//     .then(json=>{
//         var translatedText = json.contents.translated;
//         output.innerText=translatedText;
//     })
//     .catch(errorhandler)
// }

function clickHandler() {
    var inputText = txtInput.value
    // fetch(getTranslateURL(inputText))
    // .then(response=>response.json())
    // .then(json=>{
    //     var translatedText = json.contents.translated;
    //     output.innerText=translatedText;
    // })
    // .catch(errorhandler)
    // .then(function responsHandler(response) {return response.json()
    // })
    // .then( function logJSON(){
    //     var translatedText = logJSON.contents.translated;
    //     output.innerText = translatedText;
    // })

    // normal function
    fetch(getTranslateURL(inputText))
    .then(function(response) {
      // Parse the response as JSON
      return response.json();
    })
    .then(function(json) {
      // Extract the translated text from the JSON object
      var translatedText = json.contents.translated;

      // Set the innerText of the output element
      output.innerText = translatedText;
    });
}



btnTranslate.addEventListener("click", clickHandler);