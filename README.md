# Some Useful Stuff.

**BREAKING: This is now Svelte 5 ONLY.**  
Some of the APIs have changed and now all export from root as well.

### Copy
Usage:  
`copyToClipboard(content: string) => Promise`  

### Clock
Usage:  
`const time: Writable<Date> = initClock()`  
You should run this at top level and top level within the page, it uses onMount under the hood. For children you can import `currentTime` which is the same store.  

### Date Formatting
Usage:  
`const str: string = dateFormat(date: Date, pattern: string)`  
Pattern understands a decent amount of codes, uses \ as escape. Components are what you expect and also provided in editor via jsDoc.  

### Title
Usage:
In root `+layout.svelte` use `const { title } = setupTitle(fallback: string)` and then setup a `<svelte:head>` block containing a `<title>` that consumes the store.  
Then in pages you can simply `useTitle` at top-level to update the title. Consider re-exporting that from $lib.  

### Autofocus
Usage:  
Either directly attach `{@attach autofocus}` or spread `{ ...reusableAutofocus() }`.

### Autosubmit
Usage:  
Either directly attach `{@attach autosubmit(callback: () => any)}` or spread `{ ...reusableAutosubmit(callback: () => any) }`.

### Modal
Not the best modal provider in the world but I have found it to be versatile and good enough and as long as you aren't doing a lot of `position: ...` work then it should be fine.  
**Relies on Tailwind 4 for styles.**  
```svelte
<Modal>
    {@snippet trigger(open)}
        <button onclick={open}>Click Me!</button>
    {/snippet}
    {@snippet children(close, scale)}
        <div class="..." transition:scale>
            <...>
        </div>
    {/snippet}
</Modal>
```
Props:  
`open?: boolean` - bindable, optional. may be used to programmatically update the state. defaults to false on page load but will change whenever `open()` or `close()` are called by the snippets.  
`lock?: boolean` - optional. the darker background usually acts as a close state when clicked off, this prevents that function from working. `close()` still works. can also be toggled while open.  

Snippets:  
`trigger(open)` - optional. if not present then nothing will be rendered until you use the `open` prop to programmatically open the modal. The open function has signature `() => void`.  
`children(close, scale)`. rendered within the modal. this will be place centered due to using a `grid place-items-center`, but otherwise cares very little about how your markup looks inside. **you must provide your own modal root and styles**, this supplies only the backdrop/positioner. `close()` will close the modal and has signature `() => void`. The `scale` parameter matches (and is derived from) `import { scale } from "svelte/transition`, but supplies a couple of default parameters that work well with the animation on the backdrop. you can of course override these as you'd like, use a base transition instead, or simply not bother with any.  