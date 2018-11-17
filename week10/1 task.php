<?php
$usernames=array("Ardak","Johndoe");
if (!empty($_POST["name"])) { 
	if(in_array($_POST["name"],$usernames)){
		echo "<p>The username name is already reserved!</p>";
	}else{
    array_push($usernames,$_POST["name"],$_POST["password"]);}
}else{
	echo "<p>Username should not be empty!</p>";
}
if (!empty($_POST["password"])) { 
     array_push($usernames,$_POST["password"]);
}else{
	echo "<p>Password should not be empty!</p>";
}
if (!empty($_POST["confirm"])) { 
     if(strcmp($_POST["confirm"],$_POST["password"])==0){
  		   echo "<p>The confirmed!</p>";}
  		   else{
  		   echo "<p>Password and Confirm does not equal to each other!</p>";
  		}
}else{
	echo "<p>Confirm password should not be empty!</p>";
}
?>
<html>
<head>
	
</head>
<body>

<form method="post">
Username: <input type="text" name="name" value=''/> <br /><br />
Password: <input type="password" type="password" name="password" value='' /> <br /><br />
Confirm Password:  <input type="password" name="confirm" value='' /> <br /><br />
<input type="submit" value="Submit" />
</form>
<style>
	p{
		border:1px solid red;
		width:350px;
		height:25px;
		font-family: Arial;
	}
	div p{
		border:none;
	}
	div{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 300px;
	}
</style>
</body>
</html>