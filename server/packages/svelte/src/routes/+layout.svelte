<script lang="ts">
    import "../style/global.pcss";
    import { ModeWatcher } from "mode-watcher";
    import { Nav } from "$lib/nav";
</script>

<ModeWatcher />
<Nav />
<slot />
