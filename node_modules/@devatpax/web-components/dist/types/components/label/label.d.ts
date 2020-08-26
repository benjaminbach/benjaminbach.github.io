export declare class Label {
    el: HTMLElement;
    for?: string;
    disabled?: boolean;
    wrap?: boolean;
    required?: boolean;
    suffix?: string;
    /**
     * When the label is clicked it tries to focus the element with the id that
     * matches the value of the for property.
     *
     * This behavior is prevented when the label is disabled.
     */
    onClick(): void;
    render(): any;
}
