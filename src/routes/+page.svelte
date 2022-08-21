<script lang="ts">
  import { addDigit, clearCalculator, removeDigit, setOperation, setResult } from "$lib/stores";
  import { keyboardNavigation } from "$lib/utils";
  import CalculatorScreen from "$lib/components/calculator/CalculatorScreen.svelte";
  import CalculatorKeypad from "$lib/components/calculator/CalculatorKeypad.svelte";
</script>

<svelte:head>
  <title>Frontend Mentor | Calculator app</title>
</svelte:head>

<main class="pt-8" use:keyboardNavigation={{ addDigit, clearCalculator, removeDigit, setOperation, setResult }}>
  <CalculatorScreen />
  <CalculatorKeypad />
</main>
