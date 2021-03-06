/// <reference path='../../ts/typings/tsd.d.ts' />

import ICourse = require('./ICourse');

interface ICourseResource {
    getBySemester(termCode: string);
}

export = ICourseResource;
