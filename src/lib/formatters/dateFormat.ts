const MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const MONTHS_SHORT = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

const WEEKDAYS = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const WEEKDAY_SHORT = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
const WEEKDAY_UNIQUE = [ "U", "M", "T", "W", "H", "F", "S" ];
const WEEKDAY_CHAR = [ "S", "M", "T", "W", "T", "F", "S" ];

const calculateDateExt = (day: number) => {
    if (day > 10 && day < 20) return "th";
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

/**
 * ## Pattern Components
 * ### Date (using Thursday 2nd April 2026 for demo)
 * #### Days
 * `d`  - numeric ("2")  
 * `dd` - two-digit ("02")  
 * `tt` - extension ("nd") for use in setups like (dtt -> "2nd")  
 * #### Day of Week
 * `W`    - single character ("T")  
 * `WW`   - single character but unique ("H") *thursday is H, sunday is U*  
 * `WWW`  - short ("Thu")  
 * `WWWW` - long ("Thursday")  
 * #### Month 
 * `M`    - numeric ("4")  
 * `MM`   - two-digit ("04")  
 * `MMM`  - short ("Apr")  
 * `MMMM` - long ("April")  
 * #### Year
 * `yyyy` - long ("2026")  
 * `yy`   - short ("26")  
 * ### Time (Using 3:07pm with 5 seconds and 27 milliseconds for demo)
 * #### Hours
 * `h`  - 12-hour numeric (3)  
 * `hh` - 12-hour two-digit (03)  
 * `H`  - 24-hour numeric (15)  
 * `HH` - 24-hour two-digit (15)  
 * `A`  - AM/PM single letter (P)  
 * `AP` - AM/PM (PM)  
 * #### Minutes
 * `m`  - numeric (7)  
 * `mm` - two-digit (07)  
 * #### Seconds
 * `s`  - numeric (5)  
 * `ss` - two-digit (05)  
 * #### Milliseconds
 * `l`   - numeric (27)  
 * `lll` - triad (027), useful for (hh:mm:ss.lll A -> "03:07:05.027 P")  
 */
export const dateFormat = (date: Date, pattern: string): string => {
    const day = date.getDate();
    const weekday = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    const hours12 = hours % 12 || 12;
    const ampm = hours < 12 ? "AM" : "PM";
    const dateExtension = calculateDateExt(day);
    const tokenValue = (token: string): string | null => {
        switch (token) {
            // Day
            case "dd": return day.toString().padStart(2, "0");
            case "d": return day.toString();
            case "tt": return dateExtension;

            // Day of week
            case "WWWW": return WEEKDAYS[weekday];
            case "WWW": return WEEKDAY_SHORT[weekday];
            case "WW": return WEEKDAY_UNIQUE[weekday];
            case "W": return WEEKDAY_CHAR[weekday];

            // Month
            case "MMMM": return MONTHS[month];
            case "MMM": return MONTHS_SHORT[month];
            case "MM": return (month + 1).toString().padStart(2, "0");
            case "M": return (month + 1).toString();

            // Year
            case "yyyy": return year.toString();
            case "yy": return year.toString().slice(-2);

            // Hours
            case "HH": return hours.toString().padStart(2, "0");
            case "H": return hours.toString();
            case "hh": return hours12.toString().padStart(2, "0");
            case "h": return hours12.toString();

            // Minutes
            case "mm": return minutes.toString().padStart(2, "0");
            case "m": return minutes.toString();

            // Seconds
            case "ss": return seconds.toString().padStart(2, "0");
            case "s": return seconds.toString();

            // Milliseconds
            case "l": return milliseconds.toString();
            case "lll": return milliseconds.toString().padStart(3, "0");

            // AM/PM
            case "AP": return ampm;
            case "A": return ampm[0];

            default: return null;
        }
    };

    const tokensByLengthDesc = [
        "MMMM",
        "WWWW",
        "yyyy",
        "MMM",
        "WWW",
        "lll",
        "dd",
        "MM",
        "WW",
        "HH",
        "hh",
        "mm",
        "ss",
        "AP",
        "yy",
        "tt",
        "M",
        "W",
        "d",
        "H",
        "h",
        "A",
        "l",
        "m",
        "s",
    ] as const;

    let output = "";

    parser:
    for (let i = 0; i < pattern.length; ) {
        const character = pattern[i];

        // Escape via backslash
        if (character === "\\") {
            output += pattern[i + 1] ?? "\\";
            i += (i + 1 < pattern.length) ? 2 : 1;
            continue;
        }

        // Token based matcher replaces old regex cascade
        for (const t of tokensByLengthDesc) {
            if (pattern.startsWith(t, i)) {
                const v = tokenValue(t);
                if (v != null) {
                    output += v;
                    i += t.length;
                    continue parser; // break out of this look and continue outside loop
                }
            }
        }

        output += character;
        i++; // do this manually as we don't earlier - not using a traditional "eating" while loop so input string is unchanged
    }

    return output;
}