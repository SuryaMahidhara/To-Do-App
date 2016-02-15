"use strict";

angular.module("todoApp", [])
    .controller("TodoController", ['$scope', todoController]);

function todoController($scope) {

    $scope.todos = [];

    $scope.addTodo = function() {
        $scope.todos.push({
            "tag": $scope.addNewTodo
        });
        $scope.addNewTodo = '';
    }

    $scope.updateTodo = function(index) {

        if ($scope.todos[index].isUpdate) {
            $scope.todos[index].isUpdate = false;
        } else {
            $scope.todos[index].isUpdate = true;
        }
    }

    $scope.removeTodo = function(index) {

        if (confirm("Are you sure to delete this todo ?")) {

            $scope.todos.splice(index, 1);
        }
    }
}
