import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import cleanup from "rollup-plugin-cleanup";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/boilerplate-typescript.cjs.cjs",
      format: "cjs",
    },
    {
      file: "dist/boilerplate-typescript.cjs.min.cjs",
      format: "cjs",
      plugins: [terser({ format: { comments: false } })],
    },
    {
      file: "dist/boilerplate-typescript.umd.js",
      format: "umd",
      name: "boilerplate-typescript",
    },
    {
      file: "dist/boilerplate-typescript.umd.min.js",
      format: "umd",
      name: "boilerplate-typescript",
      plugins: [terser({ format: { comments: false } })],
    },
    {
      file: "dist/boilerplate-typescript.amd.js",
      format: "amd",
      name: "boilerplate-typescript",
    },
    {
      file: "dist/boilerplate-typescript.amd.min.js",
      format: "amd",
      name: "crossecore",
      plugins: [terser({ format: { comments: false } })],
    },
    {
      file: "dist/boilerplate-typescript.es.js",
      format: "es",
    },
    {
      file: "dist/boilerplate-typescript.es.min.js",
      format: "es",
      plugins: [terser({ format: { comments: false } })],
    },
  ],
  plugins: [typescript(), cleanup({ comments: "none" })],
};
