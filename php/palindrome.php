<?php

   $sampleStr= $_GET['str'];
//   $sampleStr = "das ad";
   $noSpace= str_replace(' ', '', $sampleStr);
   $revStr=strrev($noSpace);
   
//echo $sampleStr;

   if(strcmp($noSpace, $revStr)==0)
    echo 1;
   else
    echo 0;


      

   
?>