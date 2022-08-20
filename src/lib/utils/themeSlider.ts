import type { ThemeValue } from "$lib/types";

interface Props {
  initialValue: ThemeValue;
  callback: (value: ThemeValue) => void;
}

export function themeSlider(wrapper: HTMLElement, props: Props) {
  const NB_STEPS = 3;
  let currValue = props.initialValue;
  const inner = wrapper.querySelector("[data-theme-slider-inner]") as HTMLElement;
  const dot = wrapper.querySelector("[data-theme-slider-dot]") as HTMLElement;

  const getThemeValueFromIndex = (index: number): ThemeValue => {
    if (index === 0) return "dark";
    if (index === 1) return "light";
    return "purple";
  };

  const generateSteps = () => {
    let steps = [];
    const step = inner.clientWidth / NB_STEPS;
    for (let i = 0; i < NB_STEPS; i++) {
      const maxOffset = Math.round(step * (i + 1));
      steps.push({ maxOffset, index: i, value: getThemeValueFromIndex(i) });
    }
    return steps;
  };
  const STEPS = generateSteps();

  const getXRelativeOffset = (e: MouseEvent) => {
    const rect = (e.target as Element).getBoundingClientRect();
    return Math.round(e.clientX - rect.left);
  };

  const translateDot = (index: number) => {
    dot.style.transform = `translateX(${index * (STEPS[0].maxOffset + 1)}px)`;
  };

  const move = (e: MouseEvent) => {
    const xOffset = getXRelativeOffset(e);
    for (let i = 0; i < STEPS.length; i++) {
      const step = STEPS[i];
      if (xOffset > step.maxOffset) continue;
      if (step.value === currValue) break;
      currValue = step.value;
      props.callback(step.value);
      translateDot(step.index);
      break;
    }
  };

  inner.addEventListener("click", move);

  (function init() {
    for (let i = 0; i < STEPS.length; i++) {
      const step = STEPS[i];
      if (step.value !== currValue) continue;
      translateDot(step.index);
      break;
    }
  })();

  return {
    destroy() {
      inner.removeEventListener("click", move);
    },
  };
}
