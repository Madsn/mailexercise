var mailApp = angular.module('mailApp',[]);

mailApp.controller('InboxController', ['$scope', function($scope){
    $scope.greeting = "HEeeelloo";

    $scope.accounts = {
        'account1': {
            'folders': [
                'inbox',
                'archived'
            ],
            'name': 'Mikkel'
        },
        'account12' : {
            'folders' : [
                'inbox',
                'archived',
                'personal'
            ],
            'name' : 'Mikkel 2'
        }
    };

}]);

$(function(){
    $("table").resizableColumns({
        store: window.store
    });
});

