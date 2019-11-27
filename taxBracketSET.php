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

//insert new data
$stmt = $conn->prepare("INSERT INTO TAX_BRACKET_T (TAX_STATE, TAXABLE_SALARY_RANGE_START, TAXABLE_SALARY_RANGE_END, TAXABLE_RATE, ADDL_TAX,
UPDT_USER_ID, LAST_UPDT_DTM) values ('Custom', ?, ?, ?, ?, 'WebUser', sysdate");

//create array of valid values
for ($i = 0, $j= 0; $i < strlen($q); $i++)
{
     if ($q[$i] == ","){ } //do nothing?
     else
     {
          $rowCells[$j] = $q[$i];
          $j++;
     }
}

for ($i = 0; $i < count($rowCells); $i+4)
{
     if ($query = $conn->prepare($stmt))
     {
          $stmt ->bind_param($rowCells[$i], $rowCells[$i+1], $rowCells[$i+2], $rowCells[i+3]);
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