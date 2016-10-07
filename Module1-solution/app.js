(function(){
  'use strict';
   angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  
  function  LunchCheckController($scope){
    $scope.itemName='';
    $scope.message='';
    $scope.customStyle = {};
   $scope.customStyleText={};
    $scope.checkClick=function(){
       if($scope.itemName =='')
        {
        $scope.message="Please enter data first";
        $scope.turnRed();
     
      }
      else{
        var arraydishes=returnDishes($scope.itemName);
        var number= arraydishes.length;
        if(number<=3){
          $scope.message="Enjoy!";
          $scope.turnGreen();
      
            }
          else if(number>3){
            $scope.message="Too much!";
            $scope.turnGreen();
        
            }
          }
       };
    $scope.turnGreen = function (){
   
    $scope.customStyle.style = {"color":"green"};
    $scope.customStyleText.style={"border-color":"green"};
}

$scope.turnRed = function() {
    $scope.customStyle.style = {"color":"red"};
   $scope.customStyleText.style={"border-color":"red"};
}
 
   
    };
  function returnDishes(valueinput)
  {
    var array1=valueinput.split(',');
   
    return array1;
  };
 
 
})();
