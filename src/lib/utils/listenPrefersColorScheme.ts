import type { ThemeStore } from "$lib/types";

interface Props {
  themeStore: ThemeStore;
  updateTheme: (store: ThemeStore) => void;
}

export function listenPrefersColorScheme(_: HTMLElement, props: Props) {
  const el = window.matchMedia("(prefers-color-scheme: dark)");
  let listening = false;
  const onPrefersColorSchemeChange = (e: MediaQueryListEvent) => {
    if (!props.themeStore.usePrefers) return;
    if (e.matches && props.themeStore.theme !== "dark") props.updateTheme({ theme: "dark", usePrefers: true });
    if (!e.matches && props.themeStore.theme !== "light") props.updateTheme({ theme: "light", usePrefers: true });
  };

  const start = () => {
    if (listening) return;
    el.addEventListener("change", onPrefersColorSchemeChange);
    listening = true;
  };

  const stop = () => {
    if (!listening) return;
    el.removeEventListener("change", onPrefersColorSchemeChange);
    listening = false;
  };

  props.themeStore.usePrefers && start();

  return {
    update(newProps: Props) {
      props = newProps;
      props.themeStore.usePrefers ? start() : stop();
    },
    destroy() {
      stop();
    },
  };
}
