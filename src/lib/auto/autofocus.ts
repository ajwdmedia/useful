import { createAttachmentKey, type Attachment } from "svelte/attachments";

export const autofocus: Attachment = (element) => {
    if ("focus" in element && typeof element.focus === "function") {
        element.focus();
    }
}


export const reusableAutofocus = () => {
    return {
        [createAttachmentKey()]: autofocus
    }
}