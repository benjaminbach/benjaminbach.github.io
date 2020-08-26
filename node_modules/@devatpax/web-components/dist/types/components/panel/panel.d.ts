export declare class Panel {
    /**
     * If `true`, the panel is expanded.
     * @type {boolean}
     */
    open: boolean;
    /**
     * Handles clicks on the panel header.
     * @return {boolean}
     */
    onHeaderClick(): boolean;
    render(): any;
}
