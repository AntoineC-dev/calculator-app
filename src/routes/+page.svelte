<script lang="ts">
  import CalculatorScreen from "$lib/components/calculator/CalculatorScreen.svelte";
  import CalculatorKeypad from "$lib/components/calculator/CalculatorKeypad.svelte";
</script>

<svelte:head>
  <title>Frontend Mentor | Calculator app</title>
</svelte:head>

<main class="pt-8">
  <CalculatorScreen />
  <CalculatorKeypad />
</main>
