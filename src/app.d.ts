import type { Theme, ThemeStore } from "$lib/types";
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
  namespace App {
    interface Locals {
      themeStore: ThemeStore | null;
    }
    // interface Platform {}
    // interface PrivateEnv {}
    // interface PublicEnv {}
  }
}
