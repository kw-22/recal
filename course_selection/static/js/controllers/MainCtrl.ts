'use strict';

declare var username: string;

class MainCtrl {
    public static $inject = [
        '$scope',
        'ScheduleResource',
        'CourseResource',
        'UserService',
    ];

    private data;
    private username;

    constructor(
            private $scope,
            private scheduleResource,
            private courseResource,
            private userService
            )
    {
        this.init();
    }

    private init() {
        this.$scope.vm = this;
        this.initData();
    }

    private initData() {
        this.username = username;
        this.data = {
            user: null,
            schedules: null
        };

        this.$scope.data = this.data;
        this.loadUserData();
    }

    public loadUserData() {
        this.data.user = this.userService.getUser(this.username);
        this.data.schedules = this.scheduleResource.getByUser({user__netid: this.username})    
    }

}

export = MainCtrl;
