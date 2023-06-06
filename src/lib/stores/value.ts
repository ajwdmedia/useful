import { writable, type Writable } from "svelte/store";

type NonUndefined<T> = T extends undefined ? never : T;

export type ValueWritable<T> = Writable<T> & { value: () => T };

export function valueWritable<T> (init?: T): ValueWritable<T> {
    let value: T = init ?? undefined as T;
    let wr = writable(init);
    return {
        subscribe: wr.subscribe,
        set: (newValue: T) => {
            wr.set(value = newValue)
        },
        update(fn: (oldValue: T) => T) {
            if (value === undefined) throw new Error("Value not set before update")
            wr.set(value = fn(value));
        },
        value: () => { if (value === undefined) { throw new Error("Value not set") } return value; }
    };
}