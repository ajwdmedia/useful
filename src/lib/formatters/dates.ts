import type {DateFormatComponents} from "./constants";
import {DATE_FORMAT_COMPONENTS, months, weekdays, weekdays_singles_unique} from "./constants";

const calculateDateExt = (day: number) => {
    if (day > 10 && day < 20) return "th";
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

const formatHelpers: Record<DateFormatComponents, (date: Date) => string> = {
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

/**
 *
 */
export const formatDate = (date: Date, text: string, ...components: DateFormatComponents[]) => {
    const work = text.split("");
    let j = 0;
    for (let i = 0; i < work.length; i ++) {
        if (work[i] !== "%") continue;
        if (components.length <= j) continue;
        work[i] = formatDateComponent(date, components[j]);
        j++;
    }
    return work.join("");
};

/**
 *
 */
export const formatDateDifference = (difference_ms: number, text: string, ...components: DateFormatComponents[]) => {

};

/**
 *
 */
export const formatDateComponent = (date: Date, component: DateFormatComponents) => {
    if (!(component in formatHelpers)) return "";
    return formatHelpers[component](date);
}