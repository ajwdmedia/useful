import { writable } from "svelte/store";
import { onMount } from "svelte";
import { BROWSER } from "esm-env";

export const currentTime = writable<Date>();

export const init = () => {
    onMount(() => {
        refresh();
        if (!BROWSER) return;
        const interval = setInterval(refresh, 1000);
        return () => {
            clearInterval(interval);
        }
    });
    return currentTime;
}

const refresh = () => {
    currentTime.set(new Date());
}

refresh();