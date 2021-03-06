/// <reference path='../../ts/typings/tsd.d.ts' />
import Moment = require('moment');
import IEvent = require('../interfaces/IEvent');
import IEventSource = require('../interfaces/IEventSource');
import ICourse = require('../interfaces/ICourse');
import ISection = require('../interfaces/ISection');
import IColorPalette = require('../interfaces/IColorPalette');

class SectionEventSource implements IEventSource {

    public static DAYS = {
        'M' : 1,
        'T': 2,
        'W' : 3,
        'Th': 4,
        'F' : 5
    };

    public id: number;
    public course_id: number;
    public events: IEvent[];
    public textColor: string;
    public borderColor: string;
    public backgroundColor: string;
    public className: string;
    public section_type: string;
    public section_capacity: number;
    public section_enrollment: number;

    constructor(section: ISection, course: ICourse, colors: IColorPalette) {
        this.id = section.id;
        this.course_id = course.id;
        this.textColor = colors.dark;
        this.borderColor = colors.dark;
        this.backgroundColor = colors.light;
        this.section_type = section.section_type;
        this.section_capacity = section.section_capacity;
        this.section_enrollment = section.section_enrollment;

        // by default, a newly constructed section is previewed until enrolled"
        this.className = "cal-unconfirmed";

        // for tooltip display
        var tooltipEnrollment: string = this.section_enrollment + "/" + this.section_capacity;

        var inputTimeFormat = "hh:mm a";
        var outputTimeFormat = "HH:mm:ss";
        this.events = [];
        for (var j = 0; j < section.meetings.length; j++) {
            var meeting = section.meetings[j];
            var days = meeting.days.split(' ');
            var numDays = days[days.length - 1] ? days.length : days.length - 1;

            // ignore last element of the result of split, which is
            // empty string due to the format of the input
            for (var k = 0; k < numDays; k++) {
                var day = days[k];
                var date = this.getAgendaDate(day);
                var startTime = Moment(meeting.start_time, inputTimeFormat).format(outputTimeFormat);
                var endTime = Moment(meeting.end_time, inputTimeFormat).format(outputTimeFormat);
                var start = date + 'T' + startTime;
                var end = date + 'T' + endTime;
                this.events.push(<any> /* TODO(dxue): fix type */ {
                    title: course.primary_listing + " " + section.name,
                    start: start,
                    end: end,
                    location: meeting.location,
                    enrollment: tooltipEnrollment,
                });
            }
        }
    }

    /**
     * gets the date of the day in the current week
     */
    private getAgendaDate(day: string): string {
        var todayOffset = Moment().isoWeekday();
        var dayOffset = SectionEventSource.DAYS[day];
        var diff: number = +(dayOffset - todayOffset);
        var date = Moment().add(diff, 'days').format('YYYY-MM-DD');
        return date;
    }
}

export = SectionEventSource;
