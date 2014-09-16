var mailApp = angular.module('mailApp',[]);

mailApp.controller('InboxController', ['$scope', function($scope){
    $scope.greeting = "HEeeelloo";

    $scope.accounts = {
        'account1': {
            'name': 'Mikkel',
            'folders': {
                'inbox': {
                    'name': 'inbox',
                    'emails': [
                        {'sender': 'Test', 'subject': 'test subject', date: '2014-09-01'},
                        {'sender': 'Test 2', 'subject': 'test subject 2', date: '2014-08-01'}
                    ]
                },
                'archived': {
                    'name': 'archived',
                    'emails': []
                }
            }
        },
        'account12' : {
            'name' : 'Mikkel 2',
            'folders' : {
                'inbox': {
                    'name': 'inbox',
                    'emails': [
                        {'sender': 'Test', 'subject': 'test subject', date: '2014-09-01'},
                        {'sender': 'Test 2', 'subject': 'test subject 2', date: '2014-08-01'}
                    ]
                },
                'archived': {
                    'name': 'archived',
                    'emails': []
                },
                'personal': {
                    'name': 'personal',
                    'emails': []
                }
            }
        }
    };
}]);

$(function(){
    $("table").resizableColumns({
        store: window.store
    });
});

