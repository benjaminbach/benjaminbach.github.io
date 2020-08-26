export type CssClassMap = { [className: string]: boolean };

export type Color = PredefinedColors | string;
export type PredefinedColors = 'success' | 'warning' | 'danger' | 'dark' | 'light' | 'ghost';

export type DatepickerMode = PredefinedDatepickerModes | string;
export type PredefinedDatepickerModes = 'days' | 'months' | 'years';

export type Fill = PredefinedFills | string;
export type PredefinedFills = 'outline' | 'clear';

export type Locale = PredefinedLocale | string;
export type PredefinedLocale = 'de' | 'fr' | 'it'; // 'de-CH', 'fr-CH' or 'it-CH' do not exist in date-fns

export type Mode = PredefinedModes | string;
export type PredefinedModes = 'light' | 'dark';

export type TextFieldTypes = 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time';
