var app=angular.module("palindromeCheck",[]);

app.controller("PalindromeCheckController",['$http',function($http){
   this.checkPalindrome=function(){
      this.result="";
      var cp=this;
     $http({
        method: 'GET',
        params:{str: this.str},
        url: 'php/palindrome.php'
     }).then(function successCallback(response){
        if(response.data=="1"){
         cp.result= "'"+ cp.str + "' is a palindrome";
           
        }
        else{
         cp.result= "'"+ cp.str + "' is not a palindrome";
           
        }
     }, function errorCallback(response){
        
     }); 
   };
}]);

