<script lang="ts">
  import { themeStore, updateTheme } from "$lib/stores";
  import { themeSlider } from "$lib/utils";
</script>

<div
  use:themeSlider={{ initialValue: $themeStore, callback: updateTheme }}
  class="w-16 p-1 bg-light-keypad dark:bg-dark-keypad purple:bg-purple-screen rounded-2xl"
>
  <div data-theme-slider-inner class="cursor-pointer">
    <div
      data-theme-slider-dot
      class="w-4 aspect-square rounded-full bg-light-accent dark:bg-dark-accent purple:bg-purple-accent transition-all duration-300"
    />
  </div>
</div>
