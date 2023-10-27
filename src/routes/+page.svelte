<script lang="ts">
	import Icon from "@iconify/svelte";
    import Links from "./links.svelte";
	let searchBox = ""

	const createSearch = (
		base: string, 
		replace: string, 
		edit: (it: string) => string = (it) => it
	) => {
		return () => {
			const baseUrl = base + searchBox.replaceAll(" ", replace);
			const url = edit(baseUrl);
			window.open(url, "_blank")?.focus();
			searchBox = "";
			menu.open = false;
		}
	}
	const search = {
		default: createSearch("https://duckduckgo.com/?q=", "+"),
		youtube: createSearch("https://www.youtube.com/results?search_query=", "+"),
		reddit: createSearch("https://duckduckgo.com/?q=", "+", 
			(it) => {return it + "+site:reddit.com&ia=web"})
	}

	let menu = {
		open: false
	}
</script>

<svelete:head>
	<title>New Tab</title>
</svelete:head>

<div class="grid place-items-center h-screen w-screen overflow-hidden absolute">
	<div class="w-2/5 grid justify-items-center">
		<!-->Search Bar</-->
		<form on:submit|preventDefault={search.default} class="w-full p-0">
			<div class="grid grid-rows-2 w-full search-container place-items-stretch">
				<input
					bind:value={searchBox}
					placeholder="Search on Duck Duck Go" 
					class="bar dui-input-accent px-1 w-full text-neutral text-lg rounded"/>
				<button class="icon h-min w-full aspect-square dui-btn grid 
								place-items-center overflow-hidden"
						on:click|preventDefault={search.default}>
					<Icon icon="material-symbols:search" class="w-6 h-6"/>
				</button>
				<button
					on:click|preventDefault={() => menu.open = !menu.open}
					class="more icon h-full w-full aspect-square dui-btn grid place-items-center">
					<Icon icon="bi:three-dots-vertical"/>
				</button>
			</div>
		</form>
		<!-->Search Options</-->
		{#if menu.open}
			<div class="absolute p-2 dui-join top-1/4 right-1/4">
				<p 
					class="dui-join-item bg-secondary grid place-items-center rounded
						   px-1.5 text-base-100">
					Search With:
				</p>
				<button on:click={search.reddit} class="dui-btn dui-join-item">
					<Icon class="w-6 h-6" icon="ic:baseline-reddit"/>
				</button>
				<button on:click={search.youtube} class="dui-btn dui-join-item">
					<Icon class="w-6 h-6" icon="mdi:youtube"/>
				</button>
			</div>
		{/if}
		<Links></Links>
	</div>
</div>

<style lang="scss">
	.search-container {
		grid-template-columns: auto 1% 4% 1% 7%;
		grid-template-areas: "bar e0 more e1 icon";
		.bar {
			grid-area: bar;
		}
		.icon {
			grid-area: icon;
		}
		.more {
			grid-area: more;
		}
	}
</style>
