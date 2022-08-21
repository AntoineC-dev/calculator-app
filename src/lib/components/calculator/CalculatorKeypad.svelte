<script lang="ts">
  import { addDigit, clearCalculator, removeDigit, setOperation, setResult } from "$lib/stores";
  import CalculatorButton from "./CalculatorButton.svelte";
</script>

<div
  class="p-6 md:p-8 mt-6 rounded-lg sm:rounded-xl bg-keypad grid grid-cols-4 grid-rows-5 gap-2 xs:gap-4 md:gap-6 transition-colors duration-300"
>
  <CalculatorButton label="7" callback={() => addDigit("7")} />
  <CalculatorButton label="8" callback={() => addDigit("8")} />
  <CalculatorButton label="9" callback={() => addDigit("9")} />
  <CalculatorButton label="Del" type="btn-muted" callback={removeDigit} />
  <CalculatorButton label="4" callback={() => addDigit("4")} />
  <CalculatorButton label="5" callback={() => addDigit("5")} />
  <CalculatorButton label="6" callback={() => addDigit("6")} />
  <CalculatorButton label="+" callback={() => setOperation("+")} />
  <CalculatorButton label="1" callback={() => addDigit("1")} />
  <CalculatorButton label="2" callback={() => addDigit("2")} />
  <CalculatorButton label="3" callback={() => addDigit("3")} />
  <CalculatorButton label="-" callback={() => setOperation("-")} />
  <CalculatorButton label="." callback={() => addDigit(".")} />
  <CalculatorButton label="0" callback={() => addDigit("0")} />
  <CalculatorButton label="÷" callback={() => setOperation("÷")} />
  <CalculatorButton label="x" callback={() => setOperation("x")} />
  <CalculatorButton label="Reset" type="btn-muted" callback={clearCalculator} span={2} />
  <CalculatorButton label="=" type="btn-accent" callback={setResult} span={2} />
</div>
