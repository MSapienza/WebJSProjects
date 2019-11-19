
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
     //tax is calculated based on the tax bracket the user wants
     //tax bracket can be Missouri, or fictional

}

function setTaxBracketInfo(NewTaxBracket)
{
     //user submits new Tax Bracket linked to fictional state

}


//tax data in db 
//table name should be tax_bracket_t;
//columns: tax_state varchar (200), taxable_salary decimal, taxable_rate, updt_user_id, updt_dtm

// con.connect(function(err) {
//      if (err) throw err;
//      con.query("SELECT * FROM customers", function (err, result, fields) {
//        if (err) throw err;
//        console.log(result);
//      });