(function()
{
  'use strict';
  var ListOfitems=[
  {name:"Coookie",quantity:"2"},
  {name:"Cake",quantity:"2"},
  {name:"Sugar",quantity:"12"},
  {name:"Curd",quantity:"5"},
  {name:"Cinnamaon",qunatity:"9"}];

  angular.module('Shopping',[])
  .controller('ShoppingListController',ShoppingListController);


  ShoppingListController.$inject=['$scope'];
  function ShoppingListController($scope){
   $scope.name="";
   $scope.quantity="";

    $scope.itemList=ListOfitems;
    $scope.itemList2=[];

    $scope.addItemToList=function(name,quantity){
      console.log(name,qunatity);
      var item= {name,quantity};
      $scope.itemList.push(item);

    }
    $scope.removeItem=function(name,quantity){
      var item={name,qunatity};
      $scope.itemList2.push(item);
      $scope.itemList.remove(item);
    }


  };
  //BuyingController.$inject=[]
  //BoughtController.$inject=[]



});
