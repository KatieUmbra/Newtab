<script lang="ts">
    import Icon from "@iconify/svelte";
	const open = (url: string) => {
		window.open(url, "_blank")?.focus();
	}
</script>

<div class="dui-join-vertical">
	<div class="dui-join-horizontal dui-join-item mb-1.5">
		<button class="dui-btn dui-join-item" on:click={() => {open("https://mail.google.com")}}>
			<Icon icon="bxl:gmail" class="h-10 w-10"></Icon>
		</button>
		<button class="dui-btn dui-join-item" on:click={() => {open("https://outlook.live.com")}}>
			<Icon icon="ph:microsoft-outlook-logo-fill" class ="h-10 w-10"/>
		</button>
		<button class="dui-btn dui-join-item" on:click={() => {open("https://www.reddit.com")}}>
			<Icon icon="ic:baseline-reddit" class ="h-10 w-10"/>
		</button>
		<button class="dui-btn dui-join-item">
			<Icon icon="mdi:youtube" class ="h-10 w-10"/>
		</button>
		<button class="dui-btn dui-join-item">
			<Icon icon="mdi:calendar" class ="h-10 w-10"/>
		</button>
		<button class="dui-btn dui-join-item">
			<Icon icon="tabler:chess-filled" class ="h-10 w-10"/>
		</button>
	</div>
	<div class="dui-join-horizontal dui-join-item">
		<button class="dui-btn dui-join-item">
			<Icon icon="simple-icons:microsoftonedrive" class="h-10 w-10"></Icon>
		</button>
		<button class="dui-btn dui-join-item">
			<Icon icon="fa6-brands:google-drive" class ="h-10 w-10"/>
		</button>
		<button class="dui-btn dui-join-item">
			<Icon icon="simple-icons:roblox" class ="h-10 w-10"/>
		</button>
		<button class="dui-btn dui-join-item">
			<Icon icon="mdi:github" class ="h-10 w-10"/>
		</button>
		<button class="dui-btn dui-join-item">
			<Icon icon="mdi:pinterest" class ="h-10 w-10"/>
		</button>
		<button class="dui-btn dui-join-item">
			<Icon icon="ant-design:amazon-circle-filled" class ="h-10 w-10"/>
		</button>
	</div>
</div>

<style lang="scss">

</style>
