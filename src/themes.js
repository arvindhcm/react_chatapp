// Five palettes from https://www.happyhues.co/ (palettes 3, 1, 4, 10, 13).
// Each theme's tokens live in src/index.css under [data-theme="<id>"];
// `swatches` here are only for the preview chips in the theme selector.
export const THEMES = [
  { id: "sky",      name: "Sky",      source: 3,  swatches: ["#fffffe", "#094067", "#3da9fc", "#ef4565"] },
  { id: "aqua",     name: "Aqua",     source: 1,  swatches: ["#fffffe", "#181818", "#4fc4cf", "#994ff3"] },
  { id: "midnight", name: "Midnight", source: 4,  swatches: ["#16161a", "#242629", "#7f5af0", "#2cb67d"] },
  { id: "forest",   name: "Forest",   source: 10, swatches: ["#004643", "#abd1c6", "#f9bc60", "#e16162"] },
  { id: "ember",    name: "Ember",    source: 13, swatches: ["#0f0e17", "#a7a9be", "#ff8906", "#e53170"] },
];

export const DEFAULT_THEME = "sky";
const STORAGE_KEY = "chatapp-theme";

export function getSavedTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (THEMES.some(t => t.id === saved)) return saved;
  } catch (e) { /* storage unavailable */ }
  return DEFAULT_THEME;
}

export function applyTheme(id) {
  document.documentElement.setAttribute("data-theme", id);
  try {
    window.localStorage.setItem(STORAGE_KEY, id);
  } catch (e) { /* storage unavailable */ }
}
