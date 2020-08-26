export const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
export const hasShadowDom = (el) => {
    return !!el.shadowRoot && !!el.attachShadow;
};
export const findItemLabel = (componentEl) => {
    const itemEl = componentEl.closest('pax-item');
    if (itemEl) {
        return itemEl.querySelector('pax-label');
    }
    return null;
};
export const renderHiddenInput = (always, container, name, value, disabled) => {
    if (always || hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
