<script lang="ts">
  import { calculatorStore } from "$lib/stores";
  import { formatOperand } from "$lib/helpers";

  $: previous = `${formatOperand($calculatorStore.previousOperand)} ${$calculatorStore.operation}`;
  $: current = formatOperand($calculatorStore.currentOperand);
</script>

<div
  class="bg-light-screen dark:bg-dark-screen purple:bg-purple-screen min-h-[6.5rem] rounded-lg p-4 flex flex-col gap-2 items-end justify-center word-wrap-break"
>
  <div class="text-2xl font-bold tracking-wide leading-none max-w-fit text-right">{previous}</div>
  <div class="text-4xl font-bold tracking-wide leading-none max-w-fit text-right">{current}</div>
</div>
