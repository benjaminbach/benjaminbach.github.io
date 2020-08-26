import { a as patchEsm, b as bootstrapLazy } from './core-8a28aff9.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["pax-badge",[[1,"pax-badge",{"color":[1]}]]],["pax-button",[[1,"pax-button",{"disabled":[4],"fill":[1],"icon":[1],"mode":[1],"type":[1]}]]],["pax-card",[[1,"pax-card",{"border":[1],"header":[1]}]]],["pax-checkbox",[[1,"pax-checkbox",{"checked":[1028],"disabled":[4],"name":[1],"value":[1]}]]],["pax-col",[[1,"pax-col"]]],["pax-datepicker",[[1,"pax-datepicker",{"error":[1],"localeProp":[1,"locale"],"placeholder":[1],"dates":[32],"daysOfWeek":[32],"mode":[32],"months":[32],"pickerHidden":[32],"selectedDate":[32],"years":[32]}]]],["pax-grid",[[1,"pax-grid"]]],["pax-headline",[[1,"pax-headline",{"level":[2]}]]],["pax-icon",[[1,"pax-icon"]]],["pax-input",[[2,"pax-input",{"disabled":[4],"readonly":[4],"type":[1],"value":[1025]}]]],["pax-item",[[1,"pax-item",{"color":[1]}]]],["pax-label",[[1,"pax-label",{"for":[1],"disabled":[4],"wrap":[4],"required":[4],"suffix":[1]}]]],["pax-link",[[1,"pax-link",{"disabled":[4],"emphasized":[4],"muted":[4],"href":[1]}]]],["pax-list",[[0,"pax-list",{"inset":[4],"lines":[4]}]]],["pax-message-strip",[[1,"pax-message-strip",{"color":[1],"icon":[1]}]]],["pax-panel",[[1,"pax-panel",{"open":[1028]}]]],["pax-radio",[[1,"pax-radio",{"checked":[1028],"disabled":[4],"name":[1],"value":[1]}]]],["pax-row",[[1,"pax-row"]]],["pax-text-field",[[1,"pax-text-field",{"isFocused":[32]},[[0,"inputFocused","inputFocusedHandler"],[0,"inputBlur","inputBlurHandler"]]]]],["pax-textarea",[[2,"pax-textarea",{"disabled":[4],"placeholder":[1],"readonly":[4],"rows":[2],"value":[1025]}]]]], options);
  });
};

export { defineCustomElements };
