<script lang="ts">
  import ThemeSlider from "./ThemeSlider.svelte";
</script>

<header class="flex justify-between items-center">
  <!-- Title -->
  <h1 class="text-4xl font-bold">calc</h1>
  <!-- Theme Switcher -->
  <div class="flex flex-col items-end gap-1">
    <div class="flex items-center justify-between w-16 px-2">
      <span class="font-bold text-xs leading-none">1</span>
      <span class="font-bold text-xs leading-none">2</span>
      <span class="font-bold text-xs leading-none">3</span>
    </div>
    <div class="flex items-center gap-6">
      <span class="uppercase text-xs tracking-wider font-bold">Theme</span>
      <ThemeSlider />
    </div>
  </div>
</header>
