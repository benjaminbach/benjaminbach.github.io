import { Color } from '../../interface';
export declare class Item {
    /**
     * The color to use from the pax color palette.
     * Options are: `"success"`, `"warning"`, `"danger"`, `"dark"`
     */
    color?: Color;
    render(): any;
}
