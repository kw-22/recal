import SearchCtrl = require('./SearchCtrl');
import CalendarCtrl = require('./CalendarCtrl');
import ScheduleCtrl = require('./ScheduleCtrl');
import SemCtrl = require('./SemCtrl');
import MainCtrl = require('./MainCtrl');
import Module = require('../Module');

var niceControllers = new Module('niceControllers', []);
niceControllers.addController('SearchCtrl', SearchCtrl);
niceControllers.addController('CalendarCtrl', CalendarCtrl);
niceControllers.addController('ScheduleCtrl', ScheduleCtrl);
niceControllers.addController('SemCtrl', SemCtrl);
niceControllers.addController('MainCtrl', MainCtrl);

export = niceControllers;
