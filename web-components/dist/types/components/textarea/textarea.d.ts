import { ComponentInterface } from '../../stencil.core';
export declare class Textarea implements ComponentInterface {
    disabled: boolean;
    placeholder: string;
    readonly: boolean;
    rows: number;
    value?: string | null;
    render(): any;
}
