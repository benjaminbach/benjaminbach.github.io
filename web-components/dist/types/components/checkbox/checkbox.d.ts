import { EventEmitter } from '../../stencil.core';
import { CheckboxChangeEventInterface } from './checkbox.interface';
export declare class Checkbox {
    private inputId;
    private buttonElement?;
    /**
     * The host element.
     * @type {HTMLElement}
     */
    el: HTMLElement;
    /**
     * If `true`, the checkbox is selected.
     * @type {boolean}
     */
    checked: boolean;
    checkedChanged(isChecked: boolean): void;
    /**
     * If `true`, the user cannot interact with the checkbox component.
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * The name of the hidden input, which is submitted with the form data.
     * @type {string}
     */
    name: string;
    /**
     * The value of the checkbox, which is submitted with the form data.
     * @type {string}
     */
    value: string;
    /**
     * Emitted when the checked property has changed.
     */
    onChange: EventEmitter<CheckboxChangeEventInterface>;
    /**
     * Emitted when the checkbox component has focus.
     */
    onFocus: EventEmitter<void>;
    /**
     * Emitted when the checkbox lost focus.
     */
    onBlur: EventEmitter<void>;
    /**
     * Handles clicks on the checkbox component.
     */
    private handleClick;
    /**
     * Kicks in when the checkbox components gains focus.
     */
    private handleFocus;
    /**
     * Kicks in when the checkbox component loses focus.
     */
    private handleBlur;
    /**
     * Focuses the checkbox component.
     */
    private setFocus;
    /**
     * Returns the markup for the checkbox component.
     *
     * Note that the checkbox is not a real checkbox input (`<input type="checkbox"/>`),
     * but rather a combination of a button (the visual part of the checkbox) and
     * an hidden input element (is submitted with the form data).
     *
     * @return {any}
     */
    render(): any;
}
