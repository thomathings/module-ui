import { defineConfig } from 'vite'
import glob from 'glob'

function setEntryFiles() {
  const entries: Record<string,string> = {}
  const paths = glob.sync(`${process.cwd()}/components/*`)
  const names = paths.map((path) => {
    return path.split("components/")[1]
  })
  names.forEach((name) => {
    entries[`${name}.css`] = `${process.cwd()}/components/${name}/${name}.module.scss`
  })
  return entries
}

export default defineConfig({
  css: {
    modules: {
      generateScopedName(name) {
        return name
      },
    }
  },
  build: {
    outDir: "dist",
    lib: {
      name: "@module-ui/css",
      entry: setEntryFiles(),
      formats: ['cjs'],
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        exports: "named",
      }
    }
  }
})