import {
    DATE_FORMAT_COMPONENTS,
    type DateDifferenceFormatComponents,
    type DateFormatComponents,
    months,
    weekdays,
    weekdays_singles_unique
} from "./constants";

const calculateDateExt = (day: number) => {
    if (day > 10 && day < 20) return "th";
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

export const formatHelpers: Record<DateFormatComponents, (date: Date) => string> = {
    [ DATE_FORMAT_COMPONENTS.YEAR_NUMERIC ]: (date) => date.getFullYear().toString(),
    [ DATE_FORMAT_COMPONENTS.YEAR_DUAL ]: (date) => date.getFullYear().toString().slice(-2),
    [ DATE_FORMAT_COMPONENTS.MONTH_LONG ]: (date) => months[date.getMonth()],
    [ DATE_FORMAT_COMPONENTS.MONTH_SHORT ]: (date) => months[date.getMonth()].slice(0, 3),
    [ DATE_FORMAT_COMPONENTS.MONTH_SINGLE ]: (date) => months[date.getMonth()].slice(0, 1),
    [ DATE_FORMAT_COMPONENTS.MONTH_NUMERIC ]: (date) => (date.getMonth() + 1).toString(),
    [ DATE_FORMAT_COMPONENTS.MONTH_DUAL ]: (date) => (date.getMonth() + 1).toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.DAY_NUMERIC ]: (date) => date.getDate().toString(),
    [ DATE_FORMAT_COMPONENTS.DAY_DUAL ]: (date) => date.getDate().toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.DAY_EXTENSION ]: (date) => calculateDateExt(date.getDate()),
    [ DATE_FORMAT_COMPONENTS.HOUR_NUMERIC ]: (date) => date.getHours().toString(),
    [ DATE_FORMAT_COMPONENTS.HOUR_DUAL ]: (date) => date.getHours().toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.HOUR_PERIOD_NUMERIC ]: (date) => ((date.getHours() % 12) || 12).toString(),
    [ DATE_FORMAT_COMPONENTS.HOUR_PERIOD_DUAL ]: (date) => ((date.getHours() % 12) || 12).toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.HOUR_PERIOD_EXTENSION ]: (date) => date.getHours() < 12 ? "AM" : "PM",
    [ DATE_FORMAT_COMPONENTS.MINUTE_NUMERIC ]: (date) => date.getMinutes().toString(),
    [ DATE_FORMAT_COMPONENTS.MINUTE_DUAL ]: (date) => date.getMinutes().toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.SECOND_NUMERIC ]: (date) => date.getSeconds().toString(),
    [ DATE_FORMAT_COMPONENTS.SECOND_DUAL ]: (date) => date.getSeconds().toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.MILLISECOND_NUMERIC ]: (date) => date.getMilliseconds().toString(),
    [ DATE_FORMAT_COMPONENTS.MILLISECOND_TRIAD ]: (date) => date.getMilliseconds().toString().padStart(3, "0"),
    [ DATE_FORMAT_COMPONENTS.WEEKDAY_LONG ]: (date) => weekdays[date.getDay()],
    [ DATE_FORMAT_COMPONENTS.WEEKDAY_SHORT ]: (date) => weekdays[date.getDay()].slice(0, 3),
    [ DATE_FORMAT_COMPONENTS.WEEKDAY_SINGLE ]: (date) => weekdays[date.getDay()].slice(0, 1),
    [ DATE_FORMAT_COMPONENTS.WEEKDAY_SINGLE_UNIQUE ]: (date) => weekdays_singles_unique[date.getDay()],
};

