import type {DateDifferenceFormatComponents, DateFormatComponents} from "./constants";
import {formatHelpers, formatHelpersUTC, formatDifferences, makeFakeDateFromDifference, type FakeDate} from "./dateHelpers";

/**
 * Format the specified Date in the local timezone, using the provided template string.
 * Use the % character in the template string, then provide a list of Date formatting types. They will be substituted in the order that they are provided. Non-% characters will be left as is.
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
 * Format the specified Date in UTC using the provided template string.
 * Use the % character in the template string, then provide a list of Date formatting types. They will be substituted in the order that they are provided. Non-% characters will be left as is.
 */
export const formatUTCDate = (date: Date, text: string, ...components: DateFormatComponents[]) => {
    const work = text.split("");
    let j = 0;
    for (let i = 0; i < work.length; i ++) {
        if (work[i] !== "%") continue;
        if (components.length <= j) continue;
        work[i] = formatUTCDateComponent(date, components[j]);
        j++;
    }
    return work.join("");
};

/**
 * Format the specified millisecond difference using the provided template string.
 * Use the % character in the template string, then provide a list of Date formatting types. They will be substituted in the order that they are provided. Non-% characters will be left as is.
 * Note: Months, Hour Periods (12 Hour Time), and Weekdays are not supported by this method.
 */
export const formatDateDifference = (difference_ms: number, text: string, ...components: DateDifferenceFormatComponents[]) => {
    const work = text.split("");
    let date = makeFakeDateFromDifference(difference_ms);
    let j = 0;
    for (let i = 0; i < work.length; i ++) {
        if (work[i] !== "%") continue;
        if (components.length <= j) continue;
        work[i] = formatDifferenceComponent(date, components[j]);
        j++;
    }
    return work.join("");
};

/**
 * Format one component of the specified date in the local timezone.
 */
export const formatDateComponent = (date: Date, component: DateFormatComponents) => {
    if (!(component in formatHelpers)) return "";
    return formatHelpers[component](date);
}

/**
 * Format one component of the specified date in UTC.
 */
export const formatUTCDateComponent = (date: Date, component: DateFormatComponents) => {
    if (!(component in formatHelpersUTC)) return "";
    return formatHelpersUTC[component](date);
}

export const formatDifferenceComponent = (date: FakeDate, component: DateDifferenceFormatComponents) => {
    if (!(component in formatDifferences)) return "";
    return formatDifferences[component](date);
}