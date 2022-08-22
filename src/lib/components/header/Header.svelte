<script lang="ts">
  import { themeStore, updateTheme } from "$lib/stores";
  import { themeSlider } from "$lib/utils";
</script>

<header use:themeSlider={{ themeStore: $themeStore, callback: updateTheme }} class="flex justify-between items-center">
  <!-- Title -->
  <h1 class="text-4xl">calc</h1>
  <!-- Theme Switcher -->
  <div class="flex flex-col items-end gap-1">
    <div class="flex items-center w-16 px-1">
      <button
        aria-label="Choose dark theme"
        disabled={$themeStore.theme === "dark"}
        on:click={() => updateTheme({ theme: "dark", usePrefers: false })}
        class="text-xs leading-none flex-1 text-center">1</button
      >
      <button
        aria-label="Choose light theme"
        disabled={$themeStore.theme === "light"}
        on:click={() => updateTheme({ theme: "light", usePrefers: false })}
        class="text-xs leading-none flex-1 text-center">2</button
      >
      <button
        aria-label="Choose purple theme"
        disabled={$themeStore.theme === "purple"}
        on:click={() => updateTheme({ theme: "purple", usePrefers: false })}
        class="text-xs leading-none flex-1 text-center">3</button
      >
    </div>
    <div class="flex items-center gap-6">
      <span class="uppercase text-xs tracking-wider">Theme</span>
      <div
        role="button"
        tabindex="0"
        aria-label="Change the theme"
        data-theme-slider-container
        class="w-16 p-1 cursor-pointer bg-keypad rounded-2xl transition-colors duration-300"
      >
        <div data-theme-slider-inner>
          <div data-theme-slider-dot class="w-4 aspect-square rounded-full bg-accent transition-all duration-300" />
        </div>
      </div>
    </div>
  </div>
</header>
