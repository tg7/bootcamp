<?php

//Name Info
$firstName = "Todd";
$lastName = "Germaine";
$fullName = $firstName . $lastName;

//Age Info
$birthYear = 1989;
$age = 2016 - $birthYear;

echo "My name is $fullName\n";

echo "Im $age years old.\n";

if (strlen($fullName) > 12) {
  
  echo "Its a long name\n";

} else  {
  
  echo "It's a short name\n";

}

  echo str_repeat('=', 12) . "\n";


if ($age > 21) {

  echo "Sake Sake Sake\n";


  } elseif ($age < 21) {

    echo "No Sake For Me\n";

    } else {

      echo "Just slipped by Sake..Sake..Sake..\n";
    }


?>

