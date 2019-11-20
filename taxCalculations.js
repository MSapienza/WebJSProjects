
var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'jsuser', password: 'jsuser', database: 'sys'});
connection.connect(function(err) {
     if (err) console.log(err);
 });

 connection.end(); 

function taxBracketCalculator(salary, bracket)
{
     //tax is calculated based on the tax bracket the user wants
     //tax bracket can be Missouri, or fictional  
}

function setTaxBracketInfo(NewTaxBracket)
{
     //user submits new Tax Bracket linked to fictional state
}

function viewTaxBracket()
{
     var brackets = document.getElementById("bracket").value;
     var salaries = [], taxRates = [], message;
     
      
     
     connection.query('SELECT * FROM book_collection_t',
          function (err, result) {
            if (err) console.log(err);
            console.log(result);
          });

          document.getElementById("bracketResult").innerHTML = "test";    
     
     
     if (brackets == "MO")
     {
          //pull MO bracket
      
     }
     else if (brackets == "Federal")
     {
          //pull federal bracket

     }
     else if (brackets == "Custom")
     {
          //pull custom bracket or throw warning if none exists

     }

     document.getElementById("bracketResult").innerHTML = "mattTest";
     return message;

     //figure out how to return full table into bracketResults
}