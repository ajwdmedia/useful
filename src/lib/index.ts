// Reexport your entry components here
export { copyToClipboard } from "./copy"; 
export * as stores from "./stores";
export { currentTime, init as initClock } from "./clock/store";

export { autofocus, reusableAutofocus } from "./auto/autofocus.js";
export { autosubmit, reusableAutosubmit } from "./auto/autosubmit.js";

export { dateFormat } from "./formatters/dateFormat"
export { setupTitle, useTitle } from "./components/title";
export { default as Modal } from "./components/Modal.svelte";