import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { HTMLStencilElement } from '../../stencil.core';
import { Fill, Mode } from '../../interface';
export declare class Button implements ComponentInterface {
    hostElement: HTMLStencilElement;
    disabled: boolean;
    fill: Fill;
    icon: string;
    mode: Mode;
    type: string;
    onBlur: EventEmitter<void>;
    onFocus: EventEmitter<void>;
    private get hasIconOnly();
    private handleFocus;
    private handleBlur;
    render(): any;
}
