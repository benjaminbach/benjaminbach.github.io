import { ComponentInterface } from '../../stencil.core';
import { DatepickerMode, Locale } from '../../interface';
export declare class Datepicker implements ComponentInterface {
    private dateContext;
    private dateInput;
    private today;
    private locale;
    el: HTMLElement;
    error: string;
    localeProp: Locale;
    placeholder: string;
    dates: {
        date: Date;
        className: string;
    }[];
    daysOfWeek: string[];
    mode: DatepickerMode;
    months: {
        date: Date;
        className: string;
    }[];
    pickerHidden: boolean;
    selectedDate: Date;
    years: {
        date: Date;
        className: string;
    }[];
    componentWillLoad(): void;
    componentDidUnload(): void;
    private hidePicker;
    private showPicker;
    private togglePicker;
    private parseDate;
    private resetPicker;
    private onOutsideClick;
    private handleModeSwitch;
    private handlePrev;
    private handleNext;
    private handleDateSelection;
    private handleMonthSelection;
    private handleYearSelection;
    private getSelectedDate;
    /**
     * Renders days of week for labels.
     */
    private renderDaysOfWeek;
    /**
     * Renders visible days for a month.
     *
     * Days in the start and end of a month (padders) are visible, but visually muted.
     * Today and selected date are highlighted.
     */
    private renderDates;
    /**
     * Renders years for a given interval of 24 years.
     *
     * Initially the current year is at the fourth position.
     */
    private renderYears;
    /**
     * Renders all months for a given year.
     */
    private renderMonths;
    private getModeTitle;
    private formatDayOfMonth;
    private formatMonth;
    private formatYear;
    render(): any;
}
