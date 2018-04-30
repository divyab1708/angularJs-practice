
   var app=angular.module("primeNumber",[]);
   
   app.controller("PrimeCheckerController",function(){
      this.result="";
      this.resetResult=function(){
      this.result="";
         
      };
      this.checking=function(){
         var num=this.number;
         var isPrime=1;
         for(var i = 2; i < num; i++){
            if(num % i == 0){
               isPrime=0;
               this.result="is not a prime no."
               break;
            }
         }
         if(isPrime){
               this.result="is  a prime no."
            
         }
      };
   });
      

app.directive('noFloat', function () {
return  {
    restrict: 'A',
    link: function (scope, elm, attrs, ctrl) {
        elm.on('keydown', function (event) {
          if ([110, 190].indexOf(event.which) > -1) {
                // dot and numpad dot
                event.preventDefault();
//                return false;
            }
            else{
              return true;
            }
        });
    }
}
});
