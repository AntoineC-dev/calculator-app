<script lang="ts">
  export let type: "btn-accent" | "btn-muted" | "btn-neutral" = "btn-neutral";
  export let label: string;
  export let callback: () => void;
  export let span: number = 1;
</script>

<div
  style:grid-column="span {span}"
  class="{type} w-full h-[4rem] rounded-md pb-1 bg-btn-shadow transition-colors duration-300"
>
  <button
    on:click={callback}
    class="w-full rounded-md h-full grid place-content-center bg-btn-background hover:brightness-125 transition-all duration-300"
  >
    <span class="inline-flex pt-1 uppercase text-3xl text-btn-text transition-colors duration-300">{label}</span>
  </button>
</div>
