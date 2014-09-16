var mailApp = angular.module('mailApp',[]);

mailApp.controller('InboxController', ['$scope', '$http', function($scope, $http){

    $scope.activeEmail = null;

    $scope.accounts = {
        'account1': {
            'name': 'Mikkel',
            'folders' : [
                'inbox',
                'archived',
                'personal'
            ]
        },
        'account12' : {
            'name' : 'Mikkel 2',
            'folders' : [
                'inbox',
                'archived'
            ]
        }
    };

    $scope.activeAccount = $scope.accounts['account1'];

    $scope.switchAccount = function(account) {
        $scope.activeAccount = $scope.accounts(account);
    };

    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.numberOfPages=function(){
        return Math.ceil($scope.activeAccount.emails.length/$scope.pageSize);
    }

    $scope.getEmails = function(accountId) {
        $http.get('webservices/getEmails.html').
            success(function (data, status, headers, config) {
                $scope.accounts[accountId].emails = data.emails;
            }).
            error(function (data, status, headers, config) {
                // log error
            });
    };

    $scope.getEmailById = function(emailId) {
        $http.get('webservices/getEmailById.html?mailId=' + emailId).
            success(function (data, status, headers, config) {
                $scope.activeEmail = data;
            }).
            error(function (data, status, headers, config) {
                // log error
            });
    };


    $scope.selectEmail = function(emailId) {
        $scope.getEmailById(emailId);
    };

    $scope.getEmails('account1');

}]);

mailApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});

$(function(){
    $("table").resizableColumns({
        store: window.store
    });
});
