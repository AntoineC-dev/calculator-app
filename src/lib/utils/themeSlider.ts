import type { Theme, ThemeStore } from "$lib/types";
import { getIndexValueFromTheme, getNextTheme, getThemeValueFromIndex } from "$lib/helpers";

interface Props {
  themeStore: ThemeStore;
  callback: (store: ThemeStore) => void;
}

export function themeSlider(wrapper: HTMLElement, props: Props) {
  const container = wrapper.querySelector("[data-theme-slider-container]") as HTMLElement;
  const inner = wrapper.querySelector("[data-theme-slider-inner]") as HTMLElement;
  const dot = wrapper.querySelector("[data-theme-slider-dot]") as HTMLElement;

  let currIndex = getIndexValueFromTheme(props.themeStore.theme);

  const translateDot = (index: number) => {
    const position = index * (inner.clientWidth / 2) - index * (dot.clientWidth / 2);
    dot.style.transform = `translateX(${position}px)`;
    currIndex = index;
  };

  const move = () => {
    const { index, theme } = getNextTheme(currIndex, "right");
    props.callback({ theme, usePrefers: false });
    translateDot(index);
    currIndex = index;
  };

  const onArrowKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      const { index, theme } = getNextTheme(currIndex, e.key === "ArrowLeft" ? "left" : "right");
      props.callback({ theme, usePrefers: false });
      translateDot(index);
    }
  };

  const onEnterKey = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      move();
    }
  };

  const onUpdate = (newTheme: Theme) => {
    const index = getIndexValueFromTheme(newTheme);
    if (index === currIndex) return;
    translateDot(index);
  };

  container.addEventListener("click", move);
  container.addEventListener("keydown", onEnterKey);
  document.addEventListener("keydown", onArrowKey);
  currIndex !== 0 && translateDot(currIndex);

  return {
    update(newProps: Props) {
      onUpdate(newProps.themeStore.theme);
      props = newProps;
    },
    destroy() {
      container.removeEventListener("click", move);
      container.removeEventListener("keydown", onEnterKey);
      document.removeEventListener("keydown", onArrowKey);
    },
  };
}
