import { ComponentInterface } from '../../stencil.core';
import { TextFieldTypes } from '../../interface';
export declare class Input implements ComponentInterface {
    disabled: boolean;
    readonly: boolean;
    type: TextFieldTypes;
    value?: string | null;
    render(): any;
}
