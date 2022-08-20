export const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export const formatOperand = (operand: string | null) => {
  if (operand === null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal === undefined) return INTEGER_FORMATTER.format(parseFloat(integer));
  return `${INTEGER_FORMATTER.format(parseFloat(integer))}.${decimal}`;
};
