<script lang="ts">
  import { themeStore, updateTheme } from "$lib/stores";
  import { themeSlider } from "$lib/utils";
</script>

<div
  use:themeSlider={{ initialValue: $themeStore, callback: updateTheme }}
  class="w-16 p-1 bg-keypad rounded-2xl transition-colors duration-300"
>
  <div data-theme-slider-inner class="cursor-pointer">
    <div data-theme-slider-dot class="w-4 aspect-square rounded-full bg-accent transition-all duration-300" />
  </div>
</div>
