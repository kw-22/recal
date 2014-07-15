var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../CoreUI/FocusableView'], function(require, exports, FocusableView) {
    var TableViewCell = (function (_super) {
        __extends(TableViewCell, _super);
        function TableViewCell() {
            _super.apply(this, arguments);
            this._indexPath = null;
            this._selected = false;
        }
        Object.defineProperty(TableViewCell.prototype, "indexPath", {
            get: function () {
                return this._indexPath;
            },
            set: function (newValue) {
                this._indexPath = newValue;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TableViewCell.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (value) {
                this._selected = value;
                if (this._selected) {
                    this.highlight();
                } else {
                    this.unhighlight();
                }
            },
            enumerable: true,
            configurable: true
        });

        TableViewCell.prototype.highlight = function () {
        };

        TableViewCell.prototype.unhighlight = function () {
        };
        return TableViewCell;
    })(FocusableView);
    
    return TableViewCell;
});