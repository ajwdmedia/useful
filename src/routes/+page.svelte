<script>

    import {formatDate} from "$lib/formatters";
    import {onMount} from "svelte";

    let date = $state("");

    onMount(() => {
        date = formatDate(new Date(), "%, %% of % % at %:%:%%", "weekday_long", "day_numeric", "day_extension", "month_long", "year_numeric", "hour_period_numeric", "minute_dual", "second_dual", "hour_extension");
    })

</script>

<h1>{date}</h1>