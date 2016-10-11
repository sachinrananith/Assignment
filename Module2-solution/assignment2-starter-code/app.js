(function(){
  'use strict';

  angular.module('Shopping',[])
  .controller('ShoppingListController',ShoppingListController)
  .controller('BuyingController',BuyingController)
  .controller('BoughtController',BoughtController);


  ShoppingListController.$inject=['this']
  function ShoppingListController(this){
    var item= {
      name="";
      quantity="";
    }

    var ListOfitems=[];
    var ctrl=this;

    ctrl.addItemToList





  }
  BuyingController.$inject=[]
  BoughtController.$inject=[]



})
