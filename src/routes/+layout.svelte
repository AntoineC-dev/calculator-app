<script lang="ts">
  import "../app.css";
  import { initTheme, themeStore } from "$lib/stores";
  import type { Theme } from "$lib/types";
  import Header from "$lib/components/header/Header.svelte";
  export let data: { theme: Theme | null };
  $: initTheme(data.theme);
</script>

<div id="app-wrapper" data-theme={$themeStore}>
  <div id="app-content">
    <Header />
    <slot />
  </div>
</div>
