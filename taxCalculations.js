
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

function taxBracketCalculator(salary, bracket)
{
     //tax is calculated based on the tax bracket the user wants
     //tax bracket can be Missouri, or fictional  
}

function setTaxBracketInfo(NewTaxBracket)
{
     //user submits new Tax Bracket linked to fictional state
}

// con.connect(function(err) {
//      if (err) throw err;
//      con.query("SELECT * FROM customers", function (err, result, fields) {
//        if (err) throw err;
//        console.log(result);
//      });