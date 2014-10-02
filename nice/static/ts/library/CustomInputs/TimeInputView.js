/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Core/BrowserEvents', '../DateTime/DateTime', '../CoreUI/FocusableView', '../Core/InvalidArgumentException'], function(require, exports, BrowserEvents, DateTime, FocusableView, InvalidArgumentException) {
    var TimeSelectionComponent;
    (function (TimeSelectionComponent) {
        TimeSelectionComponent[TimeSelectionComponent["hours"] = 0] = "hours";
        TimeSelectionComponent[TimeSelectionComponent["minutes"] = 1] = "minutes";
        TimeSelectionComponent[TimeSelectionComponent["periods"] = 2] = "periods";
    })(TimeSelectionComponent || (TimeSelectionComponent = {}));
    var KeyCode;
    (function (KeyCode) {
        KeyCode[KeyCode["enter"] = 13] = "enter";
        KeyCode[KeyCode["tab"] = 9] = "tab";
        KeyCode[KeyCode["zero"] = 48] = "zero";
        KeyCode[KeyCode["one"] = 49] = "one";
        KeyCode[KeyCode["two"] = 50] = "two";
        KeyCode[KeyCode["three"] = 51] = "three";
        KeyCode[KeyCode["four"] = 52] = "four";
        KeyCode[KeyCode["five"] = 53] = "five";
        KeyCode[KeyCode["six"] = 54] = "six";
        KeyCode[KeyCode["seven"] = 55] = "seven";
        KeyCode[KeyCode["eight"] = 56] = "eight";
        KeyCode[KeyCode["nine"] = 57] = "nine";
        KeyCode[KeyCode["zeroNumPad"] = 96] = "zeroNumPad";
        KeyCode[KeyCode["oneNumPad"] = 97] = "oneNumPad";
        KeyCode[KeyCode["twoNumPad"] = 98] = "twoNumPad";
        KeyCode[KeyCode["threeNumPad"] = 99] = "threeNumPad";
        KeyCode[KeyCode["fourNumPad"] = 100] = "fourNumPad";
        KeyCode[KeyCode["fiveNumPad"] = 101] = "fiveNumPad";
        KeyCode[KeyCode["sixNumPad"] = 102] = "sixNumPad";
        KeyCode[KeyCode["sevenNumPad"] = 103] = "sevenNumPad";
        KeyCode[KeyCode["eightNumPad"] = 104] = "eightNumPad";
        KeyCode[KeyCode["nineNumPad"] = 105] = "nineNumPad";
        KeyCode[KeyCode["a"] = 65] = "a";
        KeyCode[KeyCode["p"] = 80] = "p";
    })(KeyCode || (KeyCode = {}));

    var TimeInputView = (function (_super) {
        __extends(TimeInputView, _super);
        function TimeInputView($element, cssClass) {
            var _this = this;
            _super.call(this, $element, cssClass);
            this._value = null;
            this._selectedComponent = 0 /* hours */;
            this._numericKeyStrokesCount = 0;
            this._hoursCharactersBuffer = null;
            this._minutesCharactersBuffer = null;
            this._periodsString = null;
            if (!$element.is('input')) {
                throw new InvalidArgumentException("TimeInputView can only be constructed from a HTML input element.");
            }
            this._value = this._$el.data("logical_value") || DateTime.fromUnix(0);
            this.attachEventHandler(BrowserEvents.mouseDown, function (ev) {
                ev.preventDefault();
            });
            this.attachEventHandler(BrowserEvents.keyDown, function (ev) {
                var keyCode = ev.keyCode || ev.which;
                switch (keyCode) {
                    case 9 /* tab */:
                        _this.handleTabCharacter(ev);
                        break;
                    case 48 /* zero */:
                    case 96 /* zeroNumPad */:
                    case 49 /* one */:
                    case 97 /* oneNumPad */:
                    case 50 /* two */:
                    case 98 /* twoNumPad */:
                    case 51 /* three */:
                    case 99 /* threeNumPad */:
                    case 52 /* four */:
                    case 100 /* fourNumPad */:
                    case 53 /* five */:
                    case 101 /* fiveNumPad */:
                    case 54 /* six */:
                    case 102 /* sixNumPad */:
                    case 55 /* seven */:
                    case 103 /* sevenNumPad */:
                    case 56 /* eight */:
                    case 104 /* eightNumPad */:
                    case 57 /* nine */:
                    case 105 /* nineNumPad */:
                        _this.handleNumericCharacters(ev);
                        break;
                    case 65 /* a */:
                    case 80 /* p */:
                        _this.handlePeriodCharacter(ev);
                        break;
                    case 13 /* enter */:
                        _this.handleEnterCharacter(ev);
                        break;
                    default:
                        ev.preventDefault();
                }
            });
            this.refresh();
        }
        Object.defineProperty(TimeInputView.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
                this.refresh();
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(TimeInputView.prototype, "inputElement", {
            get: function () {
                return this._$el[0];
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TimeInputView.prototype, "selectedComponent", {
            get: function () {
                return this._selectedComponent;
            },
            set: function (value) {
                this._selectedComponent = value;
                this.refreshSelection();
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(TimeInputView.prototype, "numericKeyStrokesCount", {
            get: function () {
                return this._numericKeyStrokesCount;
            },
            set: function (value) {
                this._numericKeyStrokesCount = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TimeInputView.prototype, "hoursCharactersBuffer", {
            get: function () {
                return this._hoursCharactersBuffer;
            },
            set: function (value) {
                if (value.length === 1) {
                    this._hoursCharactersBuffer = '0' + value;
                } else {
                    this._hoursCharactersBuffer = value;
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TimeInputView.prototype, "minutesCharactersBuffer", {
            get: function () {
                return this._minutesCharactersBuffer;
            },
            set: function (value) {
                if (value.length === 1) {
                    this._minutesCharactersBuffer = '0' + value;
                } else {
                    this._minutesCharactersBuffer = value;
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TimeInputView.prototype, "periodsString", {
            get: function () {
                return this._periodsString;
            },
            set: function (value) {
                this._periodsString = value;
            },
            enumerable: true,
            configurable: true
        });

        TimeInputView.prototype.handleEnterCharacter = function (ev) {
            // don't prevent default
        };

        TimeInputView.prototype.handleNumericCharacters = function (ev) {
            ev.preventDefault();
            if (this.selectedComponent === 2 /* periods */) {
                return;
            }
            ++this.numericKeyStrokesCount;
            var inputChar = String.fromCharCode(ev.keyCode || ev.which);
            if (this.selectedComponent === 0 /* hours */) {
                this.hoursCharactersBuffer = this.hoursCharactersBuffer.charAt(1) + inputChar;
                if (!this.validateHoursBuffer()) {
                    --this.numericKeyStrokesCount;
                }
            } else {
                this.minutesCharactersBuffer = this.minutesCharactersBuffer.charAt(1) + inputChar;
                if (!this.validateMinutesBuffer()) {
                    --this.numericKeyStrokesCount;
                }
            }
            this.refreshWithCharBuffer();
            this.refreshSelection();
            if (this.numericKeyStrokesCount >= 2) {
                this.numericKeyStrokesCount = 0;
                ++this.selectedComponent;
            }
        };

        TimeInputView.prototype.handlePeriodCharacter = function (ev) {
            ev.preventDefault();
            if (this.selectedComponent !== 2 /* periods */) {
                return;
            }
            var inputChar = String.fromCharCode(ev.keyCode || ev.which).toLowerCase();
            if (inputChar === 'a') {
                this.periodsString = "AM";
            } else if (inputChar === 'p') {
                this.periodsString = "PM";
            }
            this.refreshWithCharBuffer();
            this.refreshSelection();
        };

        TimeInputView.prototype.handleTabCharacter = function (ev) {
            this.numericKeyStrokesCount = 0;
            switch (this.selectedComponent) {
                case 0 /* hours */:
                    if (!this.validateHoursBuffer()) {
                        this.hoursCharactersBuffer = "08";
                    }
                    break;
                case 1 /* minutes */:
                    if (!this.validateMinutesBuffer()) {
                        this.minutesCharactersBuffer = "00";
                    }
                    break;
            }
            this.refreshWithCharBuffer();
            if (ev.shiftKey) {
                if (this.selectedComponent != 0 /* hours */) {
                    --this.selectedComponent;
                    ev.preventDefault();
                }
            } else {
                if (this.selectedComponent != 2 /* periods */) {
                    ++this.selectedComponent;
                    ev.preventDefault();
                }
            }
        };

        TimeInputView.prototype.validateHoursBuffer = function () {
            return parseInt(this.hoursCharactersBuffer) <= 12 && parseInt(this.hoursCharactersBuffer) > 0;
        };
        TimeInputView.prototype.validateMinutesBuffer = function () {
            return parseInt(this.minutesCharactersBuffer) < 60;
        };

        TimeInputView.prototype.refresh = function () {
            this.hoursCharactersBuffer = (this.value.hours % 12).toString();
            this.minutesCharactersBuffer = this.value.minutes.toString();
            this.periodsString = parseInt((this.value.hours / 12).toString()) === 1 ? 'PM' : 'AM';
            if (this.periodsString === 'PM' && this.hoursCharactersBuffer === '00') {
                this.hoursCharactersBuffer = '12'; // handle 12PM case, as 12 % 12 = 0
            }
            this._$el.data("logical_value", this.value);
            this.refreshWithCharBuffer();
        };

        TimeInputView.prototype.save = function () {
            var hours = parseInt(this.hoursCharactersBuffer);
            var minutes = parseInt(this.minutesCharactersBuffer);
            if (this.periodsString === 'PM' && hours != 12) {
                hours += 12; // we prevent bubbling in momentjs via DateTime module.
            }
            this.value.hours = hours;
            this.value.minutes = minutes;
        };

        TimeInputView.prototype.refreshSelection = function () {
            // 3 because there is a space or a colon. -1 makes sure we don't select that part.
            this.inputElement.setSelectionRange(this.selectedComponent * 3, (this.selectedComponent + 1) * 3 - 1);
        };
        TimeInputView.prototype.refreshWithCharBuffer = function () {
            this._$el.val(this.hoursCharactersBuffer + ":" + this.minutesCharactersBuffer + " " + this.periodsString);
        };

        TimeInputView.prototype.didFocus = function () {
            _super.prototype.didFocus.call(this);
            this.refreshSelection();
        };

        TimeInputView.prototype.didBlur = function () {
            _super.prototype.didBlur.call(this);
            this.save();
        };
        return TimeInputView;
    })(FocusableView);

    
    return TimeInputView;
});
//# sourceMappingURL=TimeInputView.js.map