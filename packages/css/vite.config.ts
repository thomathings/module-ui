import glob from "glob";
import { defineConfig } from "vite";

const TARGET_PATH = process.env.TARGET_PATH;

function setEntryFiles() {
  const entries: Record<string, string> = {};
  const paths = glob.sync(`${process.cwd()}/src/${TARGET_PATH}/*.css`);
  paths.forEach((path) => {
    // ex. button, colors
    const name = path.slice(path.lastIndexOf("/") + 1);
    entries[name] = path;
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
    emptyOutDir: true,
    outDir: `${TARGET_PATH}`,
    lib: {
      name: "@module-ui/css",
      entry: {
        ...setEntryFiles(),
      },
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
