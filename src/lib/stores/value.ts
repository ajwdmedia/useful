import { writable, type Writable } from "svelte/store";

export type ValueWritable<T> = Writable<T> & { value: () => T };

export function valueWritable<T> (init: T): ValueWritable<T> {
    let value = init;
    let wr = writable(init);
    return {
        subscribe: wr.subscribe,
        set: (newValue: T) => {
            wr.set(value = newValue)
        },
        update(fn: (oldValue: T) => T) {
            wr.set(value = fn(value));
        },
        value: () => value
    };
}