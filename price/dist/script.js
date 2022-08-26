var myApp = angular.module('myApp',[]);

myApp.controller('CartForm', ['$scope', function($scope) {
   $scope.invoice = {
        items: []
    };

    $scope.addItem = function() {
        $scope.invoice.items.push({
            qty: 0,
            description: '',
            discount: 40,                  
            cost: 0,
            checked: true
        });
    },

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
          if(item.checked){
            total += (item.qty * item.cost) * (1 - item.discount/100);
          }
            total += 0;
        })
        return total;
    }
}]);