

function addNewRow()
{    //dynamically adds a row with correct properties for additional user input
     var table = document.getElementById("myTable");
     var row = table.insertRow(1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);

     row.setAttribute("height", "30px");

     cell1.innerHTML = cell1.innerHTML + '<input type = "text" placeholder = "0.00" name = "SS[]">';
     cell2.innerHTML = cell2.innerHTML + '<input type = "text" placeholder = "2000.00" name = "ES[]">';
     cell3.innerHTML = cell3.innerHTML + '<input type = "text" placeholder = "3.50" name = "TR[]">';
     cell4.innerHTML = cell4.innerHTML + '<input type = "text" placeholder = "13.97" name = "AT[]">';
}

function removeBottomRow()
{
     //removes the bottom row of a table if the user has no further input
     var table = document.getElementById("myTable");
     table.deleteRow(-1);
}

function taxBracketCalculator(salary, bracket)
{
     //tax is calculated based on the tax bracket the user wants
     //tax bracket can be Missouri, or fictional  
}

function setTaxBracketInfo()
{    //user submits new Tax Bracket linked to fictional state

     //the first portion grabs the dynamic table and stores all values into an Array
     var myTable = document.getElementById("myTable");
     var rowValues = [];

     for (var row = 1; row < myTable.rows.length; row++)
     {
          for (var cell = 0; cell < myTable.rows[row].cells.length; cell++)
          {
               var element = myTable.rows[row].cells[cell];
               if (element.childNodes[0].getAttribute('type') == 'text')
               {
                    rowValues.push("'" + element.childNodes[0].value + "'");
               }
          }
     }
     
     JSON.stringify(rowValues);

     //this portion will call a PHP file to insert those values and return a message to the user
     var xhttp = new XMLHttpRequest();

     xhttp.open("POST", "taxBracketSET.php?q="+rowValues, true);
     xhttp.send();

     // document.getElementById("txtHint").innerHTML = "Successfully inserted data!";
     document.getElementById("txtHint").innerHTML = this.responseText;
}

function viewTaxBracket(brackets)
{
     //this function takes in the user's selection
     //then, creates XMLHTTP variables to send to PHP file
     //the PHP file runs a dynamic query based on user input
     //then, the results are returned to this.responseText
     
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

//php -S 127.0.0.1:8080 starts the PHP server in terminal