<?php
$conn = mysqli_connect("127.0.0.1", "jsuser", "jsuser", "sys");
if($mysqli->connect_error) 
{
  exit('Could not connect');
}
// $q = json_decode($_POST['q']);

//TODO delete all rows for Custom
//TODO create new inserts for new Custom bracket
//'Custom' is the TAX_STATE here

//delete old data
$sql = "DELETE FROM TAX_BRACKET_T WHERE TAX_STATE = 'Custom');";
if ($conn->query($sql) == TRUE)
{
     echo "RECORD WAS DELETED";
}
else 
{
     echo "Issue deleting";
}

// //insert new data
// $stmt = $conn->prepare("INSERT INTO TAX_BRACKET_T (TAX_STATE, TAXABLE_SALARY_RANGE_START, TAXABLE_SALARY_RANGE_END, TAXABLE_RATE, ADDL_TAX,
// UPDT_USER_ID, LAST_UPDT_DTM) values ('Custom', ?, ?, ?, ?, 'WebUser', sysdate;)");

// for ($i = 1; $i < $q.sizeof(); $i++)
// {
//      $rowInfo[$i] = $q[$i];
//      if ($i % 4 == 0)
//      {
//           $stmt ->bind_param($rowInfo[$i-3], $rowInfo[$i-2], $rowInfo[$i-1], $rowInfo[i]);
//           $stmt->execute();
//      }
// }

// $stmt->close();
?>