<?php
$conn = mysqli_connect("127.0.0.1", "jsuser", "jsuser", "sys");
if($mysqli->connect_error) 
{
  exit('Could not connect');
}
$q = strval($_GET['q']);

$sql = "SELECT TAXABLE_SALARY_RANGE_START, TAXABLE_SALARY_RANGE_END, TAXABLE_RATE, ADDL_TAX 
FROM TAX_BRACKET_T WHERE TAX_STATE = '".$q."'";
$result = mysqli_query($conn, $sql);


echo "<table>"; 
echo "<tr>"; 
echo "<th>Salary Start ($)</th>"; 
echo "<th>Salary End ($)</th>"; 
echo "<th>Tax Rate (%)</th>"; 
echo "<th>Additional Tax ($)</th>"; 
echo "</tr>"; 

     while ($row = mysqli_fetch_array($result))
     {
        echo "<tr>"; 
        echo "<td>".$row[0]."</td>"; 
        echo "<td>".$row[1]."</td>"; 
        echo "<td>".$row[2]."</td>"; 
        echo "<td>".$row[3]."</td>"; 
        echo "</tr>"; 
    } 
    echo "</table>"; 
    mysqli_free_result($result);

// $sql = "SELECT TAXABLE_SALARY_RANGE_START, TAXABLE_SALARY_RANGE_END, TAXABLE_RATE, ADDL_TAX 
// FROM TAX_BRACKET_T";

// if ($res = mysqli_query($conn, $sql)) { 
//      if (mysqli_num_rows($res) > 0) { 
//          echo "<table>"; 
//          echo "<tr>"; 
//          echo "<th>Salary Start</th>"; 
//          echo "<th>Salary End</th>"; 
//          echo "<th>Tax Rate</th>"; 
//          echo "<th>Additional Tax</th>"; 
//          echo "</tr>"; 
//          while ($row = mysqli_fetch_row($res)) { 
//              echo "<tr>"; 
//              echo "<td>".$row[0]."</td>"; 
//              echo "<td>".$row[1]."</td>"; 
//              echo "<td>".$row[2]."</td>"; 
//              echo "<td>".$row[3]."</td>"; 
//              echo "</tr>"; 
//          } 
//          echo "</table>"; 
//          mysqli_free_result($res);
//      } 
//      else { 
//          echo "No matching records are found."; 
//      } 
//  } 
//  else 
//  { 
//     echo "ERROR: Could not execute $sql. "
//     .mysqli_error($link); 
//  } 

 mysqli_close($conn);
 ?>