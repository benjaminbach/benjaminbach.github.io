/**
 * Create the color class for the component based color passed in.
 *
 * @param {Color | undefined | null} color
 * @return {CssClassMap | undefined}
 */
var createColorClass = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {},
        _a["pax-color--" + color] = true,
        _a) : undefined;
};
export { createColorClass as c };
