<script lang="ts">

</script>

<slot />

<style lang="scss">

    :global(html, body) {
        background: black;
        margin: 0;
        padding: 0;
        color: white;
        width: 100%;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    :global(*) {
        box-sizing: border-box;
        font: inherit;
        color: inherit;
    }

    :global(.grid) {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 0.5rem;
        row-gap: 0.5rem;
    }

    .item {
        background: black;
        min-height: 150px;
        border-radius: 7px;
        border: 1px solid #555555;
        padding: 1rem;
        text-align: left;
        color: white !important;
        text-decoration: none;
    }

    .center {
        text-align: center;
    }

    .left {
        text-align: left;
    }

    .bold {
        font-weight: bold;
    }

    .italic {
        font-style: italic;
    }

    .s1, h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
    }

    .s2, h2 {
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    .s3, h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .s4, h4 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    a {
        text-decoration: none;
    }

    @media only screen and (min-width: 2500px) {
        div.container {
            width: 100%;
            padding-left: calc(50vw - 900px);
            padding-right: calc(50vw - 900px);
        }

        body {
            font-size: 2em;
        }
    }

    @media only screen and (min-width: 1200px) and (max-width: 2500px) {
        div.container {
            width: 100%;
            padding-left: calc(50vw - 500px);
            padding-right: calc(50vw - 500px);
        }
    }

    @media only screen and (min-width: 800px) and (max-width: 1200px) {
        div.container {
            width: 100%;
            padding-left: calc(50vw - 300px);
            padding-right: calc(50vw - 300px);
        }
    }

    @media only screen and (min-width: 480px) and (max-width: 800px) {
        div.container {
            width: 100%;
            padding-left: 5vw;
            padding-right: 5vw;
        }
    }

    @media only screen and (max-width: 480px) {
        div.container {
            width: 100%;
            padding-left: 5vw;
            padding-right: 5vw;
        }
    }

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        appearance: none;
        overflow-x: visible;
        width: 8px;
        height: 8px;
    }

    div::-webkit-scrollbar-thumb {
        background: #aaaaaa;
        border-radius: 4px;
        width: 8px;
        height: 8px;
    }

</style>