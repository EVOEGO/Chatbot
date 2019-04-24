var userInput = "";
var userGreetings = ["hi", "hello", "sup", "hey", "hows it going"];
var pharse = ["how are you today", "good thanks how are you", "who are you"];
var userResponses;
var response = "";
var connection1 = ["who", "are", "you", "what", "bot", "a"];
var match = 0;
var percentageMatch = 0;

function botResponse(){
    checkUserInput();
}
function checkUserInput(){
    userInput = document.getElementById("textArea").value;
    if(userInput == null){
        alert("You need to say something for the chatbot to work.")
    } else{
        constructResponse();
    }
}
function constructResponse(){
    conversation();
    checkUserRespsonse();
    if(response == true){
        document.getElementById("chatbotResponse").innerText = "Hello my friend";
    } else if(response == false){
        document.getElementById("chatbotResponse").innerText = "How are you";
    }
    recordUserInput();
}
function checkUserRespsonse(){
    for(x in userGreetings){
        if(userInput.toLowerCase() == userGreetings[x]){
            response = true;
            return;
        } else {
            response = false;
        }
    }
}
function recordUserInput() {
    userResponses = [userInput];
}
function conversation(){
    var splitInput = userInput.split(" ");
     for(var x = 0; x < splitInput.length; x++){
         for(var y = 0; y < connection1.length; y++){
             if(splitInput[x] == connection1[y]){
                 match++;
             }
         }
     }
     percentageMatch = match / splitInput.length;

     if(percentageMatch == 1){
         document.getElementById("chatbotResponse").innerText = "I am a chatbot tasked with talking to you";
         return;
     }
     else if(percentageMatch < 1 && percentageMatch > 0.50){
         document.getElementById("chatbotResponse").innerText = "I am a chatbot tasked with talking to you";
     } else if(percentageMatch < 0.50){
         document.getElementById("chatbotResponse").innerText = "hi";

     }
}