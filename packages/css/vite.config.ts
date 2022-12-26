import glob from "glob";
import { defineConfig } from "vite";

function setEntryFiles() {
  const entries: Record<string, string> = {};
  const paths = glob.sync(`${process.cwd()}/components/*`, {
    ignore: ["**/*.module.css*", "**/*.css.js"],
  });
  const names = paths.map((path) => {
    return path.split("components/")[1];
  });
  names.forEach((name) => {
    entries[`${name}.css`] = `${process.cwd()}/components/${name}/${name}.module.scss`;
  });
  return entries;
}

export default defineConfig({
  css: {
    modules: {
      generateScopedName(name) {
        return name;
      },
    },
  },
  build: {
    emptyOutDir: false,
    outDir: "components",
    lib: {
      name: "@module-ui/css",
      entry: setEntryFiles(),
      formats: ["cjs"],
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        exports: "named",
      },
    },
  },
});
