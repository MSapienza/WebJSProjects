use strict;

function validatePhone(text3)
{
     var validationMessage = "";

     document.getElementById("text3").innerHTML = text3;

}

function returnTextSleepType(value)
{
     var message = "";

     if (value == "Deep Sleeper")
     {
          message = "You must be tired!";
     }
     else if (value == "Light Sleeper")
     {
          message = "You must be cautious!";
     }
     else if (value == "Toss and Turning")
     {
          message = "You must be restless!";
     }
     else if (value == "Sleeptalker")
     {
          message = "Your brain never turns off!";
     }
     document.getElementById("result").innerHTML = message;
     return message;

}

function popupPersonality(this.value)
{

}