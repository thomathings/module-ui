import glob from "glob";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

function setEntryFiles() {
  const entries: Record<string, string> = {};
  const paths = glob.sync(`${process.cwd()}/src/*`);
  const names = paths.map((path) => {
    return path.split("src/")[1];
  });
  names.forEach((name) => {
    if (name === "index.ts") {
      entries["index"] = `${process.cwd()}/src/index.ts`;
    } else {
      entries[`${name}`] = `${process.cwd()}/src/${name}/${name}.tsx`;
    }
  });
  return entries;
}

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      name: "@module-ui/react",
      entry: setEntryFiles(),
      formats: ["cjs"],
    },
  },
});
