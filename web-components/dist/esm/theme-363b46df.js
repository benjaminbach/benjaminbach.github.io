/**
 * Create the color class for the component based color passed in.
 *
 * @param {Color | undefined | null} color
 * @return {CssClassMap | undefined}
 */
const createColorClass = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        [`pax-color--${color}`]: true
    } : undefined;
};

export { createColorClass as c };
