<?php
$conn = mysqli_connect("127.0.0.1", "jsuser", "jsuser", "sys");
if($conn->connect_error) 
{
  exit('Could not connect');
}

$q = strval($_GET['q']);
$rowCells = [];
$rowInfo;

//TODO create new inserts for new Custom bracket
//'Custom' is the TAX_STATE here

//delete old data
$sql = "DELETE FROM TAX_BRACKET_T WHERE TAX_STATE = 'Custom'";
if ($conn->query($sql) == TRUE)
{
     echo "Existing custom bracket records have been deleted.";
}
else 
{
     echo "Unknown issue while deleting!";
}

//create array of valid values
// for ($i = 0, $j= 0; $i < strlen($q); $i++)
// {
//      if ($q[$i] == ","){ } //do nothing
//      else
//      {
//           $rowCells[$j] = $q[$i];
//           $j++;
//      }
// }

$strValues = explode(",", $q);

$sql = "INSERT INTO TAX_BRACKET_T (TAX_STATE, TAXABLE_SALARY_RANGE_START, TAXABLE_SALARY_RANGE_END, TAXABLE_RATE, ADDL_TAX,
UPDT_USER_ID, LAST_UPDT_DTM) values ('Custom', ?, ?, ?, ?, 'WebUser', sysdate());";

for ($i = 0; $i < count($strValues); $i+4)
{
     if ($stmt = $conn->prepare($sql))
     {
          $stmt ->bind_param('ssss', $strValues[$i], $strValues[$i+1], $strValues[$i+2], $strValues[$i+3]);
          $stmt->execute();
     }
     else
     {
          $error = $conn->errno . ' ' . $conn->error;
          echo $error;
     }
}
$conn->close();
?>