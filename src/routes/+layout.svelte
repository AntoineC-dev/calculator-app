<script lang="ts">
  import "../app.css";
  import { initTheme, themeStore } from "$lib/stores";
  import type { ThemeStore } from "$lib/types";
  import Header from "$lib/components/header/Header.svelte";
  export let data: { themeStore: ThemeStore | null };
  $: initTheme(data.themeStore);
</script>

<div id="app-wrapper" data-theme={$themeStore.theme}>
  <div id="app-content">
    <Header />
    <slot />
  </div>
</div>
