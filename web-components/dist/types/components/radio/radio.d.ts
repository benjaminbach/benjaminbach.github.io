import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { RadioChangeEventInterface } from './radio.interface';
export declare class Radio implements ComponentInterface {
    private inputId;
    private buttonElement?;
    /**
     * The host element.
     * @type {HTMLElement}
     */
    el: HTMLElement;
    /**
     * If `true`, the radio is selected.
     * @type {boolean}
     */
    checked: boolean;
    checkedChanged(isChecked: boolean): void;
    /**
     * If `true`, the user cannot interact with the radio component.
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * The name of the hidden input, which is submitted with the form data.
     * @type {string}
     */
    name: string;
    /**
     * The value of the radio, which is submitted with the form data.
     * @type {string}
     */
    value: string;
    /**
     * Emitted when the checked property has changed.
     */
    onChange: EventEmitter<RadioChangeEventInterface>;
    /**
     * Emitted when the radio component has focus.
     */
    onFocus: EventEmitter<void>;
    /**
     * Emitted when the radio lost focus.
     */
    onBlur: EventEmitter<void>;
    /**
     * Handles clicks on the radio component.
     */
    private handleClick;
    /**
     * Kicks in when the radio components gains focus.
     */
    private handleFocus;
    /**
     * Kicks in when the radio component loses focus.
     */
    private handleBlur;
    /**
     * Focuses the radio component.
     */
    private setFocus;
    render(): any;
}
