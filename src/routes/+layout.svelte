<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { themeStore } from "$lib/stores";
  import { handleThemeClass } from "$lib/helpers";
  import Header from "$lib/components/header/Header.svelte";

  let root: HTMLElement;
  onMount(() => {
    root = document.documentElement;
  });
  $: handleThemeClass(root, $themeStore);
</script>

<Header />

<slot />
