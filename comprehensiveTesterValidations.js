
function validateTestInput(text3)
{
     var phone = "", message = "";
     phone = document.getElementById("phone").value;

     if (phone.length > 10 || phone.length < 10)
     {
          message = "Phone must be 10 digits!";
     }
     else if (phone.match(/[a-z]/i))
     {
          message = "Phone numbers must be numeric!";
     }
     else
     {
          message = "Validated!";
     }

     document.getElementById("result").innerHTML = message;
     return message;
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
     document.getElementById("result2").innerHTML = message;
     return message;
}