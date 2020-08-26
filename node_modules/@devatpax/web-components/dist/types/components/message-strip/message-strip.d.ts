import { Color } from '../../interface';
export declare class MessageStrip {
    /**
     * The color to use from the pax color palette.
     * Options are: `"success"`, `"warning"`, `"danger"`, `"dark"`, `"light"`, `"ghost"`
     */
    color?: Color;
    /**
     * The icon to use.
     * Options are: `"success"`, `"warning"`, `"danger"``
     */
    icon?: string;
    render(): any;
}
