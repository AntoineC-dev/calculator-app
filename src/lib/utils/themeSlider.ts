import type { Theme, ThemeStore } from "$lib/types";
import { getIndexValueFromTheme, getNextTheme, getThemeValueFromIndex } from "$lib/helpers";

interface Props {
  themeStore: ThemeStore;
  callback: (store: ThemeStore) => void;
}

export function themeSlider(wrapper: HTMLElement, props: Props) {
  const NB_STEPS = 3;
  let currIndex = getIndexValueFromTheme(props.themeStore.theme);
  const inner = wrapper.querySelector("[data-theme-slider-inner]") as HTMLElement;
  const dot = wrapper.querySelector("[data-theme-slider-dot]") as HTMLElement;

  const generateSteps = () => {
    let steps = [];
    const step = inner.clientWidth / NB_STEPS;
    for (let i = 0; i < NB_STEPS; i++) {
      const maxOffset = Math.round(step * (i + 1));
      steps.push({ maxOffset, value: getThemeValueFromIndex(i) });
    }
    return steps;
  };

  const STEPS = generateSteps();

  const getXRelativeOffset = (e: MouseEvent) => {
    const rect = (e.currentTarget as Element).getBoundingClientRect();
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
      if (i === currIndex) break;
      currIndex = i;
      props.callback({ theme: step.value, usePrefers: false });
      translateDot(currIndex);
      break;
    }
  };

  const onArrowKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      const { index, theme } = getNextTheme(currIndex, e.key === "ArrowLeft" ? "left" : "right");
      currIndex = index;
      props.callback({ theme, usePrefers: false });
      translateDot(currIndex);
    }
  };

  inner.addEventListener("click", move);
  document.addEventListener("keydown", onArrowKey);

  const onUpdate = (newTheme: Theme) => {
    const index = getIndexValueFromTheme(newTheme);
    if (index === currIndex) return;
    currIndex = index;
    translateDot(currIndex);
  };

  (function init() {
    for (let i = 0; i < STEPS.length; i++) {
      if (i !== currIndex) continue;
      translateDot(i);
      break;
    }
  })();

  return {
    update(newProps: Props) {
      onUpdate(newProps.themeStore.theme);
      props = newProps;
    },
    destroy() {
      inner.removeEventListener("click", move);
      document.removeEventListener("keydown", onArrowKey);
    },
  };
}
