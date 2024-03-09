<script lang="ts">
    import { page } from "$app/stores";

    let pages = [
        { name: "Dashboard", path: "/" },
        { name: "Settings", path: "/settings" }
    ]

</script>

<div class="px-6 py-3 hidden md:flex justify-start content-center border-b border-foreground/5">
    <a href="/" class="mr-6 flex items-center space-x-2">
		<span class="hidden font-bold sm:inline-block">
            Encodarr
		</span>
	</a>
    <nav class="flex text-sm">
        {#each pages as { name, path }}
            {#if $page.url.pathname === path}
                <div 
                    class="mx-2 px-3.5 py-1.5 rounded-full bg-foreground/15"
                >
                    <a
                        href={path}
                        class="self-center transition-colors text-foreground hover:text-foreground/80"
                    >
                        {name}
                    </a>
                </div>
            {:else}
                <div
                    class="mx-2 px-3.5 py-1.5 bg-transparent"
                >
                    <a
                        href={path}
                        class="self-center transition-colors text-foreground/60 hover:text-foreground/80"
                    >
                        {name}
                    </a>
                </div>
            {/if}
        {/each}
    </nav>
</div>
