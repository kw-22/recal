import TestSharingService = require('../services/TestSharingService');

'use strict';

class QueueCtrl {
    public static $inject = [
        '$scope',
        'TestSharingService'
        ];

    constructor(
            private $scope,
            private testSharingService
            )
    {
        this.$scope.vm = this;
        this.$scope.data = testSharingService.getData();
        this.$scope.$watch(
                () => { 
                    return this.$scope.data.enrolledCourses; 
                },
                (newCourses, oldCourses) => { 
                    return this.updateEnrolledCourses(newCourses, oldCourses); 
                },
                true);
    }

    public updateEnrolledCourses(newCourses, oldCourses) {
        this.$scope.enrolledCourses = newCourses;
    }
}

export = QueueCtrl;
