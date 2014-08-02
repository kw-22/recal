/// <reference path="../../typings/tsd.d.ts" />
import $ = require('jquery');

import BrowserEvents = require('../Core/BrowserEvents');
import GlobalCssClass = require('../Core/GlobalCssClass');
import IFocusableView = require('./IFocusableView');
import View = require('./View');

class FocusableView extends View implements IFocusableView
{
    private _hasFocus = false;
    constructor($element: JQuery)
    {
        super($element);
        this._$el.attr('tabindex', 0);
        this._$el.removeClass(GlobalCssClass.invisibleFocus);
        this._$el.find('*').each((index: number, child: any) => 
        {
            var $child = $(child);
            if ($child.attr('tabindex') === undefined || $child.attr('tabindex') === null)
            {
                $child.attr('tabindex', -1); // this allows the child to be focused but not be in the tab order
                $child.addClass(GlobalCssClass.invisibleFocus);
                // TODO add to css: { outline-color: transparent; outline-style: none; }
            }
        });
        this.attachEventHandler(BrowserEvents.focusIn, (ev : JQueryEventObject) => 
        {
            if (this.containsJQueryElement($(document.activeElement)))
            {
                this.didFocus();
            }
        });
        this.attachEventHandler(BrowserEvents.focusOut, (ev : JQueryEventObject) => 
        {
            if (!this.containsJQueryElement($(document.activeElement)))
            {
                this.didBlur();
            }
        });
    }
    get hasFocus() : boolean
    {
        return this._hasFocus;
    }

    public didFocus() : void
    {
        this._hasFocus = true;
    }
    public didBlur() : void
    {
        this._hasFocus = false;
    }
}
export = FocusableView;
