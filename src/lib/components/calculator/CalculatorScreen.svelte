<script lang="ts">
  import { calculatorStore } from "$lib/stores";
  import { formatOperand } from "$lib/helpers";

  $: previous = `${formatOperand($calculatorStore.previousOperand)} ${$calculatorStore.operation}`;
  $: current = formatOperand($calculatorStore.currentOperand);
</script>

<div
  class="bg-screen min-h-[6.5rem] rounded-lg p-4 flex flex-col gap-2 items-end justify-center word-wrap-break transition-colors duration-300"
>
  {#if !!$calculatorStore.previousOperand}
    <div class="text-2xl tracking-wide leading-none max-w-fit text-right">{previous}</div>
  {/if}
  {#if !!$calculatorStore.currentOperand}
    <div class="text-4xl tracking-wide leading-none max-w-fit text-right">{current}</div>
  {/if}
</div>
