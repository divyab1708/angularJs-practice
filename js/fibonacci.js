var app=angular.module("fibonacci",[]);
app.controller("FibonacciController",function(){
   this.result="";
  
   this.genFibonacci=function(){
      this.result="0 1";
      this.not="";
       var a=0;
      var b=1;
      var c=0;
      
      for(var i=0; a+b <= this.num ; i++){
         this.result=this.result + " " + (a+b);
         c=a+b;
         a=b;
         b=c;
      }
      if(c != this.num){
         this.not=this.num + " does not come in fibonacci series";
      }
   };
});