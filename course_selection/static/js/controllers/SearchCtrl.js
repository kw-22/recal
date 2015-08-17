/// <reference path='../../ts/typings/tsd.d.ts' />
'use strict';
define(["require", "exports"], function (require, exports) {
    var SearchCtrl = (function () {
        function SearchCtrl($scope, $sce, $filter) {
            this.$scope = $scope;
            this.$sce = $sce;
            this.$filter = $filter;
            this.$scope.vm = this;
            this.useCourseSearch();
        }
        SearchCtrl.prototype.useFriendSearch = function () {
            this.whichSearch = SearchCtrl.whichSearchEnum.FRIEND_SEARCH;
            this.$scope.whichSearch = this.whichSearch;
            this.placeHolder = SearchCtrl.FRIEND_SEARCH_PLACE_HOLDER;
        };
        SearchCtrl.prototype.useCourseSearch = function () {
            this.whichSearch = SearchCtrl.whichSearchEnum.COURSE_SEARCH;
            this.$scope.whichSearch = this.whichSearch;
            this.placeHolder = SearchCtrl.COURSE_SEARCH_PLACE_HOLDER;
        };
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        SearchCtrl.$inject = [
            '$scope',
            '$sce',
            '$filter'
        ];
        SearchCtrl.NOT_FOUND = -1;
        SearchCtrl.whichSearchEnum = {
            COURSE_SEARCH: 0,
            FRIEND_SEARCH: 1
        };
        SearchCtrl.COURSE_SEARCH_PLACE_HOLDER = "Search Course";
        SearchCtrl.FRIEND_SEARCH_PLACE_HOLDER = "Search Friend";
        return SearchCtrl;
    })();
    return SearchCtrl;
});
//# sourceMappingURL=SearchCtrl.js.map