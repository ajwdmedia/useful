import type {ObjectValues} from "../_helpers/type-fudgery";

export const DATE_FORMAT_COMPONENTS = {
    WEEKDAY_LONG: "weekday_long",
    WEEKDAY_SHORT: "weekday_short",
    WEEKDAY_SINGLE: "weekday_single",
    WEEKDAY_SINGLE_UNIQUE: "weekday_single_unique",
    YEAR_NUMERIC: "year_numeric",
    YEAR_DUAL: "year_dual",
    MONTH_LONG: "month_long",
    MONTH_SHORT: "month_short",
    MONTH_SINGLE: "month_single",
    MONTH_NUMERIC: "month_numeric",
    MONTH_DUAL: "month_dual",
    DAY_NUMERIC: "day_numeric",
    DAY_DUAL: "day_dual",
    DAY_EXTENSION: "day_extension",
    HOUR_NUMERIC: "hour_numeric",
    HOUR_DUAL: "hour_dual",
    HOUR_PERIOD_NUMERIC: "hour_period_numeric",
    HOUR_PERIOD_DUAL: "hour_period_dual",
    HOUR_PERIOD_EXTENSION: "hour_extension",
    MINUTE_NUMERIC: "minute_numeric",
    MINUTE_DUAL: "minute_dual",
    SECOND_NUMERIC: "second_numeric",
    SECOND_DUAL: "second_dual",
    MILLISECOND_NUMERIC: "millisecond_numeric",
    MILLISECOND_TRIAD: "millisecond_triad"
} as const;

export type DateFormatComponents = ObjectValues<typeof DATE_FORMAT_COMPONENTS>;

export const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

export const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

export const weekdays_singles_unique = [
    "U", "M", "T", "W", "H", "F", "S"
];

