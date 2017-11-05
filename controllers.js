angular.module('todoApp').controller('todoCtrl',function($scope,todoSt){
                $scope.data = todoSt.data;
            
                $scope.remove = function(index){
                    todoSt.remove(index);
                }

                $scope.add = function(newTodoTitle){
                    todoSt.add(newTodoTitle);
                    $scope.newTodoTitle = "";
                }
        });