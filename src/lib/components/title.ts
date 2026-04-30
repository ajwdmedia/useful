import { getContext, setContext, onMount } from "svelte";
import { writable, type Writable } from "svelte/store";

export type TitleContext = {
    title: Writable<string>
}

const TITLE_CONTEXT = Symbol();
export const setupTitle = (fallback: string) => {
    const ctx = {
        title: writable<string>(fallback),
    } satisfies TitleContext
    setContext(TITLE_CONTEXT, ctx);
    return ctx;
}

export const useTitle = (title: string) => {
    const ctx = getContext(TITLE_CONTEXT) as TitleContext;
    onMount(() => {
        ctx.title.set(title);
    })
    return ctx;
}

