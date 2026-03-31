import { on } from "svelte/events";
import { createAttachmentKey, type Attachment } from "svelte/attachments";

export const autosubmit = (run: () => void | any): Attachment => {
    return (element) => {
        const off = on(element, "keyup", (e) => {
            if (!(e instanceof KeyboardEvent)) return;
            if (e.key.toLowerCase() === "enter") run();
        });

        return () => {
            off();
        }
    }
}

export const reusableAutosubmit = (run: () => any | void) => {
    return {
        [createAttachmentKey()]: autosubmit(run)
    }
}