import { h, Host } from "@stencil/core";
import { addMonths, addYears, eachDayOfInterval, eachMonthOfInterval, eachYearOfInterval, endOfMonth, endOfWeek, endOfYear, format, getMonth, getYear, isSameDay, isValid, parse, set, startOfMonth, startOfWeek, startOfYear, subMonths, subYears } from 'date-fns';
import { de, fr, it } from 'date-fns/locale';
export class Datepicker {
    constructor() {
        this.dateContext = new Date();
        this.today = new Date();
        this.localeProp = 'de';
        this.placeholder = 'TT.MM.JJJJ';
        this.dates = [];
        this.daysOfWeek = []; // M, D, M, D, F, S, S
        this.mode = 'days';
        this.months = [];
        this.pickerHidden = true;
        this.years = [];
        this.hidePicker = () => {
            this.pickerHidden = true;
            this.resetPicker();
        };
        this.showPicker = () => {
            this.parseDate();
            this.pickerHidden = false;
        };
        this.togglePicker = () => {
            if (this.pickerHidden)
                this.showPicker();
            else
                this.hidePicker();
        };
        this.onOutsideClick = (e) => {
            if (this.el.contains(e.target))
                return;
            else
                this.hidePicker();
        };
        this.handleModeSwitch = () => {
            if (this.mode === 'days') {
                this.renderYears();
                this.mode = 'years';
            }
            else if (this.mode === 'months' || this.mode === 'years') {
                this.renderDates();
                this.renderMonths();
                this.mode = 'days';
            }
        };
        this.handlePrev = () => {
            if (this.mode === 'days') {
                this.dateContext = subMonths(this.dateContext, 1);
                this.renderDates();
            }
            else if (this.mode === 'months') {
                this.dateContext = subYears(this.dateContext, 1);
                this.renderMonths();
            }
            else if (this.mode === 'years') {
                this.dateContext = subYears(this.dateContext, 24);
                this.renderYears();
            }
        };
        this.handleNext = () => {
            if (this.mode === 'days') {
                this.dateContext = addMonths(this.dateContext, 1);
                this.renderDates();
            }
            else if (this.mode === 'months') {
                this.dateContext = addYears(this.dateContext, 1);
                this.renderMonths();
            }
            else if (this.mode === 'years') {
                this.dateContext = addYears(this.dateContext, 24);
                this.renderYears();
            }
        };
        this.handleDateSelection = (date) => {
            this.selectedDate = date;
            this.hidePicker();
            this.renderDates();
        };
        this.handleMonthSelection = (date) => {
            this.dateContext = set(this.dateContext, {
                month: getMonth(date)
            });
            this.renderDates();
            this.mode = 'days';
        };
        this.handleYearSelection = (date) => {
            this.dateContext = set(this.dateContext, {
                year: getYear(date)
            });
            this.renderMonths();
            this.mode = 'months';
        };
        this.getSelectedDate = () => {
            if (this.selectedDate)
                return format(this.selectedDate, 'dd.MM.yyyy', { locale: this.locale });
            else
                return '';
        };
        this.getModeTitle = () => {
            if (this.mode === 'days')
                return `${this.formatMonth(this.dateContext, 'MMMM')}, ${this.formatYear(this.dateContext)}`;
            else if (this.mode === 'months')
                return `${this.formatYear(this.dateContext)}`;
            else if (this.mode === 'years')
                return `${this.formatYear(this.years[0].date)} - ${this.formatYear(this.years[this.years.length - 1].date)}`;
        };
    }
    componentWillLoad() {
        // set locale
        if (this.localeProp === 'de')
            this.locale = de;
        else if (this.localeProp === 'fr')
            this.locale = fr;
        else if (this.localeProp === 'it')
            this.locale = it;
        this.renderDaysOfWeek();
        this.renderDates();
        this.renderMonths();
        this.renderYears();
        this.el.ownerDocument.addEventListener('mousedown', this.onOutsideClick, false);
    }
    componentDidUnload() {
        this.el.ownerDocument.removeEventListener('mousedown', this.onOutsideClick, false);
    }
    parseDate() {
        if (this.dateInput.value) {
            const date = parse(this.dateInput.value, 'dd.MM.yyyy', this.dateContext, { locale: this.locale });
            if (isValid(date)) {
                this.dateContext = date;
                this.renderDates();
            }
        }
    }
    resetPicker() {
        this.mode = 'days';
        this.dateContext = this.selectedDate ? this.selectedDate : this.today;
        this.renderDates();
        this.renderMonths();
        this.renderYears();
    }
    /**
     * Renders days of week for labels.
     */
    renderDaysOfWeek() {
        const days = eachDayOfInterval({
            start: startOfWeek(this.today, { locale: this.locale }),
            end: endOfWeek(this.today, { locale: this.locale })
        });
        for (let i = 0; i < days.length; i++) {
            this.daysOfWeek = [...this.daysOfWeek, format(days[i], 'EEEEE', { locale: this.locale })];
        }
    }
    /**
     * Renders visible days for a month.
     *
     * Days in the start and end of a month (padders) are visible, but visually muted.
     * Today and selected date are highlighted.
     */
    renderDates() {
        this.dates = [];
        const days = eachDayOfInterval({
            start: startOfWeek(startOfMonth(this.dateContext), { locale: this.locale }),
            end: endOfWeek(endOfMonth(this.dateContext), { locale: this.locale })
        });
        for (let i = 0; i < days.length; i++) {
            let className = '';
            if (getMonth(days[i]) === getMonth(this.dateContext)) {
                if (isSameDay(days[i], this.today)) {
                    className = 'today';
                }
                else if (isSameDay(days[i], this.selectedDate)) {
                    className = 'selected';
                }
            }
            else {
                className = 'padder';
            }
            this.dates = [...this.dates, {
                    date: days[i],
                    className
                }];
        }
    }
    /**
     * Renders years for a given interval of 24 years.
     *
     * Initially the current year is at the fourth position.
     */
    renderYears() {
        this.years = [];
        const years = eachYearOfInterval({
            start: subYears(this.dateContext, 4),
            end: addYears(this.dateContext, 19)
        });
        for (let i = 0; i < years.length; i++) {
            let className = '';
            if (getYear(years[i]) === getYear(this.today)) {
                className = 'today';
            }
            else if (getYear(years[i]) === getYear(this.dateContext)) {
                className = 'selected';
            }
            this.years = [...this.years, {
                    date: years[i],
                    className
                }];
        }
    }
    /**
     * Renders all months for a given year.
     */
    renderMonths() {
        this.months = [];
        const months = eachMonthOfInterval({
            start: startOfYear(this.dateContext),
            end: endOfYear(this.dateContext)
        });
        for (let i = 0; i < months.length; i++) {
            let className = '';
            if (getYear(months[i]) === getYear(this.today) &&
                getMonth(months[i]) === getMonth(this.today)) {
                className = 'today';
            }
            else if (getYear(months[i]) === getYear(this.dateContext) &&
                getMonth(months[i]) === getMonth(this.dateContext)) {
                className = 'selected';
            }
            this.months = [...this.months, {
                    date: months[i],
                    className
                }];
        }
    }
    formatDayOfMonth(date, pattern = 'd') {
        return format(date, pattern, { locale: this.locale });
    }
    formatMonth(date, pattern = 'MMM') {
        return format(date, pattern, { locale: this.locale }).toUpperCase();
    }
    formatYear(date, pattern = 'y') {
        return format(date, pattern, { locale: this.locale });
    }
    render() {
        const weekdays = (h("ol", { class: "weekdays" }, this.daysOfWeek.map((item) => h("li", null, item))));
        const dates = (h("ol", { class: "dates" }, this.dates.map((item) => h("li", { class: item.className, onClick: () => this.handleDateSelection(item.date) }, this.formatDayOfMonth(item.date)))));
        const months = (h("ol", { class: "months" }, this.months.map((item) => h("li", { class: item.className, onClick: () => this.handleMonthSelection(item.date) }, this.formatMonth(item.date)))));
        const years = (h("ol", { class: "years" }, this.years.map((item) => h("li", { class: item.className, onClick: () => this.handleYearSelection(item.date) }, this.formatYear(item.date)))));
        return (h(Host, { class: {
                'has-error': this.error !== undefined,
                'has-focus': !this.pickerHidden
            } },
            h("input", { type: "text", placeholder: this.placeholder, onFocus: this.hidePicker, value: this.getSelectedDate(), ref: (el) => this.dateInput = el }),
            h("button", { class: "toggle", onClick: this.togglePicker },
                h("svg", { class: "icon-cal", viewBox: "0 0 19 17" },
                    h("path", { d: "M447.511,291.051v3.75h-3.75v-3.75h-6.5v3.75h-3.75v-3.75h-2.5V306.8h19v-15.75Zm1.25,14.5h-16.5v-8h16.5Zm-14-15.75h1.25v3.75h-1.25Zm10.25,0h1.25v3.75h-1.25Z", transform: "translate(-431.011 -289.801)" }))),
            this.error !== undefined && this.error.length > 0
                ? h("div", { class: "error-message" }, this.error)
                : null,
            h("div", { class: "picker", hidden: this.pickerHidden },
                h("div", { class: "action-bar" },
                    h("button", { class: "mode-title", onClick: this.handleModeSwitch },
                        this.getModeTitle(),
                        h("svg", { viewBox: "0 0 11 6.202", class: {
                                'icon-dropdown': true,
                                'is-active': this.mode !== 'days'
                            } },
                            h("g", { transform: "translate(0 6.202) rotate(-90)" },
                                h("path", { d: "M.168,5.041A.4.4,0,0,1,.2,5L5.016.186a.7.7,0,0,1,.989.039A.706.706,0,0,1,6,1.185L1.689,5.495,6,9.8a.7.7,0,1,1-.989.99l-4.8-4.8a.7.7,0,0,1-.038-.949Z", transform: "translate(0 0)" })))),
                    h("button", { class: "prev", onClick: this.handlePrev },
                        h("svg", { class: "icon-prev", viewBox: "0 0 6.202 11" },
                            h("path", { d: "M.168,5.041A.4.4,0,0,1,.2,5L5.016.186a.7.7,0,0,1,.989.039A.706.706,0,0,1,6,1.185L1.689,5.495,6,9.8a.7.7,0,1,1-.989.99l-4.8-4.8a.7.7,0,0,1-.038-.949Z", transform: "translate(0 0)" }))),
                    h("button", { class: "next", onClick: this.handleNext },
                        h("svg", { class: "icon-next", viewBox: "0 0 6.202 11" },
                            h("path", { d: "M6.035,5.041A.4.4,0,0,0,6,5L1.187.186A.7.7,0,0,0,.2.225.706.706,0,0,0,.2,1.185l4.309,4.31L.2,9.8a.7.7,0,1,0,.989.99L6,5.99a.7.7,0,0,0,.038-.949Z", transform: "translate(0 0)" })))),
                this.mode === 'days' ? weekdays : null,
                this.mode === 'days' ? dates : null,
                this.mode === 'months' ? months : null,
                this.mode === 'years' ? years : null)));
    }
    static get is() { return "pax-datepicker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./datepicker.css"]
    }; }
    static get styleUrls() { return {
        "$": ["datepicker.css"]
    }; }
    static get properties() { return {
        "error": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "error",
            "reflect": false
        },
        "localeProp": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Locale",
                "resolved": "string",
                "references": {
                    "Locale": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "locale",
            "reflect": false,
            "defaultValue": "'de'"
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "'TT.MM.JJJJ'"
        }
    }; }
    static get states() { return {
        "dates": {},
        "daysOfWeek": {},
        "mode": {},
        "months": {},
        "pickerHidden": {},
        "selectedDate": {},
        "years": {}
    }; }
    static get elementRef() { return "el"; }
}
