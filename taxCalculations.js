
function taxBracketCalculator(salary, bracket)
{
     //tax is calculated based on the tax bracket the user wants
     //tax bracket can be Missouri, or fictional  
}

function setTaxBracketInfo(NewTaxBracket)
{
     //user submits new Tax Bracket linked to fictional state
}

function viewTaxBracket(brackets)
{
     var xhttp;
     
     if (brackets == "") 
     {
          document.getElementById("txtHint").innerHTML = "";
          return;
     }
     xhttp = new XMLHttpRequest();

     xhttp.onreadystatechange = function() 
     {
          if (this.readyState == 4 && this.status == 200)
          {
               document.getElementById("txtHint").innerHTML = this.responseText;
          }
     };

     xhttp.open("GET", "taxBracketGET.php?q="+brackets, true);
     xhttp.send();
}