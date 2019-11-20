<?php
$servername = "localhost";
$username = "jsuser";
$password = "jsuser";
$dbname = "sys";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT TAXABLE_SALARY_RANGE_START, TAXABLE_SALARY_RANGE_END, TAXABLE_RATE, ADDL_TAX 
FROM TAX_BRACKET_T";

// $stmt = $mysqli->prepare($sql);
// $stmt->bind_param("brackets", $_GET['q']);
// $stmt->execute();
// $stmt->store_result();
// $stmt->bind_result($salaryStart, $salaryEnd, $taxRate, $addlTax);
// $stmt->fetch();
// $stmt->close();

// echo "<table>";
// echo "<tr>";
// echo "<th>Salary Start</th>";
// echo "<td>" . $salaryStart . "</td>";
// echo "<th>Salary End</th>";
// echo "<td>" . $salaryEnd . "</td>";
// echo "<th>Tax Rate</th>";
// echo "<td>" . $taxRate . "</td>";
// echo "<th>Additional Tax</th>";
// echo "<td>" . $addlTax . "</td>";
// echo "</tr>";
// echo "</table>";

if ($res = mysqli_query($conn, $sql)) { 
     if (mysqli_num_rows($res) > 0) { 
         echo "<table>"; 
         echo "<tr>"; 
         echo "<th>Salary Start</th>"; 
         echo "<th>Salary End</th>"; 
         echo "<th>Tax Rate</th>"; 
         echo "<th>Additional Tax</th>"; 
         echo "</tr>"; 
         while ($row = mysqli_fetch_array($res)) { 
             echo "<tr>"; 
             echo "<td>".$row['Salary Start']."</td>"; 
             echo "<td>".$row['Salary End']."</td>"; 
             echo "<td>".$row['Tax Rate']."</td>"; 
             echo "<td>".$row['Additional Tax']."</td>"; 
             echo "</tr>"; 
         } 
         echo "</table>"; 
         mysqli_free_res($res); 
     } 
     else { 
         echo "No matching records are found."; 
     } 
 } 
 else { 
     echo "ERROR: Could not execute $sql. "
                                 .mysqli_error($link); 
 } 
 mysqli_close($link); 

?>