'use strict';

angular.module('imageGridDisplay').component('imageGridDisplay', {
    templateUrl: 'image-grid-display/image-grid-display.template.html',
    controller: [
        'Images',
        '$scope',
        function ImageGridDisplayCtrl(Images, $scope) {
            $scope.photos = [];
            $scope.title = '';
            $scope.tag = '';
            $scope.search = function(search, page) {
                $scope.loading = true;
                var promise = Images.search(search);
                promise.then(function(data) {
                    console.log("Data", data.items);
                    $scope.photos = data.items;
                    $scope.loading = false;

                }, function(err) {
                    console.log('Failed: ' + err);
                    $scope.loading = false;
                });
            }

            $scope.loading = true;

            $scope.search();

        }
    ]
});
