<script lang="ts">
  import { calculatorStore } from "$lib/stores";
  import { formatOperand } from "$lib/helpers";

  $: previous = `${formatOperand($calculatorStore.previousOperand)} ${$calculatorStore.operation}`;
  $: current = formatOperand($calculatorStore.currentOperand);
</script>

<div
  class="bg-light-screen dark:bg-dark-screen purple:bg-purple-screen h-24 rounded-lg px-6 py-1 flex flex-col gap-1 items-end justify-center word-wrap-break"
>
  <div class="text-3xl font-bold tracking-wide leading-none max-w-fit">{previous}</div>
  <div class="text-4xl font-bold tracking-wide leading-none max-w-fit">{current}</div>
</div>
