<script>
    import AppStyle from "svelte-doric/core/app-style"
    import baseline from "svelte-doric/core/baseline"
    import theme from "svelte-doric/core/theme/tron"

    import Record from "./comp/record.svelte"
</script>

<AppStyle {baseline} {theme} />

<Record />
