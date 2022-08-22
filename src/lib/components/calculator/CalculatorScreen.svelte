<script lang="ts">
  import { calculatorStore } from "$lib/stores";
  import { formatOperand } from "$lib/helpers";

  $: previous = `${formatOperand($calculatorStore.previousOperand)} ${$calculatorStore.operation}`;
  $: current = formatOperand($calculatorStore.currentOperand);
</script>

<div
  class="bg-screen min-h-[6.5rem] xs:min-h-[7.5rem] md:min-h-[8.5rem] rounded-lg sm:rounded-xl py-4 px-6 md:px-8 flex flex-col gap-1 items-end justify-center word-wrap-break transition-colors duration-300"
>
  {#if !!$calculatorStore.previousOperand}
    <div class="text-2xl md:text-3xl tracking-wide leading-none max-w-fit text-right">{previous}</div>
  {/if}
  {#if !!$calculatorStore.currentOperand}
    <div class="text-4xl md:text-5xl tracking-wide leading-none max-w-fit text-right">{current}</div>
  {/if}
</div>
