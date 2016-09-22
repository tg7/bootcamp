<?php

$name = "Todd";
$last = "Germaine";
$fullName = $name . $last;

echo "My name is $fullName\n";

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


$lastNames = [
  'Todd' => 'Germaine',
  'Steven' => 'Galante'
];

foreach($lastNames as $name => $age) {
  
  echo  "$name comes from $lastNames\n";
}

?>