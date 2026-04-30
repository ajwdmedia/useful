<script lang="ts">

    import { fade } from "svelte/transition";
    import type { Snippet } from "svelte";
    import { scale, type ScaleParams } from "svelte/transition";

    const modalScale = ((node: Element, params: ScaleParams = {}) => {
        return scale(node, Object.assign({ duration: 150, start: 0.92, opacity: 1 }, params));
    }) satisfies typeof scale;

    type Props = {
        lock?: boolean,
        open?: boolean,
        trigger?: Snippet<[ open: () => void ]>,
        children: Snippet<[ close: () => void, scale: typeof scale ]>
    }
    let { open = $bindable(false), trigger, children, lock }: Props = $props();

</script>

{#if trigger}
    {@render trigger(() => open = true)}
{/if}
{#if open}
    <div transition:fade={{ duration: 150 }} class="absolute z-2 inset-0 bg-black/60 grid place-items-center backdrop-blur-sm" onclick={(e) => { if (e.target === e.currentTarget && !lock) open = false }}>
        {@render children?.(() => open = false, modalScale)}
    </div>
{/if}