export const formatHelpersUTC: Record<DateFormatComponents, (date: Date) => string> = {
    [ DATE_FORMAT_COMPONENTS.YEAR_NUMERIC ]: (date) => date.getUTCFullYear().toString(),
    [ DATE_FORMAT_COMPONENTS.YEAR_DUAL ]: (date) => date.getUTCFullYear().toString().slice(-2),
    [ DATE_FORMAT_COMPONENTS.MONTH_LONG ]: (date) => months[date.getUTCMonth()],
    [ DATE_FORMAT_COMPONENTS.MONTH_SHORT ]: (date) => months[date.getUTCMonth()].slice(0, 3),
    [ DATE_FORMAT_COMPONENTS.MONTH_SINGLE ]: (date) => months[date.getUTCMonth()].slice(0, 1),
    [ DATE_FORMAT_COMPONENTS.MONTH_NUMERIC ]: (date) => (date.getUTCMonth() + 1).toString(),
    [ DATE_FORMAT_COMPONENTS.MONTH_DUAL ]: (date) => (date.getUTCMonth() + 1).toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.DAY_NUMERIC ]: (date) => date.getUTCDate().toString(),
    [ DATE_FORMAT_COMPONENTS.DAY_DUAL ]: (date) => date.getUTCDate().toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.DAY_EXTENSION ]: (date) => calculateDateExt(date.getUTCDate()),
    [ DATE_FORMAT_COMPONENTS.HOUR_NUMERIC ]: (date) => date.getUTCHours().toString(),
    [ DATE_FORMAT_COMPONENTS.HOUR_DUAL ]: (date) => date.getUTCHours().toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.HOUR_PERIOD_NUMERIC ]: (date) => ((date.getUTCHours() % 12) || 12).toString(),
    [ DATE_FORMAT_COMPONENTS.HOUR_PERIOD_DUAL ]: (date) => ((date.getUTCHours() % 12) || 12).toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.HOUR_PERIOD_EXTENSION ]: (date) => date.getUTCHours() < 12 ? "AM" : "PM",
    [ DATE_FORMAT_COMPONENTS.MINUTE_NUMERIC ]: (date) => date.getUTCMinutes().toString(),
    [ DATE_FORMAT_COMPONENTS.MINUTE_DUAL ]: (date) => date.getUTCMinutes().toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.SECOND_NUMERIC ]: (date) => date.getUTCSeconds().toString(),
    [ DATE_FORMAT_COMPONENTS.SECOND_DUAL ]: (date) => date.getUTCSeconds().toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.MILLISECOND_NUMERIC ]: (date) => date.getUTCMilliseconds().toString(),
    [ DATE_FORMAT_COMPONENTS.MILLISECOND_TRIAD ]: (date) => date.getUTCMilliseconds().toString().padStart(3, "0"),
    [ DATE_FORMAT_COMPONENTS.WEEKDAY_LONG ]: (date) => weekdays[date.getUTCDay()],
    [ DATE_FORMAT_COMPONENTS.WEEKDAY_SHORT ]: (date) => weekdays[date.getUTCDay()].slice(0, 3),
    [ DATE_FORMAT_COMPONENTS.WEEKDAY_SINGLE ]: (date) => weekdays[date.getUTCDay()].slice(0, 1),
    [ DATE_FORMAT_COMPONENTS.WEEKDAY_SINGLE_UNIQUE ]: (date) => weekdays_singles_unique[date.getUTCDay()],
};

export type FakeDate = {
    milliseconds: number,
    seconds: number,
    minutes: number,
    hours: number,
    days: number,
    years: number
};

export const makeFakeDateFromDifference = (milliseconds: number): FakeDate => {
    return {
        milliseconds: milliseconds % 1000,
        seconds: Math.floor(milliseconds / 1000) % 60,
        minutes: Math.floor(milliseconds / (60 * 1000)) % 60,
        hours: Math.floor(milliseconds / (60 * 60 * 1000)) % 24,
        days: Math.floor(milliseconds / (24 * 60 * 60 * 1000)) % 365,
        years: Math.floor(milliseconds / (365 * 24 * 60 * 60 * 1000)),
    }
};

export const formatDifferences: Record<DateDifferenceFormatComponents, (date: FakeDate) => string> = {
    [ DATE_FORMAT_COMPONENTS.YEAR_NUMERIC ]: (date) => date.years.toString(),
    [ DATE_FORMAT_COMPONENTS.YEAR_DUAL ]: (date) => date.years.toString().slice(-2),
    [ DATE_FORMAT_COMPONENTS.DAY_NUMERIC ]: (date) => date.days.toString(),
    [ DATE_FORMAT_COMPONENTS.DAY_DUAL ]: (date) => date.days.toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.DAY_EXTENSION ]: (date) => calculateDateExt(date.days),
    [ DATE_FORMAT_COMPONENTS.HOUR_NUMERIC ]: (date) => date.hours.toString(),
    [ DATE_FORMAT_COMPONENTS.HOUR_DUAL ]: (date) => date.hours.toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.MINUTE_NUMERIC ]: (date) => date.minutes.toString(),
    [ DATE_FORMAT_COMPONENTS.MINUTE_DUAL ]: (date) => date.minutes.toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.SECOND_NUMERIC ]: (date) => date.seconds.toString(),
    [ DATE_FORMAT_COMPONENTS.SECOND_DUAL ]: (date) => date.seconds.toString().padStart(2, "0"),
    [ DATE_FORMAT_COMPONENTS.MILLISECOND_NUMERIC ]: (date) => date.milliseconds.toString(),
    [ DATE_FORMAT_COMPONENTS.MILLISECOND_TRIAD ]: (date) => date.milliseconds.toString().padStart(3, "0"),
};