
function databaseHandler()
{
     var mysql = require('mysql');

     var con = mysql.createConnection({host: "localhost", user: "jsuser", password: "jsuser"});

     con.connect(function(err) 
     {
          if (err) throw err;
          console.log("Connected!");
     });
}

function taxBracketCalculator(salary)
{

}

function setTaxBracketInfo(NewTaxBracket)
{

